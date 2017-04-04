# Simple Norm Server

Here's a simple web server that enables a user to make assertions 
on the graphical norm model 
indicating whether situations are satisfied or not.

## Installation notes

This project can be built using maven.

The instructions are based on https://github.com/arekgofi/Setting-up-Spark-with-Maven

```
cd normserver
mvn compile assembly:single
java -cp target\my-app-1.0-jar-with-dependencies.jar NormServer
```

In the agpl-test.html file, change http://137.48.191.120:4567/assert to http://localhost:4567/assert to try the server.

## Deploy to Heroku

To deploy to Heroku, I followed this tutorial: https://sparktutorials.github.io/2015/08/24/spark-heroku.html

To create your own service on Heroku:

```
heroku create norm-server-test 
mvn heroku:deploy
```

Note: rename your service to something other than "norm-server-test" because that's the name of my service. You'll also have to find and replace "norm-server-test" with your chosen name in the pom.xml file.

In the agpl-test.html file, change http://137.48.191.120:4567/assert to https://norm-server-test.herokuapp.com/assert to try the server. Again replace "norm-server-test" with the name of your service.

