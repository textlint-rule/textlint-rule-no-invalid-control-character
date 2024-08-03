// MIT © 2017 azu
"use strict";

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

/**
 *
 * @param {import("@textlint/types").TextlintRuleContext} context
 * @param options
 * @returns {{}}
 */
const reporter = (context, options = {}) => {
    const { Syntax, RuleError, getSource, fixer, report, locator } = context;
    const allow = options.allow || DEFAULT_OPTION.allow;
    const checkCode = options.checkCode !== undefined ? options.checkCode : DEFAULT_OPTION.checkCode;
    const checkImage = options.checkImage !== undefined ? options.checkImage : DEFAULT_OPTION.checkImage;
    const checkNode = (node) => {
        const text = getSource(node);
        // Ignore \r \n \t
        const asciiControlCharacters = "\x00-\x08\x0B\x0C\x0E-\x1F\x7F";
        const c1ControlCharacters = "\x80-\x89\x8A-\x9F";
        const bidiFormattingCharacters = "\u202A-\u202E";
        const controlCharacterPattern = new RegExp(
            `([${asciiControlCharacters}${c1ControlCharacters}${bidiFormattingCharacters}])`,
            "g"
        );

        /**
         * @type {Array<{match:string, sub:string[], index:number}>}
         */
        const matches = text.matchAll(controlCharacterPattern);
        for (const match of matches) {
            const index = match.index;
            const char = match[1];
            // if allow the `char`, ignore it
            if (allow.some((allowChar) => allowChar === char)) {
                continue;
            }
            const name = getName(char);
            const ruleError = new RuleError(`Found invalid control character(${name} ${unicodeEscape(char)})`, {
                index: index,
                fix: fixer.removeRange([index, index + 1])
            });
            report(node, ruleError);
        }
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
