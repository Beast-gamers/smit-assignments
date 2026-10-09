import{aa as l,J as g,M as u,R as c}from"./entry.DyLJOV_i.js";const f=(t,e)=>`
  query{
      firstRedirect(personId:${t}, orgId:${e}){
        redirectUrl
      }
    }
`;class h{$httpGql;$logger;constructor(e,r){this.$httpGql=e,this.$logger=r}async getFirstRedirect(e,r){try{const{data:s,errors:n}=await this.$httpGql({handleApiErrors:!0,useSubordinateOauth:!0}).post({query:f(e,r)}).json();return n?null:s.firstRedirect?.redirectUrl}catch(s){this.$logger.warn("[ACQ] getFirstRedirect error: ",s)}return null}}var $=l(async()=>{let t,e;const{$store:r,$logger:s,$httpGql:n,$abTesting:a}=g();if(r.getters["context/isUser"]){const i="/home";if([t,e]=u(()=>a.init()),await t,e(),a.features.MP18244RedirectIfAuthenticated.isEnabled()&&r.state?.user?.id&&r.state?.orgs?.current?.id){const d=new h(n,s),o=([t,e]=u(()=>d.getFirstRedirect(r.state?.user?.id,r.state?.orgs?.current?.id)),t=await t,e(),t);return o?(s?.log(`[Brontes] Detected user session with firstRedirect. Redirecting to. ${o}`),c(o,{external:!0})):(s?.log(`[Brontes] Detected user session with firstRedirect, but no return from firstRedirect. Redirecting to. ${i}`),c(i,{external:!0}))}return s?.log(`[Brontes] Detected user session. Redirecting to. ${i}`),c(i,{external:!0})}});export{$ as default};
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/_nuxt/redirect-if-authenticated.cOnVw24N.js.map
