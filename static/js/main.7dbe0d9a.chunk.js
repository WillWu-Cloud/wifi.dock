(this["webpackJsonpwifi-dock"]=this["webpackJsonpwifi-dock"]||[]).push([[0],{348:function(e,t,n){},349:function(e,t,n){},355:function(e,t){},357:function(e,t){},367:function(e,t){},369:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},410:function(e,t){},429:function(e,t){},565:function(e,t){},566:function(e,t){},607:function(e,t,n){var i={"./amplify-amazon-button_5.entry.js":[615,8],"./amplify-auth-fields_9.entry.js":[616,19],"./amplify-authenticator.entry.js":[617,4],"./amplify-button_3.entry.js":[618,9],"./amplify-chatbot.entry.js":[619,7],"./amplify-checkbox.entry.js":[620,26],"./amplify-confirm-sign-in_7.entry.js":[621,5],"./amplify-container.entry.js":[622,27],"./amplify-federated-buttons_2.entry.js":[623,10],"./amplify-federated-sign-in.entry.js":[624,20],"./amplify-form-field_4.entry.js":[625,28],"./amplify-greetings.entry.js":[626,11],"./amplify-icon-button.entry.js":[627,29],"./amplify-icon.entry.js":[628,23],"./amplify-link.entry.js":[629,30],"./amplify-nav_2.entry.js":[630,12],"./amplify-photo-picker.entry.js":[631,21],"./amplify-picker.entry.js":[632,22],"./amplify-radio-button_2.entry.js":[633,6],"./amplify-s3-album.entry.js":[634,13],"./amplify-s3-image-picker.entry.js":[635,14],"./amplify-s3-image.entry.js":[636,18],"./amplify-s3-text-picker.entry.js":[637,15],"./amplify-s3-text.entry.js":[638,16],"./amplify-select-mfa-type.entry.js":[639,17],"./amplify-sign-in-button.entry.js":[640,24],"./amplify-toast.entry.js":[641,31],"./amplify-tooltip.entry.js":[642,32]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id=607,e.exports=o},609:function(e,t,n){"use strict";n.r(t);var i=n(5),o=n(0),c=n(23),r=n.n(c),a=(n(348),n(53)),s=(n(349),n(113)),l=n(323),u=n(700),p={container:{fontWeight:"400"},formContainer:{textAlign:"center",margin:"0 0"},formSection:{position:"relative",marginBottom:"20px",backgroundColor:"white",padding:"35px 40px",textAlign:"left",display:"inline-block",minWidth:"380px",borderRadius:"6px",boxShadow:"1px 1px 4px 0 rgba(0,0,0,0.15)"},formField:{marginBottom:"22px"},sectionHeader:{color:"#555",marginBottom:"30px",fontSize:"18px",fontWeight:"500"},sectionBody:{marginBottom:"30px"},sectionFooter:{fontSize:"14px",color:"#708294",display:"flex",flexDirection:"row-reverse",alignItems:"flex-start"},sectionFooterPrimaryContent:{marginLeft:"auto"},sectionFooterSecondaryContent:{marginRight:"auto",alignSelf:"center"},input:{display:"block",width:"100%",padding:"16px",fontSize:"14px",fontFamily:"inherit",color:"#152939",backgroundColor:"#fff",backgroundImage:"none",border:"1px solid #C4C4C4",borderRadius:"3px",boxSizing:"border-box",marginBottom:"10px"},button:{display:"inline-block",marginBottom:"0",fontSize:"12px",fontWeight:800,borderRadius:"0.25em",lineHeight:"1.42857143",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"middle",touchAction:"manipulation",cursor:"pointer",userSelect:"none",backgroundImage:"none",color:"#fff",backgroundColor:"#2673B6",borderColor:"#ccc",textTransform:"uppercase",padding:"1em 1em",letterSpacing:"1.1px",border:"none"},signInButton:{position:"relative",width:"100%",borderRadius:"4px",marginBottom:"10px",cursor:"pointer",padding:0,fontFamily:"Amazon Ember",color:"#fff",fontSize:"14px","#google_signin_btn":{backgroundColor:"#4285F4",fontFamily:"Roboto",border:"1px solid #4285F4"},"#facebook_signin_btn":{backgroundColor:"#4267B2",borderColor:"#4267B2"},"#amazon_signin_btn":{backgroundColor:"#2673B6",border:"none"}},signInButtonIcon:{position:"absolute",left:0,"#google_signin_btn_icon":{backgroundColor:"#fff",borderRadius:"4px 0 0 4px",height:"30px",width:"30px",padding:"11px"},"#facebook_signin_btn_icon":{height:"33px",width:"18px",padding:"10px 14px"},"#amazon_signin_btn_icon":{padding:"10px",height:"32px",width:"32px"}},signInButtonContent:{display:"block",padding:"18px 0",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},formRow:{marginBottom:"12px"},strike:{width:"100%",textAlign:"center",borderBottom:"1px solid #bbb",lineHeight:"0.1em",margin:"32px 0",color:"#828282"},strikeContent:{background:"#fff",padding:"0 25px",fontSize:"14px",fontWeight:"500"},actionRow:{marginBottom:"15px"},a:{color:"#2673B6",cursor:"pointer"},hint:{color:"#828282",fontSize:"12px"},radio:{marginRight:"18px",verticalAlign:"bottom"},inputLabel:{color:"#8596a6",fontSize:"14px",marginBottom:"8px"}},b={aws_project_region:"us-west-2",aws_cognito_identity_pool_id:"us-west-2:03891ae7-7076-40be-abb1-b1aaf38c6be9",aws_cognito_region:"us-west-2",aws_user_pools_id:"us-west-2_Zbdxd4Rtj",aws_user_pools_web_client_id:"3dcoc9vfmjvamf7gjms56p2a41",oauth:{},aws_appsync_graphqlEndpoint:"https://vhqverodsrh4rlz7coombiqodq.appsync-api.us-west-2.amazonaws.com/graphql",aws_appsync_region:"us-west-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_user_files_s3_bucket:"device-storage162253-prod",aws_user_files_s3_bucket_region:"us-west-2"},d=n(38),j=n.n(d),f=n(120),m=n(65),x=n(32),g=n(114),h=n(195),O=n.n(h),y=n(98),v=n.n(y);function w(e){var t=Object(o.useState)(!1),n=Object(x.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(),s=Object(x.a)(a,2),l=s[0],u=s[1],p=Object(o.useState)([]),b=Object(x.a)(p,2),d=b[0],h=b[1];function y(){return(y=Object(m.a)(j.a.mark((function t(){var n,i,o,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="mqtt-explorer-"+Math.floor(1e5*Math.random()+1),t.next=3,g.a.currentCredentials();case 3:i=t.sent,o=g.a.essentialCredentials(i),(c=O.a.device({region:v.a.region,host:v.a.host,clientId:n,protocol:"wss",maximumReconnectTimeMs:8e3,debug:!0,accessKeyId:o.accessKeyId,secretKey:o.secretAccessKey,sessionToken:o.sessionToken})).on("connect",(function(){r(!0),c.subscribe(e.topic),console.log("Connected to AWS IoT!"),console.log("Subscribed to ".concat(e.topic))})),c.on("message",(function(e,t){var n=(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString(),i="".concat(n," - topic '").concat(e,"' - \n ").concat(t.toString());h((function(e){return[].concat(Object(f.a)(e),[i])})),console.log(i)})),u(c);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.useEffect)((function(){return function(){y.apply(this,arguments)}(),function(){console.log("Ended subscription to '".concat(e.topic,"'..."))}}),[]),Object(i.jsxs)("div",{className:"MQTTSubscription",children:['Topic Filter: "',e.topic,'" (',c?"connected":"not connected",")",Object(i.jsx)("form",{onSubmit:function(t){t.preventDefault(),l.end(!1),r(!1),e.removeSubscription(e.topic)},children:Object(i.jsx)("button",{type:"submit",children:"Unsubscribe"})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),d.map((function(e,t){return Object(i.jsx)("li",{className:"markdown",children:Object(i.jsx)("div",{children:Object(i.jsx)("pre",{children:JSON.stringify(e,null,2)})})},t)}))]})}s.default.configure(b);var k=function(e){var t=Object(o.useState)("$aws/things/BEWP1-080027E90EDA/shadow/get/accepted"),n=Object(x.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)("$aws/things/BEWP1-080027E90EDA/shadow/get"),s=Object(x.a)(a,2),l=s[0],u=s[1],p=Object(o.useState)('{ "message": "Hello" }'),b=Object(x.a)(p,2),d=b[0],h=b[1],y=Object(o.useState)([]),k=Object(x.a)(y,2),_=k[0],S=k[1],C=Object(o.useState)(!1),T=Object(x.a)(C,2),A=T[0],D=T[1],I=Object(o.useState)(),B=Object(x.a)(I,2),N=B[0],P=B[1];function z(){return(z=Object(m.a)(j.a.mark((function e(){var t,n,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="mqtt-explorer-"+Math.floor(1e5*Math.random()+1),console.log("clientId: ".concat(t)),e.next=4,g.a.currentCredentials();case 4:n=e.sent,i=g.a.essentialCredentials(n),console.log("clientId: ".concat(t)),console.log("currentCredentials: ".concat(n)),console.log("essentialCredentials: ".concat(i)),console.log("AWSConfiguration.host: ".concat(v.a.host)),(o=O.a.device({region:v.a.region,host:v.a.host,clientId:t,protocol:"wss",maximumReconnectTimeMs:8e3,debug:!0,accessKeyId:i.accessKeyId,secretKey:i.secretAccessKey,sessionToken:i.sessionToken})).on("connect",(function(){D(!0),console.log("Publisher connected to AWS IoT.")})),P(o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){var t;S((t=e,_.filter((function(e){return e!==t}))))}return Object(o.useEffect)((function(){!function(){z.apply(this,arguments)}()}),[]),Object(i.jsxs)("div",{className:"MQTTDisplay",children:[Object(i.jsxs)("div",{className:"thin-border",children:[Object(i.jsx)("b",{children:"Publisher status:"})," ",A?"connected":"Not connected",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N.publish(l,d)},children:[Object(i.jsx)("b",{children:"Publish to Topic:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{value:l,onChange:function(e){return u(e.target.value)},placeholder:"IoT Topic",type:"text",name:"desiredPublishTopic",required:!0}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:"Publish Message:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},placeholder:"IoT Topic",type:"text",name:"desiredPublishTopic",required:!0}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",children:"Publish"}),Object(i.jsx)("br",{})]})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"thin-border",children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_.includes(c)?console.log("You are already subscribed to topic '".concat(c,"'!")):(S((function(e){return[].concat(Object(f.a)(e),[c])})),console.log("Subscribed to topic '".concat(c,"'!")))},children:[Object(i.jsx)("b",{children:"Subscribe to Topic:"}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},placeholder:"IoT Topic",type:"text",name:"desiredSubscriptionTopic",required:!0}),Object(i.jsx)("button",{type:"submit",children:"Subscribe"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)("b",{children:"Subscriptions:"})," ",Object(i.jsx)("br",{}),_.map((function(e){return Object(i.jsx)(w,{topic:e,removeSubscription:F},e)}))]})]})},_=n(695),S=n(701),C=n(699),T=n(319),A=n.n(T),D=n(318),I=n.n(D),B=n(17),N=n(304),P=n(608),z=n(310),F=n.n(z),q=n(320),E=n.n(q),$=n(321),M=n.n($),R=n(322),W=n.n(R),L=n(702);var U=function(e){var t=Object(o.useState)([]),n=Object(x.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(""),s=Object(x.a)(a,2),l=s[0],u=s[1],p=Object(o.useState)(""),b=Object(x.a)(p,2),d=b[0],g=b[1],h=Object(o.useState)(!1),O=Object(x.a)(h,2),y=O[0],v=O[1];Object(o.useEffect)((function(){k()}),[]);var w=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l!==t){e.next=3;break}return u(""),e.abrupt("return");case 3:return n=c[t].filePath,e.prev=4,e.next=7,B.a.get(n,{express:60});case 7:return i=e.sent,console.log("access url",i),u(t),g(i),e.abrupt("return");case 14:e.prev=14,e.t0=e.catch(4),console.error("error accessing the file s3",e.t0),g(""),u("");case 19:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.graphql(Object(P.b)("\n  query ListDevices(\n    $filter: ModelDeviceFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        title\n        description\n        filePath\n        like\n        owner\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n"));case 3:t=e.sent,n=t.data.listDevices.items,console.log("Device list",n),r(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error on fetching devices",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=c[t]).like=n.like+1,delete n.createdAt,delete n.updatedAt,e.next=7,N.a.graphql(Object(P.b)("\n  mutation UpdateDevice(\n    $input: UpdateDeviceInput!\n    $condition: ModelDeviceConditionInput\n  ) {\n    updateDevice(input: $input, condition: $condition) {\n      id\n      title\n      description\n      filePath\n      like\n      owner\n      createdAt\n      updatedAt\n    }\n  }\n",{input:n}));case 7:i=e.sent,(o=Object(f.a)(c))[t]=i.data.updateDevice,r(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error on adding Like to device",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"deviceList",children:[c.map((function(e,t){return Object(i.jsxs)(_.a,{variant:"outlined",elevation:2,children:[Object(i.jsxs)("div",{className:"deviceCard",children:[Object(i.jsx)(S.a,{"aria-label":"play",onClick:function(){return w(t)},children:l===t?Object(i.jsx)(I.a,{}):Object(i.jsx)(A.a,{})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"deviceTitle",children:e.title}),Object(i.jsx)("div",{className:"deviceOwner",children:e.owner})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(S.a,{"aria-label":"like",onClick:function(){return C(t)},children:Object(i.jsx)(E.a,{})}),e.like]}),Object(i.jsx)("div",{className:"deviceDescription",children:e.description}),Object(i.jsx)("br",{})]}),l===t?Object(i.jsx)("div",{className:"AudioPlayer",children:Object(i.jsx)(F.a,{url:d,controls:!0,playing:!0,height:"50px",onPause:function(){return w(t)}})}):null]},"device".concat(t))})),y?Object(i.jsx)(K,{onUpload:function(){v(!1),k()}}):Object(i.jsx)(S.a,{onClick:function(){return v(!0)},children:Object(i.jsx)(M.a,{})})]})},K=function(e){var t=e.onUpload,n=Object(o.useState)({}),c=Object(x.a)(n,2),r=c[0],s=c[1],l=Object(o.useState)(),u=Object(x.a)(l,2),p=u[0],b=u[1],d=function(){var e=Object(m.a)(j.a.mark((function e(){var n,i,o,c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("songData",r),n=r.title,i=r.description,o=r.owner,e.next=4,B.a.put("".concat(Object(L.a)(),".mp3"),p,{contentType:"audio/mp3"});case 4:return c=e.sent,a=c.key,s={id:Object(L.a)(),title:n,description:i,owner:o,filePath:a,like:0},e.next=9,N.a.graphql(Object(P.b)("\n  mutation CreateDevice(\n    $input: CreateDeviceInput!\n    $condition: ModelDeviceConditionInput\n  ) {\n    createDevice(input: $input, condition: $condition) {\n      id\n      title\n      description\n      filePath\n      like\n      owner\n      createdAt\n      updatedAt\n    }\n  }\n",{input:s}));case 9:t();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"newSong",children:[Object(i.jsx)(C.a,{label:"Title",value:r.title,onChange:function(e){return s(Object(a.a)(Object(a.a)({},r),{},{title:e.target.value}))}}),Object(i.jsx)(C.a,{label:"Artist",value:r.owner,onChange:function(e){return s(Object(a.a)(Object(a.a)({},r),{},{owner:e.target.value}))}}),Object(i.jsx)(C.a,{label:"Description",value:r.description,onChange:function(e){return s(Object(a.a)(Object(a.a)({},r),{},{description:e.target.value}))}}),Object(i.jsx)("input",{type:"file",accept:"audio/mp3",onChange:function(e){return b(e.target.files[0])}}),Object(i.jsx)(S.a,{onClick:d,children:Object(i.jsx)(W.a,{})})]})};s.default.configure(b);var H=Object(l.a)((function(e){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:"App-header",children:["AWS S3",Object(i.jsx)(u.a,{})]}),Object(i.jsx)("br",{}),Object(i.jsx)(U,Object(a.a)({},e)),Object(i.jsx)("br",{}),Object(i.jsx)("header",{className:"App-header",children:"AWS IOT"}),Object(i.jsx)("br",{}),Object(i.jsx)(k,Object(a.a)({},e))]})}),{theme:p,usernameAttributes:"email",signUpConfig:{hiddenDefaults:["phone_number"],signUpFields:[{key:"name",label:"Name",required:!0}]}},!0),J=function(e){e&&e instanceof Function&&n.e(35).then(n.bind(null,719)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(H,{}),document.getElementById("root")),J()},98:function(e,t){e.exports={endpoint:"wss://a39wmtgd8xhgpw-ats.iot.us-west-2.amazonaws.com/mqtt",region:"us-west-2",poolId:"us-west-2:03891ae7-7076-40be-abb1-b1aaf38c6be9",host:"a39wmtgd8xhgpw-ats.iot.us-west-2.amazonaws.com"}}},[[609,2,3]]]);
//# sourceMappingURL=main.7dbe0d9a.chunk.js.map