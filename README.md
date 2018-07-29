![Travel Agency](/assets/page1.jpg)

## Travel Agency
Travel agency is a holiday booking website where you can make holiday reservations for various holiday destinations all over the world. Website design used provided by https://www.phpjabbers.com/free-website-templates.php

## Prerequisites

* npm
* Ruby gems
* node.js


## Installing

A step by step series of examples that tell you have to get a development env running

* Download zipfile to local development folder by either using download button or using git clone command.

```
git clone http://github/<username>/holiday-site-vue

```

* npm install to install dependancies in package.json.

```
sudo npm install

```

* npm run dev to show website at localhost:4200.

```
sudo npm run dev

```
* npm run build to create production ready website.

```

sudo npm run build

```



## Running the tests


## Credits

* Vue.js - https://github.com/vuejs/vue.git
         https://vuejs.org/   

* phpjabbers.com - https://www.phpjabbers.com/free-website-templates.php

* jQuery validation plug-in 1.7

 - http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 - http://docs.jquery.com/Plugins/Validation

 - Copyright (c) 2006 - 2008 Jörn Zaefferer

 - $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $

 * Dual licensed under the MIT and GPL licenses:
 -   http://www.opensource.org/licenses/mit-license.php
 -   http://www.gnu.org/licenses/gpl.html

* HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
* ! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license


## Contributing


## License

MIT License

phpjabbers - https://www.phpjabbers.com/licence-agreement.php

## Acknowledgments

2. Create Your Heroku App
Heroku is a platform that let’s us easily deploy and host our Vue.js app. If you haven’t already, sign up for a Heroku account here. Then, install Heroku’s CLI tool via the instructions here. Then, let’s create our Heroku app:

heroku create <YOUR-PROJECT-NAME-HERE>
When this is done, you’ll get a fresh URL to your project, i.e. https://<YOUR-PROJECT-NAME-HERE>.herokuapp.com. Make sure you head over to the URL and see a temporary Heroku landing page there.

Lastly, in order to avoid having Heroku install needless development dependencies when deploying later, let’s go ahead and set the NODE_ENV setting to production :

heroku config:set NODE_ENV=production --app <YOUR-PROJECT-NAME-HERE>


3. Create a server.js and Build Your Site
Since Vue is only a frontend library, the easiest way to host it and do things like serve up assets is to create a simple Express friendly script that Heroku can use to start a mini-web server. Read up quickly on Express if you haven’t already. After that, add express:

npm install express --save
Now add a server.js file to your project’s root directory:

// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
IMPORTANT: What you probably noticed is that this will serve up a dist directory. dist is a predefined directory that Vue.js builds which is a compressed, minified version of your site. We’ll build this and then tell Heroku to run server.js so Heroku hosts up this dist directory:

npm run build
You should see an output dist directory now.

Let’s test our server.js file by running it:

node server.js
Now go to http://localhost:5000 and make sure your app loads. This is the actual site Heroku will serve up.

Lastly, we’ll have to edit our start script in package.json to start our node server, as Heroku will automatically look for this script when looking for how to run a node.js app.

// package.json
{
  "name": "<YOUR-PROJECT-NAME-HERE>",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "start": "node server.js",   <--- EDIT THIS LINE HERE 
...
4. Git Init and Add Your Heroku Remote Repository
Heroku allows us to push to a remote repository so we’ll first need to create our own git repository:

git init
Now let’s add our Heroku remote repository:

heroku git:remote --app <YOUR-PROJECT-NAME-HERE>
Let’s keep our generated dist directory so that we can always keep a pristine copy of what we’ve deployed to Heroku by removing dist/ from .gitigore

.DS_Store
node_modules/
dist/  <--- REMOVE THIS LINE
npm-debug.log*
yarn-debug.log*
yarn-error.log*
test/unit/coverage
test/e2e/reports
selenium-debug.log
# Editor directories and files
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
Now, most importantly, let’s add and commit our code files:

git add . && git commit -a -m "Adding files."
5. Push Your Code to Deploy!
Now all we need to deploy to Heroku is:

git push heroku master
This will take our committed code, push it to Heroku’s remote repository, run our start command in package.json which will serve up our freshly built dist directory.

If you come across any issues, you can always run heroku logs to troubleshoot.

If deployment is successful, test out your project’s URL https://<YOUR-PROJECT-NAME-HERE>.herokuapp.com and you’re done!


