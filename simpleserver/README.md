# Simple Norm Server

Here's a simple web server that enables a user to make assertions 
on the graphical norm model 
indicating whether situations are satisfied or not.

## Installation notes

I've tested with the following Jars:

1. Pellet 2.3.1 (includes Jena) - to read the OWL file and reason over it

2. Spark 2.5.5 - lightweight web container
    - http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spark-core%22 (pick latest)

3. SLF4J 1.7.25 - logging (a Spark dependency)
    - https://www.slf4j.org/download.html (extract slf4j-api*.jar and slf4j-jdk*.jar)

4. Jetty 9.3.6 - Web container used by Spark - seems more lightweight than embedded Tomcat
    - http://disq.us/url?url=http%3A%2F%2Fsearch.maven.org%2Fremotecontent%3Ffilepath%3Dorg%2Feclipse%2Fjetty%2Faggregate%2Fjetty-all%2F9.3.6.v20151106%2Fjetty-all-9.3.6.v20151106-uber.jar%3AofKBCpdZUuvS_7R2u4aEGQtFbpM&cuid=3631811

Copy all jar files to lib folder (move Pellet directory inside lib folder).

## Compile

javac -cp "lib/\*:lib/pellet-2.3.1/lib/\*" NormServer.java

## Running

java -cp ".:lib/\*:lib/pellet-2.3.1/lib/\*" NormServer

Open up the test html file and give it a try.



