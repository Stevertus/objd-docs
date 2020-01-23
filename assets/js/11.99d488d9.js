(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),a("iframe",{staticStyle:{margin:"0 calc(50% - 280px)"},attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/XgJ74JBXoco",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),a("p",[t._v("A Module extends the functionality of a Widget. It allows deeper intregration and file generation.")]),t._v(" "),a("p",[t._v("The Module is therefore mostly used in your tick function or with the modules provider of the Pack.")]),t._v(" "),a("p",[t._v("It is supposed to make the concept of animations, timers and continuous ticks easier and gives an high level interface to add complex operations to objD.")]),t._v(" "),a("h3",{attrs:{id:"definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[t._v("#")]),t._v(" Definition")]),t._v(" "),a("p",[t._v("A Module has like a Widget a generate method to return the underlying tree and a registerFiles method.")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tWidget "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Context context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("File"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The registered files are just added to the pack as if they were defined in it or in the Widget tree.")]),t._v(" "),a("p",[t._v("A Module can still be used as a widget everywhere and also handles conditions and groups.")]),t._v(" "),a("h2",{attrs:{id:"scoretimermodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoretimermodule"}},[t._v("#")]),t._v(" ScoreTimerModule")]),t._v(" "),a("iframe",{staticStyle:{margin:"0 calc(50% - 280px)"},attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/fAV0w1JZ7WE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),a("p",[t._v("The ScoreTimerModule implements a continuous timer with a delay of a number of ticks. It therefore uses a Score to count up or down in steps and resets to the start value afterwards.")]),t._v(" "),a("blockquote",[a("p",[t._v("To work probably this has to be executed every tick or added to the Packs modules.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("constructor")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[t._v("the name of the Timer and the Scoreboard")])]),t._v(" "),a("tr",[a("td",[t._v("ticks")]),t._v(" "),a("td",[t._v("the delay in ticks between each execution(required)")])]),t._v(" "),a("tr",[a("td",[t._v("child")]),t._v(" "),a("td",[t._v("a Widget that is executed after the delay")])]),t._v(" "),a("tr",[a("td",[t._v("steps")]),t._v(" "),a("td",[t._v("the number that it counts up every time(default = 1)")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",[t._v("a number that is used to reset the timer after the delay(default = 0)")])]),t._v(" "),a("tr",[a("td",[t._v("selector")]),t._v(" "),a("td",[t._v("a custom selector to hold the score (default = playername of name)")])]),t._v(" "),a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("a custom path to hold the required function(default = timers/)")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScoreTimerModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timer1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          ticks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10sec")]),t._v("\n          child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Timer triggered"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"clickevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clickevent"}},[t._v("#")]),t._v(" ClickEvent")]),t._v(" "),a("iframe",{staticStyle:{margin:"0 calc(50% - 280px)"},attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/KpdIrlhxdhk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),a("p",[t._v("The ClickEvent Module uses the trigger of a carrot on a stick to register right clicks with a scoreboard and execute a [onClick] Widget.")]),t._v(" "),a("p",[t._v("This module has to be executed every tick to work!")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("constructor")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("used to identify different click Events")])]),t._v(" "),a("tr",[a("td",[t._v("onClick")]),t._v(" "),a("td",[t._v("Widget that is executed if the COAS is clicked")])]),t._v(" "),a("tr",[a("td",[t._v("selectedItem")]),t._v(" "),a("td",[t._v("just triggers the click if this Item is selected(optional)")])]),t._v(" "),a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("path to create the click handler function(default = "),a("code",[t._v("events/")]),t._v(")")])])])]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ClickEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tonClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Clicked"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firstClick"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tselectedItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("carrot_on_a_stick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"events/"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);