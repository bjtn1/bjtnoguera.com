# Web Development

## Sources
[The Odin Project](http://www.theodinproject.com/)
:::note
This is a ***very*** lengthy curriculum, thus each section will be linked to the specific part that it relates to
:::

## [The DOM (Document Object Model)](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events)

The DOM is just like a big ol' tree from CS. Each node is an html tag like `div` or `h1`

### Selecting a node in the DOM
```js showLineNumbers
// General syntax:
// element.querySelector(selector)
// This obtains the first instance of "div"
const div = document.querySelector("div");
```

### Creating an element in the DOM
```js showLineNumbers
// Syntax:
// document.createElement(tag_name, [options])
// This creates a div element
// It DOES NOT add it to the DOM
const div = document.createElement("div");
```

### Adding an element to the DOM
```js showLineNumbers
// Syntax:
// parent_node.appendChild(child_node);
// Resulting tree will look like...
// parent_node -> child_node

// parent_node.insertBefore(new_node, reference_node);
// Resulting tree will look like:
// parent_node -> new_node -> reference_node
```

### Altering elements in the DOM
```js showLineNumbers
// Create an element to be altered later
const div = document.createElement("div");

// Adding inline styles
// You can add one rule...
div.style.color = "blue";

// Or many rules
div.style.cssText = "color: blue; background: white;";

// Another way of adding many rules...
div.setAttribute("style", "color: blue; background: white;")
```

:::warning
Kebab-style CSS rules like `background-color` need to be converted to [camelCase](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case#:~:text=Camel%20case%20is%20a%20way,either%20upper%20or%20lower%20case.) (`backgroundColor`) when using `elements.style.kebab-style-rule`

```js showLineNumbers
// All of these are ok
div.style.backgroundColor = "blue";
div.style["background-color"] = "blue";
div.style.cssText = "background-color: white;"

// This is NOT ok
div.style.background-color = "blue";
```
:::

#### Editing attributes
```js showLineNumbers
// This changes the id attribute of div element to "theDiv" if the id attribute was set, otherwise it creates it
div.setAttribute("id", "theDiv")

// Returns the id attribute of div
div.getAttribute("id")

```

#### Removing attributes
```js showLineNumbers
// Removes specified attribute
div.removeAttribute("id");
```

#### Adding and removing a class to/from a tag
```js showLineNumbers
div.classList.add("new");

div.classList.remove("new");

// Adds "active" class to div if div doesn't have a class called "active"
// Otherwise removes class "active" from div
div.classList.toggle("active");
```

:::note
It is standard practice to use `element.classList.toggle("class_name")`
:::

#### Adding text to an element
```js showLineNumbers
// Adds "Hello world" to this div
div.textContent = "Hello world"

// Gets rendered as
// <div>Hello world</div>
```
:::warning
Avoid using `element.innerHTML` as it poses security risks. Use `textContent` whenever possible
:::

### Example usage
```html showLineNumbers
<!-- your HTML file: -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>
```

```js showLineNumbers
// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
```

Doing all of that results in this
```html showLineNumbers
<!-- The DOM -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>
```

The HTML file ***will not*** change. 

The JS DOM manipulations happen ***after*** the HTML file has been rendered

:::note
Include your js file in your html like this, so that the js file runs ***after*** the DOM has been rendered
```html showLineNumbers
<head>
  <script src="js-file.js" defer></script>
</head>
```
