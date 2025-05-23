# [Build a Roman Numeral Converter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

| Roman numerals | Arabic numerals |
| :------------: | :-------------: |
|       M        |      1000       |
|       CM       |       900       |
|       D        |       500       |
|       CD       |       400       |
|       C        |       100       |
|       XC       |       90        |
|       L        |       50        |
|       XL       |       40        |
|       X        |       10        |
|       IX       |        9        |
|       V        |        5        |
|       IV       |        4        |
|       I        |        1        |

**Objective:** Build an app that is functionally similar to [https://roman-numeral-converter.freecodecamp.rocks](https://roman-numeral-converter.freecodecamp.rocks).

**User Stories:**

1.  You should have an `input` element with an `id` of `"number"`.
2.  You should have a `button` element with an `id` of `"convert-btn"`.
3.  You should have a `div`, `span` or `p` element with an `id` of `output`.
4.  When you click on the `#convert-btn` element without entering a value into the `#number` element, the `#output` element should contain the text `"Please enter a valid number"`.
5.  When the `#number` element contains the number `-1` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number greater than or equal to 1"`.
6.  When the `#number` element contains the number `4000` or greater and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number less than or equal to 3999"`.
7.  When the `#number` element contains the number `9` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"IX"`.
8.  When the `#number` element contains the number `16` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"XVI"`.
9.  When the `#number` element contains the number `649` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"DCXLIX"`.
10. When the `#number` element contains the number `1023` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"MXXIII"`.
11. When the `#number` element contains the number `3999` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"MMMCMXCIX"`.

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

## Tests

1\. You should have an `input` element with an `id` of `"number"`.

2\. You should have a `button` element with an `id` of `"convert-btn"`.

3\. You should have a `div`, `span`, or `p` element with an `id` of `"output"`.

4\. When you click on the `#convert-btn` element without entering a value into the `#number` element, the `#output` element should contain the text `"Please enter a valid number"`.

5\. When the `#number` element contains the number `-1` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number greater than or equal to 1"`.

6\. When the `#number` element contains the number `4000` or greater and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number less than or equal to 3999"`.

7\. When the `#number` element contains the number `9` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"IX"`.

8\. When the `#number` element contains the number `16` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"XVI"`.

9\. When the `#number` element contains the number `649` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"DCXLIX"`.

10\. When the `#number` element contains the number `1023` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"MXXIII"`.

11\. When the `#number` element contains the number `3999` and the `#convert-btn` element is clicked, the `#output` element should contain the text `"MMMCMXCIX"`.

12\. When the `#number` element contains a random negative number and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number greater than or equal to 1"`.

13\. When the `#number` element contains a number greater than 4000 and the `#convert-btn` element is clicked, the `#output` element should contain the text `"Please enter a number less than or equal to 3999"`.

### [Official Solution](https://github.com/FreeCodeCamp-Solutions/JavaScript-Algorithms-and-Data-Structures-Projects)

<p align="right"><a href="#" onclick="scrollToTop(); return false;">Back to Top</a></p>
