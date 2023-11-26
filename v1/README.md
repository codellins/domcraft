# DOMCraft.js - A Lightweight JavaScript Library

DOMCraft.js is a simple and lightweight JavaScript library designed to provide basic DOM manipulation and event handling functionalities. It offers a set of concise methods to simplify interaction with HTML elements and facilitate common tasks within the Document Object Model (DOM).

## Features

### Basic DOM Manipulation
- `$(selector)`: Selects the first element that matches the provided CSS selector.
- `$$(selector)`: Selects all elements that match the provided CSS selector.
- `$addClass(element, className, callback)`: Adds a class to the specified element.
- `$removeClass(element, className, callback)`: Removes a class from the specified element.
- `$toggleClass(element, className, callback)`: Toggles a class on the specified element.
- `$text(element, text, callback)`: Sets the text content of an element.
- `$textColor(element, color, callback)`: Sets the text color of an element.
- `$style(element, styles, callback)`: Applies styles to a single element.
- `$styleAll(elements, styles, callback)`: Applies styles to multiple elements.

### Event Handling
- `$on(element, event, handler)`: Attaches an event listener to an element.
- `$onAll(elements, event, handler)`: Attaches an event listener to multiple elements.
- `$off(element, event, handler)`: Removes an event listener from an element.
- `$offAll(elements, event, handler)`: Removes an event listener from multiple elements.

### Form Handling
- `$handleForm(formSelector, submitCallback, errorCallback)`: Handles form submission, checking required fields and executing callbacks accordingly.

### Animation
- `$animate(element, animation, duration, callback)`: Animates an element and executes a callback upon completion.

### Element Creation and Attributes
- `$createElement(tagName, attributes = {}, callback)`: Creates a new DOM element with specified attributes.
- `$getAttribute(element, attributeName)`: Retrieves the value of the specified attribute from an element.
- `$setAttribute(element, attributeName, attributeValue)`: Sets the value of the specified attribute on an element.

### URL Handling
- `$getQueryParameter(parameterName)`: Retrieves a query parameter value from the URL.

### AJAX Requests
- `$request.get(url, successCallback, errorCallback)`: Performs a GET request to the specified URL.
- `$request.post(url, data, successCallback, errorCallback)`: Performs a POST request to the specified URL with JSON data.

## Why Use DOMCraft.js?

### Simplicity
DOMCraft.js provides a minimalistic approach to DOM manipulation and event handling. It's suitable for simple projects where a lightweight alternative to larger libraries like jQuery is preferred.

### Easy-to-Use API
The library offers a straightforward API, making it easy to learn and use for basic web development tasks.

### Lightweight and Efficient
DOMCraft.js focuses on essential functionalities, ensuring a smaller footprint and better performance for projects that do not require complex features.

### Getting Started

To start using DOMCraft.js in your project, you can include it via a Content Delivery Network (CDN). Simply add the following script tag to your HTML file:

```html
<script src="https://codellins.github.io/domcraft/v1/domcraft.min.js"></script>
```

## Notes:

- All functions support optional callback parameters for execution after the operation is completed.

## Code Snippets and Use Cases

### Applying Styles
```javascript
const button = $$("button")
$onAll(button, "click", (e) => {
    const button = e.target
    $style(button, { color: "red", padding: "20px", backgroundColor:"blue" }, () => console.log("Element Styled"))
})
```
```javascript
const paragraphs = $$("p");
$styleAll(paragraphs, { fontSize: "16px", lineHeight: "1.5" }, () => {
    console.log("Paragraphs styled");
});
```

### Adding Event Listeners
```javascript
const buttons = $$("button");
$onAll(buttons, "click", (event) => {
    const button = event.target;

    //toggle class

    $toggleClass(button, "active", () => {
        console.log("Button toggled");
    });
});
```

### Form Submission Handling
```javascript
$handleForm("#myForm",
    (formData) => {
        // Submit callback for valid form data
        console.log("Form submitted:", formData);
    },
    (missingFields) => {
        // Error callback for missing fields
        console.error("Missing fields:", missingFields);
    }
);
```

### Fetching Data with AJAX
```javascript
$request.get("https://api.example.com/data",
    (data) => {
        // Success callback for GET request
        console.log("Received data:", data);
    },
    (error) => {
        // Error callback for GET request
        console.error("Error fetching data:", error);
    }
);
```

### Creating Elements Dynamically
```javascript
const newDiv = $createElement("div", { id: "dynamicDiv", class: "custom-div" }, (element) => {
    $text(element, "This is a dynamically created div");
    document.body.appendChild(element);
});
```

### Retrieving Query Parameters from URL
```javascript
const productId = $getQueryParameter("id");
console.log("Product ID:", productId);
```

For more information and usage examples, refer to the source code or documentation.

Feel free to contribute or report issues on [GitHub](https://github.com/codellins/DOMcraft).
