# Spruced Vue [front-end]
### Creator: Loti Ibrahimi 
### Student Number: 20015453

## Home Page Preview
![alt text](https://github.com/loti-ibrahimi/Spruced-Vue/blob/master/Spruced-Homepage.png) 
Preview of Web App (front-end) client testing - YouTube link: 

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Client (front-end)
### Web App was hosted using Firebase: https://firebase.google.com/ 
![alt text](https://github.com/loti-ibrahimi/Spruced-Vue/blob/master/firebase.png) 
**Spruced - Web App Front-End Link:** https://spruced-vue.firebaseapp.com/#/#

## Server (back-end) 
Repository Link:
https://github.com/loti-ibrahimi/Spruced

# Functionality & DX 
## User Interface:
Once on the Spruced web app, users can navigate through the different pages using the nav-bar on top. The pages are displayed below and are in a similar template format. 

The visual design itself is simplistic & has a modern feel to it. Makes use of a black & white theme, with some tints of khaki text to liven it up a little. 

[FontAwsome Icons](http://corporate.joostrap.com/features/fontawesome-icons) were used. These are evident in the menu tabs.

## Home Page:
Here is just some basic information about Spruced. Although not all features are implemented, they are certainly setting a foundation for further development & functionality later on.
This web app can take either one of two directions:
- Barber Appointment app to find local barbers in your area.
- Barber Portfolio Platform as currently set to be aimed towards.

## View Cuts:
This page holds information about all the cuts (haircuts) that are currently stored in the database, which have been added, including all their associated metadata. They are displayed in a Vue-Table-2 API with some extra functionality at the touch of a button such as, incrementing 'likes', 'editing cut details' or deleting a cut. 
Or perhaps you would like to filter out a specific cut, maybe by a particular barber of your choice. Simply enter their name in the 'filter by Barber' space to filter out all cuts by that barber. Likewise with the other options there. 

## View Barbers:
This page holds information about all the barbers that are currently stored in the database, which have been added, including all their associated metadata. They are also displayed in a Vue-Table-2 API with some extra functionality similar to that of the cuts page. However, the 'edit barber details' feature is not implemented due to repition - the cuts page being sufficient for demonstration purposes as both are very similar. This can be updated at a later stage. 

## Add Cut:
This page allows users to submit a new cut, which is then be placed in the database and is viewable in the table of the 'View Cuts' page. It makes use of a VueForm package, which certain fields are being requested to be filled. Error event handlers are set in place to make sure they are not left blank - i.e. VueLidate package, which is used for validation. Preview of VueForm for Spruced - Add Cut:

## Add Barber:
Similarly to the add Cut page, this page allows for users to add a new barber profile to the database, which are then viewable in the table of the 'View Barbers' page. It requires fields to be filled in just like Cuts, and makes use of VueLidate package for validation. Contains a drop-down selection type input for region, showing all counties in Ireland, for the user to choose from.

## About Us:
Contains some more details about the Spruced Web App. 

## Contact Us:
Fictional contact details for the Spruced 'company'. 

 ## References 
 The base code structure was created with the help of David Drohans [Web App Development 2 (Vue.js lab tutorials)](https://ddrohan.github.io/wit-wad-2-2018/topic02-wad/index.html).




