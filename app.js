/**
 * Module dependencies.
 */

var express = require('express');
var router  = require('./router');
var config  = require('./config').values;
var path = require('path');
//var ejs_local = require('ejs-locals');

//app.engine('ejs', engine);
var app     = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
<<<<<<< HEAD

  app.use(express.static(__dirname + '/public'));
  //app.engine('ejs', ejs_local );
  app.set('view engine', 'ejs');
=======
//  app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//app.use('/public', express.static(process.cwd() + '/public'));

>>>>>>> 84acb91d799895600261c9369f53221adbcda09f
});

//app.set('views',[path.join(__dirname,'views'),path.join(__dirname,'views/pages'),path.join(__dirname,'views/partials')]);
app.set('views',path.join(__dirname,'/views'));

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

/**
 * Configuration can come from the 'config.js' file
 * and from command line options.
 *
 * The --public option removes the 'localhost' reference
 * in the config file allowing remote hosts to connect.
 */

if (process.argv.indexOf('--public') > -1) {
    config.public = true;
}

if (config.public) {
        app.listen(config.port);
}
else {
        app.listen(config.port, config.host);
}

router.setup(app);


console.log("Express server listening on port %d in %s mode",
	    config.port, app.settings.env);
