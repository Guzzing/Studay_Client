import{j as e}from"./jsx-runtime-6eef64cc.js";import{I as o}from"./Icon-591b1838.js";import{P as s}from"./Profile-dc77e1c1.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./ArrowDown-54d7f6d1.js";import"./LikeFilled-8c5d7500.js";const a=({isRegister:t=!1,scheduleType:n,mainTitle:j,subElement:v})=>e.jsx("div",{className:`${n==="profile"?"w-[360px] h-[88px]":n==="toggle"?t?"w-[345px] h-[142px] bg-white-0":"w-[345px] h-[142px] bg-gray-200":""} shadow-md pt-[16px] pb-[6px] px-[24px] rounded-[20px] font-nsk`,children:e.jsxs("div",{className:"relative w-full h-full flex-col",children:[e.jsxs("div",{className:"flex justify-between grow-4",children:[e.jsx("div",{className:"subHead-18",children:j}),e.jsxs("div",{className:"flex cursor-pointer text-black-800 items-center",children:[e.jsx(o,{icon:"Edit"}),e.jsx(o,{icon:"Close"})]})]}),e.jsxs("div",{className:"grow-6",children:[e.jsx("div",{className:`${n==="profile"?"flex":"caption-13-gray"} justify-start items-center body-14 py-[5px]`,children:v}),e.jsx("div",{className:"absolute bottom-[3px] right-0 flex justify-end",children:n==="profile"?e.jsxs(e.Fragment,{children:[e.jsx(s,{imageSize:"S"}),e.jsx(s,{imageSize:"S"}),e.jsx(s,{imageSize:"S"})]}):e.jsx("div",{className:`relative w-[42px] h-[20px] rounded-full ${t?"bg-blue-500":"bg-white-200"} cursor-pointer`,children:e.jsx("div",{className:`absolute ${t?"right-0 top-0 w-[20px] h-[20px] rounded-full border border-black-800 bg-white-200":"left-0 top-0 w-[20px] h-[20px] rounded-full border border-black-800 bg-white-200"}`})})})]})]})});try{a.displayName="ScheduleBox",a.__docgenInfo={description:"",displayName:"ScheduleBox",props:{scheduleType:{defaultValue:null,description:"",name:"scheduleType",required:!0,type:{name:"enum",value:[{value:'"toggle"'},{value:'"profile"'}]}},mainTitle:{defaultValue:null,description:"",name:"mainTitle",required:!0,type:{name:"string"}},subElement:{defaultValue:null,description:"",name:"subElement",required:!0,type:{name:"ReactNode"}},rightBottomElement:{defaultValue:null,description:"",name:"rightBottomElement",required:!1,type:{name:"ReactNode"}},isRegister:{defaultValue:{value:"false"},description:"",name:"isRegister",required:!1,type:{name:"boolean"}},cntOfChild:{defaultValue:null,description:"",name:"cntOfChild",required:!1,type:{name:"number"}}}}}catch{}const S={component:a,tags:["autodocs"],title:"components/ScheduleBox",argTypes:{scheduleType:{control:"select",options:["profile","toggle"]},mainTitle:{control:"text"},subElement:{control:"text"},rightBottomElement:{control:"text"},isRegister:{control:"boolean"}}},r={args:{scheduleType:"profile",mainTitle:"mainTitle",subElement:e.jsxs(e.Fragment,{children:[e.jsx(o,{icon:"Time"}),e.jsx("p",{children:"오후 4시에 종료"})]}),rightBottomElement:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:"https://chanwookim.me/agumon-dday/agumon.png",alt:"image",className:"w-[28px] h-[28px] rounded-full"})}),e.jsx("div",{children:e.jsx("img",{src:"https://chanwookim.me/agumon-dday/agumon.png",alt:"image",className:"w-[28px] h-[28px] rounded-full mx-[3px]"})})]})}},i={args:{isRegister:!0,scheduleType:"toggle",mainTitle:"학원 이름",subElement:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("p",{children:"매주 월,화,수"})}),e.jsx("div",{children:"tkghl"})]}),rightBottomElement:e.jsx(e.Fragment,{children:e.jsx("div",{children:"btn"})})}},l={args:{scheduleType:"toggle",mainTitle:"학원 이름",subElement:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("p",{children:"매주 월,화,수"})}),e.jsx("div",{children:"tkghl"})]}),rightBottomElement:e.jsx(e.Fragment,{children:e.jsx("div",{children:"btn"})})}};var d,m,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    scheduleType: 'profile',
    mainTitle: 'mainTitle',
    subElement: <>
        <Icon icon={'Time'} />
        <p>{'오후 4시에 종료'}</p>
      </>,
    rightBottomElement: <>
        {/* 반복문 */}
        <div>
          <img src={'https://chanwookim.me/agumon-dday/agumon.png'} alt={'image'} className={'w-[28px] h-[28px] rounded-full'} />
        </div>
        <div>
          <img src={'https://chanwookim.me/agumon-dday/agumon.png'} alt={'image'} className={'w-[28px] h-[28px] rounded-full mx-[3px]'} />
        </div>
      </>
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isRegister: true,
    scheduleType: 'toggle',
    mainTitle: '학원 이름',
    subElement: <>
        <div>
          <p>{'매주 월,화,수'}</p>
        </div>
        <div>{'tkghl'}</div>
      </>,
    rightBottomElement: <>
        {/* 반복문 */}
        <div>{'btn'}</div>
      </>
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    scheduleType: 'toggle',
    mainTitle: '학원 이름',
    subElement: <>
        <div>
          <p>{'매주 월,화,수'}</p>
        </div>
        <div>{'tkghl'}</div>
      </>,
    rightBottomElement: <>
        <div>{'btn'}</div>
      </>
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const k=["ProfileScheduleBox","RegisteredScheduleBox","NotRegisteredScheduleBox"];export{l as NotRegisteredScheduleBox,r as ProfileScheduleBox,i as RegisteredScheduleBox,k as __namedExportsOrder,S as default};
//# sourceMappingURL=ScheduleBox.stories-d719f3ed.js.map
