#Motivation-Frontend

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
  + jQuery: 2.x
  + Unit Test: Karma
  + e2e test: Protractor
  + CSS pre-processor: Sass
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
