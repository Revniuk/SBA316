American Heritage Girls Cycling Badge Web Page

Overview

This web page is designed for the American Heritage Girls (AHG) Cycling Badge. The code checks whether the helping adult has reviewed AHG's Health and Safety Policies and Guidelines, assess the girl's AHG level and records her badge progress. Upon completing all level requirements, the page displays a detailed completion note, specifying the completed requirements and dates.

Features
1. Cache Elements
Cached elements using getElementById, querySelector, and querySelectorAll for efficient access.
var reviewCheckbox = document.getElementById("reviewCheckbox");
var noReviewCheckbox = document.getElementById("noReviewCheckbox");
var additionalInfo = document.getElementById("additionalInfo");
var checkLevel = document.getElementById("checkLevel");
// ...

var tenderheart = document.getElementById("tenderheart");
var explorer = document.getElementById("explorer");
var tenderheartBlock = document.getElementById("tenderheartBlock");
var explorerBlock = document.getElementById("explorerBlock");


2. Navigate Elements
Utilized parent-child-sibling relationships to navigate between elements.\
// Example: Navigating to parent node
var additionalInfo = document.getElementById("additionalInfo");
var parentNode = additionalInfo.parentNode;
// Example: Iterating over radio buttons
var radioButtons = document.getElementsByName("level");
for (var i = 0; i < radioButtons.length; i++) {
    // Perform tasks with each radio button
}

3. Iterate over Elements
Iterated over a collection of elements to accomplish tasks.
// Example: Iterating over radio buttons
var radioButtons = document.getElementsByName("level");
for (var i = 0; i < radioButtons.length; i++) {
    // Perform tasks with each radio button
}
4. Create Element
Created new elements using createElement and added them to the DOM using appendChild.

// Example: Creating and appending a new element
var newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);

5. Templated Content
Used DocumentFragment interface to create templated content.
// Example: Using DocumentFragment
var fragment = document.createDocumentFragment();
// ... Append elements to the fragment
document.body.appendChild(fragment);

6. Modify HTML and Style
Modified HTML content and style in response to user interaction.
// Example: Modifying HTML content
var element = document.getElementById("exampleElement");
element.innerHTML = "<strong>New HTML Content</strong>";

// Example: Modifying styles
element.style.color = "red";
element.classList.add("highlight");

7. Event Listeners
Registered event listeners and created associated event handler functions.
// Example: Registering event listener
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitHandler);

// Example: Event handler function
function submitHandler(event) {
    // Handle the event
}
8. BOM Properties/Methods
Utilized Browser Object Model (BOM) properties or methods.
// Example: BOM properties/methods
var windowWidth = window.innerWidth;
var locationURL = window.location.href;

9. Form and Input Validation
Included at least one form and/or input with HTML attribute validation.
<!-- Example: HTML attribute validation -->
<input type="text" required>

Included at least one form and/or input with DOM event-based validation.
// Example: DOM event-based validation
var inputElement = document.getElementById("exampleInput");
inputElement.addEventListener("input", validateInput);

function validateInput(event) {
    // Validate input and provide feedback
}

Credits
This code was written as a part of the Per Scholas training program, following specific requirements outlined by the course. 
It incorporates best practices in web development for efficiency and user interaction.

Feel free to explore the code files for a more detailed understanding of the implementation. 
If you have any questions or suggestions, please reach out to me.
