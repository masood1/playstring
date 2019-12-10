
1) playstring = Removes all spaces from a string.
2) titleCase = A string which need to be display as a title
3) spaceCase = Function for deviding word with dash "-" 


## Install

```
$ npm install playstring
```


## Usage

## Function for Removing space from a string  (playstring)

```js
const { playstring } = require("playstring");

playstring("Hello world space!");
// output => "Helloworldspace!"

playstring(1337);
//=> Uncaught TypeError: playstring wants a string!
//    at playstring (<anonymous>:2:41)
//    at <anonymous>:1:1
```

## Function for Title string (titleCase)
```js
import { titleCase } from "playstring";
 
titleCase("aPropertyNameWhichNeedsToBeDisplayedAsATitle");
// output => "A Property Name Which Needs To Be Displayed As A Title"

```

## Function for deviding word with dash "-" 

```js
import { spaceCase } from "playstring";
 
spaceCase("play string");
// output => "play-string"
 
spaceCase("playString");
// output => "play-string"
```