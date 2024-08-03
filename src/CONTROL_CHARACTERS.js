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
    },
    {
        code: "\u001B",
        name: "ESCAPE"
    },
    {
        code: "\u001C",
        name: "INFORMATION SEPARATOR FOUR"
    },
    {
        code: "\u001D",
        name: "INFORMATION SEPARATOR THREE"
    },
    {
        code: "\u001E",
        name: "INFORMATION SEPARATOR TWO"
    },
    {
        code: "\u001F",
        name: "INFORMATION SEPARATOR ONE"
    },
    {
        code: "\u007F",
        name: "DELETE"
    },
    {
        code: "\u0080",
        name: "PADDING CHARACTER"
    },
    {
        code: "\u0081",
        name: "HIGH OCTET PRESET"
    },
    {
        code: "\u0082",
        name: "BREAK PERMITTED HERE"
    },
    {
        code: "\u0083",
        name: "NO BREAK HERE"
    },
    {
        code: "\u0084",
        name: "INDEX"
    },
    {
        code: "\u0085",
        name: "NEXT LINE (NEL)"
    },
    {
        code: "\u0086",
        name: "START OF SELECTED AREA"
    },
    {
        code: "\u0087",
        name: "END OF SELECTED AREA"
    },
    {
        code: "\u0088",
        name: "CHARACTER TABULATION SET"
    },
    {
        code: "\u0089",
        name: "CHARACTER TABULATION WITH JUSTIFICATION"
    },
    {
        code: "\u008A",
        name: "LINE TABULATION SET"
    },
    {
        code: "\u008B",
        name: "PARTIAL LINE FORWARD"
    },
    {
        code: "\u008C",
        name: "PARTIAL LINE BACKWARD"
    },
    {
        code: "\u008D",
        name: "REVERSE LINE FEED"
    },
    {
        code: "\u008E",
        name: "SINGLE SHIFT TWO"
    },
    {
        code: "\u008F",
        name: "SINGLE SHIFT THREE"
    },
    {
        code: "\u0090",
        name: "DEVICE CONTROL STRING"
    },
    {
        code: "\u0091",
        name: "PRIVATE USE ONE"
    },
    {
        code: "\u0092",
        name: "PRIVATE USE TWO"
    },
    {
        code: "\u0093",
        name: "SET TRANSMIT STATE"
    },
    {
        code: "\u0094",
        name: "CANCEL CHARACTER"
    },
    {
        code: "\u0095",
        name: "MESSAGE WAITING"
    },
    {
        code: "\u0096",
        name: "START OF GUARDED AREA"
    },
    {
        code: "\u0097",
        name: "END OF GUARDED AREA"
    },
    {
        code: "\u0098",
        name: "START OF STRING"
    },
    {
        code: "\u0099",
        name: "SINGLE GRAPHIC CHARACTER INTRODUCER"
    },
    {
        code: "\u009A",
        name: "SINGLE CHARACTER INTRODUCER"
    },
    {
        code: "\u009B",
        name: "CONTROL SEQUENCE INTRODUCER"
    },
    {
        code: "\u009C",
        name: "STRING TERMINATOR"
    },
    {
        code: "\u009D",
        name: "OPERATING SYSTEM COMMAND"
    },
    {
        code: "\u009E",
        name: "PRIVACY MESSAGE"
    },
    {
        code: "\u009F",
        name: "APPLICATION PROGRAM COMMAND"
    },
    {
        code: "\u202C",
        name: "POP DIRECTIONAL FORMATTING"
    },
    {
        code: "\u202D",
        name: "LEFT-TO-RIGHT OVERRIDE"
    },
    {
        code: "\u202E",
        name: "RIGHT-TO-LEFT OVERRIDE"
    }
];

// except
const INVALID_CONTROL_CHARACTERS = CONTROL_CHARACTERS.filter((CONTROL_CHARACTER) => {
    const code = CONTROL_CHARACTER.code;
    return code !== "\r" && code !== "\n" && code !== "\t";
});
export { INVALID_CONTROL_CHARACTERS, CONTROL_CHARACTERS };
