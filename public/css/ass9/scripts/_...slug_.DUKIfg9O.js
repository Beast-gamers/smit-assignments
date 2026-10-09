import{_ as z,c,a as o,t as p,F as y,z as $,k as P,L as A,Q as D,M as q,N as C,x as U,o as n,n as b,y as H,f as S,h as k,e as N}from"./entry.DyLJOV_i.js";/* empty css             *//* empty css               *//* empty css             *//* empty css                    *//* empty css                   *//* empty css             */import{d as E}from"./index.CwNcbkkA.js";import{s as G}from"./locale-prefix.6_i3TwJl.js";const I=()=>`
  query {
    htmlSitemaps {
      categories {
        id
        title
        pagesAmount
        updatedDateTime
        createdDateTime
      }
    }
  }
`,M=(e,s,i)=>`
  query {
    htmlSitemaps {
      sitemap(
        categoryId: "${e}",
        limit: ${s},
        offset: ${i}
      ){
        id
        title
        pages{
            url
            title
            createdDateTime
            updatedDateTime
        }
        offset
        limit
        pagesAmount
        createdDateTime
        updatedDateTime
      }
    }
  }
`;class B{$httpGql;$cache;$logger;constructor(s,i,a){this.$httpGql=s,this.$cache=i,this.$logger=a}async getCategories(){try{const s="cache_buster_sitemap_html_categories",{data:i,errors:a}=await this.$cache.get(s,async()=>(this.$logger.warn("[VS] Getting data from method, not cache"),this.$httpGql({handleApiErrors:!0,auth:!1}).post({query:I()}).json()));if(a)this.$logger.warn(`[VS] ${a}`);else if(i?.htmlSitemaps?.categories?.length>0)return i.htmlSitemaps.categories;await this.$cache.delete(s)}catch(s){this.$logger.error(`[VS] getServicesInterlinking error: ${s.message}`)}return[]}async getCategoryPages(s,i,a){try{const r=`cache_buster_sitemap_html_pages_${s}_${i}_${a}`,{data:l,errors:m}=await this.$cache.get(r,async()=>this.$httpGql({handleApiErrors:!0,auth:!1}).post({query:M(s,i,a)}).json());return!m&&l?.htmlSitemaps?.sitemap?.pages?.length>0?l.htmlSitemaps.sitemap.pages:[]}catch(r){this.$logger.error(`[VS] getServicesInterlinking error: ${r.message}`)}return[]}}const Q=A({name:"HtmlSitemap",components:{UpLink:D},setup(){},mixins:[],async asyncData({route:e,$httpGql:s,$cache:i,$logger:a}){let r,l,t=0,g,h;const v=new B(s,i,a),w=([r,l]=q(()=>v.getCategories()),r=await r,l(),r);if(w.length<=0)throw a.warn("[VS] Missing categories on graphql "),C({statusCode:404,fatal:!0});const f=w.sort((u,V)=>u.title<V.title?-1:u.title<V.title?0:1);let d=f[0];const L=e.params.slug||[];if(L.length>0){if([g,h]=L,d=f.find(u=>u.id===g),!d)throw a.warn(`[VS] Category not found ${g}`),C({statusCode:404,fatal:!0});h&&h>0&&(t=h*1e3)}const T=([r,l]=q(()=>v.getCategoryPages(d.id,1e3,t)),r=await r,l(),r);let _=Math.floor(d.pagesAmount/1e3);if(h>0&&h>_)throw a.warn(`[VS] Category not found ${g}`),C({statusCode:404,fatal:!0});return _+=1,{htmlCategories:f,htmlCategoryPages:T,selectedCategory:d,pagesLimit:1e3,totalPages:_}},data(){return{}},computed:{sanitizedTitle(){return this.page.title?this.stripHtml(this.page.title):""}},meta:{graphQl:!0,trackingLocation:"html_sitemap",pageId:"htmlSitemap"},methods:{stripHtml(e){return e.replace(/(<([^>]+)>)/gi,"")},sanitizeHref(e){return E.sanitizeUrl(e)},shouldAddLocalePrefix:G}},"$-rvabajpFU"),j={id:"main",tabindex:"0",class:"html-sitemap-page"},F={class:"container-visitor"},K={class:"container-visitor"},x={class:"categories-menu"},J={class:"container-visitor"},O={class:"h4"},R={class:"container-visitor"},W={class:"air3-grid-container"},X={key:0,class:"container-visitor mt-8x"},Y={class:"h4"};function Z(e,s,i,a,r,l){const m=U("UpLink");return n(),c("main",j,[o("section",F,[o("h1",null,p(e.$t("br_UpworkSiteMap_900")),1)]),o("section",K,[o("ul",x,[(n(!0),c(y,null,$(e.htmlCategories,t=>(n(),c("li",{key:t.id,class:b({"active-menu":t.id===e.selectedCategory.id})},[H(m,{href:e.sanitizeHref("/sitemaps/"+t.id+"/")},{default:S(()=>[k(p(t.title),1)]),_:2},1032,["href"])],2))),128))])]),o("section",J,[o("h2",O,p(e.selectedCategory.title),1)]),o("section",R,[o("div",W,[(n(!0),c(y,null,$(e.htmlCategoryPages,t=>(n(),c("div",{key:t.url,class:"span-md-4 page-link"},[t.title?(n(),N(m,{key:0,href:e.sanitizeHref(t.url),"i18n-prefix":e.shouldAddLocalePrefix(t.url)},{default:S(()=>[k(p(e.stripHtml(t.title)),1)]),_:2},1032,["href","i18n-prefix"])):P("",!0)]))),128))])]),e.totalPages>1?(n(),c("section",X,[o("h2",Y,p(e.$t("br_MoreCatTitle_901",{title:e.selectedCategory.title})),1),o("div",null,[(n(!0),c(y,null,$(e.totalPages,t=>(n(),c("div",{key:t,class:"page-number-link"},[H(m,{href:e.sanitizeHref("/sitemaps/"+e.selectedCategory.id+"/"+(t-1)+"/")},{default:S(()=>[k(p(t-1),1)]),_:2},1032,["href"])]))),128))])])):P("",!0)])}var ce=z(Q,[["render",Z],["__scopeId","data-v-a8dc3a3a"]]);export{ce as default};
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/_nuxt/_...slug_.DUKIfg9O.js.map
