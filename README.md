## Project Overview 🌱

This project was devided into the 3 sprints. Overall, finished project represent website that:

- retrieve comment data from the provided API and display it on the page; <br/>
- user able to add new comments that are stored on the back-end using the API; <br/>
- new comments that are added display with the existing comments, the newest comments are at the top; <br/>
- pages display the shows data retrieved from the API; <br/>
- site responsive and closely resemble the provided mockups; <br/>
<hr/>
<p> I created the list of ITEMS using JavaScript DOM manipulation and flexbox layout.
An array in JavaScript with all of concerts data rendered the concerts HTML dynamically using the array data.
All dynamic HTML was added to DOM via DOM Methods for individual elements. 
Utilize my knowledge of JavaScript DOM Manipulation, I built in functions to create all the content between the hero image and the footer, as well as create own functions.</p>
What was challenging 📍
<br/>
<p> The individual rows of the Shows table had to have different styling depending on the state of the table row. So, I had to utilize my knowledge of both JavaScript and Sass to accomplish this.</p>

How I added Comment Like Functionality 🖤

<p> The provided API had a PUT endpoint that I used to like comments. I added ❤️ like button to each comment. When clicked, this button triggers a function that likes the comment both from the API and also from the DOM.</p>

How I added Comment Delete Functionality ❌

<p> The provided API had a DELETE endpoint that I used to delete comments. I added a delete button to each comment. When clicked, this button triggers a function that deletes the comment both from the API and also from the DOM. Information about the comment delete endpoint can be found in the API documentation.</p>

How I created Comments Section 💬

<p> I added button that allows a user to add a new comment. The user can add their name and a comment. The comments can be added such that the newest comments are at the top. 3 Default comments displayed when the page first loads.</p>
