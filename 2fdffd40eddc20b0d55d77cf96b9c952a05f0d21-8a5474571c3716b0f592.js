(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[6553],{18159:function(e,n,t){var a=t(15301).w_;e.exports.K=function(e){return a({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2zM1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zM1 12a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"}}]})(e)}},24727:function(e,n,t){var a=t(15301).w_;e.exports.k=function(e){return a({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"}}]})(e)}},49101:function(e,n,t){var a=t(15301).w_;e.exports.l=function(e){return a({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 15l7-7 7 7"}}]})(e)}},35528:function(e,n,t){var a=t(15301).w_;e.exports.X=function(e){return a({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 17h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2z"}},{tag:"circle",attr:{cx:"5",cy:"19",r:"2.5"}},{tag:"circle",attr:{cx:"5",cy:"12",r:"2.5"}},{tag:"circle",attr:{cx:"5",cy:"5",r:"2.5"}}]})(e)}},935:function(e,n,t){var a=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,m="object"==typeof self&&self&&self.Object===Object&&self,u=d||m||Function("return this")(),p=Object.prototype.toString,f=Math.max,b=Math.min,g=function(){return u.Date.now()};function h(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==r}(e))return a;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var t=l.test(e);return t||c.test(e)?s(e.slice(2),t?2:8):o.test(e)?a:+e}e.exports=function(e,n,t){var a,r,i,o,l,c,s=0,d=!1,m=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=a,i=r;return a=r=void 0,s=n,o=e.apply(i,t)}function w(e){var t=e-c;return void 0===c||t>=n||t<0||m&&e-s>=i}function v(){var e=g();if(w(e))return y(e);l=setTimeout(v,function(e){var t=n-(e-c);return m?b(t,i-(e-s)):t}(e))}function y(e){return l=void 0,u&&a?p(e):(a=r=void 0,o)}function A(){var e=g(),t=w(e);if(a=arguments,r=this,c=e,t){if(void 0===l)return function(e){return s=e,l=setTimeout(v,n),d?p(e):o}(c);if(m)return l=setTimeout(v,n),p(c)}return void 0===l&&(l=setTimeout(v,n)),o}return n=x(n)||0,h(t)&&(d=!!t.leading,i=(m="maxWait"in t)?f(x(t.maxWait)||0,n):i,u="trailing"in t?!!t.trailing:u),A.cancel=function(){void 0!==l&&clearTimeout(l),s=0,a=c=r=l=void 0},A.flush=function(){return void 0===l?o:y(g())},A}},20749:function(e,n,t){"use strict";var a=t(67294),r=t(37242),i=t(35528),o=t(18159),l=t(42109);const c=t(85313).default.div.withConfig({displayName:"blog-view-tooltip__ToolTipWrapper",componentId:"sc-mhl0h7-0"})(["\n    @media screen and (max-width: 576px) {\n        display: none;\n    }\n    float:left;\n    margin: auto 1rem;\n\n    .border {\n        line-height: 18px;\n    }\n\n    a {\n        padding: 5px;\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        background-color: ",";\n        border: 1.5px solid ",";\n        &:hover{\n            background-color: ",";\n            color: ",";\n            cursor: pointer;\n            border: 1.5px solid ",";\n        }             \n    }\n    .active {\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        background-color: ",";\n        color: ",";\n        border: 1.5px solid ",";\n    }\n"],(e=>e.theme.keppletColor),(e=>e.theme.grey212121ToWhite),(e=>e.theme.keppletColor),(e=>e.theme.primaryColor),(e=>e.theme.primaryLightColorTwo),(e=>e.theme.primaryColor),(e=>e.theme.primaryColor),(e=>e.theme.primaryLightColorTwo),(e=>e.theme.primaryColor));n.Z=e=>{let{isListView:n,setListView:t,setGridView:s}=e;const d=e=>{let{children:n}=e;const{0:t,1:r}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{r(!0)}),[]),a.createElement(a.Fragment,null,t?n:null)};return a.createElement(c,null,a.createElement(r.X2,{className:"border"},a.createElement("a",{"data-tip":"Grid View","data-for":"grid-view",onClick:s,className:""+(!n&&"active")},a.createElement(o.K,{size:22})),a.createElement(d,null,a.createElement(l.Z,{id:"grid-view",border:!0,className:"grid-view",backgroundColor:"black",place:"top",effect:"solid"})),a.createElement("a",{"data-tip":"List View","data-for":"list-view",onClick:t,className:""+(n&&"active")},a.createElement(i.X,{size:22})),a.createElement(d,null,a.createElement(l.Z,{id:"list-view",className:"list-view",backgroundColor:"black",place:"top",type:"dark",effect:"solid"}))))}},36966:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(67294),r=t(71082),i=t(51174),o=t.n(i),l=t(93723),c=t(63689);var s=t(85313).default.div.withConfig({displayName:"blogSidebarstyle__BlogSideBarWrapper",componentId:"sc-1lfop4l-0"})(["\n    .sidebar-widgets {\n        padding: 15px 30px;\n    }\n\n    .widgets-title{\n        margin-bottom: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        cursor: pointer;\n        h3{\n            display: inline-block;\n            font-weight: 500;\n            position: relative;\n            &:before{\n                position: absolute;\n                top: 50%;\n                right: -80px;\n                content: '';\n                width: 70px;\n                height: 1px; \n            }\n        }\n        .menu-icon{\n            float:right;\n            vertical-align: bottom;\n            width: 1.5rem; \n            height: 1.5rem; \n        }\n        \n    }\n    \n    .sidebar-widgets{\n        ul{\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n\n        .ul-close{\n            display:none;\n        }\n\n        .scroll{\n            max-height: 40rem;\n            overflow: auto;\n            padding-right: 10px;\n            scrollbar-width: thin;\n\n            &::-webkit-scrollbar-thumb {\n                background: #a9a9a9;\n                border-radius: 1rem;\n            }\n            &::-webkit-scrollbar-track {\n                background: #f0f0f0;\n                border-radius: 1rem;\n            }\n            &::-webkit-scrollbar-button {\n                display: none;\n            }\n            &::-webkit-scrollbar {\n                width: 6px;\n                display: block;\n            }\n        }\n        \n        &.catagorie{\n            \n            li{\n                &+li{\n                    margin-top: 3px;\n                }\n                a{\n                    color: ",';\n                    display: flex;\n                    justify-content: space-between;\n                    font: 400 16px/35px "Qanelas Soft", "Open Sans", sans-serif;\n                    em{font-style: normal;\n                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n                    }\n                    span{\n                        border-bottom: 1px solid transparent;\n                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n                    }\n                    &:hover{\n                        span, em{\n                            color: ',"; \n                            border-color: ","; \n                        }\n                   \n                    }\n                    &:focus{\n                        span, em{\n                            color: ","; \n                            border-color: ","; \n                        }\n                    }\n                }\n            }\n        }\n        &.tags{\n            ul{\n                margin-top: -5px;\n                margin-left: -5px;\n                margin-right: -5px;\n            }\n            li{\n                display: inline-block;\n                a{\n                    color: ",";\n                    margin: 5px;\n                    display: block;\n                    padding: 6px 18px;\n                    border-radius: 3px;\n                    background: ",';\n                    font: 400 13px/26px "Qanelas Soft", "Open Sans", sans-serif; \n                    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n                    &:hover{\n                        background: ',";\n                        color: ",';\n                    }\n                   \n                }\n            }\n            \n        }\n    }\n\n    .subscribe {\n\t\tfont-family: "Qanelas Soft", "Open Sans", sans-serif;\n        padding: 0 1rem;\n        margin: 1rem auto auto;\n        display:flex;\n        justify-content:center;\n\n\t\tspan {\n\t\t\th4 {\n                font-weight: 500;\n                margin-bottom: 0.5rem;\n            }\n\t\t}\n\n\t\tinput {\n            display: inline-flex;\n\t\t\tpadding: 1rem;\n\t\t\tmargin-right: 0.25rem;\n            width: auto;\n\t\t\theight: 3.5rem;\n\t\t\tcolor: rgba(0, 0, 0, 0.75);\n\t\t\tborder: 1px solid #000000;\n\t\t\tborder-top-left-radius: 0.3rem;\n            border-bottom-left-radius: 0.3rem;\n\t\t}\n\n\t\tbutton {\n\t\t\theight: 3.5rem;\n            min-width: auto;\n            border-radius: 0 0.3rem 0.3rem 0;\n\t\t}\n\n        @media screen and (max-width: 1200px) {\n            \n            padding: 0 0.5rem;\n\n            input {\n                width: 10.5rem;\n            }\n        }\n\n        @media screen and (max-width: 992px) {      \n            display: none;\n        }\n\t}\n\n    @media only screen and (max-width: 1024px) {\n        .sidebar-widgets {\n            padding: 3rem 0 0 0;\n        } \n    }\n   \n    .explain-1 {\n        padding-top: 0rem;\n        text-align: center;\n      \n        .cards {\n            margin: 0.15rem auto 2.5rem ;\n            max-width: 50rem;\n            padding: 0rem 2.7rem 0rem 1rem;\n            background-color: none;\n            border-radius: 25px;\n            @media only screen and (max-width: 1200px) {\n            //  margin-top: 0rem;\n             padding: 1.5rem 0.8rem 0rem 0.5rem;\n             }\n            .card {\n                -webkit-transition: 450ms all;\n                transition: 450ms all;\n                padding: 1.25rem;\n                display: flex;\n                flex-direction: column;\n                justify-content: space-around;\n                gap: 1rem;\n                background-color: ',";   \n                border-radius: 1.5rem;\n                \n                p {\n                    text-align: center;\n                    letter-spacing: 0;\n                    font-size: 15px;\n                    font-weight: 200;\n                    margin-top: -1rem;\n                    color: ","; \n                }\n                h2 {\n                    text-align: center;\n                    font-size: 1.5rem;\n                    text-transform:uppercase;\n                    clear: both;\n                    color: ","; \n                }\n                img {\n                    border-radius: 1rem;\n                }\n                .logo{\n                 width: 100%;  \n                 }\n                &:hover,\n                &:focus {\n                   outline: none;\n                }\n                &:hover{\n                    transform: translateY(0.03rem);\n                    box-shadow: 0 2px 10px #00d3a9;\n                }\n                }\n            }\n        \n    }\n    @media screen and (max-width: 992px) {      \n        display: flex;\n        flex-direction:column-reverse;\n    }  \n\n"],(e=>e.theme.whiteToBlack),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.text),(e=>e.theme.grey212121ToGreyF0F0F0),(e=>e.theme.secondaryColor),(e=>e.theme.textRevert),(e=>e.theme.darkJungleGreenColor),(e=>e.theme.white),(e=>e.theme.white)),d=t(49101),m=t(24727);var u=e=>{let{pageContext:n}=e;const i=(0,r.useStaticQuery)("3205812809"),{0:u,1:p}=(0,a.useState)(!0),{0:f,1:b}=(0,a.useState)(!0),g=i.tags.group.sort(((e,n)=>n.totalCount-e.totalCount)),h=i.categories.group.sort(((e,n)=>n.totalCount-e.totalCount)),x=n.category?n.category:null,w=n.tag?n.tag:null;return(0,a.useEffect)((()=>{(w||x)&&(b(!1),p(!1))}),[]),a.createElement(s,null,a.createElement("div",{className:"explain-1"},a.createElement("div",{className:"cards"},a.createElement("a",{href:"https://discuss.layer5.io/"},a.createElement("div",{className:"card"},a.createElement("h2",null,"Join the Conversation"),a.createElement("p",null,"On our Discussion Forum"),a.createElement(l.S,{imgClassName:"logo",alt:"Discuss",src:"../../../assets/images/discuss/layer5-discuss-white.webp",__imageData:t(48571)}))))),a.createElement("div",{className:"sidebar-widgets catagorie"},a.createElement("div",{className:"widgets-title",onClick:()=>b((e=>!e))},a.createElement("h3",null,"Categories"),f?a.createElement(d.l,{className:"menu-icon"}):a.createElement(m.k,{className:"menu-icon"})),a.createElement("ul",{className:f?"scroll":"ul-close"},h&&h.map((e=>a.createElement("li",{key:e.fieldValue},a.createElement(r.Link,{to:"/blog/category/"+o()(e.fieldValue),activeStyle:{color:"#00b39f"}},a.createElement("span",null,e.fieldValue),a.createElement("em",null,"(",e.totalCount,")"))))))),a.createElement("div",{className:"sidebar-widgets tags"},a.createElement("div",{className:"widgets-title",onClick:()=>p((e=>!e))},a.createElement("h3",null,"Tags"),u?a.createElement(d.l,{className:"menu-icon"}):a.createElement(m.k,{className:"menu-icon"})),a.createElement("ul",{className:u?"scroll":"ul-close"},g&&g.map((e=>a.createElement("li",{key:e.fieldValue},a.createElement(r.Link,{to:"/blog/tag/"+o()(e.fieldValue),activeStyle:{background:"#00b39f",color:"#ffffff"}},e.fieldValue," (",e.totalCount,")")))))),a.createElement("div",{className:"explain-1"},a.createElement("div",{className:"cards"},a.createElement("a",{href:"https://layer5.io/community/adventures-of-five-and-friends"},a.createElement("div",{className:"card"},a.createElement("h2",null,"See the Adventures of Five and Friends"),a.createElement(l.S,{alt:"layer5 five and friends adventures",src:"../../../assets/images/blog/five-and-friends.png",__imageData:t(60650)}))))),a.createElement("div",{className:"subscribe"},a.createElement("form",{name:"contactform",method:"post",action:"https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&id=6bb65defeb"},a.createElement("div",null,a.createElement("span",null,a.createElement("h4",null,"Subscribe to our Newsletter")),a.createElement("input",{className:"inputrow subscribe-email",type:"email",placeholder:"Email Address",name:"EMAIL",id:"mce-EMAIL",required:!0,onInvalid:e=>e.target.setCustomValidity("Please fill-in this field"),onInput:e=>e.target.setCustomValidity("")}),a.createElement(c.default,{secondary:!0,title:"Subscribe","aria-label":"subscribe-us",id:"mc-embedded-subscribe"})))))}},34945:function(e,n,t){"use strict";var a=t(67294),r=t(75290);n.Z=e=>{let{postsPerPage:n,totalPosts:t,paginate:i,currentPage:o}=e;const l=[];for(let a=1;a<=Math.ceil(t/n);a++)l.push(a);return a.createElement(r.b,null,a.createElement("div",{className:"btn-container"},l.map((e=>a.createElement("button",{key:e,onClick:()=>i(e),className:e===o?"btn active-btn":"btn page-btn"},e)))))}},75290:function(e,n,t){"use strict";t.d(n,{b:function(){return a}});const a=t(85313).default.div.withConfig({displayName:"resourceGridstyle__ResourcePageWrapper",componentId:"sc-1lywy28-0"})(["\n\n    .resource-grid-wrapper{\n        margin: 0.8rem 0 1.5rem 1.5rem;\n    }\n\n    .search{\n        display:flex;\n        justify-content:flex-end;\n        width:100%;\n        \n        margin-bottom: 0.8rem;\n        .searchBox{\n            flex:0 0 50%;\n            @media only screen and (max-width:990px){\n                \n                    flex:0 0 100%;\n                    max-width:100%;\n                \n            }\n        }\n        \n    }\n    .post-content-block{\n        height: 7rem;\n    }\n    .post-thumb-block{\n        height: 10.5rem;\n    }\n    .post-meta-block{\n        p{\n            margin:0;\n        }\n    }\n    .btn-container {\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        margin: 0 auto 2rem;\n      }\n      .btn {\n        width: 2rem;\n        height: 2rem;\n        border-radius: 5px;\n        cursor: pointer;\n        margin: 0.5rem;\n        transition: all 0.3s linear;\n        :hover {\n            box-shadow: 0px 1px 5px 1px rgba(0, 179, 159, 0.5);\n        }\n      }\n      .page-btn {\n        background: ",";\n        border: solid 2px;\n        border-color: ",";\n      }\n      .active-btn {\n        background: ",";\n        border-color: transparent;\n        color: #fff;\n      }  \n\n    @media only screen and (max-width: 575px) {\n        .resource-grid-wrapper{\n            margin: 0 auto 5rem;\n        }\n    }\n\n    .no-resources-page{\n    padding: 1rem 1rem 4rem;\n    margin: 1rem;\n    \n    box-shadow: 0px 3px 10px 1px rgba(0, 179, 159, 0.5);\n    .errorMessage {\n        font-size: 2rem;\n        line-height: 2rem;\n    }\n    .error-text{\n        margin-top: 5rem;\n    }\n    .errorSubtitle {      \n        font-weight: 400;       \n        font-size: 1.5rem;\n        color: gray;\n        font-style: italic;\n        margin-top: 2.5rem;\n    }\n        img{\n            display: block;\n            margin:auto;\n            margin-top: 3.125rem;\n            width: 14rem;\n            @media only screen and (max-width:700px){\n                max-width: 100%;\n            }\n        }\n    }\n"],(e=>e.theme.white),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor))},60650:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAACxLAAAsSwGlPZapAAADU0lEQVQoz02QDUzUdRjH/y7TzWwlDF8aaxQBjS3sBZFKAiXUJIZNYEYZr6dl0pA6sxoSimiBjkUta6HZMm3K65EthKGBMVJQ2OENxBAT6+7of3cgd9z9/v/fpx29zO/23Z7nu2fP9/k+SoiiiPDZs4iaP0fGPBBAXGQoCcujSVwZT2LS8yx9Np6QJ2JY/Eg4QQsXEHjv3QQF3c+iJUEEB8xl2UKFrMdn8fba2WxKuQfloTl3iUfnz+XJxQtkTGgwG1KSeb3wHTLe2M7Wkn28VPAez2UX8MzGPOLTNrI6PY0Xc7eQnP8m8ckvsGzpw7ybFkJ/9TwGGhSUsID7RFTwImIjw2Vc3AoS0zJZV/ABmWWfk1t5hOzKw2QfOIrh4BFeK6vm1b2fkV/1DRn7v2Z5/i5CUncQnVvO+e9Xw9A8lKiIcLHi6VgSU9bLhNxC1u2sIKPiKFsOn8Z4vI3ik+3sbeikuuUCn7ZcpLT2HKV159l5spusQ53ElHQTuK2HVOMXlO17C2VlUpJ4OW8zm3cfkIZDdRSeaKek+Vcq2vr5qmuQpr4RLly30WkZoamrl4FbDjqGrZwZHMdkdlLV5iC9coDQ9GMsiTaibMoziP1V1dS2/yJN5uvUDoxRb/mDlmEbF8ccjLnc+PFjayt7Pv5opnZOeVDdPm4LidXhoaaxh+ScEh4Mi0DZVrhdnKqrp99slqN2ldEpH0POaa65prG5Bda/VCZdLn632+gdGQYJQtPQdA1/o+sa/VeG+LC8nFVJsSg5+QZhMpm4dvWqdE1MMK1LJoTOpNDxSlBVFZfqQHVP8ZtLBV1HlxL5L/2wj4/T0PwDxuJSlByDQXR0dCB8PukfELqO0CU+Xfcfw5jNxrhDZdrrxeWeQvfrdyzUNA23x8PozVv8dLYbpbCoSFgsFrxer3SoDjSf+Mf5P3enE8fkBLc9bqxOx/+6vINCCHw+Hzdu/omSmpYu3i/exZ6Kg7Kmto4bdvvMj1xeL15dh2kvmtuDarXSc+kyPqGhCw00bSa+n1LTZmKfaTuHEpO4RkQ8FUtg5GMyLD+LVc3HeaWvk4SzjaxtPcXuy13UWPqo+LmV9ce+ZM3pE3xy5RL1I4MYezr41tzLd41NbC3awYbMLP4GZUy/V58FwaoAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/5234020acc6742353373cb782dde248c/fffde/five-and-friends.png","srcSet":"/static/5234020acc6742353373cb782dde248c/7ff23/five-and-friends.png 301w,\\n/static/5234020acc6742353373cb782dde248c/a848a/five-and-friends.png 601w,\\n/static/5234020acc6742353373cb782dde248c/fffde/five-and-friends.png 1202w","sizes":"(min-width: 1202px) 1202px, 100vw"},"sources":[{"srcSet":"/static/5234020acc6742353373cb782dde248c/54019/five-and-friends.webp 301w,\\n/static/5234020acc6742353373cb782dde248c/7c46b/five-and-friends.webp 601w,\\n/static/5234020acc6742353373cb782dde248c/1bd75/five-and-friends.webp 1202w","type":"image/webp","sizes":"(min-width: 1202px) 1202px, 100vw"}]},"width":1202,"height":736}')},48571:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRr4AAABXRUJQVlA4WAoAAAAQAAAAEwAAAgAAQUxQSD0AAAAAGBoANUguVGZTZEdsTgAIEwsAAAAxNAB5c6VoZlOHaXJuARAwTVlAXhhqSmVbMjNmUxY9XmoBCAAAAQEBAFZQOCBaAAAAsAMAnQEqFAADAD7RVqNLqCSjIbAIAQAaCWUAygGK0t5yl6NQ/OAA/sJKGI1Ux9RtIzyHPaevOda4F9nXUzHt/EexMcZ3HKTYA+JZ+5xAyLP1Erl2UUtA3fAA"},"images":{"fallback":{"src":"/static/135ab088223821344c203360785c7f88/b54e4/layer5-discuss-white.webp","srcSet":"/static/135ab088223821344c203360785c7f88/1a28c/layer5-discuss-white.webp 497w,\\n/static/135ab088223821344c203360785c7f88/c8e14/layer5-discuss-white.webp 993w,\\n/static/135ab088223821344c203360785c7f88/b54e4/layer5-discuss-white.webp 1986w","sizes":"(min-width: 1986px) 1986px, 100vw"},"sources":[]},"width":1986,"height":284}')}}]);
//# sourceMappingURL=2fdffd40eddc20b0d55d77cf96b9c952a05f0d21-8a5474571c3716b0f592.js.map