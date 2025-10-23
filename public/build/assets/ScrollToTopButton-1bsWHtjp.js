import{r as t,j as r}from"./app-Bg4W3ZUi.js";import{c as l}from"./createLucideIcon-Ck_Nu63_.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],a=l("arrow-up",n);function d(){const[s,o]=t.useState(!1);t.useEffect(()=>{const e=()=>{window.scrollY>300?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return r.jsx("button",{onClick:i,className:`fixed bottom-8 right-8 p-3 rounded-full  shadow-lg bg-blue-600 text-white transition-transform duration-300 
                  hover:bg-blue-700 ${s?"scale-100":"scale-0"}`,"aria-label":"Subir al inicio",children:r.jsx(a,{className:"w-6 h-6"})})}export{d as S};
