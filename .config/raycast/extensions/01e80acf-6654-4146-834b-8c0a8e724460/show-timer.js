var Sn=Object.create;var L=Object.defineProperty;var yn=Object.getOwnPropertyDescriptor;var gn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,wn=Object.prototype.hasOwnProperty;var ve=e=>L(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),bn=(e,t)=>{for(var r in t)L(e,r,{get:t[r],enumerable:!0})},Ee=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of gn(t))!wn.call(e,s)&&(r||s!=="default")&&L(e,s,{get:()=>t[s],enumerable:!(n=yn(t,s))||n.enumerable});return e},Ie=(e,t)=>Ee(ve(L(e!=null?Sn(xn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),vn=(e=>(t,r)=>e&&e.get(t)||(r=Ee(ve({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var Ae=c((gs,Ce)=>{Ce.exports=Ge;Ge.sync=In;var Te=require("fs");function En(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var s=r[n].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Pe(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:En(t,r)}function Ge(e,t,r){Te.stat(e,function(n,s){r(n,n?!1:Pe(s,e,t))})}function In(e,t){return Pe(Te.statSync(e),e,t)}});var _e=c((xs,Ne)=>{Ne.exports=Re;Re.sync=Tn;var Oe=require("fs");function Re(e,t,r){Oe.stat(e,function(n,s){r(n,n?!1:qe(s,t))})}function Tn(e,t){return qe(Oe.statSync(e),t)}function qe(e,t){return e.isFile()&&Pn(e,t)}function Pn(e,t){var r=e.mode,n=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,h=r&l||r&u&&s===i||r&a&&n===o||r&f&&o===0;return h}});var $e=c((bs,ke)=>{var ws=require("fs"),M;process.platform==="win32"||global.TESTING_WINDOWS?M=Ae():M=_e();ke.exports=Z;Z.sync=Gn;function Z(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,s){Z(e,t||{},function(o,i){o?s(o):n(i)})})}M(e,t||{},function(n,s){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,s=!1),r(n,s)})}function Gn(e,t){try{return M.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var De=c((vs,Ue)=>{var E=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Be=require("path"),Cn=E?";":":",Le=$e(),Me=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),je=(e,t)=>{let r=t.colon||Cn,n=e.match(/\//)||E&&e.match(/\\/)?[""]:[...E?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],s=E?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=E?s.split(r):[""];return E&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:n,pathExt:o,pathExtExe:s}},Fe=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:s,pathExtExe:o}=je(e,t),i=[],a=l=>new Promise((f,h)=>{if(l===n.length)return t.all&&i.length?f(i):h(Me(e));let m=n[l],S=/^".*"$/.test(m)?m.slice(1,-1):m,y=Be.join(S,e),g=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;f(u(g,l,0))}),u=(l,f,h)=>new Promise((m,S)=>{if(h===s.length)return m(a(f+1));let y=s[h];Le(l+y,{pathExt:o},(g,v)=>{if(!g&&v)if(t.all)i.push(l+y);else return m(l+y);return m(u(l,f,h+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},An=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:s}=je(e,t),o=[];for(let i=0;i<r.length;i++){let a=r[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=Be.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<n.length;h++){let m=f+n[h];try{if(Le.sync(m,{pathExt:s}))if(t.all)o.push(m);else return m}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Me(e)};Ue.exports=Fe;Fe.sync=An});var ee=c((Es,J)=>{"use strict";var Xe=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};J.exports=Xe;J.exports.default=Xe});var Ve=c((Is,We)=>{"use strict";var He=require("path"),On=De(),Rn=ee();function Ke(e,t){let r=e.options.env||process.env,n=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=On.sync(e.command,{path:r[Rn({env:r})],pathExt:t?He.delimiter:void 0})}catch{}finally{o&&process.chdir(n)}return i&&(i=He.resolve(s?e.options.cwd:"",i)),i}function qn(e){return Ke(e)||Ke(e,!0)}We.exports=qn});var ze=c((Ts,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function Nn(e){return e=e.replace(te,"^$1"),e}function _n(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=Nn;ne.exports.argument=_n});var Qe=c((Ps,Ye)=>{"use strict";Ye.exports=/^#!(.*)/});var Je=c((Gs,Ze)=>{"use strict";var kn=Qe();Ze.exports=(e="")=>{let t=e.match(kn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),s=r.split("/").pop();return s==="env"?n:n?`${s} ${n}`:s}});var tt=c((Cs,et)=>{"use strict";var re=require("fs"),$n=Je();function Bn(e){let t=150,r=Buffer.alloc(t),n;try{n=re.openSync(e,"r"),re.readSync(n,r,0,t,0),re.closeSync(n)}catch{}return $n(r.toString())}et.exports=Bn});var ot=c((As,st)=>{"use strict";var Ln=require("path"),nt=Ve(),rt=ze(),Mn=tt(),jn=process.platform==="win32",Fn=/\.(?:com|exe)$/i,Un=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Dn(e){e.file=nt(e);let t=e.file&&Mn(e.file);return t?(e.args.unshift(e.file),e.command=t,nt(e)):e.file}function Xn(e){if(!jn)return e;let t=Dn(e),r=!Fn.test(t);if(e.options.forceShell||r){let n=Un.test(t);e.command=Ln.normalize(e.command),e.command=rt.command(e.command),e.args=e.args.map(o=>rt.argument(o,n));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Hn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Xn(n)}st.exports=Hn});var ct=c((Os,at)=>{"use strict";var se=process.platform==="win32";function oe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Kn(e,t){if(!se)return;let r=e.emit;e.emit=function(n,s){if(n==="exit"){let o=it(s,t,"spawn");if(o)return r.call(e,"error",o)}return r.apply(e,arguments)}}function it(e,t){return se&&e===1&&!t.file?oe(t.original,"spawn"):null}function Wn(e,t){return se&&e===1&&!t.file?oe(t.original,"spawnSync"):null}at.exports={hookChildProcess:Kn,verifyENOENT:it,verifyENOENTSync:Wn,notFoundError:oe}});var dt=c((Rs,I)=>{"use strict";var ut=require("child_process"),ie=ot(),ae=ct();function lt(e,t,r){let n=ie(e,t,r),s=ut.spawn(n.command,n.args,n.options);return ae.hookChildProcess(s,n),s}function Vn(e,t,r){let n=ie(e,t,r),s=ut.spawnSync(n.command,n.args,n.options);return s.error=s.error||ae.verifyENOENTSync(s.status,n),s}I.exports=lt;I.exports.spawn=lt;I.exports.sync=Vn;I.exports._parse=ie;I.exports._enoent=ae});var pt=c((qs,ft)=>{"use strict";ft.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var St=c((Ns,q)=>{"use strict";var R=require("path"),mt=ee(),ht=e=>{e={cwd:process.cwd(),path:process.env[mt()],execPath:process.execPath,...e};let t,r=R.resolve(e.cwd),n=[];for(;t!==r;)n.push(R.join(r,"node_modules/.bin")),t=r,r=R.resolve(r,"..");let s=R.resolve(e.cwd,e.execPath,"..");return n.push(s),n.concat(e.path).join(R.delimiter)};q.exports=ht;q.exports.default=ht;q.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=mt({env:t});return e.path=t[r],t[r]=q.exports(e),t}});var gt=c((_s,ce)=>{"use strict";var yt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};ce.exports=yt;ce.exports.default=yt});var wt=c((ks,F)=>{"use strict";var zn=gt(),j=new WeakMap,xt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(j.set(o,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return r};return zn(o,e),j.set(o,n),o};F.exports=xt;F.exports.default=xt;F.exports.callCount=e=>{if(!j.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return j.get(e)}});var bt=c(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.SIGNALS=void 0;var Yn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];U.SIGNALS=Yn});var ue=c(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.SIGRTMAX=T.getRealtimeSignals=void 0;var Qn=function(){let e=Et-vt+1;return Array.from({length:e},Zn)};T.getRealtimeSignals=Qn;var Zn=function(e,t){return{name:`SIGRT${t+1}`,number:vt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},vt=34,Et=64;T.SIGRTMAX=Et});var It=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.getSignals=void 0;var Jn=require("os"),er=bt(),tr=ue(),nr=function(){let e=(0,tr.getRealtimeSignals)();return[...er.SIGNALS,...e].map(rr)};D.getSignals=nr;var rr=function({name:e,number:t,description:r,action:n,forced:s=!1,standard:o}){let{signals:{[e]:i}}=Jn.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:s,standard:o}}});var Pt=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.signalsByNumber=P.signalsByName=void 0;var sr=require("os"),Tt=It(),or=ue(),ir=function(){return(0,Tt.getSignals)().reduce(ar,{})},ar=function(e,{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:s,action:o,forced:i,standard:a}}},cr=ir();P.signalsByName=cr;var ur=function(){let e=(0,Tt.getSignals)(),t=or.SIGRTMAX+1,r=Array.from({length:t},(n,s)=>lr(s,e));return Object.assign({},...r)},lr=function(e,t){let r=dr(e,t);if(r===void 0)return{};let{name:n,description:s,supported:o,action:i,forced:a,standard:u}=r;return{[e]:{name:n,number:e,description:s,supported:o,action:i,forced:a,standard:u}}},dr=function(e,t){let r=t.find(({name:n})=>sr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},fr=ur();P.signalsByNumber=fr});var Ct=c((js,Gt)=>{"use strict";var{signalsByName:pr}=Pt(),mr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",hr=({stdout:e,stderr:t,all:r,error:n,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let m=s===void 0?void 0:pr[s].description,S=n&&n.code,g=`Command ${mr({timedOut:u,timeout:h,errorCode:S,signal:s,signalDescription:m,exitCode:o,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(n)==="[object Error]",$=v?`${g}
${n.message}`:g,B=[$,t,e].filter(Boolean).join(`
`);return v?(n.originalMessage=n.message,n.message=B):n=new Error(B),n.shortMessage=$,n.command=i,n.escapedCommand=a,n.exitCode=o,n.signal=s,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=l,n.killed=f&&!u,n};Gt.exports=hr});var Ot=c((Fs,le)=>{"use strict";var X=["stdin","stdout","stderr"],Sr=e=>X.some(t=>e[t]!==void 0),At=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(n=>e[n]);if(Sr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,X.length);return Array.from({length:r},(n,s)=>t[s])};le.exports=At;le.exports.node=e=>{let t=At(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Rt=c((Us,H)=>{H.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&H.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&H.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var $t=c((Ds,A)=>{var d=global.process,w=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};w(d)?(qt=require("assert"),G=Rt(),Nt=/^win/i.test(d.platform),N=require("events"),typeof N!="function"&&(N=N.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new N,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),A.exports=function(e,t){if(!!w(global.process)){qt.equal(typeof e,"function","a callback must be provided for exit handler"),C===!1&&de();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&K()};return p.on(r,e),n}},K=function(){!C||!w(global.process)||(C=!1,G.forEach(function(t){try{d.removeListener(t,W[t])}catch{}}),d.emit=V,d.reallyExit=fe,p.count-=1)},A.exports.unload=K,b=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},W={},G.forEach(function(e){W[e]=function(){if(!!w(global.process)){var r=d.listeners(e);r.length===p.count&&(K(),b("exit",null,e),b("afterexit",null,e),Nt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),A.exports.signals=function(){return G},C=!1,de=function(){C||!w(global.process)||(C=!0,p.count+=1,G=G.filter(function(t){try{return d.on(t,W[t]),!0}catch{return!1}}),d.emit=kt,d.reallyExit=_t)},A.exports.load=de,fe=d.reallyExit,_t=function(t){!w(global.process)||(d.exitCode=t||0,b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),fe.call(d,d.exitCode))},V=d.emit,kt=function(t,r){if(t==="exit"&&w(global.process)){r!==void 0&&(d.exitCode=r);var n=V.apply(this,arguments);return b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),n}else return V.apply(this,arguments)}):A.exports=function(){};var qt,G,Nt,N,p,K,b,W,C,de,fe,_t,V,kt});var Lt=c((Xs,Bt)=>{"use strict";var yr=require("os"),gr=$t(),xr=1e3*5,wr=(e,t="SIGTERM",r={})=>{let n=e(t);return br(e,t,r,n),n},br=(e,t,r,n)=>{if(!vr(t,r,n))return;let s=Ir(r),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},vr=(e,{forceKillAfterTimeout:t},r)=>Er(e)&&t!==!1&&r,Er=e=>e===yr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Ir=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return xr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Tr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Pr=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Gr=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let s,o=new Promise((a,u)=>{s=setTimeout(()=>{Pr(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Cr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Ar=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let s=gr(()=>{e.kill()});return n.finally(()=>{s()})};Bt.exports={spawnedKill:wr,spawnedCancel:Tr,setupTimeout:Gr,validateTimeout:Cr,setExitHandler:Ar}});var jt=c((Hs,Mt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Mt.exports=x});var Ut=c((Ks,Ft)=>{"use strict";var{PassThrough:Or}=require("stream");Ft.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",s=!1;t?s=!(r||n):r=r||"utf8",n&&(r=null);let o=new Or({objectMode:s});r&&o.setEncoding(r);let i=0,a=[];return o.on("data",u=>{a.push(u),s?i=a.length:i+=u.length}),o.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Dt=c((Ws,_)=>{"use strict";var{constants:Rr}=require("buffer"),qr=require("stream"),{promisify:Nr}=require("util"),_r=Ut(),kr=Nr(qr.pipeline),pe=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function me(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=_r(t);return await new Promise((s,o)=>{let i=a=>{a&&n.getBufferedLength()<=Rr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),o(a)};(async()=>{try{await kr(e,n),s()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new pe)})}),n.getBufferedValue()}_.exports=me;_.exports.buffer=(e,t)=>me(e,{...t,encoding:"buffer"});_.exports.array=(e,t)=>me(e,{...t,array:!0});_.exports.MaxBufferError=pe});var Ht=c((Vs,Xt)=>{"use strict";var{PassThrough:$r}=require("stream");Xt.exports=function(){var e=[],t=new $r({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(r),t;function r(o){return Array.isArray(o)?(o.forEach(r),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function n(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var zt=c((zs,Vt)=>{"use strict";var Kt=jt(),Wt=Dt(),Br=Ht(),Lr=(e,t)=>{t===void 0||e.stdin===void 0||(Kt(t)?t.pipe(e.stdin):e.stdin.end(t))},Mr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=Br();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},he=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},Se=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Wt(e,{encoding:t,maxBuffer:n}):Wt.buffer(e,{maxBuffer:n})},jr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:s,maxBuffer:o},i)=>{let a=Se(e,{encoding:n,buffer:s,maxBuffer:o}),u=Se(t,{encoding:n,buffer:s,maxBuffer:o}),l=Se(r,{encoding:n,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},he(e,a),he(t,u),he(r,l)])}},Fr=({input:e})=>{if(Kt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Vt.exports={handleInput:Lr,makeAllStream:Mr,getSpawnedResult:jr,validateInputSync:Fr}});var Qt=c((Ys,Yt)=>{"use strict";var Ur=(async()=>{})().constructor.prototype,Dr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Ur,e)]),Xr=(e,t)=>{for(let[r,n]of Dr){let s=typeof t=="function"?(...o)=>Reflect.apply(n.value,t(),o):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:s})}return e},Hr=e=>new Promise((t,r)=>{e.on("exit",(n,s)=>{t({exitCode:n,signal:s})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});Yt.exports={mergePromise:Xr,getSpawnedPromise:Hr}});var en=c((Qs,Jt)=>{"use strict";var Zt=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Kr=/^[\w.-]+$/,Wr=/"/g,Vr=e=>typeof e!="string"||Kr.test(e)?e:`"${e.replace(Wr,'\\"')}"`,zr=(e,t)=>Zt(e,t).join(" "),Yr=(e,t)=>Zt(e,t).map(r=>Vr(r)).join(" "),Qr=/ +/g,Zr=e=>{let t=[];for(let r of e.trim().split(Qr)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};Jt.exports={joinCommand:zr,getEscapedCommand:Yr,parseCommand:Zr}});var cn=c((Zs,O)=>{"use strict";var Jr=require("path"),ye=require("child_process"),es=dt(),ts=pt(),ns=St(),rs=wt(),z=Ct(),tn=Ot(),{spawnedKill:ss,spawnedCancel:os,setupTimeout:is,validateTimeout:as,setExitHandler:cs}=Lt(),{handleInput:us,getSpawnedResult:ls,makeAllStream:ds,validateInputSync:fs}=zt(),{mergePromise:nn,getSpawnedPromise:ps}=Qt(),{joinCommand:rn,parseCommand:sn,getEscapedCommand:on}=en(),ms=1e3*1e3*100,hs=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:s})=>{let o=t?{...process.env,...e}:e;return r?ns.env({env:o,cwd:n,execPath:s}):o},an=(e,t,r={})=>{let n=es._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:ms,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=hs(r),r.stdio=tn(r),process.platform==="win32"&&Jr.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},k=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?ts(t):t,Y=(e,t,r)=>{let n=an(e,t,r),s=rn(e,t),o=on(e,t);as(n.options);let i;try{i=ye.spawn(n.file,n.args,n.options)}catch(S){let y=new ye.ChildProcess,g=Promise.reject(z({error:S,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return nn(y,g)}let a=ps(i),u=is(i,n.options,a),l=cs(i,n.options,u),f={isCanceled:!1};i.kill=ss.bind(null,i.kill.bind(i)),i.cancel=os.bind(null,i,f);let m=rs(async()=>{let[{error:S,exitCode:y,signal:g,timedOut:v},$,B,hn]=await ls(i,n.options,l),ge=k(n.options,$),xe=k(n.options,B),we=k(n.options,hn);if(S||y!==0||g!==null){let be=z({error:S,exitCode:y,signal:g,stdout:ge,stderr:xe,all:we,command:s,escapedCommand:o,parsed:n,timedOut:v,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return be;throw be}return{command:s,escapedCommand:o,exitCode:0,stdout:ge,stderr:xe,all:we,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return us(i,n.options.input),i.all=ds(i,n.options),nn(i,m)};O.exports=Y;O.exports.sync=(e,t,r)=>{let n=an(e,t,r),s=rn(e,t),o=on(e,t);fs(n.options);let i;try{i=ye.spawnSync(n.file,n.args,n.options)}catch(l){throw z({error:l,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=k(n.options,i.stdout,i.error),u=k(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=z({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};O.exports.command=(e,t)=>{let[r,...n]=sn(e);return Y(r,n,t)};O.exports.commandSync=(e,t)=>{let[r,...n]=sn(e);return Y.sync(r,n,t)};O.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=tn.node(r),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=r;return Y(o,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var Ss={};bn(Ss,{default:()=>mn});var un=Ie(require("process"),1),ln=Ie(cn(),1);async function dn(e){if(un.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,ln.default)("osascript",["-e",e]);return t}var fn=require("@raycast/api");async function pn(){return(await(0,fn.getApplications)()).some(({bundleId:t})=>t==="design.yugen.Flow")}var Q=require("@raycast/api");async function mn(){if(!await pn()){await(0,Q.showToast)(Q.ToastStyle.Failure,"Flow is not installed","https://flowapp.info/");return}await dn('tell application "Flow" to show')}module.exports=vn(Ss);0&&(module.exports={});
