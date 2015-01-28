var http = require("http");
var events = require("events");

// 一级分类
var list = [{
    "name": "HTML",
    "slug": "html",
    "icon": "html",
    "rank": "1.1.1",
    "quality": 1,
    "alias": ["xhtml"],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "CSS",
    "slug": "css",
    "icon": "css",
    "rank": "1.2.1",
    "quality": 1,
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "JavaScript",
    "slug": "javascript",
    "icon": "javascript",
    "rank": "1.3.1",
    "quality": 1,
    "alias": ["js"],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },{
    "name": "框架",
    "slug": "framework",
    "icon": "framework",
    "rank": "1.1.1",
    "quality": 1,
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },{
    "name": "类库",
    "slug": "libs",
    "icon": "libs",
    "rank": "1.1.1",
    "quality": 1,
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "开发工具",
    "slug": "devtools",
    "icon": "devtools",
    "rank": "3.1.1",
    "quality": 1,
    "alias": ["devtool"],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },{
    "name": "编辑器",
    "slug": "editor",
    "icon": "editor",
    "rank": "1.1.1",
    "quality": 1,
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },{
    "name": "性能分析",
    "slug": "analyzer",
    "icon": "analyzer",
    "rank": "1.1.1",
    "quality": 1,
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },{
    "name": "测试工具",
    "slug": "testing",
    "icon": "testing",
    "rank": "1.1.1",
    "quality": 1,
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "Web设计",
    "slug": "design",
    "icon": "design",
    "rank": "2.1.1",
    "quality": 1,
    "alias": ["design","视觉设计"],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  },{
    "name": "教程",
    "slug": "tutorial",
    "icon": "tutorial",
    "rank": "1.1.1",
    "quality": 1,
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "书籍",
    "slug": "books",
    "icon": "books",
    "rank": "9.1.1",
    "quality": 1,
    "alias": ["ebook"],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "造好的轮子",
    "slug": "wheel",
    "icon": "wheel",
    "rank": "9.2.0",
    "alias": [],
    "db_path": "category_list.json",
    "add_date": "1422356048",
    "last_modified": "1422356048"
  }, {
    "name": "淘金",
    "slug": "panning",
    "icon": "panning",
    "rank": "9.9.0",
    "alias": [],
    "db_path": "category_list.json",
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