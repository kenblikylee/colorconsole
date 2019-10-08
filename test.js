var colorconsole = require('./colorconsole')

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

colorconsole.plate()
