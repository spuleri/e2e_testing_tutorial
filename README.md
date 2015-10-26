# e2e_testing_tutorial
####Tutorial for Protractor e2e testing in AngularJS apps for CEN3031
* You can use Protractor as a demo-ing tool as well as an e2e testing tool!  

####Resources for Protractor:
* [their site + docs](https://angular.github.io/protractor/#/)
* [good slides on Protractor and e2e testing](http://ramonvictor.github.io/protractor/slides/#/)

####Installation 
Install Protractor (follow "Setup" instructions):  
http://angular.github.io/protractor/#/

######Running this demo 
First clone this repo:
```bash
$ git clone https://github.com/spuleri/e2e_testing_tutorial.git
```
Install dependencies (only express):
```bash
$ npm install
```
You will need to do the following in seperate terminal tabs/windows-  
First start the Selenium Server:
```bash
$ webdriver-manager start
```
Start the application:
```bash
$ node server.js
```
Finally, start Protracting!
```bash
$ protractor conf2.js
```
