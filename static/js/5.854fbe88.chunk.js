(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(e,t,n){"use strict";var a=n(227),r=n.n(a),l=n(245),c=n(4),o=n(0),i=n.n(o);t.a=function(e){return i.a.createElement(c.Box,{boxShadow:100,flex:1},i.a.createElement(r.a,Object.assign({customStyle:{fontSize:"12px",margin:0},style:l.tomorrow,language:"javascript"},e)))}},213:function(e,t,n){"use strict";n.d(t,"d",function(){return S}),n.d(t,"e",function(){return v}),n.d(t,"a",function(){return j}),n.d(t,"f",function(){return T}),n.d(t,"b",function(){return C}),n.d(t,"c",function(){return A}),n.d(t,"g",function(){return B});var a=n(12),r=n(0),l=n.n(r),c=n(17),o=n(4),i=n(15),m=n(31),s=n(7),u=n(37),d=n(208),h=n(48),f=n(39);function E(){var e=Object(a.a)(["\n    text-decoration: none;\n    color: inherit;\n"]);return E=function(){return e},e}function p(){var e=Object(a.a)(["\n    a:hover {\n        text-decoration: underline;\n    }\n"]);return p=function(){return e},e}function g(){var e=Object(a.a)(["\n    transform: scaleY(-1);\n    width: 100%;\n    vertical-align: bottom;\n"]);return g=function(){return e},e}var y=function(e){return l.a.createElement(o.TextPrimitive,Object.assign({color:"inherit",is:"li"},e))},b=Object(s.default)(m.b)(g()),x=Object(s.default)(o.Card)(p()),w=Object(s.default)(c.Link)(E()),k=function(e){return l.a.createElement(x,{m:2,borderColor:"transparent"},l.a.createElement(o.CardTitle,{fontWeight:"normal",is:"a",textDecoration:"none",href:e.href,target:"_blank"},e.title),l.a.createElement(h.CardBodyText,null,"5 min read"))},S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.Box,{width:"100%",height:"100%",color:"primary"},l.a.createElement(b,null)),l.a.createElement(u.h,{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},l.a.createElement(o.HeadingOne,{color:"primary",fontSize:["h2","h1"],fontWeight:"bold",letterSpacing:"-0.05em",maxWidth:680,my:8,textAlign:"center"},"A design system built for ",l.a.createElement("span",{style:{textDecoration:"underline"}},"both")," Sketch and React."),l.a.createElement(o.BodyText,{mb:4,mx:[2,0],textAlign:"center"},"Powered by"," ",l.a.createElement(u.g,{is:"a",href:"http://reactjs.com"},"React,")," ",l.a.createElement(u.g,{is:"a",href:"https://www.styled-components.com"},"styled-components")," ","and ",l.a.createElement(u.g,{href:"https://github.com/jxnblk/styled-system"},"styled-system"),"."),l.a.createElement(o.Box,{display:"flex"},l.a.createElement(o.Button,{is:"a",href:"https://github.com/lucastobrazil/cabana-react",bg:"primary",color:"white",display:"block",mr:2},"GitHub"),l.a.createElement(o.Button,{bg:"white",color:"primary",display:"block",border:"1px solid",borderColor:"primary"},l.a.createElement(w,{to:"/guides"},"Guides")))),l.a.createElement(u.h,null,l.a.createElement(o.Box,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(o.HeadingFour,{textAlign:"center",mt:0},"Sketch"),l.a.createElement("ul",null,l.a.createElement(y,null,"Symbol overrides allow you to select pre-set layer styles etc."),l.a.createElement(y,null,"Full control over content / iconography etc.")),l.a.createElement("img",{alt:"Example Sketch Button",style:{maxWidth:"100%"},src:n(225)})),l.a.createElement(u.d,null,l.a.createElement(o.HeadingFour,{textAlign:"center",mt:0},"React"),l.a.createElement("ul",null,l.a.createElement(y,null,"Import named components that match the Sketch symbols."),l.a.createElement(y,null,"Create instances for your app.")),l.a.createElement(d.a,null,'\n// Reads from theme.js file\nconst MyButton = (\n    <Button \n        color="white" \n        borderRadius="large"\n        bg="primary" \n        fontWeight="bold" \n    >\n        <IconHeart /> Like\n    </Button>\n);\n        '),l.a.createElement(o.Button,{bg:"primary",color:"white",mt:1},l.a.createElement(i.IconHeart,null)," Like")))))},B=function(){return l.a.createElement(o.Box,{bg:"primary",color:"white",pb:3,display:"flex",flexWrap:"wrap",justifyContent:"center"},l.a.createElement(u.e,{mt:0,textAlign:"center",flex:"0 0 100%"},l.a.createElement(f.a,{width:60,height:60,style:{verticalAlign:"middle"}})," Why Cabana?"),l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(o.HeadingThree,{textAlign:["center","left"]},"For Designers"),l.a.createElement("ul",null,l.a.createElement(y,null,"Sketch Library with powerful customisation"),l.a.createElement(y,null,"Flexible visual style, whilst also keeping design system \u2018rules\u2019 under control"))),l.a.createElement(u.d,null,l.a.createElement(o.HeadingThree,{textAlign:["center","left"]},"For Developers"),l.a.createElement("ul",null,l.a.createElement(y,null,"Build your own React components or use the default"),l.a.createElement(y,null,"Works out of the box"),l.a.createElement(y,null,"Flexible and Composable")))))},v=function(){return l.a.createElement(o.Box,{bg:"#fafafa",py:3},l.a.createElement(u.e,{textAlign:"center"},"Sketch Library and Theme"),l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(o.HeadingThree,{mb:1,textAlign:["center","left"]},"Sketch Layer Styles"),l.a.createElement("img",{alt:"Some colours in sketch",style:{maxWidth:300},src:n(226)})),l.a.createElement(u.d,null,l.a.createElement(o.HeadingThree,{mb:1,textAlign:["center","left"]},"Theme JS object"),l.a.createElement(d.a,null,"\nconst theme = {\n    colors: {\n        primary: '#5450F7',\n        secondary: '#25a9ce',\n        tertiary: '#EF476F',\n        black: '#303133',\n        grey: '#8D8D8F',\n        LightGrey: '#DADADA',\n        success: '#44A45F',\n        warning: '#FCEB3B',\n        error: '#E6173E',\n    }   \n};\n        "))),l.a.createElement(o.Button,{bg:"primary",color:"white",display:"block",my:8,mx:"auto"},l.a.createElement(w,{to:"/guides"},"Check out the guides")))},j=function(){return l.a.createElement(o.Box,{bg:"tertiary"},l.a.createElement(u.h,null,l.a.createElement(u.f,{mb:2,textAlign:"center",color:"white"},"Relevant Blog Posts"),l.a.createElement(o.Box,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(k,{title:"Introducing Cabana for React",imageSrc:""}),l.a.createElement(k,{title:"Patterns for Style Composition in React",imageSrc:"",href:"http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/"}),l.a.createElement(k,{title:"The Three Tenets of Styled System",imageSrc:"",href:"https://jxnblk.com/blog/the-three-tenets-of-styled-system/"}))))},A=function(){return l.a.createElement(d.a,null,"npm install --save cabana-react")},C=function(){return l.a.createElement(o.Box,{py:4},l.a.createElement(u.e,{textAlign:"center"},"Get Started"),l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(o.HeadingThree,{mb:1},"Sketch"),l.a.createElement(u.g,{href:"https://cabanadesignsystem.com/"},"Check out the Sketch Library")),l.a.createElement(u.d,null,l.a.createElement(o.HeadingThree,{mb:1},"React"),l.a.createElement(A,null),l.a.createElement(o.Box,{mb:2}),l.a.createElement(o.ButtonSmall,{bg:"primary",color:"white",display:"block",my:1},l.a.createElement(w,{to:"/guides"},"Getting Started Guide ",l.a.createElement(i.IconArrowRight,null))))))},T=function(){return l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(u.e,{textAlign:"center"},"Concept"),l.a.createElement(o.BodyText,{mb:1},"At its heart, Cabana is a powerful Sketch-driven design system. It utilises some of Sketch's core features like symbols, layer and text styles, overrides and libraries to deliver a user-friendly, maintainable design system that speeds up your process - especially when starting a completely new project."),l.a.createElement(o.BodyText,null,"Before Cabana-React - your designs had no clear way of being translated into code. Cabana React is basically the React equivalent of the Cabana Sketch Library, and they are intended to work together... just like designers and developers"," ",l.a.createElement("span",{role:"img","aria-label":"Angel Emoji"},"\ud83d\ude07"))))}},225:function(e,t,n){e.exports=n.p+"static/media/example_button.8d33e5f6.png"},226:function(e,t,n){e.exports=n.p+"static/media/colors_sketch.0da5a5fd.png"},490:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var a=n(12),r=n(0),l=n.n(r),c=n(17),o=n(4),i=n(6),m=n(7),s=n(37),u=n(213);function d(){var e=Object(a.a)(["\n  color: ",";\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return d=function(){return e},e}var h=Object(m.default)(c.Link)(d(),function(e){return Object(i.themeGet)("colors.primary","red")(e)});function f(){return l.a.createElement(o.Box,null,l.a.createElement(u.d,null),l.a.createElement(u.g,null),l.a.createElement(u.b,null),l.a.createElement(u.e,null),l.a.createElement(u.a,null),l.a.createElement(u.f,null),l.a.createElement(s.h,{px:2,textAlign:"right",fontSize:"h5"},l.a.createElement(h,{to:"/guides"},"Continue to Getting Started >")))}}}]);
//# sourceMappingURL=5.854fbe88.chunk.js.map