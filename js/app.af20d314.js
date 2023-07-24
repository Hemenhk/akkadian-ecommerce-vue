(function(){"use strict";var t={2052:function(t,e,a){var n=a(9963),s=a(3636),r=a(7810),c=a(6252);const o={class:"app"};function i(t,e){const a=(0,c.up)("RouterView");return(0,c.wg)(),(0,c.iD)("div",o,[(0,c.Wm)(a)])}var l=a(3744);const d={},u=(0,l.Z)(d,[["render",i]]);var v=u,p=a(2201),m=a(2262),_=a(3577);const g=t=>((0,c.dD)("data-v-52d07684"),t=t(),(0,c.Cn)(),t),w={class:"container"},h=g((()=>(0,c._)("div",{class:"categories-li"},"Categories",-1)));var f={__name:"TheCategoriesDrawer",setup(t){const e=(0,m.iH)(!1),a=()=>e.value=!e.value;return(t,n)=>{const s=(0,c.up)("font-awesome-icon");return(0,c.wg)(),(0,c.iD)("div",w,[(0,c._)("li",{onClick:a,class:"parent-link"},[h,(0,c.Wm)(s,{icon:"chevron-up",class:(0,_.C_)("chevron "+(e.value?"chevron-down":"chevron-up "))},null,8,["class"])]),(0,c._)("ul",{class:(0,_.C_)("nested-drawer "+(e.value?"nested-drawer-open":"nested-drawer-closed"))},[(0,c._)("li",null,[(0,c.Wm)((0,m.SU)(p.rH),{to:"/beard"},{default:(0,c.w5)((()=>[(0,c.Uk)("Beard")])),_:1})]),(0,c._)("li",null,[(0,c.Wm)((0,m.SU)(p.rH),{to:"/hair"},{default:(0,c.w5)((()=>[(0,c.Uk)("Hair")])),_:1})])],2)])}}};const I=(0,l.Z)(f,[["__scopeId","data-v-52d07684"]]);var y=I;const k=t=>((0,c.dD)("data-v-1007f1d8"),t=t(),(0,c.Cn)(),t),C={class:"nav-container"},D={class:"nav"},b=k((()=>(0,c._)("li",null,[(0,c._)("a",{href:"#"},"About")],-1)));var q={__name:"NavLinks",setup(t){return(t,e)=>((0,c.wg)(),(0,c.iD)("div",C,[(0,c._)("ul",D,[(0,c._)("li",null,[(0,c.Wm)((0,m.SU)(p.rH),{to:"/"},{default:(0,c.w5)((()=>[(0,c.Uk)("Home")])),_:1})]),(0,c._)("li",null,[(0,c.Wm)((0,m.SU)(p.rH),{to:"/shop"},{default:(0,c.w5)((()=>[(0,c.Uk)("Shop")])),_:1})]),(0,c._)("li",null,[(0,c.Wm)(y)]),b])]))}};const P=(0,l.Z)(q,[["__scopeId","data-v-1007f1d8"]]);var O=P;const S={class:"drawer-body"},W=(0,c._)("hr",{class:"divider"},null,-1),H={class:"links-container"};var U={__name:"TheNavDrawer",props:{isOpen:{type:Boolean,required:!0}},emits:["closeDrawer"],setup(t,{emit:e}){const a=t,n=(0,m.Vh)(a,"isOpen"),s=()=>e("closeDrawer");return(t,e)=>{const a=(0,c.up)("font-awesome-icon");return(0,c.wg)(),(0,c.j4)(c.lR,{to:"body"},[n.value?((0,c.wg)(),(0,c.iD)("div",{key:0,class:"overlay",onClick:s})):(0,c.kq)("",!0),(0,c._)("div",{class:(0,_.C_)(["drawer-container",n.value?"drawer-open":"drawer-closed"])},[(0,c._)("div",S,[(0,c._)("div",{class:"header",onClick:s},[(0,c.Wm)(a,{class:"close-button",icon:"xmark"})]),W,(0,c._)("div",H,[(0,c.Wm)(O)])])],2)])}}};const A=U;var R=A,F=a(3907);const j={class:"container"},T={class:"img-container"},Z=["src"],x={class:"item-container"},L={class:"title"},z={class:"price"},E={class:"btn-container"},N={class:"btn-handler"},$={class:"quantity"};var K={__name:"TheCartItem",props:{title:{type:String,required:!0},price:{type:Number,required:!0},imageCover:{type:String,required:!0},quantity:{type:Number,required:!0},productId:{type:Number,required:!0}},setup(t){const e=t,a=(0,F.oR)(),n=(0,c.Fl)((()=>a.state.allProducts.allProducts.find((t=>t._id===e.productId)))),s=()=>{a.commit("cart/setIncrease",n.value)},r=()=>{a.commit("cart/setDecrease",n.value)},o=()=>{a.commit("cart/setRemove",n.value)};return(t,a)=>{const n=(0,c.up)("font-awesome-icon");return(0,c.wg)(),(0,c.iD)("div",j,[(0,c._)("div",T,[(0,c._)("img",{class:"image",src:e.imageCover},null,8,Z)]),(0,c._)("div",x,[(0,c._)("div",null,[(0,c._)("p",L,(0,_.zw)(e.title),1),(0,c._)("p",z,"$ "+(0,_.zw)(e.price),1)]),(0,c._)("div",E,[(0,c._)("div",N,[(0,c.Wm)(n,{icon:"minus",onClick:r,class:"decrease"}),(0,c._)("p",$,(0,_.zw)(e.quantity),1),(0,c.Wm)(n,{icon:"plus",onClick:s,class:"increase"})]),(0,c._)("div",null,[(0,c._)("p",{class:"remove",onClick:o},"Remove")])])])])}}};const B=(0,l.Z)(K,[["__scopeId","data-v-1c2ec044"]]);var G=B,M={__name:"TheCartDropdown",setup(t){const e=(0,F.oR)(),a=(0,c.Fl)((()=>e.state.cart.cartItems));return(t,e)=>((0,c.wg)(),(0,c.iD)("div",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(a.value,(t=>((0,c.wg)(),(0,c.j4)(G,(0,c.dG)(t,{key:t.id,quantity:t.quantity,product:{...t},productId:t.id}),null,16,["quantity","product","productId"])))),128))]))}};const V=M;var Y=V;const J=t=>((0,c.dD)("data-v-e4576160"),t=t(),(0,c.Cn)(),t),Q={class:"cart-drawer-header"},X=J((()=>(0,c._)("h3",null,"CART",-1))),tt={class:"cart-drawer-body"},et={class:"cart-dropdown-container"},at={class:"cart-drawer-footer"},nt={class:"checkout-btn"},st=J((()=>(0,c._)("p",null,"CHECKOUT",-1))),rt=J((()=>(0,c._)("p",null,"-",-1)));var ct={__name:"TheCartDrawer",props:{isOpen:{type:Boolean,required:!0}},emits:["closeDrawer"],setup(t,{emit:e}){const a=t,n=(0,F.oR)(),s=(0,c.Fl)((()=>n.state.cart.total)),r=(0,m.Vh)(a,"isOpen"),o=()=>{n.commit("cart/setClearCart")},i=()=>e("closeDrawer");return(t,e)=>{const a=(0,c.up)("font-awesome-icon");return(0,c.wg)(),(0,c.j4)(c.lR,{to:"#cart-drawer"},[r.value?((0,c.wg)(),(0,c.iD)("div",{key:0,class:"cart-overlay",onClick:i})):(0,c.kq)("",!0),(0,c._)("div",{class:(0,_.C_)(["cart-drawer-container",{"cart-drawer-open":r.value}])},[(0,c._)("div",Q,[X,(0,c.Wm)(a,{class:"close-button",icon:"xmark",onClick:i})]),(0,c._)("div",tt,[(0,c._)("div",et,[(0,c.Wm)(Y)])]),(0,c._)("div",at,[(0,c._)("button",nt,[st,rt,(0,c._)("p",null,"$ "+(0,_.zw)(s.value.toFixed(0)),1)]),(0,c._)("button",{onClick:o,class:"clear-btn"},"CLEAR")])],2)])}}};const ot=(0,l.Z)(ct,[["__scopeId","data-v-e4576160"]]);var it=ot;const lt=t=>((0,c.dD)("data-v-f3f8f8c0"),t=t(),(0,c.Cn)(),t),dt={class:"cart-container"},ut={class:"cart-icon"},vt=lt((()=>(0,c._)("span",{class:"material-symbols-outlined"}," local_mall ",-1))),pt={key:0},mt={key:1};var _t={__name:"TheCartIcon",setup(t){localStorage.getItem("cart");const e=(0,F.oR)(),a=(0,c.Fl)((()=>e.state.cart.itemCount)),n=(0,m.iH)(!1),s=()=>n.value=!0,r=()=>n.value=!1;return(t,e)=>((0,c.wg)(),(0,c.iD)("div",dt,[(0,c._)("button",ut,[n.value?n.value?((0,c.wg)(),(0,c.iD)("div",{key:1,onClick:r},[(0,c.Wm)(it,{isOpen:n.value,onCloseDrawer:r},null,8,["isOpen"])])):(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("div",{key:0,onClick:s},[vt,a.value>0?((0,c.wg)(),(0,c.iD)("p",pt,(0,_.zw)(a.value),1)):((0,c.wg)(),(0,c.iD)("p",mt,"0"))]))])]))}};const gt=(0,l.Z)(_t,[["__scopeId","data-v-f3f8f8c0"]]);var wt=gt,ht=a.p+"img/logo.5fb7270a.png";const ft={class:"main-header"},It={class:"drawer-icon"},yt={key:0},kt=["src"],Ct={class:"cart-container"};var Dt={__name:"TheHeader",setup(t){const e=(0,m.iH)(!1),a=(0,m.iH)(ht),n=()=>{e.value=!0},s=()=>{e.value=!1};return(t,r)=>{const o=(0,c.up)("font-awesome-icon");return(0,c.wg)(),(0,c.iD)("div",ft,[(0,c._)("div",It,[(0,c._)("div",null,[(0,c.Wm)(o,{onClick:n,class:"menu-icon",icon:"bars"})]),e.value?((0,c.wg)(),(0,c.iD)("div",yt,[(0,c.Wm)(R,{isOpen:e.value,onCloseDrawer:s},null,8,["isOpen"])])):(0,c.kq)("",!0)]),(0,c._)("div",null,[(0,c.Wm)((0,m.SU)(p.rH),{to:"/"},{default:(0,c.w5)((()=>[(0,c._)("img",{class:"image",src:a.value},null,8,kt)])),_:1})]),(0,c._)("div",Ct,[(0,c.Wm)(wt)])])}}};const bt=(0,l.Z)(Dt,[["__scopeId","data-v-5e5008b5"]]);var qt=bt;const Pt=t=>((0,c.dD)("data-v-7f0ac6d4"),t=t(),(0,c.Cn)(),t),Ot={class:"container"},St=Pt((()=>(0,c._)("h2",null,"Footer",-1))),Wt=[St];function Ht(t,e){return(0,c.wg)(),(0,c.iD)("div",Ot,Wt)}const Ut={},At=(0,l.Z)(Ut,[["render",Ht],["__scopeId","data-v-7f0ac6d4"]]);var Rt=At;const Ft={class:"wrapper"},jt={class:"main-content"},Tt={class:"footer"};var Zt={__name:"DefaultLayout",setup(t){return(t,e)=>((0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(qt),(0,c._)("div",Ft,[(0,c._)("div",jt,[(0,c.Wm)((0,m.SU)(p.MA))]),(0,c._)("div",Tt,[(0,c.Wm)(Rt)])])]))}};const xt=(0,l.Z)(Zt,[["__scopeId","data-v-188abb7a"]]);var Lt=xt;const zt=t=>((0,c.dD)("data-v-18a28506"),t=t(),(0,c.Cn)(),t),Et={class:"container"},Nt=zt((()=>(0,c._)("div",{class:"hero-text"},[(0,c._)("h1",null," Nurture your beard and style your hair with the highest quaility ingredients. "),(0,c._)("p",null," Our products are made with natural ingredients and are always ethically sourced, so you can enjoy the benefits from all around the world ")],-1))),$t=zt((()=>(0,c._)("button",{class:"hero-button"},"View products",-1)));var Kt={__name:"TheHero",setup(t){return(t,e)=>((0,c.wg)(),(0,c.iD)("section",Et,[Nt,(0,c._)("div",null,[(0,c.Wm)((0,m.SU)(p.rH),{to:"/shop"},{default:(0,c.w5)((()=>[$t])),_:1})])]))}};const Bt=(0,l.Z)(Kt,[["__scopeId","data-v-18a28506"]]);var Gt=Bt;const Mt=t=>((0,c.dD)("data-v-2336f70e"),t=t(),(0,c.Cn)(),t),Vt={class:"container"},Yt={class:"perks"},Jt=Mt((()=>(0,c._)("h2",null,"Fast Shipping",-1))),Qt=Mt((()=>(0,c._)("p",null,"Our delivery times are 1-2 days in Sweden, and 4-6 abroad.",-1))),Xt={class:"perks"},te=Mt((()=>(0,c._)("h2",null,"International Market",-1))),ee=Mt((()=>(0,c._)("p",null,"We sell and deliver products abroad to EU, UK, USA and Canada.",-1))),ae={class:"perks"},ne=Mt((()=>(0,c._)("h2",null,"Natural Ingredients",-1))),se=Mt((()=>(0,c._)("p",null,"All out products are made with the highest quality of ingredients.",-1)));function re(t,e){const a=(0,c.up)("font-awesome-icon");return(0,c.wg)(),(0,c.iD)("div",Vt,[(0,c._)("div",Yt,[(0,c.Wm)(a,{class:"menu-icon",icon:"truck-fast"}),Jt,Qt]),(0,c._)("div",Xt,[(0,c.Wm)(a,{class:"menu-icon",icon:"earth-americas"}),te,ee]),(0,c._)("div",ae,[(0,c.Wm)(a,{class:"menu-icon",icon:"leaf"}),ne,se])])}const ce={},oe=(0,l.Z)(ce,[["render",re],["__scopeId","data-v-2336f70e"]]);var ie=oe;a(7658);const le=(t,e)=>e.find((e=>e.id===t._id)),de={class:"card-container"},ue=["src"],ve={class:"card-body"},pe={class:"product-title"},me={class:"product-price"},_e={class:"btn-container"};var ge={__name:"FeaturedProduct",props:{productId:{type:String,required:!0}},setup(t){const e=t,a=(0,F.oR)(),n=(0,p.tv)(),s=a.state.allProducts.allProducts.find((t=>t._id===e.productId)),{title:r,imageCover:o,price:i}=s,l=(0,c.Fl)((()=>a.state.cart.cartItems)),d=()=>{a.commit("cart/setAddProduct",s)},u=()=>{a.commit("cart/setIncrease",s)},v=()=>n.push(`/${e.productId}`);return(t,e)=>((0,c.wg)(),(0,c.iD)("div",de,[(0,c._)("img",{onClick:v,class:"image",src:(0,m.SU)(o)},null,8,ue),(0,c._)("div",ve,[(0,c._)("p",pe,(0,_.zw)((0,m.SU)(r)),1),(0,c._)("p",me,"$ "+(0,_.zw)((0,m.SU)(i)),1)]),(0,c._)("div",_e,[(0,m.SU)(le)((0,m.SU)(s),l.value)?((0,c.wg)(),(0,c.iD)("button",{key:1,onClick:u},"ADD MORE")):((0,c.wg)(),(0,c.iD)("button",{key:0,onClick:d}," ADD TO CART "))])]))}};const we=(0,l.Z)(ge,[["__scopeId","data-v-fd8a27a8"]]);var he=we;const fe=t=>((0,c.dD)("data-v-4fa624a5"),t=t(),(0,c.Cn)(),t),Ie={class:"collection-container"},ye=fe((()=>(0,c._)("h2",null,"Featured Collection",-1))),ke={key:0,class:"collection"};var Ce={__name:"FeaturedCollection",setup(t){const e=(0,F.oR)();e.dispatch("allProducts/fetchAllProducts");const a=(0,c.Fl)((()=>e.state.allProducts.allProducts.filter(((t,e)=>e<4)))),n=(0,c.Fl)((()=>e.state.allProducts.isLoading));return(t,e)=>((0,c.wg)(),(0,c.iD)("div",Ie,[ye,n.value?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("div",ke,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(a.value,(t=>((0,c.wg)(),(0,c.j4)(he,(0,c.dG)({key:t.productId},t,{productId:t._id}),null,16,["productId"])))),128))]))]))}};const De=(0,l.Z)(Ce,[["__scopeId","data-v-4fa624a5"]]);var be=De;const qe={class:"home-container"},Pe={class:"hero-banner"},Oe={class:"collection-container"};var Se={__name:"HomePage",setup(t){return(t,e)=>((0,c.wg)(),(0,c.iD)("div",qe,[(0,c._)("div",Pe,[(0,c.Wm)(Gt)]),(0,c._)("div",null,[(0,c.Wm)(ie)]),(0,c._)("div",Oe,[(0,c.Wm)(be)])]))}};const We=(0,l.Z)(Se,[["__scopeId","data-v-3411f430"]]);var He=We;const Ue=t=>((0,c.dD)("data-v-ed6887c2"),t=t(),(0,c.Cn)(),t),Ae={class:"products-container"},Re=Ue((()=>(0,c._)("h2",{class:"heading"},"Shop",-1))),Fe={key:0,class:"products"};var je={__name:"AllProducts",setup(t){const e=(0,F.oR)();e.dispatch("allProducts/fetchAllProducts");const a=(0,c.Fl)((()=>e.state.allProducts.allProducts)),n=(0,c.Fl)((()=>e.state.allProducts.isLoading));return(t,e)=>((0,c.wg)(),(0,c.iD)("div",Ae,[Re,n.value?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("div",Fe,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(a.value,(t=>((0,c.wg)(),(0,c.j4)(he,(0,c.dG)(t,{key:t._id,productId:t._id}),null,16,["productId"])))),128))]))]))}};const Te=(0,l.Z)(je,[["__scopeId","data-v-ed6887c2"]]);var Ze=Te,xe={__name:"ShopPage",setup(t){return(t,e)=>((0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(Ze)]))}};const Le=xe;var ze=Le;const Ee={class:"accordion-container"},Ne={class:"accordion-usage"},$e=(0,c._)("h2",null,"Usage",-1),Ke={class:"accordion-ingredients"},Be=(0,c._)("h2",null,"Ingredients",-1);var Ge={__name:"TheProductTabs",props:{usage:{type:String,required:!0},ingredients:{type:String,required:!0}},setup(t){const e=t,a=(0,m.qj)({usageIsOpen:!1,ingIsOpen:!1}),n=()=>{a.usageIsOpen=!a.usageIsOpen},s=()=>{a.ingIsOpen=!a.ingIsOpen};return(t,r)=>{const o=(0,c.up)("font-awesome-icon");return(0,c.wg)(),(0,c.iD)("div",Ee,[(0,c._)("div",Ne,[(0,c._)("div",{onClick:n,class:"accordion-title"},[$e,a.usageIsOpen?((0,c.wg)(),(0,c.j4)(o,{key:1,icon:"minus"})):((0,c.wg)(),(0,c.j4)(o,{key:0,icon:"plus"}))]),a.usageIsOpen?((0,c.wg)(),(0,c.iD)("div",{key:0,class:(0,_.C_)(`accordion-content ${a&&"accordion-open"}`)},[(0,c._)("p",null,(0,_.zw)(e.usage),1)],2)):(0,c.kq)("",!0)]),(0,c._)("div",Ke,[(0,c._)("div",{onClick:s,class:"accordion-title"},[Be,a.ingIsOpen?((0,c.wg)(),(0,c.j4)(o,{key:1,icon:"minus"})):((0,c.wg)(),(0,c.j4)(o,{key:0,icon:"plus"}))]),a.ingIsOpen?((0,c.wg)(),(0,c.iD)("div",{key:0,class:(0,_.C_)(`accordion-content ${a&&"accordion-open"}`)},[(0,c._)("p",null,(0,_.zw)(e.ingredients),1)],2)):(0,c.kq)("",!0)])])}}};const Me=Ge;var Ve=Me;const Ye=t=>((0,c.dD)("data-v-a34966cc"),t=t(),(0,c.Cn)(),t),Je={key:0,class:"container"},Qe={class:"left-side"},Xe={class:"img-container"},ta=["src"],ea={class:"tabs-lg"},aa={class:"right-side"},na={class:"info-container"},sa={class:"title"},ra={class:"price"},ca={class:"quantity-container"},oa=Ye((()=>(0,c._)("p",null,"Quantity:",-1))),ia={class:"quantity-selector"},la={class:"quantity"},da={class:"btn-container"},ua={class:"description"},va={class:"tabs-sm"};var pa={__name:"SingleItem",setup(t){const e=(0,F.oR)(),a=(0,p.yj)(),n=(0,m.iH)(1),s=a.params.productId,r=(0,c.Fl)((()=>e.state.cart.cartItems));e.dispatch("product/fetchSingleProduct",s);const o=(0,c.Fl)((()=>e.state.product.product)),i=(0,c.Fl)((()=>e.state.product.isLoading)),l=()=>{const t={...o.value,quantity:n.value};e.commit("cart/setAddProduct",t),n.value=1},d=()=>{const t={...o.value,quantity:n.value};e.commit("cart/setAmountIncrease",t),n.value=1},u=()=>{n.value=n.value+1},v=()=>{n.value>1&&(n.value=n.value-1)};return(t,e)=>{const a=(0,c.up)("font-awesome-icon");return i.value?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("div",Je,[(0,c._)("div",Qe,[(0,c._)("div",Xe,[(0,c._)("img",{class:"image",src:o.value.imageCover},null,8,ta)]),(0,c._)("div",ea,[(0,c.Wm)(Ve,{usage:o.value.usage,ingredients:o.value.ingredients},null,8,["usage","ingredients"])])]),(0,c._)("div",aa,[(0,c._)("div",na,[(0,c._)("p",sa,(0,_.zw)(o.value.title),1),(0,c._)("p",ra,"$ "+(0,_.zw)(o.value.price),1)]),(0,c._)("div",ca,[oa,(0,c._)("div",ia,[(0,c.Wm)(a,{icon:"minus",onClick:v,class:"decrease"}),(0,c._)("p",la,(0,_.zw)(n.value),1),(0,c.Wm)(a,{icon:"plus",onClick:u,class:"increase"})])]),(0,c._)("div",da,[(0,m.SU)(le)(o.value,r.value)?((0,c.wg)(),(0,c.iD)("button",{key:1,onClick:d},"ADD MORE")):((0,c.wg)(),(0,c.iD)("button",{key:0,onClick:l}," ADD TO CART "))]),(0,c._)("div",ua,(0,_.zw)(o.value.description),1)]),(0,c._)("div",va,[(0,c.Wm)(Ve,{usage:o.value.usage,ingredients:o.value.ingredients},null,8,["usage","ingredients"])])]))}}};const ma=(0,l.Z)(pa,[["__scopeId","data-v-a34966cc"]]);var _a=ma;const ga=t=>((0,c.dD)("data-v-79082f9e"),t=t(),(0,c.Cn)(),t),wa={class:"container"},ha=ga((()=>(0,c._)("h2",null,"Beard",-1))),fa={class:"beard-products"};var Ia={__name:"BeardProducts",setup(t){const e=(0,F.oR)(),a=e.state.allProducts.allProducts,n=a.filter((t=>t.categories.includes("beard")));return(t,e)=>((0,c.wg)(),(0,c.iD)("div",wa,[ha,(0,c._)("div",fa,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,m.SU)(n),(t=>((0,c.wg)(),(0,c.j4)(he,{key:t.id,productId:t.id},null,8,["productId"])))),128))])]))}};const ya=(0,l.Z)(Ia,[["__scopeId","data-v-79082f9e"]]);var ka=ya;const Ca=t=>((0,c.dD)("data-v-5d0ead46"),t=t(),(0,c.Cn)(),t),Da={class:"container"},ba=Ca((()=>(0,c._)("h2",null,"Hair",-1))),qa={class:"hair-products"};var Pa={__name:"HairProducts",setup(t){const e=(0,F.oR)(),a=e.state.allProducts.allProducts,n=a.filter((t=>t.categories.includes("hair")));return(t,e)=>((0,c.wg)(),(0,c.iD)("div",Da,[ba,(0,c._)("div",qa,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,m.SU)(n),(t=>((0,c.wg)(),(0,c.j4)(he,{key:t.id,productId:t.id},null,8,["productId"])))),128))])]))}};const Oa=(0,l.Z)(Pa,[["__scopeId","data-v-5d0ead46"]]);var Sa=Oa;const Wa=[{path:"/",name:"Root",component:Lt,children:[{path:"/",name:"Home",component:He},{path:"shop",name:"Shop",component:ze},{path:"/:productId",name:"Single Item",component:_a},{path:"/beard",name:"Beard Products",component:ka},{path:"/hair",name:"Hair Products",component:Sa}]}],Ha=(0,p.p7)({history:(0,p.r5)(),routes:Wa});var Ua=Ha;const Aa=t=>{const e=t.length>0?t:[];localStorage.setItem("cart",JSON.stringify(e))},Ra=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],Fa=t=>{Aa(t);const e=t.reduce(((t,e)=>t+e.quantity),0),a=t.reduce(((t,e)=>t+e.price*e.quantity),0);return{itemCount:e,total:a}},ja={cartItems:Ra,...Fa(Ra)},Ta={namespaced:!0,state:ja,mutations:{setAddProduct(t,e){const{id:a,quantity:n}=e,s=t.cartItems.find((t=>t.id===a));s||t.cartItems.push({...e,quantity:n||1});const{itemCount:r,total:c}=Fa(t.cartItems);t.itemCount=r,t.total=c,Aa(t.cartItems)},setAmountIncrease(t,e){const{id:a,quantity:n}=e,s=t.cartItems.findIndex((t=>t.id===a));t.cartItems[s].quantity=(t.cartItems[s].quantity||0)+n;const{itemCount:r,total:c}=Fa(t.cartItems);t.itemCount=r,t.total=c,Aa(t.cartItems)},setIncrease(t,e){const{id:a}=e,n=t.cartItems.findIndex((t=>t.id===a));t.cartItems[n].quantity=(t.cartItems[n].quantity||0)+1;const{itemCount:s,total:r}=Fa(t.cartItems);t.itemCount=s,t.total=r,Aa(t.cartItems)},setDecrease(t,e){const a=t.cartItems.findIndex((t=>t.id===e.id));if(a>=0){const e=t.cartItems[a];e.quantity>0&&e.quantity--}const{itemCount:n,total:s}=Fa(t.cartItems);t.itemCount=n,t.total=s,Aa(t.cartItems)},setRemove(t,e){const a=t.cartItems.findIndex((t=>t.id===e.id));a>=0&&t.cartItems.splice(a,1);const{itemCount:n,total:s}=Fa(t.cartItems);t.itemCount=n,t.total=s,Aa(t.cartItems)},setClearCart(t){t.cartItems=[],t.itemCount=0,t.total=0,localStorage.removeItem("cart")}}};var Za=Ta,xa=a(2382);const La={namespaced:!0,state:{allProducts:[],isLoading:!1,error:null},mutations:{setProducts(t,e){t.allProducts=e},setIsLoading(t,e){t.isLoading=e},setError(t,e){t.error=e}},actions:{async fetchAllProducts({commit:t}){t("setIsLoading",!0);try{const e=await xa.Z.get("https://akk-api-eb96d31d9900.herokuapp.com/api/products"),a=e.data.data.products;t("setProducts",a),t("setIsLoading",!1)}catch(e){t("setError","Failed to fetch data from the API")}}}};var za=La;const Ea={namespaced:!0,state:{product:null,isLoading:!1,error:null},mutations:{setProduct(t,e){t.product=e},setIsLoading(t,e){t.isLoading=e},setError(t,e){t.error=e}},actions:{async fetchSingleProduct({commit:t},e){t("setIsLoading",!0);try{const a=await xa.Z.get(`https://akk-api-eb96d31d9900.herokuapp.com/api/products/${e}`),n=a.data.data.product;t("setProduct",n),t("setIsLoading",!1)}catch(a){t("setError","Failed to fetch data from the API")}}},getters:{getProduct(t){return t.product}}};var Na=Ea;const $a=(0,F.MT)({modules:{cart:Za,allProducts:za,product:Na}});var Ka=$a,Ba=a(9417),Ga=a(4288);s.vI.add(Ba.g82,Ba.xiG,Ba.x6G,Ba.p7q,Ba.XEC,Ba.Kl4,Ba.r8p,Ga.Vui,Ga.I7k,Ba.$aW,Ba.mTx),(0,n.ri)(v).use(Ua).use(Ka).component("font-awesome-icon",r.GN).mount("#app")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,r){if(!n){var c=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],r=t[d][2];for(var o=!0,i=0;i<n.length;i++)(!1&r||c>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[i])}))?n.splice(i--,1):(o=!1,r<c&&(c=r));if(o){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,s,r]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/akkadian-ecommerce-vue/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,c=n[0],o=n[1],i=n[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(i)var d=i(a)}for(e&&e(n);l<c.length;l++)r=c[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},n=self["webpackChunkakkadian_ecommerce_vue"]=self["webpackChunkakkadian_ecommerce_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2052)}));n=a.O(n)})();
//# sourceMappingURL=app.af20d314.js.map