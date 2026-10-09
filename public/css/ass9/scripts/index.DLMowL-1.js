import{L as b,N as _,M as C,R as w}from"./entry.DyLJOV_i.js";var f,D=new Uint8Array(16);function K(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(D)}var x=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function U(t){return typeof t=="string"&&x.test(t)}var s=[];for(var g=0;g<256;++g)s.push((g+256).toString(16).substr(1));function V(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!U(i))throw TypeError("Stringified UUID is invalid");return i}function $(t,e,i){t=t||{};var r=t.random||(t.rng||K)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,V(r)}const L=({visitorId:t,data:e})=>`    
    mutation {
        updateTrackerVisitorData (
            visitorId: "${t}"         
            data: ${e}
        )
    }
`,q=({visitorId:t})=>`
    query {
        tracker {
            segment (
                visitorId: "${t}",
                searchType: "EXACT")
            {
                visits {
                    id
                    ts
                    ipAddress
                    event
                    channel
                    uuid
                    channelClickId
                    utmSource
                    utmCampaign
                    url
                    device
                }
            }
        }
    }
`;class O{$httpGql;$logger;constructor(e,i){this.$httpGql=e,this.$logger=i}async updateTrackingDetails(e={}){try{const{errors:i}=await this.$httpGql({handleApiErrors:!0}).post({query:L({visitorId:e.vId,data:JSON.stringify(JSON.stringify(e))})}).json();i&&this.$logger.error("[TRACKER] updateTrackingDetails error:",i)}catch(i){this.$logger.error("[TRACKER] updateTrackingDetails error:",i)}}async getTrackingDetails(e={}){try{const{data:i,errors:r}=await this.$httpGql({handleApiErrors:!0}).post({query:q(e)}).json();if(!r)return{visits:i.tracker.segment.visits};r&&this.$logger.error("[TRACKER] getTrackingDetails error:",r)}catch(i){this.$logger.error("[TRACKER] getTrackingDetails error:",i)}return null}}function n(t){return t?.trim()?t:null}function T(t,e){return n(t.gclid)??n(t["amp;gclid"])??n(e.gclid)??n(t.wbraid)??n(t["amp;wbraid"])??n(e.wbraid)??n(t.gbraid)??n(t["amp;gbraid"])??n(e.gbraid)??n(t.partnerId)??n(t["amp;partnerId"])??n(e.partnerId)}function v(t,e){return n(t.msclkid)??n(t["amp;msclkid"])??n(e.msclkid)}function N(t,e,i){const r=T(t,e)??v(t,e);return r||i.warn("[TRACKER] Missing ClickId"),r}function M(t,e,i){let r=n(t.utm_source)??n(t["amp;utm_source"])??n(e.utm_source);return r||(T(t,e)?r="google":v(t,e)&&(r="bing")),r||i.warn("[TRACKER] Missing utm_source"),r}function G(t,e,i){const r=n(t.utm_campaign)??n(t["amp;utm_campaign"])??n(e.utm_campaign);return r||i.warn("[TRACKER] Missing utmCampaign"),r}function E(t,e){try{const i=Array.isArray(e)?e:e?.split(",").map(a=>a.trim());if(!i||i.length===0)return!1;const r=new URL(t),u=r.hostname.toLowerCase();return r.protocol!=="https:"&&r.protocol!=="http:"?!1:i.some(a=>{if(!a||typeof a!="string")return!1;const c=a.toLowerCase();return u===c||u.endsWith(`.${c}`)})}catch{return!1}}function j(t,e,i,r){if(!e)return i.warn("[TRACKER] warn: utmSource is empty"),!1;const u=r.tracking.utm_source_domains?.[e.toLowerCase()];return u?E(t,u):(i.warn("[TRACKER] warn: no associated utmSource domains"),!1)}const H=b({setup(){},async asyncData({route:t,store:e,$httpGql:i,$logger:r,$appConfig:u}){let a,c;const h=new O(i,r),k=new URLSearchParams(t.query);async function A(){return(await h.getTrackingDetails({visitorId:e.state.visitor?.id})).visits??[]}const o=Object.fromEntries(k.entries());if(r.log(`[TRACKER] Tracker params: ${JSON.stringify(o)}`),!o.url&&!o["amp;url"])throw r.warn("[TRACKER] Missing tracker destination url"),_({statusCode:404,fatal:!0});const d=o.url??o["amp;url"],l=Object.fromEntries(new URLSearchParams(d.split("?")[1]).entries());r.log(`[TRACKER] Tracker URL params: ${JSON.stringify(l)}`),o.gb==="1"||o["amp;gb"]==="1"||r.warn("[TRACKER] Missing gb=1 param indicates not a parallel tracking call.");const p=([a,c]=C(()=>A()),a=await a,c(),a),m=M(o,l,r);if(!E(d,u.tracking?.utm_allowed_domains)&&!j(d,m,r,u))return r.warn(`[TRACKER] Non-Upwork domain with missing utmSource. Redirecting to root page. URL: ${d}`),w("/",{external:!0}),!0;const R=N(o,l,r),y=G(o,l,r);r.log(`[TRACKER] utmSource: '${m}',utmCampaign: '${y}',clickId: '${R}'`);const I=e.state.visitor?.id.lastIndexOf("."),S=e.state.visitor?.id.substring(0,I);for(p.push({id:$(),ts:new Date().toISOString(),ipAddress:S,event:"click",channel:n(o.source)??n(m),channelClickId:R,utmSource:m,utmCampaign:y,url:t.fullPath,device:l.device});p.length>u.trackerMaxVisits;)p.shift();return[a,c]=C(()=>h.updateTrackingDetails({vId:e.state.visitor?.id,visits:p})),await a,c(),w(d,{external:!0}),!0}},"$JOcLqyWdri");export{H as default};
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/_nuxt/index.DLMowL-1.js.map
