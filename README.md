# @textlint-rule/textlint-rule-no-invalid-control-character [![Actions Status: test](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/workflows/test/badge.svg)](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/actions?query=workflow%3A"test")

textlint rule check invalid control character in the document.

## Allow

- `\r`
- `\n`
- `\t`

## Not Allow

Other [control character](https://en.wikipedia.org/wiki/Control_character "Control character").

For example, following control character is not allowed.

- ``(`\u0010` DATA LINK ESCAPE)
- ``(`\u0019` ND OF MEDIUM)
- etc...

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @textlint-rule/textlint-rule-no-invalid-control-character

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "@textlint-rule/no-invalid-control-character": true
    }
}
```

Via CLI

```
textlint --rule @textlint-rule/no-invalid-control-character README.md
```

## Options

- `allow`: `string[]`
    - Define allow control characters
- `checkCode`: `boolean`
    - Default: `false`
    - Check code if it is `true`
- `checkImage`: `boolean`
    - Default: `true` (v2+)
    - Check image title and alt texts if it is `true`

```json
{
    "rules": {
        "@textlint-rule/no-invalid-control-character": {
            "allow": [
                "\v"
            ]
        }
    }
}
```

## Reference

- [JavaScript character escape sequences · Mathias Bynens](https://mathiasbynens.be/notes/javascript-escapes "JavaScript character escape sequences · Mathias Bynens")
- [azu/check-invalid-control-characters: Check invalid control characters like `\u0008` in plain text.](https://github.com/azu/check-invalid-control-characters "azu/check-invalid-control-characters: Check invalid control characters like `\u0008` in plain text.")

## Changelog

See [Releases page](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
