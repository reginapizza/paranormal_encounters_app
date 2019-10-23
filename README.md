## **Paranormal Encounters Application**.
------------------------------------------------------

**This application allows users to log a paranormal encounter they that will
keep track of multiple important aspects of the encounter. I created this
project as part of General Assembly's Software Engineering Immersive Program.
whether you want to have a paranormal encounter or not, I hope you have fun
making some up or reading through other's!**

### **Important Links**:

* [My SPA hosted on Github Pages](https://reginapizza.github.io/paranormal_encounters_app/)
* [My client repository on Github](https://github.com/reginapizza/paranormal_encounters_app)
* [My API repository on Github](https://github.com/reginapizza/Paranormal_API)
* [My API hosted on Heroku](https://sheltered-lowlands-54306.herokuapp.com/)

### **Technologies Used:**
* HTML
* CSS
* JavaScript
* jquery
* AJAX
* JSON
* Bootstrap
* Sass
* Handlebars

### **User Stories:**

1. As a user, I want to be able to log an encounter with a paranormal entity.

2. As a user, I want to be able to edit an encounter with a paranormal entity.

3. As a user, I want to be able to delete an encounter with a paranormal entity.

4. As a user, I want to be able to see all my encounters with paranormal entities.

5. As a user, I want to be able to get an encounter by a data point (location, ghost name, date, weather)

7. As a user, I want the website to visually appealing and easy to navigate.

8. As a user, I want to know the difference between paranormal entities before I log them.

9. As a user, I want to be able to sign up, sign-in, change password, and sign out.

### **Planning Story:**

When envisioning this application, I knew I wanted it to be a simple layout with
a side bar for all buttons and a main stage for viewing content. After drawing up my wireframes, I started with boilerplate html and added in sections for auth actions such as sign-up, sign-in, change password, and sign-out, then went about tying in those to my API with ajax, and using jquery for DOM manipulation. When I was trying to imagine what my main content would look like, I knew that I didn't want it to be crowded with form fields that the user would have when they were doing CRUD actions on their encounters. So to save space, I decided to use modals for all my forms, and eventually re-did my auth actions to have modals as well since it was much easier than I thought and allowed my stage to look more streamlined. After I had all my auth and encounter CRUD actions working, I decided to fill up the remaining screen space (before users click to see data) with background information about the possible paranormal entities that they could run into. Once my content was created, I styled it using inspiration from night-vision cameras on ghost-hunting shows.

### **Problems I Ran in to:**

I originally had a large issue with displaying the time. When I was creating my table in my database, I decided to separate ```time``` and ```date``` instead of doing ```dateTime``` because I wanted the date to be validated, but I wanted the user to be able to choose whether or not they wanted to put in a time (in case they didn't know the time something happened). Because I was putting in the data type as time, it was also displaying with a date when the user submitted data (the date would always be 2000-01-01), so I had to include javascript in my code that would change it to an acceptable format, and would loop through the data for getting all the encounters to change each date on the page to an acceptable format.

Another issue I ran into was with deploying to gitHub pages. When I originally deployed, I was getting 404 ERR_ABORTED in my console and I was only seeing html rendering. To solve this issue, I had to run npm install again and then run grunt build and grunt deploy separately. After that it all worked as expected.

I also had a few bugs with clearing forms, but that wasn't too hard to fix.

### **Future Updates:**

For future updates, I would like to add an option for a user to click a button and see only their encounters as opposed to everyone's encounters. For the original requirements of the project I had to pick either showing all resources or showing all of the user's resources. I figured that it would be more fun to see everyone's encounters than just your own so I ended up going with that choice, but I would eventually like to do both and I do not think it would be too hard.

I would also like to have a way for a user to upload a picture or a video when creating an encounter, although I'm not sure if there's more to that than I think there is. I will have to look more into that, but hopefully that will be an option in V2!

### **Original Wireframe Sketch:**

![Original Wireframe drawing for Paranormal Encounters SPA](https://i.imgur.com/TE5KPpD.jpg)
![Original Wireframe drawing for Create-An-Encounter Modal](https://i.imgur.com/ryNPuml.jpg)
