# Number to text converter

Languages implemented:

- [x] English
- [x] Polish
- [x] Lithuanian

## Installation

### npm

```bash
npm install @unknovvn/number-converter
```

### yarn

```bash
yarn add @unknovvn/number-converter
```

### pnpm

```bash
pnpm install @unknovvn/number-converter
```

## Usage

```js
const {
  toEnglish,
  toPolish,
  toLithuanian,
} = require("@unknovvn/number-converter");

const englishConvertedNumber = toEnglish(8); // eight
const polishConvertedNumber = toPolish(8); // osiem
const lithuanianConvertedNumber = toLithuanian(8); // aštuoni
```

## Contributors

- [Andžej Korovacki](https://github.com/unknovvn) - creator and maintainer
