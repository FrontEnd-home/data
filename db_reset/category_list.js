var http = require("http");
var events = require("events");

var list = [{
    "name": "HTML5",
    "slug": "html5",
    "icon": "html",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6077",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, 
  /*{
    "name": "Canvas",
    "slug": "canvas",
    "icon": "canvas",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "SVG",
    "slug": "svg",
    "icon": "svg",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "WebWorker",
    "slug": "webworker",
    "icon": "webworker",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, 
  {
    "name": "Blob",
    "slug": "blob",
    "icon": "blob",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },*/
    {
    "name": "CSS3",
    "slug": "css3",
    "icon": "css",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6078",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Sass",
    "slug": "sass",
    "icon": "sass",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6078",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Less",
    "slug": "less",
    "icon": "less",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6078",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, 
/*  {
    "name": "Markdown",
    "slug": "markdown",
    "icon": "markdown",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, */
  {
    "name": "Node.js",
    "slug": "nodejs",
    "icon": "nodejs",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607a",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },
   /*{
    "name": "Express",
    "slug": "express",
    "icon": "express",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Socket.IO",
    "slug": "socketio",
    "icon": "socketio",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "PhantomJS",
    "slug": "phantomjs",
    "icon": "phantomjs",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, */
  {
    "name": "Backbone.js",
    "slug": "backbone",
    "icon": "backbone",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607a",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Angular.js",
    "slug": "angular",
    "icon": "angular",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607a",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "ExtJS",
    "slug": "extjs",
    "icon": "extjs",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607a",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "jQuery",
    "slug": "jquery",
    "icon": "jquery",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607b",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "jQuery UI",
    "slug": "jqueryui",
    "icon": "jquery",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607b",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Underscore.js",
    "slug": "underscore",
    "icon": "underscore",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607b",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Zepto.js",
    "slug": "zepto",
    "icon": "zepto",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607b",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Modernizr",
    "slug": "modernizr",
    "icon": "modernizr",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607b",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "RequireJS",
    "slug": "requirejs",
    "icon": "requirejs",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "SeaJS",
    "slug": "seajs",
    "icon": "seajs",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Git",
    "slug": "git",
    "icon": "git",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "SVN",
    "slug": "svn",
    "icon": "svn",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "jsDoc",
    "slug": "jsdoc",
    "icon": "jsdoc",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "JSLint",
    "slug": "jslint",
    "icon": "jslint",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "JSHint",
    "slug": "jshint",
    "icon": "jshint",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Bower",
    "slug": "bower",
    "icon": "bower",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Grunt",
    "slug": "grunt",
    "icon": "grunt",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Gulp",
    "slug": "gulp",
    "icon": "gulp",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Fiddler",
    "slug": "fiddle",
    "icon": "fiddle",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Firebug",
    "slug": "firebug",
    "icon": "firebug",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },/* {
    "name": "编辑器",
    "slug": "editer",
    "icon": "editer",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },*/ {
    "name": "Sublime Text",
    "slug": "sublime",
    "icon": "sublime",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607d",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "YSlow",
    "slug": "yslow",
    "icon": "yslow",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "parent_id":"54c8f201c556922c212a607e",
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "HttpWatch",
    "slug": "httpwatch",
    "icon": "httpwatch",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607e",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "dynaTrace Ajax",
    "slug": "dynatrace",
    "icon": "dynatrace",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607e",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, /*{
    "name": "测试工具",
    "slug": "testing",
    "icon": "testing",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },*/ {
    "name": "Karma",
    "slug": "karam",
    "icon": "karam",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607f",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Mocha",
    "slug": "mocha",
    "icon": "mocha",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607f",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Chai",
    "slug": "chai",
    "icon": "chai",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607f",
    "alias": ["Chai.js"],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, /*{
    "name": "性能分析",
    "slug": "analyzer",
    "icon": "analyzer",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "调试工具",
    "slug": "debug",
    "icon": "debug",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a607c",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "框架",
    "slug": "framework",
    "icon": "framework",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "类库",
    "slug": "lib",
    "icon": "lib",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },*/ {
    "name": "字体",
    "slug": "fonts",
    "icon": "fonts",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "parent_id":"54c8f201c556922c212a6080",
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "图标",
    "slug": "icon",
    "icon": "icon",
    "rank": "1",
    "quality": 0,
    "alias": [],
    "parent_id":"54c8f201c556922c212a6080",
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "笔刷/纹理",
    "slug": "brush",
    "icon": "brush",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6080",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Logo设计",
    "slug": "logo",
    "icon": "logo",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6080",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "设计欣赏",
    "slug": "webcool",
    "icon": "webcool",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6080",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "色彩搭配",
    "slug": "colorfy",
    "icon": "colorfy",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6080",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "素材/图库",
    "slug": "pics",
    "icon": "pics",
    "rank": "1",
    "quality": 0,
    "parent_id":"54c8f201c556922c212a6080",
    "alias": [],
    "db_path": "db.js",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }];

var options = {
  hostname: "localhost",
  port: 3000,
  path: "/category/create",
  method: 'POST',
  headers:{
  	"Content-Type":"application/json",
  	"charset":"UTF-8"
  }
};

var evt = new events.EventEmitter();
var index = 0;
evt.on("run", function(){
	if(index >= list.length){
		return;
	}
	var item = list[index];
	var data = {
		category: {
			name: item.name,
            slug: item.slug,
            _parent_id: item.parent_id,
			alias: item.alias
		}
	};
	Request(data);
});
evt.emit("run");

function Request(data){
	var req = http.request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  res.setEncoding('utf8');

	  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	  });

	  res.on('end', function(){
	  	index++;
		evt.emit("run");
	  });
	});

	req.on('error', function(e) {
	   console.log('problem with request: ' + e.message);
	});

	console.log("POST:\n"+ JSON.stringify(data));
	req.write(JSON.stringify(data));
	req.end();
}