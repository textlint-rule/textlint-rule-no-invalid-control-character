// MIT © 2017 azu
"use strict";
const CONTROL_CHARACTERS = [
    {
        code: "\u0001",
        name: "START OF HEADING"
    },
    {
        code: "\u0002",
        name: "START OF TEXT"
    },
    {
        code: "\u0003",
        name: "END OF TEXT"
    },
    {
        code: "\u0004",
        name: "END OF TRANSMISSION"
    },
    {
        code: "\u0005",
        name: "ENQUIRY"
    },
    {
        code: "\u0006",
        name: "ACKNOWLEDGE"
    },
    {
        code: "\u0007",
        name: "BELL"
    },
    {
        code: "\u0008",
        name: "BACKSPACE"
    },
    {
        code: "\u0009",
        name: "CHARACTER TABULATION"
    },
    {
        code: "\u000A",
        name: "LINE FEED (LF)"
    },
    {
        code: "\u000B",
        name: "LINE TABULATION"
    },
    {
        code: "\u000C",
        name: "FORM FEED (FF)"
    },
    {
        code: "\u000D",
        name: "CARRIAGE RETURN (CR)"
    },
    {
        code: "\u000E",
        name: "SHIFT OUT"
    },
    {
        code: "\u000F",
        name: "SHIFT IN"
    },
    {
        code: "\u0010",
        name: "DATA LINK ESCAPE"
    },
    {
        code: "\u0011",
        name: "DEVICE CONTROL ONE"
    },
    {
        code: "\u0012",
        name: "DEVICE CONTROL TWO"
    },
    {
        code: "\u0013",
        name: "DEVICE CONTROL THREE"
    },
    {
        code: "\u0014",
        name: "DEVICE CONTROL FOUR"
    },
    {
        code: "\u0015",
        name: "NEGATIVE ACKNOWLEDGE"
    },
    {
        code: "\u0016",
        name: "SYNCHRONOUS IDLE"
    },
    {
        code: "\u0017",
        name: "END OF TRANSMISSION BLOCK"
    },
    {
        code: "\u0018",
        name: "CANCEL"
    },
    {
        code: "\u0019",
        name: "END OF MEDIUM"
    },
    {
        code: "\u001A",
        name: "SUBSTITUTE"
    }
];

// except
const INVALID_CONTROL_CHARACTERS = CONTROL_CHARACTERS.filter((CONTROL_CHARACTER) => {
    const code = CONTROL_CHARACTER.code;
    return code !== "\r" && code !== "\n" && code !== "\t";
});
export { INVALID_CONTROL_CHARACTERS, CONTROL_CHARACTERS };
