import{j as i}from"./jsx-runtime-6eef64cc.js";import{r,a as x}from"./index-c013ead5.js";import{c as w,R as b}from"./index-a55e5995.js";import"./_commonjsHelpers-725317a4.js";/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const y="startTransition",u=x[y];function R(t){let{basename:h,children:d,future:f,window:S}=t,s=r.useRef();s.current==null&&(s.current=w({window:S,v5Compat:!0}));let e=s.current,[a,o]=r.useState({action:e.action,location:e.location}),{v7_startTransition:n}=f||{},c=r.useCallback(l=>{n&&u?u(()=>o(l)):o(l)},[o,n]);return r.useLayoutEffect(()=>e.listen(c),[e,c]),r.createElement(b,{basename:h,children:d,location:a.location,navigationType:a.action,navigator:e})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var p;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(p||(p={}));const T={iPhone13:{name:"iPhone 13",styles:{width:"390px",height:"844px"},type:"mobile"},tablet:{name:"iPad Pro 11",styles:{width:"834px",height:"1194px"},type:"tablet"}},j={parameters:{layout:"fullscreen",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},viewport:{viewports:T,defaultViewport:"iPhone13"}},decorators:[t=>i.jsx(R,{children:i.jsx("div",{children:i.jsx(t,{})})})]};export{j as default};
//# sourceMappingURL=preview-b0179f20.js.map
