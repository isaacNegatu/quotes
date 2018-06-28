# quotes
Similar to the afternoon lectures, create a new project from the ground up for quotes.

# Base
Create a quotes array on the server. The get request /quotes should send the array to the client side, where you should use jQuery to display the quotes on the DOM.

Each quote should be an object with two properties:

the text for the quote
the author (person the quote is attributed to)
You will need to setup Node with express to serve static files from a public folder, and an index.html and client.js file in your public folder in order for this to work.

# Stretch Goals
Add the ability to add new quotes using POST
Use Bootstrap to style the page. Use a card with a block-quote to nicely lay out each of the quotes.
Add a new server route '/random' that should send back a single random quote.
Add an image for each quote. You'll need to put the images in your public folder and add a property to the quote objects to hold the image path.
