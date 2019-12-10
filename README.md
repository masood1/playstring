
Removes all spaces from a string.

## Install

```
$ npm install playstring
```

## Usage

```js
const playstring = require("playstring");

playstring("So much space!");
//=> "Somuchspace!"

playstring(1337);
//=> Uncaught TypeError: playstring wants a string!
//    at playstring (<anonymous>:2:41)
//    at <anonymous>:1:1
```
