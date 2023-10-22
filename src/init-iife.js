!function(){"use strict";var e=Object.defineProperty,n=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)},t=(e,t,r)=>(n(e,t,"read from private field"),r?r.call(e):t.get(e));function r(e,n=!1){return window.__TAURI_INTERNALS__.transformCallback(e,n)}((n,t)=>{for(var r in t)e(n,r,{get:t[r],enumerable:!0})})({},{Channel:()=>s,PluginListener:()=>a,addPluginListener:()=>o,convertFileSrc:()=>c,invoke:()=>l,transformCallback:()=>r});var i,s=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,((e,n,t)=>{if(n.has(e))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(e):n.set(e,t)})(this,i,(()=>{})),this.id=r((e=>{t(this,i).call(this,e)}))}set onmessage(e){var t,r,s,a;s=e,n(t=this,r=i,"write to private field"),a?a.call(t,s):r.set(t,s)}get onmessage(){return t(this,i)}toJSON(){return`__CHANNEL__:${this.id}`}};i=new WeakMap;var a=class{constructor(e,n,t){this.plugin=e,this.event=n,this.channelId=t}async unregister(){return l(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}};async function o(e,n,t){let r=new s;return r.onmessage=t,l(`plugin:${e}|register_listener`,{event:n,handler:r}).then((()=>new a(e,n,r.id)))}async function l(e,n={},t){return window.__TAURI_INTERNALS__.invoke(e,n,t)}function c(e,n="asset"){return window.__TAURI_INTERNALS__.convertFileSrc(e,n)}window.alert=function(e){l("plugin:dialog|message",{message:e.toString()})},window.confirm=function(e){return l("plugin:dialog|confirm",{message:e.toString()})}}();
