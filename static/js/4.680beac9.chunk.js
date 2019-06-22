(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{320:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=f,t.NavHashLink=g;var l=c(n(0)),o=c(n(3)),i=n(17);function c(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,u=null,d=null;function h(){s="",null!==m&&m.disconnect(),null!==u&&(window.clearTimeout(u),u=null)}function p(){var e=document.getElementById(s);return null!==e&&(d(e),h(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,a({},n,{onClick:function(t){h(),e.onClick&&e.onClick(t),"string"===typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"===typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===p()&&(null===m&&(m=new MutationObserver(p)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),u=window.setTimeout(function(){h()},1e4))},0))}}),e.children)}function f(e){return y(e,i.Link)}function g(e){return y(e,i.NavLink)}var b={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};f.propTypes=b,g.propTypes=b},321:function(e,t,n){"use strict";var a=n(340),r=n.n(a),l=n(358),o=n(4),i=n(0),c=n.n(i);t.a=function(e){return c.a.createElement(o.Box,{boxShadow:100,flex:1},c.a.createElement(r.a,Object.assign({customStyle:{fontSize:"12px",margin:0},style:l.tomorrow,language:"javascript"},e)))}},326:function(e,t,n){"use strict";n.d(t,"d",function(){return C}),n.d(t,"e",function(){return k}),n.d(t,"a",function(){return B}),n.d(t,"f",function(){return j}),n.d(t,"b",function(){return A}),n.d(t,"c",function(){return S}),n.d(t,"g",function(){return T});var a=n(12),r=n(0),l=n.n(r),o=n(17),i=n(4),c=n(15),s=n(31),m=n(7),u=n(37),d=n(321),h=n(48),p=n(39);function y(){var e=Object(a.a)(["\n    text-decoration: none;\n    color: inherit;\n"]);return y=function(){return e},e}function f(){var e=Object(a.a)(["\n    a:hover {\n        text-decoration: underline;\n    }\n"]);return f=function(){return e},e}function g(){var e=Object(a.a)(["\n    transform: scaleY(-1);\n    width: 100%;\n    vertical-align: bottom;\n"]);return g=function(){return e},e}var b=function(e){return l.a.createElement(i.TextPrimitive,Object.assign({color:"inherit",is:"li"},e))},E=Object(m.default)(s.b)(g()),x=Object(m.default)(i.Card)(f()),w=Object(m.default)(o.Link)(y()),v=function(e){return l.a.createElement(x,{m:2,borderColor:"transparent"},l.a.createElement(i.CardTitle,{fontWeight:"normal",is:"a",textDecoration:"none",href:e.href,target:"_blank"},e.title),l.a.createElement(h.CardBodyText,null,"5 min read"))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Box,{width:"100%",height:"100%",color:"primary"},l.a.createElement(E,null)),l.a.createElement(u.h,{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},l.a.createElement(i.HeadingOne,{color:"primary",fontSize:["h2","h1"],fontWeight:"bold",letterSpacing:"-0.05em",maxWidth:680,my:8,textAlign:"center"},"A design system built for ",l.a.createElement("span",{style:{textDecoration:"underline"}},"both")," Sketch and React."),l.a.createElement(i.BodyText,{mb:4,mx:[2,0],textAlign:"center"},"Powered by"," ",l.a.createElement(u.g,{is:"a",href:"http://reactjs.com"},"React,")," ",l.a.createElement(u.g,{is:"a",href:"https://www.styled-components.com"},"styled-components")," ","and ",l.a.createElement(u.g,{href:"https://github.com/jxnblk/styled-system"},"styled-system"),"."),l.a.createElement(i.Box,{display:"flex"},l.a.createElement(i.Button,{is:"a",href:"https://github.com/lucastobrazil/cabana-react",bg:"primary",color:"white",display:"block",mr:2},"GitHub"),l.a.createElement(i.Button,{bg:"white",color:"primary",display:"block",border:"1px solid",borderColor:"primary"},l.a.createElement(w,{to:"/guides"},"Guides")))),l.a.createElement(u.h,null,l.a.createElement(i.Box,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(i.HeadingFour,{textAlign:"center",mt:0},"Sketch"),l.a.createElement("ul",null,l.a.createElement(b,null,"Symbol overrides allow you to select pre-set layer styles etc."),l.a.createElement(b,null,"Full control over content / iconography etc.")),l.a.createElement("img",{alt:"Example Sketch Button",style:{maxWidth:"100%"},src:n(338)})),l.a.createElement(u.d,null,l.a.createElement(i.HeadingFour,{textAlign:"center",mt:0},"React"),l.a.createElement("ul",null,l.a.createElement(b,null,"Import named components that match the Sketch symbols."),l.a.createElement(b,null,"Create instances for your app.")),l.a.createElement(d.a,null,'\n// Reads from theme.js file\nconst MyButton = (\n    <Button \n        color="white" \n        borderRadius="large"\n        bg="primary" \n        fontWeight="bold" \n    >\n        <IconHeartOutline /> Like\n    </Button>\n);\n        '),l.a.createElement(i.Button,{bg:"primary",color:"white",mt:1},l.a.createElement(c.IconHeartOutline,null)," Like")))))},T=function(){return l.a.createElement(i.Box,{bg:"primary",color:"white",pb:3,display:"flex",flexWrap:"wrap",justifyContent:"center"},l.a.createElement(u.e,{mt:0,textAlign:"center",flex:"0 0 100%"},l.a.createElement(p.a,{width:60,height:60,style:{verticalAlign:"middle"}})," Why Cabana?"),l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(i.HeadingThree,{textAlign:["center","left"]},"For Designers"),l.a.createElement("ul",null,l.a.createElement(b,null,"Sketch Library with powerful customisation"),l.a.createElement(b,null,"Flexible visual style, whilst also keeping design system \u2018rules\u2019 under control"))),l.a.createElement(u.d,null,l.a.createElement(i.HeadingThree,{textAlign:["center","left"]},"For Developers"),l.a.createElement("ul",null,l.a.createElement(b,null,"Build your own React components or use the default"),l.a.createElement(b,null,"Works out of the box"),l.a.createElement(b,null,"Flexible and Composable")))))},k=function(){return l.a.createElement(i.Box,{bg:"#fafafa",py:3},l.a.createElement(u.e,{textAlign:"center"},"Sketch Library and Theme"),l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(i.HeadingThree,{mb:1,textAlign:["center","left"]},"Sketch Layer Styles"),l.a.createElement("img",{alt:"Some colours in sketch",style:{maxWidth:300},src:n(339)})),l.a.createElement(u.d,null,l.a.createElement(i.HeadingThree,{mb:1,textAlign:["center","left"]},"Theme JS object"),l.a.createElement(d.a,null,"\nconst theme = {\n    colors: {\n        primary: '#5450F7',\n        secondary: '#25a9ce',\n        tertiary: '#EF476F',\n        black: '#303133',\n        grey: '#8D8D8F',\n        LightGrey: '#DADADA',\n        success: '#44A45F',\n        warning: '#FCEB3B',\n        error: '#E6173E',\n    }   \n};\n        "))),l.a.createElement(i.Button,{bg:"primary",color:"white",display:"block",my:8,mx:"auto"},l.a.createElement(w,{to:"/guides"},"Check out the guides")))},B=function(){return l.a.createElement(i.Box,{bg:"tertiary"},l.a.createElement(u.h,null,l.a.createElement(u.f,{mb:2,textAlign:"center",color:"white"},"Relevant Blog Posts"),l.a.createElement(i.Box,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(v,{title:"Introducing Cabana for React",imageSrc:""}),l.a.createElement(v,{title:"Patterns for Style Composition in React",imageSrc:"",href:"http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/"}),l.a.createElement(v,{title:"The Three Tenets of Styled System",imageSrc:"",href:"https://jxnblk.com/blog/the-three-tenets-of-styled-system/"}))))},S=function(){return l.a.createElement(d.a,null,"npm install --save cabana-react")},A=function(){return l.a.createElement(i.Box,{py:4},l.a.createElement(u.e,{textAlign:"center"},"Get Started"),l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(i.HeadingThree,{mb:1},"Sketch"),l.a.createElement(u.g,{href:"https://cabanadesignsystem.com/"},"Check out the Sketch Library")),l.a.createElement(u.d,null,l.a.createElement(i.HeadingThree,{mb:1},"React"),l.a.createElement(S,null),l.a.createElement(i.Box,{mb:2}),l.a.createElement(i.ButtonSmall,{bg:"primary",color:"white",display:"block",my:1},l.a.createElement(w,{to:"/guides"},"Getting Started Guide ",l.a.createElement(c.IconArrowForwardOutline,null))))))},j=function(){return l.a.createElement(u.h,{display:"flex",flexWrap:["wrap","nowrap"]},l.a.createElement(u.d,null,l.a.createElement(u.e,{textAlign:"center"},"Concept"),l.a.createElement(i.BodyText,{mb:1},"At its heart, Cabana is a powerful Sketch-driven design system. It utilises some of Sketch's core features like symbols, layer and text styles, overrides and libraries to deliver a user-friendly, maintainable design system that speeds up your process - especially when starting a completely new project."),l.a.createElement(i.BodyText,null,"Before Cabana-React - your designs had no clear way of being translated into code. Cabana React is basically the React equivalent of the Cabana Sketch Library, and they are intended to work together... just like designers and developers"," ",l.a.createElement("span",{role:"img","aria-label":"Angel Emoji"},"\ud83d\ude07"))))}},338:function(e,t,n){e.exports=n.p+"static/media/example_button.8d33e5f6.png"},339:function(e,t,n){e.exports=n.p+"static/media/colors_sketch.0da5a5fd.png"},601:function(e,t,n){e.exports=n.p+"static/media/input_metrics.e97a07e6.png"},604:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(0),l=n.n(r),o=n(4),i=n(37),c=n(7),s=n(326),m=n(321),u=n(320);function d(e){return l.a.createElement(i.h,{id:e.title},l.a.createElement(i.e,null,"Getting Started"),l.a.createElement(i.f,null,"Install"),l.a.createElement(s.c,null),l.a.createElement(o.BodyText,{mt:2},"Now you're good to go! ",l.a.createElement("span",{role:"img","aria-label":"Party Emoji"},"\ud83c\udf89")),l.a.createElement(i.f,null,"Your first Cabana component"),l.a.createElement(o.Box,{mb:4},l.a.createElement(m.a,{mr:2,showLineNumbers:!0},"import { ThemeProvider } from 'styled-components';\nimport { Button } from 'cabana-react';\nimport myTheme from './theme.js';\n\nconst App = () => (\n    <ThemeProvider theme={myTheme}>\n        <Button bg=\"primary\" color=\"white\">Hi!</Button>\n    </ThemeProvider>\n);"),l.a.createElement(o.Button,{mt:1,bg:"primary",color:"white"},"Hi!")),l.a.createElement(o.BodyText,{is:"span"},"What's happening?",l.a.createElement("ol",null,l.a.createElement("li",null,"We're importing our ",l.a.createElement(i.b,null,"Button")," component from the ",l.a.createElement(i.b,null,"cabana-react")," library and the"," ",l.a.createElement(i.b,null,"ThemeProvider")," from styled-components to apply our ",l.a.createElement(u.HashLink,{to:"#Theming"},"theme"),"."),l.a.createElement("li",null,"Creating an instance of the ",l.a.createElement(i.b,null,"Button")," component"),l.a.createElement("li",null,"Configuring the background and text color. It's up to you how many props you customise."))),l.a.createElement(i.f,{mt:3},"Let's try another one"),l.a.createElement(o.Box,{display:"flex",alignItems:"flex-start",mb:4},l.a.createElement(m.a,{showLineNumbers:!0},'import { Card, CardTitle, CardImage } from \'cabana-react\';\n\nconst imageUrl = "https://tinyurl.com/yc9dz9xu";\nconst App = () => (\n    <Card \n        is="article" \n        textAlign="center"\n        boxShadow={60} // defined in theme.js\n    >\n        <CardImage src={imageUrl} />\n        <CardTitle>Spacious Cabana!</CardTitle>\n    </Card>\n);'),l.a.createElement(o.Card,{is:"article",textAlign:"center",ml:2,boxShadow:60},l.a.createElement(o.CardImage,{src:"https://tinyurl.com/yc9dz9xu"}),l.a.createElement(o.CardTitle,null,"Spacious Cabana!"))),l.a.createElement(o.BodyText,{is:"span"},"What's happening?",l.a.createElement("ol",null,l.a.createElement("li",null,"Creating an instance of the ",l.a.createElement(i.b,null,"Card")," component and its children"),l.a.createElement("li",null,"Configuring the HTML element type using the ",l.a.createElement(i.b,null,"is")," prop, the text alignment and the box shadow. It's up to you how many props you customise - the cool thing about react-cabana is that all components come pre-styled too!"))))}function h(e){return l.a.createElement(i.h,{id:e.title},l.a.createElement(i.e,null,"Styling"),l.a.createElement(o.BodyText,null,"Usually most style decisions will be made by your designer - and if they're also using the"," ",l.a.createElement("a",{href:"https://cabanadesignsystem.com"},"Cabana Sketch Library"),", these styles will have been set up in the library. The library file is similar to a 'config' file for developers. It contains most of the main definitions of visual styles including:"),l.a.createElement(o.BodyText,{is:"ul"},l.a.createElement("li",null,"Color pallete"),l.a.createElement("li",null,"Fonts, sizes, weights and colors"),l.a.createElement("li",null,"Different drop shadow styles")),l.a.createElement(o.BodyText,null,"These are set in the ",l.a.createElement(u.HashLink,{to:"#Theming"},"theme file")))}var p=function(e){return l.a.createElement(o.Button,Object.assign({bg:"tertiary",fontWeight:"bold"},e))},y=function(e){return l.a.createElement(o.Box,Object.assign({p:1,border:"1px solid",borderColor:"tertiary"},e))},f=function(e){return l.a.createElement(i.c,Object.assign({border:"1px solid",borderColor:"tertiary",px:2,py:2,borderRadius:"small",bg:"tertiary",color:"white"},e))};function g(e){return l.a.createElement(i.h,{id:e.title},l.a.createElement(i.e,null,"Best Practices"),l.a.createElement(i.f,{my:1},"1. Communicate with your Designer!"),l.a.createElement(i.c,{color:"grey",mb:2},"(...or designers - communicate with your devs... early!)"),l.a.createElement(i.c,null,"The beauty of Cabana is that the system is built in a way that brings the designer and the developer closer together. Instead of speaking in ",l.a.createElement("em",null,"attributes")," (like font size, color value, pixel widths), you speak in"," ",l.a.createElement("em",null,"components")," and ",l.a.createElement("em",null,"units")," (like Hero text, Body text, primary color, and units of padding)."),l.a.createElement(i.c,null,"Spacing is a good example - Cabana is built on the"," ",l.a.createElement(i.g,{href:"https://spec.fm/specifics/8-pt-grid",target:"_blank"},"8pt grid system")," ",'and is set up in code to measure units in multiples of 8. In this way, a designer who may choose to use 32px of padding can easily communicate that it\'s "4 units" of padding.'),l.a.createElement(o.Card,{display:"flex"},l.a.createElement(i.d,null,l.a.createElement(m.a,null,"const theme = {\n    space: [0, 8, 16, 24, 32],\n};\n// 32px padding\n<TextInput p={4} />"),l.a.createElement(o.TextInput,{p:3,placeholder:"Input Text",mt:2,width:"150px"})),l.a.createElement(i.d,null,l.a.createElement("img",{alt:"Input sizing in Sketch",src:n(601),style:{maxWidth:"100%"}}))),l.a.createElement(f,{my:2},"Tip: you can also change the pixel units to be based on any scale you want. They don't even need to be multiples of the same number."),l.a.createElement(i.c,null,"In early stages of design \u2013 Designers and Devs should keep an open dialogue about the product's overall visual style, metaphors and heirarchy of components."),l.a.createElement(i.a,null,"Here's the color palette, here are the base font sizes for each level, here are the different border radii and here is the spacing scale."),l.a.createElement(i.f,null,"2. Define your own components"),l.a.createElement(i.c,null,"In many cases, you'll end up customising the Cabana components to have a certain visual style. To save yourself from duplicating the props that define the visual style, it's recommended that you create your own instances of Cabana's base \"Primitives\" and then use these in your apps."),l.a.createElement(o.HeadingFour,null,"Example:"),l.a.createElement(o.Card,{display:"flex",bg:"darkGrey"},l.a.createElement(i.d,null,l.a.createElement(m.a,null,'import { Box, Button, SmallText } from \'cabana-react\';\n\nconst ButtonPrimary = props => <Button bg="tertiary" fontWeight="bold" color="white" {...props} />;\nconst AdBox = props => <Box p={1} border="1px solid" borderColor="tertiary" {...props} />;\n\nconst App = () => (\n    <AdBox display="flex">\n        <SmallText color="tertiary">Please click this button to see a jack in the box.</SmallText>\n        <ButtonPrimary>Boinggg!</ButtonPrimary>\n    </AdBox>\n)\n            ')),l.a.createElement(i.d,null,l.a.createElement(y,{display:"flex"},l.a.createElement(o.SmallText,{color:"tertiary"},"Please click this button to see a jack in the box."),l.a.createElement(p,{ml:1},"Boinggg!")))),l.a.createElement(i.f,{my:4},"3. Core styles inside, variant styles outside"),l.a.createElement(i.c,null,"Remember that Cabana is a design system. The system is based around ",l.a.createElement("em",null,"constraints"),". A good way of 'enforcing' those constraints is to internally set the 'core' or 'fixed' style properties. Of course, to not be"," ",l.a.createElement("em",null,"too restrictive"),", you can still let the developer override / customise props easily from the outside."),l.a.createElement(f,null,"When deciding which props to set in your component definition and which to pass in as props, try to think about your component's API from the perspective of ",l.a.createElement("em",null,'"which props are fixed?"')," and"," ",l.a.createElement("em",null,'which props will our design system let the designer/developer decide case-by-case?"')),l.a.createElement(i.a,null,"Designer: Our cards can have one alternative background color - the default is white and when it's inactive, it is grey."),l.a.createElement(m.a,null,"import { Card } from 'cabana-react'; \n\nconst MyCard = props => <Card boxShadow=\"large\" bg={props.bg} />;\n\nMyCard.defaultProps = {\n    bg: \"white\",\n};\n\n// Now the developer can set the bg color based on the isInactive prop\n<MyCard bg={isInactive && 'lightGrey'} />\n\n// Alternative - here the card would need to handle the isActive prop internally\n<MyCard isActive={false} />\n            "),l.a.createElement(o.Box,{display:"grid",style:{gridTemplateColumns:"1fr 1fr 1fr",gridColumnGap:"20px"},mt:2},l.a.createElement(o.Card,null,l.a.createElement(o.CardImage,{src:"https://tinyurl.com/yc9dz9xu"}),l.a.createElement(o.CardBodyText,null,"Active (default)")),l.a.createElement(o.Card,{bg:"lightGrey"},l.a.createElement(o.CardImage,{src:"https://tinyurl.com/yc9dz9xu"}),l.a.createElement(o.CardBodyText,null,"Inactive"))),l.a.createElement(i.c,{mt:4},"This is a simplified example, but it illustrates the recommended practice of choosing what options to 'expose' in your component's API and how that relates to the rules set in the design system."))}function b(e){return l.a.createElement(i.h,{id:e.title},l.a.createElement(i.e,null,"Theming"),l.a.createElement(i.c,null,"Most visual style properties are set in one central location of your code; the ",l.a.createElement(i.b,null,"theme.js")," file. This file is the code equivalent of your Cabana Sketch Library file."),l.a.createElement(i.c,null,"Under the hood, Cabana uses the ",l.a.createElement(i.b,null,"ThemeProvider")," from styled-components and the theme properties set in ",l.a.createElement(i.g,{href:"https://github.com/jxnblk/styled-system"},"styled-system"),". You're free to expand upon this how ever you like though!"),l.a.createElement(m.a,null,"import { ThemeProvider } from 'styled-components';\n\nconst myTheme = {\n    space: [0, 8, 15, 24, 32],\n    colors: {\n        primary: '#5450F7',\n        secondary: '#25a9ce',\n        tertiary: '#EF476F',\n        black: '#303133',\n        grey: '#8D8D8F',\n        lightGrey: '#DADADA',\n        darkGrey: '#303133',\n        success: '#44A45F',\n        warning: '#FCEB3B',\n        error: '#E6173E',\n        white: '#ffffff',\n    },\n}\n\nconst App = () => (\n    <ThemeProvider theme={myTheme}>\n        <Button bg=\"primary\" color=\"secondary\" p={2}>Styled Button!</Button>\n    </ThemeProvider>\n);\n"),l.a.createElement(i.c,{mt:2},"You can find the source file for the default theme object"," ",l.a.createElement(u.HashLink,{to:"https://github.com/lucastobrazil/cabana-react"},"on Github")))}function E(){var e=Object(a.a)(["\n  transition: all 350ms;\n  text-decoration: none;\n  &:hover {\n    background-color: #fafafa;\n    box-shadow: 0 16px 24px rgba(48, 49, 51, 0.2);\n  }\n"]);return E=function(){return e},e}n.d(t,"default",function(){return v});var x=Object(c.default)(o.Box)(E());x.defaultProps={boxShadow:100,bg:"white",border:"1px solid",borderColor:"transparent",borderRadius:"small",color:"primary",py:2,textAlign:"center",is:u.HashLink,fontWeight:"bold"};var w=[{url:"GettingStarted",name:"Getting Started"},{url:"Styling",name:"Styling"},{url:"Theming",name:"Theming"},{url:"BestPractices",name:"Best Practices"}];function v(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.h,null,l.a.createElement(o.LeadText,{mb:4},"Guides"),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridColumnGap:16,gridRowGap:16}},w.map(function(e,t){return l.a.createElement(x,{key:t,to:"#".concat(e.url),children:e.name})}))),l.a.createElement(d,{title:w[0].url}),l.a.createElement(h,{title:w[1].url}),l.a.createElement(b,{title:w[2].url}),l.a.createElement(g,{title:w[3].url}))}}}]);
//# sourceMappingURL=4.680beac9.chunk.js.map