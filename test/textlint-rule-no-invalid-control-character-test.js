// MIT © 2017 azu
"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
const rule = require("../src/textlint-rule-no-invalid-control-character");
import { INVALID_CONTROL_CHARACTERS } from "../src/CONTROL_CHARACTERS";

const invalid = INVALID_CONTROL_CHARACTERS.map((character) => {
    return {
        text: `${character.code}:${character.name}`,
        output: `:${character.name}`,
        errors: [
            {
                index: 0
            }
        ]
    };
});
tester.run("textlint-rule-no-invalid-control-character", rule, {
    valid: [
        "Ich ♥ Bücher",
        "new line \n",
        "tab \t",
        "rn \r\n",
        {
            text: "back\v",
            options: {
                allow: ["\v"]
            }
        },
        {
            text: "\u0019",
            options: {
                allow: ["\u0019"]
            }
        },
        {
            text: `\`var value = "\u0008"\``,
            options: {
                checkCode: false
            }
        },
        {
            text: `![textlint logo\u0008](https://textlint.github.io/img/textlint-icon_256x256.png "logo\u0019")`,
            options: {
                checkImage: false
            }
        },
        {
            text: `![textlint logo\u0008](https://textlint.github.io/img/textlint-icon_256x256.png "logo\u0019")`,
            options: {
                checkImage: true,
                allow: ["\u0008", "\u0019"]
            },
            errors: [
                {
                    message: "Found invalid control character(BACKSPACE \\u0008)",
                    index: 15
                },
                {
                    message: "Found invalid control character(END OF MEDIUM \\u0019)",
                    index: 80
                }
            ]
        }
    ],
    invalid: [
        {
            text: "back\v",
            output: "back",
            errors: [
                {
                    index: 4,
                    message: "Found invalid control character(LINE TABULATION \\u000b)"
                }
            ]
        },
        {
            text: `\`var value = "\u0008"\``,
            options: {
                checkCode: true
            },
            errors: [
                {
                    message: "Found invalid control character(BACKSPACE \\u0008)",
                    index: 14
                }
            ]
        },
        {
            text: `
\`\`\`
var value = "\u0008"
\`\`\``,
            options: {
                checkCode: true
            },
            errors: [
                {
                    message: "Found invalid control character(BACKSPACE \\u0008)",
                    index: 18
                }
            ]
        },
        {
            text: `![textlint logo\u0008](https://textlint.github.io/img/textlint-icon_256x256.png "logo\u0019")`,
            errors: [
                {
                    message: "Found invalid control character(BACKSPACE \\u0008)",
                    index: 15
                },
                {
                    message: "Found invalid control character(END OF MEDIUM \\u0019)",
                    index: 80
                }
            ]
        },
        {
            text: `![textlint logo\u0008](https://textlint.github.io/img/textlint-icon_256x256.png "logo\u0019")`,
            options: {
                checkImage: true,
                allow: ["\u0019"]
            },
            errors: [
                {
                    message: "Found invalid control character(BACKSPACE \\u0008)",
                    index: 15
                }
            ]
        },
        ...invalid
    ]
});
