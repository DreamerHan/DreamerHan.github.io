(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{545:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[t._v("#")]),t._v(" NodeJS")]),t._v(" "),a("h2",{attrs:{id:"nodejs-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-是什么"}},[t._v("#")]),t._v(" nodejs 是什么？")]),t._v(" "),a("p",[t._v("nodejs 是基于 Chrome V8 引擎的 javascript 运行时")]),t._v(" "),a("p",[t._v("运行时，即运行环境；而 Chrome V8 的话，相当于 js 语言在另一种运行环境的解释器。")]),t._v(" "),a("h2",{attrs:{id:"commonjs-与-es6-module-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-与-es6-module-的区别"}},[t._v("#")]),t._v(" commonjs 与 ES6 Module 的区别？")]),t._v(" "),a("ul",[a("li",[t._v("commonjs 是动态引入，执行时引入")]),t._v(" "),a("li",[t._v("ES6 Module 是静态引入，编译时引入，ssr 的组件库时会考虑到这个。")])]),t._v(" "),a("p",[t._v("示例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6 Module 是静态引入，编译时引入，所以必须放在最外层")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const flag = true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if(flag) {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   import { sum, test } from './utils' // 放在 if 语句里 编译时 就会报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CommonJs 引入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commonJs 中是不会报错的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"path-resolve-与-path-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve-与-path-join"}},[t._v("#")]),t._v(" path.resolve 与 path.join")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("path.resolve")])]),t._v(" 得到是拼接后的绝对路径")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("path.join")])]),t._v(" 得到是拼接后的绝对路径")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /Users/xxx/code-study/blog-han/docs/node/src/test")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ../src/test")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"dirname-与-filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirname-与-filename"}},[t._v("#")]),t._v(" dirname 与 filename")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("code",[t._v("__dirname")])]),t._v(" 执行文件的文件目录路径")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("__filename")])]),t._v(" 执行文件的整个路径(包含文件自身信息)")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 node 1.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /Users/hanzhizhen/code-study/blog-han/docs/node/mianshi")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /Users/hanzhizhen/code-study/blog-han/docs/node/mianshi/1.js")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"浏览器的-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的-event-loop"}},[t._v("#")]),t._v(" 浏览器的 event loop")]),t._v(" "),a("p",[t._v("浏览器 js 的异步分为：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("宏任务：setTimeout、setInterval、ajax 等")])]),t._v(" "),a("li",[a("p",[t._v("微任务：Promise async/await")])]),t._v(" "),a("li",[a("p",[t._v("微任务比宏任务执行时机更早")])]),t._v(" "),a("li",[a("p",[t._v("Call Stack 空闲时，触发 Event Loop 机制，执行宏任务；但是触发 Event Loop 之前，如果有微任务存在，会优先将 微任务 执行完")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);