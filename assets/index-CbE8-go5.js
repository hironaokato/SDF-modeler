(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="169",di={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sm=0,lh=1,rm=2,xd=1,om=2,li=3,Vn=0,sn=1,cn=2,Oi=0,Ks=1,ch=2,uh=3,hh=4,am=5,as=100,lm=101,cm=102,um=103,hm=104,fm=200,dm=201,pm=202,mm=203,lc=204,cc=205,gm=206,_m=207,xm=208,ym=209,vm=210,Mm=211,bm=212,Sm=213,Em=214,uc=0,hc=1,fc=2,er=3,dc=4,pc=5,mc=6,gc=7,yd=0,wm=1,Tm=2,Bi=0,Am=1,Rm=2,Cm=3,Pm=4,Lm=5,Im=6,Dm=7,fh="attached",Um="detached",vd=300,nr=301,ir=302,_c=303,xc=304,ja=306,sr=1e3,$n=1001,Na=1002,be=1003,Md=1004,Kr=1005,en=1006,ba=1007,hi=1008,Gn=1009,bd=1010,Sd=1011,ao=1012,du=1013,gi=1014,nn=1015,go=1016,pu=1017,mu=1018,rr=1020,Ed=35902,wd=1021,Td=1022,$e=1023,Ad=1024,Rd=1025,$s=1026,or=1027,_o=1028,gu=1029,Cd=1030,_u=1031,lo=1033,Sa=33776,Ea=33777,wa=33778,Ta=33779,yc=35840,vc=35841,Mc=35842,bc=35843,Sc=36196,Ec=37492,wc=37496,Tc=37808,Ac=37809,Rc=37810,Cc=37811,Pc=37812,Lc=37813,Ic=37814,Dc=37815,Uc=37816,Nc=37817,Fc=37818,Oc=37819,Bc=37820,zc=37821,Aa=36492,kc=36494,Hc=36495,Pd=36283,Vc=36284,Gc=36285,Wc=36286,co=2300,uo=2301,al=2302,dh=2400,ph=2401,mh=2402,Nm=2500,Fm=0,Ld=1,Xc=2,Om=3200,Bm=3201,Id=0,zm=1,Ui="",Je="srgb",Xe="srgb-linear",xu="display-p3",qa="display-p3-linear",Fa="linear",ge="srgb",Oa="rec709",Ba="p3",ms=7680,gh=519,km=512,Hm=513,Vm=514,Dd=515,Gm=516,Wm=517,Xm=518,jm=519,jc=35044,qc="300 es",fi=2e3,za=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const Zs=Math.PI/180,ar=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function yu(i,t){return(i%t+t)%t}function qm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ym(i,t,e){return i!==t?(e-i)/(t-i):0}function to(i,t,e){return(1-e)*i+e*t}function Km(i,t,e,n){return to(i,t,1-Math.exp(-e*n))}function $m(i,t=1){return t-Math.abs(yu(i,t*2)-t)}function Zm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tg(i,t){return i+Math.random()*(t-i)}function eg(i){return i*(.5-Math.random())}function ng(i){i!==void 0&&(_h=i);let t=_h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ig(i){return i*Zs}function sg(i){return i*ar}function rg(i){return(i&i-1)===0&&i!==0}function og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ag(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lg(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ka={DEG2RAD:Zs,RAD2DEG:ar,generateUUID:zn,clamp:Ve,euclideanModulo:yu,mapLinear:qm,inverseLerp:Ym,lerp:to,damp:Km,pingpong:$m,smoothstep:Zm,smootherstep:Qm,randInt:Jm,randFloat:tg,randFloatSpread:eg,seededRandom:ng,degToRad:ig,radToDeg:sg,isPowerOfTwo:rg,ceilPowerOfTwo:og,floorPowerOfTwo:ag,setQuaternionFromProperEuler:lg,normalize:re,denormalize:Bn};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],x=s[1],y=s[4],v=s[7],E=s[2],b=s[5],S=s[8];return r[0]=o*_+a*x+l*E,r[3]=o*p+a*y+l*b,r[6]=o*m+a*v+l*S,r[1]=c*_+u*x+f*E,r[4]=c*p+u*y+f*b,r[7]=c*m+u*v+f*S,r[2]=h*_+d*x+g*E,r[5]=h*p+d*y+g*b,r[8]=h*m+d*v+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new kt;function Ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cg(){const i=ho("canvas");return i.style.display="block",i}const xh={};function Ra(i){i in xh||(xh[i]=!0,console.warn(i))}function ug(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const yh=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vh=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Xe]:{transfer:Fa,primaries:Oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Je]:{transfer:ge,primaries:Oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qa]:{transfer:Fa,primaries:Ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(vh),fromReference:i=>i.applyMatrix3(yh)},[xu]:{transfer:ge,primaries:Ba,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(vh),fromReference:i=>i.applyMatrix3(yh).convertLinearToSRGB()}},dg=new Set([Xe,qa]),Qt={enabled:!0,_workingColorSpace:Xe,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!dg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=wr[t].toReference,s=wr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return wr[i].primaries},getTransfer:function(i){return i===Ui?Fa:wr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(wr[t].luminanceCoefficients)}};function Qs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gs;class pg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=ho("canvas")),gs.width=t.width,gs.height=t.height;const n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ho("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qs(e[n]/255)*255):e[n]=Qs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mg=0;class Nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ul(s[o].image)):r.push(ul(s[o]))}else r=ul(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gg=0;class Oe extends fs{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=$n,s=$n,r=en,o=hi,a=$e,l=Gn,c=Oe.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=zn(),this.name="",this.source=new Nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=vd;Oe.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,E=(m+1)/2,b=(u+h)/4,S=(f+_)/4,C=(g+p)/4;return y>v&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=S/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=S/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _g extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends _g{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fd extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fo extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ie{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),b=Math.atan2(E,m*x);p=Math.sin(p*b)/E,a=Math.sin(a*b)/E}const v=a*x;if(l=l*p+h*v,c=c*p+d*v,u=u*p+g*v,f=f*p+_*v,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hl.copy(this).projectOnVector(t),this.sub(hl)}reflect(t){return this.sub(hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hl=new A,Mh=new Ie;class he{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),To.subVectors(this.max,Tr),_s.subVectors(t.a,Tr),xs.subVectors(t.b,Tr),ys.subVectors(t.c,Tr),Mi.subVectors(xs,_s),bi.subVectors(ys,xs),ji.subVectors(_s,ys);let e=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-ji.z,ji.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,ji.z,0,-ji.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-ji.y,ji.x,0];return!fl(e,_s,xs,ys,To)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,_s,xs,ys,To))?!1:(Ao.crossVectors(Mi,bi),e=[Ao.x,Ao.y,Ao.z],fl(e,_s,xs,ys,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new A,new A,new A,new A,new A,new A,new A,new A],Dn=new A,wo=new he,_s=new A,xs=new A,ys=new A,Mi=new A,bi=new A,ji=new A,Tr=new A,To=new A,Ao=new A,qi=new A;function fl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);const a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xg=new he,Ar=new A,dl=new A;class hn{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(dl)),this.expandByPoint(Ar.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new A,pl=new A,Ro=new A,Si=new A,ml=new A,Co=new A,gl=new A;class gr{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pl.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(pl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Si.dot(this.direction),l=-Si.dot(Ro),c=Si.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pl).addScaledVector(Ro,h),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){ml.subVectors(e,t),Co.subVectors(n,t),gl.crossVectors(ml,Co);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);const l=a*this.direction.dot(Co.crossVectors(Si,Co));if(l<0)return null;const c=a*this.direction.dot(ml.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,p)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yg,t,vg)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ei.crossVectors(n,mn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ei.crossVectors(n,mn)),Ei.normalize(),Po.crossVectors(mn,Ei),s[0]=Ei.x,s[4]=Po.x,s[8]=mn.x,s[1]=Ei.y,s[5]=Po.y,s[9]=mn.y,s[2]=Ei.z,s[6]=Po.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],b=s[0],S=s[4],C=s[8],P=s[12],M=s[1],w=s[5],I=s[9],D=s[13],U=s[2],B=s[6],F=s[10],q=s[14],H=s[3],Z=s[7],nt=s[11],rt=s[15];return r[0]=o*b+a*M+l*U+c*H,r[4]=o*S+a*w+l*B+c*Z,r[8]=o*C+a*I+l*F+c*nt,r[12]=o*P+a*D+l*q+c*rt,r[1]=u*b+f*M+h*U+d*H,r[5]=u*S+f*w+h*B+d*Z,r[9]=u*C+f*I+h*F+d*nt,r[13]=u*P+f*D+h*q+d*rt,r[2]=g*b+_*M+p*U+m*H,r[6]=g*S+_*w+p*B+m*Z,r[10]=g*C+_*I+p*F+m*nt,r[14]=g*P+_*D+p*q+m*rt,r[3]=x*b+y*M+v*U+E*H,r[7]=x*S+y*w+v*B+E*Z,r[11]=x*C+y*I+v*F+E*nt,r[15]=x*P+y*D+v*q+E*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+_*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+p*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+m*(-s*a*u-e*l*f+e*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],x=f*p*c-_*h*c+_*l*d-a*p*d-f*l*m+a*h*m,y=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*m+o*f*m,E=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,b=e*x+n*y+s*v+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=x*S,t[1]=(_*h*r-f*p*r-_*s*d+n*p*d+f*s*m-n*h*m)*S,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*S,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*S,t[4]=y*S,t[5]=(u*p*r-g*h*r+g*s*d-e*p*d-u*s*m+e*h*m)*S,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*S,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*S,t[8]=v*S,t[9]=(g*f*r-u*_*r-g*n*d+e*_*d+u*n*m-e*f*m)*S,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*S,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*S,t[12]=E*S,t[13]=(u*_*s-g*f*s+g*n*h-e*_*h-u*n*p+e*f*p)*S,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*S,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,p=o*f,m=a*f,x=l*c,y=l*u,v=l*f,E=n.x,b=n.y,S=n.z;return s[0]=(1-(_+m))*E,s[1]=(d+v)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(h+m))*b,s[6]=(p+x)*b,s[7]=0,s[8]=(g+y)*S,s[9]=(p-x)*S,s[10]=(1-(h+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const c=1/r,u=1/o,f=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=fi){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(a===fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===za)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=fi){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),h=(e+t)*c,d=(n+s)*u;let g,_;if(a===fi)g=(o+r)*f,_=-2*f;else if(a===za)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vs=new A,Un=new pt,yg=new A(0,0,0),vg=new A(1,1,1),Ei=new A,Po=new A,mn=new A,bh=new pt,Sh=new Ie;class Wn{constructor(t=0,e=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mg=0;const Eh=new A,Ms=new Ie,si=new pt,Lo=new A,Rr=new A,bg=new A,Sg=new Ie,wh=new A(1,0,0),Th=new A(0,1,0),Ah=new A(0,0,1),Rh={type:"added"},Eg={type:"removed"},bs={type:"childadded",child:null},_l={type:"childremoved",child:null};class ae extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new A,e=new Wn,n=new Ie,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new kt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(wh,t)}rotateY(t){return this.rotateOnAxis(Th,t)}rotateZ(t){return this.rotateOnAxis(Ah,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wh,t)}translateY(t){return this.translateOnAxis(Th,t)}translateZ(t){return this.translateOnAxis(Ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lo.copy(t):Lo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Rr,Lo,this.up):si.lookAt(Lo,Rr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(si),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eg),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Sg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ae.DEFAULT_UP=new A(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new A,ri=new A,xl=new A,oi=new A,Ss=new A,Es=new A,Ch=new A,yl=new A,vl=new A,Ml=new A,bl=new Jt,Sl=new Jt,El=new Jt;class Fe{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ri.subVectors(n,e),xl.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ri),l=Nn.dot(xl),c=ri.dot(ri),u=ri.dot(xl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return bl.setScalar(0),Sl.setScalar(0),El.setScalar(0),bl.fromBufferAttribute(t,e),Sl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ri.subVectors(t,e),Nn.cross(ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Nn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Fe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Fe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,n),Es.subVectors(r,n),yl.subVectors(t,n);const l=Ss.dot(yl),c=Es.dot(yl);if(l<=0&&c<=0)return e.copy(n);vl.subVectors(t,s);const u=Ss.dot(vl),f=Es.dot(vl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ss,o);Ml.subVectors(t,r);const d=Ss.dot(Ml),g=Es.dot(Ml);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Es,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Ch.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Ch,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(Ss,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=yu(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wl(o,r,t+1/3),this.g=wl(o,r,t),this.b=wl(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Od[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}copyLinearToSRGB(t){return this.r=cl(t.r),this.g=cl(t.g),this.b=cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Qt.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ve(qe.r*255,0,255))*65536+Math.round(Ve(qe.g*255,0,255))*256+Math.round(Ve(qe.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Je){Qt.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(Io);const n=to(wi.h,Io.h,e),s=to(wi.s,Io.s,e),r=to(wi.l,Io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new At;At.NAMES=Od;let wg=0;class kn extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Ks,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tn extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new A,Do=new dt;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}}class Bd extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zd extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Tg=0;const vn=new pt,Tl=new ae,ws=new A,gn=new he,Cr=new he,He=new A;class de extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?zd:Bd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new he);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(gn.min,Cr.min),gn.expandByPoint(He),He.addVectors(gn.max,Cr.max),gn.expandByPoint(He)):(gn.expandByPoint(Cr.min),gn.expandByPoint(Cr.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)He.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),He.add(ws)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new A,l[C]=new A;const c=new A,u=new A,f=new A,h=new dt,d=new dt,g=new dt,_=new A,p=new A;function m(C,P,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,M),h.fromBufferAttribute(r,C),d.fromBufferAttribute(r,P),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(w),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),a[C].add(_),a[P].add(_),a[M].add(_),l[C].add(p),l[P].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,P=x.length;C<P;++C){const M=x[C],w=M.start,I=M.count;for(let D=w,U=w+I;D<U;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new A,v=new A,E=new A,b=new A;function S(C){E.fromBufferAttribute(s,C),b.copy(E);const P=a[C];y.copy(P),y.sub(E.multiplyScalar(E.dot(P))).normalize(),v.crossVectors(b,P);const w=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,w)}for(let C=0,P=x.length;C<P;++C){const M=x[C],w=M.start,I=M.count;for(let D=w,U=w+I;D<U;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,f=new A;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new Ee(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new pt,Yi=new gr,Uo=new hn,Lh=new A,No=new A,Fo=new A,Oo=new A,Al=new A,Bo=new A,Ih=new A,zo=new A;class st extends ae{constructor(t=new de,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Al.fromBufferAttribute(f,t),o?Bo.addScaledVector(Al,u):Bo.addScaledVector(Al.sub(e),u))}e.add(Bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(Uo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Uo,Lh)===null||Yi.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Ph.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const b=a.getX(v),S=a.getX(v+1),C=a.getX(v+2);s=ko(this,m,t,n,c,u,f,b,S,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=ko(this,o,t,n,c,u,f,x,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const b=v,S=v+1,C=v+2;s=ko(this,m,t,n,c,u,f,b,S,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,y=p+1,v=p+2;s=ko(this,o,t,n,c,u,f,x,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ag(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Vn,a),l===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:i}}function ko(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Fo),i.getVertexPosition(c,Oo);const u=Ag(i,t,e,n,No,Fo,Oo,Ih);if(u){const f=new A;Fe.getBarycoord(Ih,No,Fo,Oo,f),s&&(u.uv=Fe.getInterpolatedAttribute(s,a,l,c,f,new dt)),r&&(u.uv1=Fe.getInterpolatedAttribute(r,a,l,c,f,new dt)),o&&(u.normal=Fe.getInterpolatedAttribute(o,a,l,c,f,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new A,materialIndex:0};Fe.getNormal(No,Fo,Oo,h.normal),u.face=h,u.barycoord=f}return u}class ve extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function g(_,p,m,x,y,v,E,b,S,C,P){const M=v/S,w=E/C,I=v/2,D=E/2,U=b/2,B=S+1,F=C+1;let q=0,H=0;const Z=new A;for(let nt=0;nt<F;nt++){const rt=nt*w-D;for(let Et=0;Et<B;Et++){const Ct=Et*M-I;Z[_]=Ct*x,Z[p]=rt*y,Z[m]=U,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[m]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Et/S),f.push(1-nt/C),q+=1}}for(let nt=0;nt<C;nt++)for(let rt=0;rt<S;rt++){const Et=h+rt+B*nt,Ct=h+rt+B*(nt+1),X=h+(rt+1)+B*(nt+1),Q=h+(rt+1)+B*nt;l.push(Et,Ct,Q),l.push(Ct,X,Q),H+=6}a.addGroup(d,H,P),d+=H,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=lr(i[e]);for(const s in n)t[s]=n[s]}return t}function Rg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Cg={clone:lr,merge:Qe};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=Rg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hd extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new A,Dh=new dt,Uh=new dt;class tn extends Hd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Uh),e.subVectors(Uh,Dh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ts=-90,As=1;class Ig extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Ts,As,t,e);s.layers=this.layers,this.add(s);const r=new tn(Ts,As,t,e);r.layers=this.layers,this.add(r);const o=new tn(Ts,As,t,e);o.layers=this.layers,this.add(o);const a=new tn(Ts,As,t,e);a.layers=this.layers,this.add(a);const l=new tn(Ts,As,t,e);l.layers=this.layers,this.add(l);const c=new tn(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vd extends Oe{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dg extends us{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ve(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Oi});r.uniforms.tEquirect.value=e;const o=new st(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=en),new Ig(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Rl=new A,Ug=new A,Ng=new kt;class On{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Rl.subVectors(n,e).cross(Ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Rl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ng.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new hn,Ho=new A;class Mu{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,h-c,p-d,v-m).normalize(),n[1].setComponents(l+r,h+c,p+d,v+m).normalize(),n[2].setComponents(l+o,h+u,p+g,v+x).normalize(),n[3].setComponents(l-o,h-u,p-g,v-x).normalize(),n[4].setComponents(l-a,h-f,p-_,v-y).normalize(),e===fi)n[5].setComponents(l+a,h+f,p+_,v+y).normalize();else if(e===za)n[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ho.x=s.normal.x>0?t.max.x:t.min.x,Ho.y=s.normal.y>0?t.max.y:t.min.y,Ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fg(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ds extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*h-o;for(let y=0;y<c;y++){const v=y*f-r;g.push(v,-x,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),b=x+1+c*m;d.push(y,v,b),d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,F0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M_=`float getShadowMask() {
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
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S_=`#ifdef USE_SKINNING
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
#endif`,E_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,G_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`uniform float scale;
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
}`,K_=`uniform vec3 diffuse;
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
}`,$_=`#include <common>
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
}`,Z_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,J_=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,ex=`#define MATCAP
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
}`,nx=`#define NORMAL
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
}`,ix=`#define NORMAL
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
}`,sx=`#define PHONG
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
}`,rx=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,ax=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,cx=`#define TOON
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
}`,ux=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,px=`uniform float rotation;
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
}`,mx=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Og,alphahash_pars_fragment:Bg,alphamap_fragment:zg,alphamap_pars_fragment:kg,alphatest_fragment:Hg,alphatest_pars_fragment:Vg,aomap_fragment:Gg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:jg,begin_vertex:qg,beginnormal_vertex:Yg,bsdfs:Kg,iridescence_fragment:$g,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:t0,clipping_planes_vertex:e0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:u0,emissivemap_fragment:h0,emissivemap_pars_fragment:f0,colorspace_fragment:d0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:C0,envmap_vertex:y0,fog_vertex:v0,fog_pars_vertex:M0,fog_fragment:b0,fog_pars_fragment:S0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:P0,lights_toon_pars_fragment:L0,lights_phong_fragment:I0,lights_phong_pars_fragment:D0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:B0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:j0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:K0,morphcolor_vertex:$0,morphnormal_vertex:Z0,morphtarget_pars_vertex:Q0,morphtarget_vertex:J0,normal_fragment_begin:t_,normal_fragment_maps:e_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:s_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:u_,packing:h_,premultiplied_alpha_fragment:f_,project_vertex:d_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:y_,shadowmap_vertex:v_,shadowmask_pars_fragment:M_,skinbase_vertex:b_,skinning_pars_vertex:S_,skinning_vertex:E_,skinnormal_vertex:w_,specularmap_fragment:T_,specularmap_pars_fragment:A_,tonemapping_fragment:R_,tonemapping_pars_fragment:C_,transmission_fragment:P_,transmission_pars_fragment:L_,uv_pars_fragment:I_,uv_pars_vertex:D_,uv_vertex:U_,worldpos_vertex:N_,background_vert:F_,background_frag:O_,backgroundCube_vert:B_,backgroundCube_frag:z_,cube_vert:k_,cube_frag:H_,depth_vert:V_,depth_frag:G_,distanceRGBA_vert:W_,distanceRGBA_frag:X_,equirect_vert:j_,equirect_frag:q_,linedashed_vert:Y_,linedashed_frag:K_,meshbasic_vert:$_,meshbasic_frag:Z_,meshlambert_vert:Q_,meshlambert_frag:J_,meshmatcap_vert:tx,meshmatcap_frag:ex,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:sx,meshphong_frag:rx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:ux,points_frag:hx,shadow_vert:fx,shadow_frag:dx,sprite_vert:px,sprite_frag:mx},ot={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},qn={basic:{uniforms:Qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Qe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Qe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Qe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Qe([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Qe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Qe([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Qe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Qe([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Qe([ot.common,ot.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Qe([ot.lights,ot.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};qn.physical={uniforms:Qe([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Vo={r:0,b:0,g:0},$i=new Wn,gx=new pt;function _x(i,t,e,n,s,r,o){const a=new At(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===ja)?(u===void 0&&(u=new st(new ve(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:lr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler($i)),u.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ge,(f!==v||h!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new st(new ds(2,2),new _i({name:"BackgroundMaterial",uniforms:lr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(Vo,kd(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p}}function xx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,w,I,D,U){let B=!1;const F=f(D,I,w);r!==F&&(r=F,c(r.object)),B=d(M,D,I,U),B&&g(M,D,I,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(M,w,I,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,w,I){const D=I.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let B=U[w.id];B===void 0&&(B={},U[w.id]=B);let F=B[D];return F===void 0&&(F=h(l()),B[D]=F),F}function h(M){const w=[],I=[],D=[];for(let U=0;U<e;U++)w[U]=0,I[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:I,attributeDivisors:D,object:M,attributes:{},index:null}}function d(M,w,I,D){const U=r.attributes,B=w.attributes;let F=0;const q=I.getAttributes();for(const H in q)if(q[H].location>=0){const nt=U[H];let rt=B[H];if(rt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),nt===void 0||nt.attribute!==rt||rt&&nt.data!==rt.data)return!0;F++}return r.attributesNum!==F||r.index!==D}function g(M,w,I,D){const U={},B=w.attributes;let F=0;const q=I.getAttributes();for(const H in q)if(q[H].location>=0){let nt=B[H];nt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor));const rt={};rt.attribute=nt,nt&&nt.data&&(rt.data=nt.data),U[H]=rt,F++}r.attributes=U,r.attributesNum=F,r.index=D}function _(){const M=r.newAttributes;for(let w=0,I=M.length;w<I;w++)M[w]=0}function p(M){m(M,0)}function m(M,w){const I=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;I[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),U[M]!==w&&(i.vertexAttribDivisor(M,w),U[M]=w)}function x(){const M=r.newAttributes,w=r.enabledAttributes;for(let I=0,D=w.length;I<D;I++)w[I]!==M[I]&&(i.disableVertexAttribArray(I),w[I]=0)}function y(M,w,I,D,U,B,F){F===!0?i.vertexAttribIPointer(M,w,I,U,B):i.vertexAttribPointer(M,w,I,D,U,B)}function v(M,w,I,D){_();const U=D.attributes,B=I.getAttributes(),F=w.defaultAttributeValues;for(const q in B){const H=B[q];if(H.location>=0){let Z=U[q];if(Z===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const nt=Z.normalized,rt=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;const Ct=Et.buffer,X=Et.type,Q=Et.bytesPerElement,gt=X===i.INT||X===i.UNSIGNED_INT||Z.gpuType===du;if(Z.isInterleavedBufferAttribute){const lt=Z.data,Rt=lt.stride,Tt=Z.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<H.locationSize;Ft++)m(H.location+Ft,lt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)p(H.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Ft=0;Ft<H.locationSize;Ft++)y(H.location+Ft,rt/H.locationSize,X,nt,Rt*Q,(Tt+rt/H.locationSize*Ft)*Q,gt)}else{if(Z.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt,Z.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let lt=0;lt<H.locationSize;lt++)y(H.location+lt,rt/H.locationSize,X,nt,rt*Q,rt/H.locationSize*lt*Q,gt)}}else if(F!==void 0){const nt=F[q];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(H.location,nt);break;case 3:i.vertexAttrib3fv(H.location,nt);break;case 4:i.vertexAttrib4fv(H.location,nt);break;default:i.vertexAttrib1fv(H.location,nt)}}}}x()}function E(){C();for(const M in n){const w=n[M];for(const I in w){const D=w[I];for(const U in D)u(D[U].object),delete D[U];delete w[I]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const I in w){const D=w[I];for(const U in D)u(D[U].object),delete D[U];delete w[I]}delete n[M.id]}function S(M){for(const w in n){const I=n[w];if(I[M.id]===void 0)continue;const D=I[M.id];for(const U in D)u(D[U].object),delete D[U];delete I[M.id]}}function C(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function yx(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==$e&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const C=S===go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Gn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==nn&&!C)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:b}}function Mx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new On,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=u(g,h,y,d);for(let E=0;E!==y;++E)v[E]=e[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function bx(i){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=nr:a===xc&&(o.mapping=ir),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_c||a===xc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dg(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class _r extends Hd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vs=4,Nh=[.125,.215,.35,.446,.526,.582],ls=20,Cl=new _r,Fh=new At;let Pl=null,Ll=0,Il=0,Dl=!1;const rs=(1+Math.sqrt(5))/2,Rs=1/rs,Oh=[new A(-rs,Rs,0),new A(rs,Rs,0),new A(-Rs,0,rs),new A(Rs,0,rs),new A(0,rs,-Rs),new A(0,rs,Rs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pl,Ll,Il),this._renderer.xr.enabled=Dl,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:go,format:$e,colorSpace:Xe,depthBuffer:!1},s=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(r)),this._blurMaterial=Ex(r,t,e)}return s}_compileMaterial(t){const e=new st(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Fh),u.toneMapping=Bi,u.autoClear=!1;const d=new Tn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new st(new ve,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Fh),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Go(s,x*y,m>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Cl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oh[(s-r-1)%Oh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new st(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ls;p>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);const m=[];let x=0;for(let S=0;S<ls;++S){const C=S/_,P=Math.exp(-C*C/2);m.push(P),S===0?x+=P:S<p&&(x+=2*P)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const v=this._sizeLods[s],E=3*v*(s>y-Vs?s-y+Vs:0),b=4*(this._cubeSize-v);Go(e,E,b,3*v,2*v),l.setRenderTarget(e),l.render(f,Cl)}}function Sx(i){const t=[],e=[],n=[];let s=i;const r=i-Vs+1+Nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Vs?l=Nh[o-i+Vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*d),y=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let b=0;b<d;b++){const S=b%3*2/3-1,C=b>2?0:-1,P=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];x.set(P,_*g*b),y.set(h,p*g*b);const M=[b,b,b,b,b,b];v.set(M,m*g*b)}const E=new de;E.setAttribute("position",new Ee(x,_)),E.setAttribute("uv",new Ee(y,p)),E.setAttribute("faceIndex",new Ee(v,m)),t.push(E),s>Vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zh(i,t,e){const n=new us(i,t,e);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ex(i,t,e){const n=new Float32Array(ls),s=new A(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function kh(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Hh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function wx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===_c||l===xc,u=l===nr||l===ir;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Bh(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Bh(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ra("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],b=x[y+1],S=x[y+2];h.push(E,b,b,S,S,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,b=y+1,S=y+2;h.push(E,b,b,S,S,E)}}else return;const p=new(Ud(h)?zd:Bd)(h,1);p.version=_;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Rx(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(h,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x];for(let x=0;x<_.length;x++)e.update(m,n,_[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Cx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,t,e){const n=new WeakMap,s=new Jt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let P=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*E*4*f),S=new Fd(b,v,E,f);S.type=nn,S.needsUpdate=!0;const C=y*4;for(let M=0;M<f;M++){const w=p[M],I=m[M],D=x[M],U=v*E*4*M;for(let B=0;B<w.count;B++){const F=B*C;d===!0&&(s.fromBufferAttribute(w,B),b[U+F+0]=s.x,b[U+F+1]=s.y,b[U+F+2]=s.z,b[U+F+3]=0),g===!0&&(s.fromBufferAttribute(I,B),b[U+F+4]=s.x,b[U+F+5]=s.y,b[U+F+6]=s.z,b[U+F+7]=0),_===!0&&(s.fromBufferAttribute(D,B),b[U+F+8]=s.x,b[U+F+9]=s.y,b[U+F+10]=s.z,b[U+F+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:S,size:new dt(v,E)},n.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Lx(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Wd extends Oe{constructor(t,e,n,s,r,o,a,l,c,u=$s){if(u!==$s&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$s&&(n=gi),n===void 0&&u===or&&(n=rr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xd=new Oe,Vh=new Wd(1,1),jd=new Fd,qd=new fo,Yd=new Vd,Gh=[],Wh=[],Xh=new Float32Array(16),jh=new Float32Array(9),qh=new Float32Array(4);function xr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ya(i,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ix(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Fx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),ke(e,n)}}function Ox(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;jh.set(n),i.uniformMatrix3fv(this.addr,!1,jh),ke(e,n)}}function Bx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),ke(e,n)}}function zx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Gx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function jx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function qx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=Dd,r=Vh):r=Xd,e.setTexture2D(t||r,s)}function Yx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qd,s)}function Kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yd,s)}function $x(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jd,s)}function Zx(i){switch(i){case 5126:return Ix;case 35664:return Dx;case 35665:return Ux;case 35666:return Nx;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return kx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return $x}}function Qx(i,t){i.uniform1fv(this.addr,t)}function Jx(i,t){const e=xr(t,this.size,2);i.uniform2fv(this.addr,e)}function ty(i,t){const e=xr(t,this.size,3);i.uniform3fv(this.addr,e)}function ey(i,t){const e=xr(t,this.size,4);i.uniform4fv(this.addr,e)}function ny(i,t){const e=xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iy(i,t){const e=xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sy(i,t){const e=xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ry(i,t){i.uniform1iv(this.addr,t)}function oy(i,t){i.uniform2iv(this.addr,t)}function ay(i,t){i.uniform3iv(this.addr,t)}function ly(i,t){i.uniform4iv(this.addr,t)}function cy(i,t){i.uniform1uiv(this.addr,t)}function uy(i,t){i.uniform2uiv(this.addr,t)}function hy(i,t){i.uniform3uiv(this.addr,t)}function fy(i,t){i.uniform4uiv(this.addr,t)}function dy(i,t,e){const n=this.cache,s=t.length,r=Ya(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xd,r[o])}function py(i,t,e){const n=this.cache,s=t.length,r=Ya(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qd,r[o])}function my(i,t,e){const n=this.cache,s=t.length,r=Ya(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yd,r[o])}function gy(i,t,e){const n=this.cache,s=t.length,r=Ya(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jd,r[o])}function _y(i){switch(i){case 5126:return Qx;case 35664:return Jx;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return oy;case 35668:case 35672:return ay;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return uy;case 36295:return hy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}class xy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}}class yy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_y(e.type)}}class vy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function Yh(i,t){i.seq.push(t),i.map[t.id]=t}function My(i,t,e){const n=i.name,s=n.length;for(Ul.lastIndex=0;;){const r=Ul.exec(n),o=Ul.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yh(e,c===void 0?new xy(a,i,t):new yy(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new vy(a),Yh(e,f)),e=f}}}class Ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);My(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const by=37297;let Sy=0;function Ey(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function wy(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Ba&&e===Oa?n="LinearDisplayP3ToLinearSRGB":t===Oa&&e===Ba&&(n="LinearSRGBToLinearDisplayP3"),i){case Xe:case qa:return[n,"LinearTransferOETF"];case Je:case xu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $h(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ey(i.getShaderSource(t),o)}else return s}function Ty(i,t){const e=wy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ay(i,t){let e;switch(t){case Am:e="Linear";break;case Rm:e="Reinhard";break;case Cm:e="Cineon";break;case Pm:e="ACESFilmic";break;case Im:e="AgX";break;case Dm:e="Neutral";break;case Lm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wo=new A;function Ry(){Qt.getLuminanceCoefficients(Wo);const i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Py(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ly(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $r(i){return i!==""}function Zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(Iy,Uy)}const Dy=new Map;function Uy(i,t){let e=zt[t];if(e===void 0){const n=Dy.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yc(e)}const Ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(Ny,Fy)}function Fy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Oy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===om?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function By(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function ky(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yd:t="ENVMAP_BLENDING_MULTIPLY";break;case wm:t="ENVMAP_BLENDING_MIX";break;case Tm:t="ENVMAP_BLENDING_ADD";break}return t}function Hy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Oy(e),c=By(e),u=zy(e),f=ky(e),h=Hy(e),d=Cy(e),g=Py(r),_=s.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`)):(p=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?zt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?Ay("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Ty("linearToOutputTexel",e.outputColorSpace),Ry(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),o=Yc(o),o=Zh(o,e),o=Qh(o,e),a=Yc(a),a=Zh(a,e),a=Qh(a,e),o=Jh(o),a=Jh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+p+o,v=x+m+a,E=Kh(s,s.VERTEX_SHADER,y),b=Kh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(w){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(b).trim();let B=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,b);else{const q=$h(s,E,"vertex"),H=$h(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+q+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(D===""||U==="")&&(F=!1);F&&(w.diagnostics={runnable:B,programLog:I,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(E),s.deleteShader(b),C=new Ca(s,_),P=Ly(s,_)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let P;this.getAttributes=function(){return P===void 0&&S(this),P};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,by)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let Gy=0;class Wy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xy(t),e.set(t,n)),n}}class Xy{constructor(t){this.id=Gy++,this.code=t,this.usedTimes=0}}function jy(i,t,e,n,s,r,o){const a=new vu,l=new Wy,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,I,D,U){const B=D.fog,F=U.geometry,q=M.isMeshStandardMaterial?D.environment:null,H=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),Z=H&&H.mapping===ja?H.image.height:null,nt=_[M.type];M.precision!==null&&(g=s.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Et=rt!==void 0?rt.length:0;let Ct=0;F.morphAttributes.position!==void 0&&(Ct=1),F.morphAttributes.normal!==void 0&&(Ct=2),F.morphAttributes.color!==void 0&&(Ct=3);let X,Q,gt,lt;if(nt){const an=qn[nt];X=an.vertexShader,Q=an.fragmentShader}else X=M.vertexShader,Q=M.fragmentShader,l.update(M),gt=l.getVertexShaderID(M),lt=l.getFragmentShaderID(M);const Rt=i.getRenderTarget(),Tt=U.isInstancedMesh===!0,Ft=U.isBatchedMesh===!0,Kt=!!M.map,Ht=!!M.matcap,N=!!H,fn=!!M.aoMap,Wt=!!M.lightMap,$t=!!M.bumpMap,It=!!M.normalMap,pe=!!M.displacementMap,Ot=!!M.emissiveMap,L=!!M.metalnessMap,T=!!M.roughnessMap,V=M.anisotropy>0,K=M.clearcoat>0,J=M.dispersion>0,Y=M.iridescence>0,bt=M.sheen>0,at=M.transmission>0,_t=V&&!!M.anisotropyMap,Zt=K&&!!M.clearcoatMap,tt=K&&!!M.clearcoatNormalMap,xt=K&&!!M.clearcoatRoughnessMap,Dt=Y&&!!M.iridescenceMap,Ut=Y&&!!M.iridescenceThicknessMap,yt=bt&&!!M.sheenColorMap,Xt=bt&&!!M.sheenRoughnessMap,Bt=!!M.specularMap,fe=!!M.specularColorMap,O=!!M.specularIntensityMap,ht=at&&!!M.transmissionMap,j=at&&!!M.thicknessMap,$=!!M.gradientMap,ct=!!M.alphaMap,ft=M.alphaTest>0,Yt=!!M.alphaHash,Ce=!!M.extensions;let on=Bi;M.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(on=i.toneMapping);const te={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:Q,defines:M.defines,customVertexShaderID:gt,customFragmentShaderID:lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ft,batchingColor:Ft&&U._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&U.instanceColor!==null,instancingMorph:Tt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Xe,alphaToCoverage:!!M.alphaToCoverage,map:Kt,matcap:Ht,envMap:N,envMapMode:N&&H.mapping,envMapCubeUVHeight:Z,aoMap:fn,lightMap:Wt,bumpMap:$t,normalMap:It,displacementMap:d&&pe,emissiveMap:Ot,normalMapObjectSpace:It&&M.normalMapType===zm,normalMapTangentSpace:It&&M.normalMapType===Id,metalnessMap:L,roughnessMap:T,anisotropy:V,anisotropyMap:_t,clearcoat:K,clearcoatMap:Zt,clearcoatNormalMap:tt,clearcoatRoughnessMap:xt,dispersion:J,iridescence:Y,iridescenceMap:Dt,iridescenceThicknessMap:Ut,sheen:bt,sheenColorMap:yt,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:fe,specularIntensityMap:O,transmission:at,transmissionMap:ht,thicknessMap:j,gradientMap:$,opaque:M.transparent===!1&&M.blending===Ks&&M.alphaToCoverage===!1,alphaMap:ct,alphaTest:ft,alphaHash:Yt,combine:M.combine,mapUv:Kt&&p(M.map.channel),aoMapUv:fn&&p(M.aoMap.channel),lightMapUv:Wt&&p(M.lightMap.channel),bumpMapUv:$t&&p(M.bumpMap.channel),normalMapUv:It&&p(M.normalMap.channel),displacementMapUv:pe&&p(M.displacementMap.channel),emissiveMapUv:Ot&&p(M.emissiveMap.channel),metalnessMapUv:L&&p(M.metalnessMap.channel),roughnessMapUv:T&&p(M.roughnessMap.channel),anisotropyMapUv:_t&&p(M.anisotropyMap.channel),clearcoatMapUv:Zt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&p(M.sheenRoughnessMap.channel),specularMapUv:Bt&&p(M.specularMap.channel),specularColorMapUv:fe&&p(M.specularColorMap.channel),specularIntensityMapUv:O&&p(M.specularIntensityMap.channel),transmissionMapUv:ht&&p(M.transmissionMap.channel),thicknessMapUv:j&&p(M.thicknessMap.channel),alphaMapUv:ct&&p(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(It||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Kt||ct),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ct,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:on,decodeVideoTexture:Kt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function x(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)w.push(I),w.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(w,M),v(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),M.push(a.mask)}function E(M){const w=_[M.type];let I;if(w){const D=qn[w];I=Cg.clone(D.uniforms)}else I=M.uniforms;return I}function b(M,w){let I;for(let D=0,U=u.length;D<U;D++){const B=u[D];if(B.cacheKey===w){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Vy(i,w,M,r),u.push(I)),I}function S(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:E,acquireProgram:b,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:P}}function qy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ef(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,_,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||Yy),n.length>1&&n.sort(h||ef),s.length>1&&s.sort(h||ef)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ky(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new nf,i.set(n,[o])):s>=r.length?(o=new nf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $y(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new At};break;case"SpotLight":e={position:new A,direction:new A,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Zy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Qy=0;function Jy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tv(i){const t=new $y,e=Zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new pt,o=new pt;function a(c){let u=0,f=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,y=0,v=0,E=0,b=0,S=0;c.sort(Jy);for(let P=0,M=c.length;P<M;P++){const w=c[P],I=w.color,D=w.intensity,U=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=I.r*D,f+=I.g*D,h+=I.b*D;else if(w.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(w.sh.coefficients[F],D);S++}else if(w.isDirectionalLight){const F=t.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,H=e.get(w);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=w.shadow.matrix,x++}n.directional[d]=F,d++}else if(w.isSpotLight){const F=t.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(I).multiplyScalar(D),F.distance=U,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,n.spot[_]=F;const q=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,q.updateMatrices(w),w.castShadow&&b++),n.spotLightMatrix[_]=q.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=B,v++}_++}else if(w.isRectAreaLight){const F=t.get(w);F.color.copy(I).multiplyScalar(D),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=F,p++}else if(w.isPointLight){const F=t.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){const q=w.shadow,H=e.get(w);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=F,g++}else if(w.isHemisphereLight){const F=t.get(w);F.skyColor.copy(w.color).multiplyScalar(D),F.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[m]=F,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=S,n.version=Qy++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function sf(i){const t=new tv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ev(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sf(i),t.set(s,[a])):r>=o.length?(a=new sf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class nv extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iv extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
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
}`;function ov(i,t,e){let n=new Mu;const s=new dt,r=new dt,o=new Jt,a=new nv({depthPacking:Bm}),l=new iv,c={},u=e.maxTextureSize,f={[Vn]:sn,[sn]:Vn,[cn]:cn},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let m=this.type;this.render=function(b,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Oi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=m!==li&&this.type===li,U=m===li&&this.type!==li;for(let B=0,F=b.length;B<F;B++){const q=b[B],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Z=H.getFrameExtents();if(s.multiply(Z),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||D===!0||U===!0){const rt=this.type!==li?{minFilter:be,magFilter:be}:{};H.map!==null&&H.map.dispose(),H.map=new us(s.x,s.y,rt),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const nt=H.getViewportCount();for(let rt=0;rt<nt;rt++){const Et=H.getViewport(rt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),I.viewport(o),H.updateMatrices(q,rt),n=H.getFrustum(),v(S,C,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===li&&x(H,C),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,M,w)};function x(b,S){const C=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new us(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,C,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,C,d,_,null)}function y(b,S,C,P){let M=null;const w=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=M.uuid,D=S.uuid;let U=c[I];U===void 0&&(U={},c[I]=U);let B=U[D];B===void 0&&(B=M.clone(),U[D]=B,S.addEventListener("dispose",E)),M=B}if(M.visible=S.visible,M.wireframe=S.wireframe,P===li?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:f[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=C}return M}function v(b,S,C,P,M){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===li)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const D=t.update(b),U=b.material;if(Array.isArray(U)){const B=D.groups;for(let F=0,q=B.length;F<q;F++){const H=B[F],Z=U[H.materialIndex];if(Z&&Z.visible){const nt=y(b,Z,P,M);b.onBeforeShadow(i,b,S,C,D,nt,H),i.renderBufferDirect(C,null,D,nt,b,H),b.onAfterShadow(i,b,S,C,D,nt,H)}}}else if(U.visible){const B=y(b,U,P,M);b.onBeforeShadow(i,b,S,C,D,B,null),i.renderBufferDirect(C,null,D,B,b,null),b.onAfterShadow(i,b,S,C,D,B,null)}}const I=b.children;for(let D=0,U=I.length;D<U;D++)v(I[D],S,C,P,M)}function E(b){b.target.removeEventListener("dispose",E);for(const C in c){const P=c[C],M=b.target.uuid;M in P&&(P[M].dispose(),delete P[M])}}}const av={[uc]:hc,[fc]:mc,[dc]:gc,[er]:pc,[hc]:uc,[mc]:fc,[gc]:dc,[pc]:er};function lv(i){function t(){let O=!1;const ht=new Jt;let j=null;const $=new Jt(0,0,0,0);return{setMask:function(ct){j!==ct&&!O&&(i.colorMask(ct,ct,ct,ct),j=ct)},setLocked:function(ct){O=ct},setClear:function(ct,ft,Yt,Ce,on){on===!0&&(ct*=Ce,ft*=Ce,Yt*=Ce),ht.set(ct,ft,Yt,Ce),$.equals(ht)===!1&&(i.clearColor(ct,ft,Yt,Ce),$.copy(ht))},reset:function(){O=!1,j=null,$.set(-1,0,0,0)}}}function e(){let O=!1,ht=!1,j=null,$=null,ct=null;return{setReversed:function(ft){ht=ft},setTest:function(ft){ft?gt(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(ft){j!==ft&&!O&&(i.depthMask(ft),j=ft)},setFunc:function(ft){if(ht&&(ft=av[ft]),$!==ft){switch(ft){case uc:i.depthFunc(i.NEVER);break;case hc:i.depthFunc(i.ALWAYS);break;case fc:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case dc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case mc:i.depthFunc(i.GREATER);break;case gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ft}},setLocked:function(ft){O=ft},setClear:function(ft){ct!==ft&&(i.clearDepth(ft),ct=ft)},reset:function(){O=!1,j=null,$=null,ct=null}}}function n(){let O=!1,ht=null,j=null,$=null,ct=null,ft=null,Yt=null,Ce=null,on=null;return{setTest:function(te){O||(te?gt(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(te){ht!==te&&!O&&(i.stencilMask(te),ht=te)},setFunc:function(te,an,ei){(j!==te||$!==an||ct!==ei)&&(i.stencilFunc(te,an,ei),j=te,$=an,ct=ei)},setOp:function(te,an,ei){(ft!==te||Yt!==an||Ce!==ei)&&(i.stencilOp(te,an,ei),ft=te,Yt=an,Ce=ei)},setLocked:function(te){O=te},setClear:function(te){on!==te&&(i.clearStencil(te),on=te)},reset:function(){O=!1,ht=null,j=null,$=null,ct=null,ft=null,Yt=null,Ce=null,on=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,x=null,y=null,v=null,E=null,b=new At(0,0,0),S=0,C=!1,P=null,M=null,w=null,I=null,D=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=F>=2);let H=null,Z={};const nt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Et=new Jt().fromArray(nt),Ct=new Jt().fromArray(rt);function X(O,ht,j,$){const ct=new Uint8Array(4),ft=i.createTexture();i.bindTexture(O,ft),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<j;Yt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ht+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ft}const Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),r.setFunc(er),Wt(!1),$t(lh),gt(i.CULL_FACE),N(Oi);function gt(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function lt(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Rt(O,ht){return u[O]!==ht?(i.bindFramebuffer(O,ht),u[O]=ht,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Tt(O,ht){let j=h,$=!1;if(O){j=f.get(ht),j===void 0&&(j=[],f.set(ht,j));const ct=O.textures;if(j.length!==ct.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Yt=ct.length;ft<Yt;ft++)j[ft]=i.COLOR_ATTACHMENT0+ft;j.length=ct.length,$=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,$=!0);$&&i.drawBuffers(j)}function Ft(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const Kt={[as]:i.FUNC_ADD,[lm]:i.FUNC_SUBTRACT,[cm]:i.FUNC_REVERSE_SUBTRACT};Kt[um]=i.MIN,Kt[hm]=i.MAX;const Ht={[fm]:i.ZERO,[dm]:i.ONE,[pm]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[vm]:i.SRC_ALPHA_SATURATE,[xm]:i.DST_COLOR,[gm]:i.DST_ALPHA,[mm]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[ym]:i.ONE_MINUS_DST_COLOR,[_m]:i.ONE_MINUS_DST_ALPHA,[Mm]:i.CONSTANT_COLOR,[bm]:i.ONE_MINUS_CONSTANT_COLOR,[Sm]:i.CONSTANT_ALPHA,[Em]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,ht,j,$,ct,ft,Yt,Ce,on,te){if(O===Oi){g===!0&&(lt(i.BLEND),g=!1);return}if(g===!1&&(gt(i.BLEND),g=!0),O!==am){if(O!==_||te!==C){if((p!==as||y!==as)&&(i.blendEquation(i.FUNC_ADD),p=as,y=as),te)switch(O){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ch:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,x=null,v=null,E=null,b.set(0,0,0),S=0,_=O,C=te}return}ct=ct||ht,ft=ft||j,Yt=Yt||$,(ht!==p||ct!==y)&&(i.blendEquationSeparate(Kt[ht],Kt[ct]),p=ht,y=ct),(j!==m||$!==x||ft!==v||Yt!==E)&&(i.blendFuncSeparate(Ht[j],Ht[$],Ht[ft],Ht[Yt]),m=j,x=$,v=ft,E=Yt),(Ce.equals(b)===!1||on!==S)&&(i.blendColor(Ce.r,Ce.g,Ce.b,on),b.copy(Ce),S=on),_=O,C=!1}function fn(O,ht){O.side===cn?lt(i.CULL_FACE):gt(i.CULL_FACE);let j=O.side===sn;ht&&(j=!j),Wt(j),O.blending===Ks&&O.transparent===!1?N(Oi):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const $=O.stencilWrite;o.setTest($),$&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function $t(O){O!==sm?(gt(i.CULL_FACE),O!==M&&(O===lh?i.cullFace(i.BACK):O===rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),M=O}function It(O){O!==w&&(B&&i.lineWidth(O),w=O)}function pe(O,ht,j){O?(gt(i.POLYGON_OFFSET_FILL),(I!==ht||D!==j)&&(i.polygonOffset(ht,j),I=ht,D=j)):lt(i.POLYGON_OFFSET_FILL)}function Ot(O){O?gt(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+U-1),H!==O&&(i.activeTexture(O),H=O)}function T(O,ht,j){j===void 0&&(H===null?j=i.TEXTURE0+U-1:j=H);let $=Z[j];$===void 0&&($={type:void 0,texture:void 0},Z[j]=$),($.type!==O||$.texture!==ht)&&(H!==j&&(i.activeTexture(j),H=j),i.bindTexture(O,ht||Q[O]),$.type=O,$.texture=ht)}function V(){const O=Z[H];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(O){Et.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Et.copy(O))}function yt(O){Ct.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ct.copy(O))}function Xt(O,ht){let j=l.get(ht);j===void 0&&(j=new WeakMap,l.set(ht,j));let $=j.get(O);$===void 0&&($=i.getUniformBlockIndex(ht,O.name),j.set(O,$))}function Bt(O,ht){const $=l.get(ht).get(O);a.get(ht)!==$&&(i.uniformBlockBinding(ht,$,O.__bindingPointIndex),a.set(ht,$))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,Z={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,x=null,y=null,v=null,E=null,b=new At(0,0,0),S=0,C=!1,P=null,M=null,w=null,I=null,D=null,Et.set(0,0,i.canvas.width,i.canvas.height),Ct.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:gt,disable:lt,bindFramebuffer:Rt,drawBuffers:Tt,useProgram:Ft,setBlending:N,setMaterial:fn,setFlipSided:Wt,setCullFace:$t,setLineWidth:It,setPolygonOffset:pe,setScissorTest:Ot,activeTexture:L,bindTexture:T,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Bt,texStorage2D:Zt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:Ut,viewport:yt,reset:fe}}function rf(i,t,e,n){const s=cv(n);switch(e){case wd:return i*t;case Ad:return i*t;case Rd:return i*t*2;case _o:return i*t/s.components*s.byteLength;case gu:return i*t/s.components*s.byteLength;case Cd:return i*t*2/s.components*s.byteLength;case _u:return i*t*2/s.components*s.byteLength;case Td:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case bc:return Math.max(i,16)*Math.max(t,8)/4;case yc:case Mc:return Math.max(i,8)*Math.max(t,8)/2;case Sc:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Aa:case kc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pd:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gc:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cv(i){switch(i){case Gn:case bd:return{byteLength:1,components:1};case ao:case Sd:case go:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case gi:case du:case nn:return{byteLength:4,components:1};case Ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function uv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return d?new OffscreenCanvas(L,T):ho("canvas")}function _(L,T,V){let K=1;const J=Ot(L);if((J.width>V||J.height>V)&&(K=V/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Y=Math.floor(K*J.width),bt=Math.floor(K*J.height);f===void 0&&(f=g(Y,bt));const at=T?g(Y,bt):f;return at.width=Y,at.height=bt,at.getContext("2d").drawImage(L,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+bt+")."),at}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==be&&L.minFilter!==en}function m(L){i.generateMipmap(L)}function x(L,T,V,K,J=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=T;if(T===i.RED&&(V===i.FLOAT&&(Y=i.R32F),V===i.HALF_FLOAT&&(Y=i.R16F),V===i.UNSIGNED_BYTE&&(Y=i.R8)),T===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.R8UI),V===i.UNSIGNED_SHORT&&(Y=i.R16UI),V===i.UNSIGNED_INT&&(Y=i.R32UI),V===i.BYTE&&(Y=i.R8I),V===i.SHORT&&(Y=i.R16I),V===i.INT&&(Y=i.R32I)),T===i.RG&&(V===i.FLOAT&&(Y=i.RG32F),V===i.HALF_FLOAT&&(Y=i.RG16F),V===i.UNSIGNED_BYTE&&(Y=i.RG8)),T===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RG8UI),V===i.UNSIGNED_SHORT&&(Y=i.RG16UI),V===i.UNSIGNED_INT&&(Y=i.RG32UI),V===i.BYTE&&(Y=i.RG8I),V===i.SHORT&&(Y=i.RG16I),V===i.INT&&(Y=i.RG32I)),T===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),V===i.UNSIGNED_INT&&(Y=i.RGB32UI),V===i.BYTE&&(Y=i.RGB8I),V===i.SHORT&&(Y=i.RGB16I),V===i.INT&&(Y=i.RGB32I)),T===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),V===i.UNSIGNED_INT&&(Y=i.RGBA32UI),V===i.BYTE&&(Y=i.RGBA8I),V===i.SHORT&&(Y=i.RGBA16I),V===i.INT&&(Y=i.RGBA32I)),T===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),T===i.RGBA){const bt=J?Fa:Qt.getTransfer(K);V===i.FLOAT&&(Y=i.RGBA32F),V===i.HALF_FLOAT&&(Y=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Y=bt===ge?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(L,T){let V;return L?T===null||T===gi||T===rr?V=i.DEPTH24_STENCIL8:T===nn?V=i.DEPTH32F_STENCIL8:T===ao&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===rr?V=i.DEPTH_COMPONENT24:T===nn?V=i.DEPTH_COMPONENT32F:T===ao&&(V=i.DEPTH_COMPONENT16),V}function v(L,T){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==be&&L.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){const T=L.target;T.removeEventListener("dispose",E),S(T),T.isVideoTexture&&u.delete(T)}function b(L){const T=L.target;T.removeEventListener("dispose",b),P(T)}function S(L){const T=n.get(L);if(T.__webglInit===void 0)return;const V=L.source,K=h.get(V);if(K){const J=K[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(L),Object.keys(K).length===0&&h.delete(V)}n.remove(L)}function C(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const V=L.source,K=h.get(V);delete K[T.__cacheKey],o.memory.textures--}function P(L){const T=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let J=0;J<T.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(T.__webglFramebuffer[K][J]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=L.textures;for(let K=0,J=V.length;K<J;K++){const Y=n.get(V[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(L)}let M=0;function w(){M=0}function I(){const L=M;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),M+=1,L}function D(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function U(L,T){const V=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(V,L,T);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+T)}function B(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){Ct(V,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+T)}function F(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){Ct(V,L,T);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+T)}function q(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){X(V,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+T)}const H={[sr]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Z={[be]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},nt={[km]:i.NEVER,[jm]:i.ALWAYS,[Hm]:i.LESS,[Dd]:i.LEQUAL,[Vm]:i.EQUAL,[Xm]:i.GEQUAL,[Gm]:i.GREATER,[Wm]:i.NOTEQUAL};function rt(L,T){if(T.type===nn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===en||T.magFilter===ba||T.magFilter===Kr||T.magFilter===hi||T.minFilter===en||T.minFilter===ba||T.minFilter===Kr||T.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,H[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,H[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,H[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Z[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===be||T.minFilter!==Kr&&T.minFilter!==hi||T.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Et(L,T){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",E));const K=T.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const Y=D(T);if(Y!==L.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[Y].usedTimes++;const bt=J[L.__cacheKey];bt!==void 0&&(J[L.__cacheKey].usedTimes--,bt.usedTimes===0&&C(T)),L.__cacheKey=Y,L.__webglTexture=J[Y].texture}return V}function Ct(L,T,V){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);const J=Et(L,T),Y=T.source;e.bindTexture(K,L.__webglTexture,i.TEXTURE0+V);const bt=n.get(Y);if(Y.version!==bt.__version||J===!0){e.activeTexture(i.TEXTURE0+V);const at=Qt.getPrimaries(Qt.workingColorSpace),_t=T.colorSpace===Ui?null:Qt.getPrimaries(T.colorSpace),Zt=T.colorSpace===Ui||at===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let tt=_(T.image,!1,s.maxTextureSize);tt=pe(T,tt);const xt=r.convert(T.format,T.colorSpace),Dt=r.convert(T.type);let Ut=x(T.internalFormat,xt,Dt,T.colorSpace,T.isVideoTexture);rt(K,T);let yt;const Xt=T.mipmaps,Bt=T.isVideoTexture!==!0,fe=bt.__version===void 0||J===!0,O=Y.dataReady,ht=v(T,tt);if(T.isDepthTexture)Ut=y(T.format===or,T.type),fe&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Ut,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,tt.width,tt.height,0,xt,Dt,null));else if(T.isDataTexture)if(Xt.length>0){Bt&&fe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,Xt[0].width,Xt[0].height);for(let j=0,$=Xt.length;j<$;j++)yt=Xt[j],Bt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,j,Ut,yt.width,yt.height,0,xt,Dt,yt.data);T.generateMipmaps=!1}else Bt?(fe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,tt.width,tt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,xt,Dt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,tt.width,tt.height,0,xt,Dt,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Bt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,Xt[0].width,Xt[0].height,tt.depth);for(let j=0,$=Xt.length;j<$;j++)if(yt=Xt[j],T.format!==$e)if(xt!==null)if(Bt){if(O)if(T.layerUpdates.size>0){const ct=rf(yt.width,yt.height,T.format,T.type);for(const ft of T.layerUpdates){const Yt=yt.data.subarray(ft*ct/yt.data.BYTES_PER_ELEMENT,(ft+1)*ct/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ft,yt.width,yt.height,1,xt,Yt,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,yt.width,yt.height,tt.depth,xt,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ut,yt.width,yt.height,tt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,yt.width,yt.height,tt.depth,xt,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Ut,yt.width,yt.height,tt.depth,0,xt,Dt,yt.data)}else{Bt&&fe&&e.texStorage2D(i.TEXTURE_2D,ht,Ut,Xt[0].width,Xt[0].height);for(let j=0,$=Xt.length;j<$;j++)yt=Xt[j],T.format!==$e?xt!==null?Bt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,j,Ut,yt.width,yt.height,0,xt,Dt,yt.data)}else if(T.isDataArrayTexture)if(Bt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ut,tt.width,tt.height,tt.depth),O)if(T.layerUpdates.size>0){const j=rf(tt.width,tt.height,T.format,T.type);for(const $ of T.layerUpdates){const ct=tt.data.subarray($*j/tt.data.BYTES_PER_ELEMENT,($+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,xt,Dt,ct)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,xt,Dt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,tt.width,tt.height,tt.depth,0,xt,Dt,tt.data);else if(T.isData3DTexture)Bt?(fe&&e.texStorage3D(i.TEXTURE_3D,ht,Ut,tt.width,tt.height,tt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,xt,Dt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,tt.width,tt.height,tt.depth,0,xt,Dt,tt.data);else if(T.isFramebufferTexture){if(fe)if(Bt)e.texStorage2D(i.TEXTURE_2D,ht,Ut,tt.width,tt.height);else{let j=tt.width,$=tt.height;for(let ct=0;ct<ht;ct++)e.texImage2D(i.TEXTURE_2D,ct,Ut,j,$,0,xt,Dt,null),j>>=1,$>>=1}}else if(Xt.length>0){if(Bt&&fe){const j=Ot(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ut,j.width,j.height)}for(let j=0,$=Xt.length;j<$;j++)yt=Xt[j],Bt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,xt,Dt,yt):e.texImage2D(i.TEXTURE_2D,j,Ut,xt,Dt,yt);T.generateMipmaps=!1}else if(Bt){if(fe){const j=Ot(tt);e.texStorage2D(i.TEXTURE_2D,ht,Ut,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,xt,Dt,tt);p(T)&&m(K),bt.__version=Y.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function X(L,T,V){if(T.image.length!==6)return;const K=Et(L,T),J=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);const Y=n.get(J);if(J.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const bt=Qt.getPrimaries(Qt.workingColorSpace),at=T.colorSpace===Ui?null:Qt.getPrimaries(T.colorSpace),_t=T.colorSpace===Ui||bt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,tt=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let $=0;$<6;$++)!Zt&&!tt?xt[$]=_(T.image[$],!0,s.maxCubemapSize):xt[$]=tt?T.image[$].image:T.image[$],xt[$]=pe(T,xt[$]);const Dt=xt[0],Ut=r.convert(T.format,T.colorSpace),yt=r.convert(T.type),Xt=x(T.internalFormat,Ut,yt,T.colorSpace),Bt=T.isVideoTexture!==!0,fe=Y.__version===void 0||K===!0,O=J.dataReady;let ht=v(T,Dt);rt(i.TEXTURE_CUBE_MAP,T);let j;if(Zt){Bt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Xt,Dt.width,Dt.height);for(let $=0;$<6;$++){j=xt[$].mipmaps;for(let ct=0;ct<j.length;ct++){const ft=j[ct];T.format!==$e?Ut!==null?Bt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ft.width,ft.height,Ut,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Xt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ft.width,ft.height,Ut,yt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Xt,ft.width,ft.height,0,Ut,yt,ft.data)}}}else{if(j=T.mipmaps,Bt&&fe){j.length>0&&ht++;const $=Ot(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Xt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Bt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xt[$].width,xt[$].height,Ut,yt,xt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,xt[$].width,xt[$].height,0,Ut,yt,xt[$].data);for(let ct=0;ct<j.length;ct++){const Yt=j[ct].image[$].image;Bt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Yt.width,Yt.height,Ut,yt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Xt,Yt.width,Yt.height,0,Ut,yt,Yt.data)}}else{Bt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,yt,xt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xt,Ut,yt,xt[$]);for(let ct=0;ct<j.length;ct++){const ft=j[ct];Bt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Ut,yt,ft.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Xt,Ut,yt,ft.image[$])}}}p(T)&&m(i.TEXTURE_CUBE_MAP),Y.__version=J.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Q(L,T,V,K,J,Y){const bt=r.convert(V.format,V.colorSpace),at=r.convert(V.type),_t=x(V.internalFormat,bt,at,V.colorSpace);if(!n.get(T).__hasExternalTextures){const tt=Math.max(1,T.width>>Y),xt=Math.max(1,T.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,_t,tt,xt,T.depth,0,bt,at,null):e.texImage2D(J,Y,_t,tt,xt,0,bt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),$t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(V).__webglTexture,0,Wt(T)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(V).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(L,T,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const K=T.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=y(T.stencilBuffer,J),bt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Wt(T);$t(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,T.width,T.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,L)}else{const K=T.textures;for(let J=0;J<K.length;J++){const Y=K[J],bt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),_t=x(Y.internalFormat,bt,at,Y.colorSpace),Zt=Wt(T);V&&$t(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,_t,T.width,T.height):$t(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,_t,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_t,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const K=n.get(T.depthTexture).__webglTexture,J=Wt(T);if(T.depthTexture.format===$s)$t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(T.depthTexture.format===or)$t(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(L){const T=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=K}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");lt(T.__webglFramebuffer,L)}else if(V){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),gt(T.__webglDepthbuffer[K],L,!1);else{const J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),gt(T.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(L,T,V){const K=n.get(L);T!==void 0&&Q(K.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Rt(L)}function Ft(L){const T=L.texture,V=n.get(L),K=n.get(T);L.addEventListener("dispose",b);const J=L.textures,Y=L.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),Y){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let _t=0;_t<T.mipmaps.length;_t++)V.__webglFramebuffer[at][_t]=i.createFramebuffer()}else V.__webglFramebuffer[at]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<T.mipmaps.length;at++)V.__webglFramebuffer[at]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(bt)for(let at=0,_t=J.length;at<_t;at++){const Zt=n.get(J[at]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&$t(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const _t=J[at];V.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const Zt=r.convert(_t.format,_t.colorSpace),tt=r.convert(_t.type),xt=x(_t.internalFormat,Zt,tt,_t.colorSpace,L.isXRRenderTarget===!0),Dt=Wt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,xt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,V.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),rt(i.TEXTURE_CUBE_MAP,T);for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)Q(V.__webglFramebuffer[at][_t],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t);else Q(V.__webglFramebuffer[at],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(T)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let at=0,_t=J.length;at<_t;at++){const Zt=J[at],tt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),rt(i.TEXTURE_2D,Zt),Q(V.__webglFramebuffer,L,Zt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Zt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(at=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),rt(at,T),T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)Q(V.__webglFramebuffer[_t],L,T,i.COLOR_ATTACHMENT0,at,_t);else Q(V.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,at,0);p(T)&&m(at),e.unbindTexture()}L.depthBuffer&&Rt(L)}function Kt(L){const T=L.textures;for(let V=0,K=T.length;V<K;V++){const J=T[V];if(p(J)){const Y=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(J).__webglTexture;e.bindTexture(Y,bt),m(Y),e.unbindTexture()}}}const Ht=[],N=[];function fn(L){if(L.samples>0){if($t(L)===!1){const T=L.textures,V=L.width,K=L.height;let J=i.COLOR_BUFFER_BIT;const Y=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(L),at=T.length>1;if(at)for(let _t=0;_t<T.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<T.length;_t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Zt=n.get(T[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,J,i.NEAREST),l===!0&&(Ht.length=0,N.length=0,Ht.push(i.COLOR_ATTACHMENT0+_t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ht.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let _t=0;_t<T.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Zt=n.get(T[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Wt(L){return Math.min(s.maxSamples,L.samples)}function $t(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function pe(L,T){const V=L.colorSpace,K=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Xe&&V!==Ui&&(Qt.getTransfer(V)===ge?(K!==$e||J!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=w,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=q,this.rebindTextures=Tt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=$t}function hv(i,t){function e(n,s=Ui){let r;const o=Qt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===pu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return i.BYTE;if(n===Sd)return i.SHORT;if(n===ao)return i.UNSIGNED_SHORT;if(n===du)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===go)return i.HALF_FLOAT;if(n===wd)return i.ALPHA;if(n===Td)return i.RGB;if(n===$e)return i.RGBA;if(n===Ad)return i.LUMINANCE;if(n===Rd)return i.LUMINANCE_ALPHA;if(n===$s)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===_o)return i.RED;if(n===gu)return i.RED_INTEGER;if(n===Cd)return i.RG;if(n===_u)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Sa||n===Ea||n===wa||n===Ta)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===vc||n===Mc||n===bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sc||n===Ec||n===wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sc||n===Ec)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===kc||n===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pd||n===Vc||n===Gc||n===Wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class fv extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class An extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dv={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new An;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`;class gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends fs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new gv,p=e.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new dt;let b=null;const S=new tn;S.layers.enable(1),S.viewport=new Jt;const C=new tn;C.layers.enable(2),C.viewport=new Jt;const P=[S,C],M=new fv;M.layers.enable(1),M.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=y[X];return Q===void 0&&(Q=new Nl,y[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=y[X];return Q===void 0&&(Q=new Nl,y[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=y[X];return Q===void 0&&(Q=new Nl,y[X]=Q),Q.getHandSpace()};function D(X){const Q=v.indexOf(X.inputSource);if(Q===-1)return;const gt=y[Q];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let X=0;X<y.length;X++){const Q=v[X];Q!==null&&(v[X]=null,y[X].disconnect(Q))}w=null,I=null,_.reset(),t.setRenderTarget(m),d=null,h=null,f=null,s=null,x=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new us(d.framebufferWidth,d.framebufferHeight,{format:$e,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,gt=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?or:$s,gt=p.stencil?rr:gi);const Rt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(Rt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new us(h.textureWidth,h.textureHeight,{format:$e,type:Gn,depthTexture:new Wd(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(X){for(let Q=0;Q<X.removed.length;Q++){const gt=X.removed[Q],lt=v.indexOf(gt);lt>=0&&(v[lt]=null,y[lt].disconnect(gt))}for(let Q=0;Q<X.added.length;Q++){const gt=X.added[Q];let lt=v.indexOf(gt);if(lt===-1){for(let Tt=0;Tt<y.length;Tt++)if(Tt>=v.length){v.push(gt),lt=Tt;break}else if(v[Tt]===null){v[Tt]=gt,lt=Tt;break}if(lt===-1)break}const Rt=y[lt];Rt&&Rt.connect(gt)}}const F=new A,q=new A;function H(X,Q,gt){F.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);const lt=F.distanceTo(q),Rt=Q.projectionMatrix.elements,Tt=gt.projectionMatrix.elements,Ft=Rt[14]/(Rt[10]-1),Kt=Rt[14]/(Rt[10]+1),Ht=(Rt[9]+1)/Rt[5],N=(Rt[9]-1)/Rt[5],fn=(Rt[8]-1)/Rt[0],Wt=(Tt[8]+1)/Tt[0],$t=Ft*fn,It=Ft*Wt,pe=lt/(-fn+Wt),Ot=pe*-fn;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ot),X.translateZ(pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Rt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const L=Ft+pe,T=Kt+pe,V=$t-Ot,K=It+(lt-Ot),J=Ht*Kt/T*L,Y=N*Kt/T*L;X.projectionMatrix.makePerspective(V,K,J,Y,L,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,gt=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=C.near=S.near=Q,M.far=C.far=S.far=gt,(w!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,I=M.far);const lt=X.parent,Rt=M.cameras;Z(M,lt);for(let Tt=0;Tt<Rt.length;Tt++)Z(Rt[Tt],lt);Rt.length===2?H(M,S,C):M.projectionMatrix.copy(S.projectionMatrix),nt(X,M,lt)};function nt(X,Q,gt){gt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ar*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let rt=null;function Et(X,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const gt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let lt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Tt=0;Tt<gt.length;Tt++){const Ft=gt[Tt];let Kt=null;if(d!==null)Kt=d.getViewport(Ft);else{const N=f.getViewSubImage(h,Ft);Kt=N.viewport,Tt===0&&(t.setRenderTargetTextures(x,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(x))}let Ht=P[Tt];Ht===void 0&&(Ht=new tn,Ht.layers.enable(Tt),Ht.viewport=new Jt,P[Tt]=Ht),Ht.matrix.fromArray(Ft.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ft.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Tt===0&&(M.matrix.copy(Ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Ht)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Tt=f.getDepthInformation(gt[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let gt=0;gt<y.length;gt++){const lt=v[gt],Rt=y[gt];lt!==null&&Rt!==void 0&&Rt.update(lt,Q,c||o)}rt&&rt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ct=new Gd;Ct.setAnimationLoop(Et),this.setAnimationLoop=function(X){rt=X},this.dispose=function(){}}}const Zi=new Wn,xv=new pt;function yv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,Zi.copy(v),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Zi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=s[x.id];v===void 0&&(g(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",p));const E=y.program;n.updateUBOMapping(x,E);const b=t.render.frame;r[x.id]!==b&&(h(x),r[x.id]=b)}function u(x){const y=f();x.__bindingPointIndex=y;const v=i.createBuffer(),E=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=s[x.id],v=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,S=v.length;b<S;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let P=0,M=C.length;P<M;P++){const w=C[P];if(d(w,b,P,E)===!0){const I=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let B=0;B<D.length;B++){const F=D[B],q=_(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,I+U,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,v,E){const b=x.value,S=y+"_"+v;if(E[S]===void 0)return typeof b=="number"||typeof b=="boolean"?E[S]=b:E[S]=b.clone(),!0;{const C=E[S];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return E[S]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(x){const y=x.uniforms;let v=0;const E=16;for(let S=0,C=y.length;S<C;S++){const P=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,w=P.length;M<w;M++){const I=P[M],D=Array.isArray(I.value)?I.value:[I.value];for(let U=0,B=D.length;U<B;U++){const F=D[U],q=_(F),H=v%E,Z=H%q.boundary,nt=H+Z;v+=Z,nt!==0&&E-nt<q.storage&&(v+=E-nt),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=q.storage}}}const b=v%E;return b>0&&(v+=E-b),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Mv{constructor(t={}){const{canvas:e=cg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Bi,this.toneMappingExposure=1;const y=this;let v=!1,E=0,b=0,S=null,C=-1,P=null;const M=new Jt,w=new Jt;let I=null;const D=new At(0);let U=0,B=e.width,F=e.height,q=1,H=null,Z=null;const nt=new Jt(0,0,B,F),rt=new Jt(0,0,B,F);let Et=!1;const Ct=new Mu;let X=!1,Q=!1;const gt=new pt,lt=new pt,Rt=new A,Tt=new Jt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Ht(){return S===null?q:1}let N=n;function fn(R,z){return e.getContext(R,z)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const z="webgl2";if(N=fn(z,R),N===null)throw fn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Wt,$t,It,pe,Ot,L,T,V,K,J,Y,bt,at,_t,Zt,tt,xt,Dt,Ut,yt,Xt,Bt,fe,O;function ht(){Wt=new Tx(N),Wt.init(),Bt=new hv(N,Wt),$t=new vx(N,Wt,t,Bt),It=new lv(N),$t.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),pe=new Cx(N),Ot=new qy,L=new uv(N,Wt,It,Ot,$t,Bt,pe),T=new bx(y),V=new wx(y),K=new Fg(N),fe=new xx(N,K),J=new Ax(N,K,pe,fe),Y=new Lx(N,J,K,pe),Ut=new Px(N,$t,L),tt=new Mx(Ot),bt=new jy(y,T,V,Wt,$t,fe,tt),at=new yv(y,Ot),_t=new Ky,Zt=new ev(Wt),Dt=new _x(y,T,V,It,Y,h,l),xt=new ov(y,Y,$t),O=new vv(N,pe,$t,It),yt=new yx(N,Wt,pe),Xt=new Rx(N,Wt,pe),pe.programs=bt.programs,y.capabilities=$t,y.extensions=Wt,y.properties=Ot,y.renderLists=_t,y.shadowMap=xt,y.state=It,y.info=pe}ht();const j=new _v(y,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(B,F,!1))},this.getSize=function(R){return R.set(B,F)},this.setSize=function(R,z,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,F=z,e.width=Math.floor(R*q),e.height=Math.floor(z*q),G===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(B*q,F*q).floor()},this.setDrawingBufferSize=function(R,z,G){B=R,F=z,q=G,e.width=Math.floor(R*G),e.height=Math.floor(z*G),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,z,G,W){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,z,G,W),It.viewport(M.copy(nt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(rt)},this.setScissor=function(R,z,G,W){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,z,G,W),It.scissor(w.copy(rt).multiplyScalar(q).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){It.setScissorTest(Et=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,z=!0,G=!0){let W=0;if(R){let k=!1;if(S!==null){const et=S.texture.format;k=et===lo||et===_u||et===gu}if(k){const et=S.texture.type,ut=et===Gn||et===gi||et===ao||et===rr||et===pu||et===mu,vt=Dt.getClearColor(),Mt=Dt.getClearAlpha(),Pt=vt.r,Lt=vt.g,St=vt.b;ut?(d[0]=Pt,d[1]=Lt,d[2]=St,d[3]=Mt,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=Pt,g[1]=Lt,g[2]=St,g[3]=Mt,N.clearBufferiv(N.COLOR,0,g))}else W|=N.COLOR_BUFFER_BIT}z&&(W|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Zt.dispose(),Ot.dispose(),T.dispose(),V.dispose(),Y.dispose(),fe.dispose(),O.dispose(),bt.dispose(),j.dispose(),j.removeEventListener("sessionstart",th),j.removeEventListener("sessionend",eh),Xi.stop()};function $(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=pe.autoReset,z=xt.enabled,G=xt.autoUpdate,W=xt.needsUpdate,k=xt.type;ht(),pe.autoReset=R,xt.enabled=z,xt.autoUpdate=G,xt.needsUpdate=W,xt.type=k}function ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Yt(R){const z=R.target;z.removeEventListener("dispose",Yt),Ce(z)}function Ce(R){on(R),Ot.remove(R)}function on(R){const z=Ot.get(R).programs;z!==void 0&&(z.forEach(function(G){bt.releaseProgram(G)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,G,W,k,et){z===null&&(z=Ft);const ut=k.isMesh&&k.matrixWorld.determinant()<0,vt=tm(R,z,G,W,k);It.setMaterial(W,ut);let Mt=G.index,Pt=1;if(W.wireframe===!0){if(Mt=J.getWireframeAttribute(G),Mt===void 0)return;Pt=2}const Lt=G.drawRange,St=G.attributes.position;let se=Lt.start*Pt,me=(Lt.start+Lt.count)*Pt;et!==null&&(se=Math.max(se,et.start*Pt),me=Math.min(me,(et.start+et.count)*Pt)),Mt!==null?(se=Math.max(se,0),me=Math.min(me,Mt.count)):St!=null&&(se=Math.max(se,0),me=Math.min(me,St.count));const ye=me-se;if(ye<0||ye===1/0)return;fe.setup(k,W,vt,G,Mt);let dn,ne=yt;if(Mt!==null&&(dn=K.get(Mt),ne=Xt,ne.setIndex(dn)),k.isMesh)W.wireframe===!0?(It.setLineWidth(W.wireframeLinewidth*Ht()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(k.isLine){let wt=W.linewidth;wt===void 0&&(wt=1),It.setLineWidth(wt*Ht()),k.isLineSegments?ne.setMode(N.LINES):k.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else k.isPoints?ne.setMode(N.POINTS):k.isSprite&&ne.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ne.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ne.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const wt=k._multiDrawStarts,Ge=k._multiDrawCounts,ie=k._multiDrawCount,In=Mt?K.get(Mt).bytesPerElement:1,ps=Ot.get(W).currentProgram.getUniforms();for(let pn=0;pn<ie;pn++)ps.setValue(N,"_gl_DrawID",pn),ne.render(wt[pn]/In,Ge[pn])}else if(k.isInstancedMesh)ne.renderInstances(se,ye,k.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ge=Math.min(G.instanceCount,wt);ne.renderInstances(se,ye,Ge)}else ne.render(se,ye)};function te(R,z,G){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,Eo(R,z,G),R.side=Vn,R.needsUpdate=!0,Eo(R,z,G),R.side=cn):Eo(R,z,G)}this.compile=function(R,z,G=null){G===null&&(G=R),p=Zt.get(G),p.init(z),x.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==G&&R.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const W=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const et=k.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const vt=et[ut];te(vt,G,k),W.add(vt)}else te(et,G,k),W.add(et)}),x.pop(),p=null,W},this.compileAsync=function(R,z,G=null){const W=this.compile(R,z,G);return new Promise(k=>{function et(){if(W.forEach(function(ut){Ot.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){k(R);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let an=null;function ei(R){an&&an(R)}function th(){Xi.stop()}function eh(){Xi.start()}const Xi=new Gd;Xi.setAnimationLoop(ei),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(R){an=R,j.setAnimationLoop(R),R===null?Xi.stop():Xi.start()},j.addEventListener("sessionstart",th),j.addEventListener("sessionend",eh),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,z,S),p=Zt.get(R,x.length),p.init(z),x.push(p),lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ct.setFromProjectionMatrix(lt),Q=this.localClippingEnabled,X=tt.init(this.clippingPlanes,Q),_=_t.get(R,m.length),_.init(),m.push(_),j.enabled===!0&&j.isPresenting===!0){const et=y.xr.getDepthSensingMesh();et!==null&&il(et,z,-1/0,y.sortObjects)}il(R,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(H,Z),Kt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Kt&&Dt.addToRenderList(_,R),this.info.render.frame++,X===!0&&tt.beginShadows();const G=p.state.shadowsArray;xt.render(G,R,z),X===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,k=_.transmissive;if(p.setupLights(),z.isArrayCamera){const et=z.cameras;if(k.length>0)for(let ut=0,vt=et.length;ut<vt;ut++){const Mt=et[ut];ih(W,k,R,Mt)}Kt&&Dt.render(R);for(let ut=0,vt=et.length;ut<vt;ut++){const Mt=et[ut];nh(_,R,Mt,Mt.viewport)}}else k.length>0&&ih(W,k,R,z),Kt&&Dt.render(R),nh(_,R,z);S!==null&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),R.isScene===!0&&R.onAfterRender(y,R,z),fe.resetDefaultState(),C=-1,P=null,x.pop(),x.length>0?(p=x[x.length-1],X===!0&&tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function il(R,z,G,W){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){W&&Tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(lt);const ut=Y.update(R),vt=R.material;vt.visible&&_.push(R,ut,vt,G,Tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const ut=Y.update(R),vt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Tt.copy(R.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Tt.copy(ut.boundingSphere.center)),Tt.applyMatrix4(R.matrixWorld).applyMatrix4(lt)),Array.isArray(vt)){const Mt=ut.groups;for(let Pt=0,Lt=Mt.length;Pt<Lt;Pt++){const St=Mt[Pt],se=vt[St.materialIndex];se&&se.visible&&_.push(R,ut,se,G,Tt.z,St)}}else vt.visible&&_.push(R,ut,vt,G,Tt.z,null)}}const et=R.children;for(let ut=0,vt=et.length;ut<vt;ut++)il(et[ut],z,G,W)}function nh(R,z,G,W){const k=R.opaque,et=R.transmissive,ut=R.transparent;p.setupLightsView(G),X===!0&&tt.setGlobalState(y.clippingPlanes,G),W&&It.viewport(M.copy(W)),k.length>0&&So(k,z,G),et.length>0&&So(et,z,G),ut.length>0&&So(ut,z,G),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ih(R,z,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new us(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?go:Gn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=p.state.transmissionRenderTarget[W.id],ut=W.viewport||M;et.setSize(ut.z,ut.w);const vt=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(D),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),Kt&&Dt.render(G);const Mt=y.toneMapping;y.toneMapping=Bi;const Pt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),X===!0&&tt.setGlobalState(y.clippingPlanes,W),So(R,G,W),L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let St=0,se=z.length;St<se;St++){const me=z[St],ye=me.object,dn=me.geometry,ne=me.material,wt=me.group;if(ne.side===cn&&ye.layers.test(W.layers)){const Ge=ne.side;ne.side=sn,ne.needsUpdate=!0,sh(ye,G,W,dn,ne,wt),ne.side=Ge,ne.needsUpdate=!0,Lt=!0}}Lt===!0&&(L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et))}y.setRenderTarget(vt),y.setClearColor(D,U),Pt!==void 0&&(W.viewport=Pt),y.toneMapping=Mt}function So(R,z,G){const W=z.isScene===!0?z.overrideMaterial:null;for(let k=0,et=R.length;k<et;k++){const ut=R[k],vt=ut.object,Mt=ut.geometry,Pt=W===null?ut.material:W,Lt=ut.group;vt.layers.test(G.layers)&&sh(vt,z,G,Mt,Pt,Lt)}}function sh(R,z,G,W,k,et){R.onBeforeRender(y,z,G,W,k,et),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(y,z,G,W,R,et),k.transparent===!0&&k.side===cn&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,y.renderBufferDirect(G,z,W,k,R,et),k.side=Vn,k.needsUpdate=!0,y.renderBufferDirect(G,z,W,k,R,et),k.side=cn):y.renderBufferDirect(G,z,W,k,R,et),R.onAfterRender(y,z,G,W,k,et)}function Eo(R,z,G){z.isScene!==!0&&(z=Ft);const W=Ot.get(R),k=p.state.lights,et=p.state.shadowsArray,ut=k.state.version,vt=bt.getParameters(R,k.state,et,z,G),Mt=bt.getProgramCacheKey(vt);let Pt=W.programs;W.environment=R.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(R.isMeshStandardMaterial?V:T).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Pt===void 0&&(R.addEventListener("dispose",Yt),Pt=new Map,W.programs=Pt);let Lt=Pt.get(Mt);if(Lt!==void 0){if(W.currentProgram===Lt&&W.lightsStateVersion===ut)return oh(R,vt),Lt}else vt.uniforms=bt.getUniforms(R),R.onBeforeCompile(vt,y),Lt=bt.acquireProgram(vt,Mt),Pt.set(Mt,Lt),W.uniforms=vt.uniforms;const St=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(St.clippingPlanes=tt.uniform),oh(R,vt),W.needsLights=nm(R),W.lightsStateVersion=ut,W.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.directionalShadowMap.value=k.state.directionalShadowMap,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotShadowMap.value=k.state.spotShadowMap,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMap.value=k.state.pointShadowMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Lt,W.uniformsList=null,Lt}function rh(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Ca.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function oh(R,z){const G=Ot.get(R);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function tm(R,z,G,W,k){z.isScene!==!0&&(z=Ft),L.resetTextureUnits();const et=z.fog,ut=W.isMeshStandardMaterial?z.environment:null,vt=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Xe,Mt=(W.isMeshStandardMaterial?V:T).get(W.envMap||ut),Pt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Lt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,me=!!G.morphAttributes.color;let ye=Bi;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ye=y.toneMapping);const dn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=dn!==void 0?dn.length:0,wt=Ot.get(W),Ge=p.state.lights;if(X===!0&&(Q===!0||R!==P)){const yn=R===P&&W.id===C;tt.setState(W,R,yn)}let ie=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ge.state.version||wt.outputColorSpace!==vt||k.isBatchedMesh&&wt.batching===!1||!k.isBatchedMesh&&wt.batching===!0||k.isBatchedMesh&&wt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&wt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&wt.instancing===!1||!k.isInstancedMesh&&wt.instancing===!0||k.isSkinnedMesh&&wt.skinning===!1||!k.isSkinnedMesh&&wt.skinning===!0||k.isInstancedMesh&&wt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&wt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&wt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&wt.instancingMorph===!1&&k.morphTexture!==null||wt.envMap!==Mt||W.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Pt||wt.vertexTangents!==Lt||wt.morphTargets!==St||wt.morphNormals!==se||wt.morphColors!==me||wt.toneMapping!==ye||wt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,wt.__version=W.version);let In=wt.currentProgram;ie===!0&&(In=Eo(W,z,k));let ps=!1,pn=!1,sl=!1;const we=In.getUniforms(),vi=wt.uniforms;if(It.useProgram(In.program)&&(ps=!0,pn=!0,sl=!0),W.id!==C&&(C=W.id,pn=!0),ps||P!==R){$t.reverseDepthBuffer?(gt.copy(R.projectionMatrix),hg(gt),fg(gt),we.setValue(N,"projectionMatrix",gt)):we.setValue(N,"projectionMatrix",R.projectionMatrix),we.setValue(N,"viewMatrix",R.matrixWorldInverse);const yn=we.map.cameraPosition;yn!==void 0&&yn.setValue(N,Rt.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&we.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&we.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,pn=!0,sl=!0)}if(k.isSkinnedMesh){we.setOptional(N,k,"bindMatrix"),we.setOptional(N,k,"bindMatrixInverse");const yn=k.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),we.setValue(N,"boneTexture",yn.boneTexture,L))}k.isBatchedMesh&&(we.setOptional(N,k,"batchingTexture"),we.setValue(N,"batchingTexture",k._matricesTexture,L),we.setOptional(N,k,"batchingIdTexture"),we.setValue(N,"batchingIdTexture",k._indirectTexture,L),we.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&we.setValue(N,"batchingColorTexture",k._colorsTexture,L));const rl=G.morphAttributes;if((rl.position!==void 0||rl.normal!==void 0||rl.color!==void 0)&&Ut.update(k,G,In),(pn||wt.receiveShadow!==k.receiveShadow)&&(wt.receiveShadow=k.receiveShadow,we.setValue(N,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(vi.envMap.value=Mt,vi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(vi.envMapIntensity.value=z.environmentIntensity),pn&&(we.setValue(N,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&em(vi,sl),et&&W.fog===!0&&at.refreshFogUniforms(vi,et),at.refreshMaterialUniforms(vi,W,q,F,p.state.transmissionRenderTarget[R.id]),Ca.upload(N,rh(wt),vi,L)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ca.upload(N,rh(wt),vi,L),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&we.setValue(N,"center",k.center),we.setValue(N,"modelViewMatrix",k.modelViewMatrix),we.setValue(N,"normalMatrix",k.normalMatrix),we.setValue(N,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const yn=W.uniformsGroups;for(let ol=0,im=yn.length;ol<im;ol++){const ah=yn[ol];O.update(ah,In),O.bind(ah,In)}}return In}function em(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function nm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(R,z,G){Ot.get(R.texture).__webglTexture=z,Ot.get(R.depthTexture).__webglTexture=G;const W=Ot.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const G=Ot.get(R);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,G=0){S=R,E=z,b=G;let W=!0,k=null,et=!1,ut=!1;if(R){const Mt=Ot.get(R);if(Mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Mt.__hasExternalTextures)L.rebindTextures(R,Ot.get(R.texture).__webglTexture,Ot.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const St=R.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Ot.has(St)&&(R.width!==St.image.width||R.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Pt=R.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Lt=Ot.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?k=Lt[z][G]:k=Lt[z],et=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?k=Ot.get(R).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[G]:k=Lt,M.copy(R.viewport),w.copy(R.scissor),I=R.scissorTest}else M.copy(nt).multiplyScalar(q).floor(),w.copy(rt).multiplyScalar(q).floor(),I=Et;if(It.bindFramebuffer(N.FRAMEBUFFER,k)&&W&&It.drawBuffers(R,k),It.viewport(M),It.scissor(w),It.setScissorTest(I),et){const Mt=Ot.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,G)}else if(ut){const Mt=Ot.get(R.texture),Pt=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Pt)}C=-1},this.readRenderTargetPixels=function(R,z,G,W,k,et,ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){It.bindFramebuffer(N.FRAMEBUFFER,vt);try{const Mt=R.texture,Pt=Mt.format,Lt=Mt.type;if(!$t.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-W&&G>=0&&G<=R.height-k&&N.readPixels(z,G,W,k,Bt.convert(Pt),Bt.convert(Lt),et)}finally{const Mt=S!==null?Ot.get(S).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(R,z,G,W,k,et,ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){const Mt=R.texture,Pt=Mt.format,Lt=Mt.type;if(!$t.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-W&&G>=0&&G<=R.height-k){It.bindFramebuffer(N.FRAMEBUFFER,vt);const St=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(z,G,W,k,Bt.convert(Pt),Bt.convert(Lt),0);const se=S!==null?Ot.get(S).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,se);const me=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ug(N,me,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(St),N.deleteSync(me),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,G=0){R.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(R.image.width*W),et=Math.floor(R.image.height*W),ut=z!==null?z.x:0,vt=z!==null?z.y:0;L.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ut,vt,k,et),It.unbindTexture()},this.copyTextureToTexture=function(R,z,G=null,W=null,k=0){R.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],z=arguments[2],k=arguments[3]||0,G=null);let et,ut,vt,Mt,Pt,Lt;G!==null?(et=G.max.x-G.min.x,ut=G.max.y-G.min.y,vt=G.min.x,Mt=G.min.y):(et=R.image.width,ut=R.image.height,vt=0,Mt=0),W!==null?(Pt=W.x,Lt=W.y):(Pt=0,Lt=0);const St=Bt.convert(z.format),se=Bt.convert(z.type);L.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const me=N.getParameter(N.UNPACK_ROW_LENGTH),ye=N.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=N.getParameter(N.UNPACK_SKIP_PIXELS),ne=N.getParameter(N.UNPACK_SKIP_ROWS),wt=N.getParameter(N.UNPACK_SKIP_IMAGES),Ge=R.isCompressedTexture?R.mipmaps[k]:R.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ge.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ge.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Mt),R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,Pt,Lt,et,ut,St,se,Ge.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,Pt,Lt,Ge.width,Ge.height,St,Ge.data):N.texSubImage2D(N.TEXTURE_2D,k,Pt,Lt,et,ut,St,se,Ge),N.pixelStorei(N.UNPACK_ROW_LENGTH,me),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ne),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wt),k===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(R,z,G=null,W=null,k=0){R.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,R=arguments[2],z=arguments[3],k=arguments[4]||0);let et,ut,vt,Mt,Pt,Lt,St,se,me;const ye=R.isCompressedTexture?R.mipmaps[k]:R.image;G!==null?(et=G.max.x-G.min.x,ut=G.max.y-G.min.y,vt=G.max.z-G.min.z,Mt=G.min.x,Pt=G.min.y,Lt=G.min.z):(et=ye.width,ut=ye.height,vt=ye.depth,Mt=0,Pt=0,Lt=0),W!==null?(St=W.x,se=W.y,me=W.z):(St=0,se=0,me=0);const dn=Bt.convert(z.format),ne=Bt.convert(z.type);let wt;if(z.isData3DTexture)L.setTexture3D(z,0),wt=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)L.setTexture2DArray(z,0),wt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ge=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),In=N.getParameter(N.UNPACK_SKIP_PIXELS),ps=N.getParameter(N.UNPACK_SKIP_ROWS),pn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Lt),R.isDataTexture||R.isData3DTexture?N.texSubImage3D(wt,k,St,se,me,et,ut,vt,dn,ne,ye.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(wt,k,St,se,me,et,ut,vt,dn,ye.data):N.texSubImage3D(wt,k,St,se,me,et,ut,vt,dn,ne,ye),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ge),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,In),N.pixelStorei(N.UNPACK_SKIP_ROWS,ps),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pn),k===0&&z.generateMipmaps&&N.generateMipmap(wt),It.unbindTexture()},this.initRenderTarget=function(R){Ot.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),It.unbindTexture()},this.resetState=function(){E=0,b=0,S=null,It.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xu?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===qa?"display-p3":"srgb"}}class Su extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new A;class po{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new po(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $d extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Cs;const Pr=new A,Ps=new A,Ls=new A,Is=new dt,Lr=new dt,Zd=new pt,Xo=new A,Ir=new A,jo=new A,of=new dt,Fl=new dt,af=new dt;class bv extends ae{constructor(t=new $d){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new de;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kd(e,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new po(n,3,0,!1)),Cs.setAttribute("uv",new po(n,2,3,!1))}this.geometry=Cs,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Zd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ls.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;qo(Xo.set(-.5,-.5,0),Ls,o,Ps,s,r),qo(Ir.set(.5,-.5,0),Ls,o,Ps,s,r),qo(jo.set(.5,.5,0),Ls,o,Ps,s,r),of.set(0,0),Fl.set(1,0),af.set(1,1);let a=t.ray.intersectTriangle(Xo,Ir,jo,!1,Pr);if(a===null&&(qo(Ir.set(-.5,.5,0),Ls,o,Ps,s,r),Fl.set(0,1),a=t.ray.intersectTriangle(Xo,jo,Ir,!1,Pr),a===null))return;const l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:Fe.getInterpolation(Pr,Xo,Ir,jo,of,Fl,af,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qo(i,t,e,n,s,r){Is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Lr.x=r*Is.x-s*Is.y,Lr.y=s*Is.x+r*Is.y):Lr.copy(Is),i.copy(t),i.x+=Lr.x,i.y+=Lr.y,i.applyMatrix4(Zd)}const lf=new A,cf=new Jt,uf=new Jt,Sv=new A,hf=new pt,Yo=new A,Ol=new hn,ff=new pt,Bl=new gr;class Ev extends st{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new he),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yo),this.boundingSphere.expandByPoint(Yo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(s),t.ray.intersectsSphere(Ol)!==!1&&(ff.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(ff),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Bl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Um?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;cf.fromBufferAttribute(s.attributes.skinIndex,t),uf.fromBufferAttribute(s.attributes.skinWeight,t),lf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=uf.getComponent(r);if(o!==0){const a=cf.getComponent(r);hf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Sv.copy(lf).applyMatrix4(hf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Qd extends ae{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gs extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=be,u=be,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new pt,wv=new pt;class Eu{constructor(t=[],e=[]){this.uuid=zn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new pt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:wv;df.multiplyMatrices(a,e[r]),df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Eu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Gs(e,t,t,$e,nn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qd),this.bones.push(o),this.boneInverses.push(new pt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Kc extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new pt,pf=new pt,Ko=[],mf=new he,Tv=new pt,Dr=new st,Ur=new hn;class Av extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Kc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new he),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),mf.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(mf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Ur.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),t.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),pf.multiplyMatrices(n,Ds),Dr.matrixWorld=pf,Dr.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){const l=Ko[o];l.instanceId=r,l.object=this,e.push(l)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Kc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gs(new Float32Array(s*this.count),s,this.count,_o,nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vi extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ha=new A,Va=new A,gf=new pt,Nr=new gr,$o=new hn,zl=new A,_f=new A;class Sn extends ae{constructor(t=new de,e=new Vi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ha.fromBufferAttribute(e,s-1),Va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Va);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;gf.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(gf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),x=u.getX(_+1),y=Zo(this,t,Nr,l,m,x);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=Zo(this,t,Nr,l,_,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=Zo(this,t,Nr,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Zo(this,t,Nr,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Va.fromBufferAttribute(o,r),e.distanceSqToSegment(Ha,Va,zl,_f)>n)return;zl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(zl);if(!(l<t.near||l>t.far))return{distance:l,point:_f.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const xf=new A,yf=new A;class xo extends Sn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xf.fromBufferAttribute(e,s),yf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xf.distanceTo(yf);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rv extends Sn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Jd extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vf=new pt,$c=new gr,Qo=new hn,Jo=new A;class Cv extends ae{constructor(t=new de,e=new Jd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;vf.copy(s).invert(),$c.copy(t.ray).applyMatrix4(vf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const p=c.getX(g);Jo.fromBufferAttribute(f,p),Mf(Jo,p,l,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Jo.fromBufferAttribute(f,g),Mf(Jo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mf(i,t,e,n,s,r,o){const a=$c.distanceSqToPoint(i);if(a<e){const l=new A;$c.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class tp extends Oe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ye extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],p=n/2;let m=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function x(){const v=new A,E=new A;let b=0;const S=(e-t)/n;for(let C=0;C<=r;C++){const P=[],M=C/r,w=M*(e-t)+t;for(let I=0;I<=s;I++){const D=I/s,U=D*l+a,B=Math.sin(U),F=Math.cos(U);E.x=w*B,E.y=-M*n+p,E.z=w*F,f.push(E.x,E.y,E.z),v.set(B,S,F).normalize(),h.push(v.x,v.y,v.z),d.push(D,1-M),P.push(g++)}_.push(P)}for(let C=0;C<s;C++)for(let P=0;P<r;P++){const M=_[P][C],w=_[P+1][C],I=_[P+1][C+1],D=_[P][C+1];t>0&&(u.push(M,w,D),b+=3),e>0&&(u.push(w,I,D),b+=3)}c.addGroup(m,b,0),m+=b}function y(v){const E=g,b=new dt,S=new A;let C=0;const P=v===!0?t:e,M=v===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*M,0),h.push(0,M,0),d.push(.5,.5),g++;const w=g;for(let I=0;I<=s;I++){const U=I/s*l+a,B=Math.cos(U),F=Math.sin(U);S.x=P*F,S.y=p*M,S.z=P*B,f.push(S.x,S.y,S.z),h.push(0,M,0),b.x=B*.5+.5,b.y=F*.5*M+.5,d.push(b.x,b.y),g++}for(let I=0;I<s;I++){const D=E+I,U=w+I;v===!0?u.push(U,U+1,D):u.push(U+1,U,D),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wu extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new A,v=new A,E=new A;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],v),d(e[b+2],E),l(y,v,E,x)}function l(x,y,v,E){const b=E+1,S=[];for(let C=0;C<=b;C++){S[C]=[];const P=x.clone().lerp(v,C/b),M=y.clone().lerp(v,C/b),w=b-C;for(let I=0;I<=w;I++)I===0&&C===b?S[C][I]=P:S[C][I]=P.clone().lerp(M,I/w)}for(let C=0;C<b;C++)for(let P=0;P<2*(b-C)-1;P++){const M=Math.floor(P/2);P%2===0?(h(S[C][M+1]),h(S[C+1][M]),h(S[C][M])):(h(S[C][M+1]),h(S[C+1][M+1]),h(S[C+1][M]))}}function c(x){const y=new A;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const x=new A;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=p(x)/2/Math.PI+.5,E=m(x)/Math.PI+.5;o.push(v,1-E)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],E=o[x+4],b=Math.max(y,v,E),S=Math.min(y,v,E);b>.9&&S<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new A,y=new A,v=new A,E=new A,b=new dt,S=new dt,C=new dt;for(let P=0,M=0;P<r.length;P+=9,M+=6){x.set(r[P+0],r[P+1],r[P+2]),y.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),b.set(o[M+0],o[M+1]),S.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),E.copy(x).add(y).add(v).divideScalar(3);const w=p(E);_(b,M+0,x,w),_(S,M+2,y,w),_(C,M+4,v,w)}}function _(x,y,v,E){E<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=E/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wu(t.vertices,t.indices,t.radius,t.details)}}const ta=new A,ea=new A,kl=new A,na=new Fe;class Pv extends de{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Zs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=na;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),na.getNormal(kl),f[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const y=(x+1)%3,v=f[x],E=f[y],b=na[u[x]],S=na[u[y]],C=`${v}_${E}`,P=`${E}_${v}`;P in h&&h[P]?(kl.dot(h[P].normal)<=r&&(d.push(b.x,b.y,b.z),d.push(S.x,S.y,S.z)),h[P]=null):C in h||(h[C]={index0:c[x],index1:c[y],normal:kl.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:p}=h[g];ta.fromBufferAttribute(a,_),ea.fromBufferAttribute(a,p),d.push(ta.x,ta.y,ta.z),d.push(ea.x,ea.y,ea.z)}this.setAttribute("position",new le(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ws extends wu{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ws(t.radius,t.detail)}}class Tu extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new A,h=new A,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],y=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const b=E/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(b+v,1-y),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const y=u[m][x+1],v=u[m][x],E=u[m+1][x],b=u[m+1][x+1];(m!==0||o>0)&&d.push(y,v,b),(m!==n-1||l<Math.PI)&&d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cs extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new A,f=new A,h=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,x=(s+1)*d+g;o.push(_,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lv extends de{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new A,r=new A;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let g=h,_=h+d;g<_;g+=3)for(let p=0;p<3;p++){const m=a.getX(g+p),x=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,x),bf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),bf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new le(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function bf(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class yo extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jn extends yo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function ia(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Iv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dv(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Sf(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function ep(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class vo{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Uv extends vo{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ph:r=t,a=2*e-n;break;case mh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:o=t,l=2*n-e;break;case mh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,x=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,y=(-1-d)*p+(1.5+d)*_+.5*g,v=d*p-d*_;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+x*o[c+E]+y*o[l+E]+v*o[f+E];return r}}class Nv extends vo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class Fv extends vo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ti{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case uo:e=this.InterpolantFactoryMethodLinear;break;case al:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Iv(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===al,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){const _=e[f+g];if(_!==e[h+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=uo;class yr extends ti{constructor(t,e,n){super(t,e,n)}}yr.prototype.ValueTypeName="bool";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=co;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class np extends ti{}np.prototype.ValueTypeName="color";class cr extends ti{}cr.prototype.ValueTypeName="number";class Ov extends vo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e);let c=t*a;for(let u=c+a;c!==u;c+=4)Ie.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ur extends ti{InterpolantFactoryMethodLinear(t){return new Ov(this.times,this.values,this.getValueSize(),t)}}ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends ti{constructor(t,e,n){super(t,e,n)}}vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=co;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends ti{}hr.prototype.ValueTypeName="vector";class Bv{constructor(t="",e=-1,n=[],s=Nm){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(kv(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ti.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Dv(l);l=Sf(l,1,u),c=Sf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new cr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,g,_){if(d.length!==0){const p=[],m=[];ep(d,p,m,g),p.length!==0&&_.push(new f(h,p,m))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let x=0;x!==h[g].morphTargets.length;++x){const y=h[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new cr(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{const d=".bones["+e[f].name+"]";n(hr,d+".position",h,"pos",s),n(ur,d+".quaternion",h,"rot",s),n(hr,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cr;case"vector":case"vector2":case"vector3":case"vector4":return hr;case"color":return np;case"quaternion":return ur;case"bool":case"boolean":return yr;case"string":return vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=zv(i.type);if(i.times===void 0){const e=[],n=[];ep(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Ni={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ip{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Hv=new ip;class Mr{constructor(t){this.manager=t!==void 0?t:Hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class Vv extends Error{constructor(t,e){super(t),this.response=e}}class sp extends Mr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ni.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:s});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ai[t],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){f.read().then(({done:y,value:v})=>{if(y)m.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,S=u.length;b<S;b++){const C=u[b];C.onProgress&&C.onProgress(E)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Vv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ni.add(t,c);const u=ai[t];delete ai[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ai[t];if(u===void 0)throw this.manager.itemError(t),c;delete ai[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Gv extends Mr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ni.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ho("img");function l(){u(),Ni.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Wv extends Mr{constructor(t){super(t)}load(t,e,n,s){const r=new Oe,o=new Gv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ka extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xv extends Ka{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hl=new pt,Ef=new A,wf=new A;class Au{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mu,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ef),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jv extends Au{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ar*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class qv extends Ka{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Tf=new pt,Fr=new A,Vl=new A;class Yv extends Au{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fr),Vl.copy(n.position),Vl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vl),n.updateMatrixWorld(),s.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf)}}class Kv extends Ka{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $v extends Au{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rp extends Ka{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new $v}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class eo{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Zv extends Mr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ni.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Ni.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ni.add(t,l),r.manager.itemStart(t)}}const Ru="\\[\\]\\.:\\/",Qv=new RegExp("["+Ru+"]","g"),Cu="[^"+Ru+"]",Jv="[^"+Ru.replace("\\.","")+"]",tM=/((?:WC+[\/:])*)/.source.replace("WC",Cu),eM=/(WCOD+)?/.source.replace("WCOD",Jv),nM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),iM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),sM=new RegExp("^"+tM+eM+nM+iM+"$"),rM=["material","materials","bones","map"];class oM{constructor(t,e,n){const s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class oe{constructor(t,e,n){this.path=e,this.parsedPath=n||oe.parseTrackName(e),this.node=oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new oe.Composite(t,e,n):new oe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qv,"")}static parseTrackName(t){const e=sM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);rM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=oe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oe.Composite=oM;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Af=new pt;class Mo{constructor(t,e,n=0,s=1/0){this.ray=new gr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Af.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Af),this}intersectObject(t,e=!0,n=[]){return Zc(t,this,n,e),n.sort(Rf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Zc(t[s],this,n,e);return n.sort(Rf),n}}function Rf(i,t){return i.distance-t.distance}function Zc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Zc(r[o],t,e,!0)}}class Cf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pf=new A,sa=new A;class pi{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Pf.subVectors(t,this.start),sa.subVectors(this.end,this.start);const n=sa.dot(sa);let r=sa.dot(Pf)/n;return e&&(r=Ve(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Lf extends xo{constructor(t=10,e=10,n=4473924,s=8947848){n=new At(n),s=new At(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let h=0,d=0,g=-a;h<=e;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new de;u.setAttribute("position",new le(l,3)),u.setAttribute("color",new le(c,3));const f=new Vi({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class aM extends xo{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new de;s.setAttribute("position",new le(e,3)),s.setAttribute("color",new le(n,3));const r=new Vi({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new At,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class op extends fs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);const If={type:"change"},Pu={type:"start"},ap={type:"end"},ra=new gr,Df=new On,lM=Math.cos(70*ka.DEG2RAD),Ne=new A,ln=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6;class cM extends op{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Ie,this._lastTargetPosition=new A,this._quat=new Ie().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cf,this._sphericalDelta=new Cf,this._scale=1,this._panOffset=new A,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new A,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hM.bind(this),this._onPointerDown=uM.bind(this),this._onPointerUp=fM.bind(this),this._onContextMenu=yM.bind(this),this._onMouseWheel=mM.bind(this),this._onKeyDown=gM.bind(this),this._onTouchStart=_M.bind(this),this._onTouchMove=xM.bind(this),this._onMouseDown=dM.bind(this),this._onMouseMove=pM.bind(this),this._interceptControlDown=vM.bind(this),this._interceptControlUp=MM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(If),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ne.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ra.origin.copy(this.object.position),ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ra.direction))<lM?this.object.lookAt(this.target):(Df.setFromNormalAndCoplanarPoint(this.object.up,this.target),ra.intersectPlane(Df,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(If),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ne.copy(s).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function uM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function hM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ap),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Pu)}function pM(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mM(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(Pu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ap))}function gM(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function _M(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Pu)}function xM(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function yM(i){this.enabled!==!1&&i.preventDefault()}function vM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qi=new Mo,Ke=new A,Ai=new A,xe=new Ie,Uf={X:new A(1,0,0),Y:new A(0,1,0),Z:new A(0,0,1)},Wl={type:"change"},Nf={type:"mouseDown",mode:null},Ff={type:"mouseUp",mode:null},Of={type:"objectChange"};class bM extends op{constructor(t,e=null){super(void 0,e);const n=new RM(this);this._root=n;const s=new CM;this._gizmo=s,n.add(s);const r=new PM;this._plane=r,n.add(r);const o=this;function a(y,v){let E=v;Object.defineProperty(o,y,{get:function(){return E!==void 0?E:v},set:function(b){E!==b&&(E=b,r[y]=b,s[y]=b,o.dispatchEvent({type:y+"-changed",value:b}),o.dispatchEvent(Wl))}}),o[y]=v,r[y]=v,s[y]=v}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const l=new A,c=new A,u=new Ie,f=new Ie,h=new A,d=new Ie,g=new A,_=new A,p=new A,m=0,x=new A;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",f),a("cameraPosition",h),a("cameraQuaternion",d),a("pointStart",g),a("pointEnd",_),a("rotationAxis",p),a("rotationAngle",m),a("eye",x),this._offset=new A,this._startNorm=new A,this._endNorm=new A,this._cameraScale=new A,this._parentPosition=new A,this._parentQuaternion=new Ie,this._parentQuaternionInv=new Ie,this._parentScale=new A,this._worldScaleStart=new A,this._worldQuaternionInv=new Ie,this._worldScale=new A,this._positionStart=new A,this._quaternionStart=new Ie,this._scaleStart=new A,this._getPointer=SM.bind(this),this._onPointerDown=wM.bind(this),this._onPointerHover=EM.bind(this),this._onPointerMove=TM.bind(this),this._onPointerUp=AM.bind(this),e!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Qi.setFromCamera(t,this.camera);const e=Xl(this._gizmo.picker[this.mode],Qi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Qi.setFromCamera(t,this.camera);const e=Xl(this._plane,Qi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Nf.mode=this.mode,this.dispatchEvent(Nf)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Qi.setFromCamera(t,this.camera);const o=Xl(this._plane,Qi,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(xe.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Ke.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Ke.setFromMatrixPosition(s.parent.matrixWorld))));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ai.set(a,a,a)}else Ke.copy(this.pointStart),Ai.copy(this.pointEnd),Ke.applyQuaternion(this._worldQuaternionInv),Ai.applyQuaternion(this._worldQuaternionInv),Ai.divide(Ke),e.search("X")===-1&&(Ai.x=1),e.search("Y")===-1&&(Ai.y=1),e.search("Z")===-1&&(Ai.z=1);s.scale.copy(this._scaleStart).multiply(Ai),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Ke.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ke.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Uf[e]),Ke.copy(Uf[e]),r==="local"&&Ke.applyQuaternion(this.worldQuaternion),Ke.cross(this.eye),Ke.length()===0?l=!0:this.rotationAngle=this._offset.dot(Ke.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(xe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(xe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Wl),this.dispatchEvent(Of)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Ff.mode=this.mode,this.dispatchEvent(Ff)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Wl),this.dispatchEvent(Of),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Qi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function SM(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function EM(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function wM(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function TM(i){this.enabled&&this.pointerMove(this._getPointer(i))}function AM(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Xl(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const oa=new Wn,ue=new A(0,1,0),Bf=new A(0,0,0),zf=new pt,aa=new Ie,Pa=new Ie,jn=new A,kf=new pt,Zr=new A(1,0,0),os=new A(0,1,0),Qr=new A(0,0,1),la=new A,Or=new A,Br=new A;class RM extends ae{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}}class CM extends ae{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Tn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Vi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const f=t.clone();f.opacity=.25;const h=t.clone();h.color.setHex(16776960),h.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const _=new Ye(0,.04,.1,12);_.translate(0,.05,0);const p=new ve(.08,.08,.08);p.translate(0,.04,0);const m=new de;m.setAttribute("position",new le([0,0,0,1,0,0],3));const x=new Ye(.0075,.0075,.5,3);x.translate(0,.25,0);function y(B,F){const q=new cs(B,.0075,3,64,F*Math.PI*2);return q.rotateY(Math.PI/2),q.rotateX(Math.PI/2),q}function v(){const B=new de;return B.setAttribute("position",new le([0,0,0,1,1,1],3)),B}const E={X:[[new st(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new st(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new st(x,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new st(_,o),[0,.5,0]],[new st(_,o),[0,-.5,0],[Math.PI,0,0]],[new st(x,o)]],Z:[[new st(_,a),[0,0,.5],[Math.PI/2,0,0]],[new st(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new st(x,a),null,[Math.PI/2,0,0]]],XYZ:[[new st(new Ws(.1,0),f.clone()),[0,0,0]]],XY:[[new st(new ve(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new st(new ve(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new st(new ve(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},b={X:[[new st(new Ye(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new st(new Ye(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new st(new Ye(.2,0,.6,4),n),[0,.3,0]],[new st(new Ye(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new st(new Ye(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new st(new Ye(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new st(new Ws(.2,0),n)]],XY:[[new st(new ve(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new st(new ve(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new st(new ve(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},S={START:[[new st(new Ws(.01,2),s),null,null,null,"helper"]],END:[[new st(new Ws(.01,2),s),null,null,null,"helper"]],DELTA:[[new Sn(v(),s),null,null,null,"helper"]],X:[[new Sn(m,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Sn(m,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Sn(m,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new st(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new st(y(.5,.5),r)]],Y:[[new st(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new st(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new st(y(.75,1),h),null,[0,Math.PI/2,0]]]},P={AXIS:[[new Sn(m,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new st(new Tu(.25,10,8),n)]],X:[[new st(new cs(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new st(new cs(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new st(new cs(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new st(new cs(.75,.1,2,24),n)]]},w={X:[[new st(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new st(x,r),[0,0,0],[0,0,-Math.PI/2]],[new st(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new st(p,o),[0,.5,0]],[new st(x,o)],[new st(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new st(p,a),[0,0,.5],[Math.PI/2,0,0]],[new st(x,a),[0,0,0],[Math.PI/2,0,0]],[new st(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new st(new ve(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new st(new ve(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new st(new ve(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new st(new ve(.1,.1,.1),f.clone())]]},I={X:[[new st(new Ye(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new st(new Ye(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new st(new Ye(.2,0,.6,4),n),[0,.3,0]],[new st(new Ye(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new st(new Ye(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new st(new Ye(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new st(new ve(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new st(new ve(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new st(new ve(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new st(new ve(.2,.2,.2),n),[0,0,0]]]},D={X:[[new Sn(m,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Sn(m,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Sn(m,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(B){const F=new ae;for(const q in B)for(let H=B[q].length;H--;){const Z=B[q][H][0].clone(),nt=B[q][H][1],rt=B[q][H][2],Et=B[q][H][3],Ct=B[q][H][4];Z.name=q,Z.tag=Ct,nt&&Z.position.set(nt[0],nt[1],nt[2]),rt&&Z.rotation.set(rt[0],rt[1],rt[2]),Et&&Z.scale.set(Et[0],Et[1],Et[2]),Z.updateMatrix();const X=Z.geometry.clone();X.applyMatrix4(Z.matrix),Z.geometry=X,Z.renderOrder=1/0,Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1),F.add(Z)}return F}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(E)),this.add(this.gizmo.rotate=U(C)),this.add(this.gizmo.scale=U(w)),this.add(this.picker.translate=U(b)),this.add(this.picker.rotate=U(M)),this.add(this.picker.scale=U(I)),this.add(this.helper.translate=U(S)),this.add(this.helper.rotate=U(P)),this.add(this.helper.scale=U(D)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Pa;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(xe.setFromEuler(oa.set(0,0,0)),o.quaternion.copy(n).multiply(xe),Math.abs(ue.copy(Zr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(xe.setFromEuler(oa.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(xe),Math.abs(ue.copy(os).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(xe.setFromEuler(oa.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(xe),Math.abs(ue.copy(Qr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(xe.setFromEuler(oa.set(0,Math.PI/2,0)),ue.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(zf.lookAt(Bf,ue,os)),o.quaternion.multiply(xe),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ke.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ke.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ke),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ue.copy(Zr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ue.copy(os).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ue.copy(Qr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ue.copy(Qr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ue.copy(Zr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ue.copy(os).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(aa.copy(n),ue.copy(this.eye).applyQuaternion(xe.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(zf.lookAt(this.eye,Bf,os)),o.name==="X"&&(xe.setFromAxisAngle(Zr,Math.atan2(-ue.y,ue.z)),xe.multiplyQuaternions(aa,xe),o.quaternion.copy(xe)),o.name==="Y"&&(xe.setFromAxisAngle(os,Math.atan2(ue.x,ue.z)),xe.multiplyQuaternions(aa,xe),o.quaternion.copy(xe)),o.name==="Z"&&(xe.setFromAxisAngle(Qr,Math.atan2(ue.y,ue.x)),xe.multiplyQuaternions(aa,xe),o.quaternion.copy(xe))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class PM extends st{constructor(){super(new ds(1e5,1e5,2,2),new Tn({visible:!1,wireframe:!0,side:cn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),la.copy(Zr).applyQuaternion(e==="local"?this.worldQuaternion:Pa),Or.copy(os).applyQuaternion(e==="local"?this.worldQuaternion:Pa),Br.copy(Qr).applyQuaternion(e==="local"?this.worldQuaternion:Pa),ue.copy(Or),this.mode){case"translate":case"scale":switch(this.axis){case"X":ue.copy(this.eye).cross(la),jn.copy(la).cross(ue);break;case"Y":ue.copy(this.eye).cross(Or),jn.copy(Or).cross(ue);break;case"Z":ue.copy(this.eye).cross(Br),jn.copy(Br).cross(ue);break;case"XY":jn.copy(Br);break;case"YZ":jn.copy(la);break;case"XZ":ue.copy(Br),jn.copy(Or);break;case"XYZ":case"E":jn.set(0,0,0);break}break;case"rotate":default:jn.set(0,0,0)}jn.length()===0?this.quaternion.copy(this.cameraQuaternion):(kf.lookAt(Ke.set(0,0,0),jn,ue),this.quaternion.setFromRotationMatrix(kf)),super.updateMatrixWorld(t)}}const Kn=4,Js=256,LM={union:0,subtract:1,intersect:2},Pi=0,Hf=Math.PI,Qc=(i,t,e)=>Math.min(Math.max(i,t),e),Te=(i,t)=>Math.hypot(i,t),Li=(i,t,e)=>Math.sqrt(i*i+t*t+e*e),Vf=(i,t)=>i-t*Math.floor(i/t);function zi(i,t,e,n){const s=Math.abs(i)-e,r=Math.abs(t)-n;return Te(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function Lu(i,t,e){const n=Math.abs(t)-e;return Math.min(Math.max(i,n),0)+Te(Math.max(i,0),Math.max(n,0))}function Iu(i,t,e,n,s,r){const o=Math.abs(i)-n,a=Math.abs(t)-s,l=Math.abs(e)-r;return Li(Math.max(o,0),Math.max(a,0),Math.max(l,0))+Math.min(Math.max(o,Math.max(a,l)),0)}function IM(i,t,e,n,s){const r=Te(i,t)-n,o=Math.abs(e)-s;return Math.min(Math.max(r,o),0)+Te(Math.max(r,0),Math.max(o,0))}function DM(i,t,e,n,s){const r=zi(i.x,i.y-(-e*.5+n*.5),t*.5,n*.5),o=zi(i.x-(-t*.5+n*.5),i.y,n*.5,e*.5);return Lu(Math.min(r,o),i.z,s)}function UM(i,t,e,n,s){const r=zi(i.x,i.y-(-e+n*.5),t,n*.5),o=zi(i.x-(-t+n*.5),i.y,n*.5,e),a=zi(i.x-(t-n*.5),i.y,n*.5,e);return Lu(Math.min(r,Math.min(o,a)),i.z,s)}function NM(i,t,e,n,s,r){const o=zi(i.x,i.y-(e-n*.5),t,n*.5),a=zi(i.x,i.y+(e-n*.5),t,n*.5),l=zi(i.x,i.y,s*.5,e-n);return Lu(Math.min(o,Math.min(a,l)),i.z,r)}function FM(i,t,e,n){const s=Te(i.x,i.z)-t,r=Math.abs(i.y)-n,o=Math.min(Math.max(s,r),0)+Te(Math.max(s,0),Math.max(r,0)),a=Te(i.x,i.z)-e,l=Math.abs(i.y)-n-.01,c=Math.min(Math.max(a,l),0)+Te(Math.max(a,0),Math.max(l,0));return Math.max(o,-c)}function OM(i,t,e,n){const s=Math.abs(i.x),r=i.y;let o;if(r>0)o=Math.abs(Te(s,r)-t);else{const a=Qc(r,-n,0);o=Te(s-t,r-a)}return Te(o,i.z)-e}function BM(i,t,e,n,s){const r=Math.round(s);let o=1e9;const a=s*e*.5;for(let l=0;l<r&&l<24;l++){const c=(l+1)*n*.5;o=Math.min(o,Iu(i.x,i.y-c,i.z-((l+.5)*e-a),t,c,e*.5))}return o}function zM(i,t,e,n,s,r,o){const a=Math.round(t),l=s*Math.PI/180;let c=1e9;const u=n*Math.sin(l)*.6;for(let f=0;f<a&&f<48;f++){const h=-l*f,d=Math.cos(h),g=Math.sin(h),_=i.y-f*e,p=d*i.x-g*i.z,m=g*i.x+d*i.z;c=Math.min(c,Iu(p-(r+n)*.5,_,m,(n-r)*.5,o*.5,u))}return c}function kM(i,t,e,n,s){const r=IM(i.x,i.y,i.z,s,n),o=Iu(i.x-(s+t*.5),i.y,i.z,t*.5,e*.5,n);return Math.min(r,o)}const $a=[{kindId:1,key:"sphere",name:"球",params:[{key:"r",label:"半径",value:.5,min:.01,step:.01}],pack:i=>({a:[i.r,0,0,0],b:[0,0,0,0]}),bound:i=>i.r,js:(i,t)=>Li(i.x,i.y,i.z)-t[0],glsl:"if(kind==1){ return length(p)-a.x; }"},{kindId:2,key:"box",name:"箱",params:[{key:"x",label:"幅/2",value:.5,min:.01,step:.01},{key:"y",label:"高/2",value:.5,min:.01,step:.01},{key:"z",label:"奥/2",value:.5,min:.01,step:.01}],pack:i=>({a:[i.x,i.y,i.z,0],b:[0,0,0,0]}),bound:i=>Li(i.x,i.y,i.z),js:(i,t)=>{const e=Math.abs(i.x)-t[0],n=Math.abs(i.y)-t[1],s=Math.abs(i.z)-t[2];return Li(Math.max(e,0),Math.max(n,0),Math.max(s,0))+Math.min(Math.max(e,Math.max(n,s)),0)},glsl:"if(kind==2){ vec3 q=abs(p)-a.xyz; return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0); }"},{kindId:3,key:"roundbox",name:"角丸箱",params:[{key:"x",label:"幅/2",value:.5,min:.01,step:.01},{key:"y",label:"高/2",value:.5,min:.01,step:.01},{key:"z",label:"奥/2",value:.5,min:.01,step:.01},{key:"r",label:"丸み",value:.1,min:0,step:.01}],pack:i=>({a:[i.x,i.y,i.z,i.r],b:[0,0,0,0]}),bound:i=>Li(i.x,i.y,i.z),js:(i,t)=>{const e=Math.abs(i.x)-t[0]+t[3],n=Math.abs(i.y)-t[1]+t[3],s=Math.abs(i.z)-t[2]+t[3];return Li(Math.max(e,0),Math.max(n,0),Math.max(s,0))+Math.min(Math.max(e,Math.max(n,s)),0)-t[3]},glsl:"if(kind==3){ vec3 q=abs(p)-a.xyz+a.w; return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0)-a.w; }"},{kindId:4,key:"cylinder",name:"円柱",params:[{key:"r",label:"半径",value:.5,min:.01,step:.01},{key:"h",label:"高/2",value:.5,min:.01,step:.01}],pack:i=>({a:[i.r,i.h,0,0],b:[0,0,0,0]}),bound:i=>Te(i.r,i.h),js:(i,t)=>{const e=Te(i.x,i.z)-t[0],n=Math.abs(i.y)-t[1];return Math.min(Math.max(e,n),0)+Te(Math.max(e,0),Math.max(n,0))},glsl:"if(kind==4){ vec2 d=vec2(length(p.xz)-a.x, abs(p.y)-a.y); return min(max(d.x,d.y),0.0)+length(max(d,0.0)); }"},{kindId:5,key:"capsule",name:"カプセル",params:[{key:"r",label:"半径",value:.35,min:.01,step:.01},{key:"h",label:"芯/2",value:.5,min:0,step:.01}],pack:i=>({a:[i.r,i.h,0,0],b:[0,0,0,0]}),bound:i=>i.h+i.r,js:(i,t)=>{const e=i.y-Qc(i.y,-t[1],t[1]);return Li(i.x,e,i.z)-t[0]},glsl:"if(kind==5){ vec3 q=p; q.y-=clamp(q.y,-a.y,a.y); return length(q)-a.x; }"},{kindId:6,key:"torus",name:"トーラス",params:[{key:"R",label:"主半径",value:.5,min:.01,step:.01},{key:"r",label:"管半径",value:.18,min:.01,step:.01}],pack:i=>({a:[i.R,i.r,0,0],b:[0,0,0,0]}),bound:i=>i.R+i.r,js:(i,t)=>Te(Te(i.x,i.z)-t[0],i.y)-t[1],glsl:"if(kind==6){ vec2 q=vec2(length(p.xz)-a.x, p.y); return length(q)-a.y; }"},{kindId:7,key:"plane",name:"平面/半空間",params:[],pack:()=>({a:[0,0,0,0],b:[0,0,0,0]}),bound:()=>.5,js:i=>i.y,glsl:"if(kind==7){ return p.y; }"},{kindId:8,key:"pyramid",name:"四角錐",params:[{key:"base",label:"底辺/2",value:.5,min:.01,step:.01},{key:"h",label:"高さ",value:1,min:.01,step:.01}],pack:i=>({a:[i.base,i.h,0,0],b:[0,0,0,0]}),bound:i=>Math.max(i.base,i.h),js:(i,t)=>{const e=2*t[0];let n=i.x/e,s=i.y/e,r=i.z/e;const o=t[1]/e,a=o*o+.25;if(n=Math.abs(n),r=Math.abs(r),r>n){const p=n;n=r,r=p}n-=.5,r-=.5;const l=r,c=o*s-.5*n,u=o*n+.5*s,f=Math.max(-l,0),h=Qc((c-.5*r)/(a+.25),0,1),d=a*(l+f)*(l+f)+c*c,g=a*(l+.5*h)*(l+.5*h)+(c-a*h)*(c-a*h),_=Math.min(c,-l*a-c*.5)>0?0:Math.min(d,g);return Math.sqrt((_+u*u)/a)*Math.sign(Math.max(u,-s))*e},glsl:`if(kind==8){
      float scale=2.0*a.x; vec3 pp=p/scale; float h=a.y/scale;
      float m2=h*h+0.25; pp.xz=abs(pp.xz); pp.xz=(pp.z>pp.x)?pp.zx:pp.xz; pp.xz-=0.5;
      vec3 q=vec3(pp.z, h*pp.y-0.5*pp.x, h*pp.x+0.5*pp.y);
      float s=max(-q.x,0.0); float t=clamp((q.y-0.5*pp.z)/(m2+0.25),0.0,1.0);
      float A=m2*(q.x+s)*(q.x+s)+q.y*q.y;
      float B=m2*(q.x+0.5*t)*(q.x+0.5*t)+(q.y-m2*t)*(q.y-m2*t);
      float d2=min(q.y,-q.x*m2-q.y*0.5)>0.0?0.0:min(A,B);
      return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-pp.y))*scale;
    }`},{kindId:9,key:"tetra",name:"三角錐",params:[{key:"s",label:"サイズ",value:.6,min:.01,step:.01}],pack:i=>({a:[i.s,0,0,0],b:[0,0,0,0]}),bound:i=>i.s,js:(i,t)=>(Math.max(Math.max(i.x+i.y-i.z,-i.x-i.y-i.z),Math.max(-i.x+i.y+i.z,i.x-i.y+i.z))-t[0])*.5773502692,glsl:`if(kind==9){
      float m=max(max(p.x+p.y-p.z,-p.x-p.y-p.z),max(-p.x+p.y+p.z,p.x-p.y+p.z));
      return (m-a.x)*0.5773502692;
    }`},{kindId:10,key:"ngon",name:"N角柱",params:[{key:"r",label:"外接半径",value:.5,min:.01,step:.01},{key:"h",label:"高/2",value:.5,min:.01,step:.01},{key:"n",label:"辺の数",value:6,min:3,max:12,step:1}],pack:i=>({a:[i.r,i.h,Math.max(3,Math.round(i.n)),0],b:[0,0,0,0]}),bound:i=>Te(i.r,i.h),js:(i,t)=>{const e=Math.max(3,Math.round(t[2])),n=Hf/e,s=t[0]*Math.cos(n);let r=Math.atan2(i.z,i.x);r=Vf(r+n,2*n)-n;const o=Te(i.x,i.z)*Math.cos(r)-s,a=Math.abs(i.y)-t[1];return Math.min(Math.max(o,a),0)+Te(Math.max(o,0),Math.max(a,0))},glsl:`if(kind==10){
      float n=max(3.0,a.z); float an=PI/n; float he=a.x*cos(an);
      float bn=atan(p.z,p.x); bn=mod(bn+an,2.0*an)-an;
      float d2=length(p.xz)*cos(bn)-he; float dy=abs(p.y)-a.y;
      return min(max(d2,dy),0.0)+length(vec2(max(d2,0.0),max(dy,0.0)));
    }`},{kindId:11,key:"spring",name:"スプリング(近似)",params:[{key:"R",label:"コイル半径",value:.5,min:.05,step:.01},{key:"r",label:"線半径",value:.08,min:.01,step:.005},{key:"pitch",label:"ピッチ",value:.3,min:.02,step:.01},{key:"h",label:"高/2",value:.7,min:.05,step:.01}],pack:i=>({a:[i.R,i.r,i.pitch,i.h],b:[0,0,0,0]}),bound:i=>Math.max(i.R+i.r,i.h),js:(i,t)=>{const[e,n,s,r]=t,o=Math.atan2(i.z,i.x),a=Te(i.x,i.z)-e;let l=i.y-s*o/(2*Hf);l=Vf(l+.5*s,s)-.5*s;const c=Te(a,l)-n;return Math.max(c,Math.abs(i.y)-r)},glsl:`if(kind==11){
      float R=a.x,r=a.y,pitch=a.z,h=a.w;
      float angle=atan(p.z,p.x); float rad=length(p.xz)-R;
      float yrel=p.y-pitch*angle/(2.0*PI); yrel=mod(yrel+0.5*pitch,pitch)-0.5*pitch;
      float d=length(vec2(rad,yrel))-r; return max(d,abs(p.y)-h);
    }`},{kindId:12,key:"hbeam",name:"H鋼",category:"extra",params:[{key:"hw",label:"幅/2",value:.15,min:.01,step:.01},{key:"hh",label:"高/2",value:.25,min:.01,step:.01},{key:"ft",label:"ﾌﾗﾝｼﾞ厚",value:.04,min:.005,step:.005},{key:"wt",label:"ｳｪﾌﾞ厚",value:.03,min:.005,step:.005},{key:"hz",label:"長/2",value:.6,min:.02,step:.02}],pack:i=>({a:[i.hw,i.hh,i.ft,i.wt],b:[i.hz,0,0,0]}),bound:i=>Math.max(i.hw,i.hh,i.hz),js:(i,t,e)=>NM(i,t[0],t[1],t[2],t[3],e[0]),glsl:"if(kind==12){ return _hbeam(p,a.x,a.y,a.z,a.w,b.x); }"},{kindId:13,key:"lprofile",name:"L字鋼",category:"extra",params:[{key:"lx",label:"脚X",value:.25,min:.02,step:.01},{key:"ly",label:"脚Y",value:.25,min:.02,step:.01},{key:"t",label:"厚み",value:.04,min:.005,step:.005},{key:"hz",label:"長/2",value:.6,min:.01,step:.02}],pack:i=>({a:[i.lx,i.ly,i.t,i.hz],b:[0,0,0,0]}),bound:i=>Math.max(i.lx,i.ly,i.hz),js:(i,t)=>DM(i,t[0],t[1],t[2],t[3]),glsl:"if(kind==13){ return _lprofile(p,a.x,a.y,a.z,a.w); }"},{kindId:14,key:"uprofile",name:"U字鋼",category:"extra",params:[{key:"hw",label:"幅/2",value:.2,min:.02,step:.01},{key:"hh",label:"高/2",value:.2,min:.02,step:.01},{key:"t",label:"厚み",value:.04,min:.005,step:.005},{key:"hz",label:"長/2",value:.6,min:.01,step:.02}],pack:i=>({a:[i.hw,i.hh,i.t,i.hz],b:[0,0,0,0]}),bound:i=>Math.max(i.hw,i.hh,i.hz),js:(i,t)=>UM(i,t[0],t[1],t[2],t[3]),glsl:"if(kind==14){ return _uprofile(p,a.x,a.y,a.z,a.w); }"},{kindId:15,key:"tube",name:"チューブ",category:"extra",params:[{key:"oR",label:"外半径",value:.3,min:.02,step:.01},{key:"iR",label:"内半径",value:.22,min:.01,step:.01},{key:"hh",label:"高/2",value:.5,min:.02,step:.02}],pack:i=>({a:[i.oR,Math.min(i.iR,i.oR-.005),i.hh,0],b:[0,0,0,0]}),bound:i=>Math.max(i.oR,i.hh),js:(i,t)=>FM(i,t[0],t[1],t[2]),glsl:"if(kind==15){ return _tube(p,a.x,a.y,a.z); }"},{kindId:16,key:"utube",name:"U字チューブ",category:"extra",params:[{key:"R",label:"曲げ半径",value:.35,min:.05,step:.01},{key:"r",label:"管半径",value:.08,min:.01,step:.005},{key:"legLen",label:"脚長",value:.5,min:.02,step:.02}],pack:i=>({a:[i.R,i.r,i.legLen,0],b:[0,0,0,0]}),bound:i=>i.R+i.legLen+i.r,js:(i,t)=>OM(i,t[0],t[1],t[2]),glsl:"if(kind==16){ return _utube(p,a.x,a.y,a.z); }"},{kindId:17,key:"stairs",name:"階段",category:"extra",params:[{key:"hw",label:"幅/2",value:.4,min:.02,step:.02},{key:"run",label:"踏面",value:.18,min:.02,step:.01},{key:"rise",label:"蹴上",value:.15,min:.02,step:.01},{key:"n",label:"段数",value:6,min:1,max:24,step:1}],pack:i=>({a:[i.hw,i.run,i.rise,Math.round(i.n)],b:[0,0,0,0]}),bound:i=>Math.max(i.hw,i.n*i.run*.5,i.n*i.rise),js:(i,t)=>BM(i,t[0],t[1],t[2],t[3]),glsl:"if(kind==17){ return _stairs(p,a.x,a.y,a.z,a.w); }"},{kindId:18,key:"spiralstairs",name:"螺旋階段",category:"extra",params:[{key:"n",label:"段数",value:12,min:1,max:48,step:1},{key:"rise",label:"蹴上",value:.18,min:.02,step:.01},{key:"oR",label:"外半径",value:.5,min:.05,step:.02},{key:"angDeg",label:"角度",value:30,min:5,max:120,step:1},{key:"iR",label:"内半径",value:.12,min:0,step:.01},{key:"th",label:"段厚",value:.06,min:.01,step:.01}],pack:i=>({a:[Math.round(i.n),i.rise,i.oR,i.angDeg],b:[i.iR,i.th,0,0]}),bound:i=>Math.max(i.oR,i.n*i.rise),js:(i,t,e)=>zM(i,t[0],t[1],t[2],t[3],e[0],e[1]),glsl:"if(kind==18){ return _spiral(p,a.x,a.y,a.z,a.w,b.x,b.y); }"},{kindId:19,key:"icosphere",name:"Icoスフィア",category:"extra",params:[{key:"r",label:"半径",value:.5,min:.01,step:.01}],pack:i=>({a:[i.r,0,0,0],b:[0,0,0,0]}),bound:i=>i.r,js:(i,t)=>Li(i.x,i.y,i.z)-t[0],glsl:"if(kind==19){ return length(p)-a.x; }"},{kindId:20,key:"hingeleaf",name:"ヒンジ片",category:"extra",params:[{key:"plateLen",label:"板長",value:.4,min:.02,step:.01},{key:"t",label:"厚み",value:.04,min:.005,step:.005},{key:"hw",label:"幅/2",value:.25,min:.02,step:.01},{key:"kr",label:"軸半径",value:.06,min:.01,step:.005}],pack:i=>({a:[i.plateLen,i.t,i.hw,i.kr],b:[0,0,0,0]}),bound:i=>i.kr+i.plateLen,js:(i,t)=>kM(i,t[0],t[1],t[2],t[3]),glsl:"if(kind==20){ return _hingeLeaf(p,a.x,a.y,a.z,a.w); }"}],HM=[{name:"H鋼",kind:12},{name:"L字鋼",kind:13,params:{lx:.25,ly:.25,t:.04,hz:.6}},{name:"L字ﾌﾞﾗｹｯﾄ",kind:13,params:{lx:.4,ly:.4,t:.08,hz:.2}},{name:"L字ﾌﾟﾚｰﾄ",kind:13,params:{lx:.5,ly:.5,t:.12,hz:.03}},{name:"U字鋼",kind:14,params:{hw:.2,hh:.2,t:.04,hz:.6}},{name:"U字ﾌﾟﾚｰﾄ",kind:14,params:{hw:.35,hh:.3,t:.1,hz:.03}},{name:"チューブ",kind:15},{name:"U字チューブ",kind:16},{name:"階段",kind:17},{name:"螺旋階段",kind:18},{name:"Icoｽﾌｨｱ",kind:19},{name:"ヒンジ",kind:20,hinge:!0}],Hn=new Map($a.map(i=>[i.kindId,i]));new Map($a.map(i=>[i.key,i]));const VM=`
  float _b2(vec2 p, vec2 b){ vec2 d=abs(p)-b; return length(max(d,0.0))+min(max(d.x,d.y),0.0); }
  float _extr(float d2, float pz, float hz){ float wy=abs(pz)-hz; return min(max(d2,wy),0.0)+length(vec2(max(d2,0.0),max(wy,0.0))); }
  float _box3(vec3 p, vec3 b){ vec3 q=abs(p)-b; return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0); }
  float _cylZ(vec3 p, float r, float h){ float dr=length(p.xy)-r, dy=abs(p.z)-h; return min(max(dr,dy),0.0)+length(vec2(max(dr,0.0),max(dy,0.0))); }
  float _lprofile(vec3 p, float lx, float ly, float t, float hz){
    float h=_b2(vec2(p.x, p.y-(-ly*0.5+t*0.5)), vec2(lx*0.5,t*0.5));
    float v=_b2(vec2(p.x-(-lx*0.5+t*0.5), p.y), vec2(t*0.5, ly*0.5));
    return _extr(min(h,v), p.z, hz);
  }
  float _uprofile(vec3 p, float hw, float hh, float t, float hz){
    float bo=_b2(vec2(p.x, p.y-(-hh+t*0.5)), vec2(hw, t*0.5));
    float l=_b2(vec2(p.x-(-hw+t*0.5), p.y), vec2(t*0.5, hh));
    float r=_b2(vec2(p.x-(hw-t*0.5), p.y), vec2(t*0.5, hh));
    return _extr(min(bo,min(l,r)), p.z, hz);
  }
  float _hbeam(vec3 p, float hw, float hh, float ft, float wt, float hz){
    float top=_b2(vec2(p.x, p.y-(hh-ft*0.5)), vec2(hw, ft*0.5));
    float bot=_b2(vec2(p.x, p.y+(hh-ft*0.5)), vec2(hw, ft*0.5));
    float web=_b2(vec2(p.x, p.y), vec2(wt*0.5, hh-ft));
    return _extr(min(top,min(bot,web)), p.z, hz);
  }
  float _tube(vec3 p, float oR, float iR, float hh){
    vec2 od=vec2(length(p.xz)-oR, abs(p.y)-hh);
    float outer=min(max(od.x,od.y),0.0)+length(max(od,0.0));
    vec2 idv=vec2(length(p.xz)-iR, abs(p.y)-hh-0.01);
    float inner=min(max(idv.x,idv.y),0.0)+length(max(idv,0.0));
    return max(outer,-inner);
  }
  float _utube(vec3 p, float R, float r, float legLen){
    vec2 q=vec2(abs(p.x), p.y); float cl;
    if(q.y>0.0) cl=abs(length(q)-R);
    else { float cy=clamp(q.y,-legLen,0.0); cl=length(vec2(q.x-R, q.y-cy)); }
    return sqrt(cl*cl + p.z*p.z) - r;
  }
  float _stairs(vec3 p, float hw, float run, float rise, float nf){
    int n=int(nf); float d=1e9; float off=nf*run*0.5;
    for(int k=0;k<24;k++){ if(k>=n)break; float hy=float(k+1)*rise*0.5;
      d=min(d, _box3(vec3(p.x, p.y-hy, p.z-((float(k)+0.5)*run-off)), vec3(hw, hy, run*0.5))); }
    return d;
  }
  float _spiral(vec3 p, float nf, float rise, float oR, float angDeg, float iR, float th){
    int n=int(nf); float ang=radians(angDeg); float d=1e9; float wz=oR*sin(ang)*0.6;
    for(int k=0;k<48;k++){ if(k>=n)break; float A=-ang*float(k); float ca=cos(A), sa=sin(A);
      float qy=p.y-float(k)*rise; vec2 xz=vec2(ca*p.x - sa*p.z, sa*p.x + ca*p.z);
      d=min(d, _box3(vec3(xz.x-(iR+oR)*0.5, qy, xz.y), vec3((oR-iR)*0.5, th*0.5, wz))); }
    return d;
  }
  float _hingeLeaf(vec3 p, float plateLen, float t, float hw, float kr){
    float kn=_cylZ(p, kr, hw);
    float plate=_box3(vec3(p.x-(kr+plateLen*0.5), p.y, p.z), vec3(plateLen*0.5, t*0.5, hw));
    return min(kn, plate);
  }
`;function GM(){const i=$a.map(t=>t.glsl).join(`
      `);return`
  #define PI 3.141592653589793
  ${VM}
  float primitiveDist(int kind, vec3 p, vec4 a, vec4 b) {
      ${i}
      return 1e9;
  }`}function Gf(i){const t={};for(const e of i.params)t[e.key]=e.value;return t}let lp=1;function zr(i,t){const e=t.resolution,n=new fo(t.distance,e,e,e);n.format=_o,n.type=nn;const r=!!i.extensions.get("OES_texture_float_linear")?en:be;n.minFilter=n.magFilter=r,n.wrapS=n.wrapT=n.wrapR=$n,n.unpackAlignment=1,n.needsUpdate=!0;let o=null;return t.hasColor&&t.color&&(o=new fo(t.color,e,e,e),o.format=$e,o.type=Gn,o.minFilter=o.magFilter=en,o.wrapS=o.wrapT=o.wrapR=$n,o.unpackAlignment=4,o.needsUpdate=!0),{dist:n,color:o}}function Wf(i){return i&&Array.isArray(i.min)&&Array.isArray(i.max)&&i.min.length===3&&i.max.length===3&&i.min.every(Number.isFinite)&&i.max.every(Number.isFinite)}function WM(i){if(!i||!i.positions||i.positions.length<3)return null;const t=[1/0,1/0,1/0],e=[-1/0,-1/0,-1/0],n=i.positions;for(let s=0;s<n.length;s+=3){const r=n[s],o=n[s+1],a=n[s+2];r<t[0]&&(t[0]=r),r>e[0]&&(e[0]=r),o<t[1]&&(t[1]=o),o>e[1]&&(e[1]=o),a<t[2]&&(t[2]=a),a>e[2]&&(e[2]=a)}return t.every(Number.isFinite)&&e.every(Number.isFinite)?{min:t,max:e}:null}function XM(i){const t=i.resolution;if(!i.distance||!t||t<2)return null;const e=(i.max[0]-i.min[0])/(t-1),n=(i.max[1]-i.min[1])/(t-1),s=(i.max[2]-i.min[2])/(t-1),r=Math.max(Math.abs(e),Math.abs(n),Math.abs(s),1e-6),o=r*.5,a=[1/0,1/0,1/0],l=[-1/0,-1/0,-1/0];let c=0,u=!1;for(let f=0;f<t;f++){const h=i.min[2]+f*s;for(let d=0;d<t;d++){const g=i.min[1]+d*n;for(let _=0;_<t;_++,c++){if(i.distance[c]>o)continue;const p=i.min[0]+_*e;p<a[0]&&(a[0]=p),p>l[0]&&(l[0]=p),g<a[1]&&(a[1]=g),g>l[1]&&(l[1]=g),h<a[2]&&(a[2]=h),h>l[2]&&(l[2]=h),u=!0}}}if(!u)return null;for(let f=0;f<3;f++)a[f]=Math.max(i.min[f],a[f]-r),l[f]=Math.min(i.max[f],l[f]+r);return{min:a,max:l}}function cp(i){if(!i)return null;if(Wf(i.modelBounds))return i.modelBounds;const t=WM(i.mesh)||XM(i);return Wf(t)?(i.modelBounds=t,t):{min:i.min,max:i.max}}class Ji{constructor(t,e){this.id=lp++,this.kind=t,this.name=e,this.node=new ae,this.op="union",this.smoothK=0,this.color=new At(.9,.9,.91),this.volume=null,this.params={},this.array=Jc()}get isVolume(){return this.kind===Pi}get hasArray(){return this.array&&this.array.mode!=="none"}}function Jc(){return{mode:"none",nx:3,ny:1,nz:1,dx:1,dy:1,dz:1,count:6,radius:1}}class jM{constructor(t){this.renderer=t,this.group=new An,this.volumes=[],this.objects=[],this.onChange=()=>{}}notify(){this.onChange()}_allocSlot(){const t=new Set(this.volumes.map(e=>e.slot));for(let e=0;e<Kn;e++)if(!t.has(e))return e;return-1}addVolume(t){const e=this._allocSlot();if(e<0)throw new Error(`ボリュームは最大 ${Kn} 個までです`);const n=zr(this.renderer,t),s={data:t,distTex:n.dist,colorTex:n.color,slot:e};this.volumes.push(s);const r=new Ji(Pi,t.name||`volume ${this.objects.length+1}`);r.volume=s;const o=(t.min[0]+t.max[0])/2,a=(t.min[1]+t.max[1])/2,l=(t.min[2]+t.max[2])/2;return r.node.position.set(-o,-a,-l),r.node.updateMatrixWorld(!0),this.group.add(r.node),this.objects.push(r),this.notify(),r}addPrimitive(t,e){const n=Hn.get(t);if(!n)throw new Error(`未知のプリミティブ: ${t}`);const s=new Ji(t,n.name);return s.params=e?{...Gf(n),...e}:Gf(n),s.op="union",s.node.updateMatrixWorld(!0),this.group.add(s.node),this.objects.push(s),this.notify(),s}copyDescriptor(t){return{kind:t.kind,name:t.name,op:t.op,smoothK:t.smoothK,color:[t.color.r,t.color.g,t.color.b],params:{...t.params},array:{...t.array},pos:t.node.position.toArray(),quat:t.node.quaternion.toArray(),scale:t.node.scale.toArray(),volume:t.volume||null,volData:t.isVolume?t.volume.data:null}}pasteDescriptor(t){let e;if(t.kind===Pi)if(e=new Ji(Pi,`${t.name||"volume"} copy`),t.volume&&this.volumes.includes(t.volume))e.volume=t.volume;else{const r=this._allocSlot();if(r<0)throw new Error(`ボリュームは最大 ${Kn} 個までです`);const o=zr(this.renderer,t.volData),a={data:t.volData,distTex:o.dist,colorTex:o.color,slot:r};this.volumes.push(a),e.volume=a}else e=new Ji(t.kind,`${t.name||"prim"} copy`),e.params={...t.params};e.op=t.op,e.smoothK=t.smoothK||0,e.color.fromArray(t.color),e.array=t.array?{...t.array}:Jc(),e.node.position.fromArray(t.pos),e.node.quaternion.fromArray(t.quat),e.node.scale.fromArray(t.scale);let n=1;if(t.kind===Pi&&t.volData)n=Math.max(t.volData.max[0]-t.volData.min[0],t.volData.max[1]-t.volData.min[1],t.volData.max[2]-t.volData.min[2]);else{const r=Hn.get(t.kind);n=(r?r.bound(t.params||{})*2:1)||1}const s=n*.3*(Math.abs(e.node.scale.x)||1);return e.node.position.x+=s,e.node.position.z+=s,e.node.updateMatrixWorld(!0),this.group.add(e.node),this.objects.push(e),this.notify(),e}mergeToVolume(t,e){const n=t.map(c=>this.objects.indexOf(c)).filter(c=>c>=0),s=n.length?Math.min(...n):this.objects.length;for(const c of t)this.remove(c);const r=this._allocSlot();if(r<0)throw new Error(`ボリュームは最大 ${Kn} 個までです`);const o=zr(this.renderer,e),a={data:e,distTex:o.dist,colorTex:o.color,slot:r};this.volumes.push(a);const l=new Ji(Pi,e.name);return l.volume=a,l.op="union",l.node.updateMatrixWorld(!0),this.group.add(l.node),this.objects.splice(Math.min(s,this.objects.length),0,l),this.notify(),l}bakeReplace(t,e){const n=this.objects.indexOf(t),s=t.op,r=t.smoothK;this.remove(t);const o=this._allocSlot();if(o<0)throw new Error(`ボリュームは最大 ${Kn} 個までです`);const a=zr(this.renderer,e),l={data:e,distTex:a.dist,colorTex:a.color,slot:o};this.volumes.push(l);const c=new Ji(Pi,e.name);return c.volume=l,c.op=s,c.smoothK=r,c.node.updateMatrixWorld(!0),this.group.add(c.node),this.objects.splice(Math.min(n<0?this.objects.length:n,this.objects.length),0,c),this.notify(),c}remove(t){const e=this.objects.indexOf(t);if(!(e<0)){if(this.objects.splice(e,1),this.group.remove(t.node),t.isVolume&&t.volume&&!this.objects.some(s=>s.volume===t.volume)){t.volume.distTex.dispose(),t.volume.colorTex&&t.volume.colorTex.dispose();const s=this.volumes.indexOf(t.volume);s>=0&&this.volumes.splice(s,1)}this.notify()}}clear(){[...this.objects].forEach(t=>this.remove(t)),lp=1}worldBounds(){const t=new he,e=new he;return this.objects.forEach((n,s)=>{const r=this._localBounds(n);e.makeEmpty();for(let o=0;o<8;o++){const a=new A(o&1?r.max.x:r.min.x,o&2?r.max.y:r.min.y,o&4?r.max.z:r.min.z);a.applyMatrix4(n.node.matrixWorld),e.expandByPoint(a)}s===0||n.op==="union"?t.union(e):n.op==="intersect"&&(t.isEmpty()?t.copy(e):t.intersect(e))}),t.isEmpty()&&(t.min.set(-1,-1,-1),t.max.set(1,1,1)),t}objAABB(t){const e=this._localBounds(t),n=new he;t.node.updateMatrixWorld(!0);for(let s=0;s<8;s++){const r=new A(s&1?e.max.x:e.min.x,s&2?e.max.y:e.min.y,s&4?e.max.z:e.min.z);r.applyMatrix4(t.node.matrixWorld),n.expandByPoint(r)}return n}_localBounds(t){const e=new he;if(t.isVolume){const s=cp(t.volume.data);e.min.fromArray(s.min),e.max.fromArray(s.max)}else{const s=Hn.get(t.kind),r=(s?s.bound(t.params||{}):1)||1;e.min.set(-r,-r,-r),e.max.set(r,r,r)}const n=t.array;if(n&&n.mode==="grid")n.nx>1&&(e.max.x+=(n.nx-1)*n.dx),n.ny>1&&(e.max.y+=(n.ny-1)*n.dy),n.nz>1&&(e.max.z+=(n.nz-1)*n.dz);else if(n&&n.mode==="circular"){const s=Math.max(Math.abs(e.min.x),Math.abs(e.max.x),Math.abs(e.min.z),Math.abs(e.max.z)),r=n.radius+s;e.min.x=-r,e.max.x=r,e.min.z=-r,e.max.z=r}return e}serialize(){const t=this.volumes.map(s=>s.data),e=new Map(this.volumes.map((s,r)=>[s,r]));return{objects:this.objects.map(s=>{s.node.updateMatrix();const r={pos:s.node.position.toArray(),quat:s.node.quaternion.toArray(),scale:s.node.scale.toArray()},o={kind:s.kind,name:s.name,op:s.op,smoothK:s.smoothK,color:[s.color.r,s.color.g,s.color.b],transform:r,array:{...s.array}};return s.isVolume?o.volumeIndex=e.get(s.volume):o.params=s.params,o}),volumes:t}}loadSerialized({objects:t,volumes:e}){this.clear();const n=e.map(s=>{const r=this._allocSlot(),o=zr(this.renderer,s),a={data:s,distTex:o.dist,colorTex:o.color,slot:r};return this.volumes.push(a),a});for(const s of t){const r=new Ji(s.kind,s.name);r.op=s.op,r.smoothK=s.smoothK||0,r.array=s.array?{...s.array}:Jc(),s.color&&r.color.fromArray(s.color),r.node.position.fromArray(s.transform.pos),r.node.quaternion.fromArray(s.transform.quat),r.node.scale.fromArray(s.transform.scale),r.node.updateMatrixWorld(!0),s.kind===Pi?r.volume=n[s.volumeIndex]:r.params={...s.params||{}},this.group.add(r.node),this.objects.push(r)}this.notify()}}const qM=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function YM(i){return`
  precision highp float;
  precision highp sampler3D;
  layout(location = 0) out vec4 fragColor;
  varying vec2 vUv;

  #define MAX_VOLUMES ${Kn}
  #define MAX_OBJECTS ${Js}

  uniform sampler3D uVol0; uniform sampler3D uVol1; uniform sampler3D uVol2; uniform sampler3D uVol3;
  uniform sampler3D uVolC0; uniform sampler3D uVolC1; uniform sampler3D uVolC2; uniform sampler3D uVolC3;
  uniform vec3 uVolMin[MAX_VOLUMES];
  uniform vec3 uVolMax[MAX_VOLUMES];
  uniform int  uVolHasColor[MAX_VOLUMES];

  uniform int       uObjCount;
  uniform sampler2D uObjTex;   // 1オブジェクト=12テクセル(行)。uniform配列上限を回避し実質無制限に
  vec4 objTexel(int i, int c) { return texelFetch(uObjTex, ivec2(c, i), 0); }

  // タイル/クラスタ・カリング: 各タイルに重なるオブジェクトのビットマスク(256bit=uvec4×2)
  uniform highp usampler2D uTileMask;
  uniform int uTileSize;
  uniform int uTileCull;
  bool maskBitV(uvec4 m0, uvec4 m1, int i) {
    int w = i >> 5; uint bit = uint(i) & 31u; uint word;
    if (w == 0) word = m0.x; else if (w == 1) word = m0.y; else if (w == 2) word = m0.z; else if (w == 3) word = m0.w;
    else if (w == 4) word = m1.x; else if (w == 5) word = m1.y; else if (w == 6) word = m1.z; else word = m1.w;
    return ((word >> bit) & 1u) == 1u;
  }

  uniform vec3  uSceneMin;
  uniform vec3  uSceneMax;
  uniform float uMinStep;
  uniform float uNormalH;   // 法線(勾配)サンプリング幅。広めにして陰影を平滑化
  uniform int   uMaxSteps;
  uniform int   uShowColor;

  // ライティング(プリセットで変更)
  uniform vec3  uKeyDir; uniform vec3 uKeyColor;
  uniform vec3  uFillDir; uniform vec3 uFillColor;
  uniform vec3  uAmbient; uniform float uSpecGain; uniform float uSpecPow; uniform float uRimGain;
  uniform vec3  uBaseColor; // 非テクスチャ面の既定色(マテリアル)

  uniform vec3  uCameraPos;
  uniform mat4  uInvProjection;
  uniform mat4  uCameraWorld;

  // sampler 配列の動的添字は不可 → if/else で静的アクセス
  float volDist(int slot, vec3 uvw) {
    if (slot == 0) return texture(uVol0, uvw).r;
    if (slot == 1) return texture(uVol1, uvw).r;
    if (slot == 2) return texture(uVol2, uvw).r;
    return texture(uVol3, uvw).r;
  }
  vec3 volColor(int slot, vec3 uvw) {
    if (slot == 0) return texture(uVolC0, uvw).rgb;
    if (slot == 1) return texture(uVolC1, uvw).rgb;
    if (slot == 2) return texture(uVolC2, uvw).rgb;
    return texture(uVolC3, uvw).rgb;
  }

  ${i}

  float sminP(float a, float b, float k) {
    if (k <= 0.0) return min(a, b);
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }
  float smaxP(float a, float b, float k) { return -sminP(-a, -b, k); }

  // 配列モディファイア(ドメイン折り返し)
  vec3 applyArray(vec4 A, vec4 B, vec3 lp) {
    int mode = int(A.x + 0.5);
    if (mode == 1) {                 // グリッド: 個数 A.yzw, 間隔 B.xyz
      if (B.x > 0.0 && A.y > 1.0) lp.x -= B.x * clamp(floor(lp.x / B.x + 0.5), 0.0, A.y - 1.0);
      if (B.y > 0.0 && A.z > 1.0) lp.y -= B.y * clamp(floor(lp.y / B.y + 0.5), 0.0, A.z - 1.0);
      if (B.z > 0.0 && A.w > 1.0) lp.z -= B.z * clamp(floor(lp.z / B.z + 0.5), 0.0, A.w - 1.0);
    } else if (mode == 2) {          // 円形: 個数 A.y, 半径 B.x, Y軸まわり
      float cnt = max(A.y, 1.0);
      float seg = 6.28318530718 / cnt;
      float ang = atan(lp.z, lp.x);
      ang -= seg * floor(ang / seg + 0.5);
      float rad = length(lp.xz);
      lp.x = cos(ang) * rad - B.x; lp.z = sin(ang) * rad;
    }
    return lp;
  }

  // 1オブジェクトの距離(+色)。データはテクスチャから取得
  float objDist(int i, vec3 wp, out vec3 col, out bool textured) {
    mat4 inv = mat4(objTexel(i, 0), objTexel(i, 1), objTexel(i, 2), objTexel(i, 3));
    vec4 cs = objTexel(i, 4);     // rgb=色(未使用), w=スケール
    vec4 meta = objTexel(i, 11);  // x=kind, y=volSlot, z=op, w=smoothK
    int kind = int(meta.x + 0.5);
    vec3 lp = applyArray(objTexel(i, 7), objTexel(i, 8), (inv * vec4(wp, 1.0)).xyz);
    float d;
    textured = false;
    if (kind == 0) {                      // ボリューム
      int slot = int(meta.y + 0.5);
      vec3 mn = uVolMin[slot], mx = uVolMax[slot];
      vec3 uvw = (lp - mn) / (mx - mn);
      float raw = volDist(slot, clamp(uvw, 0.0, 1.0));
      vec3 q = max(max(mn - lp, lp - mx), vec3(0.0));   // 箱外の距離
      d = (raw + length(q)) * cs.w;
      if (uVolHasColor[slot] == 1) { col = pow(volColor(slot, clamp(uvw, 0.0, 1.0)), vec3(2.2)); textured = true; }
      else col = uBaseColor;
    } else {                              // プリミティブ(グローバル表面色)
      d = primitiveDist(kind, lp, objTexel(i, 5), objTexel(i, 6)) * cs.w;
      col = uBaseColor;
    }
    return d;
  }

  float sceneD(vec3 wp) {
    float d = 1e9;
    bool tileOn = uTileCull == 1;
    uvec4 M0 = uvec4(0u), M1 = uvec4(0u);
    if (tileOn) { int tx = int(gl_FragCoord.x) / uTileSize; int ty = int(gl_FragCoord.y) / uTileSize; M0 = texelFetch(uTileMask, ivec2(tx * 2, ty), 0); M1 = texelFetch(uTileMask, ivec2(tx * 2 + 1, ty), 0); }
    for (int i = 0; i < uObjCount; i++) {   // 上限はuniform(動的)。FXCの展開を抑止(CPU側で uObjCount<=MAX_OBJECTS を保証)
      if (tileOn && !maskBitV(M0, M1, i)) continue; // タイル外の union/subtract を一括スキップ
      vec4 meta = objTexel(i, 11); int op = int(meta.z + 0.5); float k = meta.w;
      if (i == 0) { vec3 c; bool t; d = objDist(i, wp, c, t); continue; }
      // 空間カリング(boxDistAABB)は撤去。D3D11/FXCでシェーダコンパイルが数十秒に膨張し
      // ブラウザごと固まる(texelFetch+データ依存continueがFXCに致命的)。画面空間のタイルカリングのみ使用。
      if (op == 0) {            // union
        vec3 c; bool t; d = sminP(d, objDist(i, wp, c, t), k);
      } else if (op == 1) {     // subtract
        vec3 c; bool t; d = smaxP(d, -objDist(i, wp, c, t), k);
      } else {                  // intersect
        vec3 c; bool t; d = smaxP(d, objDist(i, wp, c, t), k);
      }
    }
    return d;
  }

  float sceneDC(vec3 wp, out vec3 col) {
    float d = 1e9; col = uBaseColor;
    bool tileOn = uTileCull == 1;
    uvec4 M0 = uvec4(0u), M1 = uvec4(0u);
    if (tileOn) { int tx = int(gl_FragCoord.x) / uTileSize; int ty = int(gl_FragCoord.y) / uTileSize; M0 = texelFetch(uTileMask, ivec2(tx * 2, ty), 0); M1 = texelFetch(uTileMask, ivec2(tx * 2 + 1, ty), 0); }
    for (int i = 0; i < uObjCount; i++) {   // 上限はuniform(動的)。FXCの展開を抑止
      if (tileOn && !maskBitV(M0, M1, i)) continue;
      vec4 meta = objTexel(i, 11); int op = int(meta.z + 0.5); float k = meta.w;
      if (i == 0) { vec3 c; bool t; d = objDist(i, wp, c, t); if (uShowColor == 0 && t) c = uBaseColor; col = c; continue; }
      // 空間カリング撤去(sceneDと同理由)。タイルカリングのみ。
      if (op == 0) {
        vec3 c; bool t; float di = objDist(i, wp, c, t); if (uShowColor == 0 && t) c = uBaseColor;
        if (di < d) col = c; d = sminP(d, di, k);
      } else if (op == 1) {
        vec3 c; bool t; d = smaxP(d, -objDist(i, wp, c, t), k);
      } else {
        vec3 c; bool t; float di = objDist(i, wp, c, t); if (uShowColor == 0 && t) c = uBaseColor;
        if (di > d) col = c; d = smaxP(d, di, k);
      }
    }
    return d;
  }

  // 法線: 画面微分(dFdx/dFdy)で表面の幾何法線を求める。sceneD を一度も呼ばないため
  // primitiveDist のインライン箇所が 6→2 に激減し、ANGLE/D3D11(FXC)のシェーダコンパイルが
  // 71秒→約7秒に短縮(=ブラウザごと固まる主因を解消)。テトラ法(sceneD×4)はFXCで超線形に膨張するため不可。
  vec3 calcNormal(vec3 p) {
    vec3 gx = dFdx(p), gy = dFdy(p);
    float lx = length(gx), ly = length(gy);
    if (lx < 1e-30 || ly < 1e-30) return vec3(0.0, 1.0, 0.0); // 片方向に変化なし(エッジ等)→NaN回避
    // 接ベクトルを正規化してから外積。外積の大きさ(~sinθ)が物体スケールに依らず O(1) になり、
    // 小さい物体/カメラ近接で外積が極小→退化(法線が定数化して白飛び)するのを防ぐ。
    vec3 n = cross(gx / lx, gy / ly);
    float L = length(n);
    return (L > 1e-4) ? n / L : vec3(0.0, 1.0, 0.0); // 接線が平行(シルエット等)
  }

  vec2 intersectBox(vec3 ro, vec3 rd) {
    vec3 inv = 1.0 / rd;
    vec3 t0 = (uSceneMin - ro) * inv;
    vec3 t1 = (uSceneMax - ro) * inv;
    vec3 tmin = min(t0, t1), tmax = max(t0, t1);
    return vec2(max(max(tmin.x, tmin.y), tmin.z), min(min(tmax.x, tmax.y), tmax.z));
  }

  void main() {
    if (uObjCount == 0) discard;
    vec2 ndc = vUv * 2.0 - 1.0;
    // near/far から復元(透視・正投影どちらでも正しいレイになる)
    vec4 nh = uInvProjection * vec4(ndc, -1.0, 1.0); nh /= nh.w;
    vec4 fh = uInvProjection * vec4(ndc,  1.0, 1.0); fh /= fh.w;
    vec3 rd = normalize((uCameraWorld * vec4(fh.xyz - nh.xyz, 0.0)).xyz);
    vec3 ro = (uCameraWorld * vec4(nh.xyz, 1.0)).xyz;

    vec2 tb = intersectBox(ro, rd);
    if (tb.y < max(tb.x, 0.0)) discard;

    float minStep = uMinStep;
    float eps = minStep * 0.5;
    float t = max(tb.x, 0.0) + eps;
    bool hit = false; vec3 p = ro + rd * t;
    float tPrev = t, dPrev = 1e9;   // 直前ステップ(ヒット点を小数精度で補間)
    for (int i = 0; i < uMaxSteps; i++) {   // 上限はuniform(動的)。FXC(D3D/ANGLE)のループ展開を抑止しコンパイルハングを回避
      p = ro + rd * t;
      float d = sceneD(p);
      if (d < eps) {
        // 直前(dPrev)と現在(d)の線形補間で表面位置を小数精度に補正。追加のsceneD評価ゼロ。
        // ヒット点がステップ量子化でブレなくなり、画面微分(dFdx)法線のザラつきを大幅に低減。
        float denom = dPrev - d;
        if (denom > 1e-6) t = clamp(tPrev + (t - tPrev) * dPrev / denom, tPrev, t + (t - tPrev) * 4.0);
        p = ro + rd * t;
        hit = true; break;
      }
      tPrev = t; dPrev = d;
      t += max(d * 0.7, minStep); // 安全係数(彫刻で非SDF化した場の飛び越え=穴を防ぐ)
      if (t > tb.y) break;
    }
    if (!hit) discard;

    vec3 n = calcNormal(p);
    if (dot(n, rd) > 0.0) n = -n; // 画面微分法線は向きが不定 → 視線(rd)に対して手前向きへ
    vec3 albedo; sceneDC(p, albedo);

    vec3 viewDir = -rd;
    float kd = max(dot(n, uKeyDir), 0.0);
    float fd = max(dot(n, uFillDir), 0.0);
    vec3 lit = uAmbient + uKeyColor * kd + uFillColor * fd;
    vec3 col = albedo * lit;
    // スペキュラ(キーライト色で色付け)
    vec3 hlf = normalize(uKeyDir + viewDir);
    col += uKeyColor * (pow(max(dot(n, hlf), 0.0), uSpecPow) * uSpecGain);
    // リム
    col += pow(1.0 - max(dot(n, viewDir), 0.0), 4.0) * uRimGain;
    fragColor = vec4(pow(col, vec3(0.4545)), 1.0);
  }
  `}class KM{constructor(t,e=GM()){this.renderer=t,this.scene=new Su,this.camera=new _r(-1,1,1,-1,0,1);const n=(s,r)=>Array.from({length:s},r);this.material=new _i({vertexShader:qM,fragmentShader:YM(e),glslVersion:qc,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uVol0:{value:null},uVol1:{value:null},uVol2:{value:null},uVol3:{value:null},uVolC0:{value:null},uVolC1:{value:null},uVolC2:{value:null},uVolC3:{value:null},uVolMin:{value:n(Kn,()=>new A)},uVolMax:{value:n(Kn,()=>new A(1,1,1))},uVolHasColor:{value:new Int32Array(Kn)},uObjCount:{value:0},uObjTex:{value:null},uTileMask:{value:null},uTileSize:{value:32},uTileCull:{value:1},uSceneMin:{value:new A(-1,-1,-1)},uSceneMax:{value:new A(1,1,1)},uMinStep:{value:.01},uNormalH:{value:.02},uMaxSteps:{value:512},uShowColor:{value:1},uKeyDir:{value:new A(.5,.85,.6).normalize()},uKeyColor:{value:new A(.85,.85,.85)},uFillDir:{value:new A(-.5,.35,-.45).normalize()},uFillColor:{value:new A(.32,.32,.34)},uAmbient:{value:new A(.28,.28,.3)},uSpecGain:{value:.14},uSpecPow:{value:28},uRimGain:{value:.06},uBaseColor:{value:new A(.9,.9,.91)},uCameraPos:{value:new A},uInvProjection:{value:new pt},uCameraWorld:{value:new pt}}}),this.quad=new st(new ds(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad),this._sceneRef=null,this._dDist=new fo(new Float32Array([1]),1,1,1),this._dDist.format=_o,this._dDist.type=nn,this._dDist.needsUpdate=!0,this._dColor=new fo(new Uint8Array([200,200,200,255]),1,1,1),this._dColor.format=$e,this._dColor.type=Gn,this._dColor.unpackAlignment=4,this._dColor.needsUpdate=!0;for(const s of["uVol0","uVol1","uVol2","uVol3"])this.material.uniforms[s].value=this._dDist;for(const s of["uVolC0","uVolC1","uVolC2","uVolC3"])this.material.uniforms[s].value=this._dColor;this._objTex=null,this._objTexData=null,this._objTexH=0,this._objDummy=new Gs(new Float32Array(4),1,1,$e,nn),this._objDummy.minFilter=be,this._objDummy.magFilter=be,this._objDummy.needsUpdate=!0,this.material.uniforms.uObjTex.value=this._objDummy,this._baseMinStep=.01,this._tileSize=32,this._tileTex=null,this._tileData=null,this._tileTexW=0,this._tileTexH=0,this._tmpSize=new dt,this._tmpVP=new pt,this._tmpV4=new Jt,this._tileDummy=new Gs(new Uint32Array(4),1,1,lo,gi),this._tileDummy.internalFormat="RGBA32UI",this._tileDummy.minFilter=this._tileDummy.magFilter=be,this._tileDummy.needsUpdate=!0,this.material.uniforms.uTileMask.value=this._tileDummy}setShowColor(t){this.material.uniforms.uShowColor.value=t?1:0}setTileCull(t){this.material.uniforms.uTileCull.value=t?1:0,t||(this.material.uniforms.uTileMask.value=this._tileDummy)}_updateTileMask(t,e){const n=this._sceneRef;if(!n)return;const s=t.getDrawingBufferSize(this._tmpSize),r=Math.max(1,Math.floor(s.x)),o=Math.max(1,Math.floor(s.y)),a=this._tileSize,l=Math.ceil(r/a),c=Math.ceil(o/a),u=l*2,f=c;!this._tileTex||this._tileTexW!==u||this._tileTexH!==f?(this._tileTex&&this._tileTex.dispose(),this._tileData=new Uint32Array(u*f*4),this._tileTex=new Gs(this._tileData,u,f,lo,gi),this._tileTex.internalFormat="RGBA32UI",this._tileTex.minFilter=this._tileTex.magFilter=be,this._tileTexW=u,this._tileTexH=f):this._tileData.fill(0),this.material.uniforms.uTileMask.value=this._tileTex,this.material.uniforms.uTileSize.value=a;const h=this._tileData,d=(x,y,v)=>{const E=v>>5,b=x*2+(E>>2),S=E&3;h[(y*u+b)*4+S]|=1<<(v&31)},g=x=>{for(let y=0;y<c;y++)for(let v=0;v<l;v++)d(v,y,x)};e.updateMatrixWorld(),this._tmpVP.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const _=this._tmpVP,p=this._tmpV4,m=Math.min(n.objects.length,Js);for(let x=0;x<m;x++){const y=n.objects[x];if(x===0||y.op==="intersect"){g(x);continue}const v=n.objAABB(y);let E=1/0,b=1/0,S=-1/0,C=-1/0,P=!1;for(let U=0;U<8;U++){if(p.set(U&1?v.max.x:v.min.x,U&2?v.max.y:v.min.y,U&4?v.max.z:v.min.z,1).applyMatrix4(_),p.w<=1e-6){P=!0;break}const B=(p.x/p.w*.5+.5)*r,F=(p.y/p.w*.5+.5)*o;E=Math.min(E,B),S=Math.max(S,B),b=Math.min(b,F),C=Math.max(C,F)}if(P){g(x);continue}if(S<0||E>r||C<0||b>o)continue;const M=Math.max(0,Math.floor(E/a)),w=Math.min(l-1,Math.floor(S/a)),I=Math.max(0,Math.floor(b/a)),D=Math.min(c-1,Math.floor(C/a));for(let U=I;U<=D;U++)for(let B=M;B<=w;B++)d(B,U,x)}this._tileTex.needsUpdate=!0}setLighting(t){const e=this.material.uniforms;e.uKeyDir.value.fromArray(t.keyDir).normalize(),e.uKeyColor.value.fromArray(t.keyColor),e.uFillDir.value.fromArray(t.fillDir).normalize(),e.uFillColor.value.fromArray(t.fillColor),e.uAmbient.value.fromArray(t.ambient),e.uSpecGain.value=t.specGain,e.uSpecPow.value=t.specPow,e.uRimGain.value=t.rimGain}bindScene(t){this._sceneRef=t}warmup(t){try{if(t.compileAsync)return t.compileAsync(this.scene,this.camera)}catch{}return Promise.resolve()}sync(){const t=this._sceneRef;if(!t)return;const e=this.material.uniforms,n=["uVol0","uVol1","uVol2","uVol3"],s=["uVolC0","uVolC1","uVolC2","uVolC3"];for(let g=0;g<Kn;g++)e[n[g]].value=this._dDist,e[s[g]].value=this._dColor,e.uVolHasColor.value[g]=0;for(const g of t.volumes){const _=g.slot;e[n[_]].value=g.distTex,e[s[_]].value=g.colorTex||this._dColor,e.uVolMin.value[_].fromArray(g.data.min),e.uVolMax.value[_].fromArray(g.data.max),e.uVolHasColor.value[_]=g.colorTex?1:0}const r=Math.min(t.objects.length,Js);e.uObjCount.value=r;const o=12,a=Math.max(r,1);(!this._objTex||this._objTexH<a)&&(this._objTex&&this._objTex.dispose(),this._objTexData=new Float32Array(o*a*4),this._objTex=new Gs(this._objTexData,o,a,$e,nn),this._objTex.minFilter=be,this._objTex.magFilter=be,this._objTex.needsUpdate=!0,this._objTexH=a,e.uObjTex.value=this._objTex);const l=this._objTexData,c=this._tmpM||(this._tmpM=new pt),u=this._tmpV||(this._tmpV=new A);for(let g=0;g<r;g++){const _=t.objects[g];_.node.updateMatrixWorld(!0);const p=g*o*4;c.copy(_.node.matrixWorld).invert();for(let C=0;C<16;C++)l[p+C]=c.elements[C];const m=_.node.scale,x=Math.max(Math.min(Math.abs(m.x),Math.abs(m.y),Math.abs(m.z)),1e-5);if(l[p+16]=_.color?_.color.r:.9,l[p+17]=_.color?_.color.g:.9,l[p+18]=_.color?_.color.b:.91,l[p+19]=x,_.isVolume)for(let C=20;C<28;C++)l[p+C]=0;else{const C=Hn.get(_.kind),P=C?C.pack(_.params||{}):{a:[0,0,0,0],b:[0,0,0,0]};l[p+20]=P.a[0],l[p+21]=P.a[1],l[p+22]=P.a[2],l[p+23]=P.a[3],l[p+24]=P.b[0],l[p+25]=P.b[1],l[p+26]=P.b[2],l[p+27]=P.b[3]}const y=_.array||{mode:"none"};let v=[0,0,0,0],E=[0,0,0,0];y.mode==="grid"?(v=[1,y.nx,y.ny,y.nz],E=[y.dx,y.dy,y.dz,0]):y.mode==="circular"&&(v=[2,y.count,0,0],E=[y.radius,0,0,0]),l[p+28]=v[0],l[p+29]=v[1],l[p+30]=v[2],l[p+31]=v[3],l[p+32]=E[0],l[p+33]=E[1],l[p+34]=E[2],l[p+35]=E[3];const b=t.objAABB(_),S=b.getSize(u).length()*.02+.001;l[p+36]=b.min.x-S,l[p+37]=b.min.y-S,l[p+38]=b.min.z-S,l[p+39]=0,l[p+40]=b.max.x+S,l[p+41]=b.max.y+S,l[p+42]=b.max.z+S,l[p+43]=0,l[p+44]=_.kind,l[p+45]=_.isVolume?_.volume.slot:0,l[p+46]=LM[_.op]??0,l[p+47]=_.smoothK||0}this._objTex.needsUpdate=!0;const f=t.worldBounds(),h=f.getSize(new A).length()*.02;e.uSceneMin.value.copy(f.min).subScalar(h),e.uSceneMax.value.copy(f.max).addScalar(h);let d=1/0;for(const g of t.volumes){const _=g.data,p=(_.max[0]-_.min[0])/(_.resolution-1),m=(_.max[1]-_.min[1])/(_.resolution-1),x=(_.max[2]-_.min[2])/(_.resolution-1);d=Math.min(d,p,m,x)}isFinite(d)||(d=f.getSize(new A).length()/256),this._baseMinStep=Math.max(d*.4,1e-5),e.uMinStep.value=this._baseMinStep,e.uNormalH.value=Math.max(d*1,1e-5)}render(t,e,n=1){this.sync();const s=this.material.uniforms;s.uCameraPos.value.copy(e.position),s.uInvProjection.value.copy(e.projectionMatrixInverse),s.uCameraWorld.value.copy(e.matrixWorld),s.uTileCull.value===1&&this._updateTileMask(t,e),n<1?(s.uMaxSteps.value=Math.max(48,Math.round(512*n)),s.uMinStep.value=this._baseMinStep/n):(s.uMaxSteps.value=512,s.uMinStep.value=this._baseMinStep),t.render(this.scene,this.camera)}}class $M{constructor(){this.group=new An,this.cellSize=.1,this.minorCells=100,this._build()}_build(){this.group.clear();const t=this.cellSize*this.minorCells,e=Math.max(1,Math.round(this.minorCells/10)),n=new Lf(t,this.minorCells,2764602,2238002),s=new Lf(t,e,4871528,3752271);s.position.y=5e-4,n.material.transparent=s.material.transparent=!0,n.material.opacity=.5,s.material.opacity=.9,this.group.add(n,s);const r=new aM(t*.5);this.group.add(r),this.span=t}setCellSize(t){this.cellSize=Math.max(1e-4,t),this._build()}legend(t=1e3){const e=n=>`${Number.parseFloat(n.toFixed(n<10?2:n<100?1:0)).toLocaleString()}mm`;return`細 1マス=${e(this.cellSize*t)} / 太 1マス=${e(this.cellSize*10*t)} / 全体 ${e(this.span*t)}`}}function ZM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new de;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Xf(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);const g=Xf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Xf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Ee(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const _=u.getComponent(h,g);a.setComponent(h+f,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function jf(i,t){if(t===Fm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Xc||t===Ld){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Xc)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class QM extends Mr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ib(e)}),this.register(function(e){return new sb(e)}),this.register(function(e){return new db(e)}),this.register(function(e){return new pb(e)}),this.register(function(e){return new mb(e)}),this.register(function(e){return new ob(e)}),this.register(function(e){return new ab(e)}),this.register(function(e){return new lb(e)}),this.register(function(e){return new cb(e)}),this.register(function(e){return new nb(e)}),this.register(function(e){return new ub(e)}),this.register(function(e){return new rb(e)}),this.register(function(e){return new fb(e)}),this.register(function(e){return new hb(e)}),this.register(function(e){return new tb(e)}),this.register(function(e){return new gb(e)}),this.register(function(e){return new _b(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=eo.extractUrlBase(t);o=eo.resolveURL(c,this.path)}else o=eo.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new sp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===up){try{o[Vt.KHR_BINARY_GLTF]=new xb(t)}catch(f){s&&s(f);return}r=JSON.parse(o[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Lb(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Vt.KHR_MATERIALS_UNLIT:o[f]=new eb;break;case Vt.KHR_DRACO_MESH_COMPRESSION:o[f]=new yb(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:o[f]=new vb;break;case Vt.KHR_MESH_QUANTIZATION:o[f]=new Mb;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function JM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tb{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const u=new At(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xe);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new rp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Kv(u),c.distance=f;break;case"spot":c=new qv(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class eb{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Tn}extendParams(t,e,n){const s=[];t.color=new At(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Xe),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Je))}return Promise.all(s)}}class nb{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class ib{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new dt(a,a)}return Promise.all(r)}}class sb{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class rb{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ob{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new At(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Xe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Je)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ab{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class lb{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new At().setRGB(a[0],a[1],a[2],Xe),Promise.all(r)}}class cb{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ub{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new At().setRGB(a[0],a[1],a[2],Xe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Je)),Promise.all(r)}}class hb{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class fb{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class db{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class pb{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class mb{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class gb{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class _b{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new pt,p=new A,m=new Ie,x=new A(1,1,1),y=new Av(g.geometry,g.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(p,m,x));for(const v in l)if(v==="_COLOR_0"){const E=l[v];y.instanceColor=new Kc(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ae.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const up="glTF",kr=12,qf={JSON:1313821514,BIN:5130562};class xb{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,kr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-kr,r=new DataView(t,kr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===qf.JSON){const c=new Uint8Array(t,kr+o,a);this.content=n.decode(c)}else if(l===qf.BIN){const c=kr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yb{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=tu[u]||u.toLowerCase();a[f]=o[u]}for(const u in t.attributes){const f=tu[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[t.attributes[u]],d=tr[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}f(d)},a,c,Xe,h)})})}}class vb{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Mb{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class hp extends vo{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-e,f=(n-e)/u,h=f*f,d=h*f,g=t*c,_=g-c,p=-2*d+3*h,m=d-h,x=1-p,y=m-h+f;for(let v=0;v!==a;v++){const E=o[_+v+a],b=o[_+v+l]*u,S=o[g+v+a],C=o[g+v]*u;r[v]=x*E+y*b+p*S+m*C}return r}}const bb=new Ie;class Sb extends hp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return bb.fromArray(r).normalize().toArray(r),r}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yf={9728:be,9729:en,9984:Md,9985:ba,9986:Kr,9987:hi},Kf={33071:$n,33648:Na,10497:sr},jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Eb={CUBICSPLINE:void 0,LINEAR:uo,STEP:co},ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new yo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),i.DefaultMaterial}function ts(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ui(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Tb(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,u=t.length;c<u;c++){const f=t[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const f=t[c];if(n){const h=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Ab(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rb(i){let t;const e=i.extensions&&i.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Yl(e.attributes):t=i.indices+":"+Yl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Yl(i.targets[n]);return t}function Yl(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function eu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Pb=new pt;class Lb{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new JM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Wv(this.options.manager):this.textureLoader=new Zv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ts(r,a,s),ui(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(eo.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=jl[s.type],a=tr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ee(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=jl[s.type],c=tr[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(d&&d!==f){const m=Math.floor(h/d),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=e.cache.get(x);y||(_=new c(a,m*d,s.count*d/u),y=new Kd(_,d/u),e.cache.add(x,y)),p=new po(y,l,h%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),p=new Ee(_,l,g);if(s.sparse!==void 0){const m=jl.SCALAR,x=tr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new x(o[1],y,s.sparse.count*m),b=new c(o[2],v,s.sparse.count*l);a!==null&&(p=new Ee(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let S=0,C=E.length;S<C;S++){const P=E[S];if(p.setX(P,b[S*l]),l>=2&&p.setY(P,b[S*l+1]),l>=3&&p.setZ(P,b[S*l+2]),l>=4&&p.setW(P,b[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Yf[h.magFilter]||en,u.minFilter=Yf[h.minFilter]||hi,u.wrapS=Kf[h.wrapS]||sr,u.wrapT=Kf[h.wrapT]||sr,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const o=s.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;e.isImageBitmapLoader===!0&&(g=function(_){const p=new Oe(_);p.needsUpdate=!0,h(p)}),e.load(eo.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),ui(f,o),f.userData.mimeType=o.mimeType||Cb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Jd,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Vi,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return yo}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[Vt.KHR_MATERIALS_UNLIT]){const f=s[Vt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,e))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new At(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Xe),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",f.baseColorTexture,Je)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=cn);const u=r.alphaMode||ql.OPAQUE;if(u===ql.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ql.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Tn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new dt(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Tn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Tn){const f=r.emissiveFactor;a.emissive=new At().setRGB(f[0],f[1],f[2],Xe)}return r.emissiveTexture!==void 0&&o!==Tn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Je)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),ui(f,r),e.associations.set(f,{materials:t}),r.extensions&&ts(s,f,r),f})}createUniqueName(t){const e=oe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return $f(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=Rb(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=$f(new de,c,e),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?wb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=o[d];let m;const x=c[d];if(p.mode===bn.TRIANGLES||p.mode===bn.TRIANGLE_STRIP||p.mode===bn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Ev(_,x):new st(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===bn.TRIANGLE_STRIP?m.geometry=jf(m.geometry,Ld):p.mode===bn.TRIANGLE_FAN&&(m.geometry=jf(m.geometry,Xc));else if(p.mode===bn.LINES)m=new xo(_,x);else if(p.mode===bn.LINE_STRIP)m=new Sn(_,x);else if(p.mode===bn.LINE_LOOP)m=new Rv(_,x);else if(p.mode===bn.POINTS)m=new Cv(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ab(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),ui(m,r),p.extensions&&ts(s,m,p),e.assignFinalMaterial(m),f.push(m)}for(let d=0,g=f.length;d<g;d++)e.associations.set(f[d],{meshes:t,primitives:d});if(f.length===1)return r.extensions&&ts(s,f[0],r),f[0];const h=new An;r.extensions&&ts(s,h,r),e.associations.set(h,{meshes:t});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new tn(ka.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new _r(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ui(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new pt;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Eu(a,l)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],g=s.samplers[d.sampler],_=d.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],_=f[3],p=f[4],m=[];for(let x=0,y=h.length;x<y;x++){const v=h[x],E=d[x],b=g[x],S=_[x],C=p[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const P=n._createAnimationTracks(v,E,b,S,C);if(P)for(let M=0;M<P.length;M++)m.push(P[M])}return new Bv(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Pb)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Qd:c.length>1?u=new An:c.length===1?u=c[0]:u=new ae,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),ui(u,r),r.extensions&&ts(n,u,r),r.matrix!==void 0){const f=new pt;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new An;n.name&&(r.name=s.createUniqueName(n.name)),ui(r,n),n.extensions&&ts(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof kn||h instanceof Oe)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,l=[];Ri[r.path]===Ri.weights?t.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ri[r.path]){case Ri.weights:c=cr;break;case Ri.rotation:c=ur;break;case Ri.position:case Ri.scale:c=hr;break;default:switch(n.itemSize){case 1:c=cr;break;case 2:case 3:default:c=hr;break}break}const u=s.interpolation!==void 0?Eb[s.interpolation]:uo,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+Ri[r.path],e.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=eu(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof ur?Sb:hp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ib(i,t,e){const n=t.attributes,s=new he;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const u=eu(tr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new A,l=new A;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=e.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=eu(tr[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new hn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function $f(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=tu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qt.workingColorSpace!==Xe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),ui(i,t),Ib(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Tb(i,t.targets,e):i})}function Db(i){return String(i||"").split("#")[0].split("?")[0]}function no(i){let t=Db(i).replace(/\\/g,"/");try{/^[a-z][a-z0-9+.-]*:/i.test(t)&&!/^[a-z]:/i.test(t)&&(t=new URL(t,window.location.href).pathname)}catch{}try{t=decodeURIComponent(t)}catch{}for(t=t.replace(/^\/+/,"");t.startsWith("./");)t=t.slice(2);return t}function Ub(i){return no(i).split("/").pop()}function Nb(i){const t=no(i),e=t.lastIndexOf("/");return e>=0?t.slice(0,e+1):""}function Fb(i){return/^(data:|blob:|https?:)/i.test(String(i||""))}function Ob({assetFiles:i=[]}={}){const t=new ip,e=new Map,n=new Map,s=new Map,r=new Set;for(const o of i){const a=no(o.webkitRelativePath||o.name).toLowerCase();a&&n.set(a,o),s.set(o.name.toLowerCase(),o)}return i.length&&t.setURLModifier(o=>{if(Fb(o))return o;const a=no(o).toLowerCase(),l=n.get(a)||s.get(Ub(a).toLowerCase());return l?(e.has(l)||e.set(l,URL.createObjectURL(l)),e.get(l)):(a&&r.add(no(o)),o)}),{loader:new QM(t),missing:r,dispose(){for(const o of e.values())URL.revokeObjectURL(o);e.clear()}}}function Bb(i){const t=i.width||i.naturalWidth,e=i.height||i.naturalHeight;if(!t||!e)return null;const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d",{willReadFrequently:!0});s.drawImage(i,0,0,t,e);const r=s.getImageData(0,0,t,e);return{data:new Uint8Array(r.data.buffer.slice(0)),width:t,height:e}}async function zb(i,{assetFiles:t=[],rootPath:e=""}={}){const{loader:n,missing:s,dispose:r}=Ob({assetFiles:t});try{const o=await n.parseAsync(i,Nb(e));o.scene.updateMatrixWorld(!0);const a=[];let l=null;if(o.scene.traverse(_=>{if(!_.isMesh||!_.geometry)return;!l&&_.material&&_.material.map&&_.material.map.image&&(l=_.material.map.image);const p=_.geometry,m=p.getAttribute("position");if(!m)return;const x=new de;x.setAttribute("position",m.clone());const y=p.getAttribute("uv");y?x.setAttribute("uv",y.clone()):x.setAttribute("uv",new Ee(new Float32Array(m.count*2),2)),p.index&&x.setIndex(p.index.clone()),x.applyMatrix4(_.matrixWorld),a.push(x)}),a.length===0)throw new Error("メッシュが見つかりませんでした");const c=a.some(_=>_.index),u=a.every(_=>_.index);let f=a;c&&!u&&(f=a.map(_=>_.index?_.toNonIndexed():_));const h=f.length===1?f[0]:ZM(f,!1);if(!h)throw new Error("ジオメトリのマージに失敗しました");h.computeBoundingBox(),h.computeVertexNormals();let d=null;if(l)try{d=Bb(l)}catch(_){console.warn("テクスチャの取得に失敗:",_)}const g=o.scene;return{merged:h,display:g,texture:d}}catch(o){throw s.size?new Error(`GLTFの外部ファイルが見つかりません: ${Array.from(s).join(", ")}。gltf本体と関連する .bin/画像を一緒に選択またはドロップしてください。`):o}finally{r()}}function kb(i,{resolution:t=128,signRays:e=3,name:n="volume",padding:s=.06,assetFiles:r=[],rootPath:o="",onProgress:a}={}){return new Promise((l,c)=>{zb(i,{assetFiles:r,rootPath:o}).then(({merged:u,texture:f})=>{const h=u.getAttribute("position"),d=new Float32Array(h.array),g=u.index?new Uint32Array(u.index.array):null,_=u.getAttribute("uv"),p=_&&f?new Float32Array(_.array):null,m=u.boundingBox,x=m.max.x-m.min.x,y=m.max.y-m.min.y,v=m.max.z-m.min.z,b=(Math.max(x,y,v)||1)*s,S=[m.min.x-b,m.min.y-b,m.min.z-b],C=[m.max.x+b,m.max.y+b,m.max.z+b],P=t,M=typeof navigator<"u"&&navigator.hardwareConcurrency||4,w=Math.max(1,Math.min(M,8,P)),I=[],D=Math.ceil(P/w);for(let Et=0;Et<P;Et+=D)I.push([Et,Math.min(Et+D,P)]);const U=I.length,B=new Float32Array(P*P*P),F=p&&f?new Uint8Array(P*P*P*4):null,q=new Array(U).fill(0);let H=0,Z=!1;const nt=[],rt=()=>nt.forEach(Et=>Et.terminate());I.forEach((Et,Ct)=>{const X=new Worker(new URL(""+new URL("sdfWorker-E1l5evMg.js",import.meta.url).href,import.meta.url),{type:"module"});nt.push(X);const Q=new Float32Array(d),gt=g?new Uint32Array(g):null,lt=p?new Float32Array(p):null,Rt=[Q.buffer];gt&&Rt.push(gt.buffer),lt&&Rt.push(lt.buffer),X.onmessage=Tt=>{const Ft=Tt.data;if(Ft.type==="progress"){q[Ct]=Ft.value,a&&a(q.reduce((Kt,Ht)=>Kt+Ht,0)/U);return}Ft.type==="done"&&(B.set(Ft.data,Ft.zStart*P*P),F&&Ft.color&&F.set(Ft.color,Ft.zStart*P*P*4),X.terminate(),++H===U&&!Z&&l({name:n,resolution:P,min:S,max:C,modelBounds:{min:[m.min.x,m.min.y,m.min.z],max:[m.max.x,m.max.y,m.max.z]},signed:e>0,hasColor:!!F,distance:B,color:F,mesh:{positions:d,index:g}}))},X.onerror=Tt=>{Z||(Z=!0,rt(),c(Tt))},X.postMessage({positions:Q,index:gt,uv:lt,resolution:P,signRays:e,tex:f,min:S,max:C,zStart:Et[0],zEnd:Et[1]},Rt)})}).catch(c)})}const io=12;function Hb(i){return i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}function fp(i,t,e,n){const s=new TextEncoder().encode(JSON.stringify(e)),r=(4-s.length%4)%4,o=n.map(Hb),a=o.reduce((d,g)=>d+g.byteLength,0),l=io+s.length+r+a,c=new ArrayBuffer(l),u=new DataView(c),f=new Uint8Array(c);for(let d=0;d<4;d++)u.setUint8(d,i.charCodeAt(d));u.setUint32(4,t,!0),u.setUint32(8,s.length,!0),f.set(s,io);let h=io+s.length+r;for(const d of o)f.set(d,h),h+=d.byteLength;return c}function Vb(i){const e=new DataView(i).getUint32(8,!0),n=(4-e%4)%4;return io+e+n}function dp(i){const t=new DataView(i);let e="";for(let c=0;c<4;c++)e+=String.fromCharCode(t.getUint8(c));const n=t.getUint32(4,!0),s=t.getUint32(8,!0),r=new TextDecoder().decode(new Uint8Array(i,io,s)),o=JSON.parse(r),a=Vb(i);return{magic:e,version:n,manifest:o,slice:(c,u)=>i.slice(a+c,a+c+u),base:a,buffer:i}}function Du(i,t){const e=new Blob([i],{type:"application/octet-stream"}),n=URL.createObjectURL(e),s=document.createElement("a");s.href=n,s.download=t,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}const Uu="SDF1",Gb=1;function Wb(i){const t=[i.distance];let e=i.distance.byteLength;const n={name:i.name||"volume",resolution:i.resolution,min:i.min,max:i.max,modelBounds:i.modelBounds||null,signed:!!i.signed,hasColor:!!(i.hasColor&&i.color),hasMesh:!!(i.mesh&&i.mesh.positions),blobs:{distance:{off:0,len:i.distance.byteLength}}};return n.hasColor&&(n.blobs.color={off:e,len:i.color.byteLength},t.push(i.color),e+=i.color.byteLength),n.hasMesh&&(n.blobs.meshPos={off:e,len:i.mesh.positions.byteLength},t.push(i.mesh.positions),e+=i.mesh.positions.byteLength,n.meshIndexed=!!i.mesh.index,i.mesh.index&&(n.blobs.meshIdx={off:e,len:i.mesh.index.byteLength},t.push(i.mesh.index),e+=i.mesh.index.byteLength)),fp(Uu,Gb,n,t)}function pp(i,t){if(!i.hasMesh||!i.blobs.meshPos)return null;const e=i.blobs.meshPos,n=new Float32Array(t(e.off,e.len));let s=null;if(i.meshIndexed&&i.blobs.meshIdx){const r=i.blobs.meshIdx;s=new Uint32Array(t(r.off,r.len))}return{positions:n,index:s}}function Xb(i){const{magic:t,manifest:e,slice:n}=dp(i);if(t!==Uu)throw new Error(`.sdf ではありません (magic=${t})`);const s=e.blobs.distance,r=new Float32Array(n(s.off,s.len));let o=null;if(e.hasColor&&e.blobs.color){const a=e.blobs.color;o=new Uint8Array(n(a.off,a.len))}return{name:e.name,resolution:e.resolution,min:e.min,max:e.max,modelBounds:e.modelBounds||null,signed:e.signed,hasColor:!!o,distance:r,color:o,mesh:pp(e,n)}}function jb(i){if(i.byteLength<4)return!1;const t=new DataView(i);return String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))===Uu}const Nu="SDFM",qb=1;function Yb(i){const t=[];let e=0;const n=i.volumes.map(r=>{const o={name:r.name,resolution:r.resolution,min:r.min,max:r.max,modelBounds:r.modelBounds||null,signed:!!r.signed,hasColor:!!(r.hasColor&&r.color),hasMesh:!!(r.mesh&&r.mesh.positions),blobs:{distance:{off:e,len:r.distance.byteLength}}};return t.push(r.distance),e+=r.distance.byteLength,o.hasColor&&(o.blobs.color={off:e,len:r.color.byteLength},t.push(r.color),e+=r.color.byteLength),o.hasMesh&&(o.blobs.meshPos={off:e,len:r.mesh.positions.byteLength},t.push(r.mesh.positions),e+=r.mesh.positions.byteLength,o.meshIndexed=!!r.mesh.index,r.mesh.index&&(o.blobs.meshIdx={off:e,len:r.mesh.index.byteLength},t.push(r.mesh.index),e+=r.mesh.index.byteLength)),o}),s={grid:i.grid,objects:i.objects,volumes:n};return fp(Nu,qb,s,t)}function Kb(i){const{magic:t,manifest:e,slice:n}=dp(i);if(t!==Nu)throw new Error(`.sdfm ではありません (magic=${t})`);const s=e.volumes.map(r=>{const o=r.blobs.distance,a=new Float32Array(n(o.off,o.len));let l=null;return r.hasColor&&r.blobs.color&&(l=new Uint8Array(n(r.blobs.color.off,r.blobs.color.len))),{name:r.name,resolution:r.resolution,min:r.min,max:r.max,modelBounds:r.modelBounds||null,signed:r.signed,hasColor:!!l,distance:a,color:l,mesh:pp(r,n)}});return{grid:e.grid,objects:e.objects,volumes:s}}function $b(i){if(i.byteLength<4)return!1;const t=new DataView(i);return String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))===Nu}class Zb{parse(t,e={}){e=Object.assign({binary:!1},e);const n=e.binary,s=[];let r=0;t.traverse(function(m){if(m.isMesh){const x=m.geometry,y=x.index,v=x.getAttribute("position");r+=y!==null?y.count/3:v.count/3,s.push({object3d:m,geometry:x})}});let o,a=80;if(n===!0){const m=r*2+r*3*4*4+80+4,x=new ArrayBuffer(m);o=new DataView(x),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;const l=new A,c=new A,u=new A,f=new A,h=new A,d=new A;for(let m=0,x=s.length;m<x;m++){const y=s[m].object3d,v=s[m].geometry,E=v.index,b=v.getAttribute("position");if(E!==null)for(let S=0;S<E.count;S+=3){const C=E.getX(S+0),P=E.getX(S+1),M=E.getX(S+2);g(C,P,M,b,y)}else for(let S=0;S<b.count;S+=3){const C=S+0,P=S+1,M=S+2;g(C,P,M,b,y)}}return n===!1&&(o+=`endsolid exported
`),o;function g(m,x,y,v,E){l.fromBufferAttribute(v,m),c.fromBufferAttribute(v,x),u.fromBufferAttribute(v,y),E.isSkinnedMesh===!0&&(E.applyBoneTransform(m,l),E.applyBoneTransform(x,c),E.applyBoneTransform(y,u)),l.applyMatrix4(E.matrixWorld),c.applyMatrix4(E.matrixWorld),u.applyMatrix4(E.matrixWorld),_(l,c,u),p(l),p(c),p(u),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function _(m,x,y){f.subVectors(y,x),h.subVectors(m,x),f.cross(h).normalize(),d.copy(f).normalize(),n===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function p(m){n===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):o+="			vertex "+m.x+" "+m.y+" "+m.z+`
`}}}function mp(i,t,e=1280){const n=i.worldBounds(),r=n.getSize(new A).length()*.03,o=[n.min.x-r,n.min.y-r,n.min.z-r],a=[n.max.x+r,n.max.y+r,n.max.z+r],l=[a[0]-o[0],a[1]-o[1],a[2]-o[2]];let c=!1;const u=l.map(h=>{let d=Math.max(1,Math.round(h/t));return d>e&&(d=e,c=!0),d}),f=l.map((h,d)=>h/u[d]);return{min:o,max:a,ext:l,dims:u,clamped:c,cellUsed:f}}function gp(i,t,e){return new Promise((n,s)=>{if(i.objects.length===0){s(new Error("オブジェクトがありません"));return}const{cellSize:r,maxAxis:o=1280}=t,a=new Map(i.volumes.map((D,U)=>[D,U]));let l=!1;const c=i.volumes.map(D=>(D.data.mesh&&D.data.mesh.positions&&(l=!0),D.data)),u=i.objects.map(D=>{D.node.updateMatrixWorld(!0);const U=new pt().copy(D.node.matrixWorld).invert(),B=D.node.scale,F=Math.max(Math.min(Math.abs(B.x),Math.abs(B.y),Math.abs(B.z)),1e-5),q={kind:D.kind,op:D.op,smoothK:D.smoothK||0,inv:Array.from(U.elements),scale:F,array:{...D.array}};if(D.isVolume)q.volSlot=a.get(D.volume);else{const Z=Hn.get(D.kind).pack(D.params||{});q.a=Z.a,q.b=Z.b}return q}),{min:f,max:h,dims:d,clamped:g,cellUsed:_}=mp(i,r,o),p=d[2],m=typeof navigator<"u"&&navigator.hardwareConcurrency||4,x=Math.max(1,Math.min(m,8,p)),y=[],v=Math.ceil(p/x);for(let D=0;D<p;D+=v)y.push([D,Math.min(D+v,p)]);const E=y.length,b=new Array(E),S=new Array(E).fill(0);let C=0,P=!1;const M=[],w=()=>M.forEach(D=>D.terminate()),I=()=>c.map(D=>{const U={res:D.resolution,min:D.min,max:D.max,distance:new Float32Array(D.distance),mesh:null};return D.mesh&&D.mesh.positions&&(U.mesh={positions:new Float32Array(D.mesh.positions),index:D.mesh.index?new Uint32Array(D.mesh.index):null}),U});y.forEach((D,U)=>{const B=new Worker(new URL(""+new URL("marchWorker-DDLMLLMu.js",import.meta.url).href,import.meta.url),{type:"module"});M.push(B);const F=I(),q=[];for(const H of F)q.push(H.distance.buffer),H.mesh&&(q.push(H.mesh.positions.buffer),H.mesh.index&&q.push(H.mesh.index.buffer));B.onmessage=H=>{const Z=H.data;if(Z.type==="progress"){S[U]=Z.value,e&&e(S.reduce((nt,rt)=>nt+rt,0)/E);return}if(Z.type==="done"&&(b[U]=Z.positions,B.terminate(),++C===E&&!P)){const nt=b.reduce((Ct,X)=>Ct+X.length,0),rt=new Float32Array(nt);let Et=0;for(const Ct of b)rt.set(Ct,Et),Et+=Ct.length;n({positions:rt,triangles:nt/9,dims:d,clamped:g,cellUsed:_,hiDetail:l,workers:E})}},B.onerror=H=>{P||(P=!0,w(),s(H))},B.postMessage({dims:d,min:f,max:h,sceneDesc:{objects:u,volumes:F},hiDetail:l,zStart:D[0],zEnd:D[1]},q)})})}function _p(i,t=1){let e=i;if(t!==1){e=new Float32Array(i.length);for(let s=0;s<i.length;s++)e[s]=i[s]*t}const n=new de;return n.setAttribute("position",new Ee(e,3)),n.computeVertexNormals(),n}async function Qb(i,t,e){const n=await gp(i,t,e);if(n.positions.length===0)throw new Error("面が生成されませんでした(等値面が空)");const s=new st(_p(n.positions,t.exportScale||1),new yo),r=new Zb().parse(s,{binary:!0}),o=r.buffer?r.buffer:r;return Du(o,"model.stl"),{triangles:n.triangles,dims:n.dims,clamped:n.clamped}}const xp=0,Jb=1,tS=2,Zf=2,Kl=1.25,Qf=1,so=6*4+4+4,Za=65535,eS=Math.pow(2,-24),$l=Symbol("SKIP_GENERATION");function nS(i){return i.index?i.index.count:i.attributes.position.count}function br(i){return nS(i)/3}function iS(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function sS(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=iS(e,n);i.setIndex(new Ee(s,1));for(let r=0;r<e;r++)s[r]=r}}function yp(i,t){const e=br(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,s),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function vp(i,t){if(!i.groups||!i.groups.length)return yp(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,o=(s.start+s.count)/3;for(const l of i.groups){const c=l.start/3,u=(l.start+l.count)/3;n.add(Math.max(r,c)),n.add(Math.min(o,u))}const a=Array.from(n.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],u=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(u-c)})}return e}function rS(i,t){const e=br(i),n=vp(i,t).sort((o,a)=>o.offset-a.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function Zl(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,f=1/0,h=1/0,d=1/0,g=-1/0,_=-1/0,p=-1/0;for(let m=t*6,x=(t+e)*6;m<x;m+=6){const y=i[m+0],v=i[m+1],E=y-v,b=y+v;E<r&&(r=E),b>l&&(l=b),y<f&&(f=y),y>g&&(g=y);const S=i[m+2],C=i[m+3],P=S-C,M=S+C;P<o&&(o=P),M>c&&(c=M),S<h&&(h=S),S>_&&(_=S);const w=i[m+4],I=i[m+5],D=w-I,U=w+I;D<a&&(a=D),U>u&&(u=U),w<d&&(d=w),w>p&&(p=w)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,s[0]=f,s[1]=h,s[2]=d,s[3]=g,s[4]=_,s[5]=p}function oS(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,o=br(i),a=s.normalized;let l;t===null?(l=new Float32Array(o*6),e=0,n=o):(l=t,e=e||0,n=n||o);const c=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let d=e;d<e+n;d++){const g=d*3,_=d*6;let p=g+0,m=g+1,x=g+2;r&&(p=r[p],m=r[m],x=r[x]),a||(p=p*f+u,m=m*f+u,x=x*f+u);for(let y=0;y<3;y++){let v,E,b;a?(v=s[h[y]](p),E=s[h[y]](m),b=s[h[y]](x)):(v=c[p+y],E=c[m+y],b=c[x+y]);let S=v;E<S&&(S=E),b<S&&(S=b);let C=v;E>C&&(C=E),b>C&&(C=b);const P=(C-S)/2,M=y*2;l[_+M+0]=S+P,l[_+M+1]=P+(Math.abs(S)+P)*eS}}return l}function Me(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Jf(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function td(i,t){t.set(i)}function ed(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function ca(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Hr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const ci=32,aS=(i,t)=>i.candidate-t.candidate,Ci=new Array(ci).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ua=new Float32Array(6);function lS(i,t,e,n,s,r){let o=-1,a=0;if(r===xp)o=Jf(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===Jb)o=Jf(i),o!==-1&&(a=cS(e,n,s,o));else if(r===tS){const l=Hr(i);let c=Kl*s;const u=n*6,f=(n+s)*6;for(let h=0;h<3;h++){const d=t[h],p=(t[h+3]-d)/ci;if(s<ci/4){const m=[...Ci];m.length=s;let x=0;for(let v=u;v<f;v+=6,x++){const E=m[x];E.candidate=e[v+2*h],E.count=0;const{bounds:b,leftCacheBounds:S,rightCacheBounds:C}=E;for(let P=0;P<3;P++)C[P]=1/0,C[P+3]=-1/0,S[P]=1/0,S[P+3]=-1/0,b[P]=1/0,b[P+3]=-1/0;ca(v,e,b)}m.sort(aS);let y=s;for(let v=0;v<y;v++){const E=m[v];for(;v+1<y&&m[v+1].candidate===E.candidate;)m.splice(v+1,1),y--}for(let v=u;v<f;v+=6){const E=e[v+2*h];for(let b=0;b<y;b++){const S=m[b];E>=S.candidate?ca(v,e,S.rightCacheBounds):(ca(v,e,S.leftCacheBounds),S.count++)}}for(let v=0;v<y;v++){const E=m[v],b=E.count,S=s-E.count,C=E.leftCacheBounds,P=E.rightCacheBounds;let M=0;b!==0&&(M=Hr(C)/l);let w=0;S!==0&&(w=Hr(P)/l);const I=Qf+Kl*(M*b+w*S);I<c&&(o=h,c=I,a=E.candidate)}}else{for(let y=0;y<ci;y++){const v=Ci[y];v.count=0,v.candidate=d+p+y*p;const E=v.bounds;for(let b=0;b<3;b++)E[b]=1/0,E[b+3]=-1/0}for(let y=u;y<f;y+=6){let b=~~((e[y+2*h]-d)/p);b>=ci&&(b=ci-1);const S=Ci[b];S.count++,ca(y,e,S.bounds)}const m=Ci[ci-1];td(m.bounds,m.rightCacheBounds);for(let y=ci-2;y>=0;y--){const v=Ci[y],E=Ci[y+1];ed(v.bounds,E.rightCacheBounds,v.rightCacheBounds)}let x=0;for(let y=0;y<ci-1;y++){const v=Ci[y],E=v.count,b=v.bounds,C=Ci[y+1].rightCacheBounds;E!==0&&(x===0?td(b,ua):ed(b,ua,ua)),x+=E;let P=0,M=0;x!==0&&(P=Hr(ua)/l);const w=s-x;w!==0&&(M=Hr(C)/l);const I=Qf+Kl*(P*x+M*w);I<c&&(o=h,c=I,a=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function cS(i,t,e,n){let s=0;for(let r=t,o=t+e;r<o;r++)s+=i[r*6+n*2];return s/e}class Ql{constructor(){this.boundingData=new Float32Array(6)}}function uS(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let f=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=f}for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function hS(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let f=0;f<6;f++){let h=e[o*6+f];e[o*6+f]=e[a*6+f],e[a*6+f]=h}o++,a--}else return o}}function un(i,t){return t[i+15]===65535}function xn(i,t){return t[i+6]}function Rn(i,t){return t[i+14]}function Cn(i){return i+8}function Pn(i,t){return t[i+6]}function Mp(i,t){return t[i+7]}let bp,Jr,La,Sp;const fS=Math.pow(2,32);function nu(i){return"count"in i?1:1+nu(i.left)+nu(i.right)}function dS(i,t,e){return bp=new Float32Array(e),Jr=new Uint32Array(e),La=new Uint16Array(e),Sp=new Uint8Array(e),iu(i,t)}function iu(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)bp[e+o]=r[o];if(s)if(t.buffer){const o=t.buffer;Sp.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=so){const c=a/2;un(c,La)||(Jr[a/4+6]+=e)}return i+o.byteLength}else{const o=t.offset,a=t.count;return Jr[e+6]=o,La[n+14]=a,La[n+15]=Za,i+so}else{const o=t.left,a=t.right,l=t.splitAxis;let c;if(c=iu(i+so,o),c/4>fS)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Jr[e+6]=c/4,c=iu(c,a),Jr[e+7]=l,c}}function pS(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function mS(i,t,e,n,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=s,f=i._indirectBuffer,h=i.geometry,d=h.index?h.index.array:null,g=u?hS:uS,_=br(h),p=new Float32Array(6);let m=!1;const x=new Ql;return Zl(t,e,n,x.boundingData,p),v(x,e,n,p),x;function y(E){c&&c(E/_)}function v(E,b,S,C=null,P=0){if(!m&&P>=r&&(m=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),S<=a||P>=r)return y(b+S),E.offset=b,E.count=S,E;const M=lS(E.boundingData,C,t,b,S,l);if(M.axis===-1)return y(b+S),E.offset=b,E.count=S,E;const w=g(f,d,t,b,S,M);if(w===b||w===b+S)y(b+S),E.offset=b,E.count=S;else{E.splitAxis=M.axis;const I=new Ql,D=b,U=w-b;E.left=I,Zl(t,D,U,I.boundingData,p),v(I,D,U,p,P+1);const B=new Ql,F=w,q=S-U;E.right=B,Zl(t,F,q,B.boundingData,p),v(B,F,q,p,P+1)}return E}}function gS(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=pS(e,t.useSharedArrayBuffer),rS(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||sS(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=oS(e),r=t.indirect?yp(e,t.range):vp(e,t.range);i._roots=r.map(o=>{const a=mS(i,s,o.offset,o.count,t),l=nu(a),c=new n(so*l);return dS(0,a,c),c})}class xi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}xi.prototype.setFromBox=function(){const i=new A;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*u+r.z*(1-u);const f=e.dot(i);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const _S=function(){const i=new A,t=new A,e=new A;return function(s,r,o){const a=s.start,l=i,c=r.start,u=t;e.subVectors(a,c),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(l),d=u.dot(u),g=e.dot(l),p=l.dot(l)*d-h*h;let m,x;p!==0?m=(f*h-g*d)/p:m=0,x=(f+m*h)/d,o.x=m,o.y=x}}(),Fu=function(){const i=new dt,t=new A,e=new A;return function(s,r,o,a){_S(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=s.start:u=s.end;let f;c<0?f=r.start:f=r.end;const h=t,d=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(d);return}}}}(),xS=function(){const i=new A,t=new A,e=new On,n=new pi;return function(r,o){const{radius:a,center:l}=r,{a:c,b:u,c:f}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=a){const m=_.projectPoint(l,t);if(o.containsPoint(m))return!0}return!1}}(),yS=1e-15;function Jl(i){return Math.abs(i)<yS}class Xn extends Fe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new A),this.satBounds=new Array(4).fill().map(()=>new xi),this.points=[this.a,this.b,this.c],this.sphere=new hn,this.plane=new On,this.needsUpdate=!0}intersectsSphere(t){return xS(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);const c=r[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,s);const f=r[2],h=o[2];f.subVectors(e,n),h.setFromPoints(f,s);const d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Xn.prototype.closestPointToSegment=function(){const i=new A,t=new A,e=new pi;return function(s,r=null,o=null){const{start:a,end:l}=s,c=this.points;let u,f=1/0;for(let h=0;h<3;h++){const d=(h+1)%3;e.start.copy(c[h]),e.end.copy(c[d]),Fu(e,s,i,t),u=i.distanceToSquared(t),u<f&&(f=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(f)}}();Xn.prototype.intersectsTriangle=function(){const i=new Xn,t=new Array(3),e=new Array(3),n=new xi,s=new xi,r=new A,o=new A,a=new A,l=new A,c=new A,u=new pi,f=new pi,h=new pi,d=new A;function g(_,p,m){const x=_.points;let y=0,v=-1;for(let E=0;E<3;E++){const{start:b,end:S}=u;b.copy(x[E]),S.copy(x[(E+1)%3]),u.delta(o);const C=Jl(p.distanceToPoint(b));if(Jl(p.normal.dot(o))&&C){m.copy(u),y=2;break}const P=p.intersectLine(u,d);if(!P&&C&&d.copy(b),(P||C)&&!Jl(d.distanceTo(S))){if(y<=1)(y===1?m.start:m.end).copy(d),C&&(v=y);else if(y>=2){(v===1?m.start:m.end).copy(d),y=2;break}if(y++,y===2&&v===-1)break}}return y}return function(p,m=null,x=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const y=this.plane,v=p.plane;if(Math.abs(y.normal.dot(v.normal))>1-1e-10){const E=this.satBounds,b=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let P=0;P<4;P++){const M=E[P],w=b[P];if(n.setFromPoints(w,e),M.isSeparated(n))return!1}const S=p.satBounds,C=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let P=0;P<4;P++){const M=S[P],w=C[P];if(n.setFromPoints(w,t),M.isSeparated(n))return!1}for(let P=0;P<4;P++){const M=b[P];for(let w=0;w<4;w++){const I=C[w];if(r.crossVectors(M,I),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return m&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const E=g(this,v,f);if(E===1&&p.containsPoint(f.end))return m&&(m.start.copy(f.end),m.end.copy(f.end)),!0;if(E!==2)return!1;const b=g(p,y,h);if(b===1&&this.containsPoint(h.end))return m&&(m.start.copy(h.end),m.end.copy(h.end)),!0;if(b!==2)return!1;if(f.delta(a),h.delta(l),a.dot(l)<0){let D=h.start;h.start=h.end,h.end=D}const S=f.start.dot(a),C=f.end.dot(a),P=h.start.dot(a),M=h.end.dot(a),w=C<P,I=S<M;return S!==M&&P!==C&&w===I?!1:(m&&(c.subVectors(f.start,h.start),c.dot(a)>0?m.start.copy(f.start):m.start.copy(h.start),c.subVectors(f.end,h.end),c.dot(a)<0?m.end.copy(f.end):m.end.copy(h.end)),!0)}}}();Xn.prototype.distanceToPoint=function(){const i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Xn.prototype.distanceToTriangle=function(){const i=new A,t=new A,e=["a","b","c"],n=new pi,s=new pi;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let f=0;f<3;f++){let h;const d=e[f],g=o[d];this.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<u&&(u=h,a&&a.copy(i),l&&l.copy(g));const _=this[d];o.closestPointToPoint(_,i),h=_.distanceToSquared(i),h<u&&(u=h,a&&a.copy(_),l&&l.copy(i))}for(let f=0;f<3;f++){const h=e[f],d=e[(f+1)%3];n.set(this[h],this[d]);for(let g=0;g<3;g++){const _=e[g],p=e[(g+1)%3];s.set(o[_],o[p]),Fu(n,s,i,t);const m=i.distanceToSquared(t);m<u&&(u=m,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}}();class rn{constructor(t,e,n){this.isOrientedBox=!0,this.min=new A,this.max=new A,this.matrix=new pt,this.invMatrix=new pt,this.points=new Array(8).fill().map(()=>new A),this.satAxes=new Array(3).fill().map(()=>new A),this.satBounds=new Array(3).fill().map(()=>new xi),this.alignedSatBounds=new Array(3).fill().map(()=>new xi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}rn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*c|2*u|4*f,d=s[h];d.x=c?n.x:e.x,d.y=u?n.y:e.y,d.z=f?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){const u=o[c],f=r[c],h=1<<c,d=s[h];u.subVectors(a,d),f.setFromPoints(u,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();rn.prototype.intersectsBox=function(){const i=new xi;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],u=r[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}}();rn.prototype.intersectsTriangle=function(){const i=new Xn,t=new Array(3),e=new xi,n=new xi,s=new A;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const d=a[h],g=l[h];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){const d=c[h],g=u[h];if(e.setFromPoints(g,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){const d=l[h];for(let g=0;g<4;g++){const _=u[g];if(s.crossVectors(d,_),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();rn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();rn.prototype.distanceToPoint=function(){const i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();rn.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new pi),e=new Array(12).fill().map(()=>new pi),n=new A,s=new A;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const u=a*a,f=o.min,h=o.max,d=this.points;let g=1/0;for(let p=0;p<8;p++){const m=d[p];s.copy(m).clamp(f,h);const x=m.distanceToSquared(s);if(x<g&&(g=x,l&&l.copy(m),c&&c.copy(s),x<u))return Math.sqrt(x)}let _=0;for(let p=0;p<3;p++)for(let m=0;m<=1;m++)for(let x=0;x<=1;x++){const y=(p+1)%3,v=(p+2)%3,E=m<<y|x<<v,b=1<<p|m<<y|x<<v,S=d[E],C=d[b];t[_].set(S,C);const M=i[p],w=i[y],I=i[v],D=e[_],U=D.start,B=D.end;U[M]=f[M],U[w]=m?f[w]:h[w],U[I]=x?f[I]:h[w],B[M]=h[M],B[w]=m?f[w]:h[w],B[I]=x?f[I]:h[w],_++}for(let p=0;p<=1;p++)for(let m=0;m<=1;m++)for(let x=0;x<=1;x++){s.x=p?h.x:f.x,s.y=m?h.y:f.y,s.z=x?h.z:f.z,this.closestPointToPoint(s,n);const y=s.distanceToSquared(n);if(y<g&&(g=y,l&&l.copy(n),c&&c.copy(s),y<u))return Math.sqrt(y)}for(let p=0;p<12;p++){const m=t[p];for(let x=0;x<12;x++){const y=e[x];Fu(m,y,n,s);const v=n.distanceToSquared(s);if(v<g&&(g=v,l&&l.copy(n),c&&c.copy(s),v<u))return Math.sqrt(v)}}return Math.sqrt(g)}}();class Ou{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class vS extends Ou{constructor(){super(()=>new Xn)}}const Ln=new vS;class MS{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const _e=new MS;let Fi,Xs;const Us=[],ha=new Ou(()=>new he);function bS(i,t,e,n,s,r){Fi=ha.getPrimitive(),Xs=ha.getPrimitive(),Us.push(Fi,Xs),_e.setBuffer(i._roots[t]);const o=su(0,i.geometry,e,n,s,r);_e.clearBuffer(),ha.releasePrimitive(Fi),ha.releasePrimitive(Xs),Us.pop(),Us.pop();const a=Us.length;return a>0&&(Xs=Us[a-1],Fi=Us[a-2]),o}function su(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=_e;let u=i*2;if(un(u,l)){const h=xn(i,c),d=Rn(u,l);return Me(i,a,Fi),n(h,d,!1,o,r+i,Fi)}else{let M=function(I){const{uint16Array:D,uint32Array:U}=_e;let B=I*2;for(;!un(B,D);)I=Cn(I),B=I*2;return xn(I,U)},w=function(I){const{uint16Array:D,uint32Array:U}=_e;let B=I*2;for(;!un(B,D);)I=Pn(I,U),B=I*2;return xn(I,U)+Rn(B,D)};const h=Cn(i),d=Pn(i,c);let g=h,_=d,p,m,x,y;if(s&&(x=Fi,y=Xs,Me(g,a,x),Me(_,a,y),p=s(x),m=s(y),m<p)){g=d,_=h;const I=p;p=m,m=I,x=y}x||(x=Fi,Me(g,a,x));const v=un(g*2,l),E=e(x,v,p,o+1,r+g);let b;if(E===Zf){const I=M(g),U=w(g)-I;b=n(I,U,!0,o+1,r+g,x)}else b=E&&su(g,t,e,n,s,r,o+1);if(b)return!0;y=Xs,Me(_,a,y);const S=un(_*2,l),C=e(y,S,m,o+1,r+_);let P;if(C===Zf){const I=M(_),U=w(_)-I;P=n(I,U,!0,o+1,r+_,y)}else P=C&&su(_,t,e,n,s,r,o+1);return!!P}}const Vr=new A,tc=new A;function SS(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(Vr.copy(t).clamp(u.min,u.max),Vr.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Vr);const h=t.distanceToSquared(Vr);return h<a&&(tc.copy(Vr),a=h,l=f),h<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(tc):e.point=tc.clone(),e.distance=c,e.faceIndex=l,e}const ES=parseInt(Xa)>=169,es=new A,ns=new A,is=new A,fa=new dt,da=new dt,pa=new dt,nd=new A,id=new A,sd=new A,Gr=new A;function wS(i,t,e,n,s,r,o,a){let l;if(r===sn?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==cn,s),l===null)return null;const c=i.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function TS(i,t,e,n,s,r,o,a,l,c,u){es.fromBufferAttribute(t,r),ns.fromBufferAttribute(t,o),is.fromBufferAttribute(t,a);const f=wS(i,es,ns,is,Gr,l,c,u);if(f){const h=new A;Fe.getBarycoord(Gr,es,ns,is,h),n&&(fa.fromBufferAttribute(n,r),da.fromBufferAttribute(n,o),pa.fromBufferAttribute(n,a),f.uv=Fe.getInterpolation(Gr,es,ns,is,fa,da,pa,new dt)),s&&(fa.fromBufferAttribute(s,r),da.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,a),f.uv1=Fe.getInterpolation(Gr,es,ns,is,fa,da,pa,new dt)),e&&(nd.fromBufferAttribute(e,r),id.fromBufferAttribute(e,o),sd.fromBufferAttribute(e,a),f.normal=Fe.getInterpolation(Gr,es,ns,is,nd,id,sd,new A),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:r,b:o,c:a,normal:new A,materialIndex:0};Fe.getNormal(es,ns,is,d.normal),f.face=d,f.faceIndex=r,ES&&(f.barycoord=h)}return f}function Qa(i,t,e,n,s,r,o){const a=n*3;let l=a+0,c=a+1,u=a+2;const f=i.index;i.index&&(l=f.getX(l),c=f.getX(c),u=f.getX(u));const{position:h,normal:d,uv:g,uv1:_}=i.attributes,p=TS(e,h,d,g,_,l,c,u,t,r,o);return p?(p.faceIndex=n,s&&s.push(p),p):null}function De(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function AS(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,f=n+s;u<f;u++)Qa(l,t,e,u,r,o,a)}function RS(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=Qa(a,t,e,f,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function CS(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=u,De(o,h*3,l,c),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function PS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(h,d,g=!1){const _=h*2;if(a[_+15]===Za){const m=o[h+6],x=a[_+14];let y=1/0,v=1/0,E=1/0,b=-1/0,S=-1/0,C=-1/0;for(let P=3*m,M=3*(m+x);P<M;P++){let w=n[P];const I=s.getX(w),D=s.getY(w),U=s.getZ(w);I<y&&(y=I),I>b&&(b=I),D<v&&(v=D),D>S&&(S=D),U<E&&(E=U),U>C&&(C=U)}return l[h+0]!==y||l[h+1]!==v||l[h+2]!==E||l[h+3]!==b||l[h+4]!==S||l[h+5]!==C?(l[h+0]=y,l[h+1]=v,l[h+2]=E,l[h+3]=b,l[h+4]=S,l[h+5]=C,!0):!1}else{const m=h+8,x=o[h+6],y=m+d,v=x+d;let E=g,b=!1,S=!1;t?E||(b=t.has(y),S=t.has(v),E=!b&&!S):(b=!0,S=!0);const C=E||b,P=E||S;let M=!1;C&&(M=f(m,d,E));let w=!1;P&&(w=f(x,d,E));const I=M||w;if(I)for(let D=0;D<3;D++){const U=m+D,B=x+D,F=l[U],q=l[U+3],H=l[B],Z=l[B+3];l[h+D]=F<H?F:H,l[h+D+3]=q>Z?q:Z}return I}}}function ki(i,t,e,n,s){let r,o,a,l,c,u;const f=1/e.direction.x,h=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,_=e.origin.y,p=e.origin.z;let m=t[i],x=t[i+3],y=t[i+1],v=t[i+3+1],E=t[i+2],b=t[i+3+2];return f>=0?(r=(m-g)*f,o=(x-g)*f):(r=(x-g)*f,o=(m-g)*f),h>=0?(a=(y-_)*h,l=(v-_)*h):(a=(v-_)*h,l=(y-_)*h),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(E-p)*d,u=(b-p)*d):(c=(b-p)*d,u=(E-p)*d),r>u||c>o)?!1:((c>r||r!==r)&&(r=c),(u<o||o!==o)&&(o=u),r<=s&&o>=n)}function LS(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,f=n+s;u<f;u++){let h=c?c[u]:u;Qa(l,t,e,h,r,o,a)}}function IS(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=Qa(a,t,e,l?l[f]:f,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function DS(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),De(o,h*3,l,c),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function US(i,t,e,n,s,r,o){_e.setBuffer(i._roots[t]),ru(0,i,e,n,s,r,o),_e.clearBuffer()}function ru(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=_e,u=i*2;if(un(u,l)){const h=xn(i,c),d=Rn(u,l);AS(t,e,n,h,d,s,r,o)}else{const h=Cn(i);ki(h,a,n,r,o)&&ru(h,t,e,n,s,r,o);const d=Pn(i,c);ki(d,a,n,r,o)&&ru(d,t,e,n,s,r,o)}}const NS=["x","y","z"];function FS(i,t,e,n,s,r){_e.setBuffer(i._roots[t]);const o=ou(0,i,e,n,s,r);return _e.clearBuffer(),o}function ou(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=_e;let c=i*2;if(un(c,a)){const f=xn(i,l),h=Rn(c,a);return RS(t,e,n,f,h,s,r)}else{const f=Mp(i,l),h=NS[f],g=n.direction[h]>=0;let _,p;g?(_=Cn(i),p=Pn(i,l)):(_=Pn(i,l),p=Cn(i));const x=ki(_,o,n,s,r)?ou(_,t,e,n,s,r):null;if(x){const E=x.point[h];if(g?E<=o[p+f]:E>=o[p+f+3])return x}const v=ki(p,o,n,s,r)?ou(p,t,e,n,s,r):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const ma=new he,Ns=new Xn,Fs=new Xn,Wr=new pt,rd=new rn,ga=new rn;function OS(i,t,e,n){_e.setBuffer(i._roots[t]);const s=au(0,i,e,n);return _e.clearBuffer(),s}function au(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=_e;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),rd.set(e.boundingBox.min,e.boundingBox.max,n),s=rd),un(l,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,_=xn(i,a),p=Rn(l,o);if(Wr.copy(n).invert(),e.boundsTree)return Me(i,r,ga),ga.matrix.copy(Wr),ga.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>ga.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_*3,v=(p+_)*3;y<v;y+=3)if(De(Fs,y,f,h),Fs.needsUpdate=!0,x.intersectsTriangle(Fs))return!0;return!1}});for(let m=_*3,x=(p+_)*3;m<x;m+=3){De(Ns,m,f,h),Ns.a.applyMatrix4(Wr),Ns.b.applyMatrix4(Wr),Ns.c.applyMatrix4(Wr),Ns.needsUpdate=!0;for(let y=0,v=d.count;y<v;y+=3)if(De(Fs,y,d,g),Fs.needsUpdate=!0,Ns.intersectsTriangle(Fs))return!0}}else{const u=i+8,f=a[i+6];return Me(u,r,ma),!!(s.intersectsBox(ma)&&au(u,t,e,n,s)||(Me(f,r,ma),s.intersectsBox(ma)&&au(f,t,e,n,s)))}}const _a=new pt,ec=new rn,Xr=new rn,BS=new A,zS=new A,kS=new A,HS=new A;function VS(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ec.set(t.boundingBox.min,t.boundingBox.max,e),ec.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,f=t.index,h=Ln.getPrimitive(),d=Ln.getPrimitive();let g=BS,_=zS,p=null,m=null;s&&(p=kS,m=HS);let x=1/0,y=null,v=null;return _a.copy(e).invert(),Xr.matrix.copy(_a),i.shapecast({boundsTraverseOrder:E=>ec.distanceToBox(E),intersectsBounds:(E,b,S)=>S<x&&S<o?(b&&(Xr.min.copy(E.min),Xr.max.copy(E.max),Xr.needsUpdate=!0),!0):!1,intersectsRange:(E,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>Xr.distanceToBox(C),intersectsBounds:(C,P,M)=>M<x&&M<o,intersectsRange:(C,P)=>{for(let M=C,w=C+P;M<w;M++){De(d,3*M,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let I=E,D=E+b;I<D;I++){De(h,3*I,c,l),h.needsUpdate=!0;const U=h.distanceToTriangle(d,g,p);if(U<x&&(_.copy(g),m&&m.copy(p),x=U,y=I,v=M),U<r)return!0}}}});{const S=br(t);for(let C=0,P=S;C<P;C++){De(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=E,w=E+b;M<w;M++){De(h,3*M,c,l),h.needsUpdate=!0;const I=h.distanceToTriangle(d,g,p);if(I<x&&(_.copy(g),m&&m.copy(p),x=I,y=M,v=C),I<r)return!0}}}}}),Ln.releasePrimitive(h),Ln.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(_a),_.applyMatrix4(_a),s.distance=_.sub(s.point).length(),s.faceIndex=v),n)}function GS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(h,d,g=!1){const _=h*2;if(a[_+15]===Za){const m=o[h+6],x=a[_+14];let y=1/0,v=1/0,E=1/0,b=-1/0,S=-1/0,C=-1/0;for(let P=m,M=m+x;P<M;P++){const w=3*i.resolveTriangleIndex(P);for(let I=0;I<3;I++){let D=w+I;D=n?n[D]:D;const U=s.getX(D),B=s.getY(D),F=s.getZ(D);U<y&&(y=U),U>b&&(b=U),B<v&&(v=B),B>S&&(S=B),F<E&&(E=F),F>C&&(C=F)}}return l[h+0]!==y||l[h+1]!==v||l[h+2]!==E||l[h+3]!==b||l[h+4]!==S||l[h+5]!==C?(l[h+0]=y,l[h+1]=v,l[h+2]=E,l[h+3]=b,l[h+4]=S,l[h+5]=C,!0):!1}else{const m=h+8,x=o[h+6],y=m+d,v=x+d;let E=g,b=!1,S=!1;t?E||(b=t.has(y),S=t.has(v),E=!b&&!S):(b=!0,S=!0);const C=E||b,P=E||S;let M=!1;C&&(M=f(m,d,E));let w=!1;P&&(w=f(x,d,E));const I=M||w;if(I)for(let D=0;D<3;D++){const U=m+D,B=x+D,F=l[U],q=l[U+3],H=l[B],Z=l[B+3];l[h+D]=F<H?F:H,l[h+D+3]=q>Z?q:Z}return I}}}function WS(i,t,e,n,s,r,o){_e.setBuffer(i._roots[t]),lu(0,i,e,n,s,r,o),_e.clearBuffer()}function lu(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=_e,u=i*2;if(un(u,l)){const h=xn(i,c),d=Rn(u,l);LS(t,e,n,h,d,s,r,o)}else{const h=Cn(i);ki(h,a,n,r,o)&&lu(h,t,e,n,s,r,o);const d=Pn(i,c);ki(d,a,n,r,o)&&lu(d,t,e,n,s,r,o)}}const XS=["x","y","z"];function jS(i,t,e,n,s,r){_e.setBuffer(i._roots[t]);const o=cu(0,i,e,n,s,r);return _e.clearBuffer(),o}function cu(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=_e;let c=i*2;if(un(c,a)){const f=xn(i,l),h=Rn(c,a);return IS(t,e,n,f,h,s,r)}else{const f=Mp(i,l),h=XS[f],g=n.direction[h]>=0;let _,p;g?(_=Cn(i),p=Pn(i,l)):(_=Pn(i,l),p=Cn(i));const x=ki(_,o,n,s,r)?cu(_,t,e,n,s,r):null;if(x){const E=x.point[h];if(g?E<=o[p+f]:E>=o[p+f+3])return x}const v=ki(p,o,n,s,r)?cu(p,t,e,n,s,r):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const xa=new he,Os=new Xn,Bs=new Xn,jr=new pt,od=new rn,ya=new rn;function qS(i,t,e,n){_e.setBuffer(i._roots[t]);const s=uu(0,i,e,n);return _e.clearBuffer(),s}function uu(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=_e;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),od.set(e.boundingBox.min,e.boundingBox.max,n),s=od),un(l,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,_=xn(i,a),p=Rn(l,o);if(jr.copy(n).invert(),e.boundsTree)return Me(i,r,ya),ya.matrix.copy(jr),ya.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>ya.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_,v=p+_;y<v;y++)if(De(Bs,3*t.resolveTriangleIndex(y),f,h),Bs.needsUpdate=!0,x.intersectsTriangle(Bs))return!0;return!1}});for(let m=_,x=p+_;m<x;m++){const y=t.resolveTriangleIndex(m);De(Os,3*y,f,h),Os.a.applyMatrix4(jr),Os.b.applyMatrix4(jr),Os.c.applyMatrix4(jr),Os.needsUpdate=!0;for(let v=0,E=d.count;v<E;v+=3)if(De(Bs,v,d,g),Bs.needsUpdate=!0,Os.intersectsTriangle(Bs))return!0}}else{const u=i+8,f=a[i+6];return Me(u,r,xa),!!(s.intersectsBox(xa)&&uu(u,t,e,n,s)||(Me(f,r,xa),s.intersectsBox(xa)&&uu(f,t,e,n,s)))}}const va=new pt,nc=new rn,qr=new rn,YS=new A,KS=new A,$S=new A,ZS=new A;function QS(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),nc.set(t.boundingBox.min,t.boundingBox.max,e),nc.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,f=t.index,h=Ln.getPrimitive(),d=Ln.getPrimitive();let g=YS,_=KS,p=null,m=null;s&&(p=$S,m=ZS);let x=1/0,y=null,v=null;return va.copy(e).invert(),qr.matrix.copy(va),i.shapecast({boundsTraverseOrder:E=>nc.distanceToBox(E),intersectsBounds:(E,b,S)=>S<x&&S<o?(b&&(qr.min.copy(E.min),qr.max.copy(E.max),qr.needsUpdate=!0),!0):!1,intersectsRange:(E,b)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:C=>qr.distanceToBox(C),intersectsBounds:(C,P,M)=>M<x&&M<o,intersectsRange:(C,P)=>{for(let M=C,w=C+P;M<w;M++){const I=S.resolveTriangleIndex(M);De(d,3*I,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let D=E,U=E+b;D<U;D++){const B=i.resolveTriangleIndex(D);De(h,3*B,c,l),h.needsUpdate=!0;const F=h.distanceToTriangle(d,g,p);if(F<x&&(_.copy(g),m&&m.copy(p),x=F,y=D,v=M),F<r)return!0}}}})}else{const S=br(t);for(let C=0,P=S;C<P;C++){De(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=E,w=E+b;M<w;M++){const I=i.resolveTriangleIndex(M);De(h,3*I,c,l),h.needsUpdate=!0;const D=h.distanceToTriangle(d,g,p);if(D<x&&(_.copy(g),m&&m.copy(p),x=D,y=M,v=C),D<r)return!0}}}}}),Ln.releasePrimitive(h),Ln.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(m):s.point=m.clone(),s.point.applyMatrix4(va),_.applyMatrix4(va),s.distance=_.sub(s.point).length(),s.faceIndex=v),n)}function JS(){return typeof SharedArrayBuffer<"u"}const ro=new _e.constructor,Ga=new _e.constructor,Ii=new Ou(()=>new he),zs=new he,ks=new he,ic=new he,sc=new he;let rc=!1;function tE(i,t,e,n){if(rc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");rc=!0;const s=i._roots,r=t._roots;let o,a=0,l=0;const c=new pt().copy(e).invert();for(let u=0,f=s.length;u<f;u++){ro.setBuffer(s[u]),l=0;const h=Ii.getPrimitive();Me(0,ro.float32Array,h),h.applyMatrix4(c);for(let d=0,g=r.length;d<g&&(Ga.setBuffer(r[d]),o=Fn(0,0,e,c,n,a,l,0,0,h),Ga.clearBuffer(),l+=r[d].length,!o);d++);if(Ii.releasePrimitive(h),ro.clearBuffer(),a+=s[u].length,o)break}return rc=!1,o}function Fn(i,t,e,n,s,r=0,o=0,a=0,l=0,c=null,u=!1){let f,h;u?(f=Ga,h=ro):(f=ro,h=Ga);const d=f.float32Array,g=f.uint32Array,_=f.uint16Array,p=h.float32Array,m=h.uint32Array,x=h.uint16Array,y=i*2,v=t*2,E=un(y,_),b=un(v,x);let S=!1;if(b&&E)u?S=s(xn(t,m),Rn(t*2,x),xn(i,g),Rn(i*2,_),l,o+t,a,r+i):S=s(xn(i,g),Rn(i*2,_),xn(t,m),Rn(t*2,x),a,r+i,l,o+t);else if(b){const C=Ii.getPrimitive();Me(t,p,C),C.applyMatrix4(e);const P=Cn(i),M=Pn(i,g);Me(P,d,zs),Me(M,d,ks);const w=C.intersectsBox(zs),I=C.intersectsBox(ks);S=w&&Fn(t,P,n,e,s,o,r,l,a+1,C,!u)||I&&Fn(t,M,n,e,s,o,r,l,a+1,C,!u),Ii.releasePrimitive(C)}else{const C=Cn(t),P=Pn(t,m);Me(C,p,ic),Me(P,p,sc);const M=c.intersectsBox(ic),w=c.intersectsBox(sc);if(M&&w)S=Fn(i,C,e,n,s,r,o,a,l+1,c,u)||Fn(i,P,e,n,s,r,o,a,l+1,c,u);else if(M)if(E)S=Fn(i,C,e,n,s,r,o,a,l+1,c,u);else{const I=Ii.getPrimitive();I.copy(ic).applyMatrix4(e);const D=Cn(i),U=Pn(i,g);Me(D,d,zs),Me(U,d,ks);const B=I.intersectsBox(zs),F=I.intersectsBox(ks);S=B&&Fn(C,D,n,e,s,o,r,l,a+1,I,!u)||F&&Fn(C,U,n,e,s,o,r,l,a+1,I,!u),Ii.releasePrimitive(I)}else if(w)if(E)S=Fn(i,P,e,n,s,r,o,a,l+1,c,u);else{const I=Ii.getPrimitive();I.copy(sc).applyMatrix4(e);const D=Cn(i),U=Pn(i,g);Me(D,d,zs),Me(U,d,ks);const B=I.intersectsBox(zs),F=I.intersectsBox(ks);S=B&&Fn(P,D,n,e,s,o,r,l,a+1,I,!u)||F&&Fn(P,U,n,e,s,o,r,l,a+1,I,!u),Ii.releasePrimitive(I)}}return S}const Ma=new rn,ad=new he,eE={strategy:xp,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Bu{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:s.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t,a=new Bu(e,{...n,[$l]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const c=new Ee(t.index,1,!1);e.setIndex(c)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...eE,[$l]:!1},e),e.useSharedArrayBuffer&&!JS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[$l]||(gS(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new he))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?GS:PS)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=r[c+15]===Za;if(u){const f=s[a+6],h=r[c+14];t(l,u,new Float32Array(n,a*4,6),f,h)}else{const f=a+so/4,h=s[a+6],d=s[a+7];t(l,u,new Float32Array(n,a*4,6),d)||(o(f,l+1),o(h,l+1))}}}raycast(t,e=Vn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=[],l=e.isMaterial,c=Array.isArray(e),u=o.groups,f=l?e.side:e,h=this.indirect?WS:US;for(let d=0,g=r.length;d<g;d++){const _=c?e[u[d].materialIndex].side:f,p=a.length;if(h(this,d,_,t,a,n,s),c){const m=u[d].materialIndex;for(let x=p,y=a.length;x<y;x++)a[x].face.materialIndex=m}}return a}raycastFirst(t,e=Vn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=e.isMaterial,l=Array.isArray(e);let c=null;const u=o.groups,f=a?e.side:e,h=this.indirect?jS:FS;for(let d=0,g=r.length;d<g;d++){const _=l?e[u[d].materialIndex].side:f,p=h(this,d,_,t,n,s);p!=null&&(c==null||p.distance<c.distance)&&(c=p,l&&(p.face.materialIndex=u[d].materialIndex))}return c}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?qS:OS;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=Ln.getPrimitive(),n=this.indirect?DS:CS;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const f=o;o=(h,d,g,_,p)=>f(h,d,g,_,p)?!0:n(h,d,this,a,g,_,e)}else o||(a?o=(f,h,d,g)=>n(f,h,this,a,d,g,e):o=(f,h,d)=>d);let l=!1,c=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const d=u[f];if(l=bS(this,f,r,o,s,c),l)break;c+=d.byteLength}return Ln.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=Ln.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const _=this.resolveTriangleIndex(g);De(o,_*3,a,l)}:g=>{De(o,g*3,a,l)},u=Ln.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?g=>{const _=t.resolveTriangleIndex(g);De(u,_*3,f,h)}:g=>{De(u,g*3,f,h)};if(r){const g=(_,p,m,x,y,v,E,b)=>{for(let S=m,C=m+x;S<C;S++){d(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let P=_,M=_+p;P<M;P++)if(c(P),o.needsUpdate=!0,r(o,u,P,S,y,v,E,b))return!0}return!1};if(s){const _=s;s=function(p,m,x,y,v,E,b,S){return _(p,m,x,y,v,E,b,S)?!0:g(p,m,x,y,v,E,b,S)}}else s=g}return tE(this,t,e,s)}intersectsBox(t,e){return Ma.set(t.min,t.max,e),Ma.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ma.intersectsBox(n),intersectsTriangle:n=>Ma.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?QS:VS)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return SS(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Me(0,new Float32Array(n),ad),t.union(ad)}),t}}function Ep(i,t,e){if(e<=0)return Math.min(i,t);const n=Math.min(Math.max(.5+.5*(t-i)/e,0),1);return i*n+t*(1-n)-e*n*(1-n)}const ld=(i,t,e)=>-Ep(-i,-t,e);function wp(i,t){if(!i||i.mode==="none")return;const e=(n,s,r)=>Math.min(Math.max(n,s),r);if(i.mode==="grid")i.dx>0&&i.nx>1&&(t.x-=i.dx*e(Math.floor(t.x/i.dx+.5),0,i.nx-1)),i.dy>0&&i.ny>1&&(t.y-=i.dy*e(Math.floor(t.y/i.dy+.5),0,i.ny-1)),i.dz>0&&i.nz>1&&(t.z-=i.dz*e(Math.floor(t.z/i.dz+.5),0,i.nz-1));else if(i.mode==="circular"){const n=Math.max(i.count,1),s=2*Math.PI/n;let r=Math.atan2(t.z,t.x);r-=s*Math.floor(r/s+.5);const o=Math.hypot(t.x,t.z);t.x=Math.cos(r)*o-i.radius,t.z=Math.sin(r)*o}}function Tp(i,t,e,n,s){return s.x=i[0]*t+i[4]*e+i[8]*n+i[12],s.y=i[1]*t+i[5]*e+i[9]*n+i[13],s.z=i[2]*t+i[6]*e+i[10]*n+i[14],s}function Ap(i,t,e,n){const s=i.res;let r=t*(s-1),o=e*(s-1),a=n*(s-1);r=Math.min(Math.max(r,0),s-1),o=Math.min(Math.max(o,0),s-1),a=Math.min(Math.max(a,0),s-1);const l=Math.floor(r),c=Math.floor(o),u=Math.floor(a),f=Math.min(l+1,s-1),h=Math.min(c+1,s-1),d=Math.min(u+1,s-1),g=r-l,_=o-c,p=a-u,m=i.distance,x=(q,H,Z)=>q+H*s+Z*s*s,y=m[x(l,c,u)],v=m[x(f,c,u)],E=m[x(l,h,u)],b=m[x(f,h,u)],S=m[x(l,c,d)],C=m[x(f,c,d)],P=m[x(l,h,d)],M=m[x(f,h,d)],w=y*(1-g)+v*g,I=E*(1-g)+b*g,D=S*(1-g)+C*g,U=P*(1-g)+M*g,B=w*(1-_)+I*_,F=D*(1-_)+U*_;return B*(1-p)+F*p}function nE(i,t,e,n,s){const r={x:0,y:0,z:0};if(Tp(i.inv,e,n,s,r),wp(i.array,r),i.kind===0){const o=t[i.volSlot],a=(r.x-o.min[0])/(o.max[0]-o.min[0]),l=(r.y-o.min[1])/(o.max[1]-o.min[1]),c=(r.z-o.min[2])/(o.max[2]-o.min[2]),u=Ap(o,a,l,c),f=Math.max(o.min[0]-r.x,r.x-o.max[0],0),h=Math.max(o.min[1]-r.y,r.y-o.max[1],0),d=Math.max(o.min[2]-r.z,r.z-o.max[2],0);return(u+Math.sqrt(f*f+h*h+d*d))*i.scale}return Hn.get(i.kind).js(r,i.a,i.b)*i.scale}function zu(i,t={}){const e=!!t.hiDetail,n={x:0,y:0,z:0},s=i.objects,r=i.volumes;for(const l of r)if(l._cv=Math.min((l.max[0]-l.min[0])/(l.res-1),(l.max[1]-l.min[1])/(l.res-1),(l.max[2]-l.min[2])/(l.res-1)),e&&l.mesh&&l.mesh.positions){const c=new de;c.setAttribute("position",new Ee(l.mesh.positions,3)),l.mesh.index&&c.setIndex(new Ee(l.mesh.index,1)),l._bvh=new Bu(c),l._band=l._cv*3}const o=new A,a={};return function(c,u,f){let h=1e9;for(let d=0;d<s.length;d++){const g=s[d];Tp(g.inv,c,u,f,n),wp(g.array,n);let _;if(g.kind===0){const p=r[g.volSlot],m=(n.x-p.min[0])/(p.max[0]-p.min[0]),x=(n.y-p.min[1])/(p.max[1]-p.min[1]),y=(n.z-p.min[2])/(p.max[2]-p.min[2]),v=Ap(p,m,x,y),E=Math.max(p.min[0]-n.x,n.x-p.max[0],0),b=Math.max(p.min[1]-n.y,n.y-p.max[1],0),S=Math.max(p.min[2]-n.z,n.z-p.max[2],0),C=Math.sqrt(E*E+b*b+S*S);p._bvh&&C===0&&Math.abs(v)<=p._band?(o.set(n.x,n.y,n.z),a.distance=1/0,p._bvh.closestPointToPoint(o,a),_=(v<0?-a.distance:a.distance)*g.scale):_=(v+C)*g.scale}else _=Hn.get(g.kind).js(n,g.a,g.b)*g.scale;d===0?h=_:g.op==="union"?h=Ep(h,_,g.smoothK):g.op==="subtract"?h=ld(h,-_,g.smoothK):h=ld(h,_,g.smoothK)}return h}}class iE{constructor(t){this.deps=t,this.active=!1,this.obj=null,this.brush={type:"draw",shape:"round",radius:.1,strength:.5},this.ray=new Mo,this.lastHit=null,this.undoStack=[]}_worldBox(t){const n=this.deps.sdfScene._localBounds(t),s=new he;t.node.updateMatrixWorld(!0);for(let r=0;r<8;r++){const o=new A(r&1?n.max.x:n.min.x,r&2?n.max.y:n.min.y,r&4?n.max.z:n.min.z);o.applyMatrix4(t.node.matrixWorld),s.expandByPoint(o)}return s}bake(t,e){const n=this.deps.sdfScene,s=new pt().copy(t.node.matrixWorld).invert(),r=t.node.scale,o=Math.max(Math.min(Math.abs(r.x),Math.abs(r.y),Math.abs(r.z)),1e-5),a={objects:[],volumes:[]},l={kind:t.kind,op:"union",smoothK:0,inv:Array.from(s.elements),scale:o,array:{...t.array}};if(t.isVolume)l.volSlot=0,a.volumes.push({res:t.volume.data.resolution,min:t.volume.data.min,max:t.volume.data.max,distance:t.volume.data.distance});else{const b=Hn.get(t.kind).pack(t.params||{});l.a=b.a,l.b=b.b}a.objects.push(l);const c=zu(a,{hiDetail:!1}),u=this._worldBox(t),h=u.getSize(new A).length()*.18,d=[u.min.x-h,u.min.y-h,u.min.z-h],g=[u.max.x+h,u.max.y+h,u.max.z+h],_=new Float32Array(e*e*e),p=(g[0]-d[0])/(e-1),m=(g[1]-d[1])/(e-1),x=(g[2]-d[2])/(e-1);let y=0;for(let E=0;E<e;E++){const b=d[2]+E*x;for(let S=0;S<e;S++){const C=d[1]+S*m;for(let P=0;P<e;P++)_[y++]=c(d[0]+P*p,C,b)}}const v={name:(t.name||"sculpt")+" (sculpt)",resolution:e,min:d,max:g,signed:!0,hasColor:!1,distance:_,color:null,mesh:null};return n.bakeReplace(t,v)}enter(t,e){if(this.active||!t)return null;this.obj=this.bake(t,e);const n=this.obj.volume.data,s=Math.max(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);this.brush.radius=s*.12,this.voxel=Math.min(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2])/(n.resolution-1),this.active=!0,this.undoStack=[];const r=this.deps.getControls();return this._savedButtons=Object.assign({},r.mouseButtons),r.mouseButtons={LEFT:-1,MIDDLE:di.ROTATE,RIGHT:di.PAN},this.obj}exit(){if(!this.active)return;this.active=!1,this.lastHit=null;const t=this.deps.getControls();this._savedButtons&&(t.mouseButtons=this._savedButtons)}_sample(t,e,n,s,r){const o=e.resolution;let a=(n-e.min[0])/(e.max[0]-e.min[0])*(o-1),l=(s-e.min[1])/(e.max[1]-e.min[1])*(o-1),c=(r-e.min[2])/(e.max[2]-e.min[2])*(o-1);a=Math.min(Math.max(a,0),o-1),l=Math.min(Math.max(l,0),o-1),c=Math.min(Math.max(c,0),o-1);const u=Math.floor(a),f=Math.floor(l),h=Math.floor(c),d=Math.min(u+1,o-1),g=Math.min(f+1,o-1),_=Math.min(h+1,o-1),p=a-u,m=l-f,x=c-h,y=(C,P,M)=>C+P*o+M*o*o,v=t[y(u,f,h)]*(1-p)+t[y(d,f,h)]*p,E=t[y(u,g,h)]*(1-p)+t[y(d,g,h)]*p,b=t[y(u,f,_)]*(1-p)+t[y(d,f,_)]*p,S=t[y(u,g,_)]*(1-p)+t[y(d,g,_)]*p;return(v*(1-m)+E*m)*(1-x)+(b*(1-m)+S*m)*x}_raycast(t){const e=this.obj.volume.data,n=this.deps.getCamera(),r=this.deps.canvas.getBoundingClientRect(),o=new dt((t.clientX-r.left)/r.width*2-1,-((t.clientY-r.top)/r.height)*2+1);this.ray.setFromCamera(o,n);const a=this.ray.ray.origin,l=this.ray.ray.direction,c=e.min,u=e.max,f=[1/l.x,1/l.y,1/l.z];let h=-1e9,d=1e9;for(let p=0;p<3;p++){const m=p===0?a.x:p===1?a.y:a.z,x=f[p];let y=(c[p]-m)*x,v=(u[p]-m)*x;if(y>v){const E=y;y=v,v=E}h=Math.max(h,y),d=Math.min(d,v)}if(d<Math.max(h,0))return null;let g=Math.max(h,0)+this.voxel*.5;const _=e.distance;for(let p=0;p<512&&g<d;p++){const m=a.x+l.x*g,x=a.y+l.y*g,y=a.z+l.z*g,v=this._sample(_,e,m,x,y);if(v<this.voxel*.5)return new A(m,x,y);g+=Math.max(v,this.voxel*.5)}return null}_falloff(t,e,n){if(n==="square"){const r=Math.max(0,1-t/e);return Math.min(1,r*3)}if(n==="cone")return Math.max(0,1-t/e);const s=Math.max(0,1-t/e);return s*s*(3-2*s)}_stamp(t,e,n,s,r){return r==="square"?Math.max(Math.abs(t),Math.abs(e),Math.abs(n))-s:r==="cone"?Math.sqrt(t*t+e*e+n*n)-s*.7:Math.sqrt(t*t+e*e+n*n)-s}_apply(t,e){const n=this.obj.volume.data,s=n.resolution,r=n.distance,o=this.brush.radius,a=this.brush.shape,l=this.brush.type,c=this.brush.strength,u=o*(.3+c*.6),f=Math.max(o,u),h=(n.max[0]-n.min[0])/(s-1),d=(n.max[1]-n.min[1])/(s-1),g=(n.max[2]-n.min[2])/(s-1),_=(t.x-n.min[0])/h,p=(t.y-n.min[1])/d,m=(t.z-n.min[2])/g,x=Math.ceil(f/h)+1,y=Math.ceil(f/d)+1,v=Math.ceil(f/g)+1,E=Math.max(0,Math.floor(_-x)),b=Math.min(s-1,Math.ceil(_+x)),S=Math.max(0,Math.floor(p-y)),C=Math.min(s-1,Math.ceil(p+y)),P=Math.max(0,Math.floor(m-v)),M=Math.min(s-1,Math.ceil(m+v)),w=l==="smooth"||l==="move"?r.slice():null,I=(U,B,F)=>U+B*s+F*s*s,D=(U,B,F)=>Math.max(Math.abs(U),Math.abs(B),Math.abs(F));for(let U=P;U<=M;U++)for(let B=S;B<=C;B++)for(let F=E;F<=b;F++){const q=n.min[0]+F*h,H=n.min[1]+B*d,Z=n.min[2]+U*g,nt=q-t.x,rt=H-t.y,Et=Z-t.z,Ct=I(F,B,U);if(l==="draw"){const X=this._stamp(nt,rt,Et,u,a);r[Ct]=Math.min(r[Ct],X)}else if(l==="carve"){const X=this._stamp(nt,rt,Et,u,a);r[Ct]=Math.max(r[Ct],-X)}else{const X=a==="square"?D(nt,rt,Et):Math.sqrt(nt*nt+rt*rt+Et*Et);if(X>o)continue;const Q=this._falloff(X,o,a);if(l==="smooth"){const gt=Math.max(0,F-1),lt=Math.min(s-1,F+1),Rt=Math.max(0,B-1),Tt=Math.min(s-1,B+1),Ft=Math.max(0,U-1),Kt=Math.min(s-1,U+1),Ht=(w[I(gt,B,U)]+w[I(lt,B,U)]+w[I(F,Rt,U)]+w[I(F,Tt,U)]+w[I(F,B,Ft)]+w[I(F,B,Kt)])/6;r[Ct]=w[Ct]+(Ht-w[Ct])*Q*c}else l==="move"&&e&&(r[Ct]=this._sample(w,n,q-e.x*Q,H-e.y*Q,Z-e.z*Q))}}this.obj.volume.distTex.needsUpdate=!0}pointerDown(t){if(!this.active)return!1;const e=this._raycast(t);return e?(this.undoStack.push(this.obj.volume.data.distance.slice()),this.undoStack.length>12&&this.undoStack.shift(),this.stroking=!0,this.lastHit=e,this._apply(e,null),!0):!1}pointerMove(t){if(!this.active||!this.stroking)return;const e=this._raycast(t);if(!e)return;const n=this.brush.type;if((n==="draw"||n==="carve")&&this.lastHit){const s=e.distanceTo(this.lastHit),r=Math.max(this.brush.radius*.4,this.voxel),o=Math.min(Math.max(1,Math.ceil(s/r)),16);for(let a=1;a<=o;a++)this._apply(this.lastHit.clone().lerp(e,a/o),null)}else this._apply(e,this.lastHit?e.clone().sub(this.lastHit):null);this.lastHit=e}pointerUp(){this.stroking&&(this.stroking=!1,this.lastHit=null,this.deps.pushHistory&&this.deps.pushHistory())}undo(){if(!this.active||this.undoStack.length===0)return;const t=this.undoStack.pop();this.obj.volume.data.distance.set(t),this.obj.volume.distTex.needsUpdate=!0}}const it=i=>document.getElementById(i),Rp=1e3,sE=100,ku={mm:1,cm:10,m:1e3,in:25.4};function _n(i,t=3){if(!Number.isFinite(i))return"0";const e=Number.parseFloat(i.toFixed(t));return Object.is(e,-0)?"0":String(e)}function Sr(){const i=parseFloat(it("export-scale")?.value);return Number.isFinite(i)&&i>0?i:Rp}function Hu(){const i=it("stl-unit")?.value;return ku[i]?i:"mm"}function rE(){return ku[Hu()]||1}function Mn(i){return i*Sr()}function js(i){return i/Sr()}function Cp(i){return i&&i.key!=="n"&&i.key!=="angDeg"}const We=it("view"),Le=new Mv({canvas:We,antialias:!0});Le.setPixelRatio(Math.min(window.devicePixelRatio,2));Le.autoClear=!1;Le.setClearColor(1382172,1);Le.debug.onShaderError=(i,t,e,n)=>{const s=i.getShaderInfoLog(n)||"",r=i.getShaderInfoLog(e)||"",o=i.getProgramInfoLog(t)||"",a=`[Shader error]
FRAGMENT:
${s}
VERTEX:
${r}
PROGRAM:
${o}`;console.error(a);const l=document.getElementById("shader-error");l&&(l.textContent=a,l.classList.remove("hidden"))};We.addEventListener("webglcontextlost",i=>{i.preventDefault();const t=document.getElementById("shader-error");t&&(t.textContent=`WebGLコンテキストが失われました（GPU負荷/ドライバの可能性）。
オブジェクトを減らすか、ページをリロードしてください。`,t.classList.remove("hidden")),console.error("[WebGL] context lost")},!1);We.addEventListener("webglcontextrestored",()=>{console.warn("[WebGL] context restored — リロードを推奨します");const i=document.getElementById("shader-error");i&&(i.textContent="WebGLが復帰しました。表示が乱れる場合はページをリロードしてください。")},!1);const Gi=new Su,Zn=new tn(50,1,.001,1e3);Zn.position.set(2,1.6,2.4);const Ae=new _r(-1,1,1,-1,.001,1e3);let Gt=Zn,mo=!1;const Be=new cM(Gt,We);Be.enableDamping=!0;Be.dampingFactor=.2;let Pp=0,Nt=null;Be.addEventListener("change",()=>{Pp=performance.now()});function Vu(){const t=2*Math.max(Zn.position.distanceTo(Be.target),.001)*Math.tan(Zn.fov*Math.PI/180/2),e=window.innerWidth/window.innerHeight;Ae.top=t/2,Ae.bottom=-t/2,Ae.left=-t/2*e,Ae.right=t/2*e,Ae.near=.001,Ae.far=1e3,Ae.zoom=1,Ae.updateProjectionMatrix()}function Gu(i){if(i===mo)return;const t=i?Ae:Zn;t.position.copy(Gt.position),t.quaternion.copy(Gt.quaternion),t.up.copy(Gt.up),i?Vu():Zn.updateProjectionMatrix(),Gt=t,Be.object=Gt,typeof Se<"u"&&(Se.camera=Gt),mo=i;const e=document.getElementById("toggle-ortho");e&&(e.textContent=i?"正投影":"透視投影",e.classList.toggle("active",i)),Be.update()}const Wi=new $M;Gi.add(Wi.group);Wi.group.visible=!1;const fr=new An;fr.visible=!1;Gi.add(fr);function oE(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");return e.clearRect(0,0,256,64),e.fillStyle="#9fc0ff",e.font="bold 40px sans-serif",e.textBaseline="middle",e.fillText(i,6,34),new bv(new $d({map:new tp(t),transparent:!0,depthTest:!1}))}function Lp(){fr.clear();const t=200/Sr(),e=t/2,n=[[-e,-e],[e,-e],[e,e],[-e,e],[-e,-e]].map(a=>new A(a[0],6e-4,a[1])),s=new Sn(new de().setFromPoints(n),new Vi({color:4945604})),r=new st(new ds(t,t),new Tn({color:4945604,transparent:!0,opacity:.08,side:cn,depthWrite:!1}));r.rotation.x=-Math.PI/2;const o=oE("200mm");o.position.set(-e,.002,-e),o.scale.set(t*.5,t*.125,1),fr.add(r,s,o)}Gi.add(new Xv(16777215,4473941,1));const Ip=new rp(16777215,1.3);Ip.position.set(1,2,1.5);Gi.add(Ip);const hs=new An;hs.visible=!1;Gi.add(hs);const mt=new jM(Le);Gi.add(mt.group);const yi=new KM(Le);yi.bindScene(mt);let Dp=!1;{const i=document.getElementById("status"),t=i?i.textContent:"";i&&(i.textContent="シェーダを初回コンパイル中…（数秒、初回のみ）");const e=()=>{Dp=!0,i&&i.textContent.startsWith("シェーダ")&&(i.textContent=t)};yi.warmup(Le).then(e,e)}const Ue=new iE({renderer:Le,canvas:We,sdfScene:mt,raymarch:yi,getCamera:()=>Gt,getControls:()=>Be,pushHistory:()=>Re(),refresh:()=>Hi()}),Se=new bM(Gt,We);let qs=null;Se.addEventListener("dragging-changed",i=>{Be.enabled=!i.value,i.value?(qt&&qt.node.updateMatrix(),qs=qt?{primary:qt.node.matrix.clone(),items:jt.filter(t=>t!==qt).map(t=>(t.node.updateMatrix(),{o:t,start:t.node.matrix.clone()}))}:null):(qs=null,Re(),Er())});Se.addEventListener("objectChange",()=>{if(!Nt){if(qs&&qs.items.length){qt.node.updateMatrix();const i=new pt().multiplyMatrices(qt.node.matrix,new pt().copy(qs.primary).invert()),t=new pt;for(const e of qs.items)t.multiplyMatrices(i,e.start),t.decompose(e.o.node.position,e.o.node.quaternion,e.o.node.scale),e.o.node.updateMatrixWorld(!0)}qu()}});Gi.add(Se.getHelper?Se.getHelper():Se);let qt=null,jt=[],oc=null,ss=null;const aE=60;let Yn=[],mi=-1;function Up(){const i=mt.serialize();return{objects:JSON.parse(JSON.stringify(i.objects)),volumes:i.volumes}}function Re(){Yn=Yn.slice(0,mi+1),Yn.push(Up()),Yn.length>aE&&Yn.shift(),mi=Yn.length-1}function Np(){Yn=[Up()],mi=0}function Fp(i){const t=qt?mt.objects.indexOf(qt):-1;qt=null,jt=[],Se.detach(),mt.loadSerialized({objects:i.objects,volumes:i.volumes});const e=mt.objects;t>=0&&t<e.length&&(qt=e[t],jt=[qt]),bo()}function lE(){mi>0&&(mi--,Fp(Yn[mi]),ee("元に戻しました"))}function cd(){mi<Yn.length-1&&(mi++,Fp(Yn[mi]),ee("やり直しました"))}function cE(i,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,128,128),n.strokeStyle="#1a1d24",n.lineWidth=6,n.strokeRect(3,3,122,122),n.fillStyle="#f0f2f5",n.font="bold 32px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,64,70);const s=new tp(e);return s.anisotropy=4,s}const Op=new Su,Ja=new _r(-1.5,1.5,1.5,-1.5,.1,10);Ja.position.set(0,0,4);Ja.lookAt(0,0,0);const uE=["右","左","上","下","前","後"],hE=["#6b5b95","#6b5b95","#5b8a95","#5b8a95","#95685b","#95685b"],fE=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Wu=new st(new ve(1.7,1.7,1.7),uE.map((i,t)=>new Tn({map:cE(i,hE[t])})));Op.add(Wu);const wn=92,Bp=204,ud=new Mo;function Ia(i){Gu(!0);const t=mt.worldBounds(),e=t.getCenter(new A),n=Math.max(t.getBoundingSphere(new hn).radius,.1),s=Math.max(Gt.position.distanceTo(Be.target),n*2);Be.target.copy(e);const r=new A(i[0],i[1],i[2]);Gt.up.set(0,1,0),Math.abs(i[1])>.9&&Gt.up.set(0,0,i[1]>0?-1:1),Gt.position.copy(e).addScaledVector(r,s),Gt.lookAt(e);const o=window.innerWidth/window.innerHeight,a=n*1.2;Ae.top=a,Ae.bottom=-a,Ae.left=-a*o,Ae.right=a*o,Ae.zoom=1,Ae.updateProjectionMatrix(),Be.update()}function zp(){const i=window.innerWidth,t=window.innerHeight;Le.setSize(i,t,!1),Zn.aspect=i/t,Zn.updateProjectionMatrix(),mo&&Vu()}window.addEventListener("resize",zp);zp();function kp(){requestAnimationFrame(kp),Be.update(),Gt.updateMatrixWorld(),Le.clear();const i=performance.now()-Pp<120||Se.dragging||Ue.active&&Ue.stroking||!!Nt;Xu&&Dp&&yi.render(Le,Gt,i?.4:1),Le.render(Gi,Gt),Wu.quaternion.copy(Gt.quaternion).invert();const t=We.clientWidth,e=We.clientHeight,n=t-wn-Bp;Le.clearDepth(),Le.setScissorTest(!0),Le.setViewport(n,e-wn,wn,wn),Le.setScissor(n,e-wn,wn,wn),Le.render(Op,Ja),Le.setScissorTest(!1),Le.setViewport(0,0,t,e)}let Xu=!0;kp();Np();function dE(){for(const i of mt.objects)i._proxy&&(i.node.remove(i._proxy.g),i._proxy.boxGeo.dispose(),i._proxy=null)}function oo(){dE();for(const i of mt.objects){const t=mt._localBounds(i),e=t.getSize(new A),n=t.getCenter(new A),s=new ve(Math.max(e.x,.001),Math.max(e.y,.001),Math.max(e.z,.001)),r=new An,o=new st(s,new Tn({colorWrite:!1,depthWrite:!1}));o.position.copy(n),o.userData.obj=i;const a=new xo(new Pv(s),new Vi({color:3900150}));a.position.copy(n),a.visible=!1,r.add(o,a),i.node.add(r),i._proxy={g:r,pick:o,wire:a,boxGeo:s}}Vp()}function Hp(i){return jt.includes(i)}function Vp(){for(const i of mt.objects)i._proxy&&(i._proxy.wire.visible=Hp(i),i._proxy.wire.material.color.set(i===qt?16754253:3900150))}function bo(){Vp(),qt?Se.attach(qt.node):Se.detach(),Hi()}function Qn(i){jt=i?[i]:[],qt=i||null,bo()}function Gp(i,t,e){if(!i){!t&&!e&&Qn(null);return}if(e){const n=jt.indexOf(i);n>=0?(jt.splice(n,1),qt===i&&(qt=jt[jt.length-1]||null)):(jt.push(i),qt=i)}else t?(jt.includes(i)||jt.push(i),qt=i):(jt=[i],qt=i);bo()}function pE(i,t){const e=mt.objects,n=e.indexOf(i);if(n<0)return;e.splice(n,1);let s=t;n<t&&(s-=1),s=Math.max(0,Math.min(e.length,s)),e.splice(s,0,i),mt.notify()}function Wp(i=mt.objects){const t=new Map(mt.volumes.map((s,r)=>[s,r])),e=mt.volumes.map(s=>({res:s.data.resolution,min:s.data.min,max:s.data.max,distance:s.data.distance}));return{objects:i.map(s=>{s.node.updateMatrixWorld(!0);const r=new pt().copy(s.node.matrixWorld).invert(),o=s.node.scale,a=Math.max(Math.min(Math.abs(o.x),Math.abs(o.y),Math.abs(o.z)),1e-5),l={kind:s.kind,op:s.op,smoothK:s.smoothK||0,inv:Array.from(r.elements),scale:a,array:{...s.array}};if(s.isVolume)l.volSlot=t.get(s.volume);else{const u=Hn.get(s.kind).pack(s.params||{});l.a=u.a,l.b=u.b}return l}),volumes:e}}function mE(i){if(mt.objects.length===0)return null;const t=Wp(),e=zu(t,{hiDetail:!1}),n=We.getBoundingClientRect(),s=new dt((i.clientX-n.left)/n.width*2-1,-((i.clientY-n.top)/n.height)*2+1);ac.setFromCamera(s,Gt);const r=ac.ray.origin,o=ac.ray.direction,a=mt.worldBounds(),l=a.getSize(new A),c=l.length()*.02,u=[a.min.x-c,a.min.y-c,a.min.z-c],f=[a.max.x+c,a.max.y+c,a.max.z+c];let h=-1e9,d=1e9;for(let p=0;p<3;p++){const m=p===0?r.x:p===1?r.y:r.z,x=1/(p===0?o.x:p===1?o.y:o.z);let y=(u[p]-m)*x,v=(f[p]-m)*x;if(y>v){const E=y;y=v,v=E}h=Math.max(h,y),d=Math.min(d,v)}if(d<Math.max(h,0))return null;const g=Math.max(l.length()*.0012,1e-5);let _=Math.max(h,0)+g;for(let p=0;p<600&&_<d;p++){const m=r.x+o.x*_,x=r.y+o.y*_,y=r.z+o.z*_,v=e(m,x,y);if(v<g){let E=-1,b=1/0;return t.objects.forEach((S,C)=>{const P=Math.abs(nE(S,t.volumes,m,x,y));P<b&&(b=P,E=C)}),E>=0?mt.objects[E]:null}_+=Math.max(v*.8,g)}return null}function Xp(i,t,e){const n=i.slice().sort((x,y)=>mt.objects.indexOf(x)-mt.objects.indexOf(y)),s=Wp(n),r=zu(s,{hiDetail:!1}),o=new he;let a=!1;for(const x of n)x.op!=="subtract"&&(o.union(mt.objAABB(x)),a=!0);if(!a)for(const x of n)o.union(mt.objAABB(x));const c=o.getSize(new A).length()*.05+.001,u=[o.min.x-c,o.min.y-c,o.min.z-c],f=[o.max.x+c,o.max.y+c,o.max.z+c],h=new Float32Array(t*t*t),d=(f[0]-u[0])/(t-1),g=(f[1]-u[1])/(t-1),_=(f[2]-u[2])/(t-1);let p=0;for(let x=0;x<t;x++){const y=u[2]+x*_;for(let v=0;v<t;v++){const E=u[1]+v*g;for(let b=0;b<t;b++)h[p++]=r(u[0]+b*d,E,y)}}const m={name:e||"merged",resolution:t,min:u,max:f,signed:!0,hasColor:!1,distance:h,color:null,mesh:null};return cp(m),m}function gE(i,t){const e=i.slice().sort((s,r)=>mt.objects.indexOf(s)-mt.objects.indexOf(r)),n=Xp(e,t,"merged");return mt.mergeToVolume(e,n)}function _E(){jt.length!==0&&([...jt].forEach(i=>mt.remove(i)),jt=[],qt=null,bo(),Re())}const xE=[10,50,100,200,500,1e3];function ju(){it("size-popup").classList.add("hidden")}function jp(i,t,{recordHistory:e=!0,updateUi:n=!0}={}){const s=Hn.get(i.kind),r=js(t),o=(s?s.bound(i.params||{})*2:1)||1,a=r/o;if(s&&s.params.length)for(const l of s.params)Cp(l)&&Number.isFinite(i.params[l.key])&&(i.params[l.key]*=a);else i.node.scale.setScalar(a);i.node.updateMatrixWorld(!0),n&&(oo(),Hi()),e&&Re()}function Da(i){jp(i,sE,{recordHistory:!1})}function qp(i){const t=it("size-popup");t.innerHTML='<span class="lbl">初期サイズ</span>',xE.forEach(r=>{const o=document.createElement("button");o.textContent=`${r}mm`,o.onclick=()=>{jp(i,r),ju()},t.appendChild(o)}),Gt.updateMatrixWorld();const e=Qp(i.node.position);t.classList.remove("hidden");const n=t.offsetWidth||280,s=t.offsetHeight||32;t.style.left=Math.min(window.innerWidth-n-8,Math.max(8,e.x+14))+"px",t.style.top=Math.min(window.innerHeight-s-8,Math.max(8,e.y-s-10))+"px"}window.addEventListener("pointerdown",i=>{const t=it("size-popup");!t.classList.contains("hidden")&&!t.contains(i.target)&&ju()},!0);function dr(){const i=mt.worldBounds(),t=i.getCenter(new A),e=i.getBoundingSphere(new hn),n=Math.max(e.radius,.1);Be.target.copy(t);const s=n/Math.sin(Zn.fov*Math.PI/180/2);Gt.position.copy(t).add(new A(.8,.6,1).normalize().multiplyScalar(s*1.1)),Gt.near=n/200,Gt.far=n*200,Gt.isPerspectiveCamera?Gt.updateProjectionMatrix():Vu()}function yE(i){const t=mt._localBounds(i),e=new he;i.node.updateMatrixWorld(!0);for(let n=0;n<8;n++){const s=new A(n&1?t.max.x:t.min.x,n&2?t.max.y:t.min.y,n&4?t.max.z:t.min.z);s.applyMatrix4(i.node.matrixWorld),e.expandByPoint(s)}return e}function hd(i){const t=i.getCenter(new A),e=Math.max(i.getBoundingSphere(new hn).radius,.05),n=new A().subVectors(Gt.position,Be.target);n.lengthSq()<1e-9&&n.set(.8,.6,1),n.normalize(),Be.target.copy(t);const s=e/Math.sin(Zn.fov*Math.PI/180/2);if(Gt.position.copy(t).addScaledVector(n,s*1.1),Gt.near=e/200,Gt.far=e*200,Gt.isPerspectiveCamera)Gt.updateProjectionMatrix();else{const r=window.innerWidth/window.innerHeight,o=e*1.2;Ae.top=o,Ae.bottom=-o,Ae.left=-o*r,Ae.right=o*r,Ae.zoom=1,Ae.updateProjectionMatrix()}Be.update()}function Yp(){if(mt.objects.length===0)return;if(jt.length===0){hd(mt.worldBounds());return}const i=new he;jt.forEach(t=>i.union(yE(t))),hd(i)}function vE(){const i=it("object-list");if(i.innerHTML="",mt.objects.length===0){i.innerHTML='<div class="empty">オブジェクトなし</div>';return}const t={union:"#8bd17c",subtract:"#f0928f",intersect:"#f0c674"};mt.objects.forEach((e,n)=>{const s=document.createElement("div");s.className="orow"+(Hp(e)?" sel":"")+(e===qt?" primary":""),s.onclick=l=>Gp(e,l.shiftKey,l.ctrlKey||l.metaKey),s.draggable=!0,s.ondragstart=l=>{ss=e,l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("text/plain","")},s.ondragover=l=>{if(!ss||ss===e)return;l.preventDefault();const c=s.getBoundingClientRect(),u=l.clientY-c.top>c.height/2;s.classList.toggle("drop-after",u),s.classList.toggle("drop-before",!u)},s.ondragleave=()=>s.classList.remove("drop-before","drop-after"),s.ondrop=l=>{if(l.preventDefault(),!ss)return;const c=s.getBoundingClientRect(),u=l.clientY-c.top>c.height/2;pE(ss,n+(u?1:0)),Re(),ss=null},s.ondragend=()=>{ss=null,document.querySelectorAll(".orow").forEach(l=>l.classList.remove("drop-before","drop-after"))};const r=document.createElement("span");e.hasArray?(r.className="ico arr",r.textContent=e.array.mode==="circular"?"◎":"▦"):r.className="ico "+(e.isVolume?"vol":"prim");const o=document.createElement("span");o.className="nm",o.textContent=e.name,o.title=e.name,o.style.color=n===0?"#e6e8ec":t[e.op]||"#e6e8ec";const a=document.createElement("button");a.className="x",a.textContent="✕",a.title="削除",a.onclick=l=>{l.stopPropagation(),mt.remove(e),jt=jt.filter(c=>c!==e),qt===e&&(qt=jt[jt.length-1]||null),bo(),Re()},s.append(r,o,a),i.appendChild(s)})}function qu(){const i=it("prop-body");i.innerHTML="";const t=qt;if(!t){i.innerHTML='<div class="empty">未選択</div>';return}const e=mt.objects.indexOf(t),n=document.createElement("div");if(n.className="pname",n.textContent=t.name+(e===0?"  (ベース)":""),i.appendChild(n),e>0){const c=document.createElement("div");c.className="sh",c.textContent="ブーリアン",i.appendChild(c);const u=document.createElement("div");u.className="seg-row",[["union","合体"],["subtract","削る"],["intersect","交差"]].forEach(([g,_])=>{const p=document.createElement("button");p.className="seg"+(t.op===g?" active":""),p.textContent=_,p.onclick=()=>{t.op=g,Re(),Hi()},u.appendChild(p)}),i.appendChild(u);const f=document.createElement("label");f.className="f";const h=document.createElement("span");h.textContent="スムーズ mm";const d=document.createElement("input");d.type="range",d.min=0,d.max=_n(Mn(.5)),d.step=_n(Mn(.005)),d.value=_n(Mn(t.smoothK)),d.oninput=()=>{t.smoothK=js(parseFloat(d.value)||0)},d.onchange=Re,f.append(h,d),i.appendChild(f)}const s=document.createElement("div");s.className="sh",s.textContent="変換",i.appendChild(s);const r=(c,u,f,h,d={})=>{const g=document.createElement("div");g.className="xyz";const _=document.createElement("span");_.textContent=c,g.appendChild(_);const p=d.toDisplay||(x=>x),m=d.fromDisplay||(x=>x);["x","y","z"].forEach(x=>{const y=document.createElement("input");y.type="number",y.step=h,y.value=_n(p(u(x)),d.digits??4),y.oninput=()=>{const v=parseFloat(y.value);isNaN(v)||(f(x,m(v)),t.node.updateMatrixWorld(!0))},y.onchange=Re,g.appendChild(y)}),i.appendChild(g)};if(r("位置 mm",c=>t.node.position[c],(c,u)=>{t.node.position[c]=u},1,{toDisplay:Mn,fromDisplay:js,digits:3}),r("回転°",c=>ka.radToDeg(t.node.rotation[c]),(c,u)=>{t.node.rotation[c]=ka.degToRad(u)},1),r("拡縮",c=>t.node.scale[c],(c,u)=>{t.node.scale[c]=u||.001},.01),!t.isVolume){const c=Hn.get(t.kind);if(c&&c.params.length){const u=document.createElement("div");u.className="sh",u.textContent="寸法",i.appendChild(u);const f=document.createElement("div");f.className="g2";for(const h of c.params){const d=Cp(h),g=t.params[h.key]??h.value??0,_=d?Mn(g):g,p=document.createElement("label");p.className="f";const m=document.createElement("span");m.textContent=d?`${h.label} mm`:h.label;const x=document.createElement("input");x.type="number",x.step=d?_n(Mn(h.step??.01)):h.step??.01,x.value=_n(_,d?3:4),h.min!=null&&(x.min=d?_n(Math.min(Mn(h.min),_)):h.min),h.max!=null&&(x.max=d?_n(Mn(h.max)):h.max),x.oninput=()=>{const y=parseFloat(x.value);isNaN(y)||(t.params[h.key]=d?js(y):y,oo())},x.onchange=Re,p.append(m,x),f.appendChild(p)}i.appendChild(f)}}const o=document.createElement("div");o.className="sh",o.textContent="配列モディファイア",i.appendChild(o);const a=document.createElement("select");[["none","なし"],["grid","グリッド(XYZ)"],["circular","円形"]].forEach(([c,u])=>{const f=document.createElement("option");f.value=c,f.textContent=u,a.appendChild(f)}),a.value=t.array.mode,a.onchange=()=>{t.array.mode=a.value,Re(),oo(),Hi()},i.appendChild(a);const l=(c,u)=>{const f=document.createElement("div");f.className="xyz";const h=document.createElement("span");h.textContent=c,f.appendChild(h),u.forEach(({key:d,step:g,min:_,int:p,length:m})=>{const x=document.createElement("input"),y=t.array[d],v=m?Mn(y):y;x.type="number",x.step=m?_n(Mn(g??.01)):g,_!=null&&(x.min=m?_n(Mn(_)):_),x.value=_n(v,m?3:4),x.oninput=()=>{let E=parseFloat(x.value);isNaN(E)||(p&&(E=Math.max(_||1,Math.round(E))),t.array[d]=m?js(E):E,oo())},x.onchange=Re,f.appendChild(x)}),i.appendChild(f)};t.array.mode==="grid"?(l("個数",["nx","ny","nz"].map(c=>({key:c,step:1,min:1,int:!0}))),l("間隔 mm",["dx","dy","dz"].map(c=>({key:c,step:.05,min:0,length:!0})))):t.array.mode==="circular"&&l("個数/半径 mm",[{key:"count",step:1,min:1,int:!0},{key:"radius",step:.05,min:0,length:!0}])}function Hi(){vE(),qu()}mt.onChange=()=>{oo(),Hi(),Er(),mt.objects.length>Js&&ee(`表示上限 ${Js} 個を超えています（${mt.objects.length}個）。${Js+1}個目以降は表示されません`)};const ME=1280,bE=200;function Yu(){const i=Sr(),t=i/rE();let e=parseFloat(it("voxel-mm").value)||1;if(it("auto-voxel")&&it("auto-voxel").checked&&mt.objects.length){const s=mt.worldBounds().getSize(new A),r=Math.max(s.x,s.y,s.z)*i;e=Math.max(r/bE,.001),it("voxel-mm").value=+e.toFixed(3)}return{cellSize:e/i,maxAxis:ME,exportScale:t,physicalScale:i,stlUnit:Hu(),voxelMm:e}}function Er(){const i=it("mesh-readout");if(!i)return;if(mt.objects.length===0){i.textContent="";return}const{cellSize:t,maxAxis:e,physicalScale:n,stlUnit:s,voxelMm:r}=Yu(),o=mp(mt,t,e),l=o.ext.map(u=>u*n).map(u=>u<10?u.toFixed(2):Math.round(u)).join("×"),c=Math.max(...o.cellUsed.map(u=>u*n));i.textContent=`出力 ${l}mm / ボクセル ${r}mm / STL単位 ${s} / グリッド ${o.dims.join("×")}`+(o.clamped?` ⚠上限${e}で粗化(実${c.toFixed(2)}mm)`:"")}function ee(i){it("status").textContent=i}const pr=it("progress"),mr=it("bar-fill"),Ku=it("progress-label");function Kp(i){return/\.(bin|png|jpe?g|webp|gif|ktx2)$/i.test(i.name)}async function SE(i,t=[i]){const e=await i.arrayBuffer(),n=i.name;try{if($b(e)){const s=Kb(e);mt.loadSerialized(s),s.grid&&(it("export-scale").value=_n(s.grid.unitScaleMm||Rp),s.grid.stlUnit&&it("stl-unit")&&(it("stl-unit").value=ku[s.grid.stlUnit]?s.grid.stlUnit:"mm"),s.grid.cellSize&&Wi.setCellSize(s.grid.cellSize),el({refreshProperties:!1})),Qn(null),dr(),Np(),ee(`シーン読込: ${n}（オブジェクト ${s.objects.length}）`)}else if(jb(e)){const s=Xb(e);s.name=s.name||n.replace(/\.sdf$/i,"");const r=mt.addVolume(s);Qn(r),dr(),Re(),ee(`ボリューム追加: ${s.name}（${s.resolution}³）`)}else/\.(glb|gltf)$/i.test(n)?await EE(e,n,{assetFiles:/\.gltf$/i.test(n)?t:[],rootPath:i.webkitRelativePath||n}):Kp(i)?t.some(s=>/\.gltf$/i.test(s.name))||ee(`未対応のファイル: ${n}`):ee(`未対応のファイル: ${n}`)}catch(s){console.error(s),ee(`エラー: ${s.message}`)}}async function EE(i,t,e={}){const n=parseInt(it("resolution").value,10),s=parseInt(it("sign-rays").value,10);pr.classList.remove("hidden"),mr.style.width="0%",Ku.textContent=`SDF変換中 (${n}³)…`;const r=performance.now();try{const o=await kb(i,{resolution:n,signRays:s,name:t.replace(/\.(glb|gltf)$/i,""),...e,onProgress:c=>{mr.style.width=`${c*100|0}%`}}),a=mt.addVolume(o);Qn(a),dr(),Re();const l=((performance.now()-r)/1e3).toFixed(1);wE(o),ee(`変換完了: ${o.name}（${o.resolution}³, ${l}s）/ 「.sdf保存」で再利用可`)}catch(o){console.error(o),ee(`変換エラー: ${o.message}`)}finally{pr.classList.add("hidden")}}async function $p(i){const t=[...i],e=t.filter(s=>!Kp(s)),n=e.length?e:t;for(const s of n)await SE(s,t)}function wE(i){const t=i.distance;let e=1/0,n=-1/0,s=0;for(let o=0;o<t.length;o++){const a=t[o];a<e&&(e=a),a>n&&(n=a),a<0&&s++}const r=mt.worldBounds();console.log("[diag] volume",i.name,"res",i.resolution,`
  data.min`,i.min,"data.max",i.max,`
  distance range`,e.toFixed(4),"..",n.toFixed(4)," neg%",(100*s/t.length).toFixed(1),`
  worldBounds`,r.min.toArray().map(o=>o.toFixed(3)),r.max.toArray().map(o=>o.toFixed(3)),`
  objCount`,mt.objects.length," volumes",mt.volumes.length)}const $u=it("drop-overlay");let Zu=0;const tl=i=>i.dataTransfer&&Array.from(i.dataTransfer.types||[]).includes("Files");window.addEventListener("dragenter",i=>{tl(i)&&(i.preventDefault(),Zu++,$u.classList.remove("hidden"))});window.addEventListener("dragover",i=>{tl(i)&&i.preventDefault()});window.addEventListener("dragleave",i=>{tl(i)&&(i.preventDefault(),--Zu<=0&&$u.classList.add("hidden"))});window.addEventListener("drop",i=>{tl(i)&&(i.preventDefault(),Zu=0,$u.classList.add("hidden"),i.dataTransfer.files.length&&$p(i.dataTransfer.files))});const En={x:0,y:0},Wa=new Mo,fd=new A,hu=new On,dd=new A;function Zp(i,t){const e=We.getBoundingClientRect();return new dt((i-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1)}function Qp(i){const t=We.getBoundingClientRect(),e=i.clone().project(Gt);return{x:(e.x*.5+.5)*t.width+t.left,y:(-e.y*.5+.5)*t.height+t.top}}function pd(i){return new A(i==="x"?1:0,i==="y"?1:0,i==="z"?1:0)}function TE(i){if(jt.length===0||Nt)return;Gt.getWorldDirection(fd);const t=new A;jt.forEach(r=>{r.node.updateMatrix(),t.add(r.node.position)}),t.multiplyScalar(1/jt.length),Nt={mode:i,axis:null,viewDir:fd.clone(),pivot:t,items:jt.map(r=>({o:r,start:r.node.matrix.clone()}))},hu.setFromNormalAndCoplanarPoint(Nt.viewDir,t),Wa.setFromCamera(Zp(En.x,En.y),Gt),Nt.startHit=new A,Wa.ray.intersectPlane(hu,Nt.startHit);const e=Qp(t);Nt.screenC=e,Nt.startAngle=Math.atan2(En.y-e.y,En.x-e.x),Nt.startDist=Math.max(Math.hypot(En.x-e.x,En.y-e.y),.001),Be.enabled=!1,Se.enabled=!1,(Se.getHelper?Se.getHelper():Se).visible=!1,RE(i);const n=i==="translate"?"移動(G)":i==="rotate"?"回転(R)":"拡大(S)",s=jt.length>1?` ×${jt.length}`:"";ee(`${n}${s}: マウス移動 / X・Y・Zで軸固定 / クリック確定 / Esc・右クリック取消`),Qu(En.x,En.y)}function Qu(i,t){if(!Nt)return;const e=r=>new pt().makeTranslation(r.x,r.y,r.z),n=new pt;if(Nt.mode==="translate"){if(Wa.setFromCamera(Zp(i,t),Gt),!Wa.ray.intersectPlane(hu,dd))return;const r=dd.clone().sub(Nt.startHit);if(Nt.axis){const o=pd(Nt.axis);r.copy(o).multiplyScalar(r.dot(o))}n.makeTranslation(r.x,r.y,r.z)}else if(Nt.mode==="rotate"){const r=Math.atan2(t-Nt.screenC.y,i-Nt.screenC.x)-Nt.startAngle,o=(Nt.axis?pd(Nt.axis):Nt.viewDir.clone()).normalize(),a=new pt().makeRotationAxis(o,-r);n.multiply(e(Nt.pivot)).multiply(a).multiply(e(Nt.pivot.clone().negate()))}else{const o=Math.max(Math.hypot(i-Nt.screenC.x,t-Nt.screenC.y),.001)/Nt.startDist,a=new A(o,o,o);Nt.axis==="x"?(a.y=1,a.z=1):Nt.axis==="y"?(a.x=1,a.z=1):Nt.axis==="z"&&(a.x=1,a.y=1);const l=new pt().makeScale(a.x,a.y,a.z);n.multiply(e(Nt.pivot)).multiply(l).multiply(e(Nt.pivot.clone().negate()))}const s=new pt;for(const r of Nt.items)s.multiplyMatrices(n,r.start),s.decompose(r.o.node.position,r.o.node.quaternion,r.o.node.scale),r.o.node.updateMatrixWorld(!0);jt.length===1&&qu()}function fu(i){if(Nt){if(!i)for(const t of Nt.items)t.start.decompose(t.o.node.position,t.o.node.quaternion,t.o.node.scale),t.o.node.updateMatrixWorld(!0);Nt=null,Be.enabled=!0,Se.enabled=!0,(Se.getHelper?Se.getHelper():Se).visible=!0,Ys=null,Hi(),i&&Re(),Er(),ee(i?"変形を確定しました":"変形を取消しました")}}window.addEventListener("pointermove",i=>{En.x=i.clientX,En.y=i.clientY,Nt&&Qu(i.clientX,i.clientY),Ue.active&&Ue.pointerMove(i)});We.addEventListener("contextmenu",i=>{Nt&&i.preventDefault()});We.addEventListener("pointerdown",i=>{Ue.active&&(Be.mouseButtons.LEFT=i.altKey?di.ROTATE:-1)},!0);const ac=new Mo;let Ys=null;We.addEventListener("pointerdown",i=>{if(Ue.active){i.button===0&&!i.altKey&&Ue.pointerDown(i);return}if(Nt){fu(i.button!==2),i.preventDefault();return}Ys={x:i.clientX,y:i.clientY}});We.addEventListener("pointerup",i=>{if(Ue.active){Ue.pointerUp();return}if(Nt||!Ys||Se.dragging)return;const t=Math.hypot(i.clientX-Ys.x,i.clientY-Ys.y);if(Ys=null,t>4)return;const e=We.getBoundingClientRect(),n=i.clientX-e.left,s=i.clientY-e.top,o=We.clientWidth-wn-Bp;if(n>=o&&n<=o+wn&&s<=wn){const l=(n-o)/wn*2-1,c=-(s/wn)*2+1;ud.setFromCamera(new dt(l,c),Ja);const u=ud.intersectObject(Wu)[0];u&&Ia(fE[u.face.materialIndex]);return}const a=mE(i);Gp(a,i.shiftKey,i.ctrlKey||i.metaKey)});it("open-btn").onclick=()=>it("file-input").click();it("file-input").onchange=i=>$p(i.target.files);it("show-color").onchange=i=>yi.setShowColor(i.target.checked);function AE(){it("legend").textContent=Wi.legend(Sr())}function el({refreshProperties:i=!0}={}){it("grid-cell").value=_n(Mn(Wi.cellSize)),AE(),Er(),i&&Hi(),fr.visible&&Lp()}it("grid-cell").onchange=i=>{const t=parseFloat(i.target.value);Wi.setCellSize(js(Number.isFinite(t)?t:100)),el({refreshProperties:!1})};it("show-grid").onchange=i=>{Wi.group.visible=i.target.checked};it("show-plate").onchange=i=>{fr.visible=i.target.checked,i.target.checked&&Lp()};it("tile-cull").onchange=i=>yi.setTileCull(i.target.checked);el({refreshProperties:!1});document.querySelectorAll("[data-gizmo]").forEach(i=>{i.onclick=()=>{document.querySelectorAll("[data-gizmo]").forEach(t=>t.classList.remove("active")),i.classList.add("active"),Se.setMode(i.dataset.gizmo)}});function RE(i){Se.setMode(i),document.querySelectorAll("[data-gizmo]").forEach(t=>t.classList.toggle("active",t.dataset.gizmo===i))}it("toggle-ortho").onclick=()=>Gu(!mo);it("frame-sel").onclick=Yp;{const i=it("rsplit"),t=it("right"),e=it("outliner"),n=it("properties");let s=!1;i.addEventListener("pointerdown",r=>{s=!0,i.setPointerCapture(r.pointerId),r.preventDefault()}),i.addEventListener("pointermove",r=>{if(!s)return;const o=t.getBoundingClientRect(),a=Math.min(.85,Math.max(.15,(r.clientY-o.top)/o.height));e.style.flexGrow=a,n.style.flexGrow=1-a}),i.addEventListener("pointerup",()=>{s=!1})}window.addEventListener("keydown",i=>{ju();const t=i.metaKey||i.ctrlKey;if(t&&(i.key==="z"||i.key==="Z")){i.preventDefault(),Ue.active?Ue.undo():Nt||(i.shiftKey?cd():lE());return}if(t&&(i.key==="y"||i.key==="Y")){i.preventDefault(),Nt||cd();return}if(i.target.tagName==="INPUT"||i.target.tagName==="SELECT")return;const e=i.key.toLowerCase();if(Nt){e==="x"||e==="y"||e==="z"?(Nt.axis=Nt.axis===e?null:e,Qu(En.x,En.y)):i.key==="Escape"?fu(!1):i.key==="Enter"&&fu(!0),i.preventDefault();return}if(t&&e==="c"){qt&&(oc=mt.copyDescriptor(qt),ee("コピーしました")),i.preventDefault();return}if(t&&e==="v"){if(oc)try{const s=mt.pasteDescriptor(oc);Qn(s),Re(),ee("貼り付けました")}catch(s){ee(s.message)}i.preventDefault();return}const n={g:"translate",r:"rotate",s:"scale"}[e];if(n){TE(n);return}if(e==="5"){Gu(!mo);return}if(e==="1"){Ia([0,0,1]);return}if(e==="3"){Ia([1,0,0]);return}if(e==="7"){Ia([0,1,0]);return}if(e===";"){Yp();return}(i.key==="Delete"||i.key==="Backspace")&&jt.length&&_E()});const CE=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${i}</svg>`,PE={sphere:'<circle cx="12" cy="12" r="8"/><path d="M5 10c3 2 11 2 14 0" opacity=".5"/>',box:'<path d="M12 3l8 4-8 4-8-4z"/><path d="M4 7v8l8 4V11"/><path d="M20 7v8l-8 4"/>',roundbox:'<rect x="4" y="4" width="16" height="16" rx="5"/>',cylinder:'<ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/>',capsule:'<rect x="8" y="3" width="8" height="18" rx="4"/>',torus:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',plane:'<path d="M3 16l6-8h12l-6 8z"/>',pyramid:'<path d="M12 3l8 15H4z"/><path d="M4 18c2 1.4 14 1.4 16 0" opacity=".5"/>',tetra:'<path d="M12 4l8 15H4z"/><path d="M12 4v9M12 13L4 19M12 13l8 6" opacity=".7"/>',ngon:'<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/>',spring:'<path d="M7 4c5 0 5 3.5 0 3.5M7 7.5c5 0 5 3.5 0 3.5M7 11c5 0 5 3.5 0 3.5M7 14.5c5 0 5 3.5 0 3.5"/>'},LE=it("prim-grid");$a.filter(i=>i.category!=="extra").forEach(i=>{const t=document.createElement("button");t.className="prim",t.title=i.name,t.innerHTML=CE(PE[i.key]||'<rect x="5" y="5" width="14" height="14"/>')+`<span>${i.name}</span>`,t.onclick=()=>{const e=mt.addPrimitive(i.kindId);Da(e),mt.objects.length===1&&dr(),Qn(e),Re(),qp(e)},LE.appendChild(t)});const IE=it("extra-grid");HM.forEach(i=>{const t=document.createElement("button");t.className="prim",t.title=i.name,t.innerHTML=`<span>${i.name}</span>`,t.onclick=()=>{if(i.hinge){const n=mt.addPrimitive(i.kind,i.params);Da(n);const s=mt.addPrimitive(i.kind,i.params);Da(s),s.node.rotation.z=Math.PI,s.node.updateMatrixWorld(!0),mt.objects.length<=2&&dr(),Qn(s),Re();return}const e=mt.addPrimitive(i.kind,i.params);Da(e),mt.objects.length===1&&dr(),Qn(e),Re(),qp(e)},IE.appendChild(t)});const DE=["file","model","sculpt","scene"];document.querySelectorAll(".tab").forEach(i=>{i.onclick=()=>{document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("active",e===i));const t=i.dataset.tab;DE.forEach(e=>it("pane-"+e).classList.toggle("hidden",e!==t))}});const md=[{name:"スタジオ",keyDir:[.5,.85,.6],keyColor:[.85,.85,.85],fillDir:[-.5,.35,-.45],fillColor:[.32,.32,.34],ambient:[.28,.28,.3],specGain:.14,specPow:28,rimGain:.06,bg:1382172},{name:"ソフト",keyDir:[.4,.9,.5],keyColor:[.55,.55,.56],fillDir:[-.4,.4,-.4],fillColor:[.42,.42,.44],ambient:[.48,.48,.5],specGain:.04,specPow:16,rimGain:.03,bg:1776930},{name:"ハード",keyDir:[.55,.8,.55],keyColor:[1.05,1.05,1.05],fillDir:[-.5,.2,-.5],fillColor:[.12,.12,.14],ambient:[.12,.12,.14],specGain:.32,specPow:48,rimGain:.1,bg:855569},{name:"クール",keyDir:[.5,.85,.6],keyColor:[.7,.84,1.05],fillDir:[-.5,.35,-.45],fillColor:[.3,.4,.55],ambient:[.2,.26,.34],specGain:.18,specPow:32,rimGain:.08,bg:1053725},{name:"ウォーム",keyDir:[.5,.85,.6],keyColor:[1.1,.9,.66],fillDir:[-.5,.35,-.45],fillColor:[.5,.4,.3],ambient:[.32,.27,.2],specGain:.18,specPow:32,rimGain:.08,bg:1709328}];it("sculpt-enter").onclick=()=>{if(!qt){it("sculpt-status").textContent="オブジェクトを選択してください";return}if(!Ue.active)try{const i=parseInt(it("sculpt-res").value,10),t=Ue.enter(qt,i);Qn(t),Re();const e=it("brush-radius"),n=Ue.brush.radius/.12;e.min=n*.02,e.max=n*.5,e.step=n*.004,e.value=Ue.brush.radius,it("sculpt-status").textContent="彫刻中: 左ドラッグで編集 / 終了で確定"}catch(i){it("sculpt-status").textContent=i.message}};it("sculpt-exit").onclick=()=>{Ue.exit(),it("sculpt-status").textContent="終了しました"};document.querySelectorAll("#brush-type button").forEach(i=>{i.onclick=()=>{Ue.brush.type=i.dataset.brush,document.querySelectorAll("#brush-type button").forEach(t=>t.classList.toggle("active",t===i))}});document.querySelectorAll("#brush-shape button").forEach(i=>{i.onclick=()=>{Ue.brush.shape=i.dataset.shape,document.querySelectorAll("#brush-shape button").forEach(t=>t.classList.toggle("active",t===i))}});it("brush-radius").oninput=i=>{Ue.brush.radius=parseFloat(i.target.value)};it("brush-strength").oninput=i=>{Ue.brush.strength=parseFloat(i.target.value)};function gd(i){yi.setLighting(i),Le.setClearColor(i.bg,1),it("mat-spec").value=i.specGain,it("mat-pow").value=i.specPow,it("mat-rim").value=i.rimGain}{const i=it("light-presets");md.forEach((t,e)=>{const n=document.createElement("button");n.className="seg"+(e===0?" active":""),n.textContent=t.name,n.onclick=()=>{gd(t),i.querySelectorAll("button").forEach(s=>s.classList.remove("active")),n.classList.add("active")},i.appendChild(n)}),gd(md[0])}const Ju=(i,t)=>{yi.material.uniforms[i].value=t};it("mat-color").oninput=i=>{const t=new At(i.target.value);t.convertSRGBToLinear(),yi.material.uniforms.uBaseColor.value.set(t.r,t.g,t.b)};it("mat-spec").oninput=i=>Ju("uSpecGain",parseFloat(i.target.value));it("mat-pow").oninput=i=>Ju("uSpecPow",parseFloat(i.target.value));it("mat-rim").oninput=i=>Ju("uRimGain",parseFloat(i.target.value));it("mat-color").dispatchEvent(new Event("input"));it("save-sdfm").onclick=()=>{if(mt.objects.length===0){ee("保存するオブジェクトがありません");return}const i=mt.serialize(),t=Yb({grid:{cellSize:Wi.cellSize,unit:"m",unitScaleMm:Sr(),stlUnit:Hu()},objects:i.objects,volumes:i.volumes});Du(t,"scene.sdfm"),ee(`シーン保存: scene.sdfm（${(t.byteLength/1e6).toFixed(1)}MB）`)};it("save-sdf").onclick=()=>{let i,t;if(qt&&qt.isVolume)i=qt.volume.data,t=qt.name||"volume";else if(mt.objects.length){const n=jt.length?jt.slice():mt.objects.slice(),s=parseInt(it("merge-res").value,10);ee("ベイクして保存中…"),i=Xp(n,s,"volume"),t="volume"}else{ee("保存する形状がありません");return}const e=Wb(i);Du(e,`${t}.sdf`),ee(`SDF保存: ${t}.sdf（${(e.byteLength/1e6).toFixed(1)}MB）`)};it("merge-btn").onclick=()=>{const i=jt.length?jt.slice():mt.objects.slice();if(i.length<1){ee("結合する形状がありません");return}const t=parseInt(it("merge-res").value,10);try{ee("結合(ベイク)中…");const e=gE(i,t);Qn(e),Re(),ee(`結合: ${i.length}個を ${t}³ ボリュームに統合しました`)}catch(e){console.error(e),ee(`結合エラー: ${e.message}`)}};let Di=null,Yr=null;function UE(i){hs.clear(),Di&&(Di.geometry.dispose(),Di=null),Yr&&(Yr.geometry.dispose(),Yr=null);const t=_p(i);Yr=new st(t,new yo({color:10134450,flatShading:!0,metalness:0,roughness:.9,side:cn}));const e=new Lv(t);Di=new xo(e,new Vi({color:1711396,transparent:!0,opacity:.5})),Di.visible=it("wireframe").checked,hs.add(Yr,Di)}let Ua=!1;async function Jp(){if(mt.objects.length===0){ee("オブジェクトがありません");return}if(Ua)return;Ua=!0;const i=Yu();pr.classList.remove("hidden"),mr.style.width="0%",Ku.textContent="メッシュ生成中…";try{const t=await gp(mt,i,e=>{mr.style.width=`${e*100|0}%`});if(t.positions.length===0){ee("面が生成されませんでした");return}UE(t.positions),hs.visible=!0,it("show-preview").checked=!0,Xu=!1,it("show-sdf").checked=!1,ee(`プレビュー: 三角形 ${t.triangles.toLocaleString()} / グリッド ${t.dims.join("×")} / 並列${t.workers}`+(t.clamped?" ⚠上限で粗化":""))}catch(t){console.error(t),ee(`プレビューエラー: ${t.message}`)}finally{Ua=!1,pr.classList.add("hidden")}}it("preview-mesh").onclick=Jp;let _d=null;function nl(){Er(),hs.visible&&(clearTimeout(_d),_d=setTimeout(()=>{if(Ua){nl();return}Jp()},450))}it("export-scale").oninput=()=>{el(),nl()};it("stl-unit").onchange=Er;it("voxel-mm").oninput=nl;it("auto-voxel").onchange=()=>{it("voxel-mm").disabled=it("auto-voxel").checked,nl()};it("voxel-mm").disabled=it("auto-voxel").checked;it("show-preview").onchange=i=>{hs.visible=i.target.checked};it("wireframe").onchange=i=>{Di&&(Di.visible=i.target.checked)};it("show-sdf").onchange=i=>{Xu=i.target.checked};it("export-stl").onclick=async()=>{if(mt.objects.length===0){ee("オブジェクトがありません");return}const i=Yu();pr.classList.remove("hidden"),mr.style.width="0%",Ku.textContent="STL生成中…";try{const t=await Qb(mt,i,e=>{mr.style.width=`${e*100|0}%`});ee(`STL書き出し: model.stl（三角形 ${t.triangles.toLocaleString()}, グリッド ${t.dims.join("×")}, ボクセル~${i.voxelMm}mm, STL単位 ${i.stlUnit}）`+(t.clamped?" ⚠上限で粗化":""))}catch(t){console.error(t),ee(`STLエラー: ${t.message}`)}finally{pr.classList.add("hidden")}};
