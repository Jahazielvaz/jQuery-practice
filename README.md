# JQUERY PRACTICE

## Description:
  * The purpose of this exercise is for us to learn the basics of jQuery, so we can use it with ease.

## Symbols
  * $: This is how you access jQuery
  * ("p"): This is how you select an html element
  * (selector).action() : The action part I believe is how you perform js. For example: ('div').hide() : This will hide the div tags. (this).hide() : Hides the current element that's being targeter

  * $(document).ready(() => {
      [jQuery codeblock goes here]
    })
    The purpose of the document.ready, is to make sure that jQuery doesn't run until the document or the html code runs is fully loaded, so that jQuery can take over

  * Shorthand for document.ready:
    $(() => {

      })
  NOTE: jQuery selectors are among the most important aspects of jQuery. This is how you select html elements based on CSS selectors. jQuery also has it's own custom selectors. All selectors are triggered with $()

## Selectors
  - $("This is a star") : Selects all elements
  - $(this) : Selects the current element
  - $(".my-class") : Selects a class
  - $("#my-id") : Selects an id
  - $("p.my-class") : Selects all p tags with the class my-class
  - $("p:first") : Selects the first p element
  - $("ul li:first") : Selects the first li element from the first ul
  - $("ul li:first-child")
  - $("[href]")	Selects all elements with an href attribute
  *$("a[target='_blank']")	Selects all <a> elements with a  target attribute value equal to "_blank"
  - $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"
  - $(":button")	Selects all <button> elements and <input> elements of type="button"
  - $("tr:even")	Selects all even <tr> elements
  - $("tr:odd")	Selects all odd <tr> elements*

  NOTE: If you start having a lot of jQuery functions, it is useful to put them all in one big file, and then link it to your html page, as a script, the same way you would link a js file.
    EXAMPLE: <script src="./myJQueryFile.js"></script>

  NOTE: The $(this) feature doesn't seem to work on custom selectors such as classes, and ids. But it does work on standard selectors such as div, p, or section

## Events



## Things Learned
  * Section 1:
    - How to target elements
    - How to make elements hide and show.
    - Click Events
