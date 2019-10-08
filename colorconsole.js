/**
  * MIT License
  * Copyright (c) 2019 kenblikylee
  * https://github.com/kenblikylee/colorconsole
*/

var colorconsole = (function (logfuc) {
    var fgcolors = {
        black: 30,
        red: 31,
        green: 32,
        yellow: 33,
        blue: 34,
        magenta: 35,
        cyan: 36,
        white: 37
    }
    var bgcolors = {
        black: 40,
        red: 41,
        green: 42,
        yellow: 43,
        blue: 44,
        magenta: 45,
        cyan: 46,
        white: 47
    }
    var effects = {
        bold: 1,
        underline: 4,
        blink: 5,
        reverse: 7,
        hide: 8
    }
    function is_colornum (color) {
        if (color = parseInt(color), !isNaN(color)) {
            if (color >= 0 && (color <= 255)) {
                return true
            }
        }
        return false
    }
    function convert_to_colornum (color) {
        if (color = parseInt(color), !isNaN(color)) {
            if (color >= 0 && (color <= 255)) {
                return color
            } else {
                return Math.abs(color) % 256
            }
        }
        return false
    }
    function colortext (text, color, bgcolor, effect) {
        if (!text) return text

        var vals = []
        if (color) {
            if (color in fgcolors) {
                vals.push(fgcolors[color])
            } else {
                color = convert_to_colornum(color)
                if (color !== false) {
                    vals.push("38;5;" + color)
                }
            }
        }
        if (bgcolor) {
            if (bgcolor in bgcolors) {
                vals.push(bgcolors[bgcolor])
            } else {
                bgcolor = convert_to_colornum(bgcolor)
                if (color !== false) {
                    vals.push("48;5;" + bgcolor)
                }
            }
        }
        if (effect && (effect in effects)) {
            vals.push(effects[effect])
        }
        if (vals.length) {
            var prefix = "\u001b["
            var reset = prefix + "0m"
            text = prefix + vals.join(';') + 'm' + text + reset
        }
        return text
    }
    function colorlog (text, color, bgcolor, effect) {
        var text = colortext(text, color, bgcolor, effect)
        var args = [].slice.call(arguments, 4)
        // args.unshift(text)
        args.push(text)
        return logfuc.apply(null, args)
    }
    function colorplate () {
        function fixwstr(num) {
            num = num + ''
            len = num.length
            if (len == 1) {
                num = '  ' + num
            }
            if (len == 2) {
                num = ' ' + num
            }
            return ' ' + num + ' '
        }
        
        for (var i = 0; i < 16; i++) {
            var line = ''
            for (var j = 0; j < 16; j++) {
                var color = 16 * i + j
                line += colortext(fixwstr(color), color)
            }
            logfuc(line)
        }
        
        for (var i = 0; i < 16; i++) {
            var line = ''
            for (var j = 0; j < 16; j++) {
                var color = 16 * i + j
                line += colortext(fixwstr(color), 'white', color)
            }
            logfuc(line)
        }        
    }
    return {
        text: colortext,
        log: colorlog,
        plate: colorplate
    }
})(console.log)

module.exports = colorconsole
