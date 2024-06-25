// DOM -> Document object model

// Read
// Create
// Modify - (Update)

// ES5:

// let vari = document.getElementById("demo")

// vari.innerText="hello world"

// let classPara = document.getElementsByClassName("para");

// classPara[0].style.color = "red"


// let tagSelect = document.getElementsByTagName("h1")

// tagSelect[0].style.color = "blue"

// ES6:

// let element = document.querySelector("#demo")

// element.innerHTML="hello world"
// element.style.color = "yellow"

// let classElement = document.querySelector(".para")

// classElement.style.color = "red"

// let allElement = document.querySelectorAll("h1")

// allElement[0].style.color="green"

// Create a new Element:

// Create a Parent element:

let newTag = document.createElement("div")

newTag.setAttribute("class", "head1")

// Create a child element

let newHeading = document.createElement("h1");

newHeading.innerText = "Hello world"

// Append section

document.body.append(newTag)

newTag.appendChild(newHeading)