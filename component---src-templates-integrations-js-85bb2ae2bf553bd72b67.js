(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1327,1554],{2445:function(t,e,n){var r=n(15301).w_;t.exports.Z=function(t){return r({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(t)}},98940:function(t,e,n){const r=n(25517);t.exports={MDXRenderer:r}},25517:function(t,e,n){var r=n(861),i=n(3515),a=n(38416),o=n(70215);const l=["scope","children"];function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}const m=n(67294),{mdx:d}=n(64983),{useMDXScope:p}=n(18167);t.exports=function(t){let{scope:e,children:n}=t,a=o(t,l);const c=p(e),u=m.useMemo((()=>{if(!n)return null;const t=s({React:m,mdx:d},c),e=Object.keys(t),a=e.map((e=>t[e]));return i(Function,["_fn"].concat(e,[""+n])).apply(void 0,[{}].concat(r(a)))}),[n,e]);return m.createElement(u,s({},a))}},25679:function(t,e,n){"use strict";var r=n(45987),i=n(67294),a=n(93723);const o=["childImageSharp","extension","publicURL","alt"];e.Z=t=>{let{childImageSharp:e,extension:n,publicURL:l,alt:c}=t,s=(0,r.Z)(t,o);return e||"svg"!==n?i.createElement(a.G,Object.assign({key:l,image:e.gatsbyImageData},s,{alt:c})):i.createElement("div",{className:"old-gatsby-image-wrapper"},i.createElement("img",{src:l,alt:c}))}},17596:function(t,e,n){"use strict";n.d(e,{$o:function(){return l},gv:function(){return a},lp:function(){return c},nH:function(){return o}});var r=n(85313),i=n(48538);const a=r.default.div.withConfig({displayName:"Integrationstyle__HoneycombGrid",componentId:"sc-ju97f9-0"})(["\n  .heading {\n    text-align: center;\n\n    h1 {\n      line-height: 3.75rem;\n    }\n\n    h2 {\n      font-weight: normal;\n    }\n  }\n\n  .category {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2.5625rem 1.2rem;\n    gap: 0.625rem;\n    justify-content: center;\n  }\n\n  .items {\n    background-color: #f0f0f0;\n    padding: 0.625rem 1.5625rem;\n    border-radius: 0.625rem;\n    text-transform: uppercase;\n    color: #1e2117;\n    font-size: 0.875rem;\n    cursor: pointer;\n    transition: all .1s ease-in-out;\n\n    &:hover {\n      opacity: 0.8;\n      box-shadow: 0px 0px 6px -2px rgb(60, 73, 79);\n}\n  }\n\n  .selected {\n    background-color: ",";\n    color: ",";\n  }\n\n  ul {\n    margin: 2.5rem 0 0 0;\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .container-active,\n  .container-inactive {\n    -webkit-transform: translateZ(0);\n    display: flex;\n    height: 100%;\n    background: ",";\n    justify-content: center;\n    align-items: center;\n    padding: 0.625rem;\n    position: relative;\n    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\n    .integration-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100%;\n      overflow: hidden;\n      justify-content: center;\n      position: absolute;\n      img {\n        transition: all 1s cubic-bezier(1, 0.82, 0.165, 1);\n        opacity: 100%;\n      }\n      .integration-icon {\n        flex-shrink: 0;\n      }\n      .integration-content {\n        opacity: 0;\n        text-align: center;\n        align-items: center;\n        height: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        transition: all 1s linear;\n        opacity: 1;\n        overflow: hidden;\n        .title {\n          line-height: 1.375rem;\n          color: ",';\n          // margin-bottom: -2.7rem;\n          font-size: 0.675rem;\n          opacity: 0.2;\n          font-weight: 600;\n          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        }\n        .learnMoreBtn {\n          padding: 5px 10px;\n          color: white;\n          font-size: 0.875rem;\n          min-width: unset;\n          box-shadow: none;\n        }\n      }\n    }\n    :hover {\n      .integration-container {\n        img {\n          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n          height: 0%;\n          opacity: 0%;\n        }\n        .integration-content {\n          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n          opacity: 1;\n          height: 100%;\n          .title {\n            // margin-top: -50%;\n            font-size: 1.2rem;\n            opacity: 1;\n          }\n          .learnMoreBtn {\n            &:hover {\n              background-color: #009b8a;\n            }\n          }\n        }\n      }\n      background: #00d3a9;\n      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n      ::after {\n        content: "";\n        background: ',";\n        margin: 0px 0px 0 4px;\n        clip-path: polygon(\n          50% 0%,\n          100% 25%,\n          100% 75%,\n          50% 100%,\n          0% 75%,\n          0% 25%\n        );\n        height: 95%;\n        width: 95%;\n        position: absolute;\n        left: 0;\n        z-index: -1;\n      }\n    }\n  }\n"],(t=>t.theme.darkJungleGreenColor),(t=>t.theme.white),(t=>t.theme.radialToWhite),(t=>t.theme.whiteToBlack),(t=>t.theme.grey212121ToWhite)),o=r.default.div.withConfig({displayName:"Integrationstyle__IntegrationsWrapper",componentId:"sc-ju97f9-1"})(["\n  max-width: 75rem;\n  margin: 5.1875rem auto;\n  text-align: center;\n  .seeAllBtn {\n    &:hover {\n      color: white;\n    }\n  }\n"]),l=r.default.div.withConfig({displayName:"Integrationstyle__IntegrationCard",componentId:"sc-ju97f9-2"})(["\n  display: flex;\n  margin: 5rem 1rem;\n  gap: 5rem;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: center;\n  .container {\n    padding: 3.125rem;\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\n    border-radius: 0 3.125rem 3.125rem 3.125rem;\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n    flex-direction: column;\n    align-items: center;\n    flex: 0 1 auto;\n    max-width: 30rem;\n    border-width: 0px 1px 1px 0px;\n    border-style: solid;\n    border-color: #00d3a9;\n\n    p,\n    h2 {\n      text-align: center;\n    }\n  }\n\n  // . {\n  //   background-color: #00b39f;\n  //   color: white;\n  //   :hover {\n  //     color: black;\n  //   }\n  // }\n"]),c=(0,r.default)(i.Z).withConfig({displayName:"Integrationstyle__IntegrationSlider",componentId:"sc-ju97f9-3"})(["\n  .slick-prev:hover, .slick-next:hover{\n    box-shadow: none;\n    outline:none;\n  }\n\n  .slick-arrow {\n    width: 2rem;\n    height: 3rem;\n  }\n\n  .slick-list {\n    padding-top: 0.2rem;\n  }\n\n  .slick-disabled {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n\n  .slick-arrow:before {\n    color: ",';\n    font-size: 4rem;\n    display: inline-block;\n    height: 1rem;\n    -webkit-text-size-adjust: none;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  }\n\n  .slick-arrow:hover:before {\n    color: #00b39f;\n  }\n\n  .slick-slide {\n    width: auto !important;\n    margin: 0 .5rem;\n  }\n\n  .slick-next{\n    right: -2.5rem;\n  }\n\n  .slick-prev{\n    left: -2.5rem;\n  }\n\n  .slick-prev:before {\n    content:"‹";\n    line-height: 0;\n    opacity: 1;\n  }\n\n  .slick-track {\n    display: flex;\n  }\n\n  .slick-next:before {\n    content: "›";\n    line-height: 0;\n    opacity: 1;\n  }\n\n  .slick-prev, .slick-next {\n    top: 1.5rem;\n  }\n  '],(t=>t.theme.whiteToBlack))},21554:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(67294),i=n(71082),a=n(17596),o=n(91988),l=n(60580),c=n(44279);const s=n(85313).default.div.withConfig({displayName:"Honeycombstyle__HoneycombGrid",componentId:"sc-10xoxm9-0"})(["\n  display: flex;\n  text-align: left;\n  ul {\n    font-size: 0;\n    line-height: 0;\n    height: ",';\n    li {\n      width: 150px;\n      margin: 3px;\n      height: calc(150px * 1.1547);\n      display: inline-block;\n      font-size: initial;\n      margin-bottom: calc(3px - 150px * 0.2885);\n      filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 20px);\n    }\n\n    ::before {\n      content: "";\n      width: calc(150px / 2 + 3px);\n      float: left;\n      height: 100%;\n      shape-outside: repeating-linear-gradient(\n        #0000 0 calc(calc(1.732 * 150px + 4 * 3px - 1px) - 3px),\n        #000 0 calc(1.732 * 150px + 4 * 3px - 1px)\n      );\n    }\n  }\n'],(t=>0===t.height?"unset":"calc("+t.height+"px + 46px)")),m=t=>{const{items:e,renderItem:n}=t,{0:i,1:a}=(0,r.useState)(0),o=(0,r.useRef)(null),l=()=>{const t=o?o.current.offsetWidth:window.innerWidth;let n=Math.floor((t-100)/156),r=Math.floor((t-178)/156),i=Math.floor(e.length/(n+r));if(i*(n+r)<e.length){const t=e.length-i*(n+r);a(t<=n?272*i+130:272*i+272)}else!isNaN(i)&&a(272*i)};return(0,r.useEffect)((()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)})),[e]),r.createElement("div",null,r.createElement(s,{height:i},r.createElement("ul",{ref:o},e.map(((t,e)=>r.createElement("li",{key:e},n(t)))))))},d=t=>r.createElement("div",t,t.children);var p=n(89192);var u=t=>{let{category:e,count:n}=t;const s=(0,i.useStaticQuery)("961506260"),u={initialSlide:0,infinite:!1,slidesToShow:5.25,swipeToSlide:!0,slidesToScroll:1,responsive:[{breakpoint:900,settings:{initialSlide:0,infinite:!1,arrows:!0,slidesToShow:3}},{breakpoint:500,settings:{initialSlide:0,arrows:!0,infinite:!1,slidesToShow:1.5}}]},{0:g,1:h}=(0,r.useState)(""),{queryResults:f,searchData:x}=(0,o.Z)(s.allMdx.nodes,h,g,["frontmatter","title"],["frontmatter","title"]),{0:b,1:y}=(0,r.useState)([]),{0:w,1:v}=(0,r.useState)(!1),k=(0,r.useRef)(s.allMdx.nodes),{isDark:E}=(0,p.I)(),S=k.current.reduce(((t,e)=>(t.includes(e.frontmatter.category)||t.push(e.frontmatter.category),t)),[]),I=t=>k.current.reduce(((e,n)=>(n.frontmatter.category===t&&(e+=1),e)),0);let{0:M,1:N}=(0,r.useState)([{id:-1,name:"All",isSelected:!1,count:k.current.length},...S.map((t=>({id:t,name:t,isSelected:!1,count:I(t)})))]);(0,r.useEffect)((()=>A()),[]),(0,r.useEffect)((()=>{f&&y([...f]),0==g.length&&_()}),[f]);const _=()=>{let t=[...M];const n=null!=e?e:"All";t.forEach((t=>{t.name!=n?t.isSelected=!1:t.isSelected=!0})),N([...t]),z()},A=()=>{let t=[...M];void 0!==e?t.forEach((t=>{t.name===e&&(t.isSelected=!0)})):t[0].isSelected=!0,N([...t]),z()},j=t=>{let e=0,n=[...M],r=t.target.innerHTML.includes("&amp;")?t.target.innerHTML.replace("&amp;","&"):t.target.innerHTML;r=r.split("(")[0].trim(),"All"===r&&n.forEach((t=>{t.isSelected&"All"!=t.name&&(t.isSelected=!1)})),n.forEach((t=>{t.name==r&&(t.isSelected=!t.isSelected),t.isSelected&&"All"!=t.name&&e++})),n[0].isSelected=0===e,N([...n]),z()},z=()=>{if(M[0].isSelected)return void y([...s.allMdx.nodes]);let t=[];M.forEach((e=>{e.isSelected&&s.allMdx.nodes.forEach((n=>{n.frontmatter.category==e.name&&(t=[...t,n])}))})),y([...t])};return r.createElement(a.gv,null,r.createElement("section",{className:"heading"},r.createElement("h1",null,10*Math.ceil(s.allMdx.nodes.length/10),"+ Built-In Integrations"),r.createElement("h2",null,"Support for your Cloud Native Infrastructure and Apps")),r.createElement(l.Z,{searchQuery:g,searchData:x,hideFilter:w,setHideFilter:v,classnames:["integration-search"]}),r.createElement("section",{style:{margin:"0 2.6rem"}},r.createElement(a.lp,u,!w&&M.map((t=>r.createElement("p",{key:t.id,className:t.isSelected?"items selected":"items",onClick:j},t.name+" ("+t.count+")"))))),g.length>0&&f.length<1?r.createElement(c.Z,{errorMessage:"No matching integrations",errorSubtitle:"Try searching again."}):r.createElement(m,{items:"All"==n?b:b.slice(0,n),renderItem:t=>{const e="InProgress"===t.frontmatter.status,n=t.frontmatter.integrationIcon.publicURL,a=t.frontmatter.integrationIcon;return e?r.createElement(d,{className:"container-inactive",style:{background:"#A0AAAA"}},r.createElement("span",{className:"integration-container"},r.createElement("img",{className:"integration-icon",src:E&&null!==a?a.publicURL:n,alt:t.frontmatter.title,height:70,width:70,style:{filter:"brightness(0) invert(1)"},loading:"lazy"}),r.createElement("div",{className:"integration-content"},r.createElement("div",{className:"title",style:{marginBottom:0}},t.frontmatter.title)))):r.createElement(i.Link,{to:"/cloud-native-management/meshery"+t.fields.slug},r.createElement(d,{className:"container-active"},r.createElement("span",{className:"integration-container"},r.createElement("img",{className:"integration-icon",src:E&&null!==a?a.publicURL:n,alt:t.frontmatter.title,height:70,width:70,style:{filter:E&&null==a?"brightness(0) invert(1)":"none"},loading:"lazy"}),r.createElement("div",{className:"integration-content"},r.createElement("div",{className:"title"},t.frontmatter.title)))))}}))}},15816:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return k},default:function(){return v}});var r=n(67294),i=n(17875),a=n(2445),o=n(63689),l=n(98940),c=n(85313),s=n(93723),m=n(71082),d=n(37242);const p=c.default.section.withConfig({displayName:"cta-book__CTAWrapper",componentId:"sc-1pq89g-0"})(["\n  .book_cover {\n    display: flex;\n    margin: auto;\n    background: #00b39f;\n    .book_col {\n      max-height: 40rem;\n    }\n    .text {\n      padding: 5rem 5rem 5rem 13rem;\n      @media screen and (max-width: 1200px) {\n        padding: 5rem 5rem 5rem 10rem;\n      }\n      @media screen and (max-width: 950px) {\n        padding: 5rem;\n      }\n      @media screen and (max-width: 750px) {\n        padding: 2rem;\n      }\n      .cover {\n        border: 2px solid white;\n        width: 240px;\n        padding: 10px;\n        text-align: center;\n      }\n      h1,\n      p {\n        color: white;\n      }\n    }\n  }\n  .book_img {\n    text-align: center;\n    align-self: center;\n    .bookLink {\n    }\n    img {\n      max-height: 38rem;\n      vertical-align: middle;\n      @media screen and (max-width: 576px) {\n        max-height: 28rem;\n        margin: 1rem auto;\n      }\n    }\n  }\n\n\n"]);var u=()=>r.createElement(p,null,r.createElement(d.X2,{className:"book_cover"},r.createElement(d.JX,{xs:12,sm:6,className:"book_col text"},r.createElement("p",{className:"cover"},"Services-first Network"),r.createElement("h1",null,"What is a ",r.createElement("br",null)," Service Mesh?"),r.createElement("p",null,"Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology."),r.createElement(o.default,{primary:!0,className:"learn",title:"Learn More",url:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"})),r.createElement(d.JX,{xs:12,sm:6,className:"book_col book_img"},r.createElement(m.Link,{to:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition",className:"bookLink"},r.createElement(s.S,{src:"../../../../assets/images/learn/book-cover.webp",alt:"Book Image",layout:"constrained",__imageData:n(87391)}))))),g=n(25679),h=n(48538);const f=c.default.section.withConfig({displayName:"howItWork__HowIntegrationWorksWrapper",componentId:"sc-1rrncqv-0"})(["\n\n  background-color: ",";\n\tpadding-bottom: 2rem;\n\ttransition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\n\t.section-data {\n\t\tpadding: 1rem 2rem 0;\n\t\ttext-align: center;\n\t}\n\n\t.section-header {\n\t\tmargin-top: 2rem;\n\t\th4 {\n\t\t\ttextTransform: uppercase;\n\t\t}\n\t\tp {\n\t\t\tfont-size: 1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\tmargin: 1rem 0 0;\n\n\t\t\tspan {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n\t.integration-section {\n\t\tmargin: 3rem auto;\n\t\tmax-width: 85%;\n\n\t\t.integration-section-row {\n\t\t\tmargin: 4rem 0;\n\t\t\talign-items: center;\n\t\t}\n\t\th2, h4 {\n\t\t\t\tcolor: black;\n\t\t\t}\n\t\t.integration-section-data {\n\t\t\th1, h3, p {\n\t\t\t\ttext-align: start; color: ",";\n\t\t\t\ttransition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\t\t\t}\n\t\t}\n\n\t\t.integration-section-caraousel {\n\t\t\t.slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 50rem;\n\n\t\t\t\t\t.slick-slide {\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\tmax-height: 20rem;\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.slick-arrow{\n\t\t\t\t\tdisplay: none !important;\n\t\t\t\t}\n\n\t\t\t\t.slick-dots {\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 52rem;\n\t\t\t\t\twidth: 8rem;\n\n\t\t\t\t\tli {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: auto;\n\t\t\t\t\t\tmargin: 1rem auto;\n\t\t\t\t\t\topacity: 0.6;\n\n\t\t\t\t\t\ta {\n\t\t\t\t\t\t\tdisplay: block;\n\n\t\t\t\t\t\t\timg {\n\t\t\t\t\t\t\t\theight: 5rem;\n\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.slick-dots \n\t\t\t\t\tli.slick-active {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1600px) {\n\t\t.integration-section .integration-section-caraousel .slick-slider {\n\t\t\t.slick-list {\n\t\t\t\tmax-width: 38rem;\n\t\t\t}\n\n\t\t\t.slick-dots {\n\t\t\t\tleft: 40rem;\n\t\t\t\twidth: 6rem;\n\n\t\t\t\tli a img {\n\t\t\t\t\theight: 4rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1200px) {\n\t\tpadding-bottom: 2rem;\n\t\t.integration-section {\n\t\t\t.integration-section-row {\n\t\t\t\tmargin: 2.5rem 0;\n\t\t\t}\n\n\t\t\t.integration-section-data {\n\t\t\t\th3, p {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 80%;\n\t\t\t\t\tmargin: 2rem auto;\n\t\t\t\t}\n\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 92%;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 960px) {\n\t\t.integration-section .integration-section-caraousel .slick-slider .slick-list {\n\t\t\t.slick-slide {\n\t\t\t\timg {\n\t\t\t\t\tmax-height: 16rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 700px) {\n\t\t.integration-section {\n\t\t\tmax-width: 95%;\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 85%;\n\t\t\t\t\tmargin: 2rem 0;\n\t\t\t\t}\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 90%;\n\t\t\t\t\twidth: 4rem;\n\n\t\t\t\t\tli a img {\n\t\t\t\t\t\theight: 2.5rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 500px) {\n\t\t.integration-section {\n\t\t\tmax-width: 95%;\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 80%;\n\t\t\t\t\t.slick-slide {\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\tmax-height: 10rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 85%;\n\t\t\t\t\ttop: -1rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"],(t=>t.theme.grey101010ToGreyF7F7F7),(t=>t.theme.secondaryColor),(t=>t.theme.primaryColor));var x=t=>{let{name:e,howitworks:n,howitworksdetails:i,slides:a}=t;const o={customPaging:t=>r.createElement("a",null,r.createElement("img",{src:a[t].publicURL,alt:"Slide "+t})),infinite:!1,speed:400,slidesToShow:1,slidesToScroll:1,dots:!0,vertical:!0,verticalSwiping:!0};return r.createElement(f,null,r.createElement("div",{className:"section-data"},r.createElement("div",{className:"section-header"},r.createElement("h4",null,"How it Works"),r.createElement("h1",null,"See It in Action "),r.createElement("p",null,"Better together - ",e," with ",r.createElement("span",null,"Meshery"))),r.createElement("div",{className:"integration-section"},r.createElement(d.X2,{className:"integration-section-row"},r.createElement(d.JX,{xs:12,xl:4,className:"integration-section-data"},r.createElement("h3",null,null!=n?n:"Docker with Meshery"),r.createElement("p",null,null!=i?i:"The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes.")),r.createElement(d.JX,{xs:12,xl:8,className:"integration-section-caraousel"},r.createElement(h.Z,o,a.map(((t,e)=>r.createElement("div",{key:e},r.createElement("img",{src:t.publicURL,alt:"Slide "+(e+1)}))))))))))};const b=c.default.section.withConfig({displayName:"individual-integrationsstyle__IntegrationPageWrapper",componentId:"sc-1stceni-0"})(["\n\n\t.old-gatsby-image-wrapper img{\n\t\theight: 90px;\n\t}\n\t.herosection{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmargin: 0 auto;\n\t\tpadding: 1rem 2rem;\n\t\th2 {\n\t\t\tfont-size: 2.5rem;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.hero-header {\n\t\t\tcolor: #00B39F;\n\t\t}\n\t\timg {\n\t\t\tmargin-bottom: 0.5rem;\n\t\t}\n\t\tp {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.overview{\n\t\tdisplay: flex;\n\t\tmargin: 2rem;\n\t\tgap: 5rem;\n\t\tjustify-content: center;\n\t\tflex-basis: 70%;\n\t\t@media (max-width: 700px) {\n\t\t\tflex-direction: column-reverse;\n\t\t};\n\t}\n\n\t.feature{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tflex-basis: 30%;\n\t\th3 {\n\t\t\tpadding-bottom: 1rem;\n\t\t}\n\t\tul {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tli {\n\t\t\t\tlist-style-type: none;\n        margin: 2rem 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n        :before {\n\t\t\t\t\tcontent: url(",");\n\t\t\t\t\tmargin-right: 1rem;\n\t\t\t\t\theight: 2rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.content{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 0.5rem;\n\n\t\tp {\n\t\t\tline-height: 2rem;\n\t\t\ttext-align: justify;\n\t\t}\n\n\t\t.external-btns {\n\t\t\tdisplay: flex;\n\t\t\tgap: 2rem;\n\t\t\tflex-wrap: wrap;\n\n\t\t\t.get-started {\n\t\t\t}\n\n\t\t\t.doc-link {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 0.5rem;\n\t\t\t\talign-items: center;\n\t\t\t\ta {\n\t\t\t\t\tcolor: ",";\n\t\t\t\t\ttransition: padding 0.5s ease;\t\n                                }\n\t\t\t\ta:hover{\n\t\t\t\t\tpadding-right: 5px;\n\t\t\t\t}\n\t\t\t\tsvg {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 700px) {\n\t\t\twidth: 35rem;\n\t\t};\n\t}\n\n\t.integration-collection{\n\t\tmargin: 2rem auto;\n\t\tmax-width: 1200px;\n\t\t\n\t\th2{\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"],"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC41IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI1IiBmaWxsPSIjQzlGQ0Y2Ii8+CjxwYXRoIGQ9Ik0yMS4xMTk5IDEyLjY1OTdMMTQuMDc5OSAxOS42OTk3TDEwLjg3OTkgMTYuNDk5NyIgc3Ryb2tlPSIjMDBCMzlGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",(t=>t.theme.text));var y=n(21554);var w=t=>{let{data:e}=t;const{frontmatter:n,body:i}=e.mdx;return r.createElement(b,null,r.createElement("section",{className:"herosection"},r.createElement(g.Z,Object.assign({},n.integrationIcon,{alt:n.title})),r.createElement("h2",null,n.title," with "," ",r.createElement("span",{className:"hero-header"},"Meshery")),r.createElement("p",null,n.subtitle)),r.createElement("section",{className:"overview"},r.createElement("div",{className:"feature"},r.createElement("h2",null,"Features"),r.createElement("ul",null,n.featureList.map(((t,e)=>r.createElement("li",{key:e},t))))),r.createElement("div",{className:"content"},r.createElement("h2",null,"Overview"),r.createElement(l.MDXRenderer,null,i),r.createElement("section",{className:"external-btns"},r.createElement(o.default,{primary:!0,className:"get-started",title:"Get Started",url:"../../getting-started"}),null!=n.docURL&&r.createElement("span",{className:"doc-link"},r.createElement("a",{href:n.docURL},"See Documentation"),r.createElement(a.Z,null))))),r.createElement(x,{name:n.title,howitworks:n.howItWorks,howitworksdetails:n.howItWorksDetails,slides:n.workingSlides}),r.createElement("section",{className:"integration-collection"},r.createElement("h2",null,"Related Integrations"),r.createElement(y.default,{category:n.category})),r.createElement(u,null))};var v=t=>{let{data:e}=t;return r.createElement(r.Fragment,null,r.createElement(w,{data:e}))};const k=t=>{let{data:e}=t;return r.createElement(i.Z,{title:e.mdx.frontmatter.title,image:e.mdx.frontmatter.integrationIcon.publicURL,description:e.mdx.frontmatter.subtitle})}},73897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},63405:function(t,e,n){var r=n(73897);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3515:function(t,e,n){var r=n(6015),i=n(69617);function a(e,n,o){return i()?(t.exports=a=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=a=function(t,e,n){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return n&&r(a,n.prototype),a},t.exports.__esModule=!0,t.exports.default=t.exports),a.apply(null,arguments)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},38416:function(t,e,n){var r=n(64062);t.exports=function(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},69617:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},70215:function(t,e,n){var r=n(7071);t.exports=function(t,e){if(null==t)return{};var n,i,a=r(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a},t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){t.exports=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,n){var r=n(63405),i=n(79498),a=n(86116),o=n(42281);t.exports=function(t){return r(t)||i(t)||a(t)||o()},t.exports.__esModule=!0,t.exports.default=t.exports},95036:function(t,e,n){var r=n(18698).default;t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},64062:function(t,e,n){var r=n(18698).default,i=n(95036);t.exports=function(t){var e=i(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},86116:function(t,e,n){var r=n(73897);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},87391:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRuoAAABXRUJQVlA4IN4AAABwBQCdASoUABwAPtFaqU2oJSQiKAqpABoJYgDMaf/ngB3AuGMy2+9wxBm7s4EMye5DPwPwAP70tQAsqzvGJ5LdHqGPmyiF4Vlp/ruKicJT2oL+AKKqNXbDJtpMLDpH+KfKw7iY4JvYgk+sLffPlO3VBxBS6kNpwT+6+X7po+ji66I2KXTJaV6RmqvFeQsADa4pYA6NzpaezT87FXyQEC+o8ZjNL6fDXA9b2dygHXm7TiU4J2IbkPFO1Hr/+DJvv/lInrvef/yktTCwoVKn2d9yUl6Y6af7gn4G56tgAAA="},"images":{"fallback":{"src":"/static/74eafbb548c7d01c8ea59dc6b538ab74/bda54/book-cover.webp","srcSet":"/static/74eafbb548c7d01c8ea59dc6b538ab74/c4a45/book-cover.webp 224w,\\n/static/74eafbb548c7d01c8ea59dc6b538ab74/9a58b/book-cover.webp 449w,\\n/static/74eafbb548c7d01c8ea59dc6b538ab74/bda54/book-cover.webp 897w","sizes":"(min-width: 897px) 897px, 100vw"},"sources":[]},"width":897,"height":1273}')}}]);
//# sourceMappingURL=component---src-templates-integrations-js-85bb2ae2bf553bd72b67.js.map