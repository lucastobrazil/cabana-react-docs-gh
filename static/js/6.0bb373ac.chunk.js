(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=g,t.HashLink=T,t.NavHashLink=x;var r=d(n(0)),l=d(n(3)),i=n(17);function d(e){return e&&e.__esModule?e:{default:e}}var s="",c=null,m=null,p=null;function u(){s="",null!==c&&c.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function y(){var e=document.getElementById(s);return null!==e&&(p(e),u(),!0)}function g(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return r.default.createElement(t,a({},n,{onClick:function(t){u(),e.onClick&&e.onClick(t),"string"===typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"===typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===c&&(c=new MutationObserver(y)),c.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){u()},1e4))},0))}}),e.children)}function T(e){return g(e,i.Link)}function x(e){return g(e,i.NavLink)}var b={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};T.propTypes=b,x.propTypes=b},492:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),l=n(36),i=o.a.createContext({}),d=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=d(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},p=function(e){var t=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),i=d(t);return o.a.createElement(i[r+"."+n]||i[n]||m[n]||a,l)};function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement";var y=n(15),g={bg:"primary",color:"white",mr:1},T={},x="wrapper";function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(x,Object.assign({},T,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Buttons"})),u("h1",null,"Buttons"),u("h2",null,"Small"),u(r.ButtonSmall,Object.assign({},g,{mdxType:"ButtonSmall"}),"Button"),u(r.ButtonSmall,Object.assign({},g,{mdxType:"ButtonSmall"}),u(y.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.ButtonSmall,Object.assign({},g,{mdxType:"ButtonSmall"}),"Button ",u(y.IconHeart,{mdxType:"IconHeart"})),u("h2",null,"Normal"),u(r.Button,Object.assign({},g,{mdxType:"Button"}),"Button"),u(r.Button,Object.assign({},g,{mdxType:"Button"}),u(y.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.Button,Object.assign({},g,{mdxType:"Button"}),"Button ",u(y.IconHeart,{mdxType:"IconHeart"})),u("h2",null,"Large"),u(r.ButtonLarge,Object.assign({},g,{fontWeight:"bold",mdxType:"ButtonLarge"}),"Button"),u(r.ButtonLarge,Object.assign({},g,{fontWeight:"bold",mdxType:"ButtonLarge"}),u(y.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.ButtonLarge,Object.assign({},g,{fontWeight:"bold",mdxType:"ButtonLarge"}),"Button ",u(y.IconHeart,{mdxType:"IconHeart"})),u("h2",null,"Colourful"),u(r.ButtonSmall,{mr:1,bg:"error",borderRadius:"large",color:"white",mdxType:"ButtonSmall"},"Button"),u(r.Button,{mr:1,bg:"success",color:"black",mdxType:"Button"},u(y.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.ButtonLarge,{bg:"tertiary",color:"black",mdxType:"ButtonLarge"},u(y.IconHeart,{mdxType:"IconHeart"})," Button"))}b.isMDXComponent=!0;var h="Hey there! I'm Tom. A singer, who's well known for my various awesome jams, and other amazing thangs.",f={},v="wrapper";function C(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(v,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Cards"})),u("h1",null,"Cards"),u("div",{style:{maxWidth:1024,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridColumnGap:10,gridRowGap:30,alignItems:"start"}},u(r.Card,{is:"article",textAlign:"center",mdxType:"Card"},u(r.CardImage,{mdxType:"CardImage"}),u(r.CardTitle,{mdxType:"CardTitle"},"Tom Jones"),u(r.CardBodyText,{mb:4,display:"inline-block",mdxType:"CardBodyText"},h),u(r.Button,{bg:"primary",color:"white",borderRadius:"large",mdxType:"Button"},u(y.IconHeart,{mdxType:"IconHeart"}),"Follow me on Twitter")),u(r.Card,{is:"article",textAlign:"center",mdxType:"Card"},u(r.CardImage,{height:"240px",mdxType:"CardImage"}),u(r.CardTitle,{mdxType:"CardTitle"},"Tom Jones"),u(r.CardBodyText,{mb:4,display:"inline-block",mdxType:"CardBodyText"},h),u(r.Button,{bg:"primary",color:"white",mdxType:"Button"},"View Full Profile")),u(r.Card,{is:"article",mdxType:"Card"},u(r.CardImage,{mdxType:"CardImage"}),u(r.CardTitle,{mdxType:"CardTitle"},"Tom Jones"),u(r.CardBodyText,{mdxType:"CardBodyText"},h),u(r.CardFooter,{mdxType:"CardFooter"},u(r.TinyText,{color:"grey",mdxType:"TinyText"},"23 Friends"))),u(r.Card,{is:"article",p:8,mdxType:"Card"},u(r.CardTitle,{mdxType:"CardTitle"},"More Padding"),u(r.CardBodyText,{mdxType:"CardBodyText"},h)),u(r.Card,{is:"article",bg:"secondary",borderRadius:"small",boxShadow:60,mdxType:"Card"},u(r.CardTitle,{color:"warning",fontWeight:"normal",mdxType:"CardTitle"},"Fancy secondary one"),u(r.CardBodyText,{color:"black",mdxType:"CardBodyText"}," ",h)),u(r.Card,{is:"article",borderRadius:"small",boxShadow:60,mdxType:"Card"},u(r.CardTitle,{color:"success",fontWeight:"normal",mb:0,mdxType:"CardTitle"},"Success!"))))}C.isMDXComponent=!0;var B=n(19),w=n(20),O=n(22),H=n(21),j=n(24),I=n(23),E=function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(O.a)(this,Object(H.a)(t).call(this))).state={checked:!1},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e}return Object(I.a)(t,e),Object(w.a)(t,[{key:"handleChange",value:function(){this.setState({checked:!this.state.checked})}},{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,a=e.disabled;return o.a.createElement(r.Checkbox,{disabled:a,value:n,label:t,checked:this.state.checked,onChange:this.handleChange,py:1})}}]),t}(o.a.Component),k=function(){return o.a.createElement(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr",alignItems:"center"}},o.a.createElement(E,{value:"jar_jar",label:"Jar Jar Binks"}),o.a.createElement(E,{value:"queen_amidala",label:"Queen Amidala"}),o.a.createElement(E,{disabled:!0,value:"mon_mothma",label:"Mon Mothma"}))},F=function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(O.a)(this,Object(H.a)(t).call(this))).state={selected:"obi_wan"},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e}return Object(I.a)(t,e),Object(w.a)(t,[{key:"handleChange",value:function(e){this.setState({selected:e.target.value})}},{key:"render",value:function(){return o.a.createElement(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr",alignItems:"center"}},o.a.createElement(r.Radio,{value:"obi_wan",label:"Obi Wan Kenobi",checked:"obi_wan"===this.state.selected,onChange:this.handleChange,py:1}),o.a.createElement(r.Radio,{value:"han_solo",label:"Han Solo",checked:"han_solo"===this.state.selected,onChange:this.handleChange,py:1}),o.a.createElement(r.Radio,{value:"anakin_skywalker",label:"Anakin Skywalker (disabled)",disabled:!0,checked:"anakin_skywalker"===this.state.selected,onChange:this.handleChange,py:1}))}}]),t}(o.a.Component),L={},S="wrapper";function D(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(S,Object.assign({},L,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Forms"})),u("h1",null,"Forms"),u("h2",null,"Todo:"),u("ul",null,u("li",null,"Inputs with icons left and right"),u("li",null,"Textarea"),u("li",null,"Toggle switch")),u(r.HeadingFive,{mdxType:"HeadingFive"},"Text Inputs"),u(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr 1fr 1fr 1fr",gridColumnGap:16,gridRowGap:16,alignItems:"center"},mdxType:"Box"},u(r.TextInput,{placeholder:"Default",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"primary",placeholder:"Active",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"success",color:"success",defaultValue:"Success",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"error",color:"error",defaultValue:"Error",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"error",disabled:!0,mdxType:"TextInput"}),u(r.TextInput,{borderRadius:"large",placeholder:"Large border radius",mdxType:"TextInput"}),u(r.TextInput,{borderRadius:"none",placeholder:"No border radius",mdxType:"TextInput"}),u(r.TextInput,{borderRadius:"none",mdxType:"TextInput"}),u("div",null,u(r.FormLabel,{htmlFor:"textInput",mdxType:"FormLabel"},"First Name"),u(r.TextInput,{borderColor:"error",name:"textInput",my:"4px",mdxType:"TextInput"}),u(r.ValidationLabel,{mdxType:"ValidationLabel"},"This is a required field")),u("div",null,u(r.FormLabel,{htmlFor:"textInput2",mdxType:"FormLabel"},"Phone Number"),u(r.TextInput,{borderColor:"success",name:"textInput2",defaultValue:"(015) 2323 2320",my:"4px",mdxType:"TextInput"}),u(r.ValidationLabel,{color:"success",mdxType:"ValidationLabel"},"Verified"))),u(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr 1fr 1fr 1fr",gridColumnGap:16,gridRowGap:16,alignItems:"center",marginTop:32},mdxType:"Box"},u("div",null,u(r.HeadingFive,{mdxType:"HeadingFive"},"Radio Buttons"),u(F,{mdxType:"StatefulRadioButtons"})),u("div",null,u(r.HeadingFive,{mdxType:"HeadingFive"},"Checkboxes"),u(k,{mdxType:"Checkboxes"}))))}D.isMDXComponent=!0;var M=function(){return u(r.Box,{fontSize:"lead",display:"grid",color:"darkGrey",style:{gridTemplateRows:"repeat(10, 1fr)",gridTemplateColumns:"repeat(10, 1fr)",gap:"20px"}},Object.keys(y).map(function(e){return u(y[e],{key:e})}))},N={Icons:M},P="wrapper";function W(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(P,Object.assign({},N,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Icons"})),u("h1",null,"Icons"),u("p",null,"Cabana uses the ",u("a",Object.assign({parentName:"p"},{href:"https://github.com/lucastobrazil/cabanaico"}),"cabanaico")," library."),u(M,{mdxType:"Icons"}))}W.isMDXComponent=!0;var X=n(12),R=n(49),A=n(7),z=n(207),V=function(e){return e.split(" ").join("")};function _(){var e=Object(X.a)(["\n  list-style-type: none;\n  ",";\n  ",";\n  ",";\n  ",";\n  a {\n    ",";\n    color: inherit;\n    text-decoration: none;\n    display: block;\n\n    &:hover {\n      color: black;\n      background-color: rgba(0, 0, 0, 0.1);\n    }\n  }\n"]);return _=function(){return e},e}function J(){var e=Object(X.a)(["\n  ",";\n  padding: 0;\n  ",";\n"]);return J=function(){return e},e}var G=A.default.ul(J(),R.fontFamily,R.space),U=A.default.li(_(),R.fontWeight,R.borderBottom,R.borderColor,R.color,R.space);U.defaultProps={p:1};var q=["Avatars","Buttons","Cards","Chips","Forms","Icons","Notification Bar","Pagination","Progress Bar","Tabs","Tags","Text","Tooltips"],Y=["DatePickers","Dropdowns","Map","Menus","Modal","Sliders","Tables","Video Player"];function K(){return o.a.createElement(r.Box,{position:"fixed",width:246,pt:2,mr:2,height:"100%",css:"overflow: auto"},o.a.createElement(r.CaptionText,{fontWeight:"bold",px:1,color:"lightGrey"},"Components"),o.a.createElement(G,{fontFamily:"default",m:0},q.map(function(e){return o.a.createElement(U,{key:e,color:"grey"},o.a.createElement(z.HashLink,{to:"#".concat(V(e))},e))})),o.a.createElement(G,{fontFamily:"default",m:0,mt:2},o.a.createElement(r.CaptionText,{fontWeight:"bold",px:1,color:"grey"},"Not yet done:"),Y.map(function(e){return o.a.createElement(U,{key:e,color:"grey"},o.a.createElement(z.HashLink,{to:"#".concat(V(e))},e))})))}var Q={},Z="wrapper";function $(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(Z,Object.assign({},Q,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"NotificationBar"})),u("h1",null,"NotificationBar"),u(r.NotificationBar,{mb:1,content:"Oops! There seems to be an error",bg:"error",color:"white",mdxType:"NotificationBar"}),u(r.NotificationBar,{mb:1,content:"Have you saved your work?",bg:"warning",color:"black",mdxType:"NotificationBar"}),u(r.NotificationBar,{mb:1,content:"Oh yes! Settings have been saved",bg:"success",color:"white",mdxType:"NotificationBar"}),u(r.NotificationBar,{mb:1,content:"Oh yes! Settings have been saved",bg:"primary",color:"white",dismissable:!1,mdxType:"NotificationBar"}),u(r.NotificationBar,{boxShadow:100,m:3,icon:!1,fontSize:"small",content:"W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2018 by Refsnes Data. All Rights Reserved.",bg:"success",color:"white",mdxType:"NotificationBar"}))}$.isMDXComponent=!0;var ee={},te="wrapper";function ne(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(te,Object.assign({},ee,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Pagination"})),u("h1",null,"Pagination"),u(r.Pagination,{mdxType:"Pagination"}),u(r.Pagination,{size:16,mdxType:"Pagination"}),u(r.Pagination,{size:32,mdxType:"Pagination"}),u(r.Pagination,{type:"numbers",mdxType:"Pagination"}))}ne.isMDXComponent=!0;var ae=function(e){var t=e.onChange,n=e.amount;return o.a.createElement(a.Fragment,null,o.a.createElement("input",{type:"range",style:{width:"100%"},step:"1",value:n,onChange:t,list:"tickmarks"}),o.a.createElement("datalist",{id:"tickmarks"},o.a.createElement("option",{value:"0"}),o.a.createElement("option",{value:"10"}),o.a.createElement("option",{value:"20"}),o.a.createElement("option",{value:"30"}),o.a.createElement("option",{value:"40"}),o.a.createElement("option",{value:"50"}),o.a.createElement("option",{value:"60"}),o.a.createElement("option",{value:"70"}),o.a.createElement("option",{value:"80"}),o.a.createElement("option",{value:"90"}),o.a.createElement("option",{value:"100"})))},oe=function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(O.a)(this,Object(H.a)(t).call(this))).state={amount:62},e}return Object(I.a)(t,e),Object(w.a)(t,[{key:"onChange",value:function(e){this.setState({amount:parseInt(e.target.value,10)})}},{key:"render",value:function(){var e=this.state.amount,t=this.props,n=t.innerBg,a=t.outerBg,l=t.borderRadius,i=t.p,d=t.fontSize,s=t.showNumber,c=t.minHeight,m=t.color;return o.a.createElement(r.Box,{mt:3},o.a.createElement(ae,{onChange:this.onChange.bind(this),amount:e}),o.a.createElement(r.ProgressBar,{color:m,p:i,innerBg:n,outerBg:a,amount:e,borderRadius:l,fontSize:d,showNumber:s,minHeight:c}))}}]),t}(o.a.Component),re={},le="wrapper";function ie(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(le,Object.assign({},re,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"ProgressBar"})),u("h1",null,"ProgressBar"),u("p",null,"Note: the sliders included below are to simulate the changing progress of the ",u("inlineCode",{parentName:"p"},"ProgressBar"),"."),u(r.Box,{width:1/3,mdxType:"Box"},u(oe,{innerBg:"primary",mdxType:"StatefulExample"}),u(oe,{innerBg:"tertiary",borderRadius:"large",mdxType:"StatefulExample"}),u(oe,{innerBg:"success",color:"white",p:1,fontSize:"body",borderRadius:"large",mdxType:"StatefulExample"}),u(oe,{innerBg:"primary",p:1,borderRadius:"none",mdxType:"StatefulExample"}),u(oe,{innerBg:"primary",fontSize:"uber",mdxType:"StatefulExample"}),u(oe,{innerBg:"primary",showNumber:!1,minHeight:20,mdxType:"StatefulExample"})))}ie.isMDXComponent=!0;var de={},se="wrapper";function ce(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(se,Object.assign({},de,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Tabs"})),u("h1",null,"Tabs"),u(r.Tabs,{mdxType:"Tabs"},u("div",{label:"News"},"See ya later, ",u("em",null,"Alligator"),"!"),u("div",{label:"Store"},"After 'while, ",u("em",null,"Crocodile"),"!"),u("div",{label:"Videos"},"Nothing to see here, this tab is ",u("em",null,"extinct"),"!"),u("div",{label:"Photos"},"Nothing to see here, this tab is ",u("em",null,"extinct"),"!")),u(r.HeadingTwo,{fontSize:"h5",mt:6,mdxType:"HeadingTwo"},"With Icon"),u(r.Tabs,{mdxType:"Tabs"},u("div",{label:"Store",tabIcon:u(y.IconCart,{mdxType:"IconCart"})},"Shopping cart!"),u("div",{label:"Videos",tabIcon:u(y.IconVideo,{mdxType:"IconVideo"})},"Check out videos"),u("div",{label:"Photos",tabIcon:u(y.IconCamera,{mdxType:"IconCamera"})},"See all photos")))}ce.isMDXComponent=!0;var me=function(e){var t=e.fontFamily;return u("div",null,u(r.UberText,{fontWeight:"bold",fontFamily:t},"Uber"),u(r.UberText,{fontFamily:t},"Uber"),u(r.HeroText,{fontWeight:"bold",fontFamily:t},"Hero"),u(r.HeroText,{fontFamily:t},"Hero"),u(r.HeadingOne,{fontWeight:"bold",fontFamily:t},"H1 Heading"),u(r.HeadingOne,{fontFamily:t},"H1 Heading"),u(r.HeadingTwo,{fontWeight:"bold",fontFamily:t},"H2 Heading"),u(r.HeadingTwo,{fontFamily:t},"H2 Heading"),u(r.HeadingThree,{fontWeight:"bold",fontFamily:t},"H3 Heading"),u(r.HeadingThree,{fontFamily:t},"H3 Heading"),u(r.HeadingFour,{fontWeight:"bold",fontFamily:t},"H4 Heading"),u(r.HeadingFour,{fontFamily:t},"H4 Heading"),u(r.HeadingFive,{fontWeight:"bold",fontFamily:t},"H5 Heading"),u(r.HeadingFive,{fontFamily:t},"H5 Heading"),u(r.LeadText,{fontWeight:"bold",fontFamily:t},"Lead"),u(r.LeadText,{fontFamily:t},"Lead"),u(r.BodyText,{fontWeight:"bold",fontFamily:t},"Body"),u(r.BodyText,{fontFamily:t},"Body"),u(r.SmallText,{fontWeight:"bold",fontFamily:t},"Small"),u(r.SmallText,{fontFamily:t},"Small"),u(r.CaptionText,{fontWeight:"bold",fontFamily:t},"Caption"),u(r.CaptionText,{fontFamily:t},"Caption"),u(r.TinyText,{fontWeight:"bold",fontFamily:t},"Tiny"),u(r.TinyText,{fontFamily:t},"Tiny"))},pe={Content:me},ue="wrapper";function ye(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(ue,Object.assign({},pe,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Text"})),u("h1",null,"Text"),u("div",{style:{display:"flex",flexWrap:"wrap"}},u("div",null,u(r.HeadingOne,{color:"secondary",mdxType:"HeadingOne"},"Font Family #1"),u(me,{mdxType:"Content"})),u("div",null,u(r.HeadingOne,{color:"primary",mdxType:"HeadingOne"},"Font Family #2"),u(me,{fontFamily:"alt",mdxType:"Content"}))))}function ge(){var e=Object(X.a)(["\n  color: black;\n  ",";\n  display: block;\n  text-align: center;\n  font-size: 10px;\n  border-radius: 3px;\n  border: 1px solid lightgrey;\n  text-transform: uppercase;\n  ",";\n"]);return ge=function(){return e},e}ye.isMDXComponent=!0;var Te=A.default.label(ge(),R.fontFamily,R.space);Te.defaultProps={fontFamily:"default",px:1};var xe=Te,be={fontFamily:"default",content:"Here is my tooltip!",bg:"primary",color:"papayawhip",mx:2,my:8},he=function(e){return u(r.Tooltip,Object.assign({},be,e))},fe={BaseTooltip:he},ve="wrapper";function Ce(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(ve,Object.assign({},fe,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Tooltip"})),u("h1",null,"Tooltip"),u("p",null,"Hover over the labels below to see the tooltips."),u(he,{mdxType:"BaseTooltip"},u(xe,{mdxType:"DocLabel"},"Default")),u(he,{placement:"top",bg:"warning",color:"secondary",mdxType:"BaseTooltip"},u(xe,{mdxType:"DocLabel"},"Top")),u(he,{placement:"right",mdxType:"BaseTooltip"},u(xe,{mdxType:"DocLabel"},"Right")),u(he,{placement:"bottom",mdxType:"BaseTooltip"},u(xe,{mdxType:"DocLabel"},"Bottom")),u(he,{placement:"left",mdxType:"BaseTooltip"},u(xe,{mdxType:"DocLabel"},"Left")))}Ce.isMDXComponent=!0;var Be={},we="wrapper";function Oe(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(we,Object.assign({},Be,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Chips"})),u("h1",null,"Chips"),u(r.Chip,{mr:1,text:"Jack White",mdxType:"Chip"}),u(r.Chip,{mr:1,text:"Adele",dismissable:!0,mdxType:"Chip"}),u(r.Chip,{mr:1,bg:"secondary",color:"primary",text:"Freddie Mercury",dismissable:!0,mdxType:"Chip"}),u(r.Chip,{mr:1,bg:"tertiary",text:"Thom Yorke",mdxType:"Chip"}),u(r.Chip,{mr:1,text:"Duran Duran",avatarUrl:"https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",mdxType:"Chip"}))}Oe.isMDXComponent=!0;var He={},je="wrapper";function Ie(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(je,Object.assign({},He,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Tags"})),u("h1",null,"Tags"),u(r.Tag,{mr:1,text:"Jack White",mdxType:"Tag"}),u(r.Tag,{mr:1,text:"Adele",dismissable:!0,mdxType:"Tag"}),u(r.Tag,{mr:1,bg:"secondary",color:"primary",text:"Freddie Mercury",dismissable:!0,mdxType:"Tag"}),u(r.Tag,{mr:1,bg:"tertiary",text:"Thom Yorke",mdxType:"Tag"}),u(r.Tag,{mr:1,text:"Duran Duran",avatarUrl:"https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",mdxType:"Tag"}))}Ie.isMDXComponent=!0;var Ee="https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",ke=function(e){return u(xe,Object.assign({mr:1,mt:2},e))},Fe={Label:ke},Le="wrapper";function Se(e){var t=e.components,n=Object(l.a)(e,["components"]);return u(Le,Object.assign({},Fe,n,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Avatars"})),u("h1",null,"Avatars"),u("div",{style:{display:"flex",alignItems:"flex-end"}},u("div",null,u(r.Avatar,{mx:2,size:"jumbo",src:Ee,mdxType:"Avatar"}),u(ke,{mdxType:"Label"},"Jumbo")),u("div",null,u(r.Avatar,{mx:2,size:"large",src:Ee,mdxType:"Avatar"}),u(ke,{mdxType:"Label"},"Large")),u("div",null,u(r.Avatar,{mx:2,size:"medium",src:Ee,mdxType:"Avatar"}),u(ke,{mdxType:"Label"},"Medium")),u("div",null,u(r.Avatar,{mx:2,size:"small",src:Ee,mdxType:"Avatar"}),u(ke,{mdxType:"Label"},"Small"))))}Se.isMDXComponent=!0,n.d(t,"default",function(){return Me});var De={h1:function(e){return o.a.createElement(r.HeadingThree,Object.assign({is:"h1",pt:12,mb:2,style:{display:"block",borderBottom:"1px solid lightgrey"}},e))},h2:function(e){return o.a.createElement(r.HeadingFive,Object.assign({is:"h2",my:2},e))},p:function(e){return o.a.createElement(r.BodyText,Object.assign({pb:2},e))}};function Me(){return o.a.createElement(s,{components:De},o.a.createElement(r.Box,{display:"flex"},o.a.createElement(K,null),o.a.createElement(r.Box,{ml:246,maxWidth:1e3,px:4},o.a.createElement(r.HeadingOne,{mt:3},"Component Library"),o.a.createElement(Se,null),o.a.createElement(b,null),o.a.createElement(C,null),o.a.createElement(Oe,null),o.a.createElement(D,null),o.a.createElement(W,null),o.a.createElement($,null),o.a.createElement(ne,null),o.a.createElement(ie,null),o.a.createElement(ce,null),o.a.createElement(Ie,null),o.a.createElement(ye,null),o.a.createElement(Ce,null))))}}}]);
//# sourceMappingURL=6.0bb373ac.chunk.js.map