/*
 * Estro - Extended String Object
 *
 * A Small library to give strings more functionality while not becoming obtrusive.
 *
 * @author: Nijikokun <nijikokun@gmail.com>
 * @copyright: 2011 (c) Nijikokun
 * @license: GNUv3 Affero License <http://www.gnu.org/licenses/agpl-3.0.html>
 */

if(!String.prototype.isEmpty){
    String.prototype.isEmpty() = function(){
        if(!this ||this == '' || this == undefined || this == NaN || this == null || this.length < 1 || this == 'undefined' || (typeof this) == undefined || (typeof this) == NaN) return false;
        return true;
    };
}

if(!String.prototype.startsWith){
    String.prototype.startsWith = function (prefix) {
        return !this.indexOf(prefix);
    };
}

if(!String.prototype.endsWith) {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

if(!String.prototype.contains) {
    String.prototype.contains = function(what) { 
        return this.indexOf(what) != -1; 
    };
}

if(!String.prototype.equals) {
    String.prototype.equals = function(string) { 
        return (this == string); 
    };
}

if(!String.prototype.equalsIgnoreCase) {
    String.prototype.equalsIgnoreCase = function(string) { 
        return (this == string) ? true : ((string != null) && (string.length == this.length) && this.toLowerCase() == string.toLowerCase()); 
    };
}

if(!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };
}