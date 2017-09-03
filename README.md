# About
console-styles is a module used for applying ANSI codes to strings, this allows for customized output/logging to the console/process.stdout. This module is very similar to chalk but it has no dependencies and there is much less code as it takes advantage of ES6 features, specifically the Proxy constructor. All styles and colours can be chained and then wrapped around a specific string.

Comes with some TypeScript definitions.

# Install
`--save` is not necessary if you don't have a `package.json`.

```
npm install --save console-styles
```

# Example
```js
const styler = require("console-styles");

// log underlined red text to the console
console.log(styler.red.underline("hola amigos");

// log black text with cyan background to the console
console.log(styler.black.bgCyan("wow");

// More freedom, allows for multiple styles in one line
console.log(styler.black.bgCyan("this is great Kappa", "hello"));

console.log(styler.red("nested", styler.blue("colours")));
```

# Styles
All styles can be chained.

```js
const styler = require("console-styles");

console.log(styler.reset("Removes styles"));
console.log(styler.bright("Makes text bold/bright"));
console.log(styler.bold("Makes text bold/bright"));
console.log(styler.dim("Darkens text"));
console.log(styler.underline("Underline text"));
console.log(styler.reverse("Inverse style"));
console.log(styler.inverse("Inverse style"));
console.log(styler.black("Black coloured text"));
console.log(styler.grey("Grey coloured text"));
console.log(styler.gray("Grey coloured text"));
console.log(styler.red("Red coloured text"));
console.log(styler.green("Green coloured text"));
console.log(styler.yellow("Yellow coloured text"));
console.log(styler.blue("Blue coloured text"));
console.log(styler.magenta("Magenta coloured text"));
console.log(styler.cyan("Cyan coloured text"));
console.log(styler.white("White coloured text"));
console.log(styler.bgBlack("Black background text", "multiple", "params"));
console.log(styler.bgRed("Red background text"));
console.log(styler.bgGreen("Green background text"));
console.log(styler.bgYellow("Yellow background text"));
console.log(styler.bgBlue("Blue background text"));
console.log(styler.bgMagenta("Magenta background text"));
console.log(styler.bgCyan("Cyan background text"));
console.log(styler.bgWhite("White background text"));
```