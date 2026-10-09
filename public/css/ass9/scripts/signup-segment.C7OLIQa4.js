const n=({visitorId:a,segmentName:e,data:t})=>`    
    mutation {
        updateSegment (
            visitorId: "${a}"
            segmentName: "${e}"                
            data: ${t}
        )
        {
            segment {
                visitorId
                segmentName
                data
            }
        }
    }
`;class o{$httpGql;$logger;$store;constructor(e,t,s){this.$httpGql=e,this.$logger=t,this.$store=s}async SaveSegment(e,t,s){try{const r={visitorId:e,segmentName:t,data:JSON.stringify(JSON.stringify(s))};return this.$httpGql({handleApiErrors:!0}).post({query:n(r)}).json()}catch(r){return this.$logger.error(`[VS]  graphQl failed to save segmentation data: ${r.message}`),r.message}}async saveProfileSegment(e){const t="signup-registration";let s;typeof e.shortName=="string"?s={firstName:e.shortName,lastName:""}:s=e.profilePersonName;const r={freelancerRef:e.ciphertext,referrer:globalThis.location.href,freelancerPreview:{photoUrl:e.portrait,personName:s}},i=this.$store.state.visitor?.id??"";await this.SaveSegment(i,t,r)}}export{o as S};
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/_nuxt/signup-segment.C7OLIQa4.js.map
