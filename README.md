# Mocha-Example
A tutorial using Mocha Js with TDD 

# Download NodeJs
Use the url https://nodejs.org/en/download/ and choose the version for your machine

# Check if node is installed
Use "node -v" in terminal

![Check node](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/check-node.png)

# Initialize the project to create package.json
Use "npm init" and put the configurations you want

# Install mocha js framework
Use "npm install mocha" to install the framework

# First structure

For our example we are going to create a program that calculates the area and the volume of a sphere using a technique called TDD which consists basically of writing our test case first then our production code the covers that test and finally refactoring it and do this for each case we have in mind for the project.

So first of all let's start creating two folders, one called "src" and the other "test", in the src folder create the file sphere.js and in the test folder the file will be sphereTest.js, in the beginning of our project we are going to modify the test file first so the file for the production code need to be empty like the image below:

![Production code empty](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/productionCodeEmpty.png)

# Using decribe

In our test file let's require the assert module from node to use as our oracles in the the test cases and require the production file the is still empty, next let´s use use a function from mocha called "describe" that allows us to build a test suite putting in the first input a description of our test suite in this case will be "Test sphere" and in the second input will receive a function where we are going to put our test cases for the suite:

![Sphere test describe](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/sphereTestDescribe.png)

# Creating the test for the area

Inside our describe block "Test sphere" let´s put another describe block called "Area sphere" to use for all tests related to the area and inside this describe we use the function "it" which should receive a test description in the first input and a function with the test code as second, in this test case we need to check if a function that calculates the area of a sphere of radius 2 returns the value 50.24 which is the right result, so we put in the first input the description "Should result in 50.24 if the radius is 2" and in the second we write a function that uses the assert module to check if a function "area" with input 2 is equal to 50.24.

Note that the production file is empty, so if we use the command "mocha" in terminal to run the test returns an error because the function area is not defined, but its just the first step of TDD approach, write a test that fails.

Check the image below to see the results so far:

![Area test failing](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/areaTestFailing.png)

# Production code for area

Failing in our test case let's return to our production file and create a class "sphere" where we are going to define a method "area" that receives an input "r" which is the radio and returns the result of the area of the sphere that is calculated through the formula "4 times 3.14 times r times r", in the end of the file we need to export the module sphere we just created, see in the image below:

![Area production](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/areaProduction.png)

# Area test passing

Now let's return to the test file and instatiate an object sphere to call the method area inside the test case, after we do that we can run mocha and see the test passes:

![Area test passing](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/areaTestPassing.png)

# Volume test failing

What we did for the area we can do the same for the volume, in the test file we can create another describe inside the block "Test sphere" with the description "Volume sphere" with the "it" function using the assert module to check if a function called volume that receives a radius 3 returns the value 113.04, so we put as the description of the test "Should result in 113.04 if the radius is 3".

Running with mocha we can see that the test fails because the function volume is not defined in production file:

![Volume test failing](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/volumeTestFailing.png)

# Production code for volume

Now we write the method volume in the production file to return the formula  (4 times 3.14 times r times r times r) divided by 3:

![Volume production code](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/productionCodeVolume.png)

# All tests passing

Now we execute mocha and all tests should pass:

![All tests passing](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/allTestsPassing.png)

# Creating Set up

Refactoring our code we could create a set up method for our test cases, so we can define a function from mocha called "before" inside our describe block "Test sphere" to initiate something that all the cases of the suite going to use, in our case we can instantiate the sphere class:

![Set up](https://github.com/VictorQueiroga/Mocha-Example/blob/main/assets/creatingSetUp.png)

# Testing
Whenever you want execute the test suite use "mocha" in terminal
