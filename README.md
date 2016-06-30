#Motivation-Frontend

Motivation-Angular is web app built in one week with a remote team of members from Australia, Vietnam and the UK.  Its aim is connect to our back-end [API](https://github.com/RobinHeathcote/Motivation) to help users reach their goals without requiring any effort through gentle nudges and reminders when they need them. Users will input their goals (known as wishes), state a desired outcome, and the create obstacles and plans to help them achieve their wish. This follows the WOOP psychological method.

Our MVP included a fully tested and functional API and a functional web app for users to interact with which was built using Angular.js.

##Project team:
* [Robin Heathcote](https://github.com/RobinHeathcote)
* [Letian Wang](https://github.com/letianw91)
* [Maria Romero](https://github.com/MariaRomero)
* [Lexi Tran](https://github.com/lexiht)

##Technology
+ Framework: AngularJS
  + Routing: ui-router
  + Resource handler:Restangular
  + UI Framework: Materialize
  + Ng-token auth
  + jQuery: 2.x
  + Unit Test: Karma
  + e2e test: Protractor
  + CSS pre-processor: Sass
  + Materialize
  + JS pre-processor: none
  + HTML pre-processor: none
+ Generator: Yeoman + gulp-angular generator
    * https://github.com/Swiip/generator-gulp-angular/

##Gulp Tasks
+ `$gulp` or `$gulp build` to build an optimized version of your application in /dist
+ `$gulp` serve to launch a browser sync server on your source files
+ `$gulp serve:dist` to launch a server on your optimized application
+ `$gulp test` to launch your unit tests with Karma
+ `$gulp test:auto` to launch your unit tests with Karma in watch mode
+ `$gulp protractor` to launch your e2e tests with Protractor
+ `$gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

##Reflections 
Our original plan was to use React Native to build a mobile app but this could not be learnt and implemented within our time limitations. The project is ongoing and this is the next phase, a platform agnostic mobile app with location and time based notifications.
