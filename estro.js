/*
 * Estro - Extended String Object
 * A Small library to give strings more functionality while not becoming obtrusive.
 *
 * @a: Nijikokun <nijikokun@gmail.com>
 * @c: 2011 (c) Nijikokun
 * @l: AOL License <http://aol.nexua.org>
 */
(function () {
    var Estro = {
        estro: function() {
            return "Version 2.1"
        },
        
        isEmpty: function () {
            return (!this || 0 === this.length);
        },
        
        isBlank: function() {
            return (!this || /^\s*$/.test(this));
        },
        
        compareTo: function (s) {
            var o = this,
                x = o.length,
                z = s.length,
                n = (x < z ? x : z);
                
            for (var i = 0; i < n; i++) {
                var a = o.charCodeAt(i), b = s.charCodeAt(i);
                
                if (a != b) 
                    return (a - b);
            }
            
            return (x - z);
        },
        
        startsWith: function (str) {
            return !this.indexOf(str);
        },
        
        endsWith: function (str) {
            return this.indexOf(str, this.length - str.length) !== -1;
        },
        
        contains: function (n) {
            return this.indexOf(n) != -1;
        },
        
        equals: function (str) {
            return (this == str);
        },
        
        equalsIgnoreCase: function (str) {
            var o = this;
            return (o == str) ? true : ((!str.isEmpty()) && (str.length == o.length) && o.toLowerCase() == str.toLowerCase());
        },
        
        trim: function () {
            return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        },
        
        trimLeft: function () {
            return this.trimLeft ? this.trimLeft() : this.replace(/^\s+/, '');
        },

        trimRight: function () {
            return this.trimRight ? this.trimRight() : this.replace(/\s+$/, '');
        },
        
        trimNonAlpha: function () {
            return this.replace(/[^A-Za-z ]+/g, '');
        },
        
        trimNonAlphaNumeric: function () {
            return this.replace(/[^A-Za-z0-9 ]+/g, '');
        },
        
        trimNonNumeric: function () {
            return this.replace(/[^0-9-.]/g, '');
        },
        
        trimNumeric: function () {
            return this.replace(/[0-9]/g, '');
        },
        
        repeat: function (n) {
            return new Array(n ? n + 1 : 2).join(this);
        },
        
        reverse: function () {
            return this.split('').reverse().join('');
        },

        insert: function (s, i) {
            return this.slice(0, i) + s + this.slice(i);
        },
        
        remove: function (s, e) {
            return this.slice(0, s) + this.slice(e);
        },
        
        chop: function (a) {
            return this.slice(0, a ? a<0 ? a : a*-1 : -1);
        },
        
        capitalize: function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        
        uncapitalize: function () {
            return this.charAt(0).toLowerCase() + this.slice(1);
        },
        
        capitalizeWords: function () {
            return this.replace(/\w+/g, function (w) {
                return w.capitalize();
            });
        },

        uncapitalizeWords: function () {
            return this.replace(/\w+/g, function (w) {
                return w.uncapitalize();
            });
        },

        isUpperCaseAt: function (i) {
            return this.charAt(i).toUpperCase() === this.charAt(i);
        },

        isLowerCaseAt: function (i) {
            return this.charAt(i).toLowerCase() === this.charAt(i);
        },
        
        swapCase: function () {
            return this.replace(/([a-z]+)|([A-Z]+)/g, function (m, l, u) {
                return l ? m.toUpperCase() : m.toLowerCase();
            });
        },
        
        camelize: function() {
            return this.replace(/\W+(.)/g, function (m, l) {
                return l.toUpperCase();
            });
        },
        
        dasherize: function () {
            return this.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
        },
        
        underscore: function () {
            return this.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
        },
        
        bind: function (d) {
            var m, o = this;
            while (m = /%\{\s*([^\}\s]+)\s*\}/.exec(o)) {
                o = o.replace(m[0], d[m[1]] || '??');
            }
            return o;
        },
        
        extract: function (rgx, n) {
            n = (n === undefined) ? 0 : n;
            if (!rgx.global) {
                return this.match(rgx)[n] || '';
            }
            var m, e = [];
            while ((m = rgx.exec(this))) {
                e[e.length] = m[n] || '';
            }
            return e;
        },
        
        guid: function (l) {
            var b = [], c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', cl = c.length;
            
            for (var i = 0; i < (l || 32); i++)
                b[i] = c.charAt(Math.floor(Math.random() * cl));
                
            return b.join('');
        },
        
        toInt: function () {
            for(var b=[],a=0;a<this.length;a++)
                b[a] = this.charCodeAt(a);
                
            return b
        },
        
        toHash: function() {
            var h = 0, l = this.length;
            for (var i = 0; i < l; i++)
                h = 31 * h + this.charCodeAt(i);
            return h; 
        }
    };
    
    for (var e in Estro)
        if (!String.prototype[e]) 
            String.prototype[e] = Estro[e];
})();