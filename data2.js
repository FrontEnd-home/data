
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
    link["icon"] = "";
    link["href"] = aa.attr('href');
    link["desc"] = $(this).find('p').text();
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
        "icon": "",
        "href": "http://store.templatemonster.com/?aff=uisdc",
        "desc": "著名的网页模版库，借鉴和学习网页趋势的宝地"
      },
      {
        "title": "Entheos Templates",
        "icon": "",
        "href": "http://templates.entheosweb.com/",
        "desc": "强大的模板库，包括最流行的响应式网页、HTML5酷站等"
      },
      {
        "title": "梦幻模板",
        "icon": "",
        "href": "http://www.dreamtemplate.com/",
        "desc": "超过7000个梦幻般的网站模板及Flash模板下载"
      },
      {
        "title": "网页模版世界",
        "icon": "",
        "href": "http://www.templateworld.com/",
        "desc": "提供各种专业的网页开发模板，记得利用好左侧的分类"
      },
      {
        "title": "4Templates",
        "icon": "",
        "href": "http://www.4templates.com/website-templates/",
        "desc": "网页模版市集，挑那些贵的看，然后Live Demo预览，然后..."
      },
      {
        "title": "免费网站模板",
        "icon": "",
        "href": "http://www.freewebsitetemplates.com/",
        "desc": "有几百个免费网站模板下载，可以挑着看看"
      },
      {
        "title": "享誉全球的 WIX",
        "icon": "",
        "href": "http://www.wix.com/",
        "desc": "超赞！该站全球排名378！可以帮你免费定制网站"
      },
      {
        "title": "免费模版库",
        "icon": "",
        "href": "http://www.freewebtemplates.com/",
        "desc": "历史悠久的老站点，1999年就致力于分享免费网站模版"
      },
      {
        "title": "模版盒子",
        "icon": "",
        "href": "http://www.templatesbox.com/",
        "desc": "提供免费的网页模版和Flash站点下载，分类详细"
      },
      {
        "title": "Buy Templates",
        "icon": "",
        "href": "http://www.buytemplates.net/products/search",
        "desc": "一个卖网页模版的站点，大家可预览手工下载"
      },
      {
        "title": "ThemeForest",
        "icon": "",
        "href": "http://themeforest.net/category/site-templates",
        "desc": "TF的模版频道，业内最大的网站模板和CMS主题商城之一"
      },
      {
        "title": "GavickPro",
        "icon": "",
        "href": "http://www.gavick.com/",
        "desc": "好顶赞！惊人且美丽的Joomla模板和WordPress主题"
      }
    ]
  },
  {
    "cat": "icon",
    "name": "图标 ICON 下载",
    "links": [
      {
        "title": "Iconfinder",
        "icon": "",
        "href": "http://www.iconfinder.com/",
        "desc": "提供超过150.000个免费图标搜索下载，部分收费"
      },
      {
        "title": "The Noun Project",
        "icon": "",
        "href": "http://thenounproject.com/",
        "desc": "强烈推荐！支持中文，一个用图标诠释世界的网站"
      },
      {
        "title": "easyicon",
        "icon": "",
        "href": "http://www.easyicon.net/",
        "desc": "中文图标搜索引擎！可批量下载PNG、ICO、ICNS等格式图标"
      },
      {
        "title": "图标档案库",
        "icon": "",
        "href": "http://www.iconarchive.com/",
        "desc": "超过416000个免费图标，可按类别检索下载喜欢的图标"
      },
      {
        "title": "Icon Icon",
        "icon": "",
        "href": "http://iconicon.net/",
        "desc": "一位来自纽约的设计师，擅长画图标，有着十多年的设计经验"
      },
      {
        "title": "图标工厂",
        "icon": "",
        "href": "http://iconfactory.com/",
        "desc": "聚集世界各国的图标设计领袖，提供上万枚免费图标下载"
      },
      {
        "title": "iconshock",
        "icon": "",
        "href": "http://www.iconshock.com/",
        "desc": "推荐！网站图标都非常精致，有各种高质量的应用程序图标"
      },
      {
        "title": "Iconka",
        "icon": "",
        "href": "http://iconka.com/",
        "desc": "Iconka是一家俄罗斯图标工作室，专业生产独一无二的网络图标和插图"
      },
      {
        "title": "iOS Icon Gallery",
        "icon": "",
        "href": "http://iosicongallery.com/",
        "desc": "iOS图标设计画廊"
      },
      {
        "title": "一淘UX图标字体库",
        "icon": "",
        "href": "http://ux.etao.com/fonts",
        "desc": "一淘用户体验团队的图标字体库，可以打包批量下载"
      },
      {
        "title": "PC.DE",
        "icon": "",
        "href": "http://pc.de/icons/",
        "desc": "为Win和Mac精心准备的琳琅满目的免费图标"
      },
      {
        "title": "favicon图标生成器",
        "icon": "",
        "href": "http://www.favicon.cc/",
        "desc": "一个在线制作favicon图标的酷站"
      },
      {
        "title": "IcoMoon",
        "icon": "",
        "href": "http://icomoon.io/app/",
        "desc": "强悍的WEB字体图标制造器，能生成icon图或字体"
      },
      {
        "title": "iconmonstr",
        "icon": "",
        "href": "http://iconmonstr.com/",
        "desc": "超赞！难以想象的居然会有这么棒的免费图标"
      },
      {
        "title": "图标巨嘴鸟",
        "icon": "",
        "href": "http://icontoucan.com/",
        "desc": "icon都很精致，喜欢的icon可拖拽到右边的盒子打包下载"
      },
      {
        "title": "iconSweets 2",
        "icon": "",
        "href": "http://www.iconsweets2.com/",
        "desc": "五星！优设哥非常喜欢的一套图标系列，经常使用"
      },
      {
        "title": "Icons DB",
        "icon": "",
        "href": "http://www.iconsdb.com/",
        "desc": "超过3200个免费图标，能按类别浏览定制下载图标"
      },
      {
        "title": "Dry Icons",
        "icon": "",
        "href": "http://dryicons.com/free-icons/",
        "desc": "推荐！提供精度很高的图标、包含了一些不错的矢量icon"
      }
    ]
  },
  {
    "cat": "brush",
    "name": "笔刷 纹理 下载",
    "links": [
      {
        "title": "QBrushes",
        "icon": "",
        "href": "http://qbrushes.net/",
        "desc": "高质量的Photoshop笔刷，而且更新很快"
      },
      {
        "title": "纹理王",
        "icon": "",
        "href": "http://www.textureking.com/",
        "desc": "免费的高分辨率顶尖纹理，可以商用"
      },
      {
        "title": "Fbrushes",
        "icon": "",
        "href": "http://fbrushes.com/",
        "desc": "笔刷+纹理，高质量的免费PS笔刷、图案及纹理"
      },
      {
        "title": "Brusheezy",
        "icon": "",
        "href": "http://www.brusheezy.com/",
        "desc": "笔刷，著名的免费笔刷、图案纹理资源站"
      },
      {
        "title": "BittBox",
        "icon": "",
        "href": "http://www.bittbox.com/",
        "desc": "素材盒子，免费的高品质笔刷纹理资源"
      },
      {
        "title": "Lost and Taken",
        "icon": "",
        "href": "http://lostandtaken.com/",
        "desc": "一个专注于提供免费、高分辨率纹理的设计博客"
      },
      {
        "title": "纹理库",
        "icon": "",
        "href": "http://www.texturevault.net/",
        "desc": "很不错的纹理站，素材都非常精良独特"
      },
      {
        "title": "纹理爱好者",
        "icon": "",
        "href": "http://www.texturelovers.com/",
        "desc": "帮你收集全球免费的纹理，还有不错的纹理教程"
      },
      {
        "title": "Free Stock Textures",
        "icon": "",
        "href": "http://freestocktextures.com/",
        "desc": "免费的高清纹理站"
      },
      {
        "title": "PS笔刷",
        "icon": "",
        "href": "http://www.psbrushes.net/",
        "desc": "提供超过500个完全免费的优秀PS笔刷"
      },
      {
        "title": "纹理盒子",
        "icon": "",
        "href": "http://www.psdbox.com/category/brushes/",
        "desc": "来感受一下PSD BOX里那些华丽的纹理吧"
      },
      {
        "title": "高分辨率纹理",
        "icon": "",
        "href": "http://www.highresolutiontextures.com/",
        "desc": "提供免费的游戏纹理、3D纹理，以及设计资源"
      }
    ]
  },
  {
    "cat": "logo",
    "name": "Logo 设计",
    "links": [
      {
        "title": "LogoPond",
        "icon": "",
        "href": "http://logopond.com/",
        "desc": "Logo，高端logo集萃，设计前必须来池子里泡一泡"
      },
      {
        "title": "Logo Moose",
        "icon": "",
        "href": "http://www.logomoose.com/",
        "desc": "一个Logo设计灵感社区，展示全球专业logo设计师的作品"
      },
      {
        "title": "99 Designs",
        "icon": "",
        "href": "https://99designs.com/logo-design/store",
        "desc": "99designs是世界上最大的在线图形设计市场，提供Logo设计服务"
      },
      {
        "title": "Logo Gala",
        "icon": "",
        "href": "http://www.logogala.com/",
        "desc": "一个展示Logo作品，提供灵感，并能学到设计过程的人气博客"
      },
      {
        "title": "Logo的荣耀",
        "icon": "",
        "href": "http://logooftheday.com/",
        "desc": "Logo展示画廊，提供灵感并对优秀作品授予奖励勋章"
      },
      {
        "title": "Logo Inspirations",
        "icon": "",
        "href": "http://logoinspirations.com/",
        "desc": "一个每天为你推荐logo作品的设计画廊"
      },
      {
        "title": "Logo狂热者",
        "icon": "",
        "href": "http://logofury.com/",
        "desc": "每日更新的Logo设计画廊，应接不暇的标识灵感"
      },
      {
        "title": "Logo Faves",
        "icon": "",
        "href": "http://logofaves.com/",
        "desc": "能让你找到最鼓舞人心的logo和才华横溢的设计师"
      },
      {
        "title": "Logo灵感画廊",
        "icon": "",
        "href": "http://www.logospire.com/",
        "desc": "可以上传Logo，并让大家评论打分的网站"
      },
      {
        "title": "Design Inspiration",
        "icon": "",
        "href": "http://thedesigninspiration.com/category/logos/",
        "desc": "TDI网站下的Logo频道专栏，收集非常棒的品牌标识"
      },
      {
        "title": "Logo挚爱",
        "icon": "",
        "href": "http://www.logodesignlove.com/",
        "desc": "给你讲精彩的Logo设计故事，每周更新一到两次的高端博客"
      },
      {
        "title": "Logo Design",
        "icon": "",
        "href": "http://www.logodesign.co.uk/",
        "desc": "一家享誉全球的图形和标志设计机构，来自英国"
      }
    ]
  },
  {
    "cat": "logo",
    "name": "更多酷站 敬请期待",
    "links": []
  }
]