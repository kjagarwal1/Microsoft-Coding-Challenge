I have created this Webpage using React. This project allows users to register and gain access to the awesome service. In order to sign up, they will need to provide their first name, email address, and password. The user must ensure all the fields are filled out to submit the form and the email must contain a '@'. Otherwise the user will be notified if the requirements are not met.

Once the user has finished providing the required information, they must click “Sign Up” to complete the registration successfully.

The user will be then directed to the confirmation page. This page welcomes the user using their name, which they provided in the registration page. It also provides their email address letting them know to check their email for instructions.

This project is hosted on AWS, and can be directly access at: http://kshitijmicrosoftcodingchallange.s3-website-us-east-1.amazonaws.com/
Otherwise, you must instal NPX on a terminal and run the command: npx start

I created a few components to put the page together, which can all be found under src/components: a LogInBox, a SignUpBox, and a SignUpForm. I used styized componenets for the majority of the project, and all of that code can be found on src/hooks/Styles.js. To manage the log in, button action, and recording the name and email across components, I used the React context. This created a state that can be modified depending on what action needs to be preformed, and will allow the app to "reload".
