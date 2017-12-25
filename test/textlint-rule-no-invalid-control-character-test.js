// MIT © 2017 azu
"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
const rule = require("../src/textlint-rule-no-invalid-control-character");
import { INVALID_CONTROL_CHARACTERS } from "../src/CONTROL_CHARACTERS";

const invalid = INVALID_CONTROL_CHARACTERS.map(character => {
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
        ...invalid
    ]
});
