(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{484:function(s,a,t){"use strict";t.r(a);var e=t(54),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"简单的-sql-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单的-sql-语句"}},[s._v("#")]),s._v(" 简单的 sql 语句")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("插入语句：insert into 表名 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key1, key2, "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("passwod"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1, value2, value3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n查询语句：\n  - 全部查询： "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  - 字段查询： "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" key1, key2 from 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  - 模糊查询： "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from 表名 where key like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%模糊字段%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  - 条件排序： "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from 表名 where "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value order by key名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n更新语句：update 表名 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value where "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n删除语句：\n  - delete from 表名 where "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  - 正常开发工作，都是软删除，比如更改一下该条的删除状态，而不是真的删除\n\n版本查询：select version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n备注：\n  - 像 password这种保留字要添加 `"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v(" 进行包裹\n  - 不等于符号是 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\n  - asc 升序"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" desc 降序"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("order by key desc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  - varchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Mysql 版本大于5已上，varchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("中的 n 表示字符为 n个，无论是数字、英文或是汉字\n  - sql 语句的注释方式是在 sql 语句前面加两个 - 和一个宫格，即： "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-- `\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);