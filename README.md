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

  NOTE-SLIDE DOWN: Slide down doesn't work unless the object is originally set to display none, because the element is already displaying.

  NOTE-CALLBACKS: With normal js, there's a chance that while an effect is being executed, that the next lines of code will be executed. This can have your code run into problems. To prevent this, you can encapsulate your follow up code into a callback function. This function will not run until your effect executesgit a

## Events
* Hide
* Show
* Toggle : Toggles between hiding and showing content
* All js standard events
* Fade In: Your element has to initially have display: none. Once fade in is triggered, it'll display the element.
* Fade Out: Your target element fades away and the css property ends up being display none.
* Fade Toggle: Alternates between showing and hiding your element
* Fade to: This one gives you the most control. You can manipulate the opacity, and create as many steps for it between 1 and 0.
* Slide Down: Again, make sure that the target element's display is set to display none, so that it can show it.
* Slide Up: This makes the target element go up and dissapear.
* Slide Toggle: As you can probably guess. This method toggles between sliding up and sliding down.
* Animate: Allows you to modify the css directly, as well as add a cb function if you want to give it further instructions on what to do after it executes your custom animation. You can also set default animations inside of your css. You can also use relative values as your css values. Stuff like the += or -= 




## Things Learned
  * Section 1:
    - How to target elements
    - How to make elements hide and show.
    - Click Events
