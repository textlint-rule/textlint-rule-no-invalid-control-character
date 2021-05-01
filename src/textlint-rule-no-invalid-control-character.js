// MIT © 2017 azu
"use strict";

const execall = require("execall");
import { CONTROL_CHARACTERS } from "./CONTROL_CHARACTERS";

/**
 * Convert char to \uXXXX
 * @param {string} str
 * @return {string}
 */
const unicodeEscape = (str) => {
    return str.replace(/./g, (c) => {
        return `\\u${`000${c.charCodeAt(0).toString(16)}`.substr(-4)}`;
    });
};

const getName = (char) => {
    const matchChar = CONTROL_CHARACTERS.find((CONTROL_CHARACTER) => CONTROL_CHARACTER.code === char);
    if (!matchChar) {
        return "";
    }
    return matchChar.name;
};

const DEFAULT_OPTION = {
    // Define allow char code like `\u0019`
    allow: [],
    // Check code if it is true
    checkCode: false,
    // Check image title and alt text if it is true
    checkImage: true
};

const reporter = (context, options = {}) => {
    const { Syntax, RuleError, getSource, fixer, report } = context;
    const allow = options.allow || DEFAULT_OPTION.allow;
    const checkCode = options.checkCode !== undefined ? options.checkCode : DEFAULT_OPTION.checkCode;
    const checkImage = options.checkImage !== undefined ? options.checkImage : DEFAULT_OPTION.checkImage;
    const checkNode = (node) => {
        const text = getSource(node);
        // Ignore \r \n \t
        const controlCharacterPattern = /([\x00-\x08\x0B\x0C\x0E-\x1F\x7F])/g;
        /**
         * @type {Array<{match:string, sub:string[], index:number}>}
         */
        const results = execall(controlCharacterPattern, text);
        results.forEach((result) => {
            const index = result.index;
            const char = result.sub[0];
            // if allow the `char`, ignore it
            if (allow.some((allowChar) => allowChar === char)) {
                return;
            }
            const name = getName(char);
            const ruleError = new RuleError(`Found invalid control character(${name} ${unicodeEscape(char)})`, {
                index: index,
                fix: fixer.removeRange([index, index + 1])
            });
            report(node, ruleError);
        });
    };
    return {
        [Syntax.Str](node) {
            checkNode(node);
        },
        [Syntax.CodeBlock](node) {
            if (checkCode) {
                checkNode(node);
            }
        },
        [Syntax.Code](node) {
            if (checkCode) {
                checkNode(node);
            }
        },
        [Syntax.Image](node) {
            if (checkImage) {
                checkNode(node);
            }
        }
    };
};

module.exports = {
    linter: reporter,
    fixer: reporter
};
