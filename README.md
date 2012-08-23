[![build status](https://secure.travis-ci.org/Nijikokun/Estro.png)](http://travis-ci.org/Nijikokun/Estro)

     ______              
    (  /        _/_      
      /--   (   /  _   __
    (/____//_)_(__/ (_(_)

Estro is a *tiny* Extended Prototype Object helper that enables you to get more out of the native functionality in javascript.
It doesn't override any Prototypal functions, just extends it where it can. So if you have pre-made extentions, it will respect them.

Beautiful Sugar Syntax. Made right.

Site & Annotated Source
--------------

**Site**: <http://nijikokun.github.com/Estro/>

**Pycco Docs**: <http://nijikokun.github.com/Estro/docs/>

Demo
----

You can view a demo <a href="http://jsfiddle.net/kYsWv/1/">here</a>.
    
Extensions
----------

<h3>Object</h3>
    hop(item) -- Quick access hasOwnProperty
    each(fn, context) -- Loops through each property and applies fn
    cacheResults(results) -- Useful for Functions, math equations and the like.
    isEmpty, isElement, isNumber, isArray, isString, isObject, isBoolean
    isNaN, isNull, isUndefined, isArguments, isRegExp, isString, isDate
    toArray

<h3>Array</h3>
    each, some, every, map, filter, reduce, reduceRight
    
<h3>Number</h3>
    abs, round(precision), ceil, floor, modulo(n) / mod, pad(place, sign, base)
    map(fromMin, fromMax, toMin, toMax), limit(min, max) / clamp
    isEven, isOdd, isMultipleOf(n)
    toNumber / toInt, toRadians / toRad, toDegrees / toDeg
    format(places, thousands, decimal)
    ordinalize / ord, charCode / chr

<h3>Strings</h3>

**compareTo(String)**: Compare one string to another through lex.

    'hello'.compareTo('hello') // Returns Zero (Integer).

**equals(String)**: Check one string against another.

    'hello'.equals('hello') // Returns True (boolean)

**equalsIgnoreCase(String)**: Check one string against another without case sensitivity.

    'hello'.equalsIgnoreCase('HeLLo') // Returns True (Boolean)
    
**startsWith(Prefix)**: Checks to see if the string begins with the `Prefix`

    'hello'.startsWith('h') // Returns True (Boolean)
    
**endsWith(Suffix)**: Checks to see if this string ends with the `Suffix`

    'hello'.endsWith('o') // Returns True (Boolean)
    
**trim()**: Trim Trailing and Leading whitespace from this string.

    '  hello  '.trim() // Returns 'hello' (String)

**trimLeft()**: Trim leading whitespace from string.

    ' hello'.trimLeft() // Returns 'hello' (String)

**trimRight()**: Trim trailing whitespace from string.

    'hello '.trimRight() // Returns 'hello' (String)
    
**trimNumeric()**: Removes all numeric characters. `0-9`

    'hello0123'.trimNumeric() // Returns 'hello' (String)
    
**trimNonAlpha**: Removes all non-alpha characters. `A-z`

    'hell^o0123'.trimNumeric() // Returns 'hello' (String)
    
**trimNonAlphaNumeric**: Removes all characters except alpha-numeric. `A-z 0-9`

    'hello^0123'.trimNumeric() // Returns 'hello0123' (String)
    
**contains(String)**: Verifies whether the current string contains `String`

    'hello'.contains('ll') // Returns True (Boolean)
    
**isEmpty()**: Checks whether or not the `string` is `empty`

    'hello'.isEmpty() // Returns False (Boolean)
    
**isBlank()**: Check whether the string is `blank` (Null, Undefined, Empty)

    ''.isBlank() // Returns True (Boolean), It can do more than empty strings though.

**reverse()**: Reverses the current strings characters

    'hello'.reverse() // Returns 'olleh' (String)

**remove(Start, End)**: Remove characters between the `start` and `end`

    'heallo'.remove(2,3) // Returns 'hello' (String)

**insert(String, Indice)**: Insert string starting at `Indice`

    'hllo'.insert('e', 1) // Returns 'hello' (String)
    
**pop(Amount)**: Pop characters from start of the string. `Amount` defaults to 1.

    'hhello'.pop() // Returns 'hello' (String)
    'hello you'.pop(6) // Returns 'you' (String)

**chop(Amount)**: Pop characters from end of the string. `Amount` defaults to 1.

    'helloo'.chop() // Returns 'hello' (String)
    'hello you'.chop(4) // Returns 'hello' (String)

**repeat(n)**: Repeat string `n` times

    'hello'.repeat(3) // Returns 'hellohellohello' (String)

**capitalize()**: Capitalize the first word.

    'hello world'.capitalize() // Returns 'Hello world' (String)

**uncapitalize()**: Uncapitalize the first word.

    'Hello world'.uncapitalize() // Returns 'hello world' (String)

**capitalizeWords()**: Capitalize each word in the string.

    'hello world'.capitalizeWords() // Returns 'Hello World' (String)

**uncapitalizeWords()**: Uncapitalize each word in the string.

    'hello world'.uncapitalizeWords() // Returns 'hello world' (String)

**isUpperCaseAt(Indice)**: Check to see if the string is uppercase at a certain character.

    'Hello'.isUpperCaseAt(0) // Returns True (Boolean)

**isLowerCaseAt(Indice)**: 

    'Hello'.isLowerCaseAt(1) // Returns True (Boolean)

**and more...**

  * string.camelize() *CamelCase string, hello there -> helloThere* Returns String
  * string.dasherize() *Hyphenates string, hello there -> hello-there* Returns String
  * string.underscore() *Underscores string, hello there -> hello_there* Returns String
  * string.bind(data) *Small template layer. Ex: "Hi %{name}".bind({'name': 'Estro'});" Outputs: Hi Estro*
  * string.extract(regex, n) *Extract data into an array based on regex and group(n). Returns Array*
  * string.toInt() *Converts the string into its numeric value. Returns Integer*
  * string.toHash() *Converts the string it a hashcode, based on Java. Returns Integer*
  * string.pad(str, left, right)
  * string.padLeft(str, amount)
  * string.padRight(str, amount)

Licensing?
----------

Copyright Nijikokun 2011-2012 <nijikokun@gmail.com>

AOL License <http://aol.nexua.org>