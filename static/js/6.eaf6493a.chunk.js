(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{346:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=b,t.NavHashLink=f;var r=d(a(0)),i=d(a(19)),l=a(21);function d(e){return e&&e.__esModule?e:{default:e}}var p="",s=null,c=null,m=null;function u(){p="",null!==s&&s.disconnect(),null!==c&&(window.clearTimeout(c),c=null)}function g(){var e=document.getElementById(p);return null!==e&&(m(e),u(),!0)}function y(e,t){e.scroll,e.smooth;var a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["scroll","smooth"]);return r.default.createElement(t,n({},a,{onClick:function(t){u(),e.onClick&&e.onClick(t),"string"===typeof e.to?p=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"===typeof e.to.hash&&(p=e.to.hash.replace("#","")),""!==p&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===g()&&(null===s&&(s=new MutationObserver(g)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),c=window.setTimeout(function(){u()},1e4))},0))}}),e.children)}function b(e){return y(e,l.Link)}function f(e){return y(e,l.NavLink)}var h={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};b.propTypes=h,f.propTypes=h},631:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),i=a(40),l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},m=function(e){var t=e.components,a=e.mdxType,n=e.originalType,r=e.parentName,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),l=d(t);return o.a.createElement(l[r+"."+a]||l[a]||c[a]||n,i)};function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement";var g=a(23),y={bg:"primary",color:"white",mr:1},b={},f="wrapper";function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(f,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Buttons"})),u("h1",null,"Buttons"),u("h2",null,"Small"),u(r.ButtonSmall,Object.assign({},y,{mdxType:"ButtonSmall"}),"Button"),u(r.ButtonSmall,Object.assign({},y,{mdxType:"ButtonSmall"}),u(g.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.ButtonSmall,Object.assign({},y,{mdxType:"ButtonSmall"}),"Button ",u(g.IconHeart,{mdxType:"IconHeart"})),u("h2",null,"Normal"),u(r.Button,Object.assign({},y,{mdxType:"Button"}),"Button"),u(r.Button,Object.assign({},y,{mdxType:"Button"}),u(g.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.Button,Object.assign({},y,{mdxType:"Button"}),"Button ",u(g.IconHeart,{mdxType:"IconHeart"})),u("h2",null,"Large"),u(r.ButtonLarge,Object.assign({},y,{fontWeight:"bold",mdxType:"ButtonLarge"}),"Button"),u(r.ButtonLarge,Object.assign({},y,{fontWeight:"bold",mdxType:"ButtonLarge"}),u(g.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.ButtonLarge,Object.assign({},y,{fontWeight:"bold",mdxType:"ButtonLarge"}),"Button ",u(g.IconHeart,{mdxType:"IconHeart"})),u("h2",null,"Colourful"),u(r.ButtonSmall,{mr:1,bg:"error",borderRadius:"large",color:"white",mdxType:"ButtonSmall"},"Button"),u(r.Button,{mr:1,bg:"success",color:"black",mdxType:"Button"},u(g.IconHeart,{mdxType:"IconHeart"})," Button"),u(r.ButtonLarge,{bg:"tertiary",color:"black",mdxType:"ButtonLarge"},u(g.IconHeart,{mdxType:"IconHeart"})," Button"))}h.isMDXComponent=!0;var x="Hey there! I'm Tom. A singer, who's well known for my various awesome jams, and other amazing thangs.",T={},v="wrapper";function C(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(v,Object.assign({},T,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Cards"})),u("h1",null,"Cards"),u("div",{style:{maxWidth:1024,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridColumnGap:10,gridRowGap:30,alignItems:"start"}},u(r.Card,{is:"article",textAlign:"center",mdxType:"Card"},u(r.CardImage,{mdxType:"CardImage"}),u(r.CardTitle,{mdxType:"CardTitle"},"Tom Jones"),u(r.CardBodyText,{mb:4,display:"inline-block",mdxType:"CardBodyText"},x),u(r.Button,{bg:"primary",color:"white",borderRadius:"large",mdxType:"Button"},u(g.IconHeart,{mdxType:"IconHeart"}),"Follow me on Twitter")),u(r.Card,{is:"article",textAlign:"center",mdxType:"Card"},u(r.CardImage,{height:"240px",mdxType:"CardImage"}),u(r.CardTitle,{mdxType:"CardTitle"},"Tom Jones"),u(r.CardBodyText,{mb:4,display:"inline-block",mdxType:"CardBodyText"},x),u(r.Button,{bg:"primary",color:"white",mdxType:"Button"},"View Full Profile")),u(r.Card,{is:"article",mdxType:"Card"},u(r.CardImage,{mdxType:"CardImage"}),u(r.CardTitle,{mdxType:"CardTitle"},"Tom Jones"),u(r.CardBodyText,{mdxType:"CardBodyText"},x),u(r.CardFooter,{mdxType:"CardFooter"},u(r.TinyText,{color:"grey",mdxType:"TinyText"},"23 Friends"))),u(r.Card,{is:"article",p:8,mdxType:"Card"},u(r.CardTitle,{mdxType:"CardTitle"},"More Padding"),u(r.CardBodyText,{mdxType:"CardBodyText"},x)),u(r.Card,{is:"article",bg:"secondary",borderRadius:"small",boxShadow:60,mdxType:"Card"},u(r.CardTitle,{color:"warning",fontWeight:"normal",mdxType:"CardTitle"},"Fancy secondary one"),u(r.CardBodyText,{color:"black",mdxType:"CardBodyText"}," ",x)),u(r.Card,{is:"article",borderRadius:"small",boxShadow:60,mdxType:"Card"},u(r.CardTitle,{color:"success",fontWeight:"normal",mb:0,mdxType:"CardTitle"},"Success!"))))}C.isMDXComponent=!0;var B=a(24),w=a(25),O=a(27),j=a(26),S=a(29),k=a(28),H=function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(O.a)(this,Object(j.a)(t).call(this))).state={checked:!1},e.handleChange=e.handleChange.bind(Object(S.a)(e)),e}return Object(k.a)(t,e),Object(w.a)(t,[{key:"handleChange",value:function(){this.setState({checked:!this.state.checked})}},{key:"render",value:function(){var e=this.props,t=e.label,a=e.value,n=e.disabled;return o.a.createElement(r.Checkbox,{disabled:n,value:a,label:t,checked:this.state.checked,onChange:this.handleChange,py:1})}}]),t}(o.a.Component),I=function(){return o.a.createElement(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr",alignItems:"center"}},o.a.createElement(H,{value:"jar_jar",label:"Jar Jar Binks"}),o.a.createElement(H,{value:"queen_amidala",label:"Queen Amidala"}),o.a.createElement(H,{disabled:!0,value:"mon_mothma",label:"Mon Mothma"}))},E=function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(O.a)(this,Object(j.a)(t).call(this))).state={selected:"obi_wan"},e.handleChange=e.handleChange.bind(Object(S.a)(e)),e}return Object(k.a)(t,e),Object(w.a)(t,[{key:"handleChange",value:function(e){this.setState({selected:e.target.value})}},{key:"render",value:function(){return o.a.createElement(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr",alignItems:"center"}},o.a.createElement(r.Radio,{value:"obi_wan",label:"Obi Wan Kenobi",checked:"obi_wan"===this.state.selected,onChange:this.handleChange,py:1}),o.a.createElement(r.Radio,{value:"han_solo",label:"Han Solo",checked:"han_solo"===this.state.selected,onChange:this.handleChange,py:1}),o.a.createElement(r.Radio,{value:"anakin_skywalker",label:"Anakin Skywalker (disabled)",disabled:!0,checked:"anakin_skywalker"===this.state.selected,onChange:this.handleChange,py:1}))}}]),t}(o.a.Component),F={},L="wrapper";function R(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(L,Object.assign({},F,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Forms"})),u("h1",null,"Forms"),u("h2",null,"Todo:"),u("ul",null,u("li",null,"Inputs with icons left and right"),u("li",null,"Textarea"),u("li",null,"Toggle switch")),u(r.HeadingFive,{mdxType:"HeadingFive"},"Text Inputs"),u(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr 1fr 1fr 1fr",gridColumnGap:16,gridRowGap:16,alignItems:"center"},mdxType:"Box"},u(r.TextInput,{placeholder:"Default",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"primary",placeholder:"Active",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"success",color:"success",defaultValue:"Success",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"error",color:"error",defaultValue:"Error",mdxType:"TextInput"}),u(r.TextInput,{borderColor:"error",disabled:!0,mdxType:"TextInput"}),u(r.TextInput,{borderRadius:"large",placeholder:"Large border radius",mdxType:"TextInput"}),u(r.TextInput,{borderRadius:"none",placeholder:"No border radius",mdxType:"TextInput"}),u(r.TextInput,{borderRadius:"none",mdxType:"TextInput"}),u("div",null,u(r.FormLabel,{htmlFor:"textInput",mdxType:"FormLabel"},"First Name"),u(r.TextInput,{borderColor:"error",name:"textInput",my:"4px",mdxType:"TextInput"}),u(r.ValidationLabel,{mdxType:"ValidationLabel"},"This is a required field")),u("div",null,u(r.FormLabel,{htmlFor:"textInput2",mdxType:"FormLabel"},"Phone Number"),u(r.TextInput,{borderColor:"success",name:"textInput2",defaultValue:"(015) 2323 2320",my:"4px",mdxType:"TextInput"}),u(r.ValidationLabel,{color:"success",mdxType:"ValidationLabel"},"Verified"))),u(r.Box,{display:"grid",style:{gridTemplateColumns:"1fr 1fr 1fr 1fr",gridColumnGap:16,gridRowGap:16,alignItems:"center",marginTop:32},mdxType:"Box"},u("div",null,u(r.HeadingFive,{mdxType:"HeadingFive"},"Radio Buttons"),u(E,{mdxType:"StatefulRadioButtons"})),u("div",null,u(r.HeadingFive,{mdxType:"HeadingFive"},"Checkboxes"),u(I,{mdxType:"Checkboxes"}))))}R.isMDXComponent=!0;var D=function(){return u(r.Box,{fontSize:"lead",display:"grid",color:"darkGrey",style:{gridTemplateRows:"repeat(10, 1fr)",gridTemplateColumns:"repeat(10, 1fr)",gap:"20px"}},Object.keys(g).map(function(e){return u(g[e],{key:e})}))},M={Icons:D},W="wrapper";function N(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(W,Object.assign({},M,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Icons"})),u("h1",null,"Icons"),u("p",null,"Cabana uses the ",u("a",Object.assign({parentName:"p"},{href:"https://github.com/lucastobrazil/cabanaico"}),"cabanaico")," library."),u(D,{mdxType:"Icons"}))}N.isMDXComponent=!0;var P=a(14),z=a(39);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var A={space:[0,4,8,16,32,64,128,256,512]},V=function(e){return"number"===typeof e&&!isNaN(e)},G=function(e,t){if(!V(e))return Object(z.c)(t,e,e);var a=e<0,n=Math.abs(e),o=Object(z.c)(t,n,n);return V(o)?o*(a?-1:1):a?"-"+o:o},_={};_.margin={margin:{property:"margin",scale:"space",transform:G,defaultScale:A.space},marginTop:{property:"marginTop",scale:"space",transform:G,defaultScale:A.space},marginRight:{property:"marginRight",scale:"space",transform:G,defaultScale:A.space},marginBottom:{property:"marginBottom",scale:"space",transform:G,defaultScale:A.space},marginLeft:{property:"marginLeft",scale:"space",transform:G,defaultScale:A.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:G,defaultScale:A.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:G,defaultScale:A.space}},_.margin.m=_.margin.margin,_.margin.mt=_.margin.marginTop,_.margin.mr=_.margin.marginRight,_.margin.mb=_.margin.marginBottom,_.margin.ml=_.margin.marginLeft,_.margin.mx=_.margin.marginX,_.margin.my=_.margin.marginY,_.padding={padding:{property:"padding",scale:"space",defaultScale:A.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:A.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:A.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:A.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:A.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:A.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:A.space}},_.padding.p=_.padding.padding,_.padding.pt=_.padding.paddingTop,_.padding.pr=_.padding.paddingRight,_.padding.pb=_.padding.paddingBottom,_.padding.pl=_.padding.paddingLeft,_.padding.px=_.padding.paddingX,_.padding.py=_.padding.paddingY;Object(z.d)(_.margin),Object(z.d)(_.padding);var J=Object(z.d)(X({},_.margin,_.padding)),Y={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};Y.bg=Y.backgroundColor;var U=Object(z.d)(Y),q={width:{property:"width",scale:"sizes",transform:function(e,t){return Object(z.c)(t,e,!function(e){return"number"===typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,display:!0,verticalAlign:!0},K=(Object(z.d)(q),{fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),Q=Object(z.d)(K),Z=(Object(z.d)({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),Object(z.d)({border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"}})),$={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};$.bgImage=$.backgroundImage,$.bgSize=$.backgroundSize,$.bgPosition=$.backgroundPosition,$.bgRepeat=$.backgroundRepeat;Object(z.d)($),Object(z.d)({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:!0,right:!0,bottom:!0,left:!0});var ee={space:[0,4,8,16,32,64,128,256,512]},te={gridGap:{property:"gridGap",scale:"space",defaultScale:ee.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:ee.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:ee.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},ae=(Object(z.d)(te),Object(z.d)({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}}),function(e){var t,a=e.scale,n=e.prop,o=void 0===n?"variant":n,r=e.key,i=function(e,t){return Object(z.c)(t,e,null)};i.scale=a||r;var l=((t={})[o]=i,t);return Object(z.a)(l)}),ne=(ae({key:"buttons"}),ae({key:"textStyles",prop:"textStyle"}),ae({key:"colorStyles",prop:"colors"}),a(8)),oe=a(346),re=function(e){return e.split(" ").join("")};function ie(){var e=Object(P.a)(["\n  list-style-type: none;\n  ",";\n  ",";\n  ",";\n  ",";\n  a {\n    ",";\n    color: inherit;\n    text-decoration: none;\n    display: block;\n\n    &:hover {\n      color: black;\n      background-color: rgba(0, 0, 0, 0.1);\n    }\n  }\n"]);return ie=function(){return e},e}function le(){var e=Object(P.a)(["\n  ",";\n  padding: 0;\n  ",";\n"]);return le=function(){return e},e}var de=ne.default.ul(le(),Q,J),pe=ne.default.li(ie(),Q,Z,Z,U,J);pe.defaultProps={p:1};var se=["Avatars","Buttons","Cards","Chips","Forms","Icons","Notification Bar","Pagination","Progress Bar","Tabs","Tags","Text","Tooltips"],ce=["DatePickers","Dropdowns","Map","Menus","Modal","Sliders","Tables","Video Player"];function me(){return o.a.createElement(r.Box,{position:"fixed",width:246,pt:2,mr:2,height:"100%",css:"overflow: auto"},o.a.createElement(r.CaptionText,{fontWeight:"bold",px:1,color:"lightGrey"},"Components"),o.a.createElement(de,{fontFamily:"default",m:0},se.map(function(e){return o.a.createElement(pe,{key:e,color:"grey"},o.a.createElement(oe.HashLink,{to:"#".concat(re(e))},e))})),o.a.createElement(de,{fontFamily:"default",m:0,mt:2},o.a.createElement(r.CaptionText,{fontWeight:"bold",px:1,color:"grey"},"Not yet done:"),ce.map(function(e){return o.a.createElement(pe,{key:e,color:"grey"},o.a.createElement(oe.HashLink,{to:"#".concat(re(e))},e))})))}var ue={},ge="wrapper";function ye(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(ge,Object.assign({},ue,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"NotificationBar"})),u("h1",null,"NotificationBar"),u(r.NotificationBar,{mb:1,content:"Oops! There seems to be an error",bg:"error",color:"white",mdxType:"NotificationBar"}),u(r.NotificationBar,{mb:1,content:"Have you saved your work?",bg:"warning",color:"black",mdxType:"NotificationBar"}),u(r.NotificationBar,{mb:1,content:"Oh yes! Settings have been saved",bg:"success",color:"white",mdxType:"NotificationBar"}),u(r.NotificationBar,{mb:1,content:"Oh yes! Settings have been saved",bg:"primary",color:"white",dismissable:!1,mdxType:"NotificationBar"}),u(r.NotificationBar,{boxShadow:100,m:3,icon:!1,fontSize:"small",content:"W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 1999-2018 by Refsnes Data. All Rights Reserved.",bg:"success",color:"white",mdxType:"NotificationBar"}))}ye.isMDXComponent=!0;var be={},fe="wrapper";function he(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(fe,Object.assign({},be,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Pagination"})),u("h1",null,"Pagination"),u(r.Pagination,{mdxType:"Pagination"}),u(r.Pagination,{size:16,mdxType:"Pagination"}),u(r.Pagination,{size:32,mdxType:"Pagination"}),u(r.Pagination,{type:"numbers",mdxType:"Pagination"}))}he.isMDXComponent=!0;var xe=function(e){var t=e.onChange,a=e.amount;return o.a.createElement(n.Fragment,null,o.a.createElement("input",{type:"range",style:{width:"100%"},step:"1",value:a,onChange:t,list:"tickmarks"}),o.a.createElement("datalist",{id:"tickmarks"},o.a.createElement("option",{value:"0"}),o.a.createElement("option",{value:"10"}),o.a.createElement("option",{value:"20"}),o.a.createElement("option",{value:"30"}),o.a.createElement("option",{value:"40"}),o.a.createElement("option",{value:"50"}),o.a.createElement("option",{value:"60"}),o.a.createElement("option",{value:"70"}),o.a.createElement("option",{value:"80"}),o.a.createElement("option",{value:"90"}),o.a.createElement("option",{value:"100"})))},Te=function(e){function t(){var e;return Object(B.a)(this,t),(e=Object(O.a)(this,Object(j.a)(t).call(this))).state={amount:62},e}return Object(k.a)(t,e),Object(w.a)(t,[{key:"onChange",value:function(e){this.setState({amount:parseInt(e.target.value,10)})}},{key:"render",value:function(){var e=this.state.amount,t=this.props,a=t.innerBg,n=t.outerBg,i=t.borderRadius,l=t.p,d=t.fontSize,p=t.showNumber,s=t.minHeight,c=t.color;return o.a.createElement(r.Box,{mt:3},o.a.createElement(xe,{onChange:this.onChange.bind(this),amount:e}),o.a.createElement(r.ProgressBar,{color:c,p:l,innerBg:a,outerBg:n,amount:e,borderRadius:i,fontSize:d,showNumber:p,minHeight:s}))}}]),t}(o.a.Component),ve={},Ce="wrapper";function Be(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(Ce,Object.assign({},ve,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"ProgressBar"})),u("h1",null,"ProgressBar"),u("p",null,"Note: the sliders included below are to simulate the changing progress of the ",u("inlineCode",{parentName:"p"},"ProgressBar"),"."),u(r.Box,{width:1/3,mdxType:"Box"},u(Te,{innerBg:"primary",mdxType:"StatefulExample"}),u(Te,{innerBg:"tertiary",borderRadius:"large",mdxType:"StatefulExample"}),u(Te,{innerBg:"success",color:"white",p:1,fontSize:"body",borderRadius:"large",mdxType:"StatefulExample"}),u(Te,{innerBg:"primary",p:1,borderRadius:"none",mdxType:"StatefulExample"}),u(Te,{innerBg:"primary",fontSize:"uber",mdxType:"StatefulExample"}),u(Te,{innerBg:"primary",showNumber:!1,minHeight:20,mdxType:"StatefulExample"})))}Be.isMDXComponent=!0;var we={},Oe="wrapper";function je(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(Oe,Object.assign({},we,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Tabs"})),u("h1",null,"Tabs"),u(r.Tabs,{mdxType:"Tabs"},u("div",{label:"News"},"See ya later, ",u("em",null,"Alligator"),"!"),u("div",{label:"Store"},"After 'while, ",u("em",null,"Crocodile"),"!"),u("div",{label:"Videos"},"Nothing to see here, this tab is ",u("em",null,"extinct"),"!"),u("div",{label:"Photos"},"Nothing to see here, this tab is ",u("em",null,"extinct"),"!")),u(r.HeadingTwo,{fontSize:"h5",mt:6,mdxType:"HeadingTwo"},"With Icon"),u(r.Tabs,{mdxType:"Tabs"},u("div",{label:"Store",tabIcon:u(g.IconCart,{mdxType:"IconCart"})},"Shopping cart!"),u("div",{label:"Videos",tabIcon:u(g.IconVideo,{mdxType:"IconVideo"})},"Check out videos"),u("div",{label:"Photos",tabIcon:u(g.IconCamera,{mdxType:"IconCamera"})},"See all photos")))}je.isMDXComponent=!0;var Se=function(e){var t=e.fontFamily;return u("div",null,u(r.UberText,{fontWeight:"bold",fontFamily:t},"Uber"),u(r.UberText,{fontFamily:t},"Uber"),u(r.HeroText,{fontWeight:"bold",fontFamily:t},"Hero"),u(r.HeroText,{fontFamily:t},"Hero"),u(r.HeadingOne,{fontWeight:"bold",fontFamily:t},"H1 Heading"),u(r.HeadingOne,{fontFamily:t},"H1 Heading"),u(r.HeadingTwo,{fontWeight:"bold",fontFamily:t},"H2 Heading"),u(r.HeadingTwo,{fontFamily:t},"H2 Heading"),u(r.HeadingThree,{fontWeight:"bold",fontFamily:t},"H3 Heading"),u(r.HeadingThree,{fontFamily:t},"H3 Heading"),u(r.HeadingFour,{fontWeight:"bold",fontFamily:t},"H4 Heading"),u(r.HeadingFour,{fontFamily:t},"H4 Heading"),u(r.HeadingFive,{fontWeight:"bold",fontFamily:t},"H5 Heading"),u(r.HeadingFive,{fontFamily:t},"H5 Heading"),u(r.LeadText,{fontWeight:"bold",fontFamily:t},"Lead"),u(r.LeadText,{fontFamily:t},"Lead"),u(r.BodyText,{fontWeight:"bold",fontFamily:t},"Body"),u(r.BodyText,{fontFamily:t},"Body"),u(r.SmallText,{fontWeight:"bold",fontFamily:t},"Small"),u(r.SmallText,{fontFamily:t},"Small"),u(r.CaptionText,{fontWeight:"bold",fontFamily:t},"Caption"),u(r.CaptionText,{fontFamily:t},"Caption"),u(r.TinyText,{fontWeight:"bold",fontFamily:t},"Tiny"),u(r.TinyText,{fontFamily:t},"Tiny"))},ke={Content:Se},He="wrapper";function Ie(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(He,Object.assign({},ke,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Text"})),u("h1",null,"Text"),u("div",{style:{display:"flex",flexWrap:"wrap"}},u("div",null,u(r.HeadingOne,{color:"secondary",mdxType:"HeadingOne"},"Font Family #1"),u(Se,{mdxType:"Content"})),u("div",null,u(r.HeadingOne,{color:"primary",mdxType:"HeadingOne"},"Font Family #2"),u(Se,{fontFamily:"alt",mdxType:"Content"}))))}function Ee(){var e=Object(P.a)(["\n  color: black;\n  ",";\n  display: block;\n  text-align: center;\n  font-size: 10px;\n  border-radius: 3px;\n  border: 1px solid lightgrey;\n  text-transform: uppercase;\n  ",";\n"]);return Ee=function(){return e},e}Ie.isMDXComponent=!0;var Fe=ne.default.label(Ee(),Q,J);Fe.defaultProps={fontFamily:"default",px:1};var Le=Fe,Re={fontFamily:"default",content:"Here is my tooltip!",bg:"primary",color:"papayawhip",mx:2,my:8},De=function(e){return u(r.Tooltip,Object.assign({},Re,e))},Me={BaseTooltip:De},We="wrapper";function Ne(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(We,Object.assign({},Me,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Tooltip"})),u("h1",null,"Tooltip"),u("p",null,"Hover over the labels below to see the tooltips."),u(De,{mdxType:"BaseTooltip"},u(Le,{mdxType:"DocLabel"},"Default")),u(De,{placement:"top",bg:"warning",color:"secondary",mdxType:"BaseTooltip"},u(Le,{mdxType:"DocLabel"},"Top")),u(De,{placement:"right",mdxType:"BaseTooltip"},u(Le,{mdxType:"DocLabel"},"Right")),u(De,{placement:"bottom",mdxType:"BaseTooltip"},u(Le,{mdxType:"DocLabel"},"Bottom")),u(De,{placement:"left",mdxType:"BaseTooltip"},u(Le,{mdxType:"DocLabel"},"Left")))}Ne.isMDXComponent=!0;var Pe={},ze="wrapper";function Xe(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(ze,Object.assign({},Pe,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Chips"})),u("h1",null,"Chips"),u(r.Chip,{mr:1,text:"Jack White",mdxType:"Chip"}),u(r.Chip,{mr:1,text:"Adele",dismissable:!0,mdxType:"Chip"}),u(r.Chip,{mr:1,bg:"secondary",color:"primary",text:"Freddie Mercury",dismissable:!0,mdxType:"Chip"}),u(r.Chip,{mr:1,bg:"tertiary",text:"Thom Yorke",mdxType:"Chip"}),u(r.Chip,{mr:1,text:"Duran Duran",avatarUrl:"https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",mdxType:"Chip"}))}Xe.isMDXComponent=!0;var Ae={},Ve="wrapper";function Ge(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(Ve,Object.assign({},Ae,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Tags"})),u("h1",null,"Tags"),u(r.Tag,{mr:1,text:"Jack White",mdxType:"Tag"}),u(r.Tag,{mr:1,text:"Adele",dismissable:!0,mdxType:"Tag"}),u(r.Tag,{mr:1,bg:"secondary",color:"primary",text:"Freddie Mercury",dismissable:!0,mdxType:"Tag"}),u(r.Tag,{mr:1,bg:"tertiary",text:"Thom Yorke",mdxType:"Tag"}),u(r.Tag,{mr:1,text:"Duran Duran",avatarUrl:"https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",mdxType:"Tag"}))}Ge.isMDXComponent=!0;var _e="https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",Je=function(e){return u(Le,Object.assign({mr:1,mt:2},e))},Ye={Label:Je},Ue="wrapper";function qe(e){var t=e.components,a=Object(i.a)(e,["components"]);return u(Ue,Object.assign({},Ye,a,{components:t,mdxType:"MDXLayout"}),u("p",null,u("a",{id:"Avatars"})),u("h1",null,"Avatars"),u("div",{style:{display:"flex",alignItems:"flex-end"}},u("div",null,u(r.Avatar,{mx:2,size:"jumbo",src:_e,mdxType:"Avatar"}),u(Je,{mdxType:"Label"},"Jumbo")),u("div",null,u(r.Avatar,{mx:2,size:"large",src:_e,mdxType:"Avatar"}),u(Je,{mdxType:"Label"},"Large")),u("div",null,u(r.Avatar,{mx:2,size:"medium",src:_e,mdxType:"Avatar"}),u(Je,{mdxType:"Label"},"Medium")),u("div",null,u(r.Avatar,{mx:2,size:"small",src:_e,mdxType:"Avatar"}),u(Je,{mdxType:"Label"},"Small"))))}qe.isMDXComponent=!0,a.d(t,"default",function(){return Qe});var Ke={h1:function(e){return o.a.createElement(r.HeadingThree,Object.assign({is:"h1",pt:12,mb:2,style:{display:"block",borderBottom:"1px solid lightgrey"}},e))},h2:function(e){return o.a.createElement(r.HeadingFive,Object.assign({is:"h2",my:2},e))},p:function(e){return o.a.createElement(r.BodyText,Object.assign({pb:2},e))}};function Qe(){return o.a.createElement(p,{components:Ke},o.a.createElement(r.Box,{display:"flex"},o.a.createElement(me,null),o.a.createElement(r.Box,{ml:246,maxWidth:1e3,px:4},o.a.createElement(r.HeadingOne,{mt:3},"Component Library"),o.a.createElement(qe,null),o.a.createElement(h,null),o.a.createElement(C,null),o.a.createElement(Xe,null),o.a.createElement(R,null),o.a.createElement(N,null),o.a.createElement(ye,null),o.a.createElement(he,null),o.a.createElement(Be,null),o.a.createElement(je,null),o.a.createElement(Ge,null),o.a.createElement(Ie,null),o.a.createElement(Ne,null))))}}}]);
//# sourceMappingURL=6.eaf6493a.chunk.js.map