(window["webpackJsonpfabric-todo"]=window["webpackJsonpfabric-todo"]||[]).push([[0],{65:function(e,t,a){e.exports=a(73)},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),i=(a(70),a(71),a(12)),o=a(100),u=a(97),s=a(108),d=Object(n.createContext)();function m(){var e=Object(n.useContext)(d),t=e.tasks,a=e.setTasks,c=Object(n.useState)(""),l=Object(i.a)(c,2),m=l[0],f=l[1],h=function(){var e={id:(t.length?t[t.length-1].id:0)+1,name:m,checked:!1};a(t.concat(e)),f("")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{horizontal:!0},r.a.createElement(s.a,{placeholder:"Add tasks",onChange:function(e){return f(e.target.value)},iconProps:{iconName:"TaskSolid"},className:"borderRadius0",value:m,onKeyPress:function(e){"Enter"===e.key&&h()}}),r.a.createElement(u.a,{text:"Add",iconProps:{iconName:"WaitlistConfirm"},className:"borderRadius0",onClick:h,ariaLabel:"addTask"})))}var f=a(103),h=a(57);function b(){var e=Object(n.useContext)(d),t=e.tasks,a=e.setFilter,c=t.length,l=t.filter((function(e){return!1===e.checked})).length,i=c-l;return r.a.createElement(f.a,{onLinkClick:function(e){var t=e.props.headerText;a(t)}},r.a.createElement(h.a,{headerText:"all",itemIcon:"AllApps",itemCount:c}),r.a.createElement(h.a,{headerText:"active",itemIcon:"Recent",itemCount:l}),r.a.createElement(h.a,{headerText:"completed",itemIcon:"Completed",itemCount:i}))}var k=a(58),E=a(38),v=a(99),O=a(60),g=Object(n.createContext)(),p=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],o=c[1];return r.a.createElement(g.Provider,{value:{editable:l,setEditable:o}},t)};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){var t=e.name,a=e.dataId,c=Object(n.useContext)(d),l=c.tasks,i=c.setTasks,u=Object(n.useContext)(g).setEditable,s=function(e){u(!1)};return r.a.createElement(o.a,{horizontal:!0,horizontalAlign:"space-between"},r.a.createElement(v.a,{value:t,onChange:function(e){var t=e.target,a=parseInt(t.getAttribute("data-id")),n=l.findIndex((function(e){return e.id===a})),r=l[n],c=Object(E.a)(l),o=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,{name:t.value});c[n]=o,i(c)},"data-id":a,onKeyPress:function(e){"Enter"===e.key&&s()}}),r.a.createElement(O.a,{text:"Save",onClick:s,"data-id":a}))}var y=a(107),P=a(109),x=function(e){var t=e.name,a=e.checked,c=e.id,l=(e.editable,Object(n.useContext)(d)),i=l.tasks,u=l.setTasks,s=Object(n.useContext)(g).setEditable;return r.a.createElement(o.a,{horizontal:!0,horizontalAlign:"space-between",verticalAlign:"center"},r.a.createElement(y.a,{label:t,onChange:function(e){var t=parseInt(e.target.id),a=i.findIndex((function(e){return e.id===t})),n=i[a],r=!n.checked;n.checked=r,i[a]=n;var c=Object(E.a)(i);u(c)},checked:a,id:c}),r.a.createElement(o.a,{horizontal:!0},r.a.createElement(P.a,{iconProps:{iconName:"Edit"},onClick:function(e){s(!0)},ariaLabel:"Edit","data-id":c}),r.a.createElement(P.a,{iconProps:{iconName:"Delete"},onClick:function(e){var t=parseInt(e.currentTarget.getAttribute("data-id")),a=i.filter((function(e){return e.id!==t}));u(a)},ariaLabel:"Delete","data-id":c})))};function T(e){var t=e.name,a=e.checked,c=e.id,l=Object(n.useContext)(g).editable;return r.a.createElement(r.a.Fragment,null,!l&&r.a.createElement(x,{name:t,checked:a,id:c,"data-id":c}),l&&r.a.createElement(C,{name:t,dataId:c}))}function A(){var e,t=Object(n.useContext)(d),a=t.tasks;switch(t.filter){case"all":e=a;break;case"active":e=a.filter((function(e){return!1===e.checked}));break;case"completed":e=a.filter((function(e){return!0===e.checked}));break;default:alert("error")}return r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(p,{key:e.id},r.a.createElement("li",{className:"todo-list__element"},r.a.createElement(T,{name:e.name,checked:e.checked,id:e.id})))})))}function L(){var e=Object(n.useContext)(d),t=e.tasks,a=e.setTasks,c=t.filter((function(e){return!1===e.checked}));return r.a.createElement(o.a,{horizontal:!0,horizontalAlign:"start",verticalAlign:"center",tokens:{childrenGap:"2%"}},r.a.createElement("p",null,c.length," items left"),r.a.createElement(O.a,{text:"Clear Completed",onClick:function(){var e=t.filter((function(e){return!1===e.checked}));a(e)}}))}var w=a(3),D=function(){var e=Object(n.useContext)(N).setVisiblePanel;return r.a.createElement(O.a,{text:"Theme",iconProps:{iconName:"Color"},onClick:function(){e(!0)}})},S=a(101),I=a(98),z=function(){var e=Object(n.useContext)(N),t=e.visiblePanel,a=e.setVisiblePanel,c=e.theme,l=e.setTheme;return r.a.createElement(S.a,{isOpen:t,closeButtonAriaLabel:"Close",isLightDismiss:!0,headerText:"Choose your theme",onDismiss:function(){a(!1)}},r.a.createElement(I.a,{columnCount:1,cellHeight:35,cellWidth:35,selectedId:c,cellShape:"square",colorCells:[{id:"green",label:"green",color:"#00783e"},{id:"dark",label:"dark",color:"#323130"}],onColorChanged:function(e,t){return l(e)}}))},N=Object(n.createContext)(),F=function(e){e.children;var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useContext)(d),u=o.theme,s=o.setTheme;return r.a.createElement(N.Provider,{value:{visiblePanel:c,setVisiblePanel:l,setTheme:s,theme:u}},r.a.createElement(D,null),r.a.createElement(z,null))},Q={palette:{themePrimary:"#00783e",themeLighterAlt:"#f0faf5",themeLighter:"#c4e9d7",themeLight:"#96d6b7",themeTertiary:"#46ae7b",themeSecondary:"#10884e",themeDarkAlt:"#006c38",themeDark:"#005b2f",themeDarker:"#004323",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#e0e0e0",neutralSecondary:"#c0c0c0",neutralPrimaryAlt:"#a3a3a3",neutralPrimary:"#979797",neutralDark:"#727272",black:"#545454",white:"#ffffff"}},R={palette:{themePrimary:"#00783e",themeLighterAlt:"#000502",themeLighter:"#00130a",themeLight:"#002413",themeTertiary:"#004825",themeSecondary:"#006936",themeDarkAlt:"#0d854b",themeDark:"#259860",themeDarker:"#4fb383",neutralLighterAlt:"#323130",neutralLighter:"#31302f",neutralLight:"#2f2e2d",neutralQuaternaryAlt:"#2c2b2a",neutralQuaternary:"#2a2928",neutralTertiaryAlt:"#282726",neutralTertiary:"#c8c8c8",neutralSecondary:"#d0d0d0",neutralPrimaryAlt:"#dadada",neutralPrimary:"#ffffff",neutralDark:"#f4f4f4",black:"#f8f8f8",white:"#999"}};var V=a(59);Object(V.a)(),l.a.render(r.a.createElement((function(e){var t=e.children,a=Object(n.useState)([]),c=Object(i.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)("all"),s=Object(i.a)(u,2),m=s[0],f=s[1],h=Object(n.useState)("green"),b=Object(i.a)(h,2),k=b[0],E=b[1];return r.a.createElement(d.Provider,{value:{tasks:l,setTasks:o,filter:m,setFilter:f,theme:k,setTheme:E}},t)}),null,r.a.createElement((function(){var e=Object(n.useContext)(d).theme;return Object(n.useEffect)((function(){var t="green"===e?Q:R;Object(w.v)(t)}),[e]),r.a.createElement("div",null,r.a.createElement("h1",null,"ToDos"),r.a.createElement(F,null),r.a.createElement(m,null),r.a.createElement(b,null),r.a.createElement(A,null),r.a.createElement(L,null))}),null)),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.1a53d9d5.chunk.js.map