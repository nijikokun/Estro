/*
 * Estro - Extended String Object
 *
 * A Small library to give strings more functionality while not becoming obtrusive.
 *
 * @author: Nijikokun <nijikokun@gmail.com>
 * @copyright: 2011 (c) Nijikokun
 * @license: GNUv3 Affero License <http://www.gnu.org/licenses/agpl-3.0.html>
 */

(function(){
    var methods = {
        isEmpty: function(){
            return (!this || this === '' || this === undefined || this === null || this.length < 1 || this === 'undefined' || (typeof this) === undefined);
        },
        startsWith: function (str) { return !this.indexOf(str); },
        endsWith: function (str) { return this.indexOf(str, this.length - str.length) !== -1; },
        contains: function (n) {  return this.indexOf(n) != -1; },
        equals: function (str) { return (this == str); },
        equalsIgnoreCase: function (str) { var o=this; return (o == str) ? true : ((!str.isEmpty()) && (str.length == o.length) && o.toLowerCase() == str.toLowerCase()); },
        trim: function () { return this.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); },
        repeat: function (n){ return new Array(n?n+1:2).join(this); },
        reverse: function () { return this.split('').reverse().join(''); },
        capitalize: function () { var w=this.split(' '); for(var i=0;i<w.length;i++) { w[i] = w[i].charAt(0).toUpperCase()+w[i].substring(1).toLowerCase(); } return w.join(" "); },
        camelize: function () { return this.replace(/\-(\w)/g, function( $0, $1 ) { return $1.toUpperCase(); }); },
        bind: function (d) { var m,o=this; while ((m = /%\{\s*([^\}\s]+)\s*\}/.exec(o))) { o = o.replace( m[0], d[m[1]] || '??' ); } return o; },
        extract: function (rgx, n) {
            n=(n === undefined)?0:n; if (!rgx.global) { return this.match(rgx)[n] || ''; } var m,e=[]; while((m=rgx.exec(this))) { e[e.length] = m[n] || ''; } return e;
        }
    };
    
    for (var method in methods) {
        if(!String.prototype[method]) String.prototype[method] = methods[method];
    }
})();