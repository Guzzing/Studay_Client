import{j as M}from"./jsx-runtime-6eef64cc.js";import{a as E}from"./cn-ec56f76a.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const X={NSK:"font-nsk"},u={min:"rounded-none",middle:"rounded-[12px]",max:"rounded-full"},$={red600:"border border-red-600",blue500:"border border-blue-500"},r={white0:"bg-white-0",blue500:"bg-blue-500",blue700:"bg-blue-700"},o={SW:"w-[60px]",MW:"w-[124px]",LW:"w-[343px]",XLW:"w-[390px]",FULL:"w-full"},t={SH:"h-[43px]",MH:"h-[56px]",LH:"h-[60px]"},s={white0:"text-white-0",blue500:"text-blue-500",red600:"text-red-600"},v=({className:x,label:V,buttonType:a,fullWidth:n=!1,width:e="XLW",height:l="MH",...F})=>{const U=`
  outline-none
  ${a==="Floating"?`${u.max} ${n?"w-full":e?"w-[50px]":o[e]} ${l?"":t[l]} text-1xl ${s.white0} ${r.blue500}`:a==="Square"?`${u.min} ${n?"w-full":e?"w-[343px]":o[e]} ${l?"h-[56px]":t[l]} ${s.white0} ${r.blue500}`:a==="Plain-blue"?`${u.middle} ${n?"w-full":e?"w-[317px]":o[e]} ${l?"h-[43px]":t[l]} ${r.white0} ${s.blue500} ${$.blue500}`:a==="Plain-red"?`${u.middle} ${n?"w-full":e?"w-[317px]":o[e]} ${l?"h-[43px]":t[l]} ${r.white0} ${s.red600} ${$.red600}`:a==="Round-blue-500"?`${u.middle} ${n?"w-full":e?"w-[343px]":o[e]} ${l?"h-[56px]":t[l]} ${r.blue500} ${s.white0}`:a==="Round-blue-700"?`${u.middle} ${n?"w-full":e?"w-[343px]":o[e]} ${l?"h-[56px]":t[l]} ${r.blue700} ${s.white0}`:""}
  ${X.NSK}
  `;return M.jsx("button",{...F,className:E(U,x),children:V})};try{v.displayName="Button",v.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!0,type:{name:"enum",value:[{value:'"Plain-blue"'},{value:'"Plain-red"'},{value:'"Round-blue-500"'},{value:'"Round-blue-700"'},{value:'"Square"'},{value:'"Floating"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"blue500"'},{value:'"white0"'},{value:'"red600"'}]}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"blue500"'},{value:'"white0"'},{value:'"blue700"'}]}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"blue500"'},{value:'"red600"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"min"'},{value:'"middle"'},{value:'"max"'}]}},width:{defaultValue:{value:"XLW"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"SW"'},{value:'"MW"'},{value:'"LW"'},{value:'"XLW"'}]}},height:{defaultValue:{value:"MH"},description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"SH"'},{value:'"MH"'},{value:'"LH"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const K={title:"Components/Button",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},buttonType:{control:"select",options:["Plain-blue","Plain-red","Round-blue-500","Round-blue-700","Square","Floating"]},width:{control:"select",options:["SW","MW","LW","XLW"]}}},d={args:{label:"+",buttonType:"Floating"}},c={args:{label:"Plain",buttonType:"Plain-blue",fullWidth:!0,onClick:()=>alert("plain clicked!")}},i={args:{label:"Plain",buttonType:"Plain-red",onClick:()=>alert("plain clicked!")}},p={args:{label:"Round",buttonType:"Round-blue-500",onClick:()=>alert("round clicked!")}},m={args:{label:"Round",buttonType:"Round-blue-700",onClick:()=>alert("round clicked!")}},b={args:{label:"Square",buttonType:"Square",onClick:()=>alert("square clicked!")}};var f,B,R;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '+',
    buttonType: 'Floating'
  }
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var T,y,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Plain',
    buttonType: 'Plain-blue',
    fullWidth: true,
    onClick: () => alert('plain clicked!')
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var g,k,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Plain',
    buttonType: 'Plain-red',
    onClick: () => alert('plain clicked!')
  }
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var q,w,_;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Round',
    buttonType: 'Round-blue-500',
    onClick: () => alert('round clicked!')
  }
}`,...(_=(w=p.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var P,L,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Round',
    buttonType: 'Round-blue-700',
    onClick: () => alert('round clicked!')
  }
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var W,N,H;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Square',
    buttonType: 'Square',
    onClick: () => alert('square clicked!')
  }
}`,...(H=(N=b.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};const A=["FloatButton","PlainBlueButton","PlainRedButton","RoundBlue500Button","RoundBlue700Button","SquareButton"];export{d as FloatButton,c as PlainBlueButton,i as PlainRedButton,p as RoundBlue500Button,m as RoundBlue700Button,b as SquareButton,A as __namedExportsOrder,K as default};
//# sourceMappingURL=Button.stories-431f045c.js.map
