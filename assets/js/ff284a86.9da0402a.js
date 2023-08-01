"use strict";(self.webpackChunktilli_docs=self.webpackChunktilli_docs||[]).push([[3361],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var s=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,s,o=function(e,t){if(null==e)return{};var i,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var n=s.createContext({}),u=function(e){var t=s.useContext(n),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=u(e.components);return s.createElement(n.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,n=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(i),c=o,h=d["".concat(n,".").concat(c)]||d[c]||m[c]||a;return i?s.createElement(h,l(l({ref:t},p),{},{components:i})):s.createElement(h,l({ref:t},p))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=c;var r={};for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var u=2;u<a;u++)l[u]=i[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,i)}c.displayName="MDXCreateElement"},4307:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=i(7462),o=(i(7294),i(3905));const a={},l="Contribution Guidelines",r={unversionedId:"Contribution-Guidelines",id:"Contribution-Guidelines",title:"Contribution Guidelines",description:"Tilli development team would like to thank you for your interest to contribute! We would love your input! We want to make contributing to this project as easy and transparent as possible, whether you are a developer or an organization or individual who wants to:",source:"@site/docs/Contribution-Guidelines.md",sourceDirName:".",slug:"/Contribution-Guidelines",permalink:"/docs/Contribution-Guidelines",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Opensource Quality Assuarance Process",permalink:"/docs/OpensourceQAProcess"},next:{title:"Code of Conduct",permalink:"/docs/code-of-conduct"}},n={},u=[{value:"Pull Requests:",id:"pull-requests",level:3},{value:"Report Bugs, Issues or Share Feedback",id:"report-bugs-issues-or-share-feedback",level:3},{value:"GitHub Forms",id:"github-forms",level:4},{value:"For Backend Server",id:"for-backend-server",level:5},{value:"For IDE",id:"for-ide",level:5},{value:"For Web-App",id:"for-web-app",level:5},{value:"For Godot Strategies",id:"for-godot-strategies",level:5},{value:"For Tilli-Machine-Learning Component",id:"for-tilli-machine-learning-component",level:5},{value:"Module-Creators",id:"module-creators",level:5},{value:"Parents-Teachers",id:"parents-teachers",level:5},{value:"Contribute via Translations:",id:"contribute-via-translations",level:3},{value:"Contribute via Designs:",id:"contribute-via-designs",level:3},{value:"Style Guide",id:"style-guide",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribution-guidelines"},"Contribution Guidelines"),(0,o.kt)("p",null," Tilli development team would like to thank you for your interest to contribute! We would love your input! We want to make contributing to this project as easy and transparent as possible, whether you are a developer or an organization or individual who wants to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pull Requests"),(0,o.kt)("li",{parentName:"ul"},"Report Bugs & Issues"),(0,o.kt)("li",{parentName:"ul"},"Provide Feedback"),(0,o.kt)("li",{parentName:"ul"},"Propose New Features"),(0,o.kt)("li",{parentName:"ul"},"Submit a Fix"),(0,o.kt)("li",{parentName:"ul"},"Discuss the current state of the code"),(0,o.kt)("li",{parentName:"ul"},"Become a Maintainer"),(0,o.kt)("li",{parentName:"ul"},"Become a Translator"),(0,o.kt)("li",{parentName:"ul"},"Contribute via Designs"),(0,o.kt)("li",{parentName:"ul"},"Get involved with the Tilli community")),(0,o.kt)("p",null,"We have created guidelines for contributing to Tilli project and packages. These are guidelines, not rules. We encourage you to use your best judgment, and feel free to recommend changes to this document in a pull request. We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss"},"GitHub")," to host code, to \ttrack issues and feature requests, as well as accept pull requests."),(0,o.kt)("h3",{id:"pull-requests"},"Pull Requests:"),(0,o.kt)("p",null,"The best way to contribute to this project is by making a pull request in following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork the Tilli project and work on your fork"),(0,o.kt)("li",{parentName:"ul"},"Create a new branch on which you want to make changes - \u201cgit checkout -b \u2018my-contribution\u2019\u201d or push your changes on develop branch"),(0,o.kt)("li",{parentName:"ul"},"Please make one pull request per issue to avoid large merges."),(0,o.kt)("li",{parentName:"ul"},"Commit your change with a commit message describing the correction."),(0,o.kt)("li",{parentName:"ul"},"Submit a pull request against the Tilli repository. "),(0,o.kt)("li",{parentName:"ul"},"In general, all pull requests must:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Have a clear use case, fix a demonstrable bug or serve the greater good of the project"),(0,o.kt)("li",{parentName:"ul"},"Have unit tests, where appropriate;"),(0,o.kt)("li",{parentName:"ul"},"Follow code style guidelines"),(0,o.kt)("li",{parentName:"ul"},"Not break the existing test suite"),(0,o.kt)("li",{parentName:"ul"},"Where bugs are fixed, where possible, there should be unit tests demonstrating the bug and also proving the fix. This helps prevent regression."),(0,o.kt)("li",{parentName:"ul"},"Change relevant comments and documentation when the behavior of code changes.")))),(0,o.kt)("h3",{id:"report-bugs-issues-or-share-feedback"},"Report Bugs, Issues or Share Feedback"),(0,o.kt)("p",null,"If you find any bug and you're not sure how to fix it, or you don't know how to do a pull request, then you can create an Issue. Filing an Issue will help us see the problem and fix it. Bugs are tracked as GitHub issues. After you've determined which repository your bug is related to, create an issue on that repository and provide the following information. A contributor is invited to create an issue, discuss it, and provide a fix if needed. You are also welcome to share your feedback on any of the same. "),(0,o.kt)("h4",{id:"github-forms"},"GitHub Forms"),(0,o.kt)("p",null,"Kindly go to the respective repositories if you wish to file an issue/bugs, feedback, clarify doubts or propose a new feature through our GitHub forms:"),(0,o.kt)("h5",{id:"for-backend-server"},"For Backend Server"),(0,o.kt)("p",null,"If you encounter any issue or you are not able to figure out the same in the Backend Server, kindly report the issue on our official GitHub Forms: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-backend-server/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"Feedback/Doubts Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-backend-server/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D"},"HERE"))),(0,o.kt)("p",null,"You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For open issues (yet to be solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-backend-server/issues?q=is%3Aopen+is%3Aissue"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"For closed issues (solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-backend-server/issues?q=is%3Aissue+is%3Aclosed"},"HERE"))),(0,o.kt)("p",null,"If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-backend-server/issues/new"},"HERE")),(0,o.kt)("h5",{id:"for-ide"},"For IDE"),(0,o.kt)("p",null,"If you encounter any issue or you are not able to figure out the same in the IDE, kindly report the issue on our official GitHub Forms: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"Feedback/Doubts Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D"},"HERE"))),(0,o.kt)("p",null,"If you wish to suggest new features that could be beneficial for you and the community in the IDE kindly fill the following form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Feature Request Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=enhancement%2Cquestion&template=feature_request.yml&title=Request+for+%5Bfeature%5D"},"HERE"))),(0,o.kt)("p",null,"You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For open issues (yet to be solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"For closed issues (solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues?q=is%3Aissue+is%3Aclosed"},"HERE"))),(0,o.kt)("p",null,"If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-ide/issues/new"},"HERE")),(0,o.kt)("h5",{id:"for-web-app"},"For Web-App"),(0,o.kt)("p",null,"If you encounter any issue or you are not able to figure out the same in the Web-App, kindly report the issue on our official GitHub Forms: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment%2Cart+%26+design&template=bug_report_form.yml&title=Found+a+%5Bbug%5D"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"Feedback/Doubts Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D"},"HERE"))),(0,o.kt)("p",null,"You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For open issues (yet to be solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues?q=is%3Aopen+is%3Aissue"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"For closed issues (solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues?q=is%3Aissue+is%3Aclosed"},"HERE"))),(0,o.kt)("p",null,"If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-web-app/issues/new"},"HERE")),(0,o.kt)("h5",{id:"for-godot-strategies"},"For Godot Strategies"),(0,o.kt)("p",null,"If you encounter any issue or you are not able to figure out the same in the Godot Startegies, kindly report the issue on our official GitHub Forms: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/Godot-Strategies-V1/issues/new?assignees=Tilliforkids&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D+in+%5BABCDE+Strategy+Name%5D"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"Feedback/Doubts Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/Godot-Strategies-V1/issues/new?assignees=Tilliforkids%2CBriandsouza-17%2CHannah31George&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D"},"HERE"))),(0,o.kt)("p",null,"You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For open issues (yet to be solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/Godot-Strategies-V1/issues?q=is%3Aopen+is%3Aissue"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"For closed issues (solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/Godot-Strategies-V1/issues?q=is%3Aissue+is%3Aclosed"},"HERE"))),(0,o.kt)("p",null,"If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss/Godot-Strategies-V1/issues/new"},"HERE")),(0,o.kt)("h5",{id:"for-tilli-machine-learning-component"},"For Tilli-Machine-Learning Component"),(0,o.kt)("p",null,"If you encounter any issue or you are not able to figure out the same regarding the Machine Learning Component, kindly report the issue on our official GitHub Forms: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-machine-learning/issues/new?assignees=Tilliforkids%2Cakshika47&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"Feedback/Doubts Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-machine-learning/issues/new?assignees=Tilliforkids%2Cakshika47&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D"},"HERE"))),(0,o.kt)("p",null,"You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For open issues (yet to be solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-machine-learning/issues?q=is%3Aopen+is%3Aissue"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"For closed issues (solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-machine-learning/issues?q=is%3Aissue+is%3Aclosed"},"HERE"))),(0,o.kt)("p",null,"If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-machine-learning/issues/new"},"HERE")),(0,o.kt)("h5",{id:"module-creators"},"Module-Creators"),(0,o.kt)("p",null,"If you encounter any issue or you are not able to figure out the same in the IDE, kindly report the issue on our official GitHub Forms: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment&template=bug_report_form.yml&title=Found+a+%5Bbug%5D"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"Feedback/Doubts Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D"},"HERE"))),(0,o.kt)("p",null,"If you wish to suggest new features that could be beneficial for you and the community in the IDE kindly fill the following form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Feature Request Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues/new?assignees=Tilliforkids%2Cmynap&labels=enhancement%2Cquestion&template=feature_request.yml&title=Request+for+%5Bfeature%5D"},"HERE"))),(0,o.kt)("p",null,"You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For open issues (yet to be solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"For closed issues (solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide/issues?q=is%3Aissue+is%3Aclosed"},"HERE"))),(0,o.kt)("p",null,"If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-ide/issues/new"},"HERE")),(0,o.kt)("h5",{id:"parents-teachers"},"Parents-Teachers"),(0,o.kt)("p",null,"If you encounter any issue and you are not able to figure out the same in the Web-App, kindly report the issue on our official GitHub Forms: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug Report Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues/new?assignees=Tilliforkids%2Cmynap&labels=bug%2Cdevelopment%2Cart+%26+design&template=bug_report_form.yml&title=Found+a+%5Bbug%5D"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"Feedback/Doubts Form: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues/new?assignees=Tilliforkids%2Cmynap&labels=feedback%2Fdoubt%2Cdocumentation&template=feedback_or_doubt_form.yml&title=Have+a+%5Bfeedback%5D%2C+%5Bdoubt%5D"},"HERE"))),(0,o.kt)("p",null,"You can also search for past issues or requests to check if any other user has already encountered your issue or suggested the same feature here: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For open issues (yet to be solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues?q=is%3Aopen+is%3Aissue"},"HERE")),(0,o.kt)("li",{parentName:"ul"},"For closed issues (solved): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app/issues?q=is%3Aissue+is%3Aclosed"},"HERE"))),(0,o.kt)("p",null,"If you wish to open an issue that does not fall in any of the above categories, kindly open a blank issue: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-web-app/issues/new"},"HERE")),(0,o.kt)("h3",{id:"contribute-via-translations"},"Contribute via Translations:"),(0,o.kt)("p",null,"Kindly go to the User Documentation section on the left and read the Translator section to know more on how to contribute as a translator to support the Tilli community or write to us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:info@tillikids.org"},"info@tillikids.org")),(0,o.kt)("h3",{id:"contribute-via-designs"},"Contribute via Designs:"),(0,o.kt)("p",null,"If you are interested in creating and designing in games, UI/UX, animations, photos, infographics, tutorials, and explainers for the Tilli community -- feel free to contact us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:info@tillikids.org"},"info@tillikids.org")),(0,o.kt)("p",null,"For any doubts with regard to development, whether it is to become a maintainer or to  discuss the current state of the code, kindly reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@teqbahn.com"},"support@teqbahn.com"),"."),(0,o.kt)("p",null,"For any doubts with regard to design or content kindly reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:info@tillikids.org"},"info@tillikids.org")," "),(0,o.kt)("h2",{id:"style-guide"},"Style Guide"),(0,o.kt)("p",null,"This repository uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint"},"eslint")," to enforce ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"air-bnb coding styles"),"."),(0,o.kt)("p",null,"Last updated : 20/02/2023"))}m.isMDXComponent=!0}}]);