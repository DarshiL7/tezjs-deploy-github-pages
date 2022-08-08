import{_ as x}from"./preload-helper.js";import{i as V,d as b,e as it,f as nt,g as rt,h as at,j as G,k as W,l as lt,m as ct,n as ht,p as F,q as ut,s as m,t as dt,u as pt,v as l,K as A,w as ft}from"./runtime-core.esm-bundler.js";const mt="http://www.w3.org/2000/svg",f=typeof document!="undefined"?document:null,I=f&&f.createElement("template"),gt={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,o)=>{const i=e?f.createElementNS(mt,t):f.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:t=>f.createTextNode(t),createComment:t=>f.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>f.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,s,o,i,n){const r=s?s.previousSibling:e.lastChild;if(i&&(i===n||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),s),!(i===n||!(i=i.nextSibling)););else{I.innerHTML=o?`<svg>${t}</svg>`:t;const a=I.content;if(o){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,s)}return[r?r.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}};function bt(t,e,s){const o=t._vtc;o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}function vt(t,e,s){const o=t.style,i=b(s);if(s&&!i){for(const n in s)k(o,n,s[n]);if(e&&!b(e))for(const n in e)s[n]==null&&k(o,n,"")}else{const n=o.display;i?e!==s&&(o.cssText=s):e&&t.removeAttribute("style"),"_vod"in t&&(o.display=n)}}const R=/\s*!important$/;function k(t,e,s){if(G(s))s.forEach(o=>k(t,e,o));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const o=wt(t,e);R.test(s)?t.setProperty(W(o),s.replace(R,""),"important"):t[o]=s}}const _=["Webkit","Moz","ms"],y={};function wt(t,e){const s=y[e];if(s)return s;let o=lt(e);if(o!=="filter"&&o in t)return y[e]=o;o=ct(o);for(let i=0;i<_.length;i++){const n=_[i]+o;if(n in t)return y[e]=n}return e}const O="http://www.w3.org/1999/xlink";function yt(t,e,s,o,i){if(o&&e.startsWith("xlink:"))s==null?t.removeAttributeNS(O,e.slice(6,e.length)):t.setAttributeNS(O,e,s);else{const n=ht(e);s==null||n&&!F(s)?t.removeAttribute(e):t.setAttribute(e,n?"":s)}}function St(t,e,s,o,i,n,r){if(e==="innerHTML"||e==="textContent"){o&&r(o,i,n),t[e]=s==null?"":s;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const c=s==null?"":s;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),s==null&&t.removeAttribute(e);return}let a=!1;if(s===""||s==null){const c=typeof t[e];c==="boolean"?s=F(s):s==null&&c==="string"?(s="",a=!0):c==="number"&&(s=0,a=!0)}try{t[e]=s}catch{}a&&t.removeAttribute(e)}const[J,kt]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(s&&Number(s[1])<=53)}return[t,e]})();let z=0;const zt=Promise.resolve(),Pt=()=>{z=0},Ct=()=>z||(zt.then(Pt),z=J());function xt(t,e,s,o){t.addEventListener(e,s,o)}function At(t,e,s,o){t.removeEventListener(e,s,o)}function Et(t,e,s,o,i=null){const n=t._vei||(t._vei={}),r=n[e];if(o&&r)r.value=o;else{const[a,c]=Nt(e);if(o){const ot=n[e]=Tt(o,i);xt(t,a,ot,c)}else r&&(At(t,a,r,c),n[e]=void 0)}}const L=/(?:Once|Passive|Capture)$/;function Nt(t){let e;if(L.test(t)){e={};let s;for(;s=t.match(L);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[W(t.slice(2)),e]}function Tt(t,e){const s=o=>{const i=o.timeStamp||J();(kt||i>=s.attached-1)&&ut(It(o,s.value),e,5,[o])};return s.value=t,s.attached=Ct(),s}function It(t,e){if(G(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(o=>i=>!i._stopped&&o&&o(i))}else return e}const $=/^on[a-z]/,Rt=(t,e,s,o,i=!1,n,r,a,c)=>{e==="class"?bt(t,o,i):e==="style"?vt(t,s,o):rt(e)?at(e)||Et(t,e,s,o,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_t(t,e,o,i))?St(t,e,o,n,r,a,c):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),yt(t,e,o,i))};function _t(t,e,s,o){return o?!!(e==="innerHTML"||e==="textContent"||e in t&&$.test(e)&&V(s)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$.test(e)&&b(s)?!1:e in t}const Ot=nt({patchProp:Rt},gt);let j;function Lt(){return j||(j=it(Ot))}const $t=(...t)=>{const e=Lt().createApp(...t),{mount:s}=e;return e.mount=o=>{const i=jt(o);if(!i)return;const n=e._component;!V(n)&&!n.render&&!n.template&&(n.template=i.innerHTML),i.innerHTML="";const r=s(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e};function jt(t){return b(t)?document.querySelector(t):t}function v(){var t="(googlebot/|Googlebot-Mobile|rogerbot|dotbot|SemrushBot|MJ12bot|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis|SemrushBot-SA|Screaming Frog SEO Spider)",e=new RegExp(t,"i");return typeof navigator=="undefined"?!1:e.test(navigator.userAgent)}const M=function(t){const e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))})},1)},E=typeof window!="undefined"&&window.requestIdleCallback||M;function K(){let t=!1;return typeof navigator!="undefined"&&function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|Ipad|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor),t}function Mt(t){let e=!1;const s=o=>{e||(e=!0,document.removeEventListener(t,s),Dt.config.afterInteration.funcs.forEach(i=>i()))};return s}function Ht(){return()=>{let t=K()?"touchstart":"mouseover";document.addEventListener(t,Mt(t),{passive:!0})}}function Bt(){v()||E(Ht(),{timeout:2e3})}const Dt=new class{constructor(){this.config={afterInteration:{eventSubscribed:!1,funcs:new Array}}}addAfterInteration(t){t.length>0&&!this.config.afterInteration.eventSubscribed&&(this.config.afterInteration.eventSubscribed=!0,Bt()),t.forEach(e=>this.config.afterInteration.funcs.push(e))}};function P(t,e={},s){for(const o in t){const i=t[o],n=s?`${s}:${o}`:o;typeof i=="object"&&i!==null?P(i,e,n):typeof i=="function"&&(e[n]=i)}return e}function qt(t,e){return t.reduce((s,o)=>s.then(()=>o.apply(void 0,e)),Promise.resolve(null))}function Ut(t,e){return Promise.all(t.map(s=>s.apply(void 0,e)))}class Vt{constructor(){this._hooks={},this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,s){if(!e||typeof s!="function")return()=>{};const o=e;let i;for(;this._deprecatedHooks[e];){const n=this._deprecatedHooks[e];typeof n=="string"?i={to:n}:i=n,e=i.to}return i&&(i.message?console.warn(i.message):console.warn(`${o} hook has been deprecated`+(i.to?`, please use ${i.to}`:""))),this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(s),()=>{s&&(this.removeHook(e,s),s=null)}}hookOnce(e,s){let o,i=(...n)=>(o(),o=null,i=null,s(...n));return o=this.hook(e,i),o}removeHook(e,s){if(this._hooks[e]){const o=this._hooks[e].indexOf(s);o!==-1&&this._hooks[e].splice(o,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,s){this._deprecatedHooks[e]=s}deprecateHooks(e){Object.assign(this._deprecatedHooks,e)}addHooks(e){const s=P(e),o=Object.keys(s).map(i=>this.hook(i,s[i]));return()=>{o.splice(0,o.length).forEach(i=>i())}}removeHooks(e){const s=P(e);for(const o in s)this.removeHook(o,s[o])}callHook(e,...s){return qt(this._hooks[e]||[],s)}callHookParallel(e,...s){return Ut(this._hooks[e]||[],s)}callHookWith(e,s,...o){return e(this._hooks[s]||[],o)}}function Gt(){return new Vt}const u=new class{constructor(){this.page={url:"",layoutName:"",masterPageSlots:{},slots:{}},this.hooks=Gt()}setActivePage(t){this.page.slots=t.slots,this.page.masterPageSlots=t.masterPageSlots,this.page.layoutName=t.layoutName,this.page.url=t.url,this.page.layoutComponent=t.layoutComponent,this.page.postScript=t.postScript,this.hooks.callHook("tez:activePageChanged",this.page),this.hooks.callHook("tez:layoutNameChanged",this.page.layoutName),this.hooks.callHook("tez:slotsChanged",{slots:this.page.slots,masterPageSlots:this.page.masterPageSlots}),this.hooks.callHook("tez:layoutComponentChanged",{component:this.page.layoutComponent})}updateActivePageSlots(){this.hooks.callHook("tez:slotsUpdated",{slots:this.page.slots})}};function X(t){var e=document.querySelectorAll("meta[data-head='tezjs']");e.forEach(n=>n.remove());var s=document.getElementsByTagName("title")[0],o=document.querySelector('link[rel="canonical"'),i=document.querySelector('script[type="application/ld+json"');i&&i.remove(),s?s.innerText=t.title:(s=document.createElement("title"),s.innerText=t.title,document.head.insertBefore(s,document.head.firstChild)),o?(o.rel="canonical",o.setAttribute("data-head","tezjs"),o.href=t.canonical):(o=document.createElement("link"),o.setAttribute("data-head","tezjs"),o.rel="canonical",o.href=t.canonical,document.head.insertBefore(o,document.head.firstChild)),t.metaTag&&Wt(t.metaTag,o),t.linkingData&&Jt(t.linkingData,o)}function Wt(t,e){["name","property"].forEach(s=>{t[s]&&Object.keys(t[s]).forEach(o=>Ft(s,o,t[s][o],e))})}function Ft(t,e,s,o){var i=document.createElement("meta");i.setAttribute("data-head","tezjs");const n=t==="name"?"name":"title";t!=="charset"?(i[n]=e,i.content=s):i.setAttribute(t,s),document.head.insertBefore(i,o)}function Jt(t,e){t.split("--").forEach(s=>{let o=document.createElement("script");o.setAttribute("data-head","tezjs"),o.type="application/ld+json",o.textContent=s.trim(),document.head.insertBefore(o,e)})}function w(){return window.location.pathname}function Kt(t){return t&&t.length>1&&t.substr(t.length-1,t.length)==="/"&&(t=t.substr(0,t.length-1)),t}function Xt(t){return t==="/"?"/index":t==="/index"?"/":Kt(t)}function p(t){const e=t||w();return Xt(e)}function Zt(){return document.getElementsByTagName("title")[0]!==void 0}const d=new class{constructor(){this.components={},this.masterPages={},this.pages={},this.isInitializationMode=!0}setComponents(t){Object.keys(t).forEach(e=>{this.components[e]||(this.components[e]=Object.freeze(t[e]))})}setMasterPage(t){t&&Object.keys(t).forEach(e=>{this.masterPages[e]||(this.masterPages[e]=Object.freeze(t[e]))})}setPage(t){if(t.payload){let e=t.payload.url||p();this.pages[e]?Object.keys(t.payload.slots).forEach(s=>{this.pages[e].slots[s]||(this.pages[e].slots[s]=[]),this.pages[e].slots&&this.pages[e].slots[s]&&t.payload.slots[s].forEach(o=>{let i=this.pages[e].slots[s].filter(n=>n.id===o.id)[0];i&&(i.data=o.data)})}):this.pages[e]={...t.payload,postScript:t.postScript},this.isInitializationMode&&(this.isInitializationMode=!1,this.refreshRoute(e))}!Zt()&&t.payload&&t.payload.isPage&&t.payload.tags&&X(t.payload.tags)}refreshRoute(t){let e=this.pages[t];u.setActivePage({layoutName:e.layoutName,slots:e.slots,masterPageSlots:e.masterPageSlots,url:e.url,postScript:e.postScript})}getPayload(t){let e=t||p();return this.pages[e]}isExits(t){let e=p(t);return this.pages[e]!==void 0}registerPage(t){this.setComponents(t.components),this.setMasterPage(t.masterPage),this.setPage(t)}},g=new class{constructor(){this.layoutVNode={},this.pageVnodes={}}cacheVNode(t,e){let s=p();return this.pageVnodes[s]||(this.pageVnodes[s]={}),this.pageVnodes[s][t]=e,e}getVNode(t){let e=p();if(!!this.pageVnodes[e])return this.pageVnodes[e][t]}};function Z(t){d.registerPage(t)}const N=m({data(){return{scrollFunction:null,isScrolled:!1,postScript:null,previousState:null,isInView:!1,lazyRef:null,observer:null,slots:{},masterPageSlots:{},components:new Array,nextIndex:0}},props:{slotName:{type:String,default:"default"},slotCategory:{type:String,default:"page"},preserveComponentState:{type:Boolean}},async mounted(){v()&&this.postScript?await this.postScript():this.subscribeScroll(),this.slots=u.page.slots,this.masterPageSlots=u.page.masterPageSlots,this.postScript=u.page.postScript,this.slotCategory!=="master"&&u.hooks.hook("tez:activePageChanged",t=>{this.slots=t.slots,this.masterPageSlots=t.masterPageSlots,this.postScript=t.postScript,this.components=new Array,this.nextIndex=0,this.goToNextComponent(!1),this.subscribeScroll()}),this.goToNextComponent(!0)},methods:{subscribeScroll(){this.scrollFunction=this.onScroll.bind(this),window.addEventListener("scroll",this.scrollFunction)},async onScroll(){this.isScrolled||(this.isScroll=!0,window.removeEventListener("scroll",this.scrollFunction),await this.loadPostScript(),this.isInView=!0,this.goToNextComponent())},getSlotComponents(t,e){return e==="master"?this.masterPageSlots[t]?this.masterPageSlots[t]:[]:this.slots[t]?this.slots[t]:[]},subscribeLazy(){this.$refs.divLazy&&(this.observer=new IntersectionObserver(async([{isIntersecting:t}])=>{this.isInView=t,t&&this.previousState!==t&&this.goToNextComponent(),this.previousState=t}),this.observer.observe(this.$refs.divLazy))},async goToNextComponent(t){if(!(!this.observer&&(this.subscribeLazy(),this.isInView=t,!this.isInView))&&this.isInView){let e=this.getSlotComponents(this.slotName,this.slotCategory);if(e.length>this.nextIndex&&!this.components[this.nextIndex]){let s=e[this.nextIndex],o=this.getComponentName(s);d.components[o]&&(this.components.push(s),this.nextIndex++,e[this.nextIndex]&&!e[this.nextIndex].data&&this.postScript&&this.loadPostScript(),v()?this.goToNextComponent():E(()=>this.goToNextComponent(),{timeout:0}))}}},loadPostScript(){if(this.postScript)return this.postScript().then(t=>{t.default(Z),this.postScript=null})},getComponentName(t){return K()&&t.mobileComponentName?t.mobileComponentName:t.name}},render(){let t=new Array;for(let e of this.components){let s=this.getComponentName(e),o=g.getVNode(e.id);o||(o=g.cacheVNode(e.id,l(d.components[s],{data:e.data}))),t.push(l(A,{key:`${w()}${e.itemName}`},o))}return this.lazyRef||(this.lazyRef=l("div",{ref:"divLazy",style:{height:"2px"}},"")),t.push(this.lazyRef),l("div",t)}}),Y=m({render(){return l(N)}});function Yt(t){return`/payload${t}`}async function Qt(t,e){const s=p(e),o=t||s.split("/").pop();return await(await fetch(Yt(`${s}/${o}.json`))).json()}const te=m({data(){return{items:[],lazyRef:null,observer:null,index:0,lastItem:null}},props:["sourcePath","currentPage","class"],watch:{currentPage(t){this.index!=t&&(this.index=t,this.loadJson())}},mounted(){this.subscribeLazy()},methods:{subscribeLazy(){this.$refs.divLazy&&(this.observer=new IntersectionObserver(async([{isIntersecting:t}])=>{t&&(this.index++,this.loadJson())}),this.observer.observe(this.$refs.divLazy))},async loadJson(){if(this.sourcePath&&(!this.lastItem||this.lastItem.totalCount>this.index*this.lastItem.items.length)){let t=await Qt(String(this.index),`/${this.sourcePath}`);t.items.forEach(e=>{this.items.push(e)}),this.lastItem=t}else this.observer&&this.observer.unobserve(this.$refs.divLazy)}},render(){var e;let t=new Array;return this.$slots&&this.$slots.default&&this.items&&this.items.length>0&&t.push(l("div",{class:this.class},(e=this.$slots)==null?void 0:e.default({items:this.items}))),this.lazyRef||(this.lazyRef=l("div",{ref:"divLazy"},"")),t.push(this.lazyRef),l("div",t)}}),Q=m({data(){return{state:{},vNode:l("div")}},render(){return this.activePageUrl&&this.activePageComponent&&!this.state[this.activePageUrl]?this.vNode=this.state[this.activePageUrl]=l(this.activePageComponent):this.state[this.activePageUrl]?this.vNode=this.state[this.activePageUrl]:this.vNode=l(N),l(l(A,null,this.vNode))}}),ee="a";function se(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}const oe=m({props:["to","class"],render(){let t=this.$slots.default?this.$slots.default():void 0;return l(ee,{onClick:e=>{se(e)&&this.$tezRouter.push(this.to)},href:this.to,class:this.class},t)}});function ie(){return typeof window!="undefined"?screen.width:0}const H="div",ne=m({data(){return{sourceItems:[],isInteractive:!1,observer:null,lazyRef:null,lastIndex:0,defaultCount:10}},props:["items","class","childClass","countSM","countMD","countLG","countXL","vNode","vChildNode"],computed:{pickCount:{get(){let t=this.defaultCount;const e=ie();return e>=1200?t=this.countXL||this.defaultCount:e>=992?t=this.countLG||this.defaultCount:e>=768?t=this.countMD||this.defaultCount:t=this.countSM||this.defaultCount,parseInt(t)},set(t){}}},watch:{items:function(t){this.bindNext()}},mounted(){this.subscribeLazy()},methods:{subscribeLazy(){this.$refs.divLazy&&(this.observer=new IntersectionObserver(async([{isIntersecting:t}])=>{this.isInteractive=t,t&&this.bindNext()}),this.observer.observe(this.$refs.divLazy))},bindNext(){if(this.isInteractive&&this.sourceItems.length<=this.items.length){let e=this.items.length,s=this.pickCount;e=this.items.length>this.lastIndex+s?this.lastIndex+s:this.lastIndex+(this.items.length-this.sourceItems.length);for(var t=this.lastIndex;t<e;t++){let o=this.items[t];this.sourceItems.push(o)}this.lastIndex=e}}},render(){let t=new Array;return this.$slots&&this.$slots.default&&this.sourceItems.forEach((e,s)=>{let o=this.$slots&&this.$slots.default?this.$slots.default({...e}):[];t.push(l(this.vChildNode||H,{class:this.childClass,key:s},o))}),this.sourceItems.length>0&&E(this.bindNext,{timeout:2e3}),this.lazyRef||(this.lazyRef=l("div",{ref:"divLazy"},"")),t.push(this.lazyRef),l(this.vNode||H,{class:this.class},t)}});function B(){return{left:window.pageXOffset,top:window.pageYOffset}}const re=(t,e)=>{const s="/",o=t.split(s),i=e.split(s);let n=o.length===i.length,r={};if(n)for(let a=0;a<o.length&&(/:/.test(o[a])?(r[o[a].replace(":","")]=i[a],n=!0):n=o[a].toLowerCase()===i[a].toLowerCase(),!!n);a++);return n&&{params:r}};function ae(t){let e={};if(h.tezAppOptions.dynamicRoutes){const s=Object.keys(h.tezAppOptions.dynamicRoutes);for(const o of s){const i=re(o,t);if(i){e.resolvePath=h.tezAppOptions.dynamicRoutes[o],e.params=i.params;break}}}return e}function T(){return window.localStorage.getItem("tzV")}function le(t){return h.tezAppOptions.isDevMode?`/tez/deps${t}/preload.js?v=${T()}`:`${t}/preload.js`}function ce(t){return h.tezAppOptions.isDevMode?`/tez/deps${t}/pre.js?v=${T()}`:`${t}/pre.js`}function he(){return h.tezAppOptions.isDevMode?`/tez/deps/dynamic-routes.js?v=${T()}`:"/assets/dynamic-routes.js"}const D=new Set;function tt(t,e){const s="/";return!e||e.length===0?t():Promise.all(e.map(o=>{if(o=`${s}${o}`,o in D)return;D[o]=!0;const i=o.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":"modulepreload",i||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),i)return new Promise((a,c)=>{r.addEventListener("load",a),r.addEventListener("error",c)})})).then(()=>t())}function ue(t){h.tezAppOptions.dynamicRoutes=t}const S="TEZ_DATA";function C(t){return e=>{e(Z,tt),t(!0)}}async function de(t){return et(h.tezAppOptions,t)}async function et(t,e){return new Promise((s,o)=>{let i=p(e);d.isExits(i)?s(!0):x(()=>import(le(i)),[]).then(n=>n.default).then(n=>{n(tt).then(r=>r.default).then(C(s))}).catch(st(i,s))})}async function pe(t,e){return new Promise((s,o)=>{let i=p(e);if(window[S]){C(s)(window[S]),delete window[S];return}d.isExits(i)?s(!0):x(()=>import(ce(i)),[]).then(n=>n.default).then(C(s)).catch(st(i,s))})}function fe(){return new Promise((t,e)=>{h.tezAppOptions.dynamicRoutes?t(!0):x(()=>import(he()),[]).then(s=>s.default).then(s=>{s(ue),t(!0)})})}function st(t,e){return s=>{fe().then(o=>{let i=h.tezAppOptions.dynamicRoutes;if(i&&Object.keys(i).length>0){let n=ae(t);n.resolvePath&&et(h.tezAppOptions,n.resolvePath).then(r=>{h.changeRouteValue({params:n.params}),e(!0)})}})}}const q=Object.assign;class me{constructor(){this.historyState={value:history.state},this.url=w(),this.currentUrl=this.url,this.historyState.value||this.changeRoute(this.url,{back:null,current:this.url,forward:null,position:history.length-1,replaced:!0,scroll:null},!0),window.addEventListener("popstate",({state:e})=>{this.historyState.value=e,this.changeRouteState(e&&e.current?e.current:w(),!0)})}push(e){this.changeRouteState(e)}changeRouteState(e,s=!1){this.resolve(e).then(o=>{if(this.refreshPageMetaTags(e),!s){const i=q({},this.historyState.value,history.state,{forward:e,scroll:B()});this.changeRoute(i.current,i,!0);const n=q({},this.createState({back:this.currentUrl,current:e,forward:null}),{position:i.position+1});this.changeRoute(e,n,!1)}this.currentUrl=e,d.refreshRoute(e),this.changeScrollPosition()})}resolve(e){return de(e)}refreshPageMetaTags(e){let s=d.getPayload(e);s&&s.tags&&X(s.tags)}changeRoute(e,s,o){history[o?"replaceState":"pushState"](s,"",e),this.historyState.value=s}changeScrollPosition(){"scrollBehavior"in document.documentElement.style?window.scrollTo({behavior:"smooth",top:0}):window.scrollTo(window.pageXOffset,0)}createState(e){return{back:e.back,current:e.current,forward:e.forward,replaced:e.replaced,position:window.history.length,scroll:B()}}}const h=new class{constructor(){this.tezAppOptions=void 0,this.currentRoute=dt({params:{}})}defineGlobalProps(t){t.config.globalProperties.$tezRouter=new me,Object.defineProperty(t.config.globalProperties,"$tezRoute",{enumerable:!0,get:()=>pt(this.currentRoute)})}changeRouteValue(t){this.currentRoute.value=t}},ge={mounted:function(){const t=this;t.$nextTick(function(){var e,s,o;(o=(s=(e=t.$parent)==null?void 0:e.$parent)==null?void 0:s.$parent)!=null&&o.tzTicked&&setTimeout(()=>{t.$parent.$parent.$parent.tzTicked()},10)})}},be=new class{constructor(){this.cachedImage={},this.resolveRequest={},this.imageRequestBroadcaster=void 0,window.location.hostname.indexOf("localhost")===-1&&(this.imageRequestBroadcaster=new Worker("/tz.js"),this.imageRequestBroadcaster.onmessage=t=>{this.resolveRequest[t.data.url]&&(this.cachedImage[t.data.url]=t.data.baseString,this.resolveRequest[t.data.url].forEach(e=>e(t.data.baseString)),delete this.resolveRequest[t.data.url])})}resolve(t){return new Promise((e,s)=>{this.cachedImage[t]?e(this.cachedImage[t]):(this.resolveRequest[t]?this.resolveRequest[t].push(e):this.resolveRequest[t]=[e],this.imageRequestBroadcaster.postMessage({url:t}))})}},ve={beforeMount:function(t,e,s,o){if(v())t.src=e.value;else{h.tezAppOptions.loaderImagePath&&(t.src=h.tezAppOptions.loaderImagePath);let i=new IntersectionObserver(function(n){n.forEach(r=>{r.isIntersecting&&(window.location.hostname.indexOf("localhost")===-1?be.resolve(e.value).then(a=>t.src=a):t.src=e.value,i.unobserve(t))})},{threshold:[.25]});i.observe(t),t.observer=i}}},we=new class{register(t){return{install(e){t.useVue&&t.useVue(e),h.defineGlobalProps(e),e.component("TezIndex",Y),e.component("TezSlot",N),e.component("TezLazy",te),e.component("TezPage",Q),e.component("TezLink",oe),e.component("TezIterator",ne),e.directive("tez-src",ve),e.mixin(ge)}}}},U="layout_tezpage",ye=m({data(){return{state:{},tezNode:l(Y),vNode:void 0,layoutName:void 0,layoutComponent:void 0}},mounted(){this.layoutName=u.page.layoutName,this.layoutComponent=u.page.layoutComponent,this.subscribeHooks()},methods:{subscribeHooks(){u.hooks.hook("tez:layoutNameChanged",t=>{this.layoutName=t}),u.hooks.hook("tez:layoutComponentChanged",t=>{this.layoutComponent=t})}},render(){let t,e=d.masterPages[this.layoutName];return typeof e=="function"&&(d.masterPages[this.layoutName]=e=ft(e)),e?e&&(g.layoutVNode[this.layoutName]=t=g.layoutVNode[this.layoutName]||l(e)):g.layoutVNode[U]=t=g.layoutVNode[U]||l(Q),l(l(A,null,t))}});function Se(t){h.tezAppOptions=t,pe().then(e=>$t(ye).use(we.register(t)).mount("#tez_app"))}Se({isDevMode:!1});
