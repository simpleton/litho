"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3454,4957,8723,8e3,5730],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>p});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){return function(n){var t=d(n.components);return a.createElement(e,r({},n,{components:t}))}},d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,v=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=v;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},58215:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var a=t(67294);const o=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},55064:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var a=t(87462),o=t(67294),r=t(72389),l=t(79443);const i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=t(83039),c=t(86010);const p="tabItem_1uMI";function d(e){var n,t,a,r=e.lazy,l=e.block,d=e.defaultValue,u=e.values,m=e.groupId,v=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:y.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,s.duplicates)(f,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),C=b.tabGroupChoices,x=b.setTabGroupChoices,k=(0,o.useState)(g),E=k[0],S=k[1],T=[],j=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=C[m];null!=N&&N!==E&&f.some((function(e){return e.value===N}))&&S(N)}var w=function(e){var n=e.currentTarget,t=T.indexOf(n),a=f[t].value;a!==E&&(j(n),S(a),null!=m&&x(m,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;t=T[o]||T[T.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":l},v)},f.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,c.default)("tabs__item",p,{"tabs__item--active":E===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:w,onClick:w},null!=t?t:n)}))),r?(0,o.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function u(e){var n=(0,r.default)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},82924:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t(67294).createContext(void 0)},85350:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(82924);const r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),r=t(24544),l=t(7694),i=t(13618),s="0.41.2",c="0.41.3-SNAPSHOT",p="0.9.0",d="0.46.0",u=t(85350);const m=function(e){var n=e.language,t=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,d).trim(),m=(0,u.Z)().isDarkTheme?i.Z:l.Z;return o.createElement(r.ZP,(0,a.Z)({},r.lG,{code:t,language:n,theme:m}),(function(e){var n=e.className,t=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return o.createElement("pre",{className:n,style:t},a.map((function(e,n){return o.createElement("div",r({line:e,key:n}),e.map((function(e,n){return o.createElement("span",l({token:e,key:n}))})))})))}))}},41748:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>d,toc:()=>u,default:()=>v});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),l=t(55064),i=t(58215),s=(t(75960),["components"]),c={id:"event-handling",title:"Event Handling"},p=void 0,d={unversionedId:"kotlin/event-handling",id:"kotlin/event-handling",isDocsHomePage:!1,title:"Event Handling",description:"There are three places where using Event Handlers changes in the Kotlin API:",source:"@site/../docs/kotlin/event-handling.mdx",sourceDirName:"kotlin",slug:"/kotlin/event-handling",permalink:"/docs/kotlin/event-handling",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/event-handling.mdx",tags:[],version:"current",frontMatter:{id:"event-handling",title:"Event Handling"}},u=[{value:"Supplying Event Handlers",id:"supplying-event-handlers",children:[{value:"Events in Common Props",id:"events-in-common-props",children:[],level:3},{value:"Custom Events in Specs",id:"custom-events-in-specs",children:[],level:3}],level:2},{value:"Accepting Event Handlers",id:"accepting-event-handlers",children:[],level:2}],m={toc:u};function v(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"There are three places where using Event Handlers changes in the Kotlin API:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Events in Common Props")," - ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickHandlers")," are being replaced by ",(0,r.mdx)("inlineCode",{parentName:"li"},"lambdas"),"."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Custom Events in Specs")," - accepts EventHandlers, where you should use either ",(0,r.mdx)("inlineCode",{parentName:"li"},"eventHandler"),"/",(0,r.mdx)("inlineCode",{parentName:"li"},"eventHandlerWithReturn"),"."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Accepting EventHandlers")," - custom ",(0,r.mdx)("inlineCode",{parentName:"li"},"Event")," classes are being replaced by ",(0,r.mdx)("inlineCode",{parentName:"li"},"lambdas")," passed as props.\n.")),(0,r.mdx)("h2",{id:"supplying-event-handlers"},"Supplying Event Handlers"),(0,r.mdx)("h3",{id:"events-in-common-props"},"Events in Common Props"),(0,r.mdx)("p",null,"Events that were exposed in common props in the Java Spec API (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"clickHandler"),") are now exposed on ",(0,r.mdx)("inlineCode",{parentName:"p"},"Style"),". Style properties accept ",(0,r.mdx)("a",{parentName:"p",href:"https://kotlinlang.org/docs/lambdas.html"},"lambdas")," instead of a reference to a generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler"),"."),(0,r.mdx)(l.default,{groupId:"event-handling",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/EventComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/EventComponent.kt",start:"start_example",end:"end_example"},'class EventComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    return Column(\n        style = Style.onClick { onClick() }.width(80.dp).height(80.dp).backgroundColor(YELLOW))\n  }\n}\n\nprivate fun onClick() {\n  Log.d("EventComponent", "click")\n}\n'))),(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/events/EventComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/events/EventComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class EventComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return Column.create(c)\n        .clickHandler(EventComponent.onClickEvent(c))\n        .widthDip(80)\n        .heightDip(80)\n        .backgroundColor(YELLOW)\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClickEvent(ComponentContext c) {\n    Log.d("EventComponentSpec", "click");\n  }\n}\n')))),(0,r.mdx)("h3",{id:"custom-events-in-specs"},"Custom Events in Specs"),(0,r.mdx)("p",null,"When using pre-existing Spec Components or Sections that accept custom events (such as RenderEvent in DataDiffSection), you'll still need to pass in an ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," for compatibility. You should use either ",(0,r.mdx)("inlineCode",{parentName:"p"},"eventHandler")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"eventHandlerWithReturn"),", depending on whether the code handling the event needs to return a value. Both of these functions accept a lambda, which is invoked when the event happens."),(0,r.mdx)(l.default,{groupId:"event-handling",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SectionComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/SectionComponent.kt",start:"start_example",end:"end_example"},"class SectionComponent(private val words: List<String>) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    return Column(style = Style.width(80.dp).height(80.dp)) {\n      child(\n          RecyclerCollectionComponent(\n              section =\n                  DataDiffSection.create<String>(SectionContext(context))\n                      .data(words)\n                      .renderEventHandler(eventHandlerWithReturn { event -> onRender(event) })\n                      .build()))\n    }\n  }\n\n  private fun ResourcesScope.onRender(event: RenderEvent<String>): RenderInfo {\n    return ComponentRenderInfo.create().component(Text(text = event.model)).build()\n  }\n}\n"))),(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/events/SectionComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/events/SectionComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\nclass SectionComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop List<String> words) {\n    return Column.create(c)\n        .widthDip(80)\n        .heightDip(80)\n        .child(\n            RecyclerCollectionComponent.create(c)\n                .section(\n                    DataDiffSection.<String>create(new SectionContext(c))\n                        .data(words)\n                        .renderEventHandler(SectionComponent.onRender(c))))\n        .build();\n  }\n\n  @OnEvent(RenderEvent.class)\n  static RenderInfo onRender(ComponentContext context, @FromEvent String model) {\n    return ComponentRenderInfo.create().component(Text.create(context).text(model)).build();\n  }\n}\n")))),(0,r.mdx)("h2",{id:"accepting-event-handlers"},"Accepting Event Handlers"),(0,r.mdx)("p",null,"In the Java Spec API, you could declare your Spec accepted custom event handlers by creating an Event class, and then either providing a value to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events")," param in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@LayoutSpec")," annotation, or accept an ",(0,r.mdx)("inlineCode",{parentName:"p"},"EventHandler")," as a prop, as detailed in the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/codegen/events-for-specs"},"Events for Specs")," page. In the Kotlin API, you can simply accept a lambda as a prop to be invoked when the event happens:"),(0,r.mdx)(l.default,{groupId:"event-handling",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ClickEventComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/ClickEventComponent.kt",start:"start_example",end:"end_example"},'class ClickEventComponent(\n    private val onButtonClicked: ((String) -> Unit),\n) : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    return Column {\n      child(Text(text = "OK", style = Style.onClick { onButtonClicked("OK clicked") }))\n      child(Text(text = "Cancel", style = Style.onClick { onButtonClicked("Cancel clicked") }))\n    }\n  }\n}\n'))),(0,r.mdx)(i.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/java/events/ClickEventComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/java/events/ClickEventComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec(events = {ClickTextEvent.class})\nclass ClickEventComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return Column.create(c)\n        .child(Text.create(c).text("OK").clickHandler(ClickEventComponent.onButtonClick(c, "OK")))\n        .child(\n            Text.create(c)\n                .text("Cancel")\n                .clickHandler(ClickEventComponent.onButtonClick(c, "Cancel")))\n        .build();\n  }\n\n  @OnEvent(ClickEvent.class)\n  protected static void onButtonClick(ComponentContext c, @Param String text) {\n    EventHandler handler = ClickEventComponent.getClickTextEventHandler(c);\n    if (handler != null) {\n      ClickEventComponent.dispatchClickTextEvent(handler, text);\n    }\n  }\n}\n')))))}v.isMDXComponent=!0},24544:(e,n,t)=>{t.d(n,{ZP:()=>v,lG:()=>l});var a=t(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var r=t(67294),l={Prism:a.default,theme:o};function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,n){var t=e.length;return t>0&&e[t-1]===n?e:e.concat(n)},u=function(e,n){var t=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,t){var a=t.languages,o=t.style;return a&&!a.includes(n)||t.types.forEach((function(n){var t=s({},e[n],o);e[n]=t})),e}),a);return o.root=t,o.plain=s({},t,{backgroundColor:null}),o};function m(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}const v=function(e){function n(){for(var n=this,t=[],a=arguments.length;a--;)t[a]=arguments[a];e.apply(this,t),i(this,"getThemeDict",(function(e){if(void 0!==n.themeDict&&e.theme===n.prevTheme&&e.language===n.prevLanguage)return n.themeDict;n.prevTheme=e.theme,n.prevLanguage=e.language;var t=e.theme?u(e.theme,e.language):void 0;return n.themeDict=t})),i(this,"getLineProps",(function(e){var t=e.key,a=e.className,o=e.style,r=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=n.getThemeDict(n.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?s({},r.style,o):o),void 0!==t&&(r.key=t),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var t=e.types,a=e.empty,o=t.length,r=n.getThemeDict(n.props);if(void 0!==r){if(1===o&&"plain"===t[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[t[0]];var l=a?{display:"inline-block"}:{},i=t.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var t=e.key,a=e.className,o=e.style,r=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:n.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?s({},l.style,o):o),void 0!==t&&(l.key=t),a&&(l.className+=" "+a),l})),i(this,"tokenize",(function(e,n,t,a){var o={code:n,grammar:t,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){var e=this.props,n=e.Prism,t=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=n.languages[t];return o({tokens:function(e){for(var n=[[]],t=[e],a=[0],o=[e.length],r=0,l=0,i=[],s=[i];l>-1;){for(;(r=a[l]++)<o[l];){var u=void 0,m=n[l],v=t[l][r];if("string"==typeof v?(m=l>0?m:["plain"],u=v):(m=d(m,v.type),v.alias&&(m=d(m,v.alias)),u=v.content),"string"==typeof u){var y=u.split(c),f=y.length;i.push({types:m,content:y[0]});for(var h=1;h<f;h++)p(i),s.push(i=[]),i.push({types:m,content:y[h]})}else l++,n.push(m),t.push(u),a.push(0),o.push(u.length)}l--,n.pop(),t.pop(),a.pop(),o.pop()}return p(i),s}(void 0!==l?this.tokenize(n,a,l,t):[a]),className:"prism-code language-"+t,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},n}(r.Component)},13618:(e,n,t)=>{t.d(n,{Z:()=>a});const a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,n,t)=>{t.d(n,{Z:()=>a});const a={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);