# final-proj

Our first step in the implementation process was to create the html and styles.css pages for each the homepage and each study spot. This served as a base for us to envision what the website would look like. 

We designed the homepage structure on index.html, using styles.css to design the headers, buttons, images and image captions. Also in index.html, we created a navigation bar using a bootstrap "container-fluid" feature and designed it in styles.css. We integrated a boostrap feature so that when your mouse hovers over a tab on the navigation bar, the text will turn blue, to indicate that your mouse is hovering there. 

Next, we created separate html pages for all the other study spots of our choice and inserted images, captions, hours and addresses for each. We linked the address to google maps using href, so that the address is set as the destination in google maps. This allows users to see where the location is and determine how far the location is from their current location. Thus with this, we achieved our 'good' goal.

Another feature of the homepage that does this same function is the interactive map, which redirects users to the page of the specific spot that is clicked on. We thought that an interactive map would be more fun for the user and give users an idea of the relative location of a certain spot on the Yale campus. The interactive map is based on the coordinates of the study spot and shape of the area it is (circle) to determine whether if a user clicked in that relative area should be brought to the html page of the spot. Thus with this, we achieved the feature that we stated in our 'best' goal.

Surprisingly, our 'better' goal was giving us the most trouble. Our 'better goal' was to post user reviews on the website. We encountered many struggles trying different methods to post reviews onto our website. We originally had the idea of one "review" button on the homepage so that the user could post onto any specific study spot page. However, we weren't able to implement flask properly onto our local VScode without cs50 library flask functions. As a result, we decided to have separate review boxes on each specific study spot page, and use Javascript to post onto respective study spot pages instead.

To tackle posting a review on a specific study spot page, we created a "Review This Spot" button that implements Javascript event listeners "hide/show" feature so that when the button is clicked, a response textbox and a "submit" button will appear. If the button is clicked again, the textbox and "submit" button will disappear. 

When the user presses the "submit" button, Javascript's onClick event listener posts the user's reviews under the black Review bar.

On a sidenote, a special feature of the "submit" button is that if the user does not type anything into the response textbox, a warning message will appear that says "Please type in a response". This ensures the user does not submit a blank review by accident. We implemented this feature through Javascript.

Overall, to make the website layout design more aesthetic, we used various fonts and italics in styles.css for the header, image captions, text, and more. 


