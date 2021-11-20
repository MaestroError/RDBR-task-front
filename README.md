# RDBR-task-front

### Covid 19 Statistics

* [Introduction](#introduction)
* [Tasks](#tasks)
* [Resources](#resources)

#### Introduction
You need to create applicatiton for covid 19 statistics.
The application needs to have two parts:
* Backend API - Php(with Laravel)
* Frontend Client - Vue.js(optionally with Nuxt.js)

#### Tasks
* Front End
    * You need to create fresh Vue.js Application +
    * App should have Vuex state managment +
    * You need to create Autorization with the help of Sanctum tokens +
    * You need to create SpreedSheet Table for all the countries and show all the information with this api
    * You should be able to sort the results by the deaths, confirmeds and recovereds value - in ascending and descending order
    * You need to have search input that's gonna search in every field of the data records and filter the results with it.
    * You need to create Cards for deaths, recoveries and confirmeds summary data
    * Client Application needs to have localization support: English and Georgian

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
