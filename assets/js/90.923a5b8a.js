(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{556:function(t,s,a){"use strict";a.r(s);var n=a(54),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"守护进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#守护进程"}},[t._v("#")]),t._v(" 守护进程")]),t._v(" "),a("p",[a("code",[t._v("pm2")]),t._v(" 和 普通的 "),a("code",[t._v("node 脚本")]),t._v(" 或者 "),a("code",[t._v("nodemon 脚本")]),t._v(" 启动方式的区别是，后者启动脚本后碰到报错服务就挂掉了。")]),t._v(" "),a("h2",{attrs:{id:"测试代码-app-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试代码-app-js"}},[t._v("#")]),t._v(" 测试代码 app.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正常访问日志")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Current time is "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误日志")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"假装出错了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问 error 服务会挂掉")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"报错了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      errno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pm2 start server"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Server is running at port 9999"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"yarn-dev-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-dev-启动"}},[t._v("#")]),t._v(" yarn dev 启动")]),t._v(" "),a("p",[a("code",[t._v("yarn dev")]),t._v(" 通过 "),a("code",[t._v("node 或者 nodemon")]),t._v(" 启动后，访问 "),a("code",[t._v("/error")]),t._v(" 后，基本服务就酱紫了，挂了。想访问只能再重启一次")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ node app.js\nServer is running at port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\nCurrent "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1644055273760")]),t._v("\n假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1644055273762")]),t._v("\n/Users/hanzhizhen/code-study/pm2-test/app.js:11\n    throw new Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"报错了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ^\n\nError: 报错了\n    at Server."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/hanzhizhen/code-study/pm2-test/app.js:11:11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at Server.emit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events.js:375:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at parserOnIncoming "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_http_server.js:897:12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    at HTTPParser.parserOnHeadersComplete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_http_common.js:126:17"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nerror Command failed with "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".\ninfo Visit https://yarnpkg.com/en/docs/cli/run "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" documentation about this command.\n")])])]),a("h2",{attrs:{id:"pm2-start-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-start-启动"}},[t._v("#")]),t._v(" pm2 start 启动")]),t._v(" "),a("p",[t._v("先看启动后的列表如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PM2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting /Users/hanzhizhen/code-study/pm2-test/app.js "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" fork_mode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PM2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Done.\n┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("  │ name   │ namespace   │ version │ mode    │ pid      │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uptime")]),t._v(" │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │\n├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   │ app    │ default     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0   │ fork    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28514")]),t._v("    │ 0s     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("    │ online    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%       │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".2mb    │ han… │ disabled │\n└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘\n")])])]),a("p",[t._v("然后访问 "),a("code",[t._v("/error")]),t._v(" 后，服务必然也是挂了。但是再访问首页仍然可以访问，这就是"),a("code",[t._v("进程守护")]),t._v("，我理解的就是服务进程挂了，能自动启动的效果。")]),t._v(" "),a("p",[t._v("看一下访问过 "),a("code",[t._v("/error")]),t._v(" 页面后的 "),a("code",[t._v("pm2 list")]),t._v("情况，会发现 "),a("strong",[t._v("↺")]),t._v(" 有重启的情况，这就是服务挂掉后自动重启的表征，号称"),a("code",[t._v("进程守护")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("  │ name   │ namespace   │ version │ mode    │ pid      │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uptime")]),t._v(" │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │\n├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   │ app    │ default     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0   │ fork    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28610")]),t._v("    │ 7s     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("    │ online    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%       │ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("38")]),t._v(".4mb   │ han… │ disabled │\n└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘\n")])])]),a("p",[t._v("同时，"),a("code",[t._v("pm2 log")]),t._v(" 能看到报错的信息")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/Users/hanzhizhen/.pm2/logs/app-error.log last "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" lines:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Error: 报错了\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at Server."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/hanzhizhen/code-study/pm2-test/app.js:11:11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at Server.emit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events.js:375:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at Server."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/usr/local/lib/node_modules/pm2/node_modules/@pm2/io/build/main/metrics/httpMetrics.js:166:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at parserOnIncoming "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_http_server.js:897:12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at HTTPParser.parserOnHeadersComplete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_http_common.js:126:17"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1644056274930")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Error: 报错了\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at Server."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/Users/hanzhizhen/code-study/pm2-test/app.js:11:11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at Server.emit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events.js:375:28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at Server."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/usr/local/lib/node_modules/pm2/node_modules/@pm2/io/build/main/metrics/httpMetrics.js:166:33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at parserOnIncoming "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_http_server.js:897:12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     at HTTPParser.parserOnHeadersComplete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_http_common.js:126:17"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1644056277961")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1644056278281")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);