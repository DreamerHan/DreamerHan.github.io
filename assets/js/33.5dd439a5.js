(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{487:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"mongo-开启事务的副本集大坑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongo-开启事务的副本集大坑"}},[t._v("#")]),t._v(" Mongo 开启事务的副本集大坑")]),t._v(" "),n("p",[t._v("最近开发用户新增的功能时，为了给用户设置自增长的 ID，我专门创建了一个维护自增长的 "),n("code",[t._v("counters")]),t._v(" 表")]),t._v(" "),n("p",[t._v("考虑实现的逻辑是每次新增用户之前，先从 "),n("code",[t._v("counters")]),t._v(" 表中获取当前的 ID 值，然后自增加 1，将获取的最新 ID 值合并到前端传递的用户信息中")]),t._v(" "),n("p",[t._v("接着将合并后的信息统一调用 save 方法保存到 "),n("code",[t._v("users")]),t._v(" 表中")]),t._v(" "),n("p",[t._v("但是，在合并用户信息时出了一些错误，保存的方法没有执行。于是乎，"),n("code",[t._v("counters")]),t._v(" 表中的 ID 字段发生了增长，导致下一次成功添加用户时，用户的 ID 发生了跳跃。从 10000 直奔 10003 了， 10002 的添加失败了，但是 "),n("code",[t._v("counters")]),t._v(" 表的 ID 发生了增长。")]),t._v(" "),n("p",[t._v("这明显是不可以的，从 "),n("code",[t._v("counters")]),t._v("表的 ID 自增长，到 "),n("code",[t._v("users")]),t._v("表的 save 保存，这是一个链路，如果中间的任何一步发生了失败。应该回滚回原来的数据状态。")]),t._v(" "),n("p",[t._v("于是乎，我用到了 "),n("a",{attrs:{href:"https://mongoosejs.com/docs/transactions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongoose 的事务"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/70ffd70fde84",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongoose 事务实例"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("但是，当我仔细看完上面的英文文档后和应用实例后。我开始我的代码，我碰到了第一个报错：\n"),n("font",{attrs:{color:"red",size:"4"}},[n("strong",[t._v("Transaction numbers are only allowed on a replica set member or mongos")])])],1),t._v(" "),n("p",[t._v("真是查遍了各种文档，最后发现了一个"),n("a",{attrs:{href:"https://driverzhang.github.io/post/mongo%E5%BC%80%E5%90%AF%E4%BA%8B%E5%8A%A1%E4%B9%8B%E5%89%AF%E6%9C%AC%E9%9B%86%E9%87%87%E5%9D%91/",target:"_blank",rel:"noopener noreferrer"}},[t._v("大佬的微博"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("抄一下内容，放置以后链接不好用了：")]),t._v(" "),n("h2",{attrs:{id:"mongo-的事务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongo-的事务"}},[t._v("#")]),t._v(" mongo 的事务")]),t._v(" "),n("p",[t._v("要使用 mongo 的自带事务，需要配置成 副本集或者分片模式，上面的报错我理解就是因为我没有副本集。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("mongodb 副本集： 副本集是一组服务器，其中一个是主服务器，用于处理客户请求；还有多个备份服务器，用于保存主服务器的数据副本。\n官方推荐的副本集机器数量为至少 3 个。")]),t._v(" "),n("p",[t._v("在非事务时 mongo，插入数据时会自动建立表结构，但是使用事务中如何相关表不存在，就会报错。所有事务使用时建议先建立好对应的表结构。")])]),t._v(" "),n("p",[t._v("如上所说，我只有电脑上安装的这一个 mongodb，没有 3 个。所以，"),n("font",{attrs:{color:"red",size:"3"}},[n("strong",[t._v("单节点 mongo 事务配置")])])],1),t._v(" "),n("h2",{attrs:{id:"单节点副本集模式配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单节点副本集模式配置"}},[t._v("#")]),t._v(" 单节点副本集模式配置")]),t._v(" "),n("ol",[n("li",[t._v("首先找到 mongo 的配置文件: "),n("code",[t._v("mongod.conf")]),t._v("。更改配置内容：")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("systemLog:\n  destination: "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n  path: /usr/local/var/log/mongodb/mongo.log\n  logAppend: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nstorage:\n  dbPath: /usr/local/var/mongodb\nnet:\n  bindIp: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 就是添加下方的内容")]),t._v("\nreplication:\n  replSetName: rs0 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个 replSetName 必须所有节点都得一致")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("然后，重新启动 mongo 使 mongo 能够重新读取配置文件")])]),t._v(" "),n("p",[t._v("注意，重启 mongo 并不是直接执行 "),n("code",[t._v("mongod -f /usr/local/etc/mongod.conf")])]),t._v(" "),n("p",[t._v("可以参考 "),n("RouterLink",{attrs:{to:"/db/mongodb/1.html#启动与暂停-mongodb"}},[t._v("mongodb 的安装")])],1),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("执行 "),n("code",[t._v("mongosh")]),t._v(" 进入 mongo 的执行环境")])]),t._v(" "),n("p",[t._v("如果当前的版本连 mongosh 指令也没有，那就下载一个 "),n("a",{attrs:{href:"https://www.mongodb.com/try/download/shell",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongoDB Shell"),n("OutboundLink")],1),t._v("吧，我参考了"),n("a",{attrs:{href:"https://blog.csdn.net/dongkeai/article/details/127330013",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个帖子"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("mongo 的执行环境下可以直接运行 mongdo 的各种数据库指令，比如 "),n("code",[t._v("show dbs")]),t._v(" 展示数据库")]),t._v(" "),n("p",[t._v("在该环境下执行如下命令：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("rs.initiate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化一个新的副本集")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在一些文档中可能会看到执行下面两条指令，但是都已废弃。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以通过 rs.help 获取信息")]),t._v("\nrs.slaveOk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已废弃")]),t._v("\nrs.secondaryOk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已废弃")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 看到上面两条执行下面这个指令就好")]),t._v("\ndb.getMongo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".setReadPref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[n("a",{attrs:{href:"https://www.mongodb.com/docs/v4.2/reference/method/js-replication/",target:"_blank",rel:"noopener noreferrer"}},[t._v("指令的话看这里"),n("OutboundLink")],1)]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("接下来你大概能看到类似下面的前缀")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("rs0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("direct: primary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" test"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h2",{attrs:{id:"实现最初的事务逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现最初的事务逻辑"}},[t._v("#")]),t._v(" 实现最初的事务逻辑")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户管理模块")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"koa-router"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mongoose "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongoose"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" util "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../utils/util"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../models/userSchema"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Counter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../models/counterSchema"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/add"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userEmail "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("username "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("userEmail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"参数错误"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CODE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAM_ERROR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先查找当前用户是否存在")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" User"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $or"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" username "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userEmail "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id userName userEmail"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hasInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("已有该用户，信息如下: ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hasInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hasInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userEmail"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始事物")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" session "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" mongoose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startSession")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startTransaction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id 是 userId 的查询条件; $inc 对某个字段自增，key 是表里字段名称，1 是自增多少")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new: true 自动加1后，将最新的值返回回来")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回的是更新后的最新文档")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" doc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Counter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOneAndUpdate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userId"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" $inc"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sequence_value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("session")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新增的话，需要 new model 实例化一个 document")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      userId"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" doc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sequence_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      password"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      userEmail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      role"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认是普通用户")]),t._v("\n      roleList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      deptId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      mobile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以在这里测试抛错")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试事务错误"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" session "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里提交事务")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("commitTransaction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束事务")]),t._v("\n    session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("endSession")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户创建成功"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错了就阻止事务的执行")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("abortTransaction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户创建失败"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("有一个大佬的帖子用了 mongo 提供的两种方式，"),n("a",{attrs:{href:"https://www.jianshu.com/p/70ffd70fde84",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以在这里查看"),n("OutboundLink")],1),t._v("\n当然我还完整的看了 "),n("a",{attrs:{href:"https://mongoosejs.com/docs/transactions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongoose 的事务文档"),n("OutboundLink")],1),t._v("，也挺收益的，就是英文很难受，有时间我要翻译一个汉语的版本放到博客下。")])])}),[],!1,null,null,null);s.default=e.exports}}]);