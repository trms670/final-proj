# final-proj

Our first step in the implementation process was to create the html and styles.css pages for each the homepage and each study spot. This served as a base for us to envision what the website would look like. 

We designed the homepage structure on index.html, using styles.css to design the headers, buttons, images and image captions. Also in index.html, we created a navigation bar using a bootstrap "container-fluid" feature and designed it in styles.css. We integrated a boostrap feature so that when your mouse hovers over a tab on the navigation bar, the text will turn blue, to indicate that your mouse is hovering there.

Another feature of the homepage that does this same function is the interactive map, which redirects users to the page of the specific spot that is clicked on. We thought that an interactive map would be more fun for the user and give users an idea of the relative location of a certain spot on the Yale campus. The interactive map is based on the coordinates of the study spot and shape of the area it is (circle) to determine whether a user clikced in that relative area should be brought to the html page of the spot. 

For the "Review a Study Spot" button, we used a feature in JavaScript to hide the dropdown menu, textbox, and "submit" button and show those elements only when that the "Review a Study Spot" button is clicked. The hidden dropdown menu feature is created so that the user can select a spot and have their selected spot become a placeholder. The code from this feature was based on a w3schools dropdown example. 

One area that we struggled with was trying to get the review button to work so that it posted a review on the correct page of the user's chosen study spot. We originally tried to implement flask like in pset Finance but our VScode was unsuccessful in running flask. 
In the end, we decided to go with

Overall, to make the website design more aesthetic, we used different fonts and italics in styles.css for the header and image captions. 


