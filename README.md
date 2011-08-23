     ______              
    (  /        _/_      
      /--   (   /  _   __
    (/____//_)_(__/ (_(_)

Estro is a tiny Extended String Object helper enables you to get more out of the string class.

Usage:

    var string = "Hello";

    if (!string.isEmpty()) alert(string);
    if (string.equals("Hello")) alert("Hi :D!");
    if (string.equalsIgnoreCase("hello")) alert("Hello again!");
    if (string.startsWith("H")) alert("Starts with H!");
    if (string.endsWith("ello")) alert("Ends with ello!");
    if (string.contains("e")) alert(string + " contains an e! Who knew?");
    alert("  trimmed  ".trim());

You can view a demo <a href="http://jsfiddle.net/kYsWv/1/">here</a>.
    
Extensions
----------

Estro contains the following string extensions (Unless they already exist; Estro is meant to be un-obtrusive):

  * string.compareTo(string) *Compare one string to another*
  * string.equals(string) *Check one string against another. Returns: Boolean*
  * string.equalsIgnoreCase(string) *Check one string against another without case sensitivity. Returns: Boolean*
  * string.startsWith(prefix) *Check to see if a string starts with the given string. Returns: Boolean*
  * string.endsWith(suffix) *Check to see if a string ends with the given string. Returns: Boolean*
  * string.contains(needle) *Check to see if a string contains a given string. Returns Boolean*
  * string.trim() *Trim the string of whitespace. Returns: String*
  * string.trimLeft() *Trim the left of the string of whitespace. Returns: String*
  * string.trimRight() *Trim the right of the string of whitespace. Returns: String*
  * string.trimNumeric() *Returns: String*
  * string.trimNonAlpha() *Returns: String*
  * string.trimNonNumeric() *Returns: String*
  * string.trimNonAlphaNumeric() *Returns: String*
  * string.isEmpty() *Check to see if the string is empty, and really empty. Returns Boolean*
  * string.isBlank() *Check to see if the string is undefined, or null. Returns Boolean*
  * string.reverse() *Reverses string. IE: Hello -> olleH*
  * string.remove(start, end) *Remove characters between the `start` and `end`. Returns String*
  * string.insert(string, indice) *Insert string starting at Indice. Returns String*
  * string.chop(amount) *Pop characters from end of the string. Amount defaults to 1. Returns String*
  * string.repeat(n) *Repeat string n times*
  * string.capitalize() *Capitalize the first word. Returns String*
  * string.uncapitalize() *Uncapitalize the first word. Returns String*
  * string.capitalizeWords() *Capitalize each word in the string. Returns String*
  * string.uncapitalize() *Uncapitalize each word in the string. Returns String*
  * string.isUppercaseAt(indice) *Check to see if the string is uppercase at a certain character. Returns Boolean*
  * string.isLowercaseAt(indice) *Check to see if the string is lowercase at a certain character. Returns Boolean*
  * string.camelize() *CamelCase string, hello there -> helloThere. Returns String*
  * string.bind(data) *Small template layer. Ex: "Hi %{name}".bind({'name': 'Estro'});" Outputs: Hi Estro*
  * string.extract(regex, n) *Extract data into an array based on regex and group(n). Returns Array*
  * string.toInt() *Converts the string into its numeric value. Returns Integer*
  * string.toHash() *Converts the string it a hashcode, based on Java. Returns Integer*
  * string.guid() *Generates Unique ID string*

<h3>In the future?</h3>

Hopefully, in the future I will extend this to work with other objects and not just strings.

<h3>Licensing?</h3>

Copyright Nijikokun 2011 <nijikokun@gmail.com>

AOL License <http://aol.nexua.org>