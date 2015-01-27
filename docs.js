
/*!
 * Category index_list
 * 首页数据
 *
 * html               HTML
 * css                CSS
 * javascript         JavaScript
 *     framework      框架
 *     lib            库
 * tools              工具
 *     editor         编辑器
 *     dev            开发
 *     debug          调试
 *     testing        测试
 *     git            Git
 * books              书籍
 * wheel              造好的轮子
 * panning            淘金
 */

/**
 * //数据说明
{
  name: "HTML",         //显示名称
  slug: "html",         //分类/路径
  type: "html",         //icon
  rank: "1.1.1",        //排名
  quality: 3,           //子类数
  alias: ["xhtml"],
  add_date: "1399467780",
  last_modified: "1418038405",
  path: "",             //路径自定义指定?
  db_path: "db.json",   //数据挂载?
  db_size: 100
}
 */

app.DOCS = [{
  name: "HTML",
  slug: "html",
  type: "html",
  rank: "1.1.1",
  quality: 3,
  alias: ["xhtml"],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}, {
  name: "CSS",
  slug: "css",
  type: "css",
  rank: "1.2.1",
  quality: 3,
  alias: [],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}, {
  name: "JavaScript",
  slug: "javascript",
  type: "javascript",
  rank: "1.3.1",
  quality: 3,
  alias: ["js"],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}, {
  name: "Web设计",
  slug: "design",
  type: "design",
  rank: "2.1.1",
  quality: 3,
  alias: ["design","视觉设计"],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}, {
  name: "开发工具",
  slug: "tools",
  type: "tools",
  rank: "3.1.1",
  quality: 3,
  alias: ["devtool"],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}, {
  name: "书籍",
  slug: "books",
  type: "books",
  rank: "9.1.1",
  quality: 3,
  alias: ['ebook'],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}, {
  name: "造好的轮子",
  slug: "wheel",
  type: "wheel",
  rank: "9.2.0",
  alias: [],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}, {
  name: "淘金",
  slug: "panning",
  type: "panning",
  rank: "9.9.0",
  alias: [],
  db_path: "category_list.js",
  add_date: "1399467780",
  last_modified: "1418038405"
}];