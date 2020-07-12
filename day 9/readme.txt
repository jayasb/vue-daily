Day 9

Today, we are going configure vue-router
What is a router and why we need one - let's find out
Router is used for navigation control
So far we have been manually updating App.vue to switch between Table and Form.
What we can do is introduce 2 links - this way we can switch between both the views

If you want to learn more about router (if you don't have time, it's ok - we will cover all this later)
https://vueschool.io/courses/vue-router-for-everyone


First - let's install the vue-router dependency

From the command prompt or terminal
npm install vue-router

If you like UI, type in
vue ui
This will launch a UI
Import your project first. Going forward you can create new project using this as well.
then click on dependencies
search for vue-router and install it


Next we are going to do a bit of refactor
Create a new folder called views
and move MyForm.vue and MyTable.vue to the views folder.


Create a new folder caller router under bvue/src
copy index.js (from day 9 folder) to the router folder

Replace App.vue and main.js files with the files in day 9 folder


npm run serve
You should see 2 links on the page
Play around - notice that the entire page doesn't refresh.


Explanation -
App.vue - look at the template tag and the 2 router links
This is what gets rendered when you start the app

Main.js
Just the import and use of router

Index.js
This is where all the route definitions are stored
Importing the views and the routes array
where we need to define the path and the component name



