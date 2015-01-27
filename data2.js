
//http://hao.uisdc.com/goods/

var json = [];
$('#website-map').find('section').each(function(i){
  json[i] = {};
  json[i]["cat"] = $(this).data('catalog');
  json[i]["name"] = $(this).find('header>h3').text();
  json[i]["links"] = [];
  $(this).find('li').each(function(v){
    var link = {};
    var aa = $(this).find('a');
    link["title"] = aa.text();
    link["url"] = aa.attr('href');
    link["desc"] = $(this).find('p').text();
    link["icon"] = "";
    link["favicon"] = "";
    link["rank"] = "";
    link["views"] = "";
    link["group"] = "";
    link["add_date"] = "1422356048";
    link["last_modified"] = "1422356048";
    json[i].links.push(link)
  })
})

JSON.stringify(json)

[
  {
    "cat": "template",
    "name": "网站模版 欣赏 下载",
    "links": [
      {
        "title": "网页模版巨人",
        "url": "http://store.templatemonster.com/?aff=uisdc",
        "desc": "著名的网页模版库，借鉴和学习网页趋势的宝地",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Entheos Templates",
        "url": "http://templates.entheosweb.com/",
        "desc": "强大的模板库，包括最流行的响应式网页、HTML5酷站等",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "梦幻模板",
        "url": "http://www.dreamtemplate.com/",
        "desc": "超过7000个梦幻般的网站模板及Flash模板下载",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "网页模版世界",
        "url": "http://www.templateworld.com/",
        "desc": "提供各种专业的网页开发模板，记得利用好左侧的分类",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "4Templates",
        "url": "http://www.4templates.com/website-templates/",
        "desc": "网页模版市集，挑那些贵的看，然后Live Demo预览，然后...",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "免费网站模板",
        "url": "http://www.freewebsitetemplates.com/",
        "desc": "有几百个免费网站模板下载，可以挑着看看",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "享誉全球的 WIX",
        "url": "http://www.wix.com/",
        "desc": "超赞！该站全球排名378！可以帮你免费定制网站",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "免费模版库",
        "url": "http://www.freewebtemplates.com/",
        "desc": "历史悠久的老站点，1999年就致力于分享免费网站模版",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "模版盒子",
        "url": "http://www.templatesbox.com/",
        "desc": "提供免费的网页模版和Flash站点下载，分类详细",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Buy Templates",
        "url": "http://www.buytemplates.net/products/search",
        "desc": "一个卖网页模版的站点，大家可预览手工下载",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "ThemeForest",
        "url": "http://themeforest.net/category/site-templates",
        "desc": "TF的模版频道，业内最大的网站模板和CMS主题商城之一",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "GavickPro",
        "url": "http://www.gavick.com/",
        "desc": "好顶赞！惊人且美丽的Joomla模板和WordPress主题",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      }
    ]
  },
  {
    "cat": "icon",
    "name": "图标 ICON 下载",
    "links": [
      {
        "title": "Iconfinder",
        "url": "http://www.iconfinder.com/",
        "desc": "提供超过150.000个免费图标搜索下载，部分收费",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "The Noun Project",
        "url": "http://thenounproject.com/",
        "desc": "强烈推荐！支持中文，一个用图标诠释世界的网站",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "easyicon",
        "url": "http://www.easyicon.net/",
        "desc": "中文图标搜索引擎！可批量下载PNG、ICO、ICNS等格式图标",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "图标档案库",
        "url": "http://www.iconarchive.com/",
        "desc": "超过416000个免费图标，可按类别检索下载喜欢的图标",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Icon Icon",
        "url": "http://iconicon.net/",
        "desc": "一位来自纽约的设计师，擅长画图标，有着十多年的设计经验",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "图标工厂",
        "url": "http://iconfactory.com/",
        "desc": "聚集世界各国的图标设计领袖，提供上万枚免费图标下载",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "iconshock",
        "url": "http://www.iconshock.com/",
        "desc": "推荐！网站图标都非常精致，有各种高质量的应用程序图标",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Iconka",
        "url": "http://iconka.com/",
        "desc": "Iconka是一家俄罗斯图标工作室，专业生产独一无二的网络图标和插图",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "iOS Icon Gallery",
        "url": "http://iosicongallery.com/",
        "desc": "iOS图标设计画廊",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "一淘UX图标字体库",
        "url": "http://ux.etao.com/fonts",
        "desc": "一淘用户体验团队的图标字体库，可以打包批量下载",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "PC.DE",
        "url": "http://pc.de/icons/",
        "desc": "为Win和Mac精心准备的琳琅满目的免费图标",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "favicon图标生成器",
        "url": "http://www.favicon.cc/",
        "desc": "一个在线制作favicon图标的酷站",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "IcoMoon",
        "url": "http://icomoon.io/app/",
        "desc": "强悍的WEB字体图标制造器，能生成icon图或字体",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "iconmonstr",
        "url": "http://iconmonstr.com/",
        "desc": "超赞！难以想象的居然会有这么棒的免费图标",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "图标巨嘴鸟",
        "url": "http://icontoucan.com/",
        "desc": "icon都很精致，喜欢的icon可拖拽到右边的盒子打包下载",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "iconSweets 2",
        "url": "http://www.iconsweets2.com/",
        "desc": "五星！优设哥非常喜欢的一套图标系列，经常使用",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Icons DB",
        "url": "http://www.iconsdb.com/",
        "desc": "超过3200个免费图标，能按类别浏览定制下载图标",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Dry Icons",
        "url": "http://dryicons.com/free-icons/",
        "desc": "推荐！提供精度很高的图标、包含了一些不错的矢量icon",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      }
    ]
  },
  {
    "cat": "brush",
    "name": "笔刷 纹理 下载",
    "links": [
      {
        "title": "QBrushes",
        "url": "http://qbrushes.net/",
        "desc": "高质量的Photoshop笔刷，而且更新很快",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "纹理王",
        "url": "http://www.textureking.com/",
        "desc": "免费的高分辨率顶尖纹理，可以商用",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Fbrushes",
        "url": "http://fbrushes.com/",
        "desc": "笔刷+纹理，高质量的免费PS笔刷、图案及纹理",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Brusheezy",
        "url": "http://www.brusheezy.com/",
        "desc": "笔刷，著名的免费笔刷、图案纹理资源站",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "BittBox",
        "url": "http://www.bittbox.com/",
        "desc": "素材盒子，免费的高品质笔刷纹理资源",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Lost and Taken",
        "url": "http://lostandtaken.com/",
        "desc": "一个专注于提供免费、高分辨率纹理的设计博客",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "纹理库",
        "url": "http://www.texturevault.net/",
        "desc": "很不错的纹理站，素材都非常精良独特",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "纹理爱好者",
        "url": "http://www.texturelovers.com/",
        "desc": "帮你收集全球免费的纹理，还有不错的纹理教程",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Free Stock Textures",
        "url": "http://freestocktextures.com/",
        "desc": "免费的高清纹理站",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "PS笔刷",
        "url": "http://www.psbrushes.net/",
        "desc": "提供超过500个完全免费的优秀PS笔刷",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "纹理盒子",
        "url": "http://www.psdbox.com/category/brushes/",
        "desc": "来感受一下PSD BOX里那些华丽的纹理吧",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "高分辨率纹理",
        "url": "http://www.highresolutiontextures.com/",
        "desc": "提供免费的游戏纹理、3D纹理，以及设计资源",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      }
    ]
  },
  {
    "cat": "logo",
    "name": "Logo 设计",
    "links": [
      {
        "title": "LogoPond",
        "url": "http://logopond.com/",
        "desc": "Logo，高端logo集萃，设计前必须来池子里泡一泡",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo Moose",
        "url": "http://www.logomoose.com/",
        "desc": "一个Logo设计灵感社区，展示全球专业logo设计师的作品",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "99 Designs",
        "url": "https://99designs.com/logo-design/store",
        "desc": "99designs是世界上最大的在线图形设计市场，提供Logo设计服务",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo Gala",
        "url": "http://www.logogala.com/",
        "desc": "一个展示Logo作品，提供灵感，并能学到设计过程的人气博客",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo的荣耀",
        "url": "http://logooftheday.com/",
        "desc": "Logo展示画廊，提供灵感并对优秀作品授予奖励勋章",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo Inspirations",
        "url": "http://logoinspirations.com/",
        "desc": "一个每天为你推荐logo作品的设计画廊",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo狂热者",
        "url": "http://logofury.com/",
        "desc": "每日更新的Logo设计画廊，应接不暇的标识灵感",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo Faves",
        "url": "http://logofaves.com/",
        "desc": "能让你找到最鼓舞人心的logo和才华横溢的设计师",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo灵感画廊",
        "url": "http://www.logospire.com/",
        "desc": "可以上传Logo，并让大家评论打分的网站",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Design Inspiration",
        "url": "http://thedesigninspiration.com/category/logos/",
        "desc": "TDI网站下的Logo频道专栏，收集非常棒的品牌标识",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo挚爱",
        "url": "http://www.logodesignlove.com/",
        "desc": "给你讲精彩的Logo设计故事，每周更新一到两次的高端博客",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      },
      {
        "title": "Logo Design",
        "url": "http://www.logodesign.co.uk/",
        "desc": "一家享誉全球的图形和标志设计机构，来自英国",
        "icon": "",
        "favicon": "",
        "rank": "",
        "views": "",
        "group": "",
        "add_date": "1422356048",
        "last_modified": "1422356048"
      }
    ]
  },
  {
    "cat": "logo",
    "name": "更多酷站 敬请期待",
    "links": []
  }
]