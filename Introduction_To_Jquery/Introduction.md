# Introduction to jQuery
## What is jQuery?
jQuery is a popular JavaScript library that simplifies HTML document traversal, manipulation, event handling, and animation. It provides a concise and efficient way to interact with the Document Object Model (DOM), making it easier to develop dynamic and interactive web pages.

With jQuery, you can perform various tasks such as selecting and manipulating HTML elements, handling events, making AJAX requests, creating animations, and much more. It abstracts away many of the complexities of JavaScript, allowing developers to write shorter and more readable code.

## What is the goal of jQuery?
The main goal of jQuery is to make it easier to manipulate and interact with HTML documents, handle events, create animations, and perform other common tasks using JavaScript. It achieves this by providing a simple and concise syntax that abstracts away many of the complexities of traditional JavaScript code.

## What are some key aspects and features of jQuery?
Here are some key aspects and features of jQuery:

1. DOM Manipulation: jQuery makes it easy to select and manipulate HTML elements in the Document Object Model (DOM). It provides a wide range of selectors, such as element names, CSS classes, IDs, and more, allowing you to target specific elements or groups of elements in your web page.

2. Event Handling: jQuery simplifies event handling by providing methods to bind event handlers to HTML elements. You can easily attach functions to events like clicks, hover, submit, keypress, and many others. This allows you to create interactive and responsive web pages.

3. AJAX Support: Asynchronous JavaScript and XML (AJAX) is a technique for making asynchronous HTTP requests to the server without reloading the entire page. jQuery provides a set of AJAX methods that make it effortless to send and receive data from the server. It supports various formats like JSON, XML, HTML, and text.

4. Animation and Effects: jQuery includes a powerful animation framework that allows you to create smooth and visually appealing animations. You can animate CSS properties, create transitions, fade elements in or out, slide elements, and much more. It simplifies complex animations and adds interactivity to your web pages.

5. Utility Functions: jQuery provides a rich set of utility functions that simplify common programming tasks. These functions handle tasks such as manipulating arrays and objects, performing asynchronous operations, manipulating strings, handling events, and more. They help streamline your code and enhance productivity.

6. Plugin Ecosystem: jQuery has a vast plugin ecosystem, with a wide range of community-developed plugins available. These plugins extend the functionality of jQuery and offer additional features like image sliders, form validation, drag-and-drop interactions, and more. You can easily integrate these plugins into your projects.

## How to use jQuery
To use jQuery, you need to follow these steps:

1. **Include the jQuery Library:**
    Start by including the jQuery library in your HTML file. You can either download the library and host it on your server or use a content delivery network (CDN) to include it from a remote server. Here's an example of including jQuery using a CDN:

    ```html
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    ```
2. **Write jQuery Code:**
    Once you have included the jQuery library, you can start writing jQuery code to interact with the DOM and perform various tasks. You can either write your jQuery code directly within `<script>` tags in your HTML file or in an external JavaScript file that you include in your HTML file using the `<script>` tag.

    Here's an example of writing a simple jQuery code that changes the text color of all `<p>` elements to red:

    ```html
    <script>
            $(document).ready(function() {
                $("p").css("color", "red");
            });
    </script>
    ```

## jQuery Examples
1. Selecting Elements
   
   ```javascript
    $("p") // Selects all <p> elements
    $(".myClass") // Selects all elements with class "myClass"
    $("#myId") // Selects the element with id "myId"
   ```
2. Changing Css
   
   ```javascript
   $("p").css("color", "red") // Changes the color of all <p> elements to red
   ```
3. Event Handling
   ```javascript
    $("button").click(function() {
        alert("Button clicked!");
    }); 
    ```
4. Ajax Requests
   ```javascript
        $.ajax({
            url: "https://api.example.com/data",
            method: "GET",
            success: function(response) {
                console.log(response);
            }
        });
   ```
## jQuery Selectors
Here's a tabular format showcasing various jQuery selectors:

| Selector                     | Description                                            | Example                              |
|------------------------------|--------------------------------------------------------|--------------------------------------|
| Element Selector             | Selects elements based on the tag name                 | `$("p")` selects all `<p>` elements   |
| ID Selector                  | Selects an element based on the ID attribute           | `$("#myId")` selects the element with ID "myId" |
| Class Selector               | Selects elements based on the class attribute           | `$(".myClass")` selects elements with class "myClass" |
| Attribute Selector           | Selects elements based on the attribute and its value   | `$("[name='firstName']")` selects elements with the name attribute equal to "firstName" |
| Multiple Attribute Selector  | Selects elements that match any of multiple attributes  | `$("[name='firstName'][type='text']")` selects elements with name attribute equal to "firstName" and type attribute equal to "text" |
| Descendant Selector          | Selects elements that are descendants of a specific element | `$("div p")` selects all `<p>` elements that are descendants of `<div>` elements |
| Child Selector               | Selects elements that are direct children of a specific element | `$("div > p")` selects all `<p>` elements that are direct children of `<div>` elements |
| Next Sibling Selector        | Selects the element immediately following a specific element | `$("h1 + p")` selects the `<p>` element that directly follows an `<h1>` element |
| Prev Sibling Selector        | Selects the element immediately preceding a specific element | `$("p ~ span")` selects all `<span>` elements that follow a `<p>` element |
| First Child Selector         | Selects the first child element of a specific parent element | `$("ul li:first-child")` selects the first `<li>` element within a `<ul>` element |
| Last Child Selector          | Selects the last child element of a specific parent element | `$("ul li:last-child")` selects the last `<li>` element within a `<ul>` element |
| Even Selector                | Selects even-indexed elements among the matched elements | `$("tr:even")` selects even-indexed `<tr>` elements |
| Odd Selector                 | Selects odd-indexed elements among the matched elements  | `$("tr:odd")` selects odd-indexed `<tr>` elements |
| Not Selector                 | Selects elements that do not match a specific selector   | `$("input:not(.myClass)")` selects all `<input>` elements that do not have the class "myClass" |
| Contains Selector            | Selects elements that contain a specific text            | `$("p:contains('Lorem ipsum')")` selects all `<p>` elements that contain the text "Lorem ipsum" |

These are some of the commonly used jQuery selectors. jQuery provides many more advanced selectors and combinations, allowing you to precisely target elements in the DOM based on various criteria.

----------

## How to add Multiple Css in jQuery
To add multiple CSS properties to an element using jQuery, you can use the `css()` method and pass an object containing the CSS property-value pairs. Here's an example:

```javascript
$(document).ready(function() {
  $("p").css({
    "color": "red",
    "font-size": "16px",
    "background-color": "yellow"
  });
});
```

In this example, the `css()` method is used to apply multiple CSS properties to all `<p>` elements. The CSS properties and their corresponding values are specified as key-value pairs within an object. In this case, the text color will be set to red, font size to 16 pixels, and background color to yellow.

You can add as many CSS property-value pairs as you need within the object, separating them with commas. Make sure to enclose the property names in quotes and provide the values as strings or numeric values with appropriate units if required.

By using this approach, you can apply multiple CSS properties simultaneously using jQuery.

## How to add class to a element in jQuery?
To add a class to an element using jQuery, you can use the `addClass()` method. Here's an example:

HTML:
```html
<div id="myElement">Hello, World!</div>
```

jQuery:
```javascript
$(document).ready(function() {
  $("#myElement").addClass("highlight");
});
```

In this example, the `<div>` element with the ID "myElement" is selected using the ID selector `$("#myElement")`. The `.addClass()` method is then used to add the class "highlight" to the selected element.

After executing this jQuery code, the selected `<div>` element will have the class "highlight" added to it. You can define the "highlight" class in your CSS stylesheet to apply specific styling to the element, such as changing its background color, font color, or adding other visual effects.

Note: You can replace "highlight" with any class name you desire. Make sure to define the corresponding styles in your CSS file or in a `<style>` tag within your HTML document to see the desired effects on the element.

## DOM manipulation in jQuery
Here are various aspects of DOM manipulation using jQuery:

1. Selecting Elements:
   - Select elements by tag name: `$('tagname')`
   - Select elements by class name: `$('.classname')`
   - Select elements by ID: `$('#id')`
   - Select elements based on attributes: `$('[attribute="value"]')`
   - Select nested elements: `$('parent-element descendant')`

2. Modifying Element Content:
   - Get or set text content: `.text()`, `.text('new text')`
   - Get or set HTML content: `.html()`, `.html('<p>new HTML</p>')`
   - Get or set attribute values: `.attr('attributeName')`, `.attr('attributeName', 'value')`
   - Get or Set Property: `.prop('propertyName')`, `.prop('propertyName','value')`

3. Modifying Element Properties:
   - Add or remove CSS classes: `.addClass('classname')`, `.removeClass('classname')`, `.toggleClass('classname')`
   - Get or set CSS styles: `.css('property')`, `.css('property', 'value')`

4. Manipulating Element Visibility and Structure:
   - Show or hide elements: `.show()`, `.hide()`, `.toggle()`
   - Insert content before or after elements: `.before()`, `.after()`
   - Append or prepend content to elements: `.append()`, `.prepend()`
   - Remove elements from the DOM: `.remove()`

5. Traversing the DOM:
   - Find descendants of elements: `.find('selector')`
   - Filter elements based on conditions: `.filter('selector')`, `.not('selector')`
   - Get parent element: `.parent()`
   - Get siblings of elements: `.siblings()`

6. Handling Events:
   - Bind event handlers: `.on('event', handler)`
   - Unbind event handlers: `.off('event', handler)`

7. Performing Animations:
   - Animate element properties: `.animate({ properties }, duration, easing, complete)`

8. Making AJAX Requests:
   - Perform AJAX requests: `$.ajax()`, `$.get()`, `$.post()`, `$.getJSON()`

9. Working with Forms:
   - Get or set form field values: `.val()`, `.val('new value')`
   - Submitting forms: `.submit()`

10. Chaining:
    - jQuery allows chaining multiple operations together, reducing code redundancy and improving readability.

These are some of the key aspects of DOM manipulation using jQuery. The library provides an extensive set of methods and functions for interacting with the DOM, making it easier to create dynamic and interactive web pages. Remember to include the jQuery library in your HTML document before using these jQuery functions.

## DOM chceking in jQuery
DOM checking in jQuery involves performing checks or conditions on elements within the DOM to determine their existence, properties, or states. Here are some common ways to perform DOM checking using jQuery:

1. Checking if an Element Exists:
   ```javascript
   if ($('#my-element').length) {
     // Element exists
   }
   ```

2. Checking if an Element has a Class:
   ```javascript
   if ($('#my-element').hasClass('my-class')) {
     // Element has the class
   }
   ```

3. Checking if an Element has a Specific Attribute:
   ```javascript
   if ($('#my-element').is('[data-attribute]')) {
     // Element has the attribute
   }
   ```

4. Checking if an Element is Visible:
   ```javascript
   if ($('#my-element').is(':visible')) {
     // Element is visible
   }
   ```

5. Checking if an Element is Hidden:
   ```javascript
   if ($('#my-element').is(':hidden')) {
     // Element is hidden
   }
   ```

6. Checking if an Input Field is Empty:
   ```javascript
   if ($('#my-input').val() === '') {
     // Input field is empty
   }
   ```

7. Checking if an Element Contains a Specific Text:
   ```javascript
   if ($('#my-element:contains("specific text")').length) {
     // Element contains the specific text
   }
   ```

8. Checking if a Checkbox or Radio Button is Checked:
   ```javascript
   if ($('#my-checkbox').prop('checked')) {
     // Checkbox is checked
   }
   ```

9. Checking if an Element Matches a Selector:
   ```javascript
   if ($('#my-element').is('.my-selector')) {
     // Element matches the selector
   }
   ```

These are just a few examples of how you can perform DOM checking using jQuery. jQuery provides a wide range of methods and selectors to facilitate checking the state, properties, or existence of elements within the DOM.

## Condition checking inside selector
In jQuery, you can use condition checking inside selectors using the `:not()` and `:has()` selectors. These selectors allow you to filter elements based on certain conditions. Here's an example of condition checking inside a selector:

```javascript
// Select all input elements that are not disabled
$('input:not(:disabled)').addClass('highlight');

// Select all div elements that contain a paragraph with more than 100 characters
$('div:has(p:contains(function(index, text) {
  return text.length > 100;
})))').addClass('highlight');
```

In the first example, the `:not()` selector is used to exclude elements that match the condition specified inside it. The `:disabled` selector selects all disabled input elements, and `:not(:disabled)` selects all input elements that are not disabled. The selected elements are then given the "highlight" class.

In the second example, the `:has()` selector is used to select elements that contain other elements that match the condition specified inside it. The `:contains()` selector selects all paragraphs that contain a specific text, and the condition function checks if the length of the text is greater than 100 characters. The `:has(p:contains(...))` selector selects all div elements that contain a paragraph with more than 100 characters. Again, the selected elements are given the "highlight" class.

You can combine different selectors, conditions, and jQuery functions to create more complex and specific selections based on your requirements. 

## Selecting elements by checking multiple attributes using selector
### Direct selection
To select elements by checking multiple attributes using selector in jQuery, you can use the attribute selector with the multiple attribute values. Here's an example:

```javascript
// Select all input elements of type "file" or "date"
var $inputs = $('input[type="file"], input[type="date"]');

// Do something with the selected inputs
$inputs.each(function() {
  // Your code here
});
```

In the above code, the attribute selector `[type="file"], [type="date"]` is used to select all input elements that have the type attribute equal to "file" or "date". This will select all the input elements that match either of these types.

You can replace `$('input')` with any other selector that matches your specific requirements, such as `$('.my-form input')` to select inputs within a particular form with a class of "my-form".

Once you have the selected inputs, you can iterate over them using the `.each()` function or perform any other operations as needed.

### Inside :not() selection
To select elements by checking multiple attributes using :not() selector in jQuery,you can make use of the `:not()` selector and the attribute selector. Here's an example:

```javascript
// Select all input elements that are not of type "file" or "date"
var $inputs = $('input:not([type="file"], [type="date"])');

// Do something with the selected inputs
$inputs.each(function() {
  // Your code here
});
```

In the above code, the `:not()` selector is used to exclude the input elements of type "file" or "date" by specifying the attribute selectors `[type="file"]` and `[type="date"]` inside it. This will select all input elements that do not have the specified types.

You can replace `$('input')` with any other selector that matches your specific requirements, such as `$('.my-form input')` to select inputs within a particular form with a class of "my-form".

Once you have the selected inputs, you can iterate over them using the `.each()` function or perform any other operations as needed.

## jQuery Animations
### Different methods and description
Here are all the jQuery animation methods:

| Animation Method | Description |
|------------------|-------------|
| `.show()` | Displays selected elements by fading them in |
| `.hide()` | Hides selected elements by fading them out |
| `.toggle()` | Toggles the visibility of selected elements |
| `.fadeIn()` | Fades in selected elements |
| `.fadeOut()` | Fades out selected elements |
| `.fadeToggle()` | Toggles the fading of selected elements |
| `.slideDown()` | Slides down selected elements |
| `.slideUp()` | Slides up selected elements |
| `.slideToggle()` | Toggles the sliding of selected elements |
| `.animate()` | Animates selected elements with custom properties |
| `.stop()` | Stops the currently running animation on selected elements |
| `.delay()` | Sets a delay before executing the next animation in the queue |
| `.queue()` | Manipulates the animation queue for selected elements |
| `.clearQueue()` | Removes all remaining animations from the queue |
| `.finish()` | Stops the currently running animation and jumps to the end state |
| `.fadeIn()` | Fades in selected elements |
| `.fadeOut()` | Fades out selected elements |
| `.fadeTo()` | Fades selected elements to a specified opacity |
| `.fadeToggle()` | Toggles the fading of selected elements |
| `.slideDown()` | Slides down selected elements |
| `.slideUp()` | Slides up selected elements |
| `.slideToggle()` | Toggles the sliding of selected elements |
| `.animate()` | Animates selected elements with custom properties |
| `.stop()` | Stops the currently running animation on selected elements |

These methods provide a wide range of options for creating dynamic and interactive animations using jQuery.

### Usage Examples
Here are the animation methods along with example usages:

| Animation Method | Example Usage |
|------------------|---------------|
| `.show()` | `$("#element").show();` |
| `.hide()` | `$("#element").hide();` |
| `.toggle()` | `$("#element").toggle();` |
| `.fadeIn()` | `$("#element").fadeIn();` |
| `.fadeOut()` | `$("#element").fadeOut();` |
| `.fadeToggle()` | `$("#element").fadeToggle();` |
| `.slideDown()` | `$("#element").slideDown();` |
| `.slideUp()` | `$("#element").slideUp();` |
| `.slideToggle()` | `$("#element").slideToggle();` |
| `.animate()` | `$("#element").animate({opacity: 0.5, left: '250px'});` |
| `.stop()` | `$("#element").stop();` |
| `.delay()` | `$("#element").delay(1000).fadeOut();` |
| `.queue()` | `$("#element").queue(function() { $(this).addClass("highlight"); });` |
| `.clearQueue()` | `$("#element").clearQueue();` |
| `.finish()` | `$("#element").finish();` |
| `.fadeIn()` | `$("#element").fadeIn();` |
| `.fadeOut()` | `$("#element").fadeOut();` |
| `.fadeTo()` | `$("#element").fadeTo(1000, 0.5);` |
| `.fadeToggle()` | `$("#element").fadeToggle();` |
| `.slideDown()` | `$("#element").slideDown();` |
| `.slideUp()` | `$("#element").slideUp();` |
| `.slideToggle()` | `$("#element").slideToggle();` |
| `.animate()` | `$("#element").animate({opacity: 0.5, left: '250px'}, 1000);` |
| `.stop()` | `$("#element").stop();` |

These examples demonstrate how to use each animation method with the `$("#element")` selector. You can replace `#element` with the appropriate selector for your HTML elements. Additionally, you can customize the parameters and options within the methods to achieve the desired animation effects.

----
## Practice Questions

1. Given a webpage with multiple `<div>` elements, how can you select and change the background color of only the `<div>` elements that have the class "highlight"?

    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </head>
        <style>
            div{
                width: 300px;
                height: 100px;
                margin: 10px;
                background-color: black;
            }
        </style>
        <body>
            <div class="highlight"></div>
            <div></div>
            <div class="highlight"></div>
            <div class="highlight"></div>
            <div></div>
            <button onclick="changeColor()">Change Color</button>
        </body>
        <script>
            const changeColor=()=>{
                $(".highlight").css("background-color","red");
            }
        </script>
        </html>
        ```

2. In a form with several input fields, how can you select and validate only the required input fields by adding a red border to them?

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <style>
        input{
            width: 300px;
            height: 20px;
            border: black 2px solid;
            outline: black;
            background-color: rgb(198, 210, 210);
            display: block;
            margin: 10px;
            padding: 10px;
        }
    </style>
    <body>
        <form>
            <input type="text" name="" id="" required>
            <input type="text" name="" id="">
            <input type="text" name="" id="">
            <input type="text" name="" id="" required>
            <input type="text" name="" id="" required>
        </form>
    </body>
    <script>
        $("input[required]").css("border","red 2px solid")
    </script>
    </html>
   ```

3. Suppose you have a list of `<li>` elements inside a `<ul>` element. How can you select and add a checkmark icon before each even-indexed `<li>` element using CSS classes?

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <style>
        .checkMark{
            list-style: none;
        }
        .checkMark::before{
            content: '✓';
        }
    </style>
    <body>
        <ul>
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <button onclick="addCheck()">Check</button>
    </body>
    <script>
        const addCheck=()=>{
            $("ul li:even").addClass("checkMark")
        }

    </script>
    </html>
    ```

4. In a table with multiple rows, how can you select and highlight only the rows that contain cells with a specific class, such as "important"?
   ```html
   <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <table border="1">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>Lionel</td>
                <td class="important">Messi</td>
                <td>36</td>
            </tr>
            <tr>
                <td>Cristiano</td>
                <td class="important">Ronaldo</td>
                <td class="important">37</td>
            </tr>
            <tr>
                <td>Rajiv</td>
                <td>Bose</td>
                <td>56</td>
            </tr>
            <tr>
                <td>Jhon</td>
                <td>Snow</td>
                <td>Infinity</td>
            </tr>
            <tr>
                <td class="important">Peter</td>
                <td>Chezc</td>
                <td>46</td>
            </tr>
        </table>
        <button onclick="highlight()">Highlight</button>
    </body>
    <script>
        const highlight=()=>{
            $("tr:has(td.important)").css({"background-color":"yellow"})
        }
    </script>
    </html>
   ```

5. On a web page, how can you select and hide all the `<img>` elements that have the "featured" attribute set to "false"?
   ```html
   <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <style>
        img{
            width: 200px;
            height: 100px;
        }
    </style>
    <body>
        <img src="https://picsum.photos/id/231/200/300" alt="" featured="false">
        <img src="https://picsum.photos/id/232/200/300" alt="" featured="true">
        <img src="https://picsum.photos/id/233/200/300" alt="" featured="false">
        <img src="https://picsum.photos/id/234/200/300" alt="" featured="true">
        <img src="https://picsum.photos/id/235/200/300" alt="" featured="false">
        <button onclick="showFeatured()">Show Featured Only</button>
    </body>
    <script>
        const showFeatured=()=>{
            $("img[featured='false']").hide()
        }
    </script>
    </html>
   ```

6. How can you select and disable all the `<input>` elements within a `<form>` that are not of type "text" or "email"?
   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <form>
            <input type="text" name="" id="" placeholder="text"><br>
            <input type="file" name="" id=""><br>
            <input type="text" name="" id="" placeholder="text"><br>
            <input type="date" name="" id=""><br>
            <input type="email" name="" id="" placeholder="mail"><br>
        </form>
        <button onclick="hideInput()">Disable Inputs other than text or email</button>
    </body>
    <script>
        const hideInput=()=>{
            $("input:not([type='text'],[type='email'])").prop("disabled",true)
        }
    </script>
    </html>
   ```

7. In a navigation menu, how can you select and add a CSS class to the `<a>` element that corresponds to the current active page?
   > [Link to answer](./Practice_Set_Answers/Navigation_menu_current_page_indication/)

8. Suppose you have a set of radio buttons with the same name attribute. How can you select and retrieve the value of the selected radio button using jQuery?
   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <title>Document</title>
    </head>
    <body>
        <input type="radio" name="radio" id="value1" value="Sinchan"> <label for="value1">Sinchan</label>
        <input type="radio" name="radio" id="value2" value="Ayush"> <label for="value2">Ayush</label>
        <input type="radio" name="radio" id="value3" value="Ahana"> <label for="value3">Ahana</label>
        <button onclick="showOutput()">Show Output</button>
        <div>
            <p class="output"></p>
        </div>
    </body>
    <script>
        const showOutput=()=>{
            let value=$("input[type='radio']:checked").val()
            $(".output").text(value)
        }
    </script>
    </html>
   ```

9.  On a webpage, how can you select and fade out all the `<h2>` elements within a specific `<div>` container using jQuery animations?

10. In a table, how can you select and count the number of cells in the last column using jQuery selectors?

----


