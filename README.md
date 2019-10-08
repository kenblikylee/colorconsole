# colorconsole

![GitHub package.json version](https://img.shields.io/github/package-json/v/kenblikylee/colorconsole)
[![license](https://img.shields.io/github/license/kenblikylee/colorconsole)](https://github.com/kenblikylee/colorconsole/blob/master/LICENSE)

colorful console.log!

## installation

``` sh
npm install --save-dev @kenworks/colorconsole
```

## usage

### colorconsole.log(text, color, bgcolor, effect)

print colorful text in console.

- text: string, text content to print.
- color: string or int, color of text.
- bgcolor: string or int, color of background.
- effect: string, it can be 'bold', 'underline', 'blink', 'reverse', 'hide'.

### colorconsole.text(text, color, bgcolor, effect)

return colorful text with ansi-escape sequences. which `colorconsole.log` invokes and has the same parameters.

### colorconsole.plate()

convenience to display color plate in console.

### color and bgcolor

both can be these 8 colors (when it's string): 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'. 

or, you can use integer which from 0 to 255.

### example 1: use `colorconsole.log()` and `colorconsole.text()`

save the following code to `test.js`.

``` js
var colorconsole = require('@kenworks/colorconsole')

colorconsole.log('hello world!', 'red', null, 'bold')

colorconsole.log('hello world!', 'green', null, 'underline')

colorconsole.log('hello world!', 'blue', null, 'blink')

colorconsole.log('hello world!', 'magenta', null, 'hide')

colorconsole.log('hello world!', 'yellow', null, 'reverse')

colorconsole.log('hello world!', 'magenta', 'cyan')

colorconsole.log('hello world!', 228, null, 'blink')

colorconsole.log('hello world!', 9, 228, 'blink')

colorconsole.log('hello world!', null, null, 'reverse')

colorconsole.log('hello world!', 300, 600)

colorconsole.log('hello world!', 100)

colorconsole.log('hello world!', null, 100)

colorconsole.log('hello world!', 200, 300, 'blink', 'I\'m %s!', 'ken')

console.log(colorconsole.text('hello world!', 100, null, 'bold'), 'I\'m ken!')
```

run in terminal:

``` sh
node test.js
```

you can see like this:

![](http://cdn.kenblog.top/colorconsole_log.gif)

### example 2: display color plate

``` js
var colorconsole = require('@kenworks/colorconsole')

colorconsole.plate()
```

![](http://cdn.kenblog.top/colorconsole_plate.png)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019 kenblikylee
