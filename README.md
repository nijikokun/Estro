     ______              
    (  /        _/_      
      /--   (   /  _   __
    (/____//_)_(__/ (_(_)

Estro is a tiny Extended String Object helper enables you to get more out of the string class.

Use It:

    var string = "Hello";

    if(!string.isEmpty()) { alert(string); }
    if(string.equals("Hello")) { alert("Hi :D!"); }
    if(string.equalsIgnoreCase("hello")) { alert("Hello again!"); }
    if(string.startsWith("H")) { alert("Starts with H!"); }
    if(string.endsWith("ello")) { alert("Ends with ello!"); }
    if(string.contains("e")) { /* do something else */ }
    alert("  trimmed  ".trim());

<h3>Features</h3>

Estro contains the following string extensions (Unless they already exist; Estro is meant to be un-obtrusive):

  * string.equals(string) *Check one string against another. Returns: Boolean*
  * string.equalsIgnoreCase(string) *Check one string against another without case sensitivity. Returns: Boolean*
  * string.startsWith(prefix) *Check to see if a string starts with the given string. Returns: Boolean*
  * string.endsWith(suffix) *Check to see if a string ends with the given string. Returns: Boolean*
  * string.contains(needle) *Check to see if a string contains a given string. Returns Boolean*
  * string.trim() *Trim the string of whitespace. Returns: String*
  * string.isEmpty() *Check to see if the string is empty, and really empty. Returns Boolean*

<h3>In the future?</h3>

Hopefully, in the future I will extend this to work with other objects and not just strings.

<h3>Licensing?</h3>

Copyright Nijikokun 2011 <nijikokun@gmail.com>

GNUv3 Affero License <http://www.gnu.org/licenses/agpl-3.0.html>