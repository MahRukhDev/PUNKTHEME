(this["webpackJsonp@kyberswap/interface"]=this["webpackJsonp@kyberswap/interface"]||[]).push([[6],{"./src/assets/svg/bronze_icon.svg":function(e,t,n){"use strict";t.a=n.p+"static/media/bronze_icon.9a4e7fb5.svg"},"./src/assets/svg/gold_icon.svg":function(e,t,n){"use strict";t.a=n.p+"static/media/gold_icon.18b8a465.svg"},"./src/assets/svg/silver_icon.svg":function(e,t,n){"use strict";t.a=n.p+"static/media/silver_icon.d7fa450a.svg"},"./src/components/Icons/Search.tsx":function(e,t,n){"use strict";var i=n("./node_modules/react/jsx-runtime.js");t.a=function(e){var t=e.size,n=void 0===t?24:t,a=e.color;return Object(i.jsx)("svg",{width:n||24,height:n||24,viewBox:"0 0 ".concat(n," ").concat(n),fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{minWidth:n+"px"},children:Object(i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("path",{d:"M14.1931 5.58187C16.525 7.91369 16.525 11.6943 14.1931 14.0261C11.8613 16.358 8.08069 16.358 5.74887 14.0261C3.41704 11.6943 3.41704 7.91369 5.74887 5.58187C8.08069 3.25005 11.8613 3.25005 14.1931 5.58187",stroke:a||"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),Object(i.jsx)("path",{d:"M14.1499 14.06L19.9999 19.99",stroke:a||"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})}},"./src/components/Pagination/PaginationInputOnMobile.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/react/index.js"),s=n("./node_modules/rebass/dist/index.esm.js"),r=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=n("./src/hooks/useTheme.ts"),d=n("./node_modules/react/jsx-runtime.js"),c=r.default.input.withConfig({displayName:"PaginationInputOnMobile__Input",componentId:"sc-pvuyp1-0"})(["outline:none;border:none;background-color:",";color:",";overflow:hidden;text-overflow:ellipsis;font-weight:500;font-size:12px;line-height:16px;text-align:center;border-radius:20px;padding:8px 12px;::placeholder{color:",";}-webkit-appearance:textfield;::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}"],(e=>e.theme.buttonBlack),(e=>e.theme.primary),(e=>e.theme.subText));t.b=Object(r.default)((e=>{var t,n=e.className,r=e.page,l=e.lastPage,u=e.setPage,b=Object(o.a)(),p=Object(a.useState)(String(r)),m=Object(i.a)(p,2),g=m[0],h=m[1],x=Object(a.useRef)(null),j=Math.max(g.length,String(r).length),f=(t=j,Math.min(48+8*Math.max(t-3,0),120)),v=()=>{if(g.match(/^\d+$/)){var e=parseInt(g);Number.isNaN(e)||e<=0||e>l?h(String(r)):u(e)}else h(String(r))};return Object(a.useEffect)((()=>{h(String(r))}),[r]),Object(d.jsxs)("div",{className:n,children:[Object(d.jsx)(s.a,{sx:{display:"inline-flex",width:"min-content",alignItems:"center"},children:Object(d.jsx)(c,{ref:x,value:g,type:"number",onChange:e=>h(e.target.value),onBlur:v,onKeyUp:e=>{var t;"Enter"===e.key&&(v(),null===(t=x.current)||void 0===t||t.blur())},style:{width:"".concat(f,"px")}})}),Object(d.jsx)(s.d,{color:b.subText,sx:{fontWeight:500,fontSize:"12px",lineHeight:"16px"},children:"/"}),Object(d.jsx)(s.d,{color:b.subText,sx:{fontWeight:500,fontSize:"12px",lineHeight:"16px"},children:l})]})})).withConfig({displayName:"PaginationInputOnMobile",componentId:"sc-pvuyp1-1"})(["display:inline-flex;column-gap:8px;width:min-content;align-items:center;margin:0 4px;"])},"./src/components/Pagination/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),a=n("./node_modules/react/index.js"),s=n("./node_modules/react-feather/dist/icons/chevrons-left.js"),r=n("./node_modules/react-feather/dist/icons/chevron-left.js"),o=n("./node_modules/react-feather/dist/icons/chevron-right.js"),d=n("./node_modules/react-feather/dist/icons/chevrons-right.js"),c=n("./node_modules/react-use/esm/useMedia.js"),l="...",u=(e,t)=>{var n=t-e+1;return Array.from({length:n},((t,n)=>n+e))},b=n("./src/hooks/useTheme.ts"),p=n("./src/components/Pagination/PaginationInputOnMobile.tsx"),m=n("./node_modules/polished/dist/polished.esm.js"),g=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),h=g.default.ul.withConfig({displayName:"styles__PaginationContainer",componentId:"sc-3vaoia-0"})(["display:flex;justify-content:center;list-style-type:none;background:",";margin:0;padding:16px;"],(e=>e.theme.background)),x=g.default.li.withConfig({displayName:"styles__PaginationItem",componentId:"sc-3vaoia-1"})(["text-align:center;margin:auto 2px;display:flex;justify-content:center;align-items:center;min-width:36px;font-size:12px;color:",";"," ",""],(e=>{var t=e.theme;return e.$selected?t.primary:t.subText}),(e=>e.$disabled&&"\n     opacity: 0.5;\n     pointer-events: none\n  "),(e=>e.$selected&&"\n     pointer-events: none\n  ")),j=g.default.div.withConfig({displayName:"styles__PaginationButton",componentId:"sc-3vaoia-2"})(["height:36px;min-width:36px;width:fit-content;display:flex !important;justify-content:center;align-items:center;cursor:pointer;padding:8px;border-radius:50%;color:",";background:",";padding:0;border-radius:50%;"],(e=>{var t=e.theme;return e.active?t.primary:t.subText}),(e=>{var t=e.theme,n=e.active;return e.haveBg?n?t.buttonBlack:Object(m.d)(t.buttonBlack,.4):n?t.background:Object(m.d)(t.background,.4)})),f=n("./node_modules/react/jsx-runtime.js");function v(e){var t=e.onPageChange,n=e.totalCount,m=e.siblingCount,g=void 0===m?1:m,v=e.currentPage,O=e.pageSize,w=e.style,y=void 0===w?{}:w,_=e.haveBg,k=void 0===_||_,C=e.className,S=Object(c.a)("(max-width: 576px)"),T=(e=>{var t=e.totalCount,n=e.pageSize,i=e.siblingCount,s=void 0===i?1:i,r=e.currentPage;return Object(a.useMemo)((()=>{var e=Math.ceil(t/n);if(s+5>=e)return u(1,e);var i=Math.max(r-s,1),a=Math.min(r+s,e),o=i>2,d=a<e-2,c=e;if(!o&&d)return[...u(1,3+2*s),l,e];if(o&&!d){var b=u(e-(3+2*s)+1,e);return[1,l,...b]}var p=u(i,a);return[1,l,...p,l,c]}),[t,n,s,r])})({currentPage:v,totalCount:n,siblingCount:g,pageSize:O}),L=Object(b.a)(),I=T[T.length-1];if(0===v||T.length<2)return null;var N=()=>{v<T[T.length-1]&&t(v+1)},M=()=>{v>1&&t(v-1)};return S?Object(f.jsxs)(h,{className:C,style:Object(i.a)({columnGap:"4px",background:k?void 0:"transparent"},y),children:[Object(f.jsx)(x,{$disabled:1===v,onClick:()=>{t(1)},children:Object(f.jsx)(j,{haveBg:k,children:Object(f.jsx)(s.a,{width:16,color:L.subText})})}),Object(f.jsx)(x,{$disabled:1===v,onClick:M,children:Object(f.jsx)(j,{haveBg:k,children:Object(f.jsx)(r.a,{width:16,color:L.subText})})}),Object(f.jsx)(p.b,{page:v,lastPage:I,setPage:t}),Object(f.jsx)(x,{$disabled:v===I,onClick:N,children:Object(f.jsx)(j,{haveBg:k,children:Object(f.jsx)(o.a,{width:16,color:L.subText})})}),Object(f.jsx)(x,{$disabled:v===I,onClick:()=>{t(I)},children:Object(f.jsx)(j,{haveBg:k,children:Object(f.jsx)(d.a,{width:16,color:L.subText})})})]}):Object(f.jsxs)(h,{className:C,style:Object(i.a)({background:k?void 0:"transparent"},y),children:[Object(f.jsx)(x,{$disabled:1===v,onClick:M,children:Object(f.jsx)(j,{haveBg:k,children:Object(f.jsx)(r.a,{width:16,color:L.subText})})}),T.map(((e,n)=>e===l?Object(f.jsx)(x,{children:"\u2026"},n.toString()):Object(f.jsx)(x,{$selected:e===v,onClick:()=>t(e),children:Object(f.jsx)(j,{haveBg:k,active:e===v,children:e})},n.toString()))),Object(f.jsx)(x,{$disabled:v===I,onClick:N,children:Object(f.jsx)(j,{haveBg:k,children:Object(f.jsx)(o.a,{width:16,color:L.subText})})})]})}},"./src/components/Search/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n("./node_modules/@lingui/core/esm/index.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/react-feather/dist/icons/x.js")),s=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./src/components/Button/index.tsx"),o=n("./src/components/Icons/Search.tsx"),d=n("./src/hooks/useTheme.ts"),c=n("./node_modules/react/jsx-runtime.js"),l=s.default.div.withConfig({displayName:"Search__Container",componentId:"sc-1uuk9w1-0"})(["z-index:1;position:relative;background-color:",";border-radius:999px;@media screen and (max-width:768px){width:100%;}"],(e=>e.theme.background)),u=s.default.div.withConfig({displayName:"Search__Wrapper",componentId:"sc-1uuk9w1-1"})(["display:flex;position:relative;flex-direction:row;align-items:center;justify-content:flex-end;padding:6px 12px;border-radius:40px;width:100%;min-width:",";box-sizing:border-box;@media screen and (max-width:500px){box-shadow:none;min-width:100%;}"],(e=>e.minWidth||"360px")),b=s.default.input.withConfig({displayName:"Search__Input",componentId:"sc-1uuk9w1-2"})(["position:relative;display:flex;align-items:center;white-space:nowrap;background:none;border:none;outline:none;width:100%;color:",";font-size:12px;::placeholder{color:",";font-size:12px;}"],(e=>e.theme.text),(e=>e.theme.subText));t.d=e=>{var t=e.searchValue,n=e.onSearch,s=e.placeholder,p=e.minWidth,m=e.style,g=Object(d.a)();return Object(c.jsx)(l,{style:m,children:Object(c.jsxs)(u,{minWidth:p,children:[Object(c.jsx)(b,{type:"text",placeholder:s||i.a._("Search by pool address"),value:t,onChange:e=>{n(e.target.value)}}),t&&Object(c.jsx)(r.d,{onClick:()=>n(""),style:{padding:"2px 4px",width:"max-content"},children:Object(c.jsx)(a.a,{color:g.subText,size:14,style:{minWidth:"14px"}})}),Object(c.jsx)(o.a,{color:g.subText})]})})}},"./src/pages/Campaign/LeaderboardLayout.tsx":function(e,t,n){"use strict";n.d(t,"b",(function(){return W})),n.d(t,"a",(function(){return R}));var i,a,s,r,o,d,c=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),l=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),u=n("./node_modules/@lingui/react/esm/index.js"),b=n("./node_modules/@lingui/core/esm/index.js"),p=n("./node_modules/dayjs/dayjs.min.js"),m=n.n(p),g=n("./node_modules/polished/dist/polished.esm.js"),h=n("./node_modules/react/index.js"),x=n("./node_modules/react-feather/dist/icons/clock.js"),j=n("./node_modules/react-redux/es/index.js"),f=n("./node_modules/react-use/esm/useMedia.js"),v=n("./node_modules/react-use/esm/useSize.js"),O=n("./node_modules/rebass/dist/index.esm.js"),w=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),y=n("./src/assets/svg/bronze_icon.svg"),_=n("./src/assets/svg/gold_icon.svg"),k=n("./src/assets/svg/silver_icon.svg"),C=n("./src/components/InfoHelper/index.tsx"),S=n("./src/components/Pagination/index.tsx"),T=n("./src/components/Search/index.tsx"),L=n("./src/constants/index.ts"),I=n("./src/hooks/useTheme.ts"),N=n("./src/state/campaigns/actions.ts"),M=n("./src/state/campaigns/hooks.ts"),P=n("./src/utils/index.ts"),z=n("./src/utils/getShortenAddress.ts"),B=n("./node_modules/react/jsx-runtime.js"),W={1:"linear-gradient(90deg, rgba(255, 204, 102, 0.25) 0%, rgba(255, 204, 102, 0) 54.69%, rgba(255, 204, 102, 0) 100%)",2:"linear-gradient(90deg, rgba(224, 224, 224, 0.25) 0%, rgba(224, 224, 224, 0) 54.69%, rgba(224, 224, 224, 0) 100%)",3:"linear-gradient(90deg, rgba(255, 152, 56, 0.25) 0%, rgba(255, 152, 56, 0) 54.69%, rgba(255, 152, 56, 0) 100%)"};function R(e){var t,n=e.type,i=e.refreshIn,a=Object(f.a)("(min-width: 1200px)"),s=Object(I.a)(),r=Object(v.a)((()=>Object(B.jsx)("span",{children:Object(B.jsx)(u.b,{id:"Rank"})}))),o=Object(l.a)(r,2),d=o[0],c=o[1].width,p=Object(j.e)((e=>e.campaigns)),g=p.selectedCampaignLeaderboard,w=p.selectedCampaignLuckyWinners,R=p.selectedCampaign,Q=Object(M.c)(),X=Object(l.a)(Q,2),Z=X[0],ee=X[1],te=Object(M.d)(),ne=Object(l.a)(te,2),ie=ne[0],ae=ne[1],se=Object(M.b)(),re=Object(l.a)(se,2),oe=re[0],de=re[1],ce=Object(M.e)(),le=Object(l.a)(ce,2),ue=le[0],be=le[1],pe="leaderboard"===n?[oe,de]:[ue,be],me=Object(l.a)(pe,2),ge=me[0],he=me[1],xe=0;if("leaderboard"===n&&g&&(xe=oe?1:g.totalParticipants),"lucky_winner"===n&&R&&g){var je=R.rewardDistribution.filter((e=>"Random"===e.type)).reduce(((e,t)=>{var n;return e+(null!==(n=t.nWinners)&&void 0!==n?n:0)}),0);xe=ge?1:Math.min(je,g.totalParticipants)}var fe=Math.floor(i/60),ve=i-60*fe,Oe=Boolean(R&&R.isRewardShown),we="leaderboard"===n&&Oe||"lucky_winner"===n;Object(h.useEffect)((()=>{ee(0),ae(0)}),[ge,R,ae,ee]);var ye=(null!==(t=null===g||void 0===g?void 0:g.rankings)&&void 0!==t?t:[]).map(((e,t)=>{var n,i=Boolean(R&&e.totalPoint>=R.tradingVolumeRequired),s=(e.rewardInUSD?e.rewardAmountUsd:e.rewardAmount).equalTo(L.k)?"--":e.rewardInUSD&&(null===R||void 0===R?void 0:R.campaignState)!==N.a.CampaignStateDistributedRewards?b.a._("${0}",{0:e.rewardAmountUsd.toSignificant(L.x)}):"".concat(e.rewardAmount.toSignificant(L.x)," ").concat(e.token.symbol);return Object(B.jsxs)(G,{noColumns:Oe?4:3,showMedal:e.rankNo<=3,style:{background:null!==(n=W[e.rankNo])&&void 0!==n?n:"transparent"},children:[Object(B.jsx)(J,{align:"center",style:{width:(c===1/0?33:c)+"px",maxHeight:"24px"},isThisRankingEligible:i,children:1===e.rankNo?Object(B.jsx)(K,{src:_.a}):2===e.rankNo?Object(B.jsx)(K,{src:k.a}):3===e.rankNo?Object(B.jsx)(K,{src:y.a}):i?e.rankNo:Object(B.jsx)(F,{children:Object(B.jsx)(C.a,{size:14,text:b.a._("Not enough trading volume"),placement:"top",style:{margin:0}})})}),Object(B.jsx)(J,{isThisRankingEligible:i,children:Object(z.a)(e.userAddress,a)}),Object(B.jsx)(J,{align:"right",isThisRankingEligible:i,children:Object(P.h)(Number(e.totalPoint),0,2)}),we&&Object(B.jsx)(J,{align:"right",isThisRankingEligible:i,children:s})]},t)})),_e=w.map(((e,t)=>Object(B.jsxs)(G,{noColumns:2,showMedal:!1,style:{background:"transparent"},children:[Object(B.jsx)(J,{isThisRankingEligible:!0,children:Object(z.a)(e.userAddress,a)}),Object(B.jsxs)(J,{align:"right",isThisRankingEligible:!0,children:[e.rewardAmount.toSignificant(L.x)," ",e.token.symbol]})]},t)));if(void 0===R||R.status===N.b.UPCOMING)return Object(B.jsx)(O.b,{justifyContent:"center",alignItems:"center",height:"100%",p:"16px",children:Object(B.jsx)(O.d,{as:"span",textAlign:"center",children:Object(B.jsx)(u.b,{id:"This campaign does not have a leaderboard yet."})})});var ke="";if(g&&g.distributedRewardsAt){var Ce=m()(1e3*g.distributedRewardsAt).format("YYYY-MM-DD HH:mm");R.campaignState===N.a.CampaignStateDistributedRewards&&(ke="".concat(b.a._("Rewards were distributed at"),": ").concat(Ce))}return Object(B.jsxs)(H,{children:[Object(B.jsxs)(D,{children:[R.status!==N.b.ENDED&&"leaderboard"===n?Object(B.jsxs)(E,{children:[Object(B.jsx)($,{children:Object(B.jsx)(u.b,{id:"Leaderboard refresh in"})}),Object(B.jsxs)(U,{children:[Object(B.jsx)(x.a,{size:12}),Object(B.jsxs)(O.d,{fontSize:"12px",lineHeight:"14px",children:[1===fe.toString().length?"0"+fe:fe," :"," ",1===ve.toString().length?"0"+ve:ve]})]})]}):R.campaignState!==N.a.CampaignStateReady?Object(B.jsx)(E,{children:Object(B.jsx)($,{children:ke})}):null,Object(B.jsx)(A,{children:Object(B.jsx)(T.d,{placeholder:b.a._("Search by full address"),searchValue:ge,onSearch:he,style:{background:s.buttonBlack}})})]}),Object(B.jsxs)(Y,{children:[Object(B.jsxs)(V,{noColumns:"lucky_winner"===n?2:Oe?4:3,children:["leaderboard"===n&&Object(B.jsx)(q,{children:d}),Object(B.jsx)(q,{children:Object(B.jsx)(u.b,{id:"Wallet"})}),"leaderboard"===n&&Object(B.jsx)(q,{align:"right",children:Object(B.jsx)(u.b,{id:"Points"})}),we&&Object(B.jsx)(q,{align:"right",children:Object(B.jsx)(u.b,{id:"Rewards"})})]}),"leaderboard"===n?ye:_e]}),Object(B.jsx)(S.a,{onPageChange:e=>{"lucky_winner"===n?ae(e-1):ee(e-1)},totalCount:xe,currentPage:"lucky_winner"===n?ie+1:+Z+1,pageSize:L.r,style:{padding:"0"}})]})}var A=w.default.div.withConfig({displayName:"LeaderboardLayout__CustomSearchContainer",componentId:"sc-17reg57-0"})(["flex:1 1 100%;display:flex;justify-content:flex-end;","{flex:0 1 360px;}","{min-width:unset;}",""],T.a,T.c,(e=>e.theme.mediaWidth.upToMedium(i||(i=Object(c.a)(["\n    width: 100%;\n    flex: 0 0;\n\n    "," {\n      flex: 1 1 100%;\n    }\n  "])),T.a))),H=w.default.div.withConfig({displayName:"LeaderboardLayout__LeaderboardContainer",componentId:"sc-17reg57-1"})(["display:flex;flex-direction:column;gap:16px;padding:16px 0;"]),D=w.default.div.withConfig({displayName:"LeaderboardLayout__TextAndSearchContainer",componentId:"sc-17reg57-2"})(["display:flex;justify-content:space-between;align-items:center;gap:16px;align-content:center;padding:0 16px;",""],(e=>e.theme.mediaWidth.upToMedium(a||(a=Object(c.a)(["\n    flex-direction: column;\n    gap: 16px;\n  "]))))),E=w.default.div.withConfig({displayName:"LeaderboardLayout__TextContainer",componentId:"sc-17reg57-3"})(["flex-wrap:nowrap;white-space:nowrap;display:flex;align-items:center;gap:8px;"]),$=w.default.div.withConfig({displayName:"LeaderboardLayout__SubTextSmall",componentId:"sc-17reg57-4"})(["font-size:12px;line-height:14px;color:",";"],(e=>e.theme.subText)),U=w.default.div.withConfig({displayName:"LeaderboardLayout__CountdownContainer",componentId:"sc-17reg57-5"})(["width:73px;flex-wrap:nowrap;display:flex;align-items:center;gap:6px;padding:3px 6px;border-radius:12px;background:",";color:",";"],(e=>{var t=e.theme;return Object(g.d)(t.subText,.1)}),(e=>e.theme.subText)),Y=w.default.div.withConfig({displayName:"LeaderboardLayout__LeaderboardTable",componentId:"sc-17reg57-6"})([""]),V=w.default.div.withConfig({displayName:"LeaderboardLayout__LeaderboardTableHeader",componentId:"sc-17reg57-7"})(["padding:18px 20px;display:grid;align-items:center;background:",";"," "," ",""],(e=>e.theme.tableHeader),(e=>{var t=e.noColumns;return 4===t?Object(w.css)(["grid-template-columns:7.5fr 52.6fr 19.9fr 19.9fr;"]):3===t?Object(w.css)(["grid-template-columns:7.5fr 52.6fr 39.8fr;"]):Object(w.css)(["grid-template-columns:1fr 1fr;"])}),(e=>{var t=e.theme,n=e.noColumns;return t.mediaWidth.upToMedium(s||(s=Object(c.a)(["\n    ","\n    }"])),4===n?Object(w.css)(["grid-template-columns:1fr 2fr 2fr 2fr;"]):3===n?Object(w.css)(["grid-template-columns:1fr 2fr 1fr;"]):Object(w.css)(["grid-template-columns:1fr 1fr;"]))}),(e=>e.theme.mediaWidth.upToSmall(r||(r=Object(c.a)(["padding: 16px;"]))))),q=w.default.div.withConfig({displayName:"LeaderboardLayout__LeaderboardTableHeaderItem",componentId:"sc-17reg57-8"})(["font-size:12px;line-height:14px;font-weight:500;color:",";text-transform:uppercase;text-align:",";"],(e=>e.theme.subText),(e=>{var t=e.align;return null!==t&&void 0!==t?t:"left"})),G=Object(w.default)(V).withConfig({displayName:"LeaderboardLayout__LeaderboardTableBody",componentId:"sc-17reg57-9"})(["border-radius:0;background:transparent;border-bottom:1px solid ",";padding:",";",""],(e=>e.theme.border),(e=>e.showMedal?"16px 20px":"20px"),(e=>{var t=e.theme,n=e.showMedal;return t.mediaWidth.upToSmall(o||(o=Object(c.a)(["",""])),Object(w.css)(["padding:",";"],n?"14px 16px":"16px"))})),J=w.default.div.withConfig({displayName:"LeaderboardLayout__LeaderboardTableBodyItem",componentId:"sc-17reg57-10"})(["font-size:14px;line-height:16px;font-weight:500;text-align:",";display:flex;justify-content:",";color:",";white-space:nowrap;",""],(e=>{var t=e.align;return null!==t&&void 0!==t?t:"left"}),(e=>{var t=e.align;return"right"===t?"flex-end":"center"===t?"center":"flex-start"}),(e=>{var t=e.isThisRankingEligible,n=e.theme;return t?n.text:n.subText}),(e=>e.theme.mediaWidth.upToMedium(d||(d=Object(c.a)(["\n      font-size: 12px;\n      line-height: 14px;\n      font-weight: 400;\n    "]))))),K=w.default.img.withConfig({displayName:"LeaderboardLayout__MedalImg",componentId:"sc-17reg57-11"})(["min-width:18px;"]),F=w.default.div.withConfig({displayName:"LeaderboardLayout__InfoHelperWrapper",componentId:"sc-17reg57-12"})(["display:flex;align-items:center;justify-content:center;width:fit-content;margin:0;padding:5px;background:",";border-radius:50%;"],(e=>{var t=e.theme;return Object(g.d)(t.subText,.2)}))},"./src/utils/formatTime.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0===e)return"0 Days";var n,i=e%60,a=(e-i)/60,s=a%60,r=(a-s)/60,o=r%24,d=(r-o)/24,c="";!d&&t||(c+=d+(n=(t?" Day":"D")+(t&&d>1?"s ":" "))),!o&&t||(c+=o+(n=(t?" Hour":"H")+(t&&o>1?"s ":" "))),!s&&t||(c+=s+(n=(t?" Minute":"M")+(t&&s>1?"s ":" ")));var l=0===d&&0===o&&0===s;return l&&(n=(t?" Second":"S")+(t&&i>1?"s ":" "),c+=Math.trunc(i)+n),c}},"./src/utils/oembed2iframe.ts":function(e,t,n){"use strict";function i(e){for(var t=0;;){for(;t<e.length&&"<oembed"!==e.substring(t,t+7);)t++;if(t>=e.length-1)break;for(var n=t;t<e.length&&"</oembed>"!==e.substring(t,t+9);)t++;var i=t+9,a=e.substring(n,i).split(/url="/)[1].split(/"></)[0].split("?v=")[1];e=e.substring(0,n)+'\n  <div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">\n    <iframe src="https://www.youtube.com/embed/'.concat(a,'"\n      style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"\n      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>\n    </iframe>\n  </div>\n')+e.substring(i,e.length),t++}return e}n.d(t,"a",(function(){return i}))}}]);