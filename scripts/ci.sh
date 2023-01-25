#! /bin/sh

# clean target file
mvn clean

# validate code
mvn validate

# compile code
mvn compile

# run test
mvn test
