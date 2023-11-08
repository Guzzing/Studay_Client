import{j as e}from"./jsx-runtime-6eef64cc.js";import{I as a}from"./Icon-591b1838.js";import{u as v}from"./index-a55e5995.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./ArrowDown-54d7f6d1.js";import"./LikeFilled-8c5d7500.js";const i=({headerType:s,pageTitle:c="pageTitle",backUrl:p="",onClick:d})=>{const r=v();return e.jsx("header",{className:"fixed left-[50%] z-50 top-0 translate-x-[-50%] w-[390px] h-[80px] bg-white-0 text-black-800 px-[22px] border-b-[1px] border-gray-100",children:e.jsx("div",{className:`w-full h-full ${s==="BackPush"||s==="Close"||s==="CloseWithTitle"?"flex items-center justify-start":"flex items-center justify-between"}`,children:s==="BackPush"?e.jsx("span",{onClick:()=>alert("뒤로가기"),children:e.jsx(a,{icon:"BackPush",classStyle:"cursor-pointer"})}):s==="Logo"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx(a,{icon:"Logo",classStyle:"w-[50px] cursor-pointer",onClick:()=>r("/")}),e.jsx("span",{className:"mx-[10px] font-nsk subHead-18",children:c})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"mx-[7px]",onClick:()=>alert("알림보기!"),children:e.jsx(a,{icon:"Alarm",classStyle:"cursor-pointer"})}),e.jsx("span",{onClick:()=>alert("사이드 바 열기"),children:e.jsx(a,{icon:"SideBar",classStyle:"cursor-pointer"})})]})]}):s==="Close"?e.jsx("span",{onClick:p.length>0?()=>r(p):()=>r(-1),children:e.jsx(a,{icon:"Close",classStyle:"cursor-pointer"})}):s==="CloseWithTitle"?e.jsxs("div",{className:"flex cursor-pointer items-center",children:[e.jsx("span",{onClick:d||(()=>r(-1)),children:e.jsx(a,{icon:"Close",classStyle:"cursor-pointer"})}),e.jsx("span",{className:"mx-[20px] font-nsk subHead-18",children:c})]}):""})})};try{i.displayName="Header",i.__docgenInfo={description:"",displayName:"Header",props:{headerType:{defaultValue:null,description:"",name:"headerType",required:!0,type:{name:"enum",value:[{value:'"BackPush"'},{value:'"Close"'},{value:'"Logo"'},{value:'"CloseWithTitle"'}]}},pageTitle:{defaultValue:{value:"pageTitle"},description:"",name:"pageTitle",required:!1,type:{name:"string"}},backUrl:{defaultValue:{value:""},description:"",name:"backUrl",required:!1,type:{name:"string"}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const W={title:"Component/Header",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headerType:{control:"select",options:["BackPush","Logo","Close","CloseWithTitle"]},pageTitle:{control:"text"},rightElement:{control:"text"}}},t={args:{headerType:"BackPush"}},o={args:{headerType:"Logo",pageTitle:"pageName",rightElement:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"mx-[6px]",children:"👏"}),e.jsx("span",{children:"👏"})]})}},l={args:{headerType:"Close"}},n={args:{headerType:"CloseWithTitle",pageTitle:"pageName"}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headerType: 'BackPush'
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    headerType: 'Logo',
    pageTitle: 'pageName',
    rightElement: <>
        <span className={'mx-[6px]'}>{'👏'}</span>
        <span>{'👏'}</span>
      </>
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,y,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    headerType: 'Close'
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var T,k,N;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    headerType: 'CloseWithTitle',
    pageTitle: 'pageName'
  }
}`,...(N=(k=n.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const w=["BackPushHeader","LogoHeader","CloseHeader","CloseWithTitleHeader"];export{t as BackPushHeader,l as CloseHeader,n as CloseWithTitleHeader,o as LogoHeader,w as __namedExportsOrder,W as default};
//# sourceMappingURL=Header.stories-0c147529.js.map
