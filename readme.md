
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

  These are like different ways to find someone in a crowd (your webpage).

  getElementById("id")	Finds an element by its unique ID. For example : Finds one person with a specific ID card.

  getElementsByClassName("class") Finds all elements with the same class. HTMLCollection (like an array, but live). Example : look for all people wearing “blue t-shirts”.

  querySelector("selector")	Finds the first element matching a CSS selector. Example :	You say “the first person wearing blue t-shirt”.

  querySelectorAll("selector")	Finds all elements matching a CSS selector. NodeList (like array, but static). Example :	You say “everyone wearing blue t-shirts”.
 
2. How do you **create and insert a new element into the DOM**?

   Step 1: Create new element
  const newNote = document.createElement("p");

   Step 2: Add text inside it
  newNote.textContent = "This is a new note added to the page.";

   Step 3: Insert it into body
  document.body.appendChild(newNote);

3. What is **Event Bubbling** and how does it work?

  Event goes from child → parent. Example : Elevator button alert goes to building system.

4. What is **Event Delegation** in JavaScript? Why is it useful?

  event delegation — one listener handles all child actions. Example : Think of a restaurant 🍽️ — instead of each waiter (child) taking your order, the manager (parent) listens for all customer requests and delegates them.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

  preventDefault() --> Stops the browser’s default behavior (like opening a link, submitting a form).

  stopPropagation() --> Stops the event from bubbling up to parent elements.

