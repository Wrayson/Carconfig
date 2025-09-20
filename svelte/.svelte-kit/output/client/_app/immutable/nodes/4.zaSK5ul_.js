import"../chunks/DsnmJJEf.js";import{i as $o}from"../chunks/BfaUpNtD.js";import{a as ts,o as Uu}from"../chunks/BgWkloOl.js";import{h as Ps,c as Gp,aX as f_,e as p_,aY as Gd,H as m_,x as g_,y as __,z as Wd,U as Xd,ac as Jl,ad as Yd,m as Jt,i as ma,q as v_,l as x_,aZ as qd,a_ as Zd,a$ as Kd,T as y_,v as jl,p as Ql,aT as M_,b0 as b_,j as lo,aW as Wp,u as ai,r as S_,b1 as T_,g as vc,b2 as E_,b3 as w_,b4 as $n,aK as An,V as hn,X as cr,b as R,aM as _n,b5 as Hi,b6 as Jo,b7 as Ou,$ as ui,aL as dn,a1 as It,a9 as Gr,a3 as pt,a4 as di,a0 as kt,aV as xc,a5 as Sn,a6 as en,a as Nt,n as Os,a7 as me,a2 as ci,b8 as Or,Z as cn,b9 as ul,a8 as Xp,aP as A_,aO as Nr,ba as eh}from"../chunks/BBG15Ui1.js";import{r as jo,i as qn,s as Fs,p as wt}from"../chunks/DieghSKU.js";import{b as Fi,a as C_,e as dc,i as th,s as nh,r as R_}from"../chunks/Dbu15hy2.js";import{s as Bs}from"../chunks/IUj1JhW6.js";import{b as lu,c as Me}from"../chunks/CdVMgiNz.js";import{a as Fu,s as Bu}from"../chunks/DMfDRYDU.js";const ih=0,ga=1,rh=2;function I_(r,e,t,n,i){Ps&&Gp();var s=r,o=f_(),a=y_,c=Xd,l,h,u,d=o?Yd(void 0):Jt(void 0,!1,!1),f=o?Yd(void 0):Jt(void 0,!1,!1),p=!1;function v(m,S){p=!0,S&&(qd(g),Zd(g),Kd(a));try{m===ih&&t&&(l?jl(l):l=ma(()=>t(s))),m===ga&&n&&(h?jl(h):h=ma(()=>n(s,d))),m===rh&&i&&(u?jl(u):u=ma(()=>i(s,f))),m!==ih&&l&&Ql(l,()=>l=null),m!==ga&&h&&Ql(h,()=>h=null),m!==rh&&u&&Ql(u,()=>u=null)}finally{S&&(Kd(null),Zd(null),qd(null),M_())}}var g=p_(()=>{if(c===(c=e()))return;let m=Ps&&Gd(c)===(s.data===m_);if(m&&(s=g_(),__(s),Wd(!1),m=!0),Gd(c)){var S=c;p=!1,S.then(y=>{S===c&&(Jl(d,y),v(ga,!0))},y=>{if(S===c&&(Jl(f,y),v(rh,!0),!i))throw f.v}),Ps?t&&(l=ma(()=>t(s))):v_(()=>{p||v(ih,!0)})}else Jl(d,c),v(ga,!1);return m&&Wd(!0),()=>c=Xd});Ps&&(s=x_)}function Yp(r,e,t,n,i){Ps&&Gp();var s=e.$$slots?.[t],o=!1;s===!0&&(s=e.children,o=!0),s===void 0?i!==null&&i(r):s(r,o?()=>n:n)}function P_(r,e,t=e){var n=new WeakSet;b_(r,"input",async i=>{var s=i?r.defaultValue:r.value;if(s=sh(r)?oh(s):s,t(s),lo!==null&&n.add(lo),await Wp(),s!==(s=e())){var o=r.selectionStart,a=r.selectionEnd;r.value=s??"",a!==null&&(r.selectionStart=o,r.selectionEnd=Math.min(a,r.value.length))}}),(Ps&&r.defaultValue!==r.value||ai(e)==null&&r.value)&&(t(sh(r)?oh(r.value):r.value),lo!==null&&n.add(lo)),S_(()=>{var i=e();if(r===document.activeElement){var s=T_??lo;if(n.has(s))return}sh(r)&&i===oh(r.value)||r.type==="date"&&!i&&!r.value||i!==r.value&&(r.value=i??"")})}function sh(r){var e=r.type;return e==="number"||e==="range"}function oh(r){return r===""?null:+r}function yc(r){let e;const t=w_(i=>{let s=!1;const o=r.subscribe(a=>{e=a,s&&i()});return s=!0,o});function n(){return E_()?(t(),e):vc(r)}return"set"in r?{get current(){return n()},set current(i){r.set(i)}}:{get current(){return n()}}}const $d=(r,e)=>{if(r===e)return!0;if(!r||!e)return!1;const t=r.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0},D_=()=>{const r=[],n={items:r,remember:(i,s)=>{for(let a=0;a<r.length;a++){const c=r[a];if($d(s,c.keys)&&c.promise)return c.promise}const o={promise:i(),keys:s};return r.push(o),o.promise},clear:i=>{for(let s=0;s<r.length;s++){const o=r[s];if($d(i,o.keys)){r.splice(s,1);return}}}};return $n("threlte-cache",n),n},qp=()=>{const r=An("threlte-cache");if(!r)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return r};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="180",Wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zp=0,hu=1,Kp=2,L_=3,N_=0,ku=1,Ao=2,vi=3,bi=0,wn=1,si=2,Bi=0,Xr=1,uu=2,du=3,fu=4,$p=5,ir=100,Jp=101,jp=102,Qp=103,em=104,tm=200,nm=201,im=202,rm=203,Mc=204,bc=205,sm=206,om=207,am=208,cm=209,lm=210,hm=211,um=212,dm=213,fm=214,Sc=0,Tc=1,Ec=2,Zr=3,wc=4,Ac=5,Cc=6,Rc=7,Qo=0,pm=1,mm=2,ki=0,gm=1,_m=2,vm=3,xm=4,ym=5,Ic=6,Mm=7,pu="attached",bm="detached",fl=300,Vi=301,lr=302,Vs=303,Fo=304,to=306,hr=1e3,Fn=1001,Gs=1002,nn=1003,pl=1004,U_=1004,Br=1005,O_=1005,Dt=1006,ks=1007,F_=1007,Kn=1008,B_=1008,li=1009,zu=1010,Hu=1011,Ws=1012,ml=1013,Gi=1014,jt=1015,Nn=1016,gl=1017,_l=1018,Xs=1020,Vu=35902,Gu=35899,Wu=1021,Xu=1022,Yt=1023,Ys=1026,qs=1027,sr=1028,ea=1029,rr=1030,vl=1031,k_=1032,xl=1033,Co=33776,Ro=33777,Io=33778,Po=33779,Pc=35840,Dc=35841,Lc=35842,Nc=35843,Uc=36196,Oc=37492,Fc=37496,Bc=37808,kc=37809,zc=37810,Hc=37811,Vc=37812,Gc=37813,Wc=37814,Xc=37815,Yc=37816,qc=37817,Zc=37818,Kc=37819,$c=37820,Jc=37821,jc=36492,Qc=36494,el=36495,tl=36283,nl=36284,il=36285,rl=36286,Sm=2200,Tm=2201,Em=2202,Zs=2300,Ks=2301,fc=2302,kr=2400,zr=2401,Bo=2402,yl=2500,Yu=2501,wm=0,qu=1,sl=2,Am=3200,Cm=3201,z_=3202,H_=3203,dr=0,Rm=1,Ni="",Wt="srgb",Ut="srgb-linear",ko="linear",Rt="srgb",V_=0,Dr=7680,G_=7681,W_=7682,X_=7683,Y_=34055,q_=34056,Z_=5386,K_=512,$_=513,J_=514,j_=515,Q_=516,e0=517,t0=518,mu=519,Im=512,Pm=513,Dm=514,Zu=515,Lm=516,Nm=517,Um=518,Om=519,zo=35044,n0=35048,i0=35040,r0=35045,s0=35049,o0=35041,a0=35046,c0=35050,l0=35042,h0="100",gu="300 es",Bn=2e3,$s=2001,u0={COMPUTE:"compute",RENDER:"render"},d0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},f0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"};class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jd=1234567;const Yr=Math.PI/180,Js=180/Math.PI;function kn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function Ku(r,e){return(r%e+e)%e}function p0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function m0(r,e,t){return r!==e?(t-r)/(e-r):0}function Do(r,e,t){return(1-t)*r+t*e}function g0(r,e,t,n){return Do(r,e,1-Math.exp(-t*n))}function _0(r,e=1){return e-Math.abs(Ku(r,e*2)-e)}function v0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function x0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function y0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function M0(r,e){return r+Math.random()*(e-r)}function b0(r){return r*(.5-Math.random())}function S0(r){r!==void 0&&(Jd=r);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T0(r){return r*Yr}function E0(r){return r*Js}function w0(r){return(r&r-1)===0&&r!==0}function A0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function C0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function R0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*p,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*p,a*l);break;case"ZYZ":r.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $u={DEG2RAD:Yr,RAD2DEG:Js,generateUUID:kn,clamp:at,euclideanModulo:Ku,mapLinear:p0,inverseLerp:m0,lerp:Do,damp:g0,pingpong:_0,smoothstep:v0,smootherstep:x0,randInt:y0,randFloat:M0,randFloatSpread:b0,seededRandom:S0,degToRad:T0,radToDeg:E0,isPowerOfTwo:w0,ceilPowerOfTwo:A0,floorPowerOfTwo:C0,setQuaternionFromProperEuler:R0,normalize:gt,denormalize:Tn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==p){let g=1-a;const m=c*d+l*f+h*p+u*v,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const C=Math.sqrt(y),M=Math.atan2(C,m*S);g=Math.sin(g*M)/C,a=Math.sin(a*M)/C}const b=a*S;if(c=c*g+d*b,l=l*g+f*b,h=h*g+p*b,u=u*g+v*b,g===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ah=new P,jd=new fn;class ft{constructor(e,t,n,i,s,o,a,c,l){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],S=i[1],y=i[4],b=i[7],C=i[2],M=i[5],N=i[8];return s[0]=o*v+a*S+c*C,s[3]=o*g+a*y+c*M,s[6]=o*m+a*b+c*N,s[1]=l*v+h*S+u*C,s[4]=l*g+h*y+u*M,s[7]=l*m+h*b+u*N,s[2]=d*v+f*S+p*C,s[5]=d*g+f*y+p*M,s[8]=d*m+f*b+p*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*s-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ch.makeScale(e,t)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new ft;function Fm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const I0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ds(r,e){return new I0[r](e)}function Ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bm(){const r=Ho("canvas");return r.style.display="block",r}const Qd={};function Vo(r){r in Qd||(Qd[r]=!0,console.warn(r))}function P0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ef=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){const r={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ut]:{primaries:e,whitePoint:n,transfer:ko,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),r}const vt=D0();function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class km{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=Ho("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L0=0;class or{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(lh(i[o].image)):s.push(lh(i[o]))}else s=lh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?km.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N0=0;const hh=new P;class Bt extends Ti{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Fn,i=Fn,s=Dt,o=Kn,a=Yt,c=li,l=Bt.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=kn(),this.name="",this.source=new or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=fl;Bt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(f+1)/2,C=(m+1)/2,M=(h+d)/4,N=(u+v)/4,D=(p+g)/4;return y>b&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=M/n,s=N/n):b>C?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=M/i,s=D/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=N/s,i=D/s),this.set(n,i,s,t),this}let S=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ju extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Bt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new or(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Ju{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ml extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class U0 extends Si{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ml(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class bl extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O0 extends Si{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new bl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class qt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),va.subVectors(this.max,ho),hs.subVectors(e.a,ho),us.subVectors(e.b,ho),ds.subVectors(e.c,ho),qi.subVectors(us,hs),Zi.subVectors(ds,us),gr.subVectors(hs,ds);let t=[0,-qi.z,qi.y,0,-Zi.z,Zi.y,0,-gr.z,gr.y,qi.z,0,-qi.x,Zi.z,0,-Zi.x,gr.z,0,-gr.x,-qi.y,qi.x,0,-Zi.y,Zi.x,0,-gr.y,gr.x,0];return!uh(t,hs,us,ds,va)||(t=[1,0,0,0,1,0,0,0,1],!uh(t,hs,us,ds,va))?!1:(xa.crossVectors(qi,Zi),t=[xa.x,xa.y,xa.z],uh(t,hs,us,ds,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new P,new P,new P,new P,new P,new P,new P,new P],Qn=new P,_a=new qt,hs=new P,us=new P,ds=new P,qi=new P,Zi=new P,gr=new P,ho=new P,va=new P,xa=new P,_r=new P;function uh(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_r.fromArray(r,s);const a=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),c=e.dot(_r),l=t.dot(_r),h=n.dot(_r);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const F0=new qt,uo=new P,dh=new P;class Zt{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(dh)),this.expandByPoint(uo.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ai=new P,fh=new P,ya=new P,Ki=new P,ph=new P,Ma=new P,mh=new P;class Xi{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fh.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(fh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=Ki.dot(this.direction),c=-Ki.dot(ya),l=Ki.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=s*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fh).addScaledVector(ya,d),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,s){ph.subVectors(t,e),Ma.subVectors(n,e),mh.crossVectors(ph,Ma);let o=this.direction.dot(mh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const c=a*this.direction.dot(Ma.crossVectors(Ki,Ma));if(c<0)return null;const l=a*this.direction.dot(ph.cross(Ki));if(l<0||c+l>o)return null;const h=-a*Ki.dot(mh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,p,v,g){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,p,v,g)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,v=l*u;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,v=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,k0)}lookAt(e,t,n){const i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),$i.crossVectors(n,Un),$i.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),$i.crossVectors(n,Un)),$i.normalize(),ba.crossVectors(Un,$i),i[0]=$i.x,i[4]=ba.x,i[8]=Un.x,i[1]=$i.y,i[5]=ba.y,i[9]=Un.y,i[2]=$i.z,i[6]=ba.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],S=n[3],y=n[7],b=n[11],C=n[15],M=i[0],N=i[4],D=i[8],E=i[12],w=i[1],L=i[5],z=i[9],G=i[13],W=i[2],J=i[6],q=i[10],re=i[14],j=i[3],ue=i[7],pe=i[11],Ce=i[15];return s[0]=o*M+a*w+c*W+l*j,s[4]=o*N+a*L+c*J+l*ue,s[8]=o*D+a*z+c*q+l*pe,s[12]=o*E+a*G+c*re+l*Ce,s[1]=h*M+u*w+d*W+f*j,s[5]=h*N+u*L+d*J+f*ue,s[9]=h*D+u*z+d*q+f*pe,s[13]=h*E+u*G+d*re+f*Ce,s[2]=p*M+v*w+g*W+m*j,s[6]=p*N+v*L+g*J+m*ue,s[10]=p*D+v*z+g*q+m*pe,s[14]=p*E+v*G+g*re+m*Ce,s[3]=S*M+y*w+b*W+C*j,s[7]=S*N+y*L+b*J+C*ue,s[11]=S*D+y*z+b*q+C*pe,s[15]=S*E+y*G+b*re+C*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+v*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+g*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],S=u*g*l-v*d*l+v*c*f-a*g*f-u*c*m+a*d*m,y=p*d*l-h*g*l-p*c*f+o*g*f+h*c*m-o*d*m,b=h*v*l-p*u*l+p*a*f-o*v*f-h*a*m+o*u*m,C=p*u*c-h*v*c-p*a*d+o*v*d+h*a*g-o*u*g,M=t*S+n*y+i*b+s*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/M;return e[0]=S*N,e[1]=(v*d*s-u*g*s-v*i*f+n*g*f+u*i*m-n*d*m)*N,e[2]=(a*g*s-v*c*s+v*i*l-n*g*l-a*i*m+n*c*m)*N,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*N,e[4]=y*N,e[5]=(h*g*s-p*d*s+p*i*f-t*g*f-h*i*m+t*d*m)*N,e[6]=(p*c*s-o*g*s-p*i*l+t*g*l+o*i*m-t*c*m)*N,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*N,e[8]=b*N,e[9]=(p*u*s-h*v*s-p*n*f+t*v*f+h*n*m-t*u*m)*N,e[10]=(o*v*s-p*a*s+p*n*l-t*v*l-o*n*m+t*a*m)*N,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*N,e[12]=C*N,e[13]=(h*v*i-p*u*i+p*n*d-t*v*d-h*n*g+t*u*g)*N,e[14]=(p*a*i-o*v*i-p*n*c+t*v*c+o*n*g-t*a*g)*N,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,p=s*u,v=o*h,g=o*u,m=a*u,S=c*l,y=c*h,b=c*u,C=n.x,M=n.y,N=n.z;return i[0]=(1-(v+m))*C,i[1]=(f+b)*C,i[2]=(p-y)*C,i[3]=0,i[4]=(f-b)*M,i[5]=(1-(d+m))*M,i[6]=(g+S)*M,i[7]=0,i[8]=(p+y)*N,i[9]=(g-S)*N,i[10]=(1-(d+v))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const l=1/s,h=1/o,u=1/a;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Bn,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,v;if(c)p=s/(o-s),v=o*s/(o-s);else if(a===Bn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===$s)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Bn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,v;if(c)p=1/(o-s),v=o/(o-s);else if(a===Bn)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===$s)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new P,ei=new je,B0=new P(0,0,0),k0=new P(1,1,1),$i=new P,ba=new P,Un=new P,nf=new je,rf=new fn;class zn{constructor(e=0,t=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const sf=new P,ps=new fn,Ci=new je,Sa=new P,fo=new P,H0=new P,V0=new fn,of=new P(1,0,0),af=new P(0,1,0),cf=new P(0,0,1),lf={type:"added"},G0={type:"removed"},ms={type:"childadded",child:null},gh={type:"childremoved",child:null};class bt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new P,t=new zn,n=new fn,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new ft}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(of,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(of,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(fo,Sa,this.up):Ci.lookAt(Sa,fo,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Ci),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G0),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new P(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new P,Ri=new P,_h=new P,Ii=new P,gs=new P,_s=new P,hf=new P,vh=new P,xh=new P,yh=new P,Mh=new xt,bh=new xt,Sh=new xt;class Ln{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ti.subVectors(i,t),Ri.subVectors(n,t),_h.subVectors(e,t);const o=ti.dot(ti),a=ti.dot(Ri),c=ti.dot(_h),l=Ri.dot(Ri),h=Ri.dot(_h),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return Mh.setScalar(0),bh.setScalar(0),Sh.setScalar(0),Mh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,n),Sh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Mh,s.x),o.addScaledVector(bh,s.y),o.addScaledVector(Sh,s.z),o}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),Ri.subVectors(e,t),ti.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ti.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;gs.subVectors(i,n),_s.subVectors(s,n),vh.subVectors(e,n);const c=gs.dot(vh),l=_s.dot(vh);if(c<=0&&l<=0)return t.copy(n);xh.subVectors(e,i);const h=gs.dot(xh),u=_s.dot(xh);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gs,o);yh.subVectors(e,s);const f=gs.dot(yh),p=_s.dot(yh);if(p>=0&&f<=p)return t.copy(s);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(_s,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return hf.subVectors(s,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(hf,a);const m=1/(g+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Th(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=Ku(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Th(o,s,e+1/3),this.g=Th(o,s,e),this.b=Th(o,s,e-1/3)}return vt.colorSpaceToWorking(this,i),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return vt.workingToColorSpace(mn.copy(this),e),Math.round(at(mn.r*255,0,255))*65536+Math.round(at(mn.g*255,0,255))*256+Math.round(at(mn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,s=mn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Wt){vt.workingToColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Ta);const n=Do(Ji.h,Ta.h,t),i=Do(Ji.s,Ta.s,t),s=Do(Ji.l,Ta.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Fe;Fe.NAMES=zm;let W0=0;class rn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Xr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=bc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class En extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ui=X0();function X0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Dn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=at(r,-65504,65504),Ui.floatView[0]=r;const e=Ui.uint32View[0],t=e>>23&511;return Ui.baseTable[t]+((e&8388607)>>Ui.shiftTable[t])}function To(r){const e=r>>10;return Ui.uint32View[0]=Ui.mantissaTable[Ui.offsetTable[e]+(r&1023)]+Ui.exponentTable[e],Ui.floatView[0]}class Hr{static toHalfFloat(e){return Dn(e)}static fromHalfFloat(e){return To(e)}}const $t=new P,Ea=new se;let Y0=0;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zo,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zo&&(e.usage=this.usage),e}}class q0 extends At{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Z0 extends At{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class K0 extends At{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class $0 extends At{constructor(e,t,n){super(new Int16Array(e),t,n)}}class ju extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class J0 extends At{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Qu extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class j0 extends At{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=To(this.array[e*this.itemSize]);return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=Dn(t),this}getY(e){let t=To(this.array[e*this.itemSize+1]);return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=Dn(t),this}getZ(e){let t=To(this.array[e*this.itemSize+2]);return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=Dn(t),this}getW(e){let t=To(this.array[e*this.itemSize+3]);return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=Dn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=Dn(t),this.array[e+1]=Dn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=Dn(t),this.array[e+1]=Dn(n),this.array[e+2]=Dn(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=Dn(t),this.array[e+1]=Dn(n),this.array[e+2]=Dn(i),this.array[e+3]=Dn(s),this}}class Ge extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Q0=0;const Wn=new je,Eh=new bt,vs=new P,On=new qt,po=new qt,an=new P;class dt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?Qu:ju)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(On.min,po.min),On.expandByPoint(an),an.addVectors(On.max,po.max),On.expandByPoint(an)):(On.expandByPoint(po.min),On.expandByPoint(po.max))}On.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(e,l),an.add(vs)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new P,c[D]=new P;const l=new P,h=new P,u=new P,d=new se,f=new se,p=new se,v=new P,g=new P;function m(D,E,w){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,w),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[D].add(v),a[E].add(v),a[w].add(v),c[D].add(g),c[E].add(g),c[w].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,E=S.length;D<E;++D){const w=S[D],L=w.start,z=w.count;for(let G=L,W=L+z;G<W;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new P,b=new P,C=new P,M=new P;function N(D){C.fromBufferAttribute(i,D),M.copy(C);const E=a[D];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),b.crossVectors(M,E);const L=b.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,E=S.length;D<E;++D){const w=S[D],L=w.start,z=w.count;for(let G=L,W=L+z;G<W;G+=3)N(e.getX(G+0)),N(e.getX(G+1)),N(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uf=new je,vr=new Xi,wa=new Zt,df=new P,Aa=new P,Ca=new P,Ra=new P,wh=new P,Ia=new P,ff=new P,Pa=new P;class Vt extends bt{constructor(e=new dt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ia.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(wh.fromBufferAttribute(u,e),o?Ia.addScaledVector(wh,h):Ia.addScaledVector(wh.sub(t),h))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(wa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(wa,df)===null||vr.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(uf.copy(s).invert(),vr.copy(e.ray).applyMatrix4(uf),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,C=y;b<C;b+=3){const M=a.getX(b),N=a.getX(b+1),D=a.getX(b+2);i=Da(this,m,e,n,l,h,u,M,N,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);i=Da(this,o,e,n,l,h,u,S,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,C=y;b<C;b+=3){const M=b,N=b+1,D=b+2;i=Da(this,m,e,n,l,h,u,M,N,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=g,y=g+1,b=g+2;i=Da(this,o,e,n,l,h,u,S,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function ev(r,e,t,n,i,s,o,a){let c;if(e.side===wn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===bi,a),c===null)return null;Pa.copy(a),Pa.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Pa);return l<t.near||l>t.far?null:{distance:l,point:Pa.clone(),object:r}}function Da(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Aa),r.getVertexPosition(c,Ca),r.getVertexPosition(l,Ra);const h=ev(r,e,t,n,Aa,Ca,Ra,ff);if(h){const u=new P;Ln.getBarycoord(ff,Aa,Ca,Ra,u),i&&(h.uv=Ln.getInterpolatedAttribute(i,a,c,l,u,new se)),s&&(h.uv1=Ln.getInterpolatedAttribute(s,a,c,l,u,new se)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};Ln.getNormal(Aa,Ca,Ra,d.normal),h.face=d,h.barycoord=u}return h}class ns extends dt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function p(v,g,m,S,y,b,C,M,N,D,E){const w=b/N,L=C/D,z=b/2,G=C/2,W=M/2,J=N+1,q=D+1;let re=0,j=0;const ue=new P;for(let pe=0;pe<q;pe++){const Ce=pe*L-G;for(let Ue=0;Ue<J;Ue++){const ze=Ue*w-z;ue[v]=ze*S,ue[g]=Ce*y,ue[m]=W,l.push(ue.x,ue.y,ue.z),ue[v]=0,ue[g]=0,ue[m]=M>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(Ue/N),u.push(1-pe/D),re+=1}}for(let pe=0;pe<D;pe++)for(let Ce=0;Ce<N;Ce++){const Ue=d+Ce+J*pe,ze=d+Ce+J*(pe+1),Qe=d+(Ce+1)+J*(pe+1),et=d+(Ce+1)+J*pe;c.push(Ue,ze,et),c.push(ze,Qe,et),j+=6}a.addGroup(f,j,E),f+=j,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=js(r[t]);for(const i in n)e[i]=n[i]}return e}function tv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const ed={clone:js,merge:bn};var nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new P,pf=new se,mf=new se;class tn extends Tl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,pf,mf),t.subVectors(mf,pf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,ys=1;class Vm extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(xs,ys,e,t);i.layers=this.layers,this.add(i);const s=new tn(xs,ys,e,t);s.layers=this.layers,this.add(s);const o=new tn(xs,ys,e,t);o.layers=this.layers,this.add(o);const a=new tn(xs,ys,e,t);a.layers=this.layers,this.add(a);const c=new tn(xs,ys,e,t);c.layers=this.layers,this.add(c);const l=new tn(xs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ta extends Bt{constructor(e=[],t=Vi,n,i,s,o,a,c,l,h){super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gm extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ta(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ns(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Bi});s.uniforms.tEquirect.value=t;const o=new Vt(i,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Dt),new Vm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Oi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class El{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class td extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class na{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zo,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new P;class ur{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nd extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const mo=new P,bs=new P,Ss=new P,Ts=new se,go=new se,Wm=new je,La=new P,_o=new P,Na=new P,gf=new se,Ah=new se,_f=new se;class Xm extends bt{constructor(e=new nd){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new na(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new ur(n,3,0,!1)),Ms.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Wm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ss.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ua(La.set(-.5,-.5,0),Ss,o,bs,i,s),Ua(_o.set(.5,-.5,0),Ss,o,bs,i,s),Ua(Na.set(.5,.5,0),Ss,o,bs,i,s),gf.set(0,0),Ah.set(1,0),_f.set(1,1);let a=e.ray.intersectTriangle(La,_o,Na,!1,mo);if(a===null&&(Ua(_o.set(-.5,.5,0),Ss,o,bs,i,s),Ah.set(0,1),a=e.ray.intersectTriangle(La,Na,_o,!1,mo),a===null))return;const c=e.ray.origin.distanceTo(mo);c<e.near||c>e.far||t.push({distance:c,point:mo.clone(),uv:Ln.getInterpolation(mo,La,_o,Na,gf,Ah,_f,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ua(r,e,t,n,i,s){Ts.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(go.x=s*Ts.x-i*Ts.y,go.y=i*Ts.x+s*Ts.y):go.copy(Ts),r.copy(e),r.x+=go.x,r.y+=go.y,r.applyMatrix4(Wm)}const Oa=new P,vf=new P;class Ym extends bt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Oa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Oa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Oa.setFromMatrixPosition(e.matrixWorld),vf.setFromMatrixPosition(this.matrixWorld);const n=Oa.distanceTo(vf)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const xf=new P,yf=new xt,Mf=new xt,sv=new P,bf=new je,Fa=new P,Ch=new Zt,Sf=new je,Rh=new Xi;class id extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pu,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(i),e.ray.intersectsSphere(Ch)!==!1&&(Sf.copy(i).invert(),Rh.copy(e.ray).applyMatrix4(Sf),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;yf.fromBufferAttribute(i.attributes.skinIndex,e),Mf.fromBufferAttribute(i.attributes.skinWeight,e),xf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mf.getComponent(s);if(o!==0){const a=yf.getComponent(s);bf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(sv.copy(xf).applyMatrix4(bf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Al extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mi extends Bt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=nn,h=nn,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new je,ov=new je;class ia{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ov;Tf.multiplyMatrices(a,t[s]),Tf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mi(t,e,e,Yt,jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Al),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Kr extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new je,Ef=new je,Ba=[],wf=new qt,av=new je,vo=new Vt,xo=new Zt;class rd extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,av)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),wf.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(wf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Es),xo.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),e.ray.intersectsSphere(xo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Es),Ef.multiplyMatrices(n,Es),vo.matrixWorld=Ef,vo.raycast(e,Ba);for(let o=0,a=Ba.length;o<a;o++){const c=Ba[o];c.instanceId=s,c.object=this,t.push(c)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(i*this.count),i,this.count,sr,jt));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ih=new P,cv=new P,lv=new ft;class Li{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ih.subVectors(n,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ih),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lv.getNormalMatrix(e),i=this.coplanarPoint(Ih).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Zt,hv=new se(.5,.5),ka=new P;class no{constructor(e=new Li,t=new Li,n=new Li,i=new Li,s=new Li,o=new Li){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],S=s[12],y=s[13],b=s[14],C=s[15];if(i[0].setComponents(l-o,f-h,m-p,C-S).normalize(),i[1].setComponents(l+o,f+h,m+p,C+S).normalize(),i[2].setComponents(l+a,f+u,m+v,C+y).normalize(),i[3].setComponents(l-a,f-u,m-v,C-y).normalize(),n)i[4].setComponents(c,d,g,b).normalize(),i[5].setComponents(l-c,f-d,m-g,C-b).normalize();else if(i[4].setComponents(l-c,f-d,m-g,C-b).normalize(),t===Bn)i[5].setComponents(l+c,f+d,m+g,C+b).normalize();else if(t===$s)i[5].setComponents(c,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const t=hv.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ka.x=i.normal.x>0?e.max.x:e.min.x,ka.y=i.normal.y>0?e.max.y:e.min.y,ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const gi=new je,_i=new no;class Cl{constructor(){this.coordinateSystem=Bn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(gi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(gi,i.coordinateSystem,i.reversedDepth),_i.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(gi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(gi,i.coordinateSystem,i.reversedDepth),_i.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(gi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(gi,i.coordinateSystem,i.reversedDepth),_i.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(gi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(gi,i.coordinateSystem,i.reversedDepth),_i.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(gi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),_i.setFromProjectionMatrix(gi,i.coordinateSystem,i.reversedDepth),_i.containsPoint(e))return!0}return!1}clone(){return new Cl}}function Ph(r,e){return r-e}function uv(r,e){return r.z-e.z}function dv(r,e){return e.z-r.z}class fv{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const In=new je,pv=new Fe(1,1,1),Af=new no,mv=new Cl,za=new qt,yr=new Zt,yo=new P,Cf=new P,gv=new P,Dh=new fv,gn=new Vt,Ha=[];function _v(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Mr(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class qm extends Vt{constructor(e,t,n=t*2,i){super(new dt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Mi(t,e,e,Yt,jt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Mi(t,e,e,ea,Gi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Mi(t,e,e,Yt,jt);n.colorSpace=vt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new At(h,c,l);t.setAttribute(s,u)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new At(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,In),this.getBoundingBoxAt(s,za).applyMatrix4(In),e.union(za)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,In),this.getBoundingSphereAt(s,yr).applyMatrix4(In),e.union(yr)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ph),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;In.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(pv.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ph),c=this._availableGeometryIds.shift(),s[c]=i):(c=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);_v(u,d,c);const f=u.itemSize;for(let p=u.count,v=l;p<v;p++){const g=c+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)s.setX(h+d,c+o.getX(d));for(let d=o.count,f=u;d<f;d++)s.setX(h+d,c);s.needsUpdate=!0,s.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=i[o],l=n[c];if(l.active!==!1){if(s.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=s.index,p=f.array,v=e-u;for(let g=h;g<h+d;g++)p[g]=p[g]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,d=s.attributes;for(const f in d){const p=d[f],{array:v,itemSize:g}=p;v.copyWithin(e*g,h*g,(h+u)*g),p.addUpdateRange(e*g,u*g)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=s.index?l.indexStart:l.vertexStart,this._nextIndexStart=s.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new qt,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),s.expandByPoint(yo.fromBufferAttribute(a,h))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Zt;this.getBoundingBoxAt(e,za),za.getCenter(s.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),yo.fromBufferAttribute(a,u),c=Math.max(c,s.center.distanceToSquared(yo))}s.radius=Math.sqrt(c),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Ph);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Mr(this._multiDrawCounts,i),Mr(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Mr(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Mr(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Mr(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new dt,this._initializeGeometry(s));const o=this.geometry;s.index&&Mr(s.index.array,o.index.array);for(const a in s.attributes)Mr(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;gn.material=this.material,gn.geometry.index=o.index,gn.geometry.attributes=o.attributes,gn.geometry.boundingBox===null&&(gn.geometry.boundingBox=new qt),gn.geometry.boundingSphere===null&&(gn.geometry.boundingSphere=new Zt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,h=i[l];gn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,gn.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,gn.geometry.boundingBox),this.getBoundingSphereAt(l,gn.geometry.boundingSphere),gn.raycast(e,Ha);for(let u=0,d=Ha.length;u<d;u++){const f=Ha[u];f.object=this,f.batchId=a,t.push(f)}Ha.length=0}gn.material=null,gn.geometry.index=null,gn.geometry.attributes={},gn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data,v=n.isArrayCamera?mv:Af;d&&!n.isArrayCamera&&(In.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Af.setFromProjectionMatrix(In,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){In.copy(this.matrixWorld).invert(),yo.setFromMatrixPosition(n.matrixWorld).applyMatrix4(In),Cf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(In);for(let y=0,b=c.length;y<b;y++)if(c[y].visible&&c[y].active){const C=c[y].geometryIndex;this.getMatrixAt(y,In),this.getBoundingSphereAt(C,yr).applyMatrix4(In);let M=!1;if(d&&(M=!v.intersectsSphere(yr,n)),!M){const N=u[C],D=gv.subVectors(yr.center,yo).dot(Cf);Dh.push(N.start,N.count,D,y)}}const m=Dh.list,S=this.customSort;S===null?m.sort(s.transparent?dv:uv):S.call(this,m,n);for(let y=0,b=m.length;y<b;y++){const C=m[y];l[g]=C.start*a,h[g]=C.count,p[g]=C.index,g++}Dh.reset()}else for(let m=0,S=c.length;m<S;m++)if(c[m].visible&&c[m].active){const y=c[m].geometryIndex;let b=!1;if(d&&(this.getMatrixAt(m,In),this.getBoundingSphereAt(y,yr).applyMatrix4(In),b=!v.intersectsSphere(yr,n)),!b){const C=u[y];l[g]=C.start*a,h[g]=C.count,p[g]=m,g++}}f.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class vn extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ol=new P,al=new P,Rf=new je,Mo=new Xi,Va=new Zt,Lh=new P,If=new P;class Wi extends bt{constructor(e=new dt,t=new vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ol.fromBufferAttribute(t,i-1),al.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ol.distanceTo(al);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Rf.copy(i).invert(),Mo.copy(e.ray).applyMatrix4(Rf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=l){const m=h.getX(v),S=h.getX(v+1),y=Ga(this,e,Mo,c,m,S,v);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(p-1),g=h.getX(f),m=Ga(this,e,Mo,c,v,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=l){const m=Ga(this,e,Mo,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Ga(this,e,Mo,c,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ga(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(ol.fromBufferAttribute(a,i),al.fromBufferAttribute(a,s),t.distanceSqToSegment(ol,al,Lh,If)>n)return;Lh.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Lh);if(!(l<e.near||l>e.far))return{distance:l,point:If.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Pf=new P,Df=new P;class fi extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pf.fromBufferAttribute(t,i),Df.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pf.distanceTo(Df);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Rl=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Lf=new je,_u=new Xi,Wa=new Zt,Xa=new P;class od extends bt{constructor(e=new dt,t=new Rl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;Lf.copy(i).invert(),_u.copy(e.ray).applyMatrix4(Lf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,v=f;p<v;p++){const g=l.getX(p);Xa.fromBufferAttribute(u,g),Nf(Xa,g,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,v=f;p<v;p++)Xa.fromBufferAttribute(u,p),Nf(Xa,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nf(r,e,t,n,i,s,o){const a=_u.distanceSqToPoint(r);if(a<t){const c=new P;_u.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zm extends Bt{constructor(e,t,n,i,s=Dt,o=Dt,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class vv extends Zm{constructor(e,t,n,i,s,o,a,c){super({},e,t,n,i,s,o,a,c),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class xv extends Bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=nn,this.minFilter=nn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Il extends Bt{constructor(e,t,n,i,s,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class yv extends Il{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Fn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mv extends Il{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Vi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class bv extends Bt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ad extends Bt{constructor(e,t,n=Gi,i,s,o,a=nn,c=nn,l,h=Ys,u=1){if(h!==Ys&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cd extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pl extends dt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+s,v=i+1,g=new P,m=new P;for(let S=0;S<=p;S++){let y=0,b=0,C=0,M=0;if(S<=n){const E=S/n,w=E*Math.PI/2;b=-h-e*Math.cos(w),C=e*Math.sin(w),M=-e*Math.cos(w),y=E*u}else if(S<=n+s){const E=(S-n)/s;b=-h+E*t,C=e,M=0,y=u+E*d}else{const E=(S-n-s)/n,w=E*Math.PI/2;b=h+e*Math.sin(w),C=e*Math.cos(w),M=e*Math.sin(w),y=u+d+E*u}const N=Math.max(0,Math.min(1,y/f));let D=0;S===0?D=.5/i:S===p&&(D=-.5/i);for(let E=0;E<=i;E++){const w=E/i,L=w*Math.PI*2,z=Math.sin(L),G=Math.cos(L);m.x=-C*G,m.y=b,m.z=C*z,a.push(m.x,m.y,m.z),g.set(-C*G,M,C*z),g.normalize(),c.push(g.x,g.y,g.z),l.push(w+D,N)}if(S>0){const E=(S-1)*v;for(let w=0;w<i;w++){const L=E+w,z=E+w+1,G=S*v+w,W=S*v+w+1;o.push(L,z,G),o.push(z,W,G)}}}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Dl extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new P,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ra extends dt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function S(){const b=new P,C=new P;let M=0;const N=(t-e)/n;for(let D=0;D<=s;D++){const E=[],w=D/s,L=w*(t-e)+e;for(let z=0;z<=i;z++){const G=z/i,W=G*c+a,J=Math.sin(W),q=Math.cos(W);C.x=L*J,C.y=-w*n+g,C.z=L*q,u.push(C.x,C.y,C.z),b.set(J,N,q).normalize(),d.push(b.x,b.y,b.z),f.push(G,1-w),E.push(p++)}v.push(E)}for(let D=0;D<i;D++)for(let E=0;E<s;E++){const w=v[E][D],L=v[E+1][D],z=v[E+1][D+1],G=v[E][D+1];(e>0||E!==0)&&(h.push(w,L,G),M+=3),(t>0||E!==s-1)&&(h.push(L,z,G),M+=3)}l.addGroup(m,M,0),m+=M}function y(b){const C=p,M=new se,N=new P;let D=0;const E=b===!0?e:t,w=b===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;const L=p;for(let z=0;z<=i;z++){const W=z/i*c+a,J=Math.cos(W),q=Math.sin(W);N.x=E*q,N.y=g*w,N.z=E*J,u.push(N.x,N.y,N.z),d.push(0,w,0),M.x=J*.5+.5,M.y=q*.5*w+.5,f.push(M.x,M.y),p++}for(let z=0;z<i;z++){const G=C+z,W=L+z;b===!0?h.push(W,W+1,G):h.push(W+1,W,G),D+=3}l.addGroup(m,D,b===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends ra{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new sa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fr extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new P,b=new P,C=new P;for(let M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],b),f(t[M+2],C),c(y,b,C,S)}function c(S,y,b,C){const M=C+1,N=[];for(let D=0;D<=M;D++){N[D]=[];const E=S.clone().lerp(b,D/M),w=y.clone().lerp(b,D/M),L=M-D;for(let z=0;z<=L;z++)z===0&&D===M?N[D][z]=E:N[D][z]=E.clone().lerp(w,z/L)}for(let D=0;D<M;D++)for(let E=0;E<2*(M-D)-1;E++){const w=Math.floor(E/2);E%2===0?(d(N[D][w+1]),d(N[D+1][w]),d(N[D][w])):(d(N[D][w+1]),d(N[D+1][w+1]),d(N[D+1][w]))}}function l(S){const y=new P;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(S),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function h(){const S=new P;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const b=g(S)/2/Math.PI+.5,C=m(S)/Math.PI+.5;o.push(b,1-C)}p(),u()}function u(){for(let S=0;S<o.length;S+=6){const y=o[S+0],b=o[S+2],C=o[S+4],M=Math.max(y,b,C),N=Math.min(y,b,C);M>.9&&N<.1&&(y<.2&&(o[S+0]+=1),b<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function f(S,y){const b=S*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function p(){const S=new P,y=new P,b=new P,C=new P,M=new se,N=new se,D=new se;for(let E=0,w=0;E<s.length;E+=9,w+=6){S.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),b.set(s[E+6],s[E+7],s[E+8]),M.set(o[w+0],o[w+1]),N.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),C.copy(S).add(y).add(b).divideScalar(3);const L=g(C);v(M,w+0,S,L),v(N,w+2,y,L),v(D,w+4,b,L)}}function v(S,y,b,C){C<0&&S.x===1&&(o[y]=S.x-1),b.x===0&&b.z===0&&(o[y]=C/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.vertices,e.indices,e.radius,e.details)}}class Ll extends fr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ll(e.radius,e.detail)}}const Ya=new P,qa=new P,Nh=new P,Za=new Ln;class Km extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Yr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:v,b:g,c:m}=Za;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Za.getNormal(Nh),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,b=u[S],C=u[y],M=Za[h[S]],N=Za[h[y]],D=`${b}_${C}`,E=`${C}_${b}`;E in d&&d[E]?(Nh.dot(d[E].normal)<=s&&(f.push(M.x,M.y,M.z),f.push(N.x,N.y,N.z)),d[E]=null):D in d||(d[D]={index0:l[S],index1:l[y],normal:Nh.clone()})}}for(const p in d)if(d[p]){const{index0:v,index1:g}=d[p];Ya.fromBufferAttribute(a,v),qa.fromBufferAttribute(a,g),f.push(Ya.x,Ya.y,Ya.z),f.push(qa.x,qa.y,qa.z)}this.setAttribute("position",new Ge(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new se:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],s=[],o=[],a=new P,c=new je;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(at(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(at(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nl extends pi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $m extends Nl{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ld(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ka=new P,Uh=new ld,Oh=new ld,Fh=new ld;class Jm extends pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Ka.subVectors(i[0],i[1]).add(i[0]),l=Ka);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ka.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Uh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,v,g),Oh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,v,g),Fh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Uh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Oh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Fh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Uh.calc(c),Oh.calc(c),Fh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uf(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function Sv(r,e){const t=1-r;return t*t*e}function Tv(r,e){return 2*(1-r)*r*e}function Ev(r,e){return r*r*e}function Lo(r,e,t,n){return Sv(r,e)+Tv(r,t)+Ev(r,n)}function wv(r,e){const t=1-r;return t*t*t*e}function Av(r,e){const t=1-r;return 3*t*t*r*e}function Cv(r,e){return 3*(1-r)*r*r*e}function Rv(r,e){return r*r*r*e}function No(r,e,t,n,i){return wv(r,e)+Av(r,t)+Cv(r,n)+Rv(r,i)}class hd extends pi{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(No(e,i.x,s.x,o.x,a.x),No(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jm extends pi{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(No(e,i.x,s.x,o.x,a.x),No(e,i.y,s.y,o.y,a.y),No(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ud extends pi{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qm extends pi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dd extends pi{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Lo(e,i.x,s.x,o.x),Lo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends pi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Lo(e,i.x,s.x,o.x),Lo(e,i.y,s.y,o.y),Lo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Uf(a,c.x,l.x,h.x,u.x),Uf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:$m,CatmullRomCurve3:Jm,CubicBezierCurve:hd,CubicBezierCurve3:jm,EllipseCurve:Nl,LineCurve:ud,LineCurve3:Qm,QuadraticBezierCurve:dd,QuadraticBezierCurve3:fd,SplineCurve:pd});class eg extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new cl[i.type]().fromJSON(i))}return this}}class ll extends eg{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ud(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new dd(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new hd(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new Nl(e,t,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qr extends ll{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ll().fromJSON(i))}return this}}function Iv(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=tg(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=Uv(r,e,s,t)),r.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){const f=r[d],p=r[d+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Go(s,o,t,a,c,l,0),o}function tg(r,e,t,n,i){let s;if(i===Yv(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Of(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Of(o/n|0,r[o],r[o+1],s);return s&&Qs(s,s.next)&&(Xo(s),s=s.next),s}function $r(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Qs(t,t.next)||zt(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Go(r,e,t,n,i,s,o){if(!r)return;!o&&s&&zv(r,n,i,s);let a=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(s?Dv(r,n,i,s):Pv(r)){e.push(c.i,r.i,l.i),Xo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Lv($r(r),e),Go(r,e,t,n,i,s,2)):o===2&&Nv(r,e,t,n,i,s):Go($r(r),e,t,n,i,s,1);break}}}function Pv(r){const e=r.prev,t=r,n=r.next;if(zt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(i,s,o),u=Math.min(a,c,l),d=Math.max(i,s,o),f=Math.max(a,c,l);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Eo(i,a,s,c,o,l,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Dv(r,e,t,n){const i=r.prev,s=r,o=r.next;if(zt(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,c,l),p=Math.min(h,u,d),v=Math.max(a,c,l),g=Math.max(h,u,d),m=vu(f,p,e,t,n),S=vu(v,g,e,t,n);let y=r.prevZ,b=r.nextZ;for(;y&&y.z>=m&&b&&b.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Eo(a,h,c,u,l,d,y.x,y.y)&&zt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Eo(a,h,c,u,l,d,b.x,b.y)&&zt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Eo(a,h,c,u,l,d,y.x,y.y)&&zt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Eo(a,h,c,u,l,d,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Lv(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Qs(n,i)&&ig(n,t,t.next,i)&&Wo(n,i)&&Wo(i,n)&&(e.push(n.i,t.i,i.i),Xo(t),Xo(t.next),t=r=i),t=t.next}while(t!==r);return $r(t)}function Nv(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gv(o,a)){let c=rg(o,a);o=$r(o,o.next),c=$r(c,c.next),Go(o,e,t,n,i,s,0),Go(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Uv(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=tg(r,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Vv(l))}i.sort(Ov);for(let s=0;s<i.length;s++)t=Fv(i[s],t);return t}function Ov(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Fv(r,e){const t=Bv(r,e);if(!t)return e;const n=rg(t,r);return $r(n,n.next),$r(t,t.next)}function Bv(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Qs(r,t))return t;do{if(Qs(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ng(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Wo(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&kv(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function kv(r,e){return zt(r.prev,r,e.prev)<0&&zt(e.next,r,r.next)<0}function zv(r,e,t,n){let i=r;do i.z===0&&(i.z=vu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Hv(i)}function Hv(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function vu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Vv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ng(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Eo(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&ng(r,e,t,n,i,s,o,a)}function Gv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Wv(r,e)&&(Wo(r,e)&&Wo(e,r)&&Xv(r,e)&&(zt(r.prev,r,e.prev)||zt(r,e.prev,e))||Qs(r,e)&&zt(r.prev,r,r.next)>0&&zt(e.prev,e,e.next)>0)}function zt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Qs(r,e){return r.x===e.x&&r.y===e.y}function ig(r,e,t,n){const i=Ja(zt(r,e,t)),s=Ja(zt(r,e,n)),o=Ja(zt(t,n,r)),a=Ja(zt(t,n,e));return!!(i!==s&&o!==a||i===0&&$a(r,t,e)||s===0&&$a(r,n,e)||o===0&&$a(t,r,n)||a===0&&$a(t,e,n))}function $a(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ja(r){return r>0?1:r<0?-1:0}function Wv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ig(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Wo(r,e){return zt(r.prev,r,r.next)<0?zt(r,e,r.next)>=0&&zt(r,r.prev,e)>=0:zt(r,e,r.prev)<0||zt(r,r.next,e)<0}function Xv(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function rg(r,e){const t=xu(r.i,r.x,r.y),n=xu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Of(r,e,t,n){const i=xu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function xu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yv(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class qv{static triangulate(e,t,n=2){return Iv(e,t,n)}}class oi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return oi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Ff(e),Bf(n,e);let o=e.length;t.forEach(Ff);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Bf(n,t[c]);const a=qv.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Ff(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Bf(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ul extends dt{constructor(e=new qr([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ge(i,3)),this.setAttribute("uv",new Ge(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Zv;let y,b=!1,C,M,N,D;m&&(y=m.getSpacedPoints(h),b=!0,d=!1,C=m.computeFrenetFrames(h,!1),M=new P,N=new P,D=new P),d||(g=0,f=0,p=0,v=0);const E=a.extractPoints(l);let w=E.shape;const L=E.holes;if(!oi.isClockWise(w)){w=w.reverse();for(let _e=0,de=L.length;_e<de;_e++){const he=L[_e];oi.isClockWise(he)&&(L[_e]=he.reverse())}}function G(_e){const he=10000000000000001e-36;let ce=_e[0];for(let Ie=1;Ie<=_e.length;Ie++){const ye=Ie%_e.length,Pe=_e[ye],ct=Pe.x-ce.x,nt=Pe.y-ce.y,U=ct*ct+nt*nt,A=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(ce.x),Math.abs(ce.y)),K=he*A*A;if(U<=K){_e.splice(ye,1),Ie--;continue}ce=Pe}}G(w),L.forEach(G);const W=L.length,J=w;for(let _e=0;_e<W;_e++){const de=L[_e];w=w.concat(de)}function q(_e,de,he){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),_e.clone().addScaledVector(de,he)}const re=w.length;function j(_e,de,he){let ce,Ie,ye;const Pe=_e.x-de.x,ct=_e.y-de.y,nt=he.x-_e.x,U=he.y-_e.y,A=Pe*Pe+ct*ct,K=Pe*U-ct*nt;if(Math.abs(K)>Number.EPSILON){const te=Math.sqrt(A),ve=Math.sqrt(nt*nt+U*U),ie=de.x-ct/te,We=de.y+Pe/te,we=he.x-U/ve,Xe=he.y+nt/ve,Ye=((we-ie)*U-(Xe-We)*nt)/(Pe*U-ct*nt);ce=ie+Pe*Ye-_e.x,Ie=We+ct*Ye-_e.y;const be=ce*ce+Ie*Ie;if(be<=2)return new se(ce,Ie);ye=Math.sqrt(be/2)}else{let te=!1;Pe>Number.EPSILON?nt>Number.EPSILON&&(te=!0):Pe<-Number.EPSILON?nt<-Number.EPSILON&&(te=!0):Math.sign(ct)===Math.sign(U)&&(te=!0),te?(ce=-ct,Ie=Pe,ye=Math.sqrt(A)):(ce=Pe,Ie=ct,ye=Math.sqrt(A/2))}return new se(ce/ye,Ie/ye)}const ue=[];for(let _e=0,de=J.length,he=de-1,ce=_e+1;_e<de;_e++,he++,ce++)he===de&&(he=0),ce===de&&(ce=0),ue[_e]=j(J[_e],J[he],J[ce]);const pe=[];let Ce,Ue=ue.concat();for(let _e=0,de=W;_e<de;_e++){const he=L[_e];Ce=[];for(let ce=0,Ie=he.length,ye=Ie-1,Pe=ce+1;ce<Ie;ce++,ye++,Pe++)ye===Ie&&(ye=0),Pe===Ie&&(Pe=0),Ce[ce]=j(he[ce],he[ye],he[Pe]);pe.push(Ce),Ue=Ue.concat(Ce)}let ze;if(g===0)ze=oi.triangulateShape(J,L);else{const _e=[],de=[];for(let he=0;he<g;he++){const ce=he/g,Ie=f*Math.cos(ce*Math.PI/2),ye=p*Math.sin(ce*Math.PI/2)+v;for(let Pe=0,ct=J.length;Pe<ct;Pe++){const nt=q(J[Pe],ue[Pe],ye);Ke(nt.x,nt.y,-Ie),ce===0&&_e.push(nt)}for(let Pe=0,ct=W;Pe<ct;Pe++){const nt=L[Pe];Ce=pe[Pe];const U=[];for(let A=0,K=nt.length;A<K;A++){const te=q(nt[A],Ce[A],ye);Ke(te.x,te.y,-Ie),ce===0&&U.push(te)}ce===0&&de.push(U)}}ze=oi.triangulateShape(_e,de)}const Qe=ze.length,et=p+v;for(let _e=0;_e<re;_e++){const de=d?q(w[_e],Ue[_e],et):w[_e];b?(N.copy(C.normals[0]).multiplyScalar(de.x),M.copy(C.binormals[0]).multiplyScalar(de.y),D.copy(y[0]).add(N).add(M),Ke(D.x,D.y,D.z)):Ke(de.x,de.y,0)}for(let _e=1;_e<=h;_e++)for(let de=0;de<re;de++){const he=d?q(w[de],Ue[de],et):w[de];b?(N.copy(C.normals[_e]).multiplyScalar(he.x),M.copy(C.binormals[_e]).multiplyScalar(he.y),D.copy(y[_e]).add(N).add(M),Ke(D.x,D.y,D.z)):Ke(he.x,he.y,u/h*_e)}for(let _e=g-1;_e>=0;_e--){const de=_e/g,he=f*Math.cos(de*Math.PI/2),ce=p*Math.sin(de*Math.PI/2)+v;for(let Ie=0,ye=J.length;Ie<ye;Ie++){const Pe=q(J[Ie],ue[Ie],ce);Ke(Pe.x,Pe.y,u+he)}for(let Ie=0,ye=L.length;Ie<ye;Ie++){const Pe=L[Ie];Ce=pe[Ie];for(let ct=0,nt=Pe.length;ct<nt;ct++){const U=q(Pe[ct],Ce[ct],ce);b?Ke(U.x,U.y+y[h-1].y,y[h-1].x+he):Ke(U.x,U.y,u+he)}}}H(),X();function H(){const _e=i.length/3;if(d){let de=0,he=re*de;for(let ce=0;ce<Qe;ce++){const Ie=ze[ce];Ve(Ie[2]+he,Ie[1]+he,Ie[0]+he)}de=h+g*2,he=re*de;for(let ce=0;ce<Qe;ce++){const Ie=ze[ce];Ve(Ie[0]+he,Ie[1]+he,Ie[2]+he)}}else{for(let de=0;de<Qe;de++){const he=ze[de];Ve(he[2],he[1],he[0])}for(let de=0;de<Qe;de++){const he=ze[de];Ve(he[0]+re*h,he[1]+re*h,he[2]+re*h)}}n.addGroup(_e,i.length/3-_e,0)}function X(){const _e=i.length/3;let de=0;ke(J,de),de+=J.length;for(let he=0,ce=L.length;he<ce;he++){const Ie=L[he];ke(Ie,de),de+=Ie.length}n.addGroup(_e,i.length/3-_e,1)}function ke(_e,de){let he=_e.length;for(;--he>=0;){const ce=he;let Ie=he-1;Ie<0&&(Ie=_e.length-1);for(let ye=0,Pe=h+g*2;ye<Pe;ye++){const ct=re*ye,nt=re*(ye+1),U=de+ce+ct,A=de+Ie+ct,K=de+Ie+nt,te=de+ce+nt;ut(U,A,K,te)}}}function Ke(_e,de,he){c.push(_e),c.push(de),c.push(he)}function Ve(_e,de,he){Tt(_e),Tt(de),Tt(he);const ce=i.length/3,Ie=S.generateTopUV(n,i,ce-3,ce-2,ce-1);k(Ie[0]),k(Ie[1]),k(Ie[2])}function ut(_e,de,he,ce){Tt(_e),Tt(de),Tt(ce),Tt(de),Tt(he),Tt(ce);const Ie=i.length/3,ye=S.generateSideWallUV(n,i,Ie-6,Ie-3,Ie-2,Ie-1);k(ye[0]),k(ye[1]),k(ye[3]),k(ye[1]),k(ye[2]),k(ye[3])}function Tt(_e){i.push(c[_e*3+0]),i.push(c[_e*3+1]),i.push(c[_e*3+2])}function k(_e){s.push(_e.x),s.push(_e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kv(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new cl[i.type]().fromJSON(i)),new Ul(n,e.options)}}const Zv={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new se(s,o),new se(a,c),new se(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],v=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-u),new se(d,1-p),new se(v,1-m)]:[new se(a,1-c),new se(h,1-u),new se(f,1-p),new se(g,1-m)]}};function Kv(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ol extends fr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ol(e.radius,e.detail)}}class Fl extends dt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=at(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/t,u=new P,d=new se,f=new P,p=new P,v=new P;let g=0,m=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:g=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[S+1].x-e[S].x,m=e[S+1].y-e[S].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(p)}for(let S=0;S<=t;S++){const y=n+S*h*i,b=Math.sin(y),C=Math.cos(y);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*b,u.y=e[M].y,u.z=e[M].x*C,o.push(u.x,u.y,u.z),d.x=S/t,d.y=M/(e.length-1),a.push(d.x,d.y);const N=c[3*M+0]*b,D=c[3*M+1],E=c[3*M+0]*C;l.push(N,D,E)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){const b=y+S*e.length,C=b,M=b+e.length,N=b+e.length+1,D=b+1;s.push(C,M,D),s.push(N,D,M)}this.setIndex(s),this.setAttribute("position",new Ge(o,3)),this.setAttribute("uv",new Ge(a,2)),this.setAttribute("normal",new Ge(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.points,e.segments,e.phiStart,e.phiLength)}}class oa extends fr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class io extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const S=m*d-o;for(let y=0;y<l;y++){const b=y*u-s;p.push(b,-S,0),v.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const y=S+l*m,b=S+l*(m+1),C=S+1+l*(m+1),M=S+1+l*m;f.push(y,b,M),f.push(b,C,M)}this.setIndex(f),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bl extends dt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new P,p=new se;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const m=s+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let m=0;m<n;m++){const S=m+g,y=S,b=S+n+1,C=S+n+2,M=S+1;a.push(y,b,M),a.push(b,C,M)}}this.setIndex(a),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kl extends dt{constructor(e=new qr([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ge(i,3)),this.setAttribute("normal",new Ge(s,3)),this.setAttribute("uv",new Ge(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;oi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const S=p[g];oi.isClockWise(S)===!0&&(p[g]=S.reverse())}const v=oi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){const S=f[g];i.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let g=0,m=v.length;g<m;g++){const S=v[g],y=S[0]+u,b=S[1]+u,C=S[2]+u;n.push(y,b,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $v(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new kl(n,e.curveSegments)}}function $v(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ro extends dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const S=[],y=m/n;let b=0;m===0&&o===0?b=.5/t:m===n&&c===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const M=C/t;u.x=-e*Math.cos(i+M*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+M*s)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(M+b,1-y),S.push(l++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const y=h[m][S+1],b=h[m][S],C=h[m+1][S],M=h[m+1][S+1];(m!==0||o>0)&&f.push(y,b,M),(m!==n-1||c<Math.PI)&&f.push(b,C,M)}this.setIndex(f),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zl extends fr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zl(e.radius,e.detail)}}class Hl extends dt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const v=p/i*s,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const v=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,S=(i+1)*f+p;o.push(v,g,S),o.push(g,m,S)}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vl extends dt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new P,d=new P,f=new P,p=new P,v=new P,g=new P,m=new P;for(let y=0;y<=n;++y){const b=y/n*s*Math.PI*2;S(b,s,o,e,f),S(b+.01,s,o,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let C=0;C<=i;++C){const M=C/i*Math.PI*2,N=-t*Math.cos(M),D=t*Math.sin(M);u.x=f.x+(N*m.x+D*v.x),u.y=f.y+(N*m.y+D*v.y),u.z=f.z+(N*m.z+D*v.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(C/i)}}for(let y=1;y<=n;y++)for(let b=1;b<=i;b++){const C=(i+1)*(y-1)+(b-1),M=(i+1)*y+(b-1),N=(i+1)*y+b,D=(i+1)*(y-1)+b;a.push(C,M,D),a.push(M,N,D)}this.setIndex(a),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(h,2));function S(y,b,C,M,N){const D=Math.cos(y),E=Math.sin(y),w=C/b*y,L=Math.cos(w);N.x=M*(2+L)*.5*D,N.y=M*(2+L)*E*.5,N.z=M*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Gl extends dt{constructor(e=new fd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new se;let h=new P;const u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function v(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),S(),m()}function g(y){h=e.getPointAt(y/t,h);const b=o.normals[y],C=o.binormals[y];for(let M=0;M<=i;M++){const N=M/i*Math.PI*2,D=Math.sin(N),E=-Math.cos(N);c.x=E*b.x+D*C.x,c.y=E*b.y+D*C.y,c.z=E*b.z+D*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let b=1;b<=i;b++){const C=(i+1)*(y-1)+(b-1),M=(i+1)*y+(b-1),N=(i+1)*y+b,D=(i+1)*(y-1)+b;p.push(C,M,D),p.push(M,N,D)}}function S(){for(let y=0;y<=t;y++)for(let b=0;b<=i;b++)l.x=y/t,l.y=b/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gl(new cl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class sg extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new P,s=new P;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,v=d+f;p<v;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),S=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),s.fromBufferAttribute(o,S),kf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),kf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function kf(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var zf=Object.freeze({__proto__:null,BoxGeometry:ns,CapsuleGeometry:Pl,CircleGeometry:Dl,ConeGeometry:sa,CylinderGeometry:ra,DodecahedronGeometry:Ll,EdgesGeometry:Km,ExtrudeGeometry:Ul,IcosahedronGeometry:Ol,LatheGeometry:Fl,OctahedronGeometry:oa,PlaneGeometry:io,PolyhedronGeometry:fr,RingGeometry:Bl,ShapeGeometry:kl,SphereGeometry:ro,TetrahedronGeometry:zl,TorusGeometry:Hl,TorusKnotGeometry:Vl,TubeGeometry:Gl,WireframeGeometry:sg});class og extends rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ag extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class aa extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jn extends aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cg extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lg extends rn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class hg extends rn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ug extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class md extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gd extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dg extends rn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fg extends vn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Vr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function pg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function mg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function _d(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function Jv(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<t||p>=n)){u.push(l.times[f]);for(let v=0;v<h;++v)d.push(l.values[f*h+v])}}u.length!==0&&(l.times=Vr(u,l.times.constructor),l.values=Vr(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function jv(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let v;if(s<=a.times[0]){const m=h,S=u-h;v=a.values.slice(m,S)}else if(s>=a.times[p]){const m=p*u+h,S=m+u-h;v=a.values.slice(m,S)}else{const m=a.createInterpolant(),S=h,y=u-h;m.evaluate(s),v=m.resultBuffer.slice(S,y)}c==="quaternion"&&new fn().fromArray(v).normalize().conjugate().toArray(v);const g=l.times.length;for(let m=0;m<g;++m){const S=m*f+d;if(c==="quaternion")fn.multiplyQuaternionsFlat(l.values,S,v,0,l.values,S);else{const y=f-d*2;for(let b=0;b<y;++b)l.values[S+b]-=v[b]}}}return r.blendMode=Yu,r}class Qv{static convertArray(e,t){return Vr(e,t)}static isTypedArray(e){return pg(e)}static getKeyframeOrder(e){return mg(e)}static sortedArray(e,t,n){return yu(e,t,n)}static flattenJSON(e,t,n,i){_d(e,t,n,i)}static subclip(e,t,n,i,s=30){return Jv(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return jv(e,t,n,i)}}class so{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gg extends so{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kr,endingEnd:kr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zr:s=e,a=2*t-n;break;case Bo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zr:o=e,c=2*n-t;break;case Bo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,S=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*v+.5*p,b=f*g-f*v;for(let C=0;C!==a;++C)s[C]=m*o[h+C]+S*o[l+C]+y*o[c+C]+b*o[u+C];return s}}class vd extends so{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class _g extends so{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&pg(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Ks;class is extends jn{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Zs;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class xd extends jn{constructor(e,t,n,i){super(e,t,n,i)}}xd.prototype.ValueTypeName="color";class Jr extends jn{constructor(e,t,n,i){super(e,t,n,i)}}Jr.prototype.ValueTypeName="number";class vg extends so{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class jr extends jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new vg(this.times,this.values,this.getValueSize(),e)}}jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends jn{constructor(e,t,n){super(e,t,n)}}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Zs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends jn{constructor(e,t,n,i){super(e,t,n,i)}}Qr.prototype.ValueTypeName="vector";class eo{constructor(e="",t=-1,n=[],i=yl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(jn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=mg(c);c=yu(c,1,h),l=yu(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Jr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,v){if(f.length!==0){const g=[],m=[];_d(f,g,m,p),g.length!==0&&v.push(new u(d,g,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const g=[],m=[];for(let S=0;S!==d[p].morphTargets.length;++S){const y=d[p];g.push(y.time),m.push(y.morphTarget===v?1:0)}i.push(new Jr(".morphTargetInfluence["+v+"]",g,m))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Qr,f+".position",d,"pos",i),n(jr,f+".quaternion",d,"rot",i),n(Qr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ex(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return Qr;case"color":return xd;case"quaternion":return jr;case"bool":case"boolean":return is;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function tx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ex(r.type);if(r.times===void 0){const t=[],n=[];_d(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const yi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class yd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ss=new yd;class xn{constructor(e){this.manager=e!==void 0?e:ss,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class nx extends Error{constructor(e,t){super(e),this.response=t}}class Hn extends xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=yi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:i});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Pi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){S();function S(){u.read().then(({done:y,value:b})=>{if(y)m.close();else{v+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let M=0,N=h.length;M<N;M++){const D=h[M];D.onProgress&&D.onProgress(C)}m.enqueue(b),S()}},y=>{m.error(y)})}}});return new Response(g)}else throw new nx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{yi.add(`file:${e}`,l);const h=Pi[e];delete Pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Pi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ix extends xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Hn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=eo.parse(e[n]);t.push(i)}return t}}class rx extends xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new Il,c=new Hn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function h(u){c.load(e[u],function(d){const f=s.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=Dt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){const d=s.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Dt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}const ws=new WeakMap;class Yo extends xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=ws.get(o);u===void 0&&(u=[],ws.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Ho("img");function c(){h(),t&&t(this);const u=ws.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ws.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),yi.remove(`image:${e}`);const d=ws.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}ws.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class sx extends xn{constructor(e){super(e)}load(e,t,n,i){const s=new ta;s.colorSpace=Wt;const o=new Yo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){s.images[l]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class Md extends xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Mi,a=new Hn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Fn,o.wrapT=l.wrapT!==void 0?l.wrapT:Fn,o.magFilter=l.magFilter!==void 0?l.magFilter:Dt,o.minFilter=l.minFilter!==void 0?l.minFilter:Dt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Kn),l.mipmapCount===1&&(o.minFilter=Dt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class bd extends xn{constructor(e){super(e)}load(e,t,n,i){const s=new Bt,o=new Yo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class pr extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xg extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bh=new je,Hf=new P,Vf=new P;class Sd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),Vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vf),t.updateMatrixWorld(),Bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ox extends Sd{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Td extends pr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ox}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gf=new je,bo=new P,kh=new P;class ax extends Sd{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bo.setFromMatrixPosition(e.matrixWorld),n.position.copy(bo),kh.copy(n.position),kh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kh),n.updateMatrixWorld(),i.makeTranslation(-bo.x,-bo.y,-bo.z),Gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf,n.coordinateSystem,n.reversedDepth)}}class Ed extends pr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ax}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oo extends Tl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cx extends Sd{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wd extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new cx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yg extends pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mg extends pr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class bg{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Sg extends pr{constructor(e=new bg,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Wl extends xn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Hn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Fe().setHex(o.value);break;case"v2":i.uniforms[s].value=new se().fromArray(o.value);break;case"v3":i.uniforms[s].value=new P().fromArray(o.value);break;case"v4":i.uniforms[s].value=new xt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new ft().fromArray(o.value);break;case"m4":i.uniforms[s].value=new je().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new se().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Wl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:og,SpriteMaterial:nd,RawShaderMaterial:ag,ShaderMaterial:hi,PointsMaterial:Rl,MeshPhysicalMaterial:Jn,MeshStandardMaterial:aa,MeshPhongMaterial:cg,MeshToonMaterial:lg,MeshNormalMaterial:hg,MeshLambertMaterial:ug,MeshDepthMaterial:md,MeshDistanceMaterial:gd,MeshBasicMaterial:En,MeshMatcapMaterial:dg,LineDashedMaterial:fg,LineBasicMaterial:vn,Material:rn};return new t[e]}}class ar{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tg extends dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Eg extends xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Hn(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),S=Ds(g.type,m),y=new na(S,g.stride);return y.uuid=g.uuid,t[p]=y,y}function s(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new Tg:new dt,a=e.data.index;if(a!==void 0){const f=Ds(a.type,a.array);o.setIndex(new At(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let v;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);v=new ur(g,p.itemSize,p.offset,p.normalized)}else{const g=Ds(p.type,p.array),m=p.isInstancedBufferAttribute?Kr:At;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),o.setAttribute(f,v)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],v=[];for(let g=0,m=p.length;g<m;g++){const S=p[g];let y;if(S.isInterleavedBufferAttribute){const b=i(e.data,S.data);y=new ur(b,S.itemSize,S.offset,S.normalized)}else{const b=Ds(S.type,S.array);y=new At(b,S.itemSize,S.normalized)}S.name!==void 0&&(y.name=S.name),v.push(y)}o.morphAttributes[f]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const v=u[f];o.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new Zt().fromJSON(d)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class lx extends xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?ar.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?ar.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Hn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,a,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new qr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new ia().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Eg;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in zf?a=zf[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Wl;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=eo.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:Ds(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new yd(t);s=new Yo(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Mi(m.data,m.width,m.height)))}i[u.uuid]=new or(f)}else{const f=a(u.url);i[u.uuid]=new or(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:Ds(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Yo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=await s(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Mi(p.data,p.width,p.height)))}n[c.uuid]=new or(h)}else{const h=await s(c.url);n[c.uuid]=new or(h)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let h;Array.isArray(l)?(h=new ta,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new Mi:h=new Bt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,hx)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Wf),h.wrapT=n(a.wrap[1],Wf)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Xf)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Xf)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,s){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":o=new td,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Fe(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new wl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new El(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new tn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new oo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new yg(e.color,e.intensity);break;case"DirectionalLight":o=new wd(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Ed(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Mg(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Td(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new xg(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Sg().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=c(e.material),o=new id(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=c(e.material),o=new Vt(h,u);break;case"InstancedMesh":h=a(e.geometry),u=c(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;o=new rd(h,u,d),o.instanceMatrix=new Kr(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new Kr(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(e.geometry),u=c(e.material),o=new qm(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(v=>{let g=null,m=null;return v.boundingBox!==void 0&&(g=new qt().fromJSON(v.boundingBox)),v.boundingSphere!==void 0&&(m=new Zt().fromJSON(v.boundingSphere)),{...v,boundingBox:g,boundingSphere:m}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=l(e.matricesTexture.uuid),o._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new Zt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new qt().fromJSON(e.boundingBox));break;case"LOD":o=new Ym;break;case"Line":o=new Wi(a(e.geometry),c(e.material));break;case"LineLoop":o=new sd(a(e.geometry),c(e.material));break;case"LineSegments":o=new fi(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new od(a(e.geometry),c(e.material));break;case"Sprite":o=new Xm(c(e.material));break;case"Group":o=new Oi;break;case"Bone":o=new Al;break;default:o=new bt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],v=o.getObjectByProperty("uuid",p.object);v!==void 0&&o.addLevel(v,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new bt}})}}const hx={UVMapping:fl,CubeReflectionMapping:Vi,CubeRefractionMapping:lr,EquirectangularReflectionMapping:Vs,EquirectangularRefractionMapping:Fo,CubeUVReflectionMapping:to},Wf={RepeatWrapping:hr,ClampToEdgeWrapping:Fn,MirroredRepeatWrapping:Gs},Xf={NearestFilter:nn,NearestMipmapNearestFilter:pl,NearestMipmapLinearFilter:Br,LinearFilter:Dt,LinearMipmapNearestFilter:ks,LinearMipmapLinearFilter:Kn},zh=new WeakMap;class wg extends xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(zh.has(o)===!0)i&&i(zh.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return yi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),zh.set(c,l),yi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});yi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let ja;class Ad{static getContext(){return ja===void 0&&(ja=new(window.AudioContext||window.webkitAudioContext)),ja}static setContext(e){ja=e}}class ux extends xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Hn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);Ad.getContext().decodeAudioData(l,function(u){t(u)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const Yf=new je,qf=new je,br=new je;class dx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new tn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new tn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,br.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Yr*t.fov*.5)/t.zoom;let a,c;qf.elements[12]=-i,Yf.elements[12]=i,a=-o*t.aspect+s,c=o*t.aspect+s,br.elements[0]=2*t.near/(c-a),br.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(br),a=-o*t.aspect-s,c=o*t.aspect-s,br.elements[0]=2*t.near/(c-a),br.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(br)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(qf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Yf)}}class Ag extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Sr=new P,Hh=new fn,fx=new P,Tr=new P,Er=new P;class px extends bt{constructor(){super(),this.type="AudioListener",this.context=Ad.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Cg}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Sr,Hh,fx),Tr.set(0,0,-1).applyQuaternion(Hh),Er.set(0,1,0).applyQuaternion(Hh),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Sr.x,n),t.positionY.linearRampToValueAtTime(Sr.y,n),t.positionZ.linearRampToValueAtTime(Sr.z,n),t.forwardX.linearRampToValueAtTime(Tr.x,n),t.forwardY.linearRampToValueAtTime(Tr.y,n),t.forwardZ.linearRampToValueAtTime(Tr.z,n),t.upX.linearRampToValueAtTime(Er.x,n),t.upY.linearRampToValueAtTime(Er.y,n),t.upZ.linearRampToValueAtTime(Er.z,n)}else t.setPosition(Sr.x,Sr.y,Sr.z),t.setOrientation(Tr.x,Tr.y,Tr.z,Er.x,Er.y,Er.z)}}class Rg extends bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const wr=new P,Zf=new fn,mx=new P,Ar=new P;class gx extends Rg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(wr,Zf,mx),Ar.set(0,0,1).applyQuaternion(Zf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(wr.x,n),t.positionY.linearRampToValueAtTime(wr.y,n),t.positionZ.linearRampToValueAtTime(wr.z,n),t.orientationX.linearRampToValueAtTime(Ar.x,n),t.orientationY.linearRampToValueAtTime(Ar.y,n),t.orientationZ.linearRampToValueAtTime(Ar.z,n)}else t.setPosition(wr.x,wr.y,wr.z),t.setOrientation(Ar.x,Ar.y,Ar.z)}}class _x{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Ig{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){fn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;fn.multiplyQuaternionsFlat(e,o,e,t,e,n),fn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Cd="\\[\\]\\.:\\/",vx=new RegExp("["+Cd+"]","g"),Rd="[^"+Cd+"]",xx="[^"+Cd.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",Rd),Mx=/(WCOD+)?/.source.replace("WCOD",xx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rd),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rd),Tx=new RegExp("^"+yx+Mx+bx+Sx+"$"),Ex=["material","materials","bones","map"];class wx{constructor(e,t,n){const i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(e){const t=Tx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ex.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=wx;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ax{constructor(){this.isAnimationObjectGroup=!0,this.uuid=kn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let v=0,g=o;v!==g;++v)s[v].push(new Et(d,n[v],i[v]))}else if(p<l){a=e[p];const v=--l,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=d;for(let m=0,S=o;m!==S;++m){const y=s[m],b=y[v];let C=y[p];y[p]=b,C===void 0&&(C=new Et(d,n[m],i[m])),y[v]=C}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=s){const u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,p=i;f!==p;++f){const v=n[f],g=v[u],m=v[h];v[h]=g,v[u]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){const d=--s,f=e[d],p=--o,v=e[p];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,m=i;g!==m;++g){const S=n[g],y=S[d],b=S[p];S[u]=y,S[d]=b,S.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,v=i;p!==v;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new Et(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class Pg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:kr,endingEnd:kr};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Yu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case yl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Em;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Sm){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=zr,i.endingEnd=zr):(e?i.endingStart=this.zeroSlopeAtStart?zr:kr:i.endingStart=Bo,t?i.endingEnd=this.zeroSlopeAtEnd?zr:kr:i.endingEnd=Bo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const Cx=new Float32Array(1);class Rx extends Ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;p=new Ig(Et.create(n,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new vd(new Float32Array(2),new Float32Array(2),1,Cx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?eo.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=yl),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Pg(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?eo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ix extends Ju{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new bl(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Id{constructor(e){this.value=e}clone(){return new Id(this.value.clone===void 0?this.value:this.value.clone())}}let Px=0;class Dx extends Ti{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Px++}),this.name="",this.usage=zo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Lx extends na{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Nx{constructor(e,t,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Kf=new je;class Ux{constructor(e,t,n=0,i=1/0){this.ray=new Xi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kf),this}intersectObject(e,t=!0,n=[]){return Mu(e,this,n,t),n.sort($f),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Mu(e[i],this,n,t);return n.sort($f),n}}function $f(r,e){return r.distance-e.distance}function Mu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Mu(s[o],e,t,!0)}}class Ox{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Fx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Fx(){this._document.hidden===!1&&this.reset()}class bu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bx{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Pd{constructor(e,t,n,i){Pd.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}const Jf=new se;class kx{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jf=new P,Qa=new P,As=new P,Cs=new P,Vh=new P,zx=new P,Hx=new P;class Dg{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){jf.subVectors(e,this.start),Qa.subVectors(this.end,this.start);const n=Qa.dot(Qa);let s=Qa.dot(jf)/n;return t&&(s=at(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=zx,n=Hx){const i=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,h=e.end;As.subVectors(l,a),Cs.subVectors(h,c),Vh.subVectors(a,c);const u=As.dot(As),d=Cs.dot(Cs),f=Cs.dot(Vh);if(u<=i&&d<=i)return t.copy(a),n.copy(c),t.sub(n),t.dot(t);if(u<=i)s=0,o=f/d,o=at(o,0,1);else{const p=As.dot(Vh);if(d<=i)o=0,s=at(-p/u,0,1);else{const v=As.dot(Cs),g=u*d-v*v;g!==0?s=at((v*f-p*d)/g,0,1):s=0,o=(v*s+f)/d,o<0?(o=0,s=at(-p/u,0,1)):o>1&&(o=1,s=at((v-p)/u,0,1))}}return t.copy(a).add(As.multiplyScalar(s)),n.copy(c).add(Cs.multiplyScalar(o)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Qf=new P;class Vx extends bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new dt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ge(i,3));const s=new vn({fog:!1,toneMapped:!1});this.cone=new fi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Qf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Qf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Qi=new P,ec=new je,Gh=new je;class Gx extends fi{constructor(e){const t=Lg(e),n=new dt,i=[],s=[];for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new Ge(i,3)),n.setAttribute("color",new Ge(s,3));const o=new vn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new Fe(255),c=new Fe(65280);this.setColors(a,c)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Gh.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(ec.multiplyMatrices(Gh,a.matrixWorld),Qi.setFromMatrixPosition(ec),i.setXYZ(o,Qi.x,Qi.y,Qi.z),ec.multiplyMatrices(Gh,a.parent.matrixWorld),Qi.setFromMatrixPosition(ec),i.setXYZ(o+1,Qi.x,Qi.y,Qi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,e.r,e.g,e.b),i.setXYZ(s+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Lg(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...Lg(r.children[t]));return e}class Wx extends Vt{constructor(e,t,n){const i=new ro(t,4,2),s=new En({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Xx=new P,ep=new Fe,tp=new Fe;class Yx extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new oa(t);i.rotateY(Math.PI*.5),this.material=new En({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new At(o,3)),this.add(new Vt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");ep.copy(this.light.color),tp.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?ep:tp;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Xx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class qx extends fi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Fe(n),i=new Fe(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const v=d===s?n:i;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const h=new dt;h.setAttribute("position",new Ge(c,3)),h.setAttribute("color",new Ge(l,3));const u=new vn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zx extends fi{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Fe(s),o=new Fe(o);const a=[],c=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const v=u&1?s:o;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){const d=u&1?s:o,f=e-e/n*u;for(let p=0;p<i;p++){let v=p/i*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;a.push(g,0,m),c.push(d.r,d.g,d.b),v=(p+1)/i*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,a.push(g,0,m),c.push(d.r,d.g,d.b)}}const l=new dt;l.setAttribute("position",new Ge(a,3)),l.setAttribute("color",new Ge(c,3));const h=new vn({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const np=new P,tc=new P,ip=new P;class Kx extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new dt;i.setAttribute("position",new Ge([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new vn({fog:!1,toneMapped:!1});this.lightPlane=new Wi(i,s),this.add(this.lightPlane),i=new dt,i.setAttribute("position",new Ge([0,0,0,0,0,1],3)),this.targetLine=new Wi(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),np.setFromMatrixPosition(this.light.matrixWorld),tc.setFromMatrixPosition(this.light.target.matrixWorld),ip.subVectors(tc,np),this.lightPlane.lookAt(tc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(tc),this.targetLine.scale.z=ip.length()}}const nc=new P,Gt=new Tl;class $x extends fi{constructor(e){const t=new dt,n=new vn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,v){c(p),c(v)}function c(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Ge(i,3)),t.setAttribute("color",new Ge(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Fe(16755200),h=new Fe(16711680),u=new Fe(43775),d=new Fe(16777215),f=new Fe(3355443);this.setColors(l,h,u,d,f)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,o;if(Gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===Bn)s=-1,o=1;else if(this.camera.coordinateSystem===$s)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Xt("c",t,e,Gt,0,0,s),Xt("t",t,e,Gt,0,0,o),Xt("n1",t,e,Gt,-n,-i,s),Xt("n2",t,e,Gt,n,-i,s),Xt("n3",t,e,Gt,-n,i,s),Xt("n4",t,e,Gt,n,i,s),Xt("f1",t,e,Gt,-n,-i,o),Xt("f2",t,e,Gt,n,-i,o),Xt("f3",t,e,Gt,-n,i,o),Xt("f4",t,e,Gt,n,i,o),Xt("u1",t,e,Gt,n*.7,i*1.1,s),Xt("u2",t,e,Gt,-n*.7,i*1.1,s),Xt("u3",t,e,Gt,0,i*2,s),Xt("cf1",t,e,Gt,-n,0,o),Xt("cf2",t,e,Gt,n,0,o),Xt("cf3",t,e,Gt,0,-i,o),Xt("cf4",t,e,Gt,0,i,o),Xt("cn1",t,e,Gt,-n,0,s),Xt("cn2",t,e,Gt,n,0,s),Xt("cn3",t,e,Gt,0,-i,s),Xt("cn4",t,e,Gt,0,i,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Xt(r,e,t,n,i,s,o){nc.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],nc.x,nc.y,nc.z)}}const ic=new qt;class Jx extends fi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new dt;s.setIndex(new At(n,1)),s.setAttribute("position",new At(i,3)),super(s,new vn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ic.setFromObject(this.object),ic.isEmpty())return;const e=ic.min,t=ic.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class jx extends fi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new dt;s.setIndex(new At(n,1)),s.setAttribute("position",new Ge(i,3)),super(s,new vn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qx extends Wi{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new dt;o.setAttribute("position",new Ge(s,3)),o.computeBoundingSphere(),super(o,new vn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new dt;c.setAttribute("position",new Ge(a,3)),c.computeBoundingSphere(),this.add(new Vt(c,new En({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const rp=new P;let rc,Wh;class ey extends bt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",rc===void 0&&(rc=new dt,rc.setAttribute("position",new Ge([0,0,0,0,1,0],3)),Wh=new sa(.5,1,5,1),Wh.translate(0,-.5,0)),this.position.copy(t),this.line=new Wi(rc,new vn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Vt(Wh,new En({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{rp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(rp,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ty extends fi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new dt;i.setAttribute("position",new Ge(t,3)),i.setAttribute("color",new Ge(n,3));const s=new vn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Fe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ny{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ll,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const S=[];for(let y=0,b=m.length;y<b;y++){const C=m[y],M=new qr;M.curves=C.curves,S.push(M)}return S}function n(m,S){const y=S.length;let b=!1;for(let C=y-1,M=0;M<y;C=M++){let N=S[C],D=S[M],E=D.x-N.x,w=D.y-N.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(N=S[M],E=-E,D=S[C],w=-w),m.y<N.y||m.y>D.y)continue;if(m.y===N.y){if(m.x===N.x)return!0}else{const L=w*(m.x-N.x)-E*(m.y-N.y);if(L===0)return!0;if(L<0)continue;b=!b}}else{if(m.y!==N.y)continue;if(D.x<=m.x&&m.x<=N.x||N.x<=m.x&&m.x<=D.x)return!0}}return b}const i=oi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new qr,c.curves=a.curves,l.push(c),l;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],p=0,v;d[p]=void 0,f[p]=[];for(let m=0,S=s.length;m<S;m++)a=s[m],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!h&&d[p]&&p++,d[p]={s:new qr,p:v},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:v[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,S=0;for(let y=0,b=d.length;y<b;y++)u[y]=[];for(let y=0,b=d.length;y<b;y++){const C=f[y];for(let M=0;M<C.length;M++){const N=C[M];let D=!0;for(let E=0;E<d.length;E++)n(N.p,d[E].p)&&(y!==E&&S++,D?(D=!1,u[E].push(N)):m=!0);D&&u[y].push(N)}}S>0&&m===!1&&(f=u)}let g;for(let m=0,S=d.length;m<S;m++){c=d[m].s,l.push(c),g=f[m];for(let y=0,b=g.length;y<b;y++)c.holes.push(g[y].h)}return l}}class Ng extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function iy(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function ry(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function sy(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function Su(r,e,t,n){const i=oy(n);switch(t){case Wu:return r*e;case sr:return r*e/i.components*i.byteLength;case ea:return r*e/i.components*i.byteLength;case rr:return r*e*2/i.components*i.byteLength;case vl:return r*e*2/i.components*i.byteLength;case Xu:return r*e*3/i.components*i.byteLength;case Yt:return r*e*4/i.components*i.byteLength;case xl:return r*e*4/i.components*i.byteLength;case Co:case Ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Io:case Po:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dc:case Nc:return Math.max(r,16)*Math.max(e,8)/4;case Pc:case Lc:return Math.max(r,8)*Math.max(e,8)/2;case Uc:case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case el:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tl:case nl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case il:case rl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oy(r){switch(r){case li:case zu:return{byteLength:1,components:1};case Ws:case Hu:case Nn:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case Gi:case ml:case jt:return{byteLength:4,components:1};case Vu:case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}class ay{static contain(e,t){return iy(e,t)}static cover(e,t){return ry(e,t)}static fill(e){return sy(e)}static getByteLength(e,t,n,i){return Su(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ug(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cy(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,my=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_y=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ny=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ib=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:ly,alphahash_pars_fragment:hy,alphamap_fragment:uy,alphamap_pars_fragment:dy,alphatest_fragment:fy,alphatest_pars_fragment:py,aomap_fragment:my,aomap_pars_fragment:gy,batching_pars_vertex:_y,batching_vertex:vy,begin_vertex:xy,beginnormal_vertex:yy,bsdfs:My,iridescence_fragment:by,bumpmap_pars_fragment:Sy,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:wy,clipping_planes_vertex:Ay,color_fragment:Cy,color_pars_fragment:Ry,color_pars_vertex:Iy,color_vertex:Py,common:Dy,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Uy,displacementmap_vertex:Oy,emissivemap_fragment:Fy,emissivemap_pars_fragment:By,colorspace_fragment:ky,colorspace_pars_fragment:zy,envmap_fragment:Hy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Gy,envmap_pars_vertex:Wy,envmap_physical_pars_fragment:tM,envmap_vertex:Xy,fog_vertex:Yy,fog_pars_vertex:qy,fog_fragment:Zy,fog_pars_fragment:Ky,gradientmap_pars_fragment:$y,lightmap_pars_fragment:Jy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Qy,lights_pars_begin:eM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:rM,lights_phong_pars_fragment:sM,lights_physical_fragment:oM,lights_physical_pars_fragment:aM,lights_fragment_begin:cM,lights_fragment_maps:lM,lights_fragment_end:hM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:pM,map_fragment:mM,map_pars_fragment:gM,map_particle_fragment:_M,map_particle_pars_fragment:vM,metalnessmap_fragment:xM,metalnessmap_pars_fragment:yM,morphinstance_vertex:MM,morphcolor_vertex:bM,morphnormal_vertex:SM,morphtarget_pars_vertex:TM,morphtarget_vertex:EM,normal_fragment_begin:wM,normal_fragment_maps:AM,normal_pars_fragment:CM,normal_pars_vertex:RM,normal_vertex:IM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:LM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:UM,opaque_fragment:OM,packing:FM,premultiplied_alpha_fragment:BM,project_vertex:kM,dithering_fragment:zM,dithering_pars_fragment:HM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:GM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:XM,shadowmap_vertex:YM,shadowmask_pars_fragment:qM,skinbase_vertex:ZM,skinning_pars_vertex:KM,skinning_vertex:$M,skinnormal_vertex:JM,specularmap_fragment:jM,specularmap_pars_fragment:QM,tonemapping_fragment:eb,tonemapping_pars_fragment:tb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ob,worldpos_vertex:ab,background_vert:cb,background_frag:lb,backgroundCube_vert:hb,backgroundCube_frag:ub,cube_vert:db,cube_frag:fb,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:gb,distanceRGBA_frag:_b,equirect_vert:vb,equirect_frag:xb,linedashed_vert:yb,linedashed_frag:Mb,meshbasic_vert:bb,meshbasic_frag:Sb,meshlambert_vert:Tb,meshlambert_frag:Eb,meshmatcap_vert:wb,meshmatcap_frag:Ab,meshnormal_vert:Cb,meshnormal_frag:Rb,meshphong_vert:Ib,meshphong_frag:Pb,meshphysical_vert:Db,meshphysical_frag:Lb,meshtoon_vert:Nb,meshtoon_frag:Ub,points_vert:Ob,points_frag:Fb,shadow_vert:Bb,shadow_frag:kb,sprite_vert:zb,sprite_frag:Hb},Oe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Yn={basic:{uniforms:bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:bn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:bn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:bn([Oe.points,Oe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:bn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:bn([Oe.common,Oe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:bn([Oe.sprite,Oe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:bn([Oe.common,Oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:bn([Oe.lights,Oe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Yn.physical={uniforms:bn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const sc={r:0,b:0,g:0},Cr=new zn,Vb=new je;function Gb(r,e,t,n,i,s,o){const a=new Fe(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function p(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function v(y){let b=!1;const C=p(y);C===null?m(a,c):C&&C.isColor&&(m(C,1),b=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,b){const C=p(b);C&&(C.isCubeTexture||C.mapping===to)?(h===void 0&&(h=new Vt(new ns(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:js(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cr.copy(b.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(Cr)),h.material.toneMapped=vt.getTransfer(C.colorSpace)!==Rt,(u!==C||d!==C.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Vt(new io(2,2),new hi({name:"BackgroundMaterial",uniforms:js(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=vt.getTransfer(C.colorSpace)!==Rt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=C,d=C.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(sc,Hm(r)),n.buffers.color.setClear(sc.r,sc.g,sc.b,b,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),c=b,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:v,addToRenderList:g,dispose:S}}function Wb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(w,L,z,G,W){let J=!1;const q=u(G,z,L);s!==q&&(s=q,l(s.object)),J=f(w,G,z,W),J&&p(w,G,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,b(w,L,z,G),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function u(w,L,z){const G=z.wireframe===!0;let W=n[w.id];W===void 0&&(W={},n[w.id]=W);let J=W[L.id];J===void 0&&(J={},W[L.id]=J);let q=J[G];return q===void 0&&(q=d(c()),J[G]=q),q}function d(w){const L=[],z=[],G=[];for(let W=0;W<t;W++)L[W]=0,z[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:G,object:w,attributes:{},index:null}}function f(w,L,z,G){const W=s.attributes,J=L.attributes;let q=0;const re=z.getAttributes();for(const j in re)if(re[j].location>=0){const pe=W[j];let Ce=J[j];if(Ce===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Ce=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Ce=w.instanceColor)),pe===void 0||pe.attribute!==Ce||Ce&&pe.data!==Ce.data)return!0;q++}return s.attributesNum!==q||s.index!==G}function p(w,L,z,G){const W={},J=L.attributes;let q=0;const re=z.getAttributes();for(const j in re)if(re[j].location>=0){let pe=J[j];pe===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const Ce={};Ce.attribute=pe,pe&&pe.data&&(Ce.data=pe.data),W[j]=Ce,q++}s.attributes=W,s.attributesNum=q,s.index=G}function v(){const w=s.newAttributes;for(let L=0,z=w.length;L<z;L++)w[L]=0}function g(w){m(w,0)}function m(w,L){const z=s.newAttributes,G=s.enabledAttributes,W=s.attributeDivisors;z[w]=1,G[w]===0&&(r.enableVertexAttribArray(w),G[w]=1),W[w]!==L&&(r.vertexAttribDivisor(w,L),W[w]=L)}function S(){const w=s.newAttributes,L=s.enabledAttributes;for(let z=0,G=L.length;z<G;z++)L[z]!==w[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function y(w,L,z,G,W,J,q){q===!0?r.vertexAttribIPointer(w,L,z,W,J):r.vertexAttribPointer(w,L,z,G,W,J)}function b(w,L,z,G){v();const W=G.attributes,J=z.getAttributes(),q=L.defaultAttributeValues;for(const re in J){const j=J[re];if(j.location>=0){let ue=W[re];if(ue===void 0&&(re==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),re==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const pe=ue.normalized,Ce=ue.itemSize,Ue=e.get(ue);if(Ue===void 0)continue;const ze=Ue.buffer,Qe=Ue.type,et=Ue.bytesPerElement,H=Qe===r.INT||Qe===r.UNSIGNED_INT||ue.gpuType===ml;if(ue.isInterleavedBufferAttribute){const X=ue.data,ke=X.stride,Ke=ue.offset;if(X.isInstancedInterleavedBuffer){for(let Ve=0;Ve<j.locationSize;Ve++)m(j.location+Ve,X.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ve=0;Ve<j.locationSize;Ve++)g(j.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let Ve=0;Ve<j.locationSize;Ve++)y(j.location+Ve,Ce/j.locationSize,Qe,pe,ke*et,(Ke+Ce/j.locationSize*Ve)*et,H)}else{if(ue.isInstancedBufferAttribute){for(let X=0;X<j.locationSize;X++)m(j.location+X,ue.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let X=0;X<j.locationSize;X++)g(j.location+X);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let X=0;X<j.locationSize;X++)y(j.location+X,Ce/j.locationSize,Qe,pe,Ce*et,Ce/j.locationSize*X*et,H)}}else if(q!==void 0){const pe=q[re];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(j.location,pe);break;case 3:r.vertexAttrib3fv(j.location,pe);break;case 4:r.vertexAttrib4fv(j.location,pe);break;default:r.vertexAttrib1fv(j.location,pe)}}}}S()}function C(){D();for(const w in n){const L=n[w];for(const z in L){const G=L[z];for(const W in G)h(G[W].object),delete G[W];delete L[z]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const z in L){const G=L[z];for(const W in G)h(G[W].object),delete G[W];delete L[z]}delete n[w.id]}function N(w){for(const L in n){const z=n[L];if(z[w.id]===void 0)continue;const G=z[w.id];for(const W in G)h(G[W].object),delete G[W];delete z[w.id]}}function D(){E(),o=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function Xb(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Yb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(N){return!(N!==Yt&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const D=N===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==li&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==jt&&!D)}function c(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:C,maxSamples:M}}function qb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Li,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):l();else{const S=s?0:n,y=S*4;let b=m.clippingState||null;c.value=b,b=h(p,d,y,f);for(let C=0;C!==y;++C)b[C]=t[C];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,p!==!0||g===null){const m=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,b=f;y!==v;++y,b+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Zb(r){let e=new WeakMap;function t(o,a){return a===Vs?o.mapping=Vi:a===Fo&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vs||a===Fo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gm(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ls=4,sp=[.125,.215,.35,.446,.526,.582],Ur=20,Xh=new oo,op=new Fe;let Yh=null,qh=0,Zh=0,Kh=!1;const Lr=(1+Math.sqrt(5))/2,Rs=1/Lr,ap=[new P(-Lr,Rs,0),new P(Lr,Rs,0),new P(-Rs,0,Lr),new P(Rs,0,Lr),new P(0,Lr,-Rs),new P(0,Lr,Rs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Kb=new P;class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Kb}=s;Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,qh,Zh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Nn,format:Yt,colorSpace:Ut,depthBuffer:!1},i=cp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$b(s)),this._blurMaterial=Jb(s,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Xh)}_sceneToCubeUV(e,t,n,i,s){const c=new tn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(op),u.toneMapping=ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new En({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new Vt(new ns,v);let m=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,m=!0):(v.color.copy(op),m=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):b===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const C=this._cubeSize;oc(i,b*C,y>2?C:0,C,C),u.setRenderTarget(i),m&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vi||e.mapping===lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;oc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ap[(i-s-1)%ap.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ur-1),v=s/p,g=isFinite(s)?1+Math.floor(h*v):Ur;g>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ur}`);const m=[];let S=0;for(let N=0;N<Ur;++N){const D=N/v,E=Math.exp(-D*D/2);m.push(E),N===0?S+=E:N<g&&(S+=2*E)}for(let N=0;N<m.length;N++)m[N]=m[N]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const b=this._sizeLods[i],C=3*b*(i>y-Ls?i-y+Ls:0),M=4*(this._cubeSize-b);oc(t,C,M,3*b,2*b),c.setRenderTarget(t),c.render(u,Xh)}}function $b(r){const e=[],t=[],n=[];let i=r;const s=r-Ls+1+sp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Ls?c=sp[o-r+Ls-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,S=new Float32Array(v*p*f),y=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let M=0;M<f;M++){const N=M%3*2/3-1,D=M>2?0:-1,E=[N,D,0,N+2/3,D,0,N+2/3,D+1,0,N,D,0,N+2/3,D+1,0,N,D+1,0];S.set(E,v*p*M),y.set(d,g*p*M);const w=[M,M,M,M,M,M];b.set(w,m*p*M)}const C=new dt;C.setAttribute("position",new At(S,v)),C.setAttribute("uv",new At(y,g)),C.setAttribute("faceIndex",new At(b,m)),e.push(C),i>Ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cp(r,e,t){const n=new Si(r,e,t);return n.texture.mapping=to,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Jb(r,e,t){const n=new Float32Array(Ur),i=new P(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lp(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function hp(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vs||c===Fo,h=c===Vi||c===lr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Tu(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Tu(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function eS(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let y=0,b=S.length;y<b;y+=3){const C=S[y+0],M=S[y+1],N=S[y+2];d.push(C,M,M,N,N,C)}}else if(p!==void 0){const S=p.array;v=p.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const C=y+0,M=y+1,N=y+2;d.push(C,M,M,N,N,C)}}else return;const g=new(Fm(d)?Qu:ju)(d,1);g.version=v;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*o,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,p);let m=0;for(let S=0;S<p;S++)m+=f[S]*v[S];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function nS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function iS(r,e,t){const n=new WeakMap,i=new xt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let b=a.attributes.position.count*y,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*C*4*u),N=new Ml(M,b,C,u);N.type=jt,N.needsUpdate=!0;const D=y*4;for(let w=0;w<u;w++){const L=g[w],z=m[w],G=S[w],W=b*C*4*w;for(let J=0;J<L.count;J++){const q=J*D;f===!0&&(i.fromBufferAttribute(L,J),M[W+q+0]=i.x,M[W+q+1]=i.y,M[W+q+2]=i.z,M[W+q+3]=0),p===!0&&(i.fromBufferAttribute(z,J),M[W+q+4]=i.x,M[W+q+5]=i.y,M[W+q+6]=i.z,M[W+q+7]=0),v===!0&&(i.fromBufferAttribute(G,J),M[W+q+8]=i.x,M[W+q+9]=i.y,M[W+q+10]=i.z,M[W+q+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:N,size:new se(b,C)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",p),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function rS(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Og=new Bt,up=new ad(1,1),Fg=new Ml,Bg=new bl,kg=new ta,dp=[],fp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function ao(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=dp[i];if(s===void 0&&(s=new Float32Array(i),dp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xl(r,e){let t=fp[e];t===void 0&&(t=new Int32Array(e),fp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function oS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function aS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function cS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function lS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;gp.set(n),r.uniformMatrix2fv(this.addr,!1,gp),on(t,n)}}function hS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;mp.set(n),r.uniformMatrix3fv(this.addr,!1,mp),on(t,n)}}function uS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;pp.set(n),r.uniformMatrix4fv(this.addr,!1,pp),on(t,n)}}function dS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function pS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function mS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function gS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function vS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function yS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(up.compareFunction=Zu,s=up):s=Og,t.setTexture2D(e||s,i)}function MS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bg,i)}function bS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kg,i)}function SS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fg,i)}function TS(r){switch(r){case 5126:return sS;case 35664:return oS;case 35665:return aS;case 35666:return cS;case 35674:return lS;case 35675:return hS;case 35676:return uS;case 5124:case 35670:return dS;case 35667:case 35671:return fS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return _S;case 36295:return vS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return SS}}function ES(r,e){r.uniform1fv(this.addr,e)}function wS(r,e){const t=ao(e,this.size,2);r.uniform2fv(this.addr,t)}function AS(r,e){const t=ao(e,this.size,3);r.uniform3fv(this.addr,t)}function CS(r,e){const t=ao(e,this.size,4);r.uniform4fv(this.addr,t)}function RS(r,e){const t=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IS(r,e){const t=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function PS(r,e){const t=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function DS(r,e){r.uniform1iv(this.addr,e)}function LS(r,e){r.uniform2iv(this.addr,e)}function NS(r,e){r.uniform3iv(this.addr,e)}function US(r,e){r.uniform4iv(this.addr,e)}function OS(r,e){r.uniform1uiv(this.addr,e)}function FS(r,e){r.uniform2uiv(this.addr,e)}function BS(r,e){r.uniform3uiv(this.addr,e)}function kS(r,e){r.uniform4uiv(this.addr,e)}function zS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Og,s[o])}function HS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bg,s[o])}function VS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kg,s[o])}function GS(r,e,t){const n=this.cache,i=e.length,s=Xl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Fg,s[o])}function WS(r){switch(r){case 5126:return ES;case 35664:return wS;case 35665:return AS;case 35666:return CS;case 35674:return RS;case 35675:return IS;case 35676:return PS;case 5124:case 35670:return DS;case 35667:case 35671:return LS;case 35668:case 35672:return NS;case 35669:case 35673:return US;case 5125:return OS;case 36294:return FS;case 36295:return BS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return GS}}class XS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TS(t.type)}}class YS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WS(t.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function _p(r,e){r.seq.push(e),r.map[e.id]=e}function ZS(r,e,t){const n=r.name,i=n.length;for($h.lastIndex=0;;){const s=$h.exec(n),o=$h.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){_p(t,l===void 0?new XS(a,r,e):new YS(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new qS(a),_p(t,u)),t=u}}}class mc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ZS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const KS=37297;let $S=0;function JS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const xp=new ft;function jS(r){vt._getMatrix(xp,vt.workingColorSpace,r);const e=`mat3( ${xp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case ko:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+JS(r.getShaderSource(e),a)}else return s}function QS(r,e){const t=jS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eT(r,e){let t;switch(e){case gm:t="Linear";break;case _m:t="Reinhard";break;case vm:t="Cineon";break;case xm:t="ACESFilmic";break;case Ic:t="AgX";break;case Mm:t="Neutral";break;case ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ac=new P;function tT(){vt.getLuminanceCoefficients(ac);const r=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function iT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function wo(r){return r!==""}function Mp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(r){return r.replace(sT,aT)}const oT=new Map;function aT(r,e){let t=rt[e];if(t===void 0){const n=oT.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eu(t)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(r){return r.replace(cT,lT)}function lT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function uT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vi:case lr:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function fT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case pm:e="ENVMAP_BLENDING_MIX";break;case mm:e="ENVMAP_BLENDING_ADD";break}return e}function pT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=hT(t),l=uT(t),h=dT(t),u=fT(t),d=pT(t),f=nT(t),p=iT(s),v=i.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(g=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?rt.tonemapping_pars_fragment:"",t.toneMapping!==ki?eT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,QS("linearToOutputTexel",t.outputColorSpace),tT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=Eu(o),o=Mp(o,t),o=bp(o,t),a=Eu(a),a=Mp(a,t),a=bp(a,t),o=Sp(o),a=Sp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+g+o,b=S+m+a,C=vp(i,i.VERTEX_SHADER,y),M=vp(i,i.FRAGMENT_SHADER,b);i.attachShader(v,C),i.attachShader(v,M),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function N(L){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(v)||"",G=i.getShaderInfoLog(C)||"",W=i.getShaderInfoLog(M)||"",J=z.trim(),q=G.trim(),re=W.trim();let j=!0,ue=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,M);else{const pe=yp(i,C,"vertex"),Ce=yp(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+pe+`
`+Ce)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||re==="")&&(ue=!1);ue&&(L.diagnostics={runnable:j,programLog:J,vertexShader:{log:q,prefix:g},fragmentShader:{log:re,prefix:m}})}i.deleteShader(C),i.deleteShader(M),D=new mc(i,v),E=rT(i,v)}let D;this.getUniforms=function(){return D===void 0&&N(this),D};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,KS)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$S++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=M,this}let gT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vT(e),t.set(e,n)),n}}class vT{constructor(e){this.id=gT++,this.code=e,this.usedTimes=0}}function xT(r,e,t,n,i,s,o){const a=new Sl,c=new _T,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,w,L,z,G){const W=z.fog,J=G.geometry,q=E.isMeshStandardMaterial?z.environment:null,re=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),j=re&&re.mapping===to?re.image.height:null,ue=p[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ce=pe!==void 0?pe.length:0;let Ue=0;J.morphAttributes.position!==void 0&&(Ue=1),J.morphAttributes.normal!==void 0&&(Ue=2),J.morphAttributes.color!==void 0&&(Ue=3);let ze,Qe,et,H;if(ue){const St=Yn[ue];ze=St.vertexShader,Qe=St.fragmentShader}else ze=E.vertexShader,Qe=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),H=c.getFragmentShaderID(E);const X=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),Ke=G.isInstancedMesh===!0,Ve=G.isBatchedMesh===!0,ut=!!E.map,Tt=!!E.matcap,k=!!re,_e=!!E.aoMap,de=!!E.lightMap,he=!!E.bumpMap,ce=!!E.normalMap,Ie=!!E.displacementMap,ye=!!E.emissiveMap,Pe=!!E.metalnessMap,ct=!!E.roughnessMap,nt=E.anisotropy>0,U=E.clearcoat>0,A=E.dispersion>0,K=E.iridescence>0,te=E.sheen>0,ve=E.transmission>0,ie=nt&&!!E.anisotropyMap,We=U&&!!E.clearcoatMap,we=U&&!!E.clearcoatNormalMap,Xe=U&&!!E.clearcoatRoughnessMap,Ye=K&&!!E.iridescenceMap,be=K&&!!E.iridescenceThicknessMap,Re=te&&!!E.sheenColorMap,Ze=te&&!!E.sheenRoughnessMap,$e=!!E.specularMap,De=!!E.specularColorMap,Je=!!E.specularIntensityMap,V=ve&&!!E.transmissionMap,Ee=ve&&!!E.thicknessMap,Q=!!E.gradientMap,He=!!E.alphaMap,Se=E.alphaTest>0,fe=!!E.alphaHash,qe=!!E.extensions;let lt=ki;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Ct={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:Qe,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&G._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&G.instanceColor!==null,instancingMorph:Ke&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?r.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ut,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:Tt,envMap:k,envMapMode:k&&re.mapping,envMapCubeUVHeight:j,aoMap:_e,lightMap:de,bumpMap:he,normalMap:ce,displacementMap:d&&Ie,emissiveMap:ye,normalMapObjectSpace:ce&&E.normalMapType===Rm,normalMapTangentSpace:ce&&E.normalMapType===dr,metalnessMap:Pe,roughnessMap:ct,anisotropy:nt,anisotropyMap:ie,clearcoat:U,clearcoatMap:We,clearcoatNormalMap:we,clearcoatRoughnessMap:Xe,dispersion:A,iridescence:K,iridescenceMap:Ye,iridescenceThicknessMap:be,sheen:te,sheenColorMap:Re,sheenRoughnessMap:Ze,specularMap:$e,specularColorMap:De,specularIntensityMap:Je,transmission:ve,transmissionMap:V,thicknessMap:Ee,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Xr&&E.alphaToCoverage===!1,alphaMap:He,alphaTest:Se,alphaHash:fe,combine:E.combine,mapUv:ut&&v(E.map.channel),aoMapUv:_e&&v(E.aoMap.channel),lightMapUv:de&&v(E.lightMap.channel),bumpMapUv:he&&v(E.bumpMap.channel),normalMapUv:ce&&v(E.normalMap.channel),displacementMapUv:Ie&&v(E.displacementMap.channel),emissiveMapUv:ye&&v(E.emissiveMap.channel),metalnessMapUv:Pe&&v(E.metalnessMap.channel),roughnessMapUv:ct&&v(E.roughnessMap.channel),anisotropyMapUv:ie&&v(E.anisotropyMap.channel),clearcoatMapUv:We&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&v(E.sheenRoughnessMap.channel),specularMapUv:$e&&v(E.specularMap.channel),specularColorMapUv:De&&v(E.specularColorMap.channel),specularIntensityMapUv:Je&&v(E.specularIntensityMap.channel),transmissionMapUv:V&&v(E.transmissionMap.channel),thicknessMapUv:Ee&&v(E.thicknessMap.channel),alphaMapUv:He&&v(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ce||nt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(ut||He),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ke,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&vt.getTransfer(E.map.colorSpace)===Rt,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&vt.getTransfer(E.emissiveMap.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===si,flipSided:E.side===wn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&E.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)w.push(L),w.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(w,E),y(w,E),w.push(r.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function S(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function y(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){const w=p[E.type];let L;if(w){const z=Yn[w];L=ed.clone(z.uniforms)}else L=E.uniforms;return L}function C(E,w){let L;for(let z=0,G=h.length;z<G;z++){const W=h[z];if(W.cacheKey===w){L=W,++L.usedTimes;break}}return L===void 0&&(L=new mT(r,w,E,s),h.push(L)),L}function M(E){if(--E.usedTimes===0){const w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function N(E){c.remove(E)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:C,releaseProgram:M,releaseShaderCache:N,programs:h,dispose:D}}function yT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function MT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ep(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,p,v,g){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),e++,m}function a(u,d,f,p,v,g){const m=o(u,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,p,v,g){const m=o(u,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||MT),n.length>1&&n.sort(d||Ep),i.length>1&&i.sort(d||Ep)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function bT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new wp,r.set(n,[o])):i>=s.length?(o=new wp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ST(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function TT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ET=0;function wT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function AT(r){const e=new ST,t=TT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,s=new je,o=new je;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,S=0,y=0,b=0,C=0,M=0,N=0;l.sort(wT);for(let E=0,w=l.length;E<w;E++){const L=l[E],z=L.color,G=L.intensity,W=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*G,u+=z.g*G,d+=z.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],G);N++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const re=L.shadow,j=t.get(L);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[v]=q;const re=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,re.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[v]=re.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=J,b++}v++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=q,g++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const re=L.shadow,j=t.get(L);j.shadowIntensity=re.intensity,j.shadowBias=re.bias,j.shadowNormalBias=re.normalBias,j.shadowRadius=re.radius,j.shadowMapSize=re.mapSize,j.shadowCameraNear=re.camera.near,j.shadowCameraFar=re.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=L.shadow.matrix,y++}n.point[p]=q,p++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[m]=q,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==C||D.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=N,D.directionalLength=f,D.pointLength=p,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=C,D.numLightProbes=N,n.version=ET++)}function c(l,h){let u=0,d=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const y=l[m];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Ap(r){const e=new AT(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function CT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Ap(r),e.set(i,[a])):s>=o.length?(a=new Ap(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const RT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PT(r,e,t){let n=new no;const i=new se,s=new se,o=new xt,a=new md({depthPacking:Cm}),c=new gd,l={},h=t.maxTextureSize,u={[bi]:wn,[wn]:bi,[si]:si},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:RT,fragmentShader:IT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new dt;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(M,N,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const E=r.getRenderTarget(),w=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=m!==vi&&this.type===vi,W=m===vi&&this.type!==vi;for(let J=0,q=M.length;J<q;J++){const re=M[J],j=re.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const ue=j.getFrameExtents();if(i.multiply(ue),s.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ue.x),i.x=s.x*ue.x,j.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ue.y),i.y=s.y*ue.y,j.mapSize.y=s.y)),j.map===null||G===!0||W===!0){const Ce=this.type!==vi?{minFilter:nn,magFilter:nn}:{};j.map!==null&&j.map.dispose(),j.map=new Si(i.x,i.y,Ce),j.map.texture.name=re.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const pe=j.getViewportCount();for(let Ce=0;Ce<pe;Ce++){const Ue=j.getViewport(Ce);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),z.viewport(o),j.updateMatrices(re,Ce),n=j.getFrustum(),b(N,D,j.camera,re,this.type)}j.isPointLightShadow!==!0&&this.type===vi&&S(j,D),j.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(E,w,L)};function S(M,N){const D=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Si(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(N,null,D,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(N,null,D,f,v,null)}function y(M,N,D,E){let w=null;const L=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)w=L;else if(w=D.isPointLight===!0?c:a,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const z=w.uuid,G=N.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let J=W[G];J===void 0&&(J=w.clone(),W[G]=J,N.addEventListener("dispose",C)),w=J}if(w.visible=N.visible,w.wireframe=N.wireframe,E===vi?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:u[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=r.properties.get(w);z.light=D}return w}function b(M,N,D,E,w){if(M.visible===!1)return;if(M.layers.test(N.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===vi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const G=e.update(M),W=M.material;if(Array.isArray(W)){const J=G.groups;for(let q=0,re=J.length;q<re;q++){const j=J[q],ue=W[j.materialIndex];if(ue&&ue.visible){const pe=y(M,ue,E,w);M.onBeforeShadow(r,M,N,D,G,pe,j),r.renderBufferDirect(D,null,G,pe,M,j),M.onAfterShadow(r,M,N,D,G,pe,j)}}}else if(W.visible){const J=y(M,W,E,w);M.onBeforeShadow(r,M,N,D,G,J,null),r.renderBufferDirect(D,null,G,J,M,null),M.onAfterShadow(r,M,N,D,G,J,null)}}const z=M.children;for(let G=0,W=z.length;G<W;G++)b(z[G],N,D,E,w)}function C(M){M.target.removeEventListener("dispose",C);for(const D in l){const E=l[D],w=M.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const DT={[Sc]:Tc,[Ec]:Cc,[wc]:Rc,[Zr]:Ac,[Tc]:Sc,[Cc]:Ec,[Rc]:wc,[Ac]:Zr};function LT(r,e){function t(){let V=!1;const Ee=new xt;let Q=null;const He=new xt(0,0,0,0);return{setMask:function(Se){Q!==Se&&!V&&(r.colorMask(Se,Se,Se,Se),Q=Se)},setLocked:function(Se){V=Se},setClear:function(Se,fe,qe,lt,Ct){Ct===!0&&(Se*=lt,fe*=lt,qe*=lt),Ee.set(Se,fe,qe,lt),He.equals(Ee)===!1&&(r.clearColor(Se,fe,qe,lt),He.copy(Ee))},reset:function(){V=!1,Q=null,He.set(-1,0,0,0)}}}function n(){let V=!1,Ee=!1,Q=null,He=null,Se=null;return{setReversed:function(fe){if(Ee!==fe){const qe=e.get("EXT_clip_control");fe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ee=fe;const lt=Se;Se=null,this.setClear(lt)}},getReversed:function(){return Ee},setTest:function(fe){fe?X(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(fe){Q!==fe&&!V&&(r.depthMask(fe),Q=fe)},setFunc:function(fe){if(Ee&&(fe=DT[fe]),He!==fe){switch(fe){case Sc:r.depthFunc(r.NEVER);break;case Tc:r.depthFunc(r.ALWAYS);break;case Ec:r.depthFunc(r.LESS);break;case Zr:r.depthFunc(r.LEQUAL);break;case wc:r.depthFunc(r.EQUAL);break;case Ac:r.depthFunc(r.GEQUAL);break;case Cc:r.depthFunc(r.GREATER);break;case Rc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=fe}},setLocked:function(fe){V=fe},setClear:function(fe){Se!==fe&&(Ee&&(fe=1-fe),r.clearDepth(fe),Se=fe)},reset:function(){V=!1,Q=null,He=null,Se=null,Ee=!1}}}function i(){let V=!1,Ee=null,Q=null,He=null,Se=null,fe=null,qe=null,lt=null,Ct=null;return{setTest:function(St){V||(St?X(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(St){Ee!==St&&!V&&(r.stencilMask(St),Ee=St)},setFunc:function(St,Cn,yn){(Q!==St||He!==Cn||Se!==yn)&&(r.stencilFunc(St,Cn,yn),Q=St,He=Cn,Se=yn)},setOp:function(St,Cn,yn){(fe!==St||qe!==Cn||lt!==yn)&&(r.stencilOp(St,Cn,yn),fe=St,qe=Cn,lt=yn)},setLocked:function(St){V=St},setClear:function(St){Ct!==St&&(r.clearStencil(St),Ct=St)},reset:function(){V=!1,Ee=null,Q=null,He=null,Se=null,fe=null,qe=null,lt=null,Ct=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,S=null,y=null,b=null,C=null,M=null,N=new Fe(0,0,0),D=0,E=!1,w=null,L=null,z=null,G=null,W=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,re=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=re>=1):j.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=re>=2);let ue=null,pe={};const Ce=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),ze=new xt().fromArray(Ce),Qe=new xt().fromArray(Ue);function et(V,Ee,Q,He){const Se=new Uint8Array(4),fe=r.createTexture();r.bindTexture(V,fe),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<Q;qe++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ee,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Se):r.texImage2D(Ee+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Se);return fe}const H={};H[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),H[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(r.DEPTH_TEST),o.setFunc(Zr),he(!1),ce(hu),X(r.CULL_FACE),_e(Bi);function X(V){h[V]!==!0&&(r.enable(V),h[V]=!0)}function ke(V){h[V]!==!1&&(r.disable(V),h[V]=!1)}function Ke(V,Ee){return u[V]!==Ee?(r.bindFramebuffer(V,Ee),u[V]=Ee,V===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Ee),V===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ve(V,Ee){let Q=f,He=!1;if(V){Q=d.get(Ee),Q===void 0&&(Q=[],d.set(Ee,Q));const Se=V.textures;if(Q.length!==Se.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,qe=Se.length;fe<qe;fe++)Q[fe]=r.COLOR_ATTACHMENT0+fe;Q.length=Se.length,He=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,He=!0);He&&r.drawBuffers(Q)}function ut(V){return p!==V?(r.useProgram(V),p=V,!0):!1}const Tt={[ir]:r.FUNC_ADD,[Jp]:r.FUNC_SUBTRACT,[jp]:r.FUNC_REVERSE_SUBTRACT};Tt[Qp]=r.MIN,Tt[em]=r.MAX;const k={[tm]:r.ZERO,[nm]:r.ONE,[im]:r.SRC_COLOR,[Mc]:r.SRC_ALPHA,[lm]:r.SRC_ALPHA_SATURATE,[am]:r.DST_COLOR,[sm]:r.DST_ALPHA,[rm]:r.ONE_MINUS_SRC_COLOR,[bc]:r.ONE_MINUS_SRC_ALPHA,[cm]:r.ONE_MINUS_DST_COLOR,[om]:r.ONE_MINUS_DST_ALPHA,[hm]:r.CONSTANT_COLOR,[um]:r.ONE_MINUS_CONSTANT_COLOR,[dm]:r.CONSTANT_ALPHA,[fm]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(V,Ee,Q,He,Se,fe,qe,lt,Ct,St){if(V===Bi){v===!0&&(ke(r.BLEND),v=!1);return}if(v===!1&&(X(r.BLEND),v=!0),V!==$p){if(V!==g||St!==E){if((m!==ir||b!==ir)&&(r.blendEquation(r.FUNC_ADD),m=ir,b=ir),St)switch(V){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uu:r.blendFunc(r.ONE,r.ONE);break;case du:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case du:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,y=null,C=null,M=null,N.set(0,0,0),D=0,g=V,E=St}return}Se=Se||Ee,fe=fe||Q,qe=qe||He,(Ee!==m||Se!==b)&&(r.blendEquationSeparate(Tt[Ee],Tt[Se]),m=Ee,b=Se),(Q!==S||He!==y||fe!==C||qe!==M)&&(r.blendFuncSeparate(k[Q],k[He],k[fe],k[qe]),S=Q,y=He,C=fe,M=qe),(lt.equals(N)===!1||Ct!==D)&&(r.blendColor(lt.r,lt.g,lt.b,Ct),N.copy(lt),D=Ct),g=V,E=!1}function de(V,Ee){V.side===si?ke(r.CULL_FACE):X(r.CULL_FACE);let Q=V.side===wn;Ee&&(Q=!Q),he(Q),V.blending===Xr&&V.transparent===!1?_e(Bi):_e(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const He=V.stencilWrite;a.setTest(He),He&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ye(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?X(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(V){w!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),w=V)}function ce(V){V!==Zp?(X(r.CULL_FACE),V!==L&&(V===hu?r.cullFace(r.BACK):V===Kp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),L=V}function Ie(V){V!==z&&(q&&r.lineWidth(V),z=V)}function ye(V,Ee,Q){V?(X(r.POLYGON_OFFSET_FILL),(G!==Ee||W!==Q)&&(r.polygonOffset(Ee,Q),G=Ee,W=Q)):ke(r.POLYGON_OFFSET_FILL)}function Pe(V){V?X(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function ct(V){V===void 0&&(V=r.TEXTURE0+J-1),ue!==V&&(r.activeTexture(V),ue=V)}function nt(V,Ee,Q){Q===void 0&&(ue===null?Q=r.TEXTURE0+J-1:Q=ue);let He=pe[Q];He===void 0&&(He={type:void 0,texture:void 0},pe[Q]=He),(He.type!==V||He.texture!==Ee)&&(ue!==Q&&(r.activeTexture(Q),ue=Q),r.bindTexture(V,Ee||H[V]),He.type=V,He.texture=Ee)}function U(){const V=pe[ue];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(V){ze.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ze.copy(V))}function Ze(V){Qe.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Qe.copy(V))}function $e(V,Ee){let Q=l.get(Ee);Q===void 0&&(Q=new WeakMap,l.set(Ee,Q));let He=Q.get(V);He===void 0&&(He=r.getUniformBlockIndex(Ee,V.name),Q.set(V,He))}function De(V,Ee){const He=l.get(Ee).get(V);c.get(Ee)!==He&&(r.uniformBlockBinding(Ee,He,V.__bindingPointIndex),c.set(Ee,He))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ue=null,pe={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,S=null,y=null,b=null,C=null,M=null,N=new Fe(0,0,0),D=0,E=!1,w=null,L=null,z=null,G=null,W=null,ze.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:ke,bindFramebuffer:Ke,drawBuffers:Ve,useProgram:ut,setBlending:_e,setMaterial:de,setFlipSided:he,setCullFace:ce,setLineWidth:Ie,setPolygonOffset:ye,setScissorTest:Pe,activeTexture:ct,bindTexture:nt,unbindTexture:U,compressedTexImage2D:A,compressedTexImage3D:K,texImage2D:Ye,texImage3D:be,updateUBOMapping:$e,uniformBlockBinding:De,texStorage2D:we,texStorage3D:Xe,texSubImage2D:te,texSubImage3D:ve,compressedTexSubImage2D:ie,compressedTexSubImage3D:We,scissor:Re,viewport:Ze,reset:Je}}function NT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(U,A){return f?new OffscreenCanvas(U,A):Ho("canvas")}function v(U,A,K){let te=1;const ve=nt(U);if((ve.width>K||ve.height>K)&&(te=K/Math.max(ve.width,ve.height)),te<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ie=Math.floor(te*ve.width),We=Math.floor(te*ve.height);u===void 0&&(u=p(ie,We));const we=A?p(ie,We):u;return we.width=ie,we.height=We,we.getContext("2d").drawImage(U,0,0,ie,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+ie+"x"+We+")."),we}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function g(U){return U.generateMipmaps}function m(U){r.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(U,A,K,te,ve=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ie=A;if(A===r.RED&&(K===r.FLOAT&&(ie=r.R32F),K===r.HALF_FLOAT&&(ie=r.R16F),K===r.UNSIGNED_BYTE&&(ie=r.R8)),A===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.R8UI),K===r.UNSIGNED_SHORT&&(ie=r.R16UI),K===r.UNSIGNED_INT&&(ie=r.R32UI),K===r.BYTE&&(ie=r.R8I),K===r.SHORT&&(ie=r.R16I),K===r.INT&&(ie=r.R32I)),A===r.RG&&(K===r.FLOAT&&(ie=r.RG32F),K===r.HALF_FLOAT&&(ie=r.RG16F),K===r.UNSIGNED_BYTE&&(ie=r.RG8)),A===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RG8UI),K===r.UNSIGNED_SHORT&&(ie=r.RG16UI),K===r.UNSIGNED_INT&&(ie=r.RG32UI),K===r.BYTE&&(ie=r.RG8I),K===r.SHORT&&(ie=r.RG16I),K===r.INT&&(ie=r.RG32I)),A===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),K===r.UNSIGNED_INT&&(ie=r.RGB32UI),K===r.BYTE&&(ie=r.RGB8I),K===r.SHORT&&(ie=r.RGB16I),K===r.INT&&(ie=r.RGB32I)),A===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),K===r.UNSIGNED_INT&&(ie=r.RGBA32UI),K===r.BYTE&&(ie=r.RGBA8I),K===r.SHORT&&(ie=r.RGBA16I),K===r.INT&&(ie=r.RGBA32I)),A===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(ie=r.R11F_G11F_B10F)),A===r.RGBA){const We=ve?ko:vt.getTransfer(te);K===r.FLOAT&&(ie=r.RGBA32F),K===r.HALF_FLOAT&&(ie=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ie=We===Rt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(U,A){let K;return U?A===null||A===Gi||A===Xs?K=r.DEPTH24_STENCIL8:A===jt?K=r.DEPTH32F_STENCIL8:A===Ws&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Gi||A===Xs?K=r.DEPTH_COMPONENT24:A===jt?K=r.DEPTH_COMPONENT32F:A===Ws&&(K=r.DEPTH_COMPONENT16),K}function C(U,A){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==nn&&U.minFilter!==Dt?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function M(U){const A=U.target;A.removeEventListener("dispose",M),D(A),A.isVideoTexture&&h.delete(A)}function N(U){const A=U.target;A.removeEventListener("dispose",N),w(A)}function D(U){const A=n.get(U);if(A.__webglInit===void 0)return;const K=U.source,te=d.get(K);if(te){const ve=te[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&E(U),Object.keys(te).length===0&&d.delete(K)}n.remove(U)}function E(U){const A=n.get(U);r.deleteTexture(A.__webglTexture);const K=U.source,te=d.get(K);delete te[A.__cacheKey],o.memory.textures--}function w(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let ve=0;ve<A.__webglFramebuffer[te].length;ve++)r.deleteFramebuffer(A.__webglFramebuffer[te][ve]);else r.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)r.deleteFramebuffer(A.__webglFramebuffer[te]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=U.textures;for(let te=0,ve=K.length;te<ve;te++){const ie=n.get(K[te]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(K[te])}n.remove(U)}let L=0;function z(){L=0}function G(){const U=L;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),L+=1,U}function W(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function J(U,A){const K=n.get(U);if(U.isVideoTexture&&Pe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const te=U.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(K,U,A);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+A)}function q(U,A){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){H(K,U,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+A)}function re(U,A){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){H(K,U,A);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+A)}function j(U,A){const K=n.get(U);if(U.version>0&&K.__version!==U.version){X(K,U,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+A)}const ue={[hr]:r.REPEAT,[Fn]:r.CLAMP_TO_EDGE,[Gs]:r.MIRRORED_REPEAT},pe={[nn]:r.NEAREST,[pl]:r.NEAREST_MIPMAP_NEAREST,[Br]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[ks]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},Ce={[Im]:r.NEVER,[Om]:r.ALWAYS,[Pm]:r.LESS,[Zu]:r.LEQUAL,[Dm]:r.EQUAL,[Um]:r.GEQUAL,[Lm]:r.GREATER,[Nm]:r.NOTEQUAL};function Ue(U,A){if(A.type===jt&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dt||A.magFilter===ks||A.magFilter===Br||A.magFilter===Kn||A.minFilter===Dt||A.minFilter===ks||A.minFilter===Br||A.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ue[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ue[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ue[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,pe[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,pe[A.minFilter]),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===nn||A.minFilter!==Br&&A.minFilter!==Kn||A.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ze(U,A){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",M));const te=A.source;let ve=d.get(te);ve===void 0&&(ve={},d.set(te,ve));const ie=W(A);if(ie!==U.__cacheKey){ve[ie]===void 0&&(ve[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ve[ie].usedTimes++;const We=ve[U.__cacheKey];We!==void 0&&(ve[U.__cacheKey].usedTimes--,We.usedTimes===0&&E(A)),U.__cacheKey=ie,U.__webglTexture=ve[ie].texture}return K}function Qe(U,A,K){return Math.floor(Math.floor(U/K)/A)}function et(U,A,K,te){const ie=U.updateRanges;if(ie.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,K,te,A.data);else{ie.sort((be,Re)=>be.start-Re.start);let We=0;for(let be=1;be<ie.length;be++){const Re=ie[We],Ze=ie[be],$e=Re.start+Re.count,De=Qe(Ze.start,A.width,4),Je=Qe(Re.start,A.width,4);Ze.start<=$e+1&&De===Je&&Qe(Ze.start+Ze.count-1,A.width,4)===De?Re.count=Math.max(Re.count,Ze.start+Ze.count-Re.start):(++We,ie[We]=Ze)}ie.length=We+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),Xe=r.getParameter(r.UNPACK_SKIP_PIXELS),Ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let be=0,Re=ie.length;be<Re;be++){const Ze=ie[be],$e=Math.floor(Ze.start/4),De=Math.ceil(Ze.count/4),Je=$e%A.width,V=Math.floor($e/A.width),Ee=De,Q=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,Je,V,Ee,Q,K,te,A.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ye)}}function H(U,A,K){let te=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=r.TEXTURE_3D);const ve=ze(U,A),ie=A.source;t.bindTexture(te,U.__webglTexture,r.TEXTURE0+K);const We=n.get(ie);if(ie.version!==We.__version||ve===!0){t.activeTexture(r.TEXTURE0+K);const we=vt.getPrimaries(vt.workingColorSpace),Xe=A.colorSpace===Ni?null:vt.getPrimaries(A.colorSpace),Ye=A.colorSpace===Ni||we===Xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let be=v(A.image,!1,i.maxTextureSize);be=ct(A,be);const Re=s.convert(A.format,A.colorSpace),Ze=s.convert(A.type);let $e=y(A.internalFormat,Re,Ze,A.colorSpace,A.isVideoTexture);Ue(te,A);let De;const Je=A.mipmaps,V=A.isVideoTexture!==!0,Ee=We.__version===void 0||ve===!0,Q=ie.dataReady,He=C(A,be);if(A.isDepthTexture)$e=b(A.format===qs,A.type),Ee&&(V?t.texStorage2D(r.TEXTURE_2D,1,$e,be.width,be.height):t.texImage2D(r.TEXTURE_2D,0,$e,be.width,be.height,0,Re,Ze,null));else if(A.isDataTexture)if(Je.length>0){V&&Ee&&t.texStorage2D(r.TEXTURE_2D,He,$e,Je[0].width,Je[0].height);for(let Se=0,fe=Je.length;Se<fe;Se++)De=Je[Se],V?Q&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,De.width,De.height,Re,Ze,De.data):t.texImage2D(r.TEXTURE_2D,Se,$e,De.width,De.height,0,Re,Ze,De.data);A.generateMipmaps=!1}else V?(Ee&&t.texStorage2D(r.TEXTURE_2D,He,$e,be.width,be.height),Q&&et(A,be,Re,Ze)):t.texImage2D(r.TEXTURE_2D,0,$e,be.width,be.height,0,Re,Ze,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){V&&Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,$e,Je[0].width,Je[0].height,be.depth);for(let Se=0,fe=Je.length;Se<fe;Se++)if(De=Je[Se],A.format!==Yt)if(Re!==null)if(V){if(Q)if(A.layerUpdates.size>0){const qe=Su(De.width,De.height,A.format,A.type);for(const lt of A.layerUpdates){const Ct=De.data.subarray(lt*qe/De.data.BYTES_PER_ELEMENT,(lt+1)*qe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,lt,De.width,De.height,1,Re,Ct)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,De.width,De.height,be.depth,Re,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,$e,De.width,De.height,be.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,De.width,De.height,be.depth,Re,Ze,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,$e,De.width,De.height,be.depth,0,Re,Ze,De.data)}else{V&&Ee&&t.texStorage2D(r.TEXTURE_2D,He,$e,Je[0].width,Je[0].height);for(let Se=0,fe=Je.length;Se<fe;Se++)De=Je[Se],A.format!==Yt?Re!==null?V?Q&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,De.width,De.height,Re,De.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Q&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,De.width,De.height,Re,Ze,De.data):t.texImage2D(r.TEXTURE_2D,Se,$e,De.width,De.height,0,Re,Ze,De.data)}else if(A.isDataArrayTexture)if(V){if(Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,$e,be.width,be.height,be.depth),Q)if(A.layerUpdates.size>0){const Se=Su(be.width,be.height,A.format,A.type);for(const fe of A.layerUpdates){const qe=be.data.subarray(fe*Se/be.data.BYTES_PER_ELEMENT,(fe+1)*Se/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,be.width,be.height,1,Re,Ze,qe)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Re,Ze,be.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,$e,be.width,be.height,be.depth,0,Re,Ze,be.data);else if(A.isData3DTexture)V?(Ee&&t.texStorage3D(r.TEXTURE_3D,He,$e,be.width,be.height,be.depth),Q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Re,Ze,be.data)):t.texImage3D(r.TEXTURE_3D,0,$e,be.width,be.height,be.depth,0,Re,Ze,be.data);else if(A.isFramebufferTexture){if(Ee)if(V)t.texStorage2D(r.TEXTURE_2D,He,$e,be.width,be.height);else{let Se=be.width,fe=be.height;for(let qe=0;qe<He;qe++)t.texImage2D(r.TEXTURE_2D,qe,$e,Se,fe,0,Re,Ze,null),Se>>=1,fe>>=1}}else if(Je.length>0){if(V&&Ee){const Se=nt(Je[0]);t.texStorage2D(r.TEXTURE_2D,He,$e,Se.width,Se.height)}for(let Se=0,fe=Je.length;Se<fe;Se++)De=Je[Se],V?Q&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,Re,Ze,De):t.texImage2D(r.TEXTURE_2D,Se,$e,Re,Ze,De);A.generateMipmaps=!1}else if(V){if(Ee){const Se=nt(be);t.texStorage2D(r.TEXTURE_2D,He,$e,Se.width,Se.height)}Q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Ze,be)}else t.texImage2D(r.TEXTURE_2D,0,$e,Re,Ze,be);g(A)&&m(te),We.__version=ie.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function X(U,A,K){if(A.image.length!==6)return;const te=ze(U,A),ve=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+K);const ie=n.get(ve);if(ve.version!==ie.__version||te===!0){t.activeTexture(r.TEXTURE0+K);const We=vt.getPrimaries(vt.workingColorSpace),we=A.colorSpace===Ni?null:vt.getPrimaries(A.colorSpace),Xe=A.colorSpace===Ni||We===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let fe=0;fe<6;fe++)!Ye&&!be?Re[fe]=v(A.image[fe],!0,i.maxCubemapSize):Re[fe]=be?A.image[fe].image:A.image[fe],Re[fe]=ct(A,Re[fe]);const Ze=Re[0],$e=s.convert(A.format,A.colorSpace),De=s.convert(A.type),Je=y(A.internalFormat,$e,De,A.colorSpace),V=A.isVideoTexture!==!0,Ee=ie.__version===void 0||te===!0,Q=ve.dataReady;let He=C(A,Ze);Ue(r.TEXTURE_CUBE_MAP,A);let Se;if(Ye){V&&Ee&&t.texStorage2D(r.TEXTURE_CUBE_MAP,He,Je,Ze.width,Ze.height);for(let fe=0;fe<6;fe++){Se=Re[fe].mipmaps;for(let qe=0;qe<Se.length;qe++){const lt=Se[qe];A.format!==Yt?$e!==null?V?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,0,0,lt.width,lt.height,$e,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,Je,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,0,0,lt.width,lt.height,$e,De,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe,Je,lt.width,lt.height,0,$e,De,lt.data)}}}else{if(Se=A.mipmaps,V&&Ee){Se.length>0&&He++;const fe=nt(Re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,He,Je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(be){V?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Re[fe].width,Re[fe].height,$e,De,Re[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Je,Re[fe].width,Re[fe].height,0,$e,De,Re[fe].data);for(let qe=0;qe<Se.length;qe++){const Ct=Se[qe].image[fe].image;V?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,0,0,Ct.width,Ct.height,$e,De,Ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,Je,Ct.width,Ct.height,0,$e,De,Ct.data)}}else{V?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,$e,De,Re[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Je,$e,De,Re[fe]);for(let qe=0;qe<Se.length;qe++){const lt=Se[qe];V?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,0,0,$e,De,lt.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,qe+1,Je,$e,De,lt.image[fe])}}}g(A)&&m(r.TEXTURE_CUBE_MAP),ie.__version=ve.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ke(U,A,K,te,ve,ie){const We=s.convert(K.format,K.colorSpace),we=s.convert(K.type),Xe=y(K.internalFormat,We,we,K.colorSpace),Ye=n.get(A),be=n.get(K);if(be.__renderTarget=A,!Ye.__hasExternalTextures){const Re=Math.max(1,A.width>>ie),Ze=Math.max(1,A.height>>ie);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,ie,Xe,Re,Ze,A.depth,0,We,we,null):t.texImage2D(ve,ie,Xe,Re,Ze,0,We,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),ye(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ve,be.__webglTexture,0,Ie(A)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ve,be.__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(U,A,K){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer){const te=A.depthTexture,ve=te&&te.isDepthTexture?te.type:null,ie=b(A.stencilBuffer,ve),We=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=Ie(A);ye(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ie,A.width,A.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ie,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ie,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,U)}else{const te=A.textures;for(let ve=0;ve<te.length;ve++){const ie=te[ve],We=s.convert(ie.format,ie.colorSpace),we=s.convert(ie.type),Xe=y(ie.internalFormat,We,we,ie.colorSpace),Ye=Ie(A);K&&ye(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Xe,A.width,A.height):ye(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,Xe,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Xe,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(A.depthTexture);te.__renderTarget=A,(!te.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const ve=te.__webglTexture,ie=Ie(A);if(A.depthTexture.format===Ys)ye(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(A.depthTexture.format===qs)ye(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ut(U){const A=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const te=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),te){const ve=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,te.removeEventListener("dispose",ve)};te.addEventListener("dispose",ve),A.__depthDisposeCallback=ve}A.__boundDepthTexture=te}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const te=U.texture.mipmaps;te&&te.length>0?Ve(A.__webglFramebuffer[0],U):Ve(A.__webglFramebuffer,U)}else if(K){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]===void 0)A.__webglDepthbuffer[te]=r.createRenderbuffer(),Ke(A.__webglDepthbuffer[te],U,!1);else{const ve=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ie)}}else{const te=U.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Ke(A.__webglDepthbuffer,U,!1);else{const ve=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,ie)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(U,A,K){const te=n.get(U);A!==void 0&&ke(te.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ut(U)}function k(U){const A=U.texture,K=n.get(U),te=n.get(A);U.addEventListener("dispose",N);const ve=U.textures,ie=U.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=A.version,o.memory.textures++),ie){K.__webglFramebuffer=[];for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[we]=[];for(let Xe=0;Xe<A.mipmaps.length;Xe++)K.__webglFramebuffer[we][Xe]=r.createFramebuffer()}else K.__webglFramebuffer[we]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let we=0;we<A.mipmaps.length;we++)K.__webglFramebuffer[we]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(We)for(let we=0,Xe=ve.length;we<Xe;we++){const Ye=n.get(ve[we]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&ye(U)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ve.length;we++){const Xe=ve[we];K.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const Ye=s.convert(Xe.format,Xe.colorSpace),be=s.convert(Xe.type),Re=y(Xe.internalFormat,Ye,be,Xe.colorSpace,U.isXRRenderTarget===!0),Ze=Ie(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Re,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,K.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(K.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,A);for(let we=0;we<6;we++)if(A.mipmaps&&A.mipmaps.length>0)for(let Xe=0;Xe<A.mipmaps.length;Xe++)ke(K.__webglFramebuffer[we][Xe],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe);else ke(K.__webglFramebuffer[we],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(A)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let we=0,Xe=ve.length;we<Xe;we++){const Ye=ve[we],be=n.get(Ye);let Re=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,be.__webglTexture),Ue(Re,Ye),ke(K.__webglFramebuffer,U,Ye,r.COLOR_ATTACHMENT0+we,Re,0),g(Ye)&&m(Re)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,te.__webglTexture),Ue(we,A),A.mipmaps&&A.mipmaps.length>0)for(let Xe=0;Xe<A.mipmaps.length;Xe++)ke(K.__webglFramebuffer[Xe],U,A,r.COLOR_ATTACHMENT0,we,Xe);else ke(K.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,we,0);g(A)&&m(we),t.unbindTexture()}U.depthBuffer&&ut(U)}function _e(U){const A=U.textures;for(let K=0,te=A.length;K<te;K++){const ve=A[K];if(g(ve)){const ie=S(U),We=n.get(ve).__webglTexture;t.bindTexture(ie,We),m(ie),t.unbindTexture()}}}const de=[],he=[];function ce(U){if(U.samples>0){if(ye(U)===!1){const A=U.textures,K=U.width,te=U.height;let ve=r.COLOR_BUFFER_BIT;const ie=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=n.get(U),we=A.length>1;if(we)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Xe=U.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[Ye]);const be=n.get(A[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,K,te,0,0,K,te,ve,r.NEAREST),c===!0&&(de.length=0,he.length=0,de.push(r.COLOR_ATTACHMENT0+Ye),U.depthBuffer&&U.resolveDepthBuffer===!1&&(de.push(ie),he.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,he)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,We.__webglColorRenderbuffer[Ye]);const be=n.get(A[Ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const A=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Ie(U){return Math.min(i.maxSamples,U.samples)}function ye(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(U){const A=o.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())}function ct(U,A){const K=U.colorSpace,te=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Ut&&K!==Ni&&(vt.getTransfer(K)===Rt?(te!==Yt||ve!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),A}function nt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=re,this.setTextureCube=j,this.rebindTextures=Tt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=ye}function zg(r,e){function t(n,i=Ni){let s;const o=vt.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===gl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===zu)return r.BYTE;if(n===Hu)return r.SHORT;if(n===Ws)return r.UNSIGNED_SHORT;if(n===ml)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===jt)return r.FLOAT;if(n===Nn)return r.HALF_FLOAT;if(n===Wu)return r.ALPHA;if(n===Xu)return r.RGB;if(n===Yt)return r.RGBA;if(n===Ys)return r.DEPTH_COMPONENT;if(n===qs)return r.DEPTH_STENCIL;if(n===sr)return r.RED;if(n===ea)return r.RED_INTEGER;if(n===rr)return r.RG;if(n===vl)return r.RG_INTEGER;if(n===xl)return r.RGBA_INTEGER;if(n===Co||n===Ro||n===Io||n===Po)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pc||n===Dc||n===Lc||n===Nc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Oc||n===Fc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uc||n===Oc)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===Yc||n===qc||n===Zc||n===Kc||n===$c||n===Jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===Qc||n===el)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jc)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===nl||n===il||n===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const UT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new cd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:UT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BT extends Ti{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new FT,m={},S=t.getContextAttributes();let y=null,b=null;const C=[],M=[],N=new se;let D=null;const E=new tn;E.viewport=new xt;const w=new tn;w.viewport=new xt;const L=[E,w],z=new Ag;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=C[H];return X===void 0&&(X=new pc,C[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=C[H];return X===void 0&&(X=new pc,C[H]=X),X.getGripSpace()},this.getHand=function(H){let X=C[H];return X===void 0&&(X=new pc,C[H]=X),X.getHandSpace()};function J(H){const X=M.indexOf(H.inputSource);if(X===-1)return;const ke=C[X];ke!==void 0&&(ke.update(H.inputSource,H.frame,l||o),ke.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",re);for(let H=0;H<C.length;H++){const X=M[H];X!==null&&(M[H]=null,C[H].disconnect(X))}G=null,W=null,g.reset();for(const H in m)delete m[H];e.setRenderTarget(y),f=null,d=null,u=null,i=null,b=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",q),i.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,Ke=null,Ve=null;S.depth&&(Ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=S.stencil?qs:Ys,Ke=S.stencil?Xs:Gi);const ut={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ut),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Si(d.textureWidth,d.textureHeight,{format:Yt,type:li,depthTexture:new ad(d.textureWidth,d.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ke={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ke),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Si(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:li,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(H){for(let X=0;X<H.removed.length;X++){const ke=H.removed[X],Ke=M.indexOf(ke);Ke>=0&&(M[Ke]=null,C[Ke].disconnect(ke))}for(let X=0;X<H.added.length;X++){const ke=H.added[X];let Ke=M.indexOf(ke);if(Ke===-1){for(let ut=0;ut<C.length;ut++)if(ut>=M.length){M.push(ke),Ke=ut;break}else if(M[ut]===null){M[ut]=ke,Ke=ut;break}if(Ke===-1)break}const Ve=C[Ke];Ve&&Ve.connect(ke)}}const j=new P,ue=new P;function pe(H,X,ke){j.setFromMatrixPosition(X.matrixWorld),ue.setFromMatrixPosition(ke.matrixWorld);const Ke=j.distanceTo(ue),Ve=X.projectionMatrix.elements,ut=ke.projectionMatrix.elements,Tt=Ve[14]/(Ve[10]-1),k=Ve[14]/(Ve[10]+1),_e=(Ve[9]+1)/Ve[5],de=(Ve[9]-1)/Ve[5],he=(Ve[8]-1)/Ve[0],ce=(ut[8]+1)/ut[0],Ie=Tt*he,ye=Tt*ce,Pe=Ke/(-he+ce),ct=Pe*-he;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ct),H.translateZ(Pe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ve[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const nt=Tt+Pe,U=k+Pe,A=Ie-ct,K=ye+(Ke-ct),te=_e*k/U*nt,ve=de*k/U*nt;H.projectionMatrix.makePerspective(A,K,te,ve,nt,U),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Ce(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let X=H.near,ke=H.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(ke=g.depthFar)),z.near=w.near=E.near=X,z.far=w.far=E.far=ke,(G!==z.near||W!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,W=z.far),z.layers.mask=H.layers.mask|6,E.layers.mask=z.layers.mask&3,w.layers.mask=z.layers.mask&5;const Ke=H.parent,Ve=z.cameras;Ce(z,Ke);for(let ut=0;ut<Ve.length;ut++)Ce(Ve[ut],Ke);Ve.length===2?pe(z,E,w):z.projectionMatrix.copy(E.projectionMatrix),Ue(H,z,Ke)};function Ue(H,X,ke){ke===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(ke.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Js*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(H){return m[H]};let ze=null;function Qe(H,X){if(h=X.getViewerPose(l||o),p=X,h!==null){const ke=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ke=!1;ke.length!==z.cameras.length&&(z.cameras.length=0,Ke=!0);for(let k=0;k<ke.length;k++){const _e=ke[k];let de=null;if(f!==null)de=f.getViewport(_e);else{const ce=u.getViewSubImage(d,_e);de=ce.viewport,k===0&&(e.setRenderTargetTextures(b,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(b))}let he=L[k];he===void 0&&(he=new tn,he.layers.enable(k),he.viewport=new xt,L[k]=he),he.matrix.fromArray(_e.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(_e.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(de.x,de.y,de.width,de.height),k===0&&(z.matrix.copy(he.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ke===!0&&z.cameras.push(he)}const Ve=i.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const k=u.getDepthInformation(ke[0]);k&&k.isValid&&k.texture&&g.init(k,i.renderState)}if(Ve&&Ve.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let k=0;k<ke.length;k++){const _e=ke[k].camera;if(_e){let de=m[_e];de||(de=new cd,m[_e]=de);const he=u.getCameraImage(_e);de.sourceTexture=he}}}}for(let ke=0;ke<C.length;ke++){const Ke=M[ke],Ve=C[ke];Ke!==null&&Ve!==void 0&&Ve.update(Ke,X,l||o)}ze&&ze(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}const et=new Ug;et.setAnimationLoop(Qe),this.setAnimationLoop=function(H){ze=H},this.dispose=function(){}}}const Rr=new zn,kT=new je;function zT(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Hm(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,S,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===wn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===wn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,b=S.envMapRotation;y&&(g.envMap.value=y,Rr.copy(b),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.envMapRotation.value.setFromMatrix4(kT.makeRotationFromEuler(Rr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function HT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function l(S,y){let b=i[S.id];b===void 0&&(p(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",g));const C=y.program;n.updateUBOMapping(S,C);const M=e.render.frame;s[S.id]!==M&&(d(S),s[S.id]=M)}function h(S){const y=u();S.__bindingPointIndex=y;const b=r.createBuffer(),C=S.__size,M=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,C,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],b=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,N=b.length;M<N;M++){const D=Array.isArray(b[M])?b[M]:[b[M]];for(let E=0,w=D.length;E<w;E++){const L=D[E];if(f(L,M,E,C)===!0){const z=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let J=0;J<G.length;J++){const q=G[J],re=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,z+W,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,y,b,C){const M=S.value,N=y+"_"+b;if(C[N]===void 0)return typeof M=="number"||typeof M=="boolean"?C[N]=M:C[N]=M.clone(),!0;{const D=C[N];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return C[N]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function p(S){const y=S.uniforms;let b=0;const C=16;for(let N=0,D=y.length;N<D;N++){const E=Array.isArray(y[N])?y[N]:[y[N]];for(let w=0,L=E.length;w<L;w++){const z=E[w],G=Array.isArray(z.value)?z.value:[z.value];for(let W=0,J=G.length;W<J;W++){const q=G[W],re=v(q),j=b%C,ue=j%re.boundary,pe=j+ue;b+=ue,pe!==0&&C-pe<re.storage&&(b+=C-pe),z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=re.storage}}}const M=b%C;return M>0&&(b+=C-M),S.__size=b,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}class Hg{constructor(e={}){const{canvas:t=Bm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=Wt;let M=0,N=0,D=null,E=-1,w=null;const L=new xt,z=new xt;let G=null;const W=new Fe(0);let J=0,q=t.width,re=t.height,j=1,ue=null,pe=null;const Ce=new xt(0,0,q,re),Ue=new xt(0,0,q,re);let ze=!1;const Qe=new no;let et=!1,H=!1;const X=new je,ke=new P,Ke=new xt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Tt(){return D===null?j:1}let k=n;function _e(_,T){return t.getContext(_,T)}try{const _={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){const T="webgl2";if(k=_e(T,_),k===null)throw _e(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let de,he,ce,Ie,ye,Pe,ct,nt,U,A,K,te,ve,ie,We,we,Xe,Ye,be,Re,Ze,$e,De,Je;function V(){de=new Qb(k),de.init(),$e=new zg(k,de),he=new Yb(k,de,e,$e),ce=new LT(k,de),he.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Ie=new nS(k),ye=new yT,Pe=new NT(k,de,ce,ye,he,$e,Ie),ct=new Zb(b),nt=new jb(b),U=new cy(k),De=new Wb(k,U),A=new eS(k,U,Ie,De),K=new rS(k,A,U,Ie),be=new iS(k,he,Pe),we=new qb(ye),te=new xT(b,ct,nt,de,he,De,we),ve=new zT(b,ye),ie=new bT,We=new CT(de),Ye=new Gb(b,ct,nt,ce,K,f,c),Xe=new PT(b,K,he),Je=new HT(k,Ie,he,ce),Re=new Xb(k,de,Ie),Ze=new tS(k,de,Ie),Ie.programs=te.programs,b.capabilities=he,b.extensions=de,b.properties=ye,b.renderLists=ie,b.shadowMap=Xe,b.state=ce,b.info=Ie}V();const Ee=new BT(b,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const _=de.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=de.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(_){_!==void 0&&(j=_,this.setSize(q,re,!1))},this.getSize=function(_){return _.set(q,re)},this.setSize=function(_,T,I=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,re=T,t.width=Math.floor(_*j),t.height=Math.floor(T*j),I===!0&&(t.style.width=_+"px",t.style.height=T+"px"),this.setViewport(0,0,_,T)},this.getDrawingBufferSize=function(_){return _.set(q*j,re*j).floor()},this.setDrawingBufferSize=function(_,T,I){q=_,re=T,j=I,t.width=Math.floor(_*I),t.height=Math.floor(T*I),this.setViewport(0,0,_,T)},this.getCurrentViewport=function(_){return _.copy(L)},this.getViewport=function(_){return _.copy(Ce)},this.setViewport=function(_,T,I,F){_.isVector4?Ce.set(_.x,_.y,_.z,_.w):Ce.set(_,T,I,F),ce.viewport(L.copy(Ce).multiplyScalar(j).round())},this.getScissor=function(_){return _.copy(Ue)},this.setScissor=function(_,T,I,F){_.isVector4?Ue.set(_.x,_.y,_.z,_.w):Ue.set(_,T,I,F),ce.scissor(z.copy(Ue).multiplyScalar(j).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(_){ce.setScissorTest(ze=_)},this.setOpaqueSort=function(_){ue=_},this.setTransparentSort=function(_){pe=_},this.getClearColor=function(_){return _.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(_=!0,T=!0,I=!0){let F=0;if(_){let B=!1;if(D!==null){const O=D.texture.format;B=O===xl||O===vl||O===ea}if(B){const O=D.texture.type,$=O===li||O===Gi||O===Ws||O===Xs||O===gl||O===_l,Z=Ye.getClearColor(),Y=Ye.getClearAlpha(),ee=Z.r,oe=Z.g,ne=Z.b;$?(p[0]=ee,p[1]=oe,p[2]=ne,p[3]=Y,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=ee,v[1]=oe,v[2]=ne,v[3]=Y,k.clearBufferiv(k.COLOR,0,v))}else F|=k.COLOR_BUFFER_BIT}T&&(F|=k.DEPTH_BUFFER_BIT),I&&(F|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ye.dispose(),ie.dispose(),We.dispose(),ye.dispose(),ct.dispose(),nt.dispose(),K.dispose(),De.dispose(),Je.dispose(),te.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",yn),Ee.removeEventListener("sessionend",mr),Vn.stop()};function Q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const _=Ie.autoReset,T=Xe.enabled,I=Xe.autoUpdate,F=Xe.needsUpdate,B=Xe.type;V(),Ie.autoReset=_,Xe.enabled=T,Xe.autoUpdate=I,Xe.needsUpdate=F,Xe.type=B}function Se(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function fe(_){const T=_.target;T.removeEventListener("dispose",fe),qe(T)}function qe(_){lt(_),ye.remove(_)}function lt(_){const T=ye.get(_).programs;T!==void 0&&(T.forEach(function(I){te.releaseProgram(I)}),_.isShaderMaterial&&te.releaseShaderCache(_))}this.renderBufferDirect=function(_,T,I,F,B,O){T===null&&(T=Ve);const $=B.isMesh&&B.matrixWorld.determinant()<0,Z=fa(_,T,I,F,B);ce.setMaterial(F,$);let Y=I.index,ee=1;if(F.wireframe===!0){if(Y=A.getWireframeAttribute(I),Y===void 0)return;ee=2}const oe=I.drawRange,ne=I.attributes.position;let ge=oe.start*ee,Le=(oe.start+oe.count)*ee;O!==null&&(ge=Math.max(ge,O.start*ee),Le=Math.min(Le,(O.start+O.count)*ee)),Y!==null?(ge=Math.max(ge,0),Le=Math.min(Le,Y.count)):ne!=null&&(ge=Math.max(ge,0),Le=Math.min(Le,ne.count));const Te=Le-ge;if(Te<0||Te===1/0)return;De.setup(B,F,Z,I,Y);let Ae,Be=Re;if(Y!==null&&(Ae=U.get(Y),Be=Ze,Be.setIndex(Ae)),B.isMesh)F.wireframe===!0?(ce.setLineWidth(F.wireframeLinewidth*Tt()),Be.setMode(k.LINES)):Be.setMode(k.TRIANGLES);else if(B.isLine){let Ne=F.linewidth;Ne===void 0&&(Ne=1),ce.setLineWidth(Ne*Tt()),B.isLineSegments?Be.setMode(k.LINES):B.isLineLoop?Be.setMode(k.LINE_LOOP):Be.setMode(k.LINE_STRIP)}else B.isPoints?Be.setMode(k.POINTS):B.isSprite&&Be.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Be.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,it=B._multiDrawCounts,tt=B._multiDrawCount,mt=Y?U.get(Y).bytesPerElement:1,st=ye.get(F).currentProgram.getUniforms();for(let yt=0;yt<tt;yt++)st.setValue(k,"_gl_DrawID",yt),Be.render(Ne[yt]/mt,it[yt])}else if(B.isInstancedMesh)Be.renderInstances(ge,Te,B.count);else if(I.isInstancedBufferGeometry){const Ne=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,it=Math.min(I.instanceCount,Ne);Be.renderInstances(ge,Te,it)}else Be.render(ge,Te)};function Ct(_,T,I){_.transparent===!0&&_.side===si&&_.forceSinglePass===!1?(_.side=wn,_.needsUpdate=!0,cs(_,T,I),_.side=bi,_.needsUpdate=!0,cs(_,T,I),_.side=si):cs(_,T,I)}this.compile=function(_,T,I=null){I===null&&(I=_),m=We.get(I),m.init(T),y.push(m),I.traverseVisible(function(B){B.isLight&&B.layers.test(T.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),_!==I&&_.traverseVisible(function(B){B.isLight&&B.layers.test(T.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const F=new Set;return _.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const O=B.material;if(O)if(Array.isArray(O))for(let $=0;$<O.length;$++){const Z=O[$];Ct(Z,I,B),F.add(Z)}else Ct(O,I,B),F.add(O)}),m=y.pop(),F},this.compileAsync=function(_,T,I=null){const F=this.compile(_,T,I);return new Promise(B=>{function O(){if(F.forEach(function($){ye.get($).currentProgram.isReady()&&F.delete($)}),F.size===0){B(_);return}setTimeout(O,10)}de.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let St=null;function Cn(_){St&&St(_)}function yn(){Vn.stop()}function mr(){Vn.start()}const Vn=new Ug;Vn.setAnimationLoop(Cn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(_){St=_,Ee.setAnimationLoop(_),_===null?Vn.stop():Vn.start()},Ee.addEventListener("sessionstart",yn),Ee.addEventListener("sessionend",mr),this.render=function(_,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(T),T=Ee.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,T,D),m=We.get(_,y.length),m.init(T),y.push(m),X.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),Qe.setFromProjectionMatrix(X,Bn,T.reversedDepth),H=this.localClippingEnabled,et=we.init(this.clippingPlanes,H),g=ie.get(_,S.length),g.init(),S.push(g),Ee.enabled===!0&&Ee.isPresenting===!0){const O=b.xr.getDepthSensingMesh();O!==null&&Yi(O,T,-1/0,b.sortObjects)}Yi(_,T,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(ue,pe),ut=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,ut&&Ye.addToRenderList(g,_),this.info.render.frame++,et===!0&&we.beginShadows();const I=m.state.shadowsArray;Xe.render(I,_,T),et===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=g.opaque,B=g.transmissive;if(m.setupLights(),T.isArrayCamera){const O=T.cameras;if(B.length>0)for(let $=0,Z=O.length;$<Z;$++){const Y=O[$];le(F,B,_,Y)}ut&&Ye.render(_);for(let $=0,Z=O.length;$<Z;$++){const Y=O[$];as(g,_,Y,Y.viewport)}}else B.length>0&&le(F,B,_,T),ut&&Ye.render(_),as(g,_,T);D!==null&&N===0&&(Pe.updateMultisampleRenderTarget(D),Pe.updateRenderTargetMipmap(D)),_.isScene===!0&&_.onAfterRender(b,_,T),De.resetDefaultState(),E=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],et===!0&&we.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Yi(_,T,I,F){if(_.visible===!1)return;if(_.layers.test(T.layers)){if(_.isGroup)I=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(T);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Qe.intersectsSprite(_)){F&&Ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(X);const $=K.update(_),Z=_.material;Z.visible&&g.push(_,$,Z,I,Ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Qe.intersectsObject(_))){const $=K.update(_),Z=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ke.copy(_.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Ke.copy($.boundingSphere.center)),Ke.applyMatrix4(_.matrixWorld).applyMatrix4(X)),Array.isArray(Z)){const Y=$.groups;for(let ee=0,oe=Y.length;ee<oe;ee++){const ne=Y[ee],ge=Z[ne.materialIndex];ge&&ge.visible&&g.push(_,$,ge,I,Ke.z,ne)}}else Z.visible&&g.push(_,$,Z,I,Ke.z,null)}}const O=_.children;for(let $=0,Z=O.length;$<Z;$++)Yi(O[$],T,I,F)}function as(_,T,I,F){const B=_.opaque,O=_.transmissive,$=_.transparent;m.setupLightsView(I),et===!0&&we.setGlobalState(b.clippingPlanes,I),F&&ce.viewport(L.copy(F)),B.length>0&&ae(B,T,I),O.length>0&&ae(O,T,I),$.length>0&&ae($,T,I),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function le(_,T,I,F){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new Si(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Nn:li,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const O=m.state.transmissionRenderTarget[F.id],$=F.viewport||L;O.setSize($.z*b.transmissionResolutionScale,$.w*b.transmissionResolutionScale);const Z=b.getRenderTarget(),Y=b.getActiveCubeFace(),ee=b.getActiveMipmapLevel();b.setRenderTarget(O),b.getClearColor(W),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),ut&&Ye.render(I);const oe=b.toneMapping;b.toneMapping=ki;const ne=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),et===!0&&we.setGlobalState(b.clippingPlanes,F),ae(_,I,F),Pe.updateMultisampleRenderTarget(O),Pe.updateRenderTargetMipmap(O),de.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Le=0,Te=T.length;Le<Te;Le++){const Ae=T[Le],Be=Ae.object,Ne=Ae.geometry,it=Ae.material,tt=Ae.group;if(it.side===si&&Be.layers.test(F.layers)){const mt=it.side;it.side=wn,it.needsUpdate=!0,ha(Be,I,F,Ne,it,tt),it.side=mt,it.needsUpdate=!0,ge=!0}}ge===!0&&(Pe.updateMultisampleRenderTarget(O),Pe.updateRenderTargetMipmap(O))}b.setRenderTarget(Z,Y,ee),b.setClearColor(W,J),ne!==void 0&&(F.viewport=ne),b.toneMapping=oe}function ae(_,T,I){const F=T.isScene===!0?T.overrideMaterial:null;for(let B=0,O=_.length;B<O;B++){const $=_[B],Z=$.object,Y=$.geometry,ee=$.group;let oe=$.material;oe.allowOverride===!0&&F!==null&&(oe=F),Z.layers.test(I.layers)&&ha(Z,T,I,Y,oe,ee)}}function ha(_,T,I,F,B,O){_.onBeforeRender(b,T,I,F,B,O),_.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(b,T,I,F,_,O),B.transparent===!0&&B.side===si&&B.forceSinglePass===!1?(B.side=wn,B.needsUpdate=!0,b.renderBufferDirect(I,T,F,B,_,O),B.side=bi,B.needsUpdate=!0,b.renderBufferDirect(I,T,F,B,_,O),B.side=si):b.renderBufferDirect(I,T,F,B,_,O),_.onAfterRender(b,T,I,F,B,O)}function cs(_,T,I){T.isScene!==!0&&(T=Ve);const F=ye.get(_),B=m.state.lights,O=m.state.shadowsArray,$=B.state.version,Z=te.getParameters(_,B.state,O,T,I),Y=te.getProgramCacheKey(Z);let ee=F.programs;F.environment=_.isMeshStandardMaterial?T.environment:null,F.fog=T.fog,F.envMap=(_.isMeshStandardMaterial?nt:ct).get(_.envMap||F.environment),F.envMapRotation=F.environment!==null&&_.envMap===null?T.environmentRotation:_.envMapRotation,ee===void 0&&(_.addEventListener("dispose",fe),ee=new Map,F.programs=ee);let oe=ee.get(Y);if(oe!==void 0){if(F.currentProgram===oe&&F.lightsStateVersion===$)return da(_,Z),oe}else Z.uniforms=te.getUniforms(_),_.onBeforeCompile(Z,b),oe=te.acquireProgram(Z,Y),ee.set(Y,oe),F.uniforms=Z.uniforms;const ne=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ne.clippingPlanes=we.uniform),da(_,Z),F.needsLights=$l(_),F.lightsStateVersion=$,F.needsLights&&(ne.ambientLightColor.value=B.state.ambient,ne.lightProbe.value=B.state.probe,ne.directionalLights.value=B.state.directional,ne.directionalLightShadows.value=B.state.directionalShadow,ne.spotLights.value=B.state.spot,ne.spotLightShadows.value=B.state.spotShadow,ne.rectAreaLights.value=B.state.rectArea,ne.ltc_1.value=B.state.rectAreaLTC1,ne.ltc_2.value=B.state.rectAreaLTC2,ne.pointLights.value=B.state.point,ne.pointLightShadows.value=B.state.pointShadow,ne.hemisphereLights.value=B.state.hemi,ne.directionalShadowMap.value=B.state.directionalShadowMap,ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ne.spotShadowMap.value=B.state.spotShadowMap,ne.spotLightMatrix.value=B.state.spotLightMatrix,ne.spotLightMap.value=B.state.spotLightMap,ne.pointShadowMap.value=B.state.pointShadowMap,ne.pointShadowMatrix.value=B.state.pointShadowMatrix),F.currentProgram=oe,F.uniformsList=null,oe}function ua(_){if(_.uniformsList===null){const T=_.currentProgram.getUniforms();_.uniformsList=mc.seqWithValue(T.seq,_.uniforms)}return _.uniformsList}function da(_,T){const I=ye.get(_);I.outputColorSpace=T.outputColorSpace,I.batching=T.batching,I.batchingColor=T.batchingColor,I.instancing=T.instancing,I.instancingColor=T.instancingColor,I.instancingMorph=T.instancingMorph,I.skinning=T.skinning,I.morphTargets=T.morphTargets,I.morphNormals=T.morphNormals,I.morphColors=T.morphColors,I.morphTargetsCount=T.morphTargetsCount,I.numClippingPlanes=T.numClippingPlanes,I.numIntersection=T.numClipIntersection,I.vertexAlphas=T.vertexAlphas,I.vertexTangents=T.vertexTangents,I.toneMapping=T.toneMapping}function fa(_,T,I,F,B){T.isScene!==!0&&(T=Ve),Pe.resetTextureUnits();const O=T.fog,$=F.isMeshStandardMaterial?T.environment:null,Z=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ut,Y=(F.isMeshStandardMaterial?nt:ct).get(F.envMap||$),ee=F.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,oe=!!I.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ne=!!I.morphAttributes.position,ge=!!I.morphAttributes.normal,Le=!!I.morphAttributes.color;let Te=ki;F.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Te=b.toneMapping);const Ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Be=Ae!==void 0?Ae.length:0,Ne=ye.get(F),it=m.state.lights;if(et===!0&&(H===!0||_!==w)){const Lt=_===w&&F.id===E;we.setState(F,_,Lt)}let tt=!1;F.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==it.state.version||Ne.outputColorSpace!==Z||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==Y||F.fog===!0&&Ne.fog!==O||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==we.numPlanes||Ne.numIntersection!==we.numIntersection)||Ne.vertexAlphas!==ee||Ne.vertexTangents!==oe||Ne.morphTargets!==ne||Ne.morphNormals!==ge||Ne.morphColors!==Le||Ne.toneMapping!==Te||Ne.morphTargetsCount!==Be)&&(tt=!0):(tt=!0,Ne.__version=F.version);let mt=Ne.currentProgram;tt===!0&&(mt=cs(F,T,B));let st=!1,yt=!1,Ft=!1;const ot=mt.getUniforms(),ht=Ne.uniforms;if(ce.useProgram(mt.program)&&(st=!0,yt=!0,Ft=!0),F.id!==E&&(E=F.id,yt=!0),st||w!==_){ce.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ot.setValue(k,"projectionMatrix",_.projectionMatrix),ot.setValue(k,"viewMatrix",_.matrixWorldInverse);const Kt=ot.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,ke.setFromMatrixPosition(_.matrixWorld)),he.logarithmicDepthBuffer&&ot.setValue(k,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ot.setValue(k,"isOrthographic",_.isOrthographicCamera===!0),w!==_&&(w=_,yt=!0,Ft=!0)}if(B.isSkinnedMesh){ot.setOptional(k,B,"bindMatrix"),ot.setOptional(k,B,"bindMatrixInverse");const Lt=B.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ot.setValue(k,"boneTexture",Lt.boneTexture,Pe))}B.isBatchedMesh&&(ot.setOptional(k,B,"batchingTexture"),ot.setValue(k,"batchingTexture",B._matricesTexture,Pe),ot.setOptional(k,B,"batchingIdTexture"),ot.setValue(k,"batchingIdTexture",B._indirectTexture,Pe),ot.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&ot.setValue(k,"batchingColorTexture",B._colorsTexture,Pe));const _t=I.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&be.update(B,I,mt),(yt||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,ot.setValue(k,"receiveShadow",B.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ht.envMap.value=Y,ht.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&T.environment!==null&&(ht.envMapIntensity.value=T.environmentIntensity),yt&&(ot.setValue(k,"toneMappingExposure",b.toneMappingExposure),Ne.needsLights&&pa(ht,Ft),O&&F.fog===!0&&ve.refreshFogUniforms(ht,O),ve.refreshMaterialUniforms(ht,F,j,re,m.state.transmissionRenderTarget[_.id]),mc.upload(k,ua(Ne),ht,Pe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(mc.upload(k,ua(Ne),ht,Pe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ot.setValue(k,"center",B.center),ot.setValue(k,"modelViewMatrix",B.modelViewMatrix),ot.setValue(k,"normalMatrix",B.normalMatrix),ot.setValue(k,"modelMatrix",B.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Lt=F.uniformsGroups;for(let Kt=0,Rn=Lt.length;Kt<Rn;Kt++){const Gn=Lt[Kt];Je.update(Gn,mt),Je.bind(Gn,mt)}}return mt}function pa(_,T){_.ambientLightColor.needsUpdate=T,_.lightProbe.needsUpdate=T,_.directionalLights.needsUpdate=T,_.directionalLightShadows.needsUpdate=T,_.pointLights.needsUpdate=T,_.pointLightShadows.needsUpdate=T,_.spotLights.needsUpdate=T,_.spotLightShadows.needsUpdate=T,_.rectAreaLights.needsUpdate=T,_.hemisphereLights.needsUpdate=T}function $l(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,T,I){const F=ye.get(_);F.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),ye.get(_.texture).__webglTexture=T,ye.get(_.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:I,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,T){const I=ye.get(_);I.__webglFramebuffer=T,I.__useDefaultFramebuffer=T===void 0};const Ei=k.createFramebuffer();this.setRenderTarget=function(_,T=0,I=0){D=_,M=T,N=I;let F=!0,B=null,O=!1,$=!1;if(_){const Y=ye.get(_);if(Y.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(k.FRAMEBUFFER,null),F=!1;else if(Y.__webglFramebuffer===void 0)Pe.setupRenderTarget(_);else if(Y.__hasExternalTextures)Pe.rebindTextures(_,ye.get(_.texture).__webglTexture,ye.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const ne=_.depthTexture;if(Y.__boundDepthTexture!==ne){if(ne!==null&&ye.has(ne)&&(_.width!==ne.image.width||_.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(_)}}const ee=_.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&($=!0);const oe=ye.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(oe[T])?B=oe[T][I]:B=oe[T],O=!0):_.samples>0&&Pe.useMultisampledRTT(_)===!1?B=ye.get(_).__webglMultisampledFramebuffer:Array.isArray(oe)?B=oe[I]:B=oe,L.copy(_.viewport),z.copy(_.scissor),G=_.scissorTest}else L.copy(Ce).multiplyScalar(j).floor(),z.copy(Ue).multiplyScalar(j).floor(),G=ze;if(I!==0&&(B=Ei),ce.bindFramebuffer(k.FRAMEBUFFER,B)&&F&&ce.drawBuffers(_,B),ce.viewport(L),ce.scissor(z),ce.setScissorTest(G),O){const Y=ye.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y.__webglTexture,I)}else if($){const Y=T;for(let ee=0;ee<_.textures.length;ee++){const oe=ye.get(_.textures[ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ee,oe.__webglTexture,I,Y)}}else if(_!==null&&I!==0){const Y=ye.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Y.__webglTexture,I)}E=-1},this.readRenderTargetPixels=function(_,T,I,F,B,O,$,Z=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Y=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&$!==void 0&&(Y=Y[$]),Y){ce.bindFramebuffer(k.FRAMEBUFFER,Y);try{const ee=_.textures[Z],oe=ee.format,ne=ee.type;if(!he.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=_.width-F&&I>=0&&I<=_.height-B&&(_.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Z),k.readPixels(T,I,F,B,$e.convert(oe),$e.convert(ne),O))}finally{const ee=D!==null?ye.get(D).__webglFramebuffer:null;ce.bindFramebuffer(k.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(_,T,I,F,B,O,$,Z=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Y=ye.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&$!==void 0&&(Y=Y[$]),Y)if(T>=0&&T<=_.width-F&&I>=0&&I<=_.height-B){ce.bindFramebuffer(k.FRAMEBUFFER,Y);const ee=_.textures[Z],oe=ee.format,ne=ee.type;if(!he.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.bufferData(k.PIXEL_PACK_BUFFER,O.byteLength,k.STREAM_READ),_.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Z),k.readPixels(T,I,F,B,$e.convert(oe),$e.convert(ne),0);const Le=D!==null?ye.get(D).__webglFramebuffer:null;ce.bindFramebuffer(k.FRAMEBUFFER,Le);const Te=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await P0(k,Te,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,O),k.deleteBuffer(ge),k.deleteSync(Te),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,T=null,I=0){const F=Math.pow(2,-I),B=Math.floor(_.image.width*F),O=Math.floor(_.image.height*F),$=T!==null?T.x:0,Z=T!==null?T.y:0;Pe.setTexture2D(_,0),k.copyTexSubImage2D(k.TEXTURE_2D,I,0,0,$,Z,B,O),ce.unbindTexture()};const mi=k.createFramebuffer(),x=k.createFramebuffer();this.copyTextureToTexture=function(_,T,I=null,F=null,B=0,O=null){O===null&&(B!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),O=B,B=0):O=0);let $,Z,Y,ee,oe,ne,ge,Le,Te;const Ae=_.isCompressedTexture?_.mipmaps[O]:_.image;if(I!==null)$=I.max.x-I.min.x,Z=I.max.y-I.min.y,Y=I.isBox3?I.max.z-I.min.z:1,ee=I.min.x,oe=I.min.y,ne=I.isBox3?I.min.z:0;else{const _t=Math.pow(2,-B);$=Math.floor(Ae.width*_t),Z=Math.floor(Ae.height*_t),_.isDataArrayTexture?Y=Ae.depth:_.isData3DTexture?Y=Math.floor(Ae.depth*_t):Y=1,ee=0,oe=0,ne=0}F!==null?(ge=F.x,Le=F.y,Te=F.z):(ge=0,Le=0,Te=0);const Be=$e.convert(T.format),Ne=$e.convert(T.type);let it;T.isData3DTexture?(Pe.setTexture3D(T,0),it=k.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(Pe.setTexture2DArray(T,0),it=k.TEXTURE_2D_ARRAY):(Pe.setTexture2D(T,0),it=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,T.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,T.unpackAlignment);const tt=k.getParameter(k.UNPACK_ROW_LENGTH),mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),st=k.getParameter(k.UNPACK_SKIP_PIXELS),yt=k.getParameter(k.UNPACK_SKIP_ROWS),Ft=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ae.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ae.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ee),k.pixelStorei(k.UNPACK_SKIP_ROWS,oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ne);const ot=_.isDataArrayTexture||_.isData3DTexture,ht=T.isDataArrayTexture||T.isData3DTexture;if(_.isDepthTexture){const _t=ye.get(_),Lt=ye.get(T),Kt=ye.get(_t.__renderTarget),Rn=ye.get(Lt.__renderTarget);ce.bindFramebuffer(k.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Gn=0;Gn<Y;Gn++)ot&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ye.get(_).__webglTexture,B,ne+Gn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,O,Te+Gn)),k.blitFramebuffer(ee,oe,$,Z,ge,Le,$,Z,k.DEPTH_BUFFER_BIT,k.NEAREST);ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(B!==0||_.isRenderTargetTexture||ye.has(_)){const _t=ye.get(_),Lt=ye.get(T);ce.bindFramebuffer(k.READ_FRAMEBUFFER,mi),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,x);for(let Kt=0;Kt<Y;Kt++)ot?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,_t.__webglTexture,B,ne+Kt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_t.__webglTexture,B),ht?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Lt.__webglTexture,O,Te+Kt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Lt.__webglTexture,O),B!==0?k.blitFramebuffer(ee,oe,$,Z,ge,Le,$,Z,k.COLOR_BUFFER_BIT,k.NEAREST):ht?k.copyTexSubImage3D(it,O,ge,Le,Te+Kt,ee,oe,$,Z):k.copyTexSubImage2D(it,O,ge,Le,ee,oe,$,Z);ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ht?_.isDataTexture||_.isData3DTexture?k.texSubImage3D(it,O,ge,Le,Te,$,Z,Y,Be,Ne,Ae.data):T.isCompressedArrayTexture?k.compressedTexSubImage3D(it,O,ge,Le,Te,$,Z,Y,Be,Ae.data):k.texSubImage3D(it,O,ge,Le,Te,$,Z,Y,Be,Ne,Ae):_.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,ge,Le,$,Z,Be,Ne,Ae.data):_.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,ge,Le,Ae.width,Ae.height,Be,Ae.data):k.texSubImage2D(k.TEXTURE_2D,O,ge,Le,$,Z,Be,Ne,Ae);k.pixelStorei(k.UNPACK_ROW_LENGTH,tt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,st),k.pixelStorei(k.UNPACK_SKIP_ROWS,yt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ft),O===0&&T.generateMipmaps&&k.generateMipmap(it),ce.unbindTexture()},this.initRenderTarget=function(_){ye.get(_).__webglFramebuffer===void 0&&Pe.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Pe.setTextureCube(_,0):_.isData3DTexture?Pe.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Pe.setTexture2DArray(_,0):Pe.setTexture2D(_,0),ce.unbindTexture()},this.resetState=function(){M=0,N=0,D=null,ce.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const VT=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:xm,AddEquation:ir,AddOperation:mm,AdditiveAnimationBlendMode:Yu,AdditiveBlending:uu,AgXToneMapping:Ic,AlphaFormat:Wu,AlwaysCompare:Om,AlwaysDepth:Tc,AlwaysStencilFunc:mu,AmbientLight:yg,AnimationAction:Pg,AnimationClip:eo,AnimationLoader:ix,AnimationMixer:Rx,AnimationObjectGroup:Ax,AnimationUtils:Qv,ArcCurve:$m,ArrayCamera:Ag,ArrowHelper:ey,AttachedBindMode:pu,Audio:Rg,AudioAnalyser:_x,AudioContext:Ad,AudioListener:px,AudioLoader:ux,AxesHelper:ty,BackSide:wn,BasicDepthPacking:Am,BasicShadowMap:N_,BatchedMesh:qm,Bone:Al,BooleanKeyframeTrack:is,Box2:kx,Box3:qt,Box3Helper:jx,BoxGeometry:ns,BoxHelper:Jx,BufferAttribute:At,BufferGeometry:dt,BufferGeometryLoader:Eg,ByteType:zu,Cache:yi,Camera:Tl,CameraHelper:$x,CanvasTexture:bv,CapsuleGeometry:Pl,CatmullRomCurve3:Jm,CineonToneMapping:vm,CircleGeometry:Dl,ClampToEdgeWrapping:Fn,Clock:Cg,Color:Fe,ColorKeyframeTrack:xd,ColorManagement:vt,CompressedArrayTexture:yv,CompressedCubeTexture:Mv,CompressedTexture:Il,CompressedTextureLoader:rx,ConeGeometry:sa,ConstantAlphaFactor:dm,ConstantColorFactor:hm,Controls:Ng,CubeCamera:Vm,CubeReflectionMapping:Vi,CubeRefractionMapping:lr,CubeTexture:ta,CubeTextureLoader:sx,CubeUVReflectionMapping:to,CubicBezierCurve:hd,CubicBezierCurve3:jm,CubicInterpolant:gg,CullFaceBack:hu,CullFaceFront:Kp,CullFaceFrontBack:L_,CullFaceNone:Zp,Curve:pi,CurvePath:eg,CustomBlending:$p,CustomToneMapping:ym,CylinderGeometry:ra,Cylindrical:Bx,Data3DTexture:bl,DataArrayTexture:Ml,DataTexture:Mi,DataTextureLoader:Md,DataUtils:Hr,DecrementStencilOp:X_,DecrementWrapStencilOp:q_,DefaultLoadingManager:ss,DepthFormat:Ys,DepthStencilFormat:qs,DepthTexture:ad,DetachedBindMode:bm,DirectionalLight:wd,DirectionalLightHelper:Kx,DiscreteInterpolant:_g,DodecahedronGeometry:Ll,DoubleSide:si,DstAlphaFactor:sm,DstColorFactor:am,DynamicCopyUsage:c0,DynamicDrawUsage:n0,DynamicReadUsage:s0,EdgesGeometry:Km,EllipseCurve:Nl,EqualCompare:Dm,EqualDepth:wc,EqualStencilFunc:J_,EquirectangularReflectionMapping:Vs,EquirectangularRefractionMapping:Fo,Euler:zn,EventDispatcher:Ti,ExternalTexture:cd,ExtrudeGeometry:Ul,FileLoader:Hn,Float16BufferAttribute:j0,Float32BufferAttribute:Ge,FloatType:jt,Fog:wl,FogExp2:El,FramebufferTexture:xv,FrontSide:bi,Frustum:no,FrustumArray:Cl,GLBufferAttribute:Nx,GLSL1:h0,GLSL3:gu,GreaterCompare:Lm,GreaterDepth:Cc,GreaterEqualCompare:Um,GreaterEqualDepth:Ac,GreaterEqualStencilFunc:t0,GreaterStencilFunc:Q_,GridHelper:qx,Group:Oi,HalfFloatType:Nn,HemisphereLight:xg,HemisphereLightHelper:Yx,IcosahedronGeometry:Ol,ImageBitmapLoader:wg,ImageLoader:Yo,ImageUtils:km,IncrementStencilOp:W_,IncrementWrapStencilOp:Y_,InstancedBufferAttribute:Kr,InstancedBufferGeometry:Tg,InstancedInterleavedBuffer:Lx,InstancedMesh:rd,Int16BufferAttribute:$0,Int32BufferAttribute:J0,Int8BufferAttribute:q0,IntType:ml,InterleavedBuffer:na,InterleavedBufferAttribute:ur,Interpolant:so,InterpolateDiscrete:Zs,InterpolateLinear:Ks,InterpolateSmooth:fc,InterpolationSamplingMode:f0,InterpolationSamplingType:d0,InvertStencilOp:Z_,KeepStencilOp:Dr,KeyframeTrack:jn,LOD:Ym,LatheGeometry:Fl,Layers:Sl,LessCompare:Pm,LessDepth:Ec,LessEqualCompare:Zu,LessEqualDepth:Zr,LessEqualStencilFunc:j_,LessStencilFunc:$_,Light:pr,LightProbe:Sg,Line:Wi,Line3:Dg,LineBasicMaterial:vn,LineCurve:ud,LineCurve3:Qm,LineDashedMaterial:fg,LineLoop:sd,LineSegments:fi,LinearFilter:Dt,LinearInterpolant:vd,LinearMipMapLinearFilter:B_,LinearMipMapNearestFilter:F_,LinearMipmapLinearFilter:Kn,LinearMipmapNearestFilter:ks,LinearSRGBColorSpace:Ut,LinearToneMapping:gm,LinearTransfer:ko,Loader:xn,LoaderUtils:ar,LoadingManager:yd,LoopOnce:Sm,LoopPingPong:Em,LoopRepeat:Tm,MOUSE:Wr,Material:rn,MaterialLoader:Wl,MathUtils:$u,Matrix2:Pd,Matrix3:ft,Matrix4:je,MaxEquation:em,Mesh:Vt,MeshBasicMaterial:En,MeshDepthMaterial:md,MeshDistanceMaterial:gd,MeshLambertMaterial:ug,MeshMatcapMaterial:dg,MeshNormalMaterial:hg,MeshPhongMaterial:cg,MeshPhysicalMaterial:Jn,MeshStandardMaterial:aa,MeshToonMaterial:lg,MinEquation:Qp,MirroredRepeatWrapping:Gs,MixOperation:pm,MultiplyBlending:fu,MultiplyOperation:Qo,NearestFilter:nn,NearestMipMapLinearFilter:O_,NearestMipMapNearestFilter:U_,NearestMipmapLinearFilter:Br,NearestMipmapNearestFilter:pl,NeutralToneMapping:Mm,NeverCompare:Im,NeverDepth:Sc,NeverStencilFunc:K_,NoBlending:Bi,NoColorSpace:Ni,NoToneMapping:ki,NormalAnimationBlendMode:yl,NormalBlending:Xr,NotEqualCompare:Nm,NotEqualDepth:Rc,NotEqualStencilFunc:e0,NumberKeyframeTrack:Jr,Object3D:bt,ObjectLoader:lx,ObjectSpaceNormalMap:Rm,OctahedronGeometry:oa,OneFactor:nm,OneMinusConstantAlphaFactor:fm,OneMinusConstantColorFactor:um,OneMinusDstAlphaFactor:om,OneMinusDstColorFactor:cm,OneMinusSrcAlphaFactor:bc,OneMinusSrcColorFactor:rm,OrthographicCamera:oo,PCFShadowMap:ku,PCFSoftShadowMap:Ao,PMREMGenerator:Tu,Path:ll,PerspectiveCamera:tn,Plane:Li,PlaneGeometry:io,PlaneHelper:Qx,PointLight:Ed,PointLightHelper:Wx,Points:od,PointsMaterial:Rl,PolarGridHelper:Zx,PolyhedronGeometry:fr,PositionalAudio:gx,PropertyBinding:Et,PropertyMixer:Ig,QuadraticBezierCurve:dd,QuadraticBezierCurve3:fd,Quaternion:fn,QuaternionKeyframeTrack:jr,QuaternionLinearInterpolant:vg,RED_GREEN_RGTC2_Format:il,RED_RGTC1_Format:tl,REVISION:dl,RGBADepthPacking:Cm,RGBAFormat:Yt,RGBAIntegerFormat:xl,RGBA_ASTC_10x10_Format:Kc,RGBA_ASTC_10x5_Format:Yc,RGBA_ASTC_10x6_Format:qc,RGBA_ASTC_10x8_Format:Zc,RGBA_ASTC_12x10_Format:$c,RGBA_ASTC_12x12_Format:Jc,RGBA_ASTC_4x4_Format:Bc,RGBA_ASTC_5x4_Format:kc,RGBA_ASTC_5x5_Format:zc,RGBA_ASTC_6x5_Format:Hc,RGBA_ASTC_6x6_Format:Vc,RGBA_ASTC_8x5_Format:Gc,RGBA_ASTC_8x6_Format:Wc,RGBA_ASTC_8x8_Format:Xc,RGBA_BPTC_Format:jc,RGBA_ETC2_EAC_Format:Fc,RGBA_PVRTC_2BPPV1_Format:Nc,RGBA_PVRTC_4BPPV1_Format:Lc,RGBA_S3TC_DXT1_Format:Ro,RGBA_S3TC_DXT3_Format:Io,RGBA_S3TC_DXT5_Format:Po,RGBDepthPacking:z_,RGBFormat:Xu,RGBIntegerFormat:k_,RGB_BPTC_SIGNED_Format:Qc,RGB_BPTC_UNSIGNED_Format:el,RGB_ETC1_Format:Uc,RGB_ETC2_Format:Oc,RGB_PVRTC_2BPPV1_Format:Dc,RGB_PVRTC_4BPPV1_Format:Pc,RGB_S3TC_DXT1_Format:Co,RGDepthPacking:H_,RGFormat:rr,RGIntegerFormat:vl,RawShaderMaterial:ag,Ray:Xi,Raycaster:Ux,RectAreaLight:Mg,RedFormat:sr,RedIntegerFormat:ea,ReinhardToneMapping:_m,RenderTarget:Ju,RenderTarget3D:Ix,RepeatWrapping:hr,ReplaceStencilOp:G_,ReverseSubtractEquation:jp,RingGeometry:Bl,SIGNED_RED_GREEN_RGTC2_Format:rl,SIGNED_RED_RGTC1_Format:nl,SRGBColorSpace:Wt,SRGBTransfer:Rt,Scene:td,ShaderChunk:rt,ShaderLib:Yn,ShaderMaterial:hi,ShadowMaterial:og,Shape:qr,ShapeGeometry:kl,ShapePath:ny,ShapeUtils:oi,ShortType:Hu,Skeleton:ia,SkeletonHelper:Gx,SkinnedMesh:id,Source:or,Sphere:Zt,SphereGeometry:ro,Spherical:bu,SphericalHarmonics3:bg,SplineCurve:pd,SpotLight:Td,SpotLightHelper:Vx,Sprite:Xm,SpriteMaterial:nd,SrcAlphaFactor:Mc,SrcAlphaSaturateFactor:lm,SrcColorFactor:im,StaticCopyUsage:a0,StaticDrawUsage:zo,StaticReadUsage:r0,StereoCamera:dx,StreamCopyUsage:l0,StreamDrawUsage:i0,StreamReadUsage:o0,StringKeyframeTrack:rs,SubtractEquation:Jp,SubtractiveBlending:du,TOUCH:Fr,TangentSpaceNormalMap:dr,TetrahedronGeometry:zl,Texture:Bt,TextureLoader:bd,TextureUtils:ay,Timer:Ox,TimestampQuery:u0,TorusGeometry:Hl,TorusKnotGeometry:Vl,Triangle:Ln,TriangleFanDrawMode:sl,TriangleStripDrawMode:qu,TrianglesDrawMode:wm,TubeGeometry:Gl,UVMapping:fl,Uint16BufferAttribute:ju,Uint32BufferAttribute:Qu,Uint8BufferAttribute:Z0,Uint8ClampedBufferAttribute:K0,Uniform:Id,UniformsGroup:Dx,UniformsLib:Oe,UniformsUtils:ed,UnsignedByteType:li,UnsignedInt101111Type:Gu,UnsignedInt248Type:Xs,UnsignedInt5999Type:Vu,UnsignedIntType:Gi,UnsignedShort4444Type:gl,UnsignedShort5551Type:_l,UnsignedShortType:Ws,VSMShadowMap:vi,Vector2:se,Vector3:P,Vector4:xt,VectorKeyframeTrack:Qr,VideoFrameTexture:vv,VideoTexture:Zm,WebGL3DRenderTarget:O0,WebGLArrayRenderTarget:U0,WebGLCoordinateSystem:Bn,WebGLCubeRenderTarget:Gm,WebGLRenderTarget:Si,WebGLRenderer:Hg,WebGLUtils:zg,WebGPUCoordinateSystem:$s,WebXRController:pc,WireframeGeometry:sg,WrapAroundEnding:Bo,ZeroCurvatureEnding:kr,ZeroFactor:tm,ZeroSlopeEnding:zr,ZeroStencilOp:V_,createCanvasElement:Bm},Symbol.toStringTag,{value:"Module"})),Cp=Symbol(),GT=r=>typeof r?.subscribe=="function",Vg=(r,e,t)=>{const n=r().map(o=>GT(o)?yc(o):Cp),i=_n(()=>r().map((o,a)=>n[a]===Cp?o:n[a].current)),s=()=>{R(i);let o;return ai(()=>{o=e(R(i))}),o};t?hn(s):cr(s)},WT=(r,e)=>Vg(r,e,!1),XT=(r,e)=>Vg(r,e,!0),Rp=Object.assign(WT,{pre:XT}),ri=(r,e)=>r?.[`is${e}`]===!0,Jh=r=>{const e=Hi(void 0),t=Hi(void 0);return r.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(r,e),{error:t,promise:r})},YT=typeof window<"u",Di=(r,e)=>{const t=Jo(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});ts(()=>{i(),n&&n()})},un=r=>{const e=Hi(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},qT=r=>({subscribe:r.subscribe,get current(){return r.current}}),Gg=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},ZT=r=>{const{dom:e,canvas:t}=r,n=un({width:e.offsetWidth,height:e.offsetHeight});Uu(()=>{const s=new ResizeObserver(()=>{const{offsetWidth:o,offsetHeight:a}=e;(n.current.width!==o||n.current.height!==a)&&n.set({width:o,height:a})});return s.observe(e),()=>{s.disconnect()}});const i={dom:e,canvas:t,size:qT(n)};return $n("threlte-dom-context",i),i},Ld=()=>{const r=An("threlte-dom-context");if(!r)throw new Error("useDOM can only be used in a child component to <Canvas>.");return r};function KT(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class nr{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=KT();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!n?.after&&!n?.before&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n?.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n?.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,a)=>{o===0&&t.push(a)});t.length>0;){const o=t.shift();n.push(o);const a=i.find(c=>c===o);a&&this.connectedVertices[a]?.next.forEach(c=>{const l=(e.get(c)||0)-1;e.set(c,l),l===0&&t.push(c)})}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class $T{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class JT extends nr{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const i=new $T(this,e,t);return this.add(e,i,n),i}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(i=>{const s=performance.now();i.run(n??e);const o=performance.now()-s;t[i.key]=o})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class jT extends nr{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new JT(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},i=performance.now();return this.forEachNode(s=>{const o=performance.now(),a=s.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),c=performance.now()-o;n[s.key.toString()]={duration:c,tasks:a}}),{total:performance.now()-i,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const QT=r=>{const e=new jT,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:un(r.autoRender??!0),renderMode:un(r.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,s){n.shouldRender()&&s()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return cr(()=>{n.autoRender.set(r.autoRender??!0)}),cr(()=>{n.renderMode.set(r.renderMode??"on-demand")}),ts(()=>{n.scheduler.dispose()}),$n("threlte-scheduler-context",n),n},Yl=()=>{const r=An("threlte-scheduler-context");if(!r)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return r},eE=()=>{const{size:r}=Ld(),{invalidate:e}=Yl(),t=new tn(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=un(t);Di(r,s=>{if(n.current===t){const o=n.current;o.aspect=s.width/s.height,o.updateProjectionMatrix(),e()}}),Di(n,s=>{s===void 0&&n.set(t)});const i={camera:n};return $n("threlte-camera-context",i),i},Wg=()=>{const r=An("threlte-camera-context");if(!r)throw new Error("useCamera can only be used in a child component to <Canvas>.");return r},tE=()=>{const r={removeObjectFromDisposal:e=>{r.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=r.disposableObjects.get(e);t?r.disposableObjects.set(e,t+1):r.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=r.disposableObjects.get(e);t&&t>0&&(r.disposableObjects.set(e,t-1),t-1<=0&&(r.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await Wp(),!(!r.shouldDispose&&!e)&&(r.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),r.disposableObjects.delete(n))}),r.shouldDispose=!1)}};return ts(()=>{r.dispose(!0)}),$n("threlte-disposal-context",r),r},Xg=()=>{const r=An("threlte-disposal-context");if(!r)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return r},Yg=Symbol("threlte-parent-context"),qg=r=>{const e=un(r);return $n(Yg,e),e},Zg=()=>An(Yg),hl=Symbol("threlte-parent-object3d-context"),nE=r=>{const e=Ou(r);return $n(hl,e),e},iE=r=>{const e=An(hl),t=Hi(r),n=Jo([t,e],([i,s])=>i??s);return $n(hl,n),t},rE=()=>An(hl);function Kg(r,e,t){if(!YT)return{task:void 0,start:()=>{},stop:()=>{},started:Ou(!1)};let n,i,s;nr.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=Yl();let a=o.mainStage;if(s){if(s.stage)if(nr.isValue(s.stage))a=s.stage;else{const d=o.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);a=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const f=s.after[d];if(nr.isValue(f)){a=f.stage;break}}else nr.isValue(s.after)&&(a=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const f=s.before[d];if(nr.isValue(f)){a=f.stage;break}}else nr.isValue(s.before)&&(a=s.before.stage)}const c=Hi(!1),l=a.createTask(n,i,s),h=()=>{c.set(!0),(s?.autoInvalidate??!0)&&o.autoInvalidations.add(i),l.start()},u=()=>{c.set(!1),(s?.autoInvalidate??!0)&&o.autoInvalidations.delete(i),l.stop()};return s?.autoStart??!0?h():u(),ts(()=>{u(),a.removeTask(n)}),{task:l,start:h,stop:u,started:{subscribe:c.subscribe}}}const sE=r=>{const e={scene:new td};return $n("threlte-scene-context",e),e},$g=()=>{const r=An("threlte-scene-context");if(!r)throw new Error("useScene can only be used in a child component to <Canvas>.");return r},oE=r=>{const{dispose:e}=Xg(),{camera:t}=Wg(),{scene:n}=$g(),{invalidate:i,renderStage:s,autoRender:o,scheduler:a,resetFrameInvalidation:c}=Yl(),{size:l,canvas:h}=Ld(),u=r.createRenderer?r.createRenderer(h):new Hg({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),d=s.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(n,t.current)}),f={renderer:u,colorManagementEnabled:un(r.colorManagementEnabled??!0),colorSpace:un(r.colorSpace??"srgb"),dpr:un(r.dpr??window.devicePixelRatio),shadows:un(r.shadows??Ao),toneMapping:un(r.toneMapping??Ic),autoRenderTask:d};$n("threlte-renderer-context",f),Di([f.colorManagementEnabled],([g])=>{vt.enabled=g}),Di([f.colorSpace],([g])=>{"outputColorSpace"in u&&(u.outputColorSpace=g)}),Di([f.dpr],([g])=>{"setPixelRatio"in u&&u.setPixelRatio(g)});const{start:p,stop:v}=Kg(()=>{!("xr"in u)||u.xr?.isPresenting||(u.setSize(l.current.width,l.current.height),i(),v())},{before:d,autoStart:!1,autoInvalidate:!1});return Di([l],()=>{p()}),Di([f.shadows],([g])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!g,g&&g!==!0?u.shadowMap.type=g:g===!0&&(u.shadowMap.type=Ao))}),Di([f.toneMapping],([g])=>{"toneMapping"in u&&(u.toneMapping=g)}),Di([o],([g])=>(g?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(m=>{e(),a.run(m),c()}),ts(()=>{if("dispose"in f.renderer){const g=f.renderer.dispose;g()}}),hn(()=>{f.colorManagementEnabled.set(r.colorManagementEnabled??!0)}),hn(()=>{f.colorSpace.set(r.colorSpace??"srgb")}),hn(()=>{f.toneMapping.set(r.toneMapping??Ic)}),hn(()=>{f.shadows.set(r.shadows??Ao)}),hn(()=>{f.dpr.set(r.dpr??window.devicePixelRatio)}),f},aE=()=>{const r=An("threlte-renderer-context");if(!r)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return r},cE=()=>{const r=un({});return $n("threlte-user-context",r),r},lE=()=>{const r=An("threlte-user-context");if(!r)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return r},hE=r=>{const{scene:e}=sE();return{scene:e,...ZT(r),...D_(),...qg(e),...nE(e),...tE(),...QT(r),...eE(),...oE(r),...cE()}};function uE(r,e){ui(e,!0);let t=jo(e,["$$slots","$$events","$$legacy","children"]);hE(t);var n=dn(),i=It(n);Gr(i,()=>e.children),pt(r,n),di()}var dE=kt('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function fE(r,e){let t=jo(e,["$$slots","$$events","$$legacy","children"]),n=xc(void 0),i=xc(void 0);var s=dE(),o=Sn(s),a=Sn(o);{var c=l=>{uE(l,Fs({get dom(){return R(i)},get canvas(){return R(n)}},()=>t,{children:(h,u)=>{var d=dn(),f=It(d);Gr(f,()=>e.children??Os),pt(h,d)},$$slots:{default:!0}}))};qn(a,l=>{R(n)&&R(i)&&l(c)})}en(o),lu(o,l=>Nt(n,l),()=>R(n)),en(s),lu(s,l=>Nt(i,l),()=>R(i)),pt(r,s)}const co=()=>{const r=Yl(),e=aE(),t=Wg(),n=$g(),i=Ld();return{advance:r.advance,autoRender:r.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:r.invalidate,mainStage:r.mainStage,renderer:e.renderer,renderMode:r.renderMode,renderStage:r.renderStage,scheduler:r.scheduler,shadows:e.shadows,shouldRender:r.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(o){n.scene=o}}},pE=r=>typeof r=="object"&&r!==null,mE=(r,e)=>{const{invalidate:t}=co(),n=_n(r),i=_n(e),s=yc(Zg()),o=yc(rE()),a=qg(),c=iE();hn(()=>{a.set(R(n)),ri(R(n),"Object3D")&&c.set(R(n)),t()}),hn(()=>{t();const l=R(n);if(R(i)===void 0&&ri(l,"Object3D"))return o.current?.add(l),()=>{t(),o.current?.remove(l)};if(R(i)===void 0&&pE(s.current)){const h=s.current;if(ri(l,"Material")){const u=h.material;return h.material=l,()=>{t(),h.material=u}}else if(ri(l,"BufferGeometry")){const u=h.geometry;return h.geometry=l,()=>{t(),h.geometry=u}}}if(R(i)===!1)return()=>{t()};if(typeof R(i)=="function"){const h=R(i)({ref:l,parent:s.current,parentObject3D:o.current});return()=>{t(),h?.()}}if(typeof R(i)=="string"){const{target:h,key:u}=Gg(s.current,R(i)),d=h[u];return h[u]=l,()=>{t(),h[u]=d}}if(ri(R(i),"Object3D")&&ri(l,"Object3D"))return R(i).add(l),()=>{t(),R(i).remove(l)}})},jh=new Set,gE=(r,e,t)=>{const{invalidate:n,size:i,camera:s}=co(),o=_n(r),a=yc(i);hn(()=>{if(!t())return;const c=R(o);return jh.add(c),s.set(c),n(),()=>{jh.delete(c),jh.size===0&&(s.set(void 0),n())}}),hn(()=>{if(e())return;const{width:c,height:l}=a.current;ri(R(o),"PerspectiveCamera")?R(o).aspect=c/l:ri(R(o),"OrthographicCamera")&&(R(o).left=c/-2,R(o).right=c/2,R(o).top=l/2,R(o).bottom=l/-2),R(o).updateProjectionMatrix(),R(o).updateMatrixWorld(),n()})},wu=Symbol("threlte-disposable-object-context"),_E=r=>typeof r?.dispose=="function",vE=r=>{const e=An(wu),t=_n(()=>r()??e?.()??!0);$n(wu,()=>R(t))},xE=r=>{const e=_n(r),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:i}=Xg(),s=An(wu),o=_n(()=>s?.()??!0);cr(()=>{if(R(o))return t(R(e)),()=>n(R(e));i(R(e))})},yE=r=>r!==null&&typeof r=="object"&&"addEventListener"in r&&"removeEventListener"in r,ME=(r,e,t)=>{const n=_n(r);for(const i of e){const s=_n(()=>t[i]);i.startsWith("on")&&hn(()=>{if(typeof R(s)!="function"||!yE(R(n)))return;const o=i.slice(2);return R(n).addEventListener(o,R(s)),()=>R(n).removeEventListener(o,R(s))})}};let Au;const bE=r=>{Au=r},SE=()=>{const r=Au;return Au=void 0,r},TE="threlte-plugin-context",EE=r=>{const e=An(TE);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const i=r();for(let s=0;s<n.length;s++){const o=n[s],a=o(i);a&&a.pluginProps&&t.push(...a.pluginProps)}}return{pluginsProps:t}},wE=new Set(["$$scope","$$slots","type","args","attach","instance"]),AE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),CE=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Ip=(r,e,t)=>!Array.isArray(t)&&typeof t=="number"&&typeof r[e]=="object"&&r[e]!==null&&typeof r[e]?.setScalar=="function"&&!r[e]?.isColor?(n,i,s)=>{n[i].setScalar(s)}:typeof r[e]?.set=="function"&&typeof r=="object"&&r!==null?Array.isArray(t)?(n,i,s)=>{n[i].set(...s)}:(n,i,s)=>{n[i].set(s)}:(n,i,s)=>{n[i]=s},RE=()=>{const{invalidate:r}=co(),e=new Map,t=new Map,n=(s,o,a,c)=>{if(CE(a)){const u=e.get(o);if(u&&u.instance===s&&u.value===a)return;e.set(o,{instance:s,value:a})}const{key:l,target:h}=Gg(s,o);if(a!=null){const u=t.get(o);if(u)u(h,l,a);else{const d=Ip(h,l,a);t.set(o,d),d(h,l,a)}}else Ip(h,l,a)(h,l,a);c||AE.has(l)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(s,o,a,c,l)=>{!wE.has(o)&&!c?.includes(o)&&n(s,o,a,l),r()}}},IE=r=>typeof r=="function"&&Function.prototype.toString.call(r).startsWith("class "),PE=(r,e)=>IE(r)?Array.isArray(e)?new r(...e):new r:r;function Qh(r,e){ui(e,!0);let t=wt(e,"is",19,SE),n=wt(e,"manual",3,!1),i=wt(e,"makeDefault",3,!1),s=wt(e,"ref",15),o=jo(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const a=_n(()=>PE(t(),e.args));hn(()=>{s()!==R(a)&&s(R(a))});const c=EE(()=>({get ref(){return R(a)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return o}})),l=Object.keys(o),{updateProp:h}=RE();l.forEach(f=>{const p=_n(()=>o[f]);hn(()=>{h(R(a),f,R(p),c?.pluginsProps,n())})}),mE(()=>R(a),()=>e.attach),hn(()=>{(ri(R(a),"PerspectiveCamera")||ri(R(a),"OrthographicCamera"))&&gE(()=>R(a),()=>n(),()=>i())}),vE(()=>e.dispose),hn(()=>{_E(R(a))&&xE(()=>R(a))}),ME(()=>R(a),l,o),cr(()=>{R(a);let f;return ai(()=>{f=e.oncreate?.(R(a))}),f});var u=dn(),d=It(u);Gr(d,()=>e.children??Os,()=>({ref:R(a)})),pt(r,u),di()}const DE={},xe=new Proxy(Qh,{get(r,e){if(typeof e!="string")return Qh;const t=DE[e]||VT[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return bE(t),Qh}});function LE(r,e,t){const n=lE();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>{if(r in i)return i;const s=typeof e=="function"?e():e;return i[r]=s,i}),n.current[r]):Jo(n,i=>i[r])}function NE(r,e){const{remember:t,clear:n}=qp();let i;const s=()=>{const c=new r(...e?.args??[]);return e?.extend?.(c),c};return{load:(c,l)=>{const h=async u=>{if(i||(i=s()),"loadAsync"in i){const d=await i.loadAsync(u,l?.onProgress);return l?.transform?.(d)??d}else return new Promise((d,f)=>{i.load(u,p=>d(l?.transform?.(p)??p),p=>l?.onProgress?.(p),f)})};if(Array.isArray(c)){const u=c.map(f=>t(()=>h(f),[r,f]));return Jh(Promise.all(u))}else if(typeof c=="string"){const u=t(()=>h(c),[r,c]);return Jh(u)}else{const u=Object.values(c).map(f=>t(()=>h(f),[r,f]));return Jh(Promise.all(u).then(f=>Object.fromEntries(Object.entries(c).map(([p],v)=>[p,f[v]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([r,l])}):typeof c=="string"?n([r,c]):Object.entries(c).forEach(([l,h])=>{n([r,l,h])})},loader:i}}function Pp(r,e){if(e===wm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===sl||e===qu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===sl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class UE extends xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new ew(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ar.extractUrlBase(e);o=ar.resolveURL(l,this.path)}else o=ar.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Hn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jg){try{o[Mt.KHR_BINARY_GLTF]=new tw(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new pw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Mt.KHR_MATERIALS_UNLIT:o[u]=new BE;break;case Mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new nw(s,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:o[u]=new iw;break;case Mt.KHR_MESH_QUANTIZATION:o[u]=new rw;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function OE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FE{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ut);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ed(h),l.distance=u;break;case"spot":l=new Td(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),xi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class BE{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Wt))}return Promise.all(i)}}class kE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class zE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(s)}}class HE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class VE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class GE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class WE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class XE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],Ut),Promise.all(s)}}class YE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class qE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(s)}}class ZE{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class KE{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class $E{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class JE{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class jE{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class QE{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class ew{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Xn.TRIANGLES&&l.mode!==Xn.TRIANGLE_STRIP&&l.mode!==Xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const p of u){const v=new je,g=new P,m=new fn,S=new P(1,1,1),y=new rd(p.geometry,p.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&S.fromBufferAttribute(c.SCALE,b),y.setMatrixAt(b,v.compose(g,m,S));for(const b in c)if(b==="_COLOR_0"){const C=c[b];y.instanceColor=new Kr(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&p.geometry.setAttribute(b,c[b]);bt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Jg="glTF",So=12,Dp={JSON:1313821514,BIN:5130562};class tw{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,So),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-So,s=new DataView(e,So);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Dp.JSON){const l=new Uint8Array(e,So+o,a);this.content=n.decode(l)}else if(c===Dp.BIN){const l=So+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Cu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Cu[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Hs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const v=f.attributes[p],g=c[p];g!==void 0&&(v.normalized=g)}u(f)},a,l,Ut,d)})})}}class iw{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rw{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class jg extends so{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,v=p-l,g=-2*f+3*d,m=f-d,S=1-g,y=m-d+u;for(let b=0;b!==a;b++){const C=o[v+b+a],M=o[v+b+c]*h,N=o[p+b+a],D=o[p+b]*h;s[b]=S*C+y*M+g*N+m*D}return s}}const sw=new fn;class ow extends jg{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return sw.fromArray(s).normalize().toArray(s),s}}const Xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lp={9728:nn,9729:Dt,9984:pl,9985:ks,9986:Br,9987:Kn},Np={33071:Fn,33648:Gs,10497:hr},eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aw={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Zs},tu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),r.DefaultMaterial}function Ir(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lw(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function hw(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uw(r){let e;const t=r.extensions&&r.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nu(t.attributes):e=r.indices+":"+nu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+nu(r.targets[n]);return e}function nu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ru(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fw=new je;class pw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new bd(this.options.manager):this.textureLoader=new wg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ir(s,a,i),xi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ar.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=eu[i.type],a=Hs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new At(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=eu[i.type],l=Hs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let v,g;if(f&&f!==u){const m=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(S);y||(v=new l(a,m*f,i.count*f/h),y=new na(v,f/h),t.cache.add(S,y)),g=new ur(y,c,d%f/h,p)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),g=new At(v,c,p);if(i.sparse!==void 0){const m=eu.SCALAR,S=Hs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new S(o[1],y,i.sparse.count*m),M=new l(o[2],b,i.sparse.count*c);a!==null&&(g=new At(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let N=0,D=C.length;N<D;N++){const E=C[N];if(g.setX(E,M[N*c]),c>=2&&g.setY(E,M[N*c+1]),c>=3&&g.setZ(E,M[N*c+2]),c>=4&&g.setW(E,M[N*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Lp[d.magFilter]||Dt,h.minFilter=Lp[d.minFilter]||Kn,h.wrapS=Np[d.wrapS]||hr,h.wrapT=Np[d.wrapT]||hr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==Dt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){const g=new Bt(v);g.needsUpdate=!0,d(g)}),t.load(ar.resolveURL(u,s.path),p,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),xi(u,o),u.userData.mimeType=o.mimeType||dw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Rl,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new vn,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return aa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Mt.KHR_MATERIALS_UNLIT]){const u=i[Mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ut),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=si);const h=s.alphaMode||tu.OPAQUE;if(h===tu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===tu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new se(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==En&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==En){const u=s.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],Ut)}return s.emissiveTexture!==void 0&&o!==En&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Wt)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),xi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ir(i,u,s),u})}createUniqueName(e){const t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Up(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=uw(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Up(new dt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?cw(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const v=h[f],g=o[f];let m;const S=l[f];if(g.mode===Xn.TRIANGLES||g.mode===Xn.TRIANGLE_STRIP||g.mode===Xn.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new id(v,S):new Vt(v,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Xn.TRIANGLE_STRIP?m.geometry=Pp(m.geometry,qu):g.mode===Xn.TRIANGLE_FAN&&(m.geometry=Pp(m.geometry,sl));else if(g.mode===Xn.LINES)m=new fi(v,S);else if(g.mode===Xn.LINE_STRIP)m=new Wi(v,S);else if(g.mode===Xn.LINE_LOOP)m=new sd(v,S);else if(g.mode===Xn.POINTS)m=new od(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&hw(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),xi(m,s),g.extensions&&Ir(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ir(i,u[0],s),u[0];const d=new Oi;s.extensions&&Ir(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn($u.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new oo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new je;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ia(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],v=f.target,g=v.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,S=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(p),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],v=u[3],g=u[4],m=[];for(let y=0,b=d.length;y<b;y++){const C=d[y],M=f[y],N=p[y],D=v[y],E=g[y];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const w=n._createAnimationTracks(C,M,N,D,E);if(w)for(let L=0;L<w.length;L++)m.push(w[L])}const S=new eo(s,void 0,m);return xi(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fw)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Al:l.length>1?h=new Oi:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),xi(h,s),s.extensions&&Ir(n,h,s),s.matrix!==void 0){const u=new je;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Oi;n.name&&(s.name=i.createUniqueName(n.name)),xi(s,n),n.extensions&&Ir(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof rn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];er[s.path]===er.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(er[s.path]){case er.weights:l=Jr;break;case er.rotation:l=jr;break;case er.translation:case er.scale:l=Qr;break;default:switch(n.itemSize){case 1:l=Jr;break;case 2:case 3:default:l=Qr;break}break}const h=i.interpolation!==void 0?aw[i.interpolation]:Ks,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const p=new l(c[d]+"."+er[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ru(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof jr?ow:jg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mw(r,e,t){const n=e.attributes,i=new qt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=Ru(Hs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,c=new P;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const v=Ru(Hs[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Zt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Up(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Cu[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return vt.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),xi(r,e),mw(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?lw(r,e.targets,t):r})}const gw=r=>{const e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e};function _w(r,e){const t=e,n=NE(UE,{extend(o){t?.dracoLoader&&o.setDRACOLoader(t.dracoLoader),t?.meshoptDecoder&&o.setMeshoptDecoder(t.meshoptDecoder),t?.ktx2Loader&&o.setKTX2Loader(t.ktx2Loader)}});return(o=>n.load(o,{transform(a){return{...a,...gw(a.scene)}}}))(r)}const iu=new WeakMap;class vw extends xn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Hn(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Wt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Ut,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(iu.has(e)){const c=iu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[s]={resolve:l,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),iu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new dt;e.index&&t.setIndex(new At(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new At(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Wt)return;const n=new Fe;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),vt.colorSpaceToWorking(n,Wt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Hn(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=xw.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function xw(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),p=f.attributes.map(v=>v.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const p=a.GetEncodedGeometryType(c);if(p===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(p===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const g in h){const m=self[u[g]];let S,y;if(l.useUniqueIDs)y=h[g],S=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[g]]),y===-1)continue;S=a.GetAttribute(d,y)}const b=i(o,a,d,g,m,S);g==="color"&&(b.vertexColorSpace=l.vertexColorSpace),v.attributes.push(b)}return p===o.TRIANGULAR_MESH&&(v.index=n(o,a,d)),o.destroy(d),v}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),p=c.num_points()*d,v=p*h.BYTES_PER_ELEMENT,g=s(o,h),m=o._malloc(v);a.GetAttributeDataArrayForAllPoints(c,u,g,v,m);const S=new h(o.HEAPF32.buffer,m,p).slice();return o._free(m),{name:l,array:S,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const yw="https://www.gstatic.com/draco/versioned/decoders/1.4.3/",Op={},Mw=(r=yw)=>{const e=Op[r];if(e)return e;const t=new vw().setDecoderPath(r);return Op[r]=t,t},Pr=r=>({subscribe:r.subscribe,get current(){return r.current}});let Uo=0;const Nd=un(!1),ql=un(!1),Ud=un(void 0),Od=un(0),Fd=un(0),Qg=un([]),Bd=un(0),{onStart:bw,onLoad:Sw,onError:Tw}=ss;ss.onStart=(r,e,t)=>{bw?.(r,e,t),ql.set(!0),Ud.set(r),Od.set(e),Fd.set(t);const n=(e-Uo)/(t-Uo);Bd.set(n),n===1&&Nd.set(!0)};ss.onLoad=()=>{Sw?.(),ql.set(!1)};ss.onError=r=>{Tw?.(r),Qg.update(e=>[...e,r])};ss.onProgress=(r,e,t)=>{e===t&&(Uo=t),ql.set(!0),Ud.set(r),Od.set(e),Fd.set(t);const n=(e-Uo)/(t-Uo)||1;Bd.set(n),n===1&&Nd.set(!0)};Pr(ql),Pr(Ud),Pr(Od),Pr(Fd),Pr(Qg),Pr(Bd),Pr(Nd);new P;new P;new P;new Zt;new je;new Xi;new P;const Ew=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),ww=()=>{const r=An(Ew),e=new Set,t=i=>(r&&(r.suspend(i),e.add(i)),i),n={suspended:Jo(r?.suspended??Ou(!1),i=>i)};return ts(()=>{if(r){for(const i of e)r.onComponentDestroy(i);e.clear()}}),Object.assign(t,n)};new P;new je;new P;new P;new bt;/*!
 * camera-controls
 * https://github.com/yomotsu/camera-controls
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */var ru;/Mac/.test((ru=globalThis?.navigator)===null||ru===void 0?void 0:ru.platform);new P;new P;new P;new se;const Aw="Right",Cw="Top",Rw="Front",Iw="Left",Pw="Bottom",Dw="Back";[Aw,Cw,Rw,Iw,Pw,Dw].map(r=>r.toLocaleLowerCase());new qt;new P;Oe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new se(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Yn.line={uniforms:ed.merge([Oe.common,Oe.fog,Oe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new xt;new P;new P;new xt;new xt;new xt;new P;new je;new Dg;new P;new qt;new Zt;new xt;const Fp={type:"change"},kd={type:"start"},e_={type:"end"},cc=new Xi,Bp=new Li,Lw=Math.cos(70*$u.DEG2RAD),Qt=new P,Pn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},su=1e-6;let Nw=class extends Ng{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Fr.ROTATE,TWO:Fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new fn,this._lastTargetPosition=new P,this._quat=new fn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bu,this._sphericalDelta=new bu,this._scale=1,this._panOffset=new P,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new P,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ow.bind(this),this._onPointerDown=Uw.bind(this),this._onPointerUp=Fw.bind(this),this._onContextMenu=Ww.bind(this),this._onMouseWheel=zw.bind(this),this._onKeyDown=Hw.bind(this),this._onTouchStart=Vw.bind(this),this._onTouchMove=Gw.bind(this),this._onMouseDown=Bw.bind(this),this._onMouseMove=kw.bind(this),this._interceptControlDown=Xw.bind(this),this._interceptControlUp=Yw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fp),this.update(),this.state=Pt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Qt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cc.origin.copy(this.object.position),cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cc.direction))<Lw?this.object.lookAt(this.target):(Bp.setFromNormalAndCoplanarPoint(this.object.up,this.target),cc.intersectPlane(Bp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>su||8*(1-this._lastQuaternion.dot(this.object.quaternion))>su||this._lastTargetPosition.distanceToSquared(this.target)>su?(this.dispatchEvent(Fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pn/60*this.autoRotateSpeed*e:Pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Qt.copy(i).sub(this.target);let s=Qt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Uw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Ow(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Fw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e_),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Pt.DOLLY;break;case Wr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Pt.ROTATE}break;case Wr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(kd)}function kw(r){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function zw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(r.preventDefault(),this.dispatchEvent(kd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(e_))}function Hw(r){this.enabled!==!1&&this._handleKeyDown(r)}function Vw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Pt.TOUCH_ROTATE;break;case Fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Pt.TOUCH_DOLLY_PAN;break;case Fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(kd)}function Gw(r){switch(this._trackPointer(r),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Pt.NONE}}function Ww(r){this.enabled!==!1&&r.preventDefault()}function Xw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class qw extends Md{constructor(e){super(e),this.type=Nn}parse(e){const o=function(D,E){switch(D){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(E||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(E||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(E||""))}},u=function(D,E,w){E=E||1024;let z=D.pos,G=-1,W=0,J="",q=String.fromCharCode.apply(null,new Uint16Array(D.subarray(z,z+128)));for(;0>(G=q.indexOf(`
`))&&W<E&&z<D.byteLength;)J+=q,W+=q.length,z+=128,q+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(z,z+128)));return-1<G?(D.pos+=W+G+1,J+q.slice(0,G)):!1},d=function(D){const E=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,G=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,W={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let J,q;for((D.pos>=D.byteLength||!(J=u(D)))&&o(1,"no header found"),(q=J.match(E))||o(3,"bad initial token"),W.valid|=1,W.programtype=q[1],W.string+=J+`
`;J=u(D),J!==!1;){if(W.string+=J+`
`,J.charAt(0)==="#"){W.comments+=J+`
`;continue}if((q=J.match(w))&&(W.gamma=parseFloat(q[1])),(q=J.match(L))&&(W.exposure=parseFloat(q[1])),(q=J.match(z))&&(W.valid|=2,W.format=q[1]),(q=J.match(G))&&(W.valid|=4,W.height=parseInt(q[1],10),W.width=parseInt(q[2],10)),W.valid&2&&W.valid&4)break}return W.valid&2||o(3,"missing format specifier"),W.valid&4||o(3,"missing image size specifier"),W},f=function(D,E,w){const L=E;if(L<8||L>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);L!==(D[2]<<8|D[3])&&o(3,"wrong scanline width");const z=new Uint8Array(4*E*w);z.length||o(4,"unable to allocate buffer space");let G=0,W=0;const J=4*L,q=new Uint8Array(4),re=new Uint8Array(J);let j=w;for(;j>0&&W<D.byteLength;){W+4>D.byteLength&&o(1),q[0]=D[W++],q[1]=D[W++],q[2]=D[W++],q[3]=D[W++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=L)&&o(3,"bad rgbe scanline format");let ue=0,pe;for(;ue<J&&W<D.byteLength;){pe=D[W++];const Ue=pe>128;if(Ue&&(pe-=128),(pe===0||ue+pe>J)&&o(3,"bad scanline data"),Ue){const ze=D[W++];for(let Qe=0;Qe<pe;Qe++)re[ue++]=ze}else re.set(D.subarray(W,W+pe),ue),ue+=pe,W+=pe}const Ce=L;for(let Ue=0;Ue<Ce;Ue++){let ze=0;z[G]=re[Ue+ze],ze+=L,z[G+1]=re[Ue+ze],ze+=L,z[G+2]=re[Ue+ze],ze+=L,z[G+3]=re[Ue+ze],G+=4}j--}return z},p=function(D,E,w,L){const z=D[E+3],G=Math.pow(2,z-128)/255;w[L+0]=D[E+0]*G,w[L+1]=D[E+1]*G,w[L+2]=D[E+2]*G,w[L+3]=1},v=function(D,E,w,L){const z=D[E+3],G=Math.pow(2,z-128)/255;w[L+0]=Hr.toHalfFloat(Math.min(D[E+0]*G,65504)),w[L+1]=Hr.toHalfFloat(Math.min(D[E+1]*G,65504)),w[L+2]=Hr.toHalfFloat(Math.min(D[E+2]*G,65504)),w[L+3]=Hr.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const m=d(g),S=m.width,y=m.height,b=f(g.subarray(g.pos),S,y);let C,M,N;switch(this.type){case jt:N=b.length/4;const D=new Float32Array(N*4);for(let w=0;w<N;w++)p(b,w*4,D,w*4);C=D,M=jt;break;case Nn:N=b.length/4;const E=new Uint16Array(N*4);for(let w=0;w<N;w++)v(b,w*4,E,w*4);C=E,M=Nn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:S,height:y,data:C,header:m.string,gamma:m.gamma,exposure:m.exposure,type:M}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case jt:case Nn:o.colorSpace=Ut,o.minFilter=Dt,o.magFilter=Dt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const Zw=r=>{const{invalidate:e}=co();Rp(()=>[r.scene],([i])=>{const{background:s,environment:o}=i;return()=>{i.background=s,i.environment=o}});let t=xc(void 0),n=xc(void 0);Rp(()=>[r.scene],([i])=>{Nt(t,i.background,!0),Nt(n,i.environment,!0)}),cr(()=>{if(!(r.texture===void 0||!r.isBackground))return r.scene.background=r.texture,e(),()=>{R(t)!==void 0&&(r.scene.background=R(t),e())}}),cr(()=>{if(r.texture!==void 0)return r.scene.environment=r.texture,e(),()=>{R(n)!==void 0&&(r.scene.environment=R(n),e())}})};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Zn=Uint8Array,Ns=Uint16Array,Kw=Int32Array,t_=new Zn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),n_=new Zn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$w=new Zn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),i_=function(r,e){for(var t=new Ns(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Kw(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},r_=i_(t_,2),s_=r_.b,Jw=r_.r;s_[28]=258,Jw[258]=28;var jw=i_(n_,0),Qw=jw.b,Iu=new Ns(32768);for(var Ot=0;Ot<32768;++Ot){var tr=(Ot&43690)>>1|(Ot&21845)<<1;tr=(tr&52428)>>2|(tr&13107)<<2,tr=(tr&61680)>>4|(tr&3855)<<4,Iu[Ot]=((tr&65280)>>8|(tr&255)<<8)>>1}var Oo=(function(r,e,t){for(var n=r.length,i=0,s=new Ns(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Ns(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Ns(1<<e);var c=15-e;for(i=0;i<n;++i)if(r[i])for(var l=i<<4|r[i],h=e-r[i],u=o[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Iu[u]>>c]=l}else for(a=new Ns(n),i=0;i<n;++i)r[i]&&(a[i]=Iu[o[r[i]-1]++]>>15-r[i]);return a}),ca=new Zn(288);for(var Ot=0;Ot<144;++Ot)ca[Ot]=8;for(var Ot=144;Ot<256;++Ot)ca[Ot]=9;for(var Ot=256;Ot<280;++Ot)ca[Ot]=7;for(var Ot=280;Ot<288;++Ot)ca[Ot]=8;var o_=new Zn(32);for(var Ot=0;Ot<32;++Ot)o_[Ot]=5;var eA=Oo(ca,9,1),tA=Oo(o_,5,1),ou=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},ni=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},au=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},nA=function(r){return(r+7)/8|0},iA=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new Zn(r.subarray(e,t))},rA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ii=function(r,e,t){var n=new Error(e||rA[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,ii),!t)throw n;return n},sA=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new Zn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Zn(i*3));var l=function(ut){var Tt=t.length;if(ut>Tt){var k=new Zn(Math.max(Tt*2,ut));k.set(t),t=k}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,p=e.d,v=e.m,g=e.n,m=i*8;do{if(!f){h=ni(r,u,1);var S=ni(r,u+1,3);if(u+=3,S)if(S==1)f=eA,p=tA,v=9,g=5;else if(S==2){var M=ni(r,u,31)+257,N=ni(r,u+10,15)+4,D=M+ni(r,u+5,31)+1;u+=14;for(var E=new Zn(D),w=new Zn(19),L=0;L<N;++L)w[$w[L]]=ni(r,u+L*3,7);u+=N*3;for(var z=ou(w),G=(1<<z)-1,W=Oo(w,z,1),L=0;L<D;){var J=W[ni(r,u,G)];u+=J&15;var y=J>>4;if(y<16)E[L++]=y;else{var q=0,re=0;for(y==16?(re=3+ni(r,u,3),u+=2,q=E[L-1]):y==17?(re=3+ni(r,u,7),u+=3):y==18&&(re=11+ni(r,u,127),u+=7);re--;)E[L++]=q}}var j=E.subarray(0,M),ue=E.subarray(M);v=ou(j),g=ou(ue),f=Oo(j,v,1),p=Oo(ue,g,1)}else ii(1);else{var y=nA(u)+4,b=r[y-4]|r[y-3]<<8,C=y+b;if(C>i){c&&ii(0);break}a&&l(d+b),t.set(r.subarray(y,C),d),e.b=d+=b,e.p=u=C*8,e.f=h;continue}if(u>m){c&&ii(0);break}}a&&l(d+131072);for(var pe=(1<<v)-1,Ce=(1<<g)-1,Ue=u;;Ue=u){var q=f[au(r,u)&pe],ze=q>>4;if(u+=q&15,u>m){c&&ii(0);break}if(q||ii(2),ze<256)t[d++]=ze;else if(ze==256){Ue=u,f=null;break}else{var Qe=ze-254;if(ze>264){var L=ze-257,et=t_[L];Qe=ni(r,u,(1<<et)-1)+s_[L],u+=et}var H=p[au(r,u)&Ce],X=H>>4;H||ii(3),u+=H&15;var ue=Qw[X];if(X>3){var et=n_[X];ue+=au(r,u)&(1<<et)-1,u+=et}if(u>m){c&&ii(0);break}a&&l(d+131072);var ke=d+Qe;if(d<ue){var Ke=s-ue,Ve=Math.min(ue,ke);for(Ke+d<0&&ii(3);d<Ve;++d)t[d]=n[Ke+d]}for(;d<ke;++d)t[d]=t[d-ue]}}e.l=f,e.p=Ue,e.b=d,e.f=h,f&&(h=1,e.m=v,e.d=p,e.n=g)}while(!h);return d!=t.length&&o?iA(t,0,d):t.subarray(0,d)},oA=new Zn(0),aA=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&ii(6,"invalid zlib data"),(r[1]>>5&1)==1&&ii(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function lc(r,e){return sA(r.subarray(aA(r),-4),{i:2},e,e)}var cA=typeof TextDecoder<"u"&&new TextDecoder,lA=0;try{cA.decode(oA,{stream:!0}),lA=1}catch{}class hA extends Md{constructor(e){super(e),this.type=Nn,this.outputFormat=Yt}parse(e){const E=Math.pow(2.7182818,2.2);function w(x,_){let T=0;for(let F=0;F<65536;++F)(F==0||x[F>>3]&1<<(F&7))&&(_[T++]=F);const I=T-1;for(;T<65536;)_[T++]=0;return I}function L(x){for(let _=0;_<16384;_++)x[_]={},x[_].len=0,x[_].lit=0,x[_].p=null}const z={l:0,c:0,lc:0};function G(x,_,T,I,F){for(;T<x;)_=_<<8|$e(I,F),T+=8;T-=x,z.l=_>>T&(1<<x)-1,z.c=_,z.lc=T}const W=new Array(59);function J(x){for(let T=0;T<=58;++T)W[T]=0;for(let T=0;T<65537;++T)W[x[T]]+=1;let _=0;for(let T=58;T>0;--T){const I=_+W[T]>>1;W[T]=_,_=I}for(let T=0;T<65537;++T){const I=x[T];I>0&&(x[T]=I|W[I]++<<6)}}function q(x,_,T,I,F,B){const O=_;let $=0,Z=0;for(;I<=F;I++){if(O.value-_.value>T)return!1;G(6,$,Z,x,O);const Y=z.l;if($=z.c,Z=z.lc,B[I]=Y,Y==63){if(O.value-_.value>T)throw new Error("Something wrong with hufUnpackEncTable");G(8,$,Z,x,O);let ee=z.l+6;if($=z.c,Z=z.lc,I+ee>F+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)B[I++]=0;I--}else if(Y>=59){let ee=Y-59+2;if(I+ee>F+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)B[I++]=0;I--}}J(B)}function re(x){return x&63}function j(x){return x>>6}function ue(x,_,T,I){for(;_<=T;_++){const F=j(x[_]),B=re(x[_]);if(F>>B)throw new Error("Invalid table entry");if(B>14){const O=I[F>>B-14];if(O.len)throw new Error("Invalid table entry");if(O.lit++,O.p){const $=O.p;O.p=new Array(O.lit);for(let Z=0;Z<O.lit-1;++Z)O.p[Z]=$[Z]}else O.p=new Array(1);O.p[O.lit-1]=_}else if(B){let O=0;for(let $=1<<14-B;$>0;$--){const Z=I[(F<<14-B)+O];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=B,Z.lit=_,O++}}}return!0}const pe={c:0,lc:0};function Ce(x,_,T,I){x=x<<8|$e(T,I),_+=8,pe.c=x,pe.lc=_}const Ue={c:0,lc:0};function ze(x,_,T,I,F,B,O,$,Z){if(x==_){I<8&&(Ce(T,I,F,B),T=pe.c,I=pe.lc),I-=8;let Y=T>>I;if(Y=new Uint8Array([Y])[0],$.value+Y>Z)return!1;const ee=O[$.value-1];for(;Y-- >0;)O[$.value++]=ee}else if($.value<Z)O[$.value++]=x;else return!1;Ue.c=T,Ue.lc=I}function Qe(x){return x&65535}function et(x){const _=Qe(x);return _>32767?_-65536:_}const H={a:0,b:0};function X(x,_){const T=et(x),F=et(_),B=T+(F&1)+(F>>1),O=B,$=B-F;H.a=O,H.b=$}function ke(x,_){const T=Qe(x),I=Qe(_),F=T-(I>>1)&65535,B=I+F-32768&65535;H.a=B,H.b=F}function Ke(x,_,T,I,F,B,O){const $=O<16384,Z=T>F?F:T;let Y=1,ee,oe;for(;Y<=Z;)Y<<=1;for(Y>>=1,ee=Y,Y>>=1;Y>=1;){oe=0;const ne=oe+B*(F-ee),ge=B*Y,Le=B*ee,Te=I*Y,Ae=I*ee;let Be,Ne,it,tt;for(;oe<=ne;oe+=Le){let mt=oe;const st=oe+I*(T-ee);for(;mt<=st;mt+=Ae){const yt=mt+Te,Ft=mt+ge,ot=Ft+Te;$?(X(x[mt+_],x[Ft+_]),Be=H.a,it=H.b,X(x[yt+_],x[ot+_]),Ne=H.a,tt=H.b,X(Be,Ne),x[mt+_]=H.a,x[yt+_]=H.b,X(it,tt),x[Ft+_]=H.a,x[ot+_]=H.b):(ke(x[mt+_],x[Ft+_]),Be=H.a,it=H.b,ke(x[yt+_],x[ot+_]),Ne=H.a,tt=H.b,ke(Be,Ne),x[mt+_]=H.a,x[yt+_]=H.b,ke(it,tt),x[Ft+_]=H.a,x[ot+_]=H.b)}if(T&Y){const yt=mt+ge;$?X(x[mt+_],x[yt+_]):ke(x[mt+_],x[yt+_]),Be=H.a,x[yt+_]=H.b,x[mt+_]=Be}}if(F&Y){let mt=oe;const st=oe+I*(T-ee);for(;mt<=st;mt+=Ae){const yt=mt+Te;$?X(x[mt+_],x[yt+_]):ke(x[mt+_],x[yt+_]),Be=H.a,x[yt+_]=H.b,x[mt+_]=Be}}ee=Y,Y>>=1}return oe}function Ve(x,_,T,I,F,B,O,$,Z){let Y=0,ee=0;const oe=O,ne=Math.trunc(I.value+(F+7)/8);for(;I.value<ne;)for(Ce(Y,ee,T,I),Y=pe.c,ee=pe.lc;ee>=14;){const Le=Y>>ee-14&16383,Te=_[Le];if(Te.len)ee-=Te.len,ze(Te.lit,B,Y,ee,T,I,$,Z,oe),Y=Ue.c,ee=Ue.lc;else{if(!Te.p)throw new Error("hufDecode issues");let Ae;for(Ae=0;Ae<Te.lit;Ae++){const Be=re(x[Te.p[Ae]]);for(;ee<Be&&I.value<ne;)Ce(Y,ee,T,I),Y=pe.c,ee=pe.lc;if(ee>=Be&&j(x[Te.p[Ae]])==(Y>>ee-Be&(1<<Be)-1)){ee-=Be,ze(Te.p[Ae],B,Y,ee,T,I,$,Z,oe),Y=Ue.c,ee=Ue.lc;break}}if(Ae==Te.lit)throw new Error("hufDecode issues")}}const ge=8-F&7;for(Y>>=ge,ee-=ge;ee>0;){const Le=_[Y<<14-ee&16383];if(Le.len)ee-=Le.len,ze(Le.lit,B,Y,ee,T,I,$,Z,oe),Y=Ue.c,ee=Ue.lc;else throw new Error("hufDecode issues")}return!0}function ut(x,_,T,I,F,B){const O={value:0},$=T.value,Z=Ze(_,T),Y=Ze(_,T);T.value+=4;const ee=Ze(_,T);if(T.value+=4,Z<0||Z>=65537||Y<0||Y>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const oe=new Array(65537),ne=new Array(16384);L(ne);const ge=I-(T.value-$);if(q(x,T,ge,Z,Y,oe),ee>8*(I-(T.value-$)))throw new Error("Something wrong with hufUncompress");ue(oe,Z,Y,ne),Ve(oe,ne,x,T,ee,Y,B,F,O)}function Tt(x,_,T){for(let I=0;I<T;++I)_[I]=x[_[I]]}function k(x){for(let _=1;_<x.length;_++){const T=x[_-1]+x[_]-128;x[_]=T}}function _e(x,_){let T=0,I=Math.floor((x.length+1)/2),F=0;const B=x.length-1;for(;!(F>B||(_[F++]=x[T++],F>B));)_[F++]=x[I++]}function de(x){let _=x.byteLength;const T=new Array;let I=0;const F=new DataView(x);for(;_>0;){const B=F.getInt8(I++);if(B<0){const O=-B;_-=O+1;for(let $=0;$<O;$++)T.push(F.getUint8(I++))}else{const O=B;_-=2;const $=F.getUint8(I++);for(let Z=0;Z<O+1;Z++)T.push($)}}return T}function he(x,_,T,I,F,B){let O=new DataView(B.buffer);const $=T[x.idx[0]].width,Z=T[x.idx[0]].height,Y=3,ee=Math.floor($/8),oe=Math.ceil($/8),ne=Math.ceil(Z/8),ge=$-(oe-1)*8,Le=Z-(ne-1)*8,Te={value:0},Ae=new Array(Y),Be=new Array(Y),Ne=new Array(Y),it=new Array(Y),tt=new Array(Y);for(let st=0;st<Y;++st)tt[st]=_[x.idx[st]],Ae[st]=st<1?0:Ae[st-1]+oe*ne,Be[st]=new Float32Array(64),Ne[st]=new Uint16Array(64),it[st]=new Uint16Array(oe*64);for(let st=0;st<ne;++st){let yt=8;st==ne-1&&(yt=Le);let Ft=8;for(let ht=0;ht<oe;++ht){ht==oe-1&&(Ft=ge);for(let _t=0;_t<Y;++_t)Ne[_t].fill(0),Ne[_t][0]=F[Ae[_t]++],Ie(Te,I,Ne[_t]),ye(Ne[_t],Be[_t]),Pe(Be[_t]);ct(Be);for(let _t=0;_t<Y;++_t)nt(Be[_t],it[_t],ht*64)}let ot=0;for(let ht=0;ht<Y;++ht){const _t=T[x.idx[ht]].type;for(let Lt=8*st;Lt<8*st+yt;++Lt){ot=tt[ht][Lt];for(let Kt=0;Kt<ee;++Kt){const Rn=Kt*64+(Lt&7)*8;O.setUint16(ot+0*_t,it[ht][Rn+0],!0),O.setUint16(ot+2*_t,it[ht][Rn+1],!0),O.setUint16(ot+4*_t,it[ht][Rn+2],!0),O.setUint16(ot+6*_t,it[ht][Rn+3],!0),O.setUint16(ot+8*_t,it[ht][Rn+4],!0),O.setUint16(ot+10*_t,it[ht][Rn+5],!0),O.setUint16(ot+12*_t,it[ht][Rn+6],!0),O.setUint16(ot+14*_t,it[ht][Rn+7],!0),ot+=16*_t}}if(ee!=oe)for(let Lt=8*st;Lt<8*st+yt;++Lt){const Kt=tt[ht][Lt]+8*ee*2*_t,Rn=ee*64+(Lt&7)*8;for(let Gn=0;Gn<Ft;++Gn)O.setUint16(Kt+Gn*2*_t,it[ht][Rn+Gn],!0)}}}const mt=new Uint16Array($);O=new DataView(B.buffer);for(let st=0;st<Y;++st){T[x.idx[st]].decoded=!0;const yt=T[x.idx[st]].type;if(T[st].type==2)for(let Ft=0;Ft<Z;++Ft){const ot=tt[st][Ft];for(let ht=0;ht<$;++ht)mt[ht]=O.getUint16(ot+ht*2*yt,!0);for(let ht=0;ht<$;++ht)O.setFloat32(ot+ht*2*yt,Q(mt[ht]),!0)}}}function ce(x,_,T,I,F,B){const O=new DataView(B.buffer),$=T[x],Z=$.width,Y=$.height,ee=Math.ceil(Z/8),oe=Math.ceil(Y/8),ne=Math.floor(Z/8),ge=Z-(ee-1)*8,Le=Y-(oe-1)*8,Te={value:0};let Ae=0;const Be=new Float32Array(64),Ne=new Uint16Array(64),it=new Uint16Array(ee*64);for(let tt=0;tt<oe;++tt){let mt=8;tt==oe-1&&(mt=Le);for(let st=0;st<ee;++st)Ne.fill(0),Ne[0]=F[Ae++],Ie(Te,I,Ne),ye(Ne,Be),Pe(Be),nt(Be,it,st*64);for(let st=8*tt;st<8*tt+mt;++st){let yt=_[x][st];for(let Ft=0;Ft<ne;++Ft){const ot=Ft*64+(st&7)*8;for(let ht=0;ht<8;++ht)O.setUint16(yt+ht*2*$.type,it[ot+ht],!0);yt+=16*$.type}if(ee!=ne){const Ft=ne*64+(st&7)*8;for(let ot=0;ot<ge;++ot)O.setUint16(yt+ot*2*$.type,it[Ft+ot],!0)}}}$.decoded=!0}function Ie(x,_,T){let I,F=1;for(;F<64;)I=_[x.value],I==65280?F=64:I>>8==255?F+=I&255:(T[F]=I,F++),x.value++}function ye(x,_){_[0]=Q(x[0]),_[1]=Q(x[1]),_[2]=Q(x[5]),_[3]=Q(x[6]),_[4]=Q(x[14]),_[5]=Q(x[15]),_[6]=Q(x[27]),_[7]=Q(x[28]),_[8]=Q(x[2]),_[9]=Q(x[4]),_[10]=Q(x[7]),_[11]=Q(x[13]),_[12]=Q(x[16]),_[13]=Q(x[26]),_[14]=Q(x[29]),_[15]=Q(x[42]),_[16]=Q(x[3]),_[17]=Q(x[8]),_[18]=Q(x[12]),_[19]=Q(x[17]),_[20]=Q(x[25]),_[21]=Q(x[30]),_[22]=Q(x[41]),_[23]=Q(x[43]),_[24]=Q(x[9]),_[25]=Q(x[11]),_[26]=Q(x[18]),_[27]=Q(x[24]),_[28]=Q(x[31]),_[29]=Q(x[40]),_[30]=Q(x[44]),_[31]=Q(x[53]),_[32]=Q(x[10]),_[33]=Q(x[19]),_[34]=Q(x[23]),_[35]=Q(x[32]),_[36]=Q(x[39]),_[37]=Q(x[45]),_[38]=Q(x[52]),_[39]=Q(x[54]),_[40]=Q(x[20]),_[41]=Q(x[22]),_[42]=Q(x[33]),_[43]=Q(x[38]),_[44]=Q(x[46]),_[45]=Q(x[51]),_[46]=Q(x[55]),_[47]=Q(x[60]),_[48]=Q(x[21]),_[49]=Q(x[34]),_[50]=Q(x[37]),_[51]=Q(x[47]),_[52]=Q(x[50]),_[53]=Q(x[56]),_[54]=Q(x[59]),_[55]=Q(x[61]),_[56]=Q(x[35]),_[57]=Q(x[36]),_[58]=Q(x[48]),_[59]=Q(x[49]),_[60]=Q(x[57]),_[61]=Q(x[58]),_[62]=Q(x[62]),_[63]=Q(x[63])}function Pe(x){const _=.5*Math.cos(.7853975),T=.5*Math.cos(3.14159/16),I=.5*Math.cos(3.14159/8),F=.5*Math.cos(3*3.14159/16),B=.5*Math.cos(5*3.14159/16),O=.5*Math.cos(3*3.14159/8),$=.5*Math.cos(7*3.14159/16),Z=new Array(4),Y=new Array(4),ee=new Array(4),oe=new Array(4);for(let ne=0;ne<8;++ne){const ge=ne*8;Z[0]=I*x[ge+2],Z[1]=O*x[ge+2],Z[2]=I*x[ge+6],Z[3]=O*x[ge+6],Y[0]=T*x[ge+1]+F*x[ge+3]+B*x[ge+5]+$*x[ge+7],Y[1]=F*x[ge+1]-$*x[ge+3]-T*x[ge+5]-B*x[ge+7],Y[2]=B*x[ge+1]-T*x[ge+3]+$*x[ge+5]+F*x[ge+7],Y[3]=$*x[ge+1]-B*x[ge+3]+F*x[ge+5]-T*x[ge+7],ee[0]=_*(x[ge+0]+x[ge+4]),ee[3]=_*(x[ge+0]-x[ge+4]),ee[1]=Z[0]+Z[3],ee[2]=Z[1]-Z[2],oe[0]=ee[0]+ee[1],oe[1]=ee[3]+ee[2],oe[2]=ee[3]-ee[2],oe[3]=ee[0]-ee[1],x[ge+0]=oe[0]+Y[0],x[ge+1]=oe[1]+Y[1],x[ge+2]=oe[2]+Y[2],x[ge+3]=oe[3]+Y[3],x[ge+4]=oe[3]-Y[3],x[ge+5]=oe[2]-Y[2],x[ge+6]=oe[1]-Y[1],x[ge+7]=oe[0]-Y[0]}for(let ne=0;ne<8;++ne)Z[0]=I*x[16+ne],Z[1]=O*x[16+ne],Z[2]=I*x[48+ne],Z[3]=O*x[48+ne],Y[0]=T*x[8+ne]+F*x[24+ne]+B*x[40+ne]+$*x[56+ne],Y[1]=F*x[8+ne]-$*x[24+ne]-T*x[40+ne]-B*x[56+ne],Y[2]=B*x[8+ne]-T*x[24+ne]+$*x[40+ne]+F*x[56+ne],Y[3]=$*x[8+ne]-B*x[24+ne]+F*x[40+ne]-T*x[56+ne],ee[0]=_*(x[ne]+x[32+ne]),ee[3]=_*(x[ne]-x[32+ne]),ee[1]=Z[0]+Z[3],ee[2]=Z[1]-Z[2],oe[0]=ee[0]+ee[1],oe[1]=ee[3]+ee[2],oe[2]=ee[3]-ee[2],oe[3]=ee[0]-ee[1],x[0+ne]=oe[0]+Y[0],x[8+ne]=oe[1]+Y[1],x[16+ne]=oe[2]+Y[2],x[24+ne]=oe[3]+Y[3],x[32+ne]=oe[3]-Y[3],x[40+ne]=oe[2]-Y[2],x[48+ne]=oe[1]-Y[1],x[56+ne]=oe[0]-Y[0]}function ct(x){for(let _=0;_<64;++_){const T=x[0][_],I=x[1][_],F=x[2][_];x[0][_]=T+1.5747*F,x[1][_]=T-.1873*I-.4682*F,x[2][_]=T+1.8556*I}}function nt(x,_,T){for(let I=0;I<64;++I)_[T+I]=Hr.toHalfFloat(U(x[I]))}function U(x){return x<=1?Math.sign(x)*Math.pow(Math.abs(x),2.2):Math.sign(x)*Math.pow(E,Math.abs(x)-1)}function A(x){return new DataView(x.array.buffer,x.offset.value,x.size)}function K(x){const _=x.viewer.buffer.slice(x.offset.value,x.offset.value+x.size),T=new Uint8Array(de(_)),I=new Uint8Array(T.length);return k(T),_e(T,I),new DataView(I.buffer)}function te(x){const _=x.array.slice(x.offset.value,x.offset.value+x.size),T=lc(_),I=new Uint8Array(T.length);return k(T),_e(T,I),new DataView(I.buffer)}function ve(x){const _=x.viewer,T={value:x.offset.value},I=new Uint16Array(x.columns*x.lines*(x.inputChannels.length*x.type)),F=new Uint8Array(8192);let B=0;const O=new Array(x.inputChannels.length);for(let Le=0,Te=x.inputChannels.length;Le<Te;Le++)O[Le]={},O[Le].start=B,O[Le].end=O[Le].start,O[Le].nx=x.columns,O[Le].ny=x.lines,O[Le].size=x.type,B+=O[Le].nx*O[Le].ny*O[Le].size;const $=He(_,T),Z=He(_,T);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if($<=Z)for(let Le=0;Le<Z-$+1;Le++)F[Le+$]=De(_,T);const Y=new Uint16Array(65536),ee=w(F,Y),oe=Ze(_,T);ut(x.array,_,T,oe,I,B);for(let Le=0;Le<x.inputChannels.length;++Le){const Te=O[Le];for(let Ae=0;Ae<O[Le].size;++Ae)Ke(I,Te.start+Ae,Te.nx,Te.size,Te.ny,Te.nx*Te.size,ee)}Tt(Y,I,B);let ne=0;const ge=new Uint8Array(I.buffer.byteLength);for(let Le=0;Le<x.lines;Le++)for(let Te=0;Te<x.inputChannels.length;Te++){const Ae=O[Te],Be=Ae.nx*Ae.size,Ne=new Uint8Array(I.buffer,Ae.end*2,Be*2);ge.set(Ne,ne),ne+=Be*2,Ae.end+=Be}return new DataView(ge.buffer)}function ie(x){const _=x.array.slice(x.offset.value,x.offset.value+x.size),T=lc(_),I=x.inputChannels.length*x.lines*x.columns*x.totalBytes,F=new ArrayBuffer(I),B=new DataView(F);let O=0,$=0;const Z=new Array(4);for(let Y=0;Y<x.lines;Y++)for(let ee=0;ee<x.inputChannels.length;ee++){let oe=0;switch(x.inputChannels[ee].pixelType){case 1:Z[0]=O,Z[1]=Z[0]+x.columns,O=Z[1]+x.columns;for(let ge=0;ge<x.columns;++ge){const Le=T[Z[0]++]<<8|T[Z[1]++];oe+=Le,B.setUint16($,oe,!0),$+=2}break;case 2:Z[0]=O,Z[1]=Z[0]+x.columns,Z[2]=Z[1]+x.columns,O=Z[2]+x.columns;for(let ge=0;ge<x.columns;++ge){const Le=T[Z[0]++]<<24|T[Z[1]++]<<16|T[Z[2]++]<<8;oe+=Le,B.setUint32($,oe,!0),$+=4}break}}return B}function We(x){const _=x.viewer,T={value:x.offset.value},I=new Uint8Array(x.columns*x.lines*(x.inputChannels.length*x.type*2)),F={version:Je(_,T),unknownUncompressedSize:Je(_,T),unknownCompressedSize:Je(_,T),acCompressedSize:Je(_,T),dcCompressedSize:Je(_,T),rleCompressedSize:Je(_,T),rleUncompressedSize:Je(_,T),rleRawSize:Je(_,T),totalAcUncompressedCount:Je(_,T),totalDcUncompressedCount:Je(_,T),acCompression:Je(_,T)};if(F.version<2)throw new Error("EXRLoader.parse: "+Ei.compression+" version "+F.version+" is unsupported");const B=new Array;let O=He(_,T)-2;for(;O>0;){const Te=we(_.buffer,T),Ae=De(_,T),Be=Ae>>2&3,Ne=(Ae>>4)-1,it=new Int8Array([Ne])[0],tt=De(_,T);B.push({name:Te,index:it,type:tt,compression:Be}),O-=Te.length+3}const $=Ei.channels,Z=new Array(x.inputChannels.length);for(let Te=0;Te<x.inputChannels.length;++Te){const Ae=Z[Te]={},Be=$[Te];Ae.name=Be.name,Ae.compression=0,Ae.decoded=!1,Ae.type=Be.pixelType,Ae.pLinear=Be.pLinear,Ae.width=x.columns,Ae.height=x.lines}const Y={idx:new Array(3)};for(let Te=0;Te<x.inputChannels.length;++Te){const Ae=Z[Te];for(let Be=0;Be<B.length;++Be){const Ne=B[Be];Ae.name==Ne.name&&(Ae.compression=Ne.compression,Ne.index>=0&&(Y.idx[Ne.index]=Te),Ae.offset=Te)}}let ee,oe,ne;if(F.acCompressedSize>0)switch(F.acCompression){case 0:ee=new Uint16Array(F.totalAcUncompressedCount),ut(x.array,_,T,F.acCompressedSize,ee,F.totalAcUncompressedCount);break;case 1:const Te=x.array.slice(T.value,T.value+F.totalAcUncompressedCount),Ae=lc(Te);ee=new Uint16Array(Ae.buffer),T.value+=F.totalAcUncompressedCount;break}if(F.dcCompressedSize>0){const Te={array:x.array,offset:T,size:F.dcCompressedSize};oe=new Uint16Array(te(Te).buffer),T.value+=F.dcCompressedSize}if(F.rleRawSize>0){const Te=x.array.slice(T.value,T.value+F.rleCompressedSize),Ae=lc(Te);ne=de(Ae.buffer),T.value+=F.rleCompressedSize}let ge=0;const Le=new Array(Z.length);for(let Te=0;Te<Le.length;++Te)Le[Te]=new Array;for(let Te=0;Te<x.lines;++Te)for(let Ae=0;Ae<Z.length;++Ae)Le[Ae].push(ge),ge+=Z[Ae].width*x.type*2;Y.idx[0]!==void 0&&Z[Y.idx[0]]&&he(Y,Le,Z,ee,oe,I);for(let Te=0;Te<Z.length;++Te){const Ae=Z[Te];if(!Ae.decoded)switch(Ae.compression){case 2:let Be=0,Ne=0;for(let it=0;it<x.lines;++it){let tt=Le[Te][Be];for(let mt=0;mt<Ae.width;++mt){for(let st=0;st<2*Ae.type;++st)I[tt++]=ne[Ne+st*Ae.width*Ae.height];Ne++}Be++}break;case 1:ce(Te,Le,Z,ee,oe,I);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(I.buffer)}function we(x,_){const T=new Uint8Array(x);let I=0;for(;T[_.value+I]!=0;)I+=1;const F=new TextDecoder().decode(T.slice(_.value,_.value+I));return _.value=_.value+I+1,F}function Xe(x,_,T){const I=new TextDecoder().decode(new Uint8Array(x).slice(_.value,_.value+T));return _.value=_.value+T,I}function Ye(x,_){const T=Re(x,_),I=Ze(x,_);return[T,I]}function be(x,_){const T=Ze(x,_),I=Ze(x,_);return[T,I]}function Re(x,_){const T=x.getInt32(_.value,!0);return _.value=_.value+4,T}function Ze(x,_){const T=x.getUint32(_.value,!0);return _.value=_.value+4,T}function $e(x,_){const T=x[_.value];return _.value=_.value+1,T}function De(x,_){const T=x.getUint8(_.value);return _.value=_.value+1,T}const Je=function(x,_){let T;return"getBigInt64"in DataView.prototype?T=Number(x.getBigInt64(_.value,!0)):T=x.getUint32(_.value+4,!0)+Number(x.getUint32(_.value,!0)<<32),_.value+=8,T};function V(x,_){const T=x.getFloat32(_.value,!0);return _.value+=4,T}function Ee(x,_){return Hr.toHalfFloat(V(x,_))}function Q(x){const _=(x&31744)>>10,T=x&1023;return(x>>15?-1:1)*(_?_===31?T?NaN:1/0:Math.pow(2,_-15)*(1+T/1024):6103515625e-14*(T/1024))}function He(x,_){const T=x.getUint16(_.value,!0);return _.value+=2,T}function Se(x,_){return Q(He(x,_))}function fe(x,_,T,I){const F=T.value,B=[];for(;T.value<F+I-1;){const O=we(_,T),$=Re(x,T),Z=De(x,T);T.value+=3;const Y=Re(x,T),ee=Re(x,T);B.push({name:O,pixelType:$,pLinear:Z,xSampling:Y,ySampling:ee})}return T.value+=1,B}function qe(x,_){const T=V(x,_),I=V(x,_),F=V(x,_),B=V(x,_),O=V(x,_),$=V(x,_),Z=V(x,_),Y=V(x,_);return{redX:T,redY:I,greenX:F,greenY:B,blueX:O,blueY:$,whiteX:Z,whiteY:Y}}function lt(x,_){const T=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],I=De(x,_);return T[I]}function Ct(x,_){const T=Re(x,_),I=Re(x,_),F=Re(x,_),B=Re(x,_);return{xMin:T,yMin:I,xMax:F,yMax:B}}function St(x,_){const T=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],I=De(x,_);return T[I]}function Cn(x,_){const T=["ENVMAP_LATLONG","ENVMAP_CUBE"],I=De(x,_);return T[I]}function yn(x,_){const T=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],I=["ROUND_DOWN","ROUND_UP"],F=Ze(x,_),B=Ze(x,_),O=De(x,_);return{xSize:F,ySize:B,levelMode:T[O&15],roundingMode:I[O>>4]}}function mr(x,_){const T=V(x,_),I=V(x,_);return[T,I]}function Vn(x,_){const T=V(x,_),I=V(x,_),F=V(x,_);return[T,I,F]}function Yi(x,_,T,I,F){if(I==="string"||I==="stringvector"||I==="iccProfile")return Xe(_,T,F);if(I==="chlist")return fe(x,_,T,F);if(I==="chromaticities")return qe(x,T);if(I==="compression")return lt(x,T);if(I==="box2i")return Ct(x,T);if(I==="envmap")return Cn(x,T);if(I==="tiledesc")return yn(x,T);if(I==="lineOrder")return St(x,T);if(I==="float")return V(x,T);if(I==="v2f")return mr(x,T);if(I==="v3f")return Vn(x,T);if(I==="int")return Re(x,T);if(I==="rational")return Ye(x,T);if(I==="timecode")return be(x,T);if(I==="preview")return T.value+=F,"skipped";T.value+=F}function as(x,_){const T=Math.log2(x);return _=="ROUND_DOWN"?Math.floor(T):Math.ceil(T)}function le(x,_,T){let I=0;switch(x.levelMode){case"ONE_LEVEL":I=1;break;case"MIPMAP_LEVELS":I=as(Math.max(_,T),x.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return I}function ae(x,_,T,I){const F=new Array(x);for(let B=0;B<x;B++){const O=1<<B;let $=_/O|0;I=="ROUND_UP"&&$*O<_&&($+=1);const Z=Math.max($,1);F[B]=(Z+T-1)/T|0}return F}function ha(){const x=this,_=x.offset,T={value:0};for(let I=0;I<x.tileCount;I++){const F=Re(x.viewer,_),B=Re(x.viewer,_);_.value+=8,x.size=Ze(x.viewer,_);const O=F*x.blockWidth,$=B*x.blockHeight;x.columns=O+x.blockWidth>x.width?x.width-O:x.blockWidth,x.lines=$+x.blockHeight>x.height?x.height-$:x.blockHeight;const Z=x.columns*x.totalBytes,ee=x.size<x.lines*Z?x.uncompress(x):A(x);_.value+=x.size;for(let oe=0;oe<x.lines;oe++){const ne=oe*x.columns*x.totalBytes;for(let ge=0;ge<x.inputChannels.length;ge++){const Le=Ei.channels[ge].name,Te=x.channelByteOffsets[Le]*x.columns,Ae=x.decodeChannels[Le];if(Ae===void 0)continue;T.value=ne+Te;const Be=(x.height-(1+$+oe))*x.outLineWidth;for(let Ne=0;Ne<x.columns;Ne++){const it=Be+(Ne+O)*x.outputChannels+Ae;x.byteArray[it]=x.getter(ee,T)}}}}}function cs(){const x=this,_=x.offset,T={value:0};for(let I=0;I<x.height/x.blockHeight;I++){const F=Re(x.viewer,_)-Ei.dataWindow.yMin;x.size=Ze(x.viewer,_),x.lines=F+x.blockHeight>x.height?x.height-F:x.blockHeight;const B=x.columns*x.totalBytes,$=x.size<x.lines*B?x.uncompress(x):A(x);_.value+=x.size;for(let Z=0;Z<x.blockHeight;Z++){const Y=I*x.blockHeight,ee=Z+x.scanOrder(Y);if(ee>=x.height)continue;const oe=Z*B,ne=(x.height-1-ee)*x.outLineWidth;for(let ge=0;ge<x.inputChannels.length;ge++){const Le=Ei.channels[ge].name,Te=x.channelByteOffsets[Le]*x.columns,Ae=x.decodeChannels[Le];if(Ae!==void 0){T.value=oe+Te;for(let Be=0;Be<x.columns;Be++){const Ne=ne+Be*x.outputChannels+Ae;x.byteArray[Ne]=x.getter($,T)}}}}}}function ua(x,_,T){const I={};if(x.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");I.version=x.getUint8(4);const F=x.getUint8(5);I.spec={singleTile:!!(F&2),longName:!!(F&4),deepFormat:!!(F&8),multiPart:!!(F&16)},T.value=8;let B=!0;for(;B;){const O=we(_,T);if(O==="")B=!1;else{const $=we(_,T),Z=Ze(x,T),Y=Yi(x,_,T,$,Z);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${$}'.`):I[O]=Y}}if((F&-7)!=0)throw console.error("THREE.EXRHeader:",I),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return I}function da(x,_,T,I,F,B){const O={size:0,viewer:_,array:T,offset:I,width:x.dataWindow.xMax-x.dataWindow.xMin+1,height:x.dataWindow.yMax-x.dataWindow.yMin+1,inputChannels:x.channels,channelByteOffsets:{},shouldExpand:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ut};switch(x.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=A;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=K;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=te;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=te;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=ve;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=ie;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=We;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=We;break;default:throw new Error("EXRLoader.parse: "+x.compression+" is unsupported")}const $={};for(const ne of x.channels)switch(ne.name){case"Y":case"R":case"G":case"B":case"A":$[ne.name]=!0,O.type=ne.pixelType}let Z=!1,Y=!1;if($.R&&$.G&&$.B)O.outputChannels=4;else if($.Y)O.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(O.outputChannels){case 4:B==Yt?(Z=!$.A,O.format=Yt,O.colorSpace=Ut,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3}):B==rr?(O.format=rr,O.colorSpace=Ut,O.outputChannels=2,O.decodeChannels={R:0,G:1}):B==sr?(O.format=sr,O.colorSpace=Ut,O.outputChannels=1,O.decodeChannels={R:0}):Y=!0;break;case 1:B==Yt?(Z=!0,O.format=Yt,O.colorSpace=Ut,O.outputChannels=4,O.shouldExpand=!0,O.decodeChannels={Y:0}):B==rr?(O.format=rr,O.colorSpace=Ut,O.outputChannels=2,O.shouldExpand=!0,O.decodeChannels={Y:0}):B==sr?(O.format=sr,O.colorSpace=Ut,O.outputChannels=1,O.decodeChannels={Y:0}):Y=!0;break;default:Y=!0}if(Y)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(O.type==1)switch(F){case jt:O.getter=Se;break;case Nn:O.getter=He;break}else if(O.type==2)switch(F){case jt:O.getter=V;break;case Nn:O.getter=Ee}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+x.compression+".");O.columns=O.width;const ee=O.width*O.height*O.outputChannels;switch(F){case jt:O.byteArray=new Float32Array(ee),Z&&O.byteArray.fill(1,0,ee);break;case Nn:O.byteArray=new Uint16Array(ee),Z&&O.byteArray.fill(15360,0,ee);break;default:console.error("THREE.EXRLoader: unsupported type: ",F);break}let oe=0;for(const ne of x.channels)O.decodeChannels[ne.name]!==void 0&&(O.channelByteOffsets[ne.name]=oe),oe+=ne.pixelType*2;if(O.totalBytes=oe,O.outLineWidth=O.width*O.outputChannels,x.lineOrder==="INCREASING_Y"?O.scanOrder=ne=>ne:O.scanOrder=ne=>O.height-1-ne,x.spec.singleTile){O.blockHeight=x.tiles.ySize,O.blockWidth=x.tiles.xSize;const ne=le(x.tiles,O.width,O.height),ge=ae(ne,O.width,x.tiles.xSize,x.tiles.roundingMode),Le=ae(ne,O.height,x.tiles.ySize,x.tiles.roundingMode);O.tileCount=ge[0]*Le[0];for(let Te=0;Te<ne;Te++)for(let Ae=0;Ae<Le[Te];Ae++)for(let Be=0;Be<ge[Te];Be++)Je(_,I);O.decode=ha.bind(O)}else{O.blockWidth=O.width;const ne=Math.ceil(O.height/O.blockHeight);for(let ge=0;ge<ne;ge++)Je(_,I);O.decode=cs.bind(O)}return O}const fa={value:0},pa=new DataView(e),$l=new Uint8Array(e),Ei=ua(pa,e,fa),mi=da(Ei,pa,$l,fa,this.type,this.outputFormat);if(mi.decode(),mi.shouldExpand){const x=mi.byteArray;if(this.outputFormat==Yt)for(let _=0;_<x.length;_+=4)x[_+2]=x[_+1]=x[_];else if(this.outputFormat==rr)for(let _=0;_<x.length;_+=2)x[_+1]=x[_]}return{header:Ei,width:mi.width,height:mi.height,data:mi.byteArray,format:mi.format,colorSpace:mi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=Dt,o.magFilter=Dt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}class uA extends qw{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}class dA extends Vt{constructor(e,t,n,i=128){if(t<=0||n<=0||i<=0)throw new Error("GroundedSkybox height, radius, and resolution must be positive.");const s=new ro(n,2*i,i);s.scale(1,1,-1);const o=s.getAttribute("position"),a=new P;for(let c=0;c<o.count;++c)if(a.fromBufferAttribute(o,c),a.y<0){const l=-t*3/2,h=a.y<l?-t/a.y:1-a.y*a.y/(3*l*l);a.multiplyScalar(h),a.toArray(o.array,3*c)}o.needsUpdate=!0,super(s,new En({map:e,depthWrite:!1}))}}const Is={};function fA(r,e){ui(e,!0);const t=co();let n=wt(e,"skybox",15),i=wt(e,"texture",15),s=wt(e,"ground",3,!1),o=wt(e,"isBackground",3,!1),a=wt(e,"scene",19,()=>t.scene);const c=ww(),l=qp();Zw({get scene(){return a()},get isBackground(){return o()},get texture(){return i()}});const h=_n(()=>e.url?.endsWith("exr")??!1),u=_n(()=>e.url?.endsWith("hdr")??!1),d=_n(()=>{if(e.url!==void 0)return R(h)?(Is.exr??=new hA,Is.exr):R(u)?(Is.hdr??=new uA,Is.hdr):(Is.tex??=new bd,Is.tex)});hn(()=>{if(e.url===void 0||R(d)===void 0)return;const g=c(l.remember(()=>R(d).loadAsync(e.url),[e.url]));return g.then(m=>{m.mapping=Vs,i(m)}),()=>{g.then(m=>{m.dispose()})}});var f=dn(),p=It(f);{var v=g=>{const m=_n(()=>s()===!0?{}:s());var S=dn(),y=It(S);{var b=C=>{{let M=_n(()=>[i(),R(m).height??1,R(m).radius??1,R(m).resolution??128]);xe(C,{get is(){return dA},get args(){return R(M)},get ref(){return n()},set ref(N){n(N)}})}};qn(y,C=>{i()&&C(b)})}pt(g,S)};qn(p,g=>{s()&&g(v)})}pt(r,f),di()}const pA=()=>LE("threlte-controls",{orbitControls:Hi(void 0),trackballControls:Hi(void 0)});function mA(r,e){ui(e,!0);const t=()=>Fu(a,"$parent",n),[n,i]=Bu();let s=wt(e,"ref",15),o=jo(e,["$$slots","$$events","$$legacy","ref","children"]);const a=Zg(),{dom:c,invalidate:l}=co();if(!ri(t(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const h=new Nw(t(),c),{orbitControls:u}=pA(),{start:d,stop:f}=Kg(()=>{h.update()},{autoStart:!1,autoInvalidate:!1});hn(()=>{e.autoRotate||e.enableDamping?d():f()}),hn(()=>{const p=v=>{l(),e.onchange?.(v)};return u.set(h),h.addEventListener("change",p),()=>{u.set(void 0),h.removeEventListener("change",p)}}),xe(r,Fs({get is(){return h}},()=>o,{get ref(){return s()},set ref(p){s(p)},children:(p,v)=>{var g=dn(),m=It(g);Gr(m,()=>e.children??Os,()=>({ref:h})),pt(p,g)},$$slots:{default:!0}})),di(),i()}new je;new je;new Vt;`${rt.logdepthbuf_pars_vertex}${rt.fog_pars_vertex}${rt.logdepthbuf_vertex}${rt.fog_vertex}`;`${rt.tonemapping_fragment}${rt.colorspace_fragment}`;`${rt.tonemapping_fragment}${rt.colorspace_fragment}`;const gA=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,_A=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,vA=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,xA=vA,yA=`
	${gA}
	${_A}
`;`${xA}${yA}${rt.tonemapping_fragment}${rt.colorspace_fragment}`;new qt;typeof window<"u"&&document.createElement("div");for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);new oo(-1,1,1,-1,0,1);class MA extends dt{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}new MA;var a_={exports:{}};a_.exports=Zl;a_.exports.default=Zl;function Zl(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=c_(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,c,l,h,u,d,f;if(n&&(s=wA(r,e,s,t)),r.length>80*t){a=l=r[0],c=h=r[1];for(var p=t;p<i;p+=t)u=r[p],d=r[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return qo(s,o,t,a,c,f,0),o}function c_(r,e,t,n,i){var s,o;if(i===Lu(r,e,t,n)>0)for(s=e;s<t;s+=n)o=kp(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=kp(s,r[s],r[s+1],o);return o&&Kl(o,o.next)&&(Ko(o),o=o.next),o}function es(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Kl(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Ko(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qo(r,e,t,n,i,s,o){if(r){!o&&s&&PA(r,n,i,s);for(var a=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?SA(r,n,i,s):bA(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Ko(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=TA(es(r),e,t),qo(r,e,t,n,i,s,2)):o===2&&EA(r,e,t,n,i,s):qo(es(r),e,t,n,i,s,1);break}}}}function bA(r){var e=r.prev,t=r,n=r.next;if(Ht(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Us(i,a,s,c,o,l,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function SA(r,e,t,n){var i=r.prev,s=r,o=r.next;if(Ht(i,s,o)>=0)return!1;for(var a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,m=Pu(f,p,e,t,n),S=Pu(v,g,e,t,n),y=r.prevZ,b=r.nextZ;y&&y.z>=m&&b&&b.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Us(a,h,c,u,l,d,y.x,y.y)&&Ht(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Us(a,h,c,u,l,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Us(a,h,c,u,l,d,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Us(a,h,c,u,l,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function TA(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Kl(i,s)&&l_(i,n,n.next,s)&&Zo(i,s)&&Zo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ko(n),Ko(n.next),n=r=s),n=n.next}while(n!==r);return es(n)}function EA(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&NA(o,a)){var c=h_(o,a);o=es(o,o.next),c=es(c,c.next),qo(o,e,t,n,i,s,0),qo(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function wA(r,e,t,n){var i=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=c_(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(LA(l));for(i.sort(AA),s=0;s<i.length;s++)t=CA(i[s],t);return t}function AA(r,e){return r.x-e.x}function CA(r,e){var t=RA(r,e);if(!t)return e;var n=h_(t,r);return es(n,n.next),es(t,t.next)}function RA(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,d;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Us(i<h?n:s,i,l,h,i<h?s:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Zo(t,r)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&IA(o,t)))&&(o=t,u=d)),t=t.next;while(t!==c);return o}function IA(r,e){return Ht(r.prev,r,e.prev)<0&&Ht(e.next,r,r.next)<0}function PA(r,e,t,n){var i=r;do i.z===0&&(i.z=Pu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,DA(i)}function DA(r){var e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function Pu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function LA(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Us(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function NA(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!UA(r,e)&&(Zo(r,e)&&Zo(e,r)&&OA(r,e)&&(Ht(r.prev,r,e.prev)||Ht(r,e.prev,e))||Kl(r,e)&&Ht(r.prev,r,r.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Kl(r,e){return r.x===e.x&&r.y===e.y}function l_(r,e,t,n){var i=uc(Ht(r,e,t)),s=uc(Ht(r,e,n)),o=uc(Ht(t,n,r)),a=uc(Ht(t,n,e));return!!(i!==s&&o!==a||i===0&&hc(r,t,e)||s===0&&hc(r,n,e)||o===0&&hc(t,r,n)||a===0&&hc(t,e,n))}function hc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function uc(r){return r>0?1:r<0?-1:0}function UA(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&l_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Zo(r,e){return Ht(r.prev,r,r.next)<0?Ht(r,e,r.next)>=0&&Ht(r,r.prev,e)>=0:Ht(r,e,r.prev)<0||Ht(r,r.next,e)<0}function OA(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function h_(r,e){var t=new Du(r.i,r.x,r.y),n=new Du(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function kp(r,e,t,n){var i=new Du(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ko(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Du(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Zl.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(Lu(r,0,s,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,h=a<c-1?e[a+1]*t:r.length;o-=Math.abs(Lu(r,l,h,t))}var u=0;for(a=0;a<n.length;a+=3){var d=n[a]*t,f=n[a+1]*t,p=n[a+2]*t;u+=Math.abs((r[d]-r[p])*(r[f+1]-r[d+1])-(r[d]-r[f])*(r[p+1]-r[d+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function Lu(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Zl.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new se;new se;var zp;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const c=i[a];for(;s.length>=2;){const l=s[s.length-1],h=s[s.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))s.pop();else break}s.push(c)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],h=o[o.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))o.pop();else break}o.push(c)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(zp||(zp={}));new En;new P;new je;new Xi;new Zt;new qt;new P;new P;var FA=kt("<!> <!> <!> <!> <!> <!> <!> <!>",1),BA=kt("<!> <!> <!> <!> <!> <!> <!> <!>",1),kA=kt("<!> <!> <!> <!> <!> <!> <!> <!>",1),zA=kt("<!> <!> <!> <!> <!> <!> <!> <!>",1),HA=kt("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),VA=kt("<!> <!> <!> <!> <!>",1),GA=kt("<!> <!>",1);function WA(r,e){ui(e,!0);const t=()=>Fu(u,"$gltf",n),[n,i]=Bu();let s=wt(e,"ref",15),o=wt(e,"carColor",3,"black"),a=wt(e,"rimColor",3,"black"),c=wt(e,"caliperColor",3,"green"),l=jo(e,["$$slots","$$events","$$legacy","fallback","error","children","ref","carColor","rimColor","caliperColor"]);const h=Mw(),u=_w("/glb/M3.glb",{dracoLoader:h});cr(()=>{if(t()){const p=t().materials.BodyPaint;p&&(p.color=new Fe(o()),p.metallicness=1,p.roughness=.34);const v=t().materials.Clipper;v&&(v.color=new Fe(c()));const g=t().materials["Rim.002"];g&&(g.color=new Fe(a()),g.metallicness=1,g.roughness=.3)}});var d=dn(),f=It(d);Me(f,()=>xe.Group,(p,v)=>{v(p,Fs({dispose:!1},()=>l,{get ref(){return s()},set ref(g){s(g)},children:(g,m)=>{var S=GA(),y=It(S);I_(y,()=>u,C=>{var M=dn(),N=It(M);Gr(N,()=>e.fallback??Os),pt(C,M)},(C,M)=>{var N=VA(),D=It(N);Me(D,()=>xe.Group,(G,W)=>{W(G,{position:[-.06,0,0],children:(J,q)=>{var re=FA(),j=It(re);Me(j,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes[4006].geometry},get material(){return R(M).materials["Logo.002"]}})});var ue=me(j,2);Me(ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4006_1"].geometry},get material(){return R(M).materials.Tyre}})});var pe=me(ue,2);Me(pe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4006_2"].geometry},get material(){return R(M).materials["Side wall"]}})});var Ce=me(pe,2);Me(Ce,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4006_3"].geometry},get material(){return R(M).materials["Dark Steel"]}})});var Ue=me(Ce,2);Me(Ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4006_4"].geometry},get material(){return R(M).materials["Wheel Brake Disk.003"]}})});var ze=me(Ue,2);Me(ze,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4006_5"].geometry},get material(){return R(M).materials["Shiny Plastic.001"]}})});var Qe=me(ze,2);Me(Qe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4006_6"].geometry},get material(){return R(M).materials.Steel}})});var et=me(Qe,2);Me(et,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4006_7"].geometry},get material(){return R(M).materials["Rim.002"]}})}),pt(J,re)},$$slots:{default:!0}})});var E=me(D,2);Me(E,()=>xe.Group,(G,W)=>{W(G,{position:[-.06,0,0],children:(J,q)=>{var re=BA(),j=It(re);Me(j,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes[4057].geometry},get material(){return R(M).materials["Logo.002"]}})});var ue=me(j,2);Me(ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4057_1"].geometry},get material(){return R(M).materials.Tyre}})});var pe=me(ue,2);Me(pe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4057_2"].geometry},get material(){return R(M).materials["Side wall"]}})});var Ce=me(pe,2);Me(Ce,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4057_3"].geometry},get material(){return R(M).materials["Dark Steel"]}})});var Ue=me(Ce,2);Me(Ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4057_4"].geometry},get material(){return R(M).materials["Wheel Brake Disk.003"]}})});var ze=me(Ue,2);Me(ze,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4057_5"].geometry},get material(){return R(M).materials["Shiny Plastic.001"]}})});var Qe=me(ze,2);Me(Qe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4057_6"].geometry},get material(){return R(M).materials.Steel}})});var et=me(Qe,2);Me(et,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4057_7"].geometry},get material(){return R(M).materials["Rim.002"]}})}),pt(J,re)},$$slots:{default:!0}})});var w=me(E,2);Me(w,()=>xe.Group,(G,W)=>{W(G,{position:[-.06,0,0],children:(J,q)=>{var re=kA(),j=It(re);Me(j,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes[4004].geometry},get material(){return R(M).materials["Logo.002"]}})});var ue=me(j,2);Me(ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4004_1"].geometry},get material(){return R(M).materials.Tyre}})});var pe=me(ue,2);Me(pe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4004_2"].geometry},get material(){return R(M).materials["Side wall"]}})});var Ce=me(pe,2);Me(Ce,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4004_3"].geometry},get material(){return R(M).materials["Dark Steel"]}})});var Ue=me(Ce,2);Me(Ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4004_4"].geometry},get material(){return R(M).materials["Wheel Brake Disk.003"]}})});var ze=me(Ue,2);Me(ze,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4004_5"].geometry},get material(){return R(M).materials["Shiny Plastic.001"]}})});var Qe=me(ze,2);Me(Qe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4004_6"].geometry},get material(){return R(M).materials.Steel}})});var et=me(Qe,2);Me(et,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4004_7"].geometry},get material(){return R(M).materials["Rim.002"]}})}),pt(J,re)},$$slots:{default:!0}})});var L=me(w,2);Me(L,()=>xe.Group,(G,W)=>{W(G,{position:[-.06,0,0],children:(J,q)=>{var re=zA(),j=It(re);Me(j,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes[4002].geometry},get material(){return R(M).materials["Logo.002"]}})});var ue=me(j,2);Me(ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4002_1"].geometry},get material(){return R(M).materials.Tyre}})});var pe=me(ue,2);Me(pe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4002_2"].geometry},get material(){return R(M).materials["Side wall"]}})});var Ce=me(pe,2);Me(Ce,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4002_3"].geometry},get material(){return R(M).materials["Dark Steel"]}})});var Ue=me(Ce,2);Me(Ue,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4002_4"].geometry},get material(){return R(M).materials["Wheel Brake Disk.003"]}})});var ze=me(Ue,2);Me(ze,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4002_5"].geometry},get material(){return R(M).materials["Shiny Plastic.001"]}})});var Qe=me(ze,2);Me(Qe,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4002_6"].geometry},get material(){return R(M).materials.Steel}})});var et=me(Qe,2);Me(et,()=>xe.Mesh,(H,X)=>{X(H,{get geometry(){return R(M).nodes["4002_7"].geometry},get material(){return R(M).materials["Rim.002"]}})}),pt(J,re)},$$slots:{default:!0}})});var z=me(L,2);Me(z,()=>xe.Mesh,(G,W)=>{W(G,{get geometry(){return R(M).nodes["mycar-body"].geometry},get material(){return R(M).materials["black button"]},position:[-.06,0,0],children:(J,q)=>{var re=HA(),j=It(re);Me(j,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Circle.geometry},get material(){return R(M).materials.gril}})});var ue=me(j,2);Me(ue,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube004.geometry},get material(){return R(M).materials.plastic}})});var pe=me(ue,2);Me(pe,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube006.geometry},get material(){return R(M).materials["Carbon Fiber PBR Interior.001"]}})});var Ce=me(pe,2);Me(Ce,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube007.geometry},get material(){return R(M).materials.plastic}})});var Ue=me(Ce,2);Me(Ue,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube008.geometry},get material(){return R(M).materials.w}})});var ze=me(Ue,2);Me(ze,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube009.geometry},get material(){return R(M).materials.w}})});var Qe=me(ze,2);Me(Qe,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube010.geometry},get material(){return R(M).materials.plastic}})});var et=me(Qe,2);Me(et,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube014.geometry},get material(){return R(M).materials.plastic}})});var H=me(et,2);Me(H,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube015.geometry},get material(){return R(M).materials.plastic}})});var X=me(H,2);Me(X,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube016.geometry},get material(){return R(M).materials.plastic}})});var ke=me(X,2);Me(ke,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube019.geometry},get material(){return R(M).materials.plastic}})});var Ke=me(ke,2);Me(Ke,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube020.geometry},get material(){return R(M).materials.plastic}})});var Ve=me(Ke,2);Me(Ve,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube021.geometry},get material(){return R(M).materials.plastic}})});var ut=me(Ve,2);Me(ut,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube022.geometry},get material(){return R(M).materials.plastic}})});var Tt=me(ut,2);Me(Tt,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube023.geometry},get material(){return R(M).materials.plastic}})});var k=me(Tt,2);Me(k,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube024.geometry},get material(){return R(M).materials.w}})});var _e=me(k,2);Me(_e,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube025.geometry},get material(){return R(M).materials.w}})});var de=me(_e,2);Me(de,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube026.geometry},get material(){return R(M).materials.plastic}})});var he=me(de,2);Me(he,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube027.geometry},get material(){return R(M).materials.plastic}})});var ce=me(he,2);Me(ce,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube028.geometry},get material(){return R(M).materials.plastic}})});var Ie=me(ce,2);Me(Ie,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube030.geometry},get material(){return R(M).materials["Head Light Led Tube"]}})});var ye=me(Ie,2);Me(ye,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube031.geometry},get material(){return R(M).materials.chrome}})});var Pe=me(ye,2);Me(Pe,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube033.geometry},get material(){return R(M).materials.plastic}})});var ct=me(Pe,2);Me(ct,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube034.geometry},get material(){return R(M).materials["Head Light Led Tube.001"]}})});var nt=me(ct,2);Me(nt,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube035.geometry},get material(){return R(M).materials["gril black"]}})});var U=me(nt,2);Me(U,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube036.geometry},get material(){return R(M).materials.plastic}})});var A=me(U,2);Me(A,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube037.geometry},get material(){return R(M).materials["Tailight Led Tube.001"]}})});var K=me(A,2);Me(K,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube038.geometry},get material(){return R(M).materials.plastic}})});var te=me(K,2);Me(te,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube040.geometry},get material(){return R(M).materials.plastic}})});var ve=me(te,2);Me(ve,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube041.geometry},get material(){return R(M).materials["Tailight Led Tube"]}})});var ie=me(ve,2);Me(ie,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube042.geometry},get material(){return R(M).materials.plastic}})});var We=me(ie,2);Me(We,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube043.geometry},get material(){return R(M).materials.chrome}})});var we=me(We,2);Me(we,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube044.geometry},get material(){return R(M).materials.chrome}})});var Xe=me(we,2);Me(Xe,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube045.geometry},get material(){return R(M).materials.chrome}})});var Ye=me(Xe,2);Me(Ye,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube046.geometry},get material(){return R(M).materials["Tailight Led Tube.001"]}})});var be=me(Ye,2);Me(be,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube064.geometry},get material(){return R(M).materials.plastic}})});var Re=me(be,2);Me(Re,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube065.geometry},get material(){return R(M).materials.BodyPaint}})});var Ze=me(Re,2);Me(Ze,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube066.geometry},get material(){return R(M).materials.indicatores}})});var $e=me(Ze,2);Me($e,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube071.geometry},get material(){return R(M).materials.gril}})});var De=me($e,2);Me(De,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube072.geometry},get material(){return R(M).materials.plastic}})});var Je=me(De,2);Me(Je,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube073.geometry},get material(){return R(M).materials.plastic}})});var V=me(Je,2);Me(V,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube074.geometry},get material(){return R(M).materials.gril}})});var Ee=me(V,2);Me(Ee,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube075.geometry},get material(){return R(M).materials.log}})});var Q=me(Ee,2);Me(Q,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube076.geometry},get material(){return R(M).materials.log}})});var He=me(Q,2);Me(He,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube094.geometry},get material(){return R(M).materials.plastic}})});var Se=me(He,2);Me(Se,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube095.geometry},get material(){return R(M).materials.gril}})});var fe=me(Se,2);Me(fe,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube096.geometry},get material(){return R(M).materials["Carbon Fiber PBR Interior.001"]}})});var qe=me(fe,2);Me(qe,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube097.geometry},get material(){return R(M).materials.plastic}})});var lt=me(qe,2);Me(lt,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube098.geometry},get material(){return R(M).materials["Carbon Fiber PBR Interior.001"]}})});var Ct=me(lt,2);Me(Ct,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube105.geometry},get material(){return R(M).materials["Carbon Fiber PBR Interior.001"]}})});var St=me(Ct,2);Me(St,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube108.geometry},get material(){return R(M).materials.mirror}})});var Cn=me(St,2);Me(Cn,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube109.geometry},get material(){return R(M).materials.plastic}})});var yn=me(Cn,2);Me(yn,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube112.geometry},get material(){return R(M).materials.plastic}})});var mr=me(yn,2);Me(mr,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes.Cube175.geometry},get material(){return R(M).materials.plastic}})});var Vn=me(mr,2);Me(Vn,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes[4036].geometry},get material(){return R(M).materials["Rough Plastic"]}})});var Yi=me(Vn,2);Me(Yi,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes["4036_1"].geometry},get material(){return R(M).materials.Clipper}})});var as=me(Yi,2);Me(as,()=>xe.Mesh,(le,ae)=>{ae(le,{get geometry(){return R(M).nodes["4036_2"].geometry},get material(){return R(M).materials.Steel}})}),pt(J,re)},$$slots:{default:!0}})}),pt(C,N)},(C,M)=>{var N=dn(),D=It(N);Gr(D,()=>e.error??Os,()=>({error:R(M)})),pt(C,N)});var b=me(y,2);Gr(b,()=>e.children??Os,()=>({ref:s()})),pt(g,S)},$$slots:{default:!0}}))}),pt(r,d),di(),i()}const zd=XA(),Hd=3e3;function XA(){return typeof window<"u"?`http://${window.location.hostname}:`:"http://localhost:"}async function YA(){try{return await(await fetch(`${zd}${Hd}/api/options`,{method:"GET",headers:{"Content-Type":"application/json"}})).json()}catch(r){return console.error("Failed to retrieve options:",r),null}}async function qA(r){try{return await(await fetch(`${zd}${Hd}/api/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json()}catch(e){return console.error(e),null}}async function ZA(r){try{return await(await fetch(`${zd}${Hd}/api/config/${r}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json()}catch(e){return console.error("Failed to retrieve configuration:",e),null}}function KA(r,e,t,n){var i,s,o=!1,a=t.length>=2,c=(p,v,g)=>{if(i=v,a&&(s=p),!o){let m=e(p,v,g);if(e.length<2)v(m);else return m}o=!1},l=Jo(r,c,n),h=!Array.isArray(r);function u(p){var v=t(p,s);h?(o=!0,r.set(v)):v.forEach((g,m)=>{o=!0,r[m].set(g)}),o=!1}var d=!1;function f(p){var v,g,m,S;if(d){S=p(vc(l)),i(S);return}var y=l.subscribe(b=>{d?v?g=!0:v=!0:m=b});S=p(m),d=!0,i(S),y(),d=!1,g&&(S=vc(l)),v&&u(S)}return{subscribe:l.subscribe,set(p){f(()=>p)},update:f}}const $A=20,os=Hi([]),Vd=Hi(null),gc=new Map,Hp=r=>{if(gc.has(r))return;const e=setTimeout(()=>{gc.delete(r),d_(r)},1e3);gc.set(r,e)},JA=r=>{const e=gc.get(r);e&&clearTimeout(e)};function u_(r){r.id&&JA(r.id),os.update(e=>e.map(t=>t.id===r.id?{...t,...r}:t))}function jA(r){os.update(e=>[r,...e].slice(0,$A))}function QA(r){vc(os).find(e=>e.id===r.id)?u_(r):jA(r)}function e1(r){os.update(e=>(r?Hp(r):e.forEach(t=>{Hp(t.id)}),e.map(t=>t.id===r||r===void 0?{...t,visible:!1}:t)))}function d_(r){os.update(e=>r===void 0?[]:e.filter(t=>t.id!==r))}function t1(r){Vd.set(r)}function n1(r){let e;Vd.update(t=>(e=r-(t||0),null)),os.update(t=>t.map(n=>({...n,pauseDuration:n.pauseDuration+e})))}const i1={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3};function r1(r={}){return{toasts:KA(os,t=>t.map(n=>({...r,...r[n.type],...n,duration:n.duration||r[n.type]?.duration||r?.duration||i1[n.type],style:[r.style,r[n.type]?.style,n.style].join(";")})),t=>t),pausedAt:Vd}}const s1=r=>typeof r=="function",Vp=(r,e)=>s1(r)?r(e):r,o1=(()=>{let r=0;return()=>(r+=1,r.toString())})(),Nu=(()=>{let r;return()=>{if(r===void 0&&typeof window<"u"){const e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r}})(),a1=(r,e="blank",t)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:r,pauseDuration:0,...t,id:t?.id||o1()}),la=r=>(e,t)=>{const n=a1(e,r,t);return QA(n),n.id},ln=(r,e)=>la("blank")(r,e);ln.error=la("error");ln.success=la("success");ln.loading=la("loading");ln.custom=la("custom");ln.dismiss=r=>{e1(r)};ln.remove=r=>d_(r);ln.promise=(r,e,t)=>{const n=ln.loading(e.loading,{...t,...t?.loading});return r.then(i=>(ln.success(Vp(e.success,i),{id:n,...t,...t?.success}),i)).catch(i=>{ln.error(Vp(e.error,i),{id:n,...t,...t?.error})}),r};function c1(r,e,t){const{reverseOrder:n,gutter:i=8,defaultPosition:s}=t||{},o=e.filter(h=>(h.position||s)===(r.position||s)&&h.height),a=o.findIndex(h=>h.id===r.id),c=o.filter((h,u)=>u<a&&h.visible).length;return o.filter(h=>h.visible).slice(...n?[c+1]:[0,c]).reduce((h,u)=>h+(u.height||0)+i,0)}const l1={startPause(){t1(Date.now())},endPause(){n1(Date.now())},updateHeight:(r,e)=>{u_({id:r,height:e})},calculateOffset:c1};function h1(r){const{toasts:e,pausedAt:t}=r1(r),n=new Map;let i;const s=[t.subscribe(o=>{if(o){for(const[,a]of n)clearTimeout(a);n.clear()}i=o}),e.subscribe(o=>{if(i)return;const a=Date.now();for(const c of o){if(n.has(c.id)||c.duration===1/0)continue;const l=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(l<0)return c.visible&&ln.dismiss(c.id),null;n.set(c.id,setTimeout(()=>ln.dismiss(c.id),l))}})];return ts(()=>{for(const o of s)o()}),{toasts:e,handlers:l1}}var u1=kt('<div class="svelte-1did3zw"></div>');function d1(r,e){let t=wt(e,"primary",8,"#61d345"),n=wt(e,"secondary",8,"#fff");var i=u1();let s;ci(o=>s=Fi(i,"",s,o),[()=>({"--primary":t(),"--secondary":n()})]),pt(r,i)}var f1=kt('<div class="svelte-1ro2ggf"></div>');function p1(r,e){let t=wt(e,"primary",8,"#ff4b4b"),n=wt(e,"secondary",8,"#fff");var i=f1();let s;ci(o=>s=Fi(i,"",s,o),[()=>({"--primary":t(),"--secondary":n()})]),pt(r,i)}var m1=kt('<div class="svelte-tyythq"></div>');function g1(r,e){let t=wt(e,"primary",8,"#616161"),n=wt(e,"secondary",8,"#e0e0e0");var i=m1();let s;ci(o=>s=Fi(i,"",s,o),[()=>({"--primary":t(),"--secondary":n()})]),pt(r,i)}var _1=kt('<div class="animated svelte-t33qv2"> </div>'),v1=kt('<div class="status svelte-t33qv2"><!></div>'),x1=kt('<div class="indicator svelte-t33qv2"><!> <!></div>');function cu(r,e){ui(e,!1);const t=Jt(),n=Jt(),i=Jt();let s=wt(e,"toast",8);Or(()=>(R(t),R(n),R(i),cn(s())),()=>{(h=>{Nt(t,h.type),Nt(n,h.icon),Nt(i,h.iconTheme)})(s())}),ul();var o=dn(),a=It(o);{var c=h=>{var u=_1(),d=Sn(u,!0);en(u),ci(()=>Xp(d,R(n))),pt(h,u)},l=h=>{var u=dn(),d=It(u);{var f=v=>{var g=dn(),m=It(g);Me(m,()=>R(n),(S,y)=>{y(S,{})}),pt(v,g)},p=v=>{var g=dn(),m=It(g);{var S=y=>{var b=x1(),C=Sn(b);g1(C,Fs(()=>R(i)));var M=me(C,2);{var N=D=>{var E=v1(),w=Sn(E);{var L=G=>{p1(G,Fs(()=>R(i)))},z=G=>{d1(G,Fs(()=>R(i)))};qn(w,G=>{R(t)==="error"?G(L):G(z,!1)})}en(E),pt(D,E)};qn(M,D=>{R(t)!=="loading"&&D(N)})}en(b),pt(y,b)};qn(m,y=>{R(t)!=="blank"&&y(S)},!0)}pt(v,g)};qn(d,v=>{typeof R(n)<"u"?v(f):v(p,!1)},!0)}pt(h,u)};qn(a,h=>{typeof R(n)=="string"?h(c):h(l,!1)})}pt(r,o),di()}var y1=kt("<div><!></div>");function _c(r,e){ui(e,!1);let t=wt(e,"toast",8);$o();var n=y1();C_(n,()=>({class:"message",...t().ariaProps}),void 0,void 0,"svelte-1gudbf6");var i=Sn(n);{var s=a=>{var c=A_();ci(()=>Xp(c,(cn(t()),ai(()=>t().message)))),pt(a,c)},o=a=>{var c=dn(),l=It(c);Me(l,()=>t().message,(h,u)=>{u(h,{get toast(){return t()}})}),pt(a,c)};qn(i,a=>{cn(t()),ai(()=>typeof t().message=="string")?a(s):a(o,!1)})}en(n),pt(r,n),di()}var M1=kt("<!> <!>",1),b1=kt("<div><!></div>");function S1(r,e){ui(e,!1);let t=wt(e,"toast",8),n=wt(e,"position",24,()=>{}),i=wt(e,"style",8,""),s=wt(e,"Component",24,()=>{}),o=Jt(),a=Jt();Or(()=>(cn(t()),cn(n()),Nu),()=>{const f=(t().position||n()||"top-center").includes("top");Nt(o,f?1:-1);const[p,v]=Nu()?["fadeIn","fadeOut"]:["enter","exit"];Nt(a,t().visible?p:v)}),ul(),$o();var c=b1();let l;var h=Sn(c);{var u=f=>{var p=dn(),v=It(p);Me(v,s,(g,m)=>{m(g,{$$slots:{icon:(S,y)=>{cu(S,{get toast(){return t()},slot:"icon"})},message:(S,y)=>{_c(S,{get toast(){return t()},slot:"message"})}}})}),pt(f,p)},d=f=>{var p=dn(),v=It(p);Yp(v,e,"default",{get ToastIcon(){return cu},get ToastMessage(){return _c},get toast(){return t()}},g=>{var m=M1(),S=It(m);cu(S,{get toast(){return t()}});var y=me(S,2);_c(y,{get toast(){return t()}}),pt(g,m)}),pt(f,p)};qn(h,f=>{s()?f(u):f(d,!1)})}en(c),ci(f=>{Bs(c,1,`base ${cn(t()),R(a),ai(()=>t().height?R(a):"transparent")??""} ${cn(t()),ai(()=>t().className||"")??""}`,"svelte-yae3e8"),l=Fi(c,`${i()??""}; ${cn(t()),ai(()=>t().style)??""}`,l,f)},[()=>({"--factor":R(o)})]),pt(r,c),di()}var T1=kt("<div><!></div>");function E1(r,e){ui(e,!1);const t=Jt(),n=Jt(),i=Jt(),s=Jt();let o=wt(e,"toast",8),a=wt(e,"setHeight",8),c=Jt();Uu(()=>{a()(R(c).getBoundingClientRect().height)}),Or(()=>cn(o()),()=>{Nt(t,o().position?.includes("top")?0:null)}),Or(()=>cn(o()),()=>{Nt(n,o().position?.includes("bottom")?0:null)}),Or(()=>cn(o()),()=>{Nt(i,o().position?.includes("top")?1:-1)}),Or(()=>cn(o()),()=>{Nt(s,o().position?.includes("center")&&"center"||(o().position?.includes("right")||o().position?.includes("end"))&&"flex-end"||null)}),ul(),$o();var l=T1();let h,u;var d=Sn(l);{var f=v=>{_c(v,{get toast(){return o()}})},p=v=>{var g=dn(),m=It(g);Yp(m,e,"default",{get toast(){return o()}},S=>{S1(S,{get toast(){return o()},get position(){return cn(o()),ai(()=>o().position)}})}),pt(v,g)};qn(d,v=>{cn(o()),ai(()=>o().type==="custom")?v(f):v(p,!1)})}en(l),lu(l,v=>Nt(c,v),()=>R(c)),ci((v,g)=>{h=Bs(l,1,"wrapper svelte-1pz3gqy",null,h,v),u=Fi(l,"",u,g)},[()=>({active:o().visible,transition:!Nu()}),()=>({"--factor":R(i),"--offset":(cn(o()),ai(()=>o().offset)),top:R(t),bottom:R(n),"justify-content":R(s)})]),pt(r,l),di()}var w1=kt('<div role="alert"></div>');function A1(r,e){ui(e,!1);const t=()=>Fu(u,"$toasts",n),[n,i]=Bu();let s=wt(e,"reverseOrder",8,!1),o=wt(e,"position",8,"top-center"),a=wt(e,"toastOptions",24,()=>{}),c=wt(e,"gutter",8,8),l=wt(e,"containerStyle",24,()=>{}),h=wt(e,"containerClassName",24,()=>{});const{toasts:u,handlers:d}=h1(a());let f=Jt();Or(()=>(t(),cn(o()),cn(s()),cn(c())),()=>{Nt(f,t().map(v=>({...v,position:v.position||o(),offset:d.calculateOffset(v,t(),{reverseOrder:s(),gutter:c(),defaultPosition:o()})})))}),ul(),$o();var p=w1();dc(p,5,()=>R(f),v=>v.id,(v,g)=>{E1(v,{get toast(){return R(g)},setHeight:m=>d.updateHeight(R(g).id,m)})}),en(p),ci(()=>{Bs(p,1,`toaster ${(h()||"")??""}`,"svelte-haq5xk"),Fi(p,l())}),Nr("mouseenter",p,function(...v){d.startPause?.apply(this,v)}),Nr("mouseleave",p,function(...v){d.endPause?.apply(this,v)}),pt(r,p),di(),i()}var C1=kt("<!> <!> <!> <!> <!> <!> <!> <!>",1),R1=kt('<button aria-label="Body Paint Color Selector"></button>'),I1=kt('<button aria-label="Rim Paint Color Selector"></button>'),P1=kt('<button aria-label="Caliper Paint Color Selector"></button>'),D1=kt('<div class="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded h-[80vh] w-full"><!></div> <div class="options-container svelte-xhal46"><div class="option-card svelte-xhal46"><h3 class="svelte-xhal46">Body Paint</h3> <div class="color-grid svelte-xhal46"></div></div> <div class="option-card svelte-xhal46"><h3 class="svelte-xhal46">Rim Color</h3> <div class="color-grid svelte-xhal46"></div></div> <div class="option-card svelte-xhal46"><h3 class="svelte-xhal46">Caliper Color</h3> <div class="color-grid svelte-xhal46"></div></div></div> <div class="api-controls svelte-xhal46"><div class="load-control svelte-xhal46"><input class="dark:text-black text-black svelte-xhal46" type="text" placeholder="6-stelliger Code" maxlength="6"/> <button class="load-button svelte-xhal46">Laden</button></div> <button class="save-button svelte-xhal46">Speichern</button></div> <!>',1);function W1(r,e){ui(e,!1);let t=Jt([]),n=Jt([]),i=Jt([]),s=Jt(null),o=Jt(null),a=Jt(null),c=Jt("");Uu(async()=>{try{const L=await YA();L!==null&&L.status.status==="SUCCESS"&&L.data!==null?(Nt(t,L.data.car),Nt(n,L.data.rim),Nt(i,L.data.caliper),Nt(s,R(t)[0]),Nt(o,R(n)[0]),Nt(a,R(i)[0])):console.error("Options fetch failed:",L?.status.message??"Unknown error")}catch(L){console.error(L)}});async function l(){try{const L=await ZA(R(c));L?.status.status==="SUCCESS"&&L.data!==null?(R(s)&&R(o)&&R(a)&&(eh(s,R(s).hex=L.data.config.carColor),eh(o,R(o).hex=L.data.config.rimColor),eh(a,R(a).hex=L.data.config.caliperColor)),ln.success(`Die Konfiguration wurde geladen! Geladener Code: ${L.data?.code}`,{duration:1e4,position:"top-right"})):ln.error(`Fehlgeschlagen: ${L?.status.message??"Unbekannter Fehler"}`,{duration:1e4,position:"top-right"})}catch(L){console.log(L),ln.error(`Fehlgeschlagen: ${L.message}`,{duration:1e4,position:"top-right"})}}async function h(){if(!R(s)||!R(o)||!R(a)){console.error("Farben nicht ausgewählt!");return}const L={carColor:R(s).hex,rimColor:R(o).hex,caliperColor:R(a).hex};try{const z=await qA(L);z?.status.status==="SUCCESS"?ln.success(`Deine Konfiguration wurde gespeichert! Dein Code lautet: ${z.data?.code}`,{duration:1e4,position:"top-right"}):ln.error(`Fehlgeschlagen: ${z?.status.message??"Unbekannter Fehler"}`,{duration:1e4,position:"top-right"})}catch(z){console.log(z),ln.error(`Fehlgeschlagen: ${z.message}`,{duration:1e4,position:"top-right"})}}$o();var u=D1(),d=It(u),f=Sn(d);fE(f,{class:"w-full h-full",children:(L,z)=>{var G=C1(),W=It(G);xe.AmbientLight(W,{intensity:.5});var J=me(W,2);xe.DirectionalLight(J,{position:[5,10,5],intensity:1});var q=me(J,2);xe.DirectionalLight(q,{position:[-10,5,0],intensity:1});var re=me(q,2);xe.DirectionalLight(re,{position:[1,5,0],intensity:1});var j=me(re,2);fA(j,{preset:"city"});var ue=me(j,2);xe.PerspectiveCamera(ue,{makeDefault:!0,position:[5,3,7.5],fov:80,near:.1,far:1e3,children:(Ue,ze)=>{mA(Ue,{enableDamping:!0})},$$slots:{default:!0}});var pe=me(ue,2);xe.Group(pe,{position:[0,0,-.5],scale:2,children:(Ue,ze)=>{var Qe=dn(),et=It(Qe);{var H=X=>{WA(X,{get carColor(){return R(s).hex},get rimColor(){return R(o).hex},get caliperColor(){return R(a).hex}})};qn(et,X=>{R(s)&&R(o)&&R(a)&&X(H)})}pt(Ue,Qe)},$$slots:{default:!0}});var Ce=me(pe,2);xe.GridHelper(Ce,{args:[10,10]}),pt(L,G)},$$slots:{default:!0}}),en(d);var p=me(d,2),v=Sn(p),g=me(Sn(v),2);dc(g,5,()=>R(t),th,(L,z)=>{var G=R1();ci(()=>{Bs(G,1,`color-dot ${R(s)?._id===R(z)._id?"selected":""}`,"svelte-xhal46"),Fi(G,`background-color: ${R(z).hex??""}`),nh(G,"title",`${R(z).name??""} (${R(z).price??""} CHF)`)}),Nr("click",G,()=>Nt(s,R(z))),pt(L,G)}),en(g),en(v);var m=me(v,2),S=me(Sn(m),2);dc(S,5,()=>R(n),th,(L,z)=>{var G=I1();ci(()=>{Bs(G,1,`color-dot ${R(o)?._id===R(z)._id?"selected":""}`,"svelte-xhal46"),Fi(G,`background-color: ${R(z).hex??""}`),nh(G,"title",`${R(z).name??""} (${R(z).price??""} CHF)`)}),Nr("click",G,()=>Nt(o,R(z))),pt(L,G)}),en(S),en(m);var y=me(m,2),b=me(Sn(y),2);dc(b,5,()=>R(i),th,(L,z)=>{var G=P1();ci(()=>{Bs(G,1,`color-dot ${R(a)?._id===R(z)._id?"selected":""}`,"svelte-xhal46"),Fi(G,`background-color: ${R(z).hex??""}`),nh(G,"title",`${R(z).name??""} (${R(z).price??""} CHF)`)}),Nr("click",G,()=>Nt(a,R(z))),pt(L,G)}),en(b),en(y),en(p);var C=me(p,2),M=Sn(C),N=Sn(M);R_(N);var D=me(N,2);en(M);var E=me(M,2);en(C);var w=me(C,2);A1(w,{}),P_(N,()=>R(c),L=>Nt(c,L)),Nr("click",D,l),Nr("click",E,h),pt(r,u),di()}export{W1 as component};
