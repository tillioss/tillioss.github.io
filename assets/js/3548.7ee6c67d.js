(self.webpackChunktilli_docs=self.webpackChunktilli_docs||[]).push([[3548],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7462),r=n(7294),a=n(6010),c=n(5999),l=n(6668);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function i(e){let{as:t,id:n,...i}=e;const{navbar:{hideOnScroll:u}}=(0,l.L)();return"h1"!==t&&n?r.createElement(t,(0,o.Z)({},i,{className:(0,a.Z)("anchor",u?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar),id:n}),i.children,r.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,o.Z)({},i,{id:void 0}))}},3548:(e,t,n)=>{"use strict";n.d(t,{Z:()=>oe});var o=n(7294),r=n(3905),a=n(7462),c=n(5742);var l=n(2389),s=n(6010),i=n(2949),u=n(6668);function p(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var m=n(7594),d=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){const n=e.map((e=>{const{start:n,end:o}=y[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:a}=t;if(a&&g.test(a)){const e=a.match(g).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(y),t)}}(o,r),l=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<l.length;){const e=l[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),l.splice(d,1)}n=l.join("\n");const m={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}var v=n(5281);const k={codeBlockContainer:"codeBlockContainer_Ckt0"};function E(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(p());return o.createElement(t,(0,a.Z)({},n,{style:r,className:(0,s.Z)(n.className,k.codeBlockContainer,v.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return o.createElement(E,{as:"pre",tabIndex:0,className:(0,s.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:N.codeBlockLines},t))}const C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var w={Prism:n(7410).Z,theme:C};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}var L=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function S(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var x=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),j(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=O({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=O({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),j(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=O({},S(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?O({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),j(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),j(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=O({},S(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?O({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),j(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,l=[],s=[l];c>-1;){for(;(a=o[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=Z(u,p.type),p.alias&&(u=Z(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(L),d=m.length;l.push({types:u,content:m[0]});for(var f=1;f<d;f++)T(l),s.push(l=[]),l.push({types:u,content:m[f]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return T(l),s}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const _=x,P={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function I(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:c,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,s.Z)(n,r&&P.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},l({token:e,key:t})))));return o.createElement("span",i,r?o.createElement(o.Fragment,null,o.createElement("span",{className:P.codeLineNumber}),o.createElement("span",{className:P.codeLineContent},u)):o.createElement(o.Fragment,null,u,o.createElement("br",null)))}var A=n(5999);const W={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function D(e){let{code:t,className:n}=e;const[r,a]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),r&&r.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,A.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,W.copyButton,r&&W.copyButtonCopied),onClick:l},o.createElement("span",{className:W.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:W.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:W.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function H(e){let{className:t,onClick:n,isEnabled:r}=e;const a=(0,A.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,r&&$.wordWrapButtonEnabled),"aria-label":a,title:a},o.createElement("svg",{className:$.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function V(e){let{children:t,className:n="",metastring:r,title:c,showLineNumbers:l,language:i}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,u.L)(),g=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m,y=p(),h=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[a,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),v=function(e){return e?.match(f)?.groups.title??""}(r)||c,{lineClassNames:k,code:B}=b(t,{metastring:r,language:g,magicComments:d}),C=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return o.createElement(E,{as:"div",className:(0,s.Z)(n,g&&!n.includes(`language-${g}`)&&`language-${g}`)},v&&o.createElement("div",{className:N.codeBlockTitle},v),o.createElement("div",{className:N.codeBlockContent},o.createElement(_,(0,a.Z)({},w,{theme:y,code:B,language:g??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:a}=e;return o.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,s.Z)(t,N.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,s.Z)(N.codeBlockLines,C&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(I,{key:t,line:e,getLineProps:r,getTokenProps:a,classNames:k[t],showLineNumbers:C})))))})),o.createElement("div",{className:N.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&o.createElement(H,{className:N.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),o.createElement(D,{className:N.codeButton,code:B}))))}function z(e){let{children:t,...n}=e;const r=(0,l.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?V:B;return o.createElement(s,(0,a.Z)({key:String(r)},n),c)}var M=n(9960);var R=n(6043);const F={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function G(e,t){return!!e&&(e===t||G(e.parentElement,t))}function Y(e){let{summary:t,children:n,...r}=e;const c=(0,l.Z)(),i=(0,o.useRef)(null),{collapsed:u,setCollapsed:p}=(0,R.u)({initialState:!r.open}),[m,d]=(0,o.useState)(r.open);return o.createElement("details",(0,a.Z)({},r,{ref:i,open:m,"data-collapsed":u,className:(0,s.Z)(F.details,c&&F.isBrowser,r.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;q(t)&&G(t,i.current)&&(e.preventDefault(),u?(p(!1),d(!0)):p(!0))}}),t??o.createElement("summary",null,"Details"),o.createElement(R.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),d(!e)}},o.createElement("div",{className:F.collapsibleContent},n)))}const U={details:"details_b_Ee"},J="alert alert--info";function K(e){let{...t}=e;return o.createElement(Y,(0,a.Z)({},t,{className:(0,s.Z)(J,U.details,t.className)}))}var X=n(2503);function Q(e){return o.createElement(X.Z,e)}const ee={containsTaskList:"containsTaskList_mC6p"};const te={img:"img_ev3q"};const ne={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e):e));return o.createElement(c.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props.mdxType)))?o.createElement("code",e):o.createElement(z,e)},a:function(e){return o.createElement(M.Z,e)},pre:function(e){return o.createElement(z,(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(K,(0,a.Z)({},e,{summary:n}),r)},ul:function(e){return o.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,s.Z)(t,t?.includes("contains-task-list")&&ee.containsTaskList))}));var t},img:function(e){return o.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,te.img))}));var t},h1:e=>o.createElement(Q,(0,a.Z)({as:"h1"},e)),h2:e=>o.createElement(Q,(0,a.Z)({as:"h2"},e)),h3:e=>o.createElement(Q,(0,a.Z)({as:"h3"},e)),h4:e=>o.createElement(Q,(0,a.Z)({as:"h4"},e)),h5:e=>o.createElement(Q,(0,a.Z)({as:"h5"},e)),h6:e=>o.createElement(Q,(0,a.Z)({as:"h6"},e))};function oe(e){let{children:t}=e;return o.createElement(r.Zo,{components:ne},t)}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);