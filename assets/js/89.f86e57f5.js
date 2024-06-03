(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{555:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[s._v("#")]),s._v(" 常用指令")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("ul",[a("li",[s._v("安装：npm install pm2 -g")]),s._v(" "),a("li",[s._v("pm2 --version")])])]),s._v(" "),a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("pm2 start xx.js 或 配置文件")]),s._v(" 启动服务")]),s._v(" "),a("li",[a("code",[s._v("pm2 list")]),s._v(" 查看进程列表")]),s._v(" "),a("li",[a("code",[s._v("pm2 restart appName / id")]),s._v(" 启动服务或某个进程")]),s._v(" "),a("li",[a("code",[s._v("pm2 stop appName / id")]),s._v(" 停止服务或某个进程")]),s._v(" "),a("li",[a("code",[s._v("pm2 delete appName / id")]),s._v(" 删除服务或某个进程")]),s._v(" "),a("li",[a("code",[s._v("pm2 info appName / id")]),s._v(" 查看服务或某个进程的信息")]),s._v(" "),a("li",[a("code",[s._v("pm2 log appName / id")]),s._v(" 查看服务或某个进程的日志信息")]),s._v(" "),a("li",[a("code",[s._v("pm2 monit appName / id")]),s._v(" 查看服务或某个进程的监控信息，像 CPU 或内存的情况")])]),s._v(" "),a("h2",{attrs:{id:"测试文件-app-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试文件-app-js"}},[s._v("#")]),s._v(" 测试文件 app.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正常访问日志")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Current time is '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Date "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误日志")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'假装出错了'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      errno"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2 start server"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Server is running at port 9999"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"pm2-start-app-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-start-app-js"}},[s._v("#")]),s._v(" pm2 start app.js")]),s._v(" "),a("p",[a("code",[s._v("pm2 list")]),s._v(" 得到的大概也是这个样子的列表")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PM2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Starting /Users/hanzhizhen/code-study/pm2-test/app.js "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" fork_mode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PM2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Done.\n┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("  │ name   │ namespace   │ version │ mode    │ pid      │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v(" │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │\n├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   │ app    │ default     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0   │ fork    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25017")]),s._v("    │ 0s     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    │ online    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%       │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".5mb    │ han… │ disabled │\n└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘\n")])])]),a("h2",{attrs:{id:"pm2-restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-restart"}},[s._v("#")]),s._v(" pm2 restart")]),s._v(" "),a("p",[s._v("重启是通过 "),a("code",[s._v("pm2 restat id值")]),s._v(" 重启的，执行 "),a("code",[s._v("pm2 restart 0")]),s._v(", 其中刷新符号 "),a("strong",[s._v("↺")]),s._v(" 的一列表示的是重启的次数")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Use --update-env to update environment variables\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PM2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Applying action restartProcessId on app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("app.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ids: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PM2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✓\n┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("  │ name   │ namespace   │ version │ mode    │ pid      │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v(" │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │\n├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   │ app    │ default     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0   │ fork    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25067")]),s._v("    │ 0s     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    │ online    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%       │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".7mb    │ han… │ disabled │\n└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘\n")])])]),a("h2",{attrs:{id:"pm2-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-info"}},[s._v("#")]),s._v(" pm2 info")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" Describing process with "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" - name app\n┌───────────────────┬───────────────────────────────────────────────────────────────────────────┐\n│ status            │ online                                                                    │\n│ name              │ app                                                                       │\n│ namespace         │ default                                                                   │\n│ version           │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0                                                                     │\n│ restarts          │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                                                                         │\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("            │ 56s                                                                       │\n│ script path       │ /Users/hanzhizhen/code-study/pm2-test/app.js  脚本文件地址                  │\n│ script args       │ N/A                                                                       │\n│ error log path    │ /Users/hanzhizhen/.pm2/logs/app-error.log   错误日志文件,可配置              │\n│ out log path      │ /Users/hanzhizhen/.pm2/logs/app-out.log     访问日志文件,可配置              │\n│ pid path          │ /Users/hanzhizhen/.pm2/pids/app-0.pid                                     │\n│ interpreter       │ node                                                                      │\n│ interpreter args  │ N/A                                                                       │\n│ script "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("         │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                                                         │\n│ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" cwd          │ /Users/hanzhizhen/code-study/pm2-test                                     │\n│ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" mode         │ fork_mode                                                                 │\n│ node.js version   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.17")]),s._v(".3                                                                   │\n│ node "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("          │ N/A                                                                       │\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" reload    │ ✘                                                                         │\n│ unstable restarts │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                                                                         │\n│ created at        │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-02-05T09:25:04.930Z                                                  │\n└───────────────────┴───────────────────────────────────────────────────────────────────────────┘\n Actions available\n┌────────────────────────┐\n│ km:heapdump            │\n│ km:cpu:profiling:start │\n│ km:cpu:profiling:stop  │\n│ km:heap:sampling:start │\n│ km:heap:sampling:stop  │\n└────────────────────────┘\n Trigger via: pm2 trigger app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("action_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n Code metrics value\n┌────────────────────────┬──────────┐\n│ Heap Size              │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.32")]),s._v(" MiB │\n│ Heap Usage             │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("82.76")]),s._v(" %  │\n│ Used Heap Size         │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.23")]),s._v(" MiB │\n│ Active requests        │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        │\n│ Active handles         │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("        │\n│ Event Loop Latency     │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.90")]),s._v(" ms  │\n│ Event Loop Latency p95 │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.72")]),s._v(" ms  │\n└────────────────────────┴──────────┘\n Divergent "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" variables from "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n\n\n Add your own code metrics: http://bit.ly/code-metrics\n Use "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("pm2 logs app "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--lines "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" to display logs\n Use "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("pm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" to display environment variables\n Use "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("pm2 monit"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" to monitor CPU and Memory usage app\n")])])]),a("h2",{attrs:{id:"pm2-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-log"}},[s._v("#")]),s._v(" pm2 log")]),s._v(" "),a("p",[s._v("大概就能看到 "),a("code",[s._v("console.log")]),s._v(" 的日志信息")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/Users/hanzhizhen/.pm2/logs/app-out.log last "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" lines:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Server is running at port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Server is running at port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Server is running at port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Server is running at port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053687804")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053687804")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053688338")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053688338")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053691431")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053691431")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053691516")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053691516")]),s._v("\n")])])]),a("h2",{attrs:{id:"pm2-monit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2-monit"}},[s._v("#")]),s._v(" pm2 monit")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("┌─ Process List ────────────────────────────┐┌──  app Logs  ───────────────────────────────────────────────────────────────────────────────────────────┐\n│"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" app     Mem:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(" MB    CPU:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" %  onl ││ app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053836195")]),s._v("                                                                    │\n│                                           ││ app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053836195")]),s._v("                                                                          │\n│                                           ││ app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053836365")]),s._v("                                                                    │\n│                                           ││ app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 假装出错了 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053836365")]),s._v("                                                                          │\n│                                           ││ app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Current "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" is  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1644053837575")]),s._v("                                                                    │\n│                                           ││                                                                                                         │\n└───────────────────────────────────────────┘└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘\n┌─ Custom Metrics ──────────────────────────┐┌─ Metadata ──────────────────────────────────────────────────────────────────────────────────────────────┐\n│ Heap Size                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.57")]),s._v(" MiB  ││ App Name              app                                                                               │\n│ Heap Usage                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.06")]),s._v(" %  ││ Namespace             default                                                                           │\n│ Used Heap Size                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.33")]),s._v(" MiB  ││ Version               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0                                                                             │\n│ Active requests                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  ││ Restarts              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                                                                                 │\n│ Active handles                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  ││ Uptime                12m                                                                               │\n│ Event Loop Latency               "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.88")]),s._v(" ms  ││ Script path           /Users/hanzhizhen/code-study/pm2-test/app.js                                      │\n│ Event Loop Latency p95           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.91")]),s._v(" ms  ││ Script args           N/A                                                                               │\n│ HTTP Mean Latency                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ms  ││ Interpreter           node                                                                              │\n└───────────────────────────────────────────┘└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘\n\n left/right: switch boards "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" up/down/mouse: scroll "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Ctrl-C: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("                                               To go further check out https://pm2.io/\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);