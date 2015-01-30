var http = require("http");
var events = require("events");

// 一级分类
var list = {
  "category": "tutorial",
  "name": "教程",
  "slug": "tutorial",
  "desc": "教程",
  "links": [
    {
      "title": "Contact",
      "url": "http://photoshoptutorials.ws/",
      "desc": "接触PS图像处理软件教程",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "Ontwik视频教程",
      "url": "http://ontwik.com/",
      "desc": "国外关于创意、设计、交互、开发、营销、创业….等等的视频讲座类网站，不足的是很多讲座没有字幕",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "Photoshop Lady",
      "url": "http://www.photoshoplady.com/",
      "desc": "提供详细的PS教程，涵盖3D效果、文字效果、文理与图案、照片及绘图效果等",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "Photoshopstar",
      "url": "http://www.photoshopstar.com/",
      "desc": "国外很系统的PS教程，从基础操作、图片修图、文字效果、图标设计、网页设计，站长够细心！",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "Psd box",
      "url": "http://www.psdbox.com/",
      "desc": "原创Ps教程，并归纳出比较适合初学者的部分",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "PSD Vault",
      "url": "http://www.psdvault.com/",
      "desc": "专注于世界各地PS爱好者提供的所有高品质步骤化教程",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "Psdtuts+",
      "url": "http://psd.tutsplus.com/",
      "desc": "平易近人的展示一些优秀的PS教程",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "PS联盟",
      "url": "http://www.68ps.com/",
      "desc": "Photoshop专业中文教程网",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "Tutorial King",
      "url": "http://www.tutorialking.eu/",
      "desc": "国外很NB的PS教程",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "Tutorial9",
      "url": "http://www.tutorial9.net/",
      "desc": "内容涵盖开发、动画、设计方面的教程",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    },
    {
      "title": "网页设计实验室",
      "url": "http://www.webdesign.org/",
      "desc": "web design libray很系统的教程，从设计理论、配色、图标、FALSH、3D、栅格、编程…无所不有。可利用网址翻译辅助阅读，你会有收获！",
      "icon": "",
      "favicon": "",
      "rank": "",
      "views": "",
      "group": "",
      "add_date": "1422356048",
      "last_modified": "1422356048"
    }
  ]
};
  
var options = {
  hostname: "localhost",
  port: 3000,
  path: "/article/create",
  method: 'POST',
  headers:{
  	"Content-Type":"application/json",
  	"charset":"UTF-8"
  }
};

var evt = new events.EventEmitter();
var index = 0;
evt.on("run", function(){
	if(index >= list.links.length){
		return;
	}
	var item = list.links[index];
	var data = {
		article: {
			title: item.title,
			url: item.url,
            desc : item.desc,
			_category_id: "54c8f201c556922c212a6081"
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