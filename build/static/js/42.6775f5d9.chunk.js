"use strict";(self.webpackChunkclient360=self.webpackChunkclient360||[]).push([[42],{58042:function(e,i,r){r.r(i),r.d(i,{default:function(){return ee}});var l=r(47825),s=r(9019),a=r(42832),t=r(41806),n=r(6740),o=r(65280),d=r(47313),c=r(13997),m=r.n(c),h=r(73428),x=r(97890),u=r(54166),Z=r(67848),j=r(46064),p=r(90154),y=r(31095),b=r(61113),C=r(75419),g=r(49476),v=r(36240),f=r(5211),P=r(66149),N=r(4117),T=r(96467),B=r(97762),S=r(33604),A=r(24631),I=r(23195),D=r(79429),w=r(3463),R=r(5178),q=r(1550),V=r(88797),z=r(15480),k=r(51405),_=r(46417);var W=e=>{const{open:i,handleClose:r}=e,l=w.Ry({policyNumber:w.Z_().required("Policy Number is required"),claimType:w.Z_().required("Claim Type is required"),claimAmount:w.Z_().required("Claim Amount is required"),claimDate:w.Z_().required("Claim Date is required"),claimStatus:w.Z_().required("Claim Status is required"),claimNotes:w.Z_().required("Claim Notes is required")}),a=(0,D.TA)({initialValues:{policyNumber:"",claimType:"",claimAmount:"",claimDate:"",claimStatus:"",claimNotes:""},validationSchema:l,onSubmit:async(e,i)=>{let{resetForm:r}=i;console.log("AddValues",e),r()}});return(0,_.jsx)("div",{children:(0,_.jsxs)(P.Z,{open:i,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,_.jsxs)(S.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,_.jsx)(b.Z,{variant:"h6",children:"Add Claim "}),(0,_.jsx)(b.Z,{children:(0,_.jsx)(I.Z,{onClick:r,style:{cursor:"pointer"}})})]}),(0,_.jsx)(T.Z,{dividers:!0,children:(0,_.jsx)("form",{children:(0,_.jsx)(B.Z,{id:"scroll-dialog-description",tabIndex:-1,children:(0,_.jsxs)(s.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,_.jsx)(R.Z,{children:"Policy Number"}),(0,_.jsx)(A.Z,{id:"policyNumber",name:"policyNumber",size:"small",type:"number",fullWidth:!0,value:a.values.policyNumber,onChange:a.handleChange,error:a.touched.policyNumber&&Boolean(a.errors.policyNumber),helperText:a.touched.policyNumber&&a.errors.policyNumber})]}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,_.jsxs)(q.Z,{fullWidth:!0,children:[(0,_.jsx)(R.Z,{children:"Claim Type"}),(0,_.jsxs)(V.Z,{labelId:"demo-simple-select-label",id:"claimType",name:"claimType",size:"small",value:a.values.claimType,onChange:a.handleChange,error:a.touched.claimType&&Boolean(a.errors.claimType),children:[(0,_.jsx)(k.Z,{value:"Auto Insurance ",children:"Auto Insurance "}),(0,_.jsx)(k.Z,{value:"Health Insurance ",children:"Health Insurance "}),(0,_.jsx)(k.Z,{value:"Life Insurance ",children:"Life Insurance "}),(0,_.jsx)(k.Z,{value:"Home Insurance ",children:"Home Insurance "})]}),(0,_.jsx)(z.Z,{error:a.touched.claimType&&Boolean(a.errors.claimType),children:a.touched.claimType&&a.errors.claimType})]})}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(R.Z,{children:"Claim Date"}),(0,_.jsx)(A.Z,{id:"claimDate",name:"claimDate",size:"small",type:"date",fullWidth:!0,value:a.values.claimDate,onChange:a.handleChange,error:a.touched.claimDate&&Boolean(a.errors.claimDate),helperText:a.touched.claimDate&&a.errors.claimDate})]}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(R.Z,{children:"Claim Amount"}),(0,_.jsx)(A.Z,{id:"claimAmount",name:"claimAmount",size:"small",type:"number",fullWidth:!0,value:a.values.claimAmount,onChange:a.handleChange,error:a.touched.claimAmount&&Boolean(a.errors.claimAmount),helperText:a.touched.claimAmount&&a.errors.claimAmount})]}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,_.jsxs)(q.Z,{fullWidth:!0,children:[(0,_.jsx)(R.Z,{children:"Claim Status"}),(0,_.jsxs)(V.Z,{labelId:"demo-simple-select-label",id:"claimStatus",name:"claimStatus",size:"small",value:a.values.claimStatus,onChange:a.handleChange,error:a.touched.claimStatus&&Boolean(a.errors.claimStatus),children:[(0,_.jsx)(k.Z,{value:"Pending",children:"Pending"}),(0,_.jsx)(k.Z,{value:"Under Investigation",children:"Under Investigation"}),(0,_.jsx)(k.Z,{value:"Approved",children:"Approved"}),(0,_.jsx)(k.Z,{value:"Denied",children:"Denied"})]}),(0,_.jsx)(z.Z,{error:a.touched.claimStatus&&Boolean(a.errors.claimStatus),children:a.touched.claimStatus&&a.errors.claimStatus})]})}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:12,children:[(0,_.jsx)(R.Z,{children:"Claim Notes"}),(0,_.jsx)(A.Z,{id:"claimNotes",name:"claimNotes",size:"small",fullWidth:!0,rows:4,multiline:!0,value:a.values.claimNotes,onChange:a.handleChange,error:a.touched.claimNotes&&Boolean(a.errors.claimNotes),helperText:a.touched.claimNotes&&a.errors.claimNotes})]})]})})})}),(0,_.jsxs)(N.Z,{children:[(0,_.jsx)(y.Z,{type:"submit",variant:"contained",onClick:a.handleSubmit,style:{textTransform:"capitalize"},color:"secondary",children:"Save"}),(0,_.jsx)(y.Z,{type:"reset",variant:"outlined",style:{textTransform:"capitalize"},onClick:()=>{a.resetForm(),r()},color:"error",children:"Cancel"})]})]})})};var O=e=>{const{open:i,handleClose:r}=e,l=w.Ry({policyNumber:w.Z_().required("Policy Number is required"),claimType:w.Z_().required("Claim Type is required"),claimAmount:w.Z_().required("Claim Amount is required"),claimDate:w.Z_().required("Claim Date is required"),claimStatus:w.Z_().required("Claim Status is required"),claimNotes:w.Z_().required("Claim Notes is required")}),a=(0,D.TA)({initialValues:{policyNumber:"",claimType:"",claimAmount:"",claimDate:"",claimStatus:"",claimNotes:""},validationSchema:l,enableReinitialize:!0,onSubmit:async(e,i)=>{let{resetForm:r}=i;console.log("Editalues",e),r()}});return(0,_.jsx)("div",{children:(0,_.jsxs)(P.Z,{open:i,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,_.jsxs)(S.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,_.jsx)(b.Z,{variant:"h6",children:"View and Update Claim "}),(0,_.jsx)(b.Z,{children:(0,_.jsx)(I.Z,{onClick:r,style:{cursor:"pointer"}})})]}),(0,_.jsx)(T.Z,{dividers:!0,children:(0,_.jsx)("form",{children:(0,_.jsx)(B.Z,{id:"scroll-dialog-description",tabIndex:-1,children:(0,_.jsxs)(s.ZP,{container:!0,rowSpacing:3,columnSpacing:{xs:0,sm:5,md:4},children:[(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,md:6,children:[(0,_.jsx)(R.Z,{children:"Policy Number"}),(0,_.jsx)(A.Z,{id:"policyNumber",name:"policyNumber",size:"small",fullWidth:!0,value:a.values.policyNumber,onChange:a.handleChange,error:a.touched.policyNumber&&Boolean(a.errors.policyNumber),helperText:a.touched.policyNumber&&a.errors.policyNumber})]}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,_.jsxs)(q.Z,{fullWidth:!0,children:[(0,_.jsx)(R.Z,{children:"Claim Type"}),(0,_.jsxs)(V.Z,{labelId:"demo-simple-select-label",id:"claimType",name:"claimType",size:"small",value:a.values.claimType,onChange:a.handleChange,error:a.touched.claimType&&Boolean(a.errors.claimType),children:[(0,_.jsx)(k.Z,{value:"Auto Insurance ",children:"Auto Insurance "}),(0,_.jsx)(k.Z,{value:"Health Insurance ",children:"Health Insurance "}),(0,_.jsx)(k.Z,{value:"Life Insurance ",children:"Life Insurance "}),(0,_.jsx)(k.Z,{value:"Home Insurance ",children:"Home Insurance "})]}),(0,_.jsx)(z.Z,{error:a.touched.claimType&&Boolean(a.errors.claimType),children:a.touched.claimType&&a.errors.claimType})]})}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(R.Z,{children:"Claim Date"}),(0,_.jsx)(A.Z,{id:"claimDate",name:"claimDate",size:"small",type:"date",fullWidth:!0,value:a.values.claimDate,onChange:a.handleChange,error:a.touched.claimDate&&Boolean(a.errors.claimDate),helperText:a.touched.claimDate&&a.errors.claimDate})]}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(R.Z,{children:"Claim Amount"}),(0,_.jsx)(A.Z,{id:"claimAmount",name:"claimAmount",size:"small",fullWidth:!0,value:a.values.claimAmount,onChange:a.handleChange,error:a.touched.claimAmount&&Boolean(a.errors.claimAmount),helperText:a.touched.claimAmount&&a.errors.claimAmount})]}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,_.jsxs)(q.Z,{fullWidth:!0,children:[(0,_.jsx)(R.Z,{children:"Claim Status"}),(0,_.jsxs)(V.Z,{labelId:"demo-simple-select-label",id:"claimStatus",name:"claimStatus",size:"small",value:a.values.claimStatus,onChange:a.handleChange,error:a.touched.claimStatus&&Boolean(a.errors.claimStatus),children:[(0,_.jsx)(k.Z,{value:"Pending",children:"Pending"}),(0,_.jsx)(k.Z,{value:"Under Investigation",children:"Under Investigation"}),(0,_.jsx)(k.Z,{value:"Approved",children:"Approved"}),(0,_.jsx)(k.Z,{value:"Denied",children:"Denied"})]}),(0,_.jsx)(z.Z,{error:a.touched.claimStatus&&Boolean(a.errors.claimStatus),children:a.touched.claimStatus&&a.errors.claimStatus})]})}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:12,children:[(0,_.jsx)(R.Z,{children:"Claim Notes"}),(0,_.jsx)(A.Z,{id:"claimNotes",name:"claimNotes",size:"small",fullWidth:!0,rows:4,multiline:!0,value:a.values.claimNotes,onChange:a.handleChange,error:a.touched.claimNotes&&Boolean(a.errors.claimNotes),helperText:a.touched.claimNotes&&a.errors.claimNotes})]})]})})})}),(0,_.jsxs)(N.Z,{children:[(0,_.jsx)(y.Z,{type:"submit",variant:"contained",onClick:a.handleSubmit,style:{textTransform:"capitalize"},color:"secondary",children:"Update"}),(0,_.jsx)(y.Z,{type:"submit",variant:"contained",style:{textTransform:"capitalize"},color:"error",children:"Delete"}),(0,_.jsx)(y.Z,{type:"reset",variant:"outlined",style:{textTransform:"capitalize"},onClick:()=>{a.resetForm(),r()},color:"error",children:"Cancel"})]})]})})},E=r(7900);var H=e=>{let{toggleVisibilityClaim:i,isVisibleClaim:r}=e;const[l,n]=(0,d.useState)(!1),[o,c]=(0,d.useState)(!1);return(0,_.jsxs)("div",{children:[(0,_.jsx)(O,{open:l,handleClose:()=>n(!1)}),(0,_.jsx)(W,{open:o,handleClose:()=>c(!1)}),(0,_.jsx)(t.Z,{style:{cursor:"pointer"},p:2,children:(0,_.jsx)(s.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,_.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",children:[(0,_.jsxs)(a.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,_.jsx)(y.Z,{onClick:i,color:"primary",variant:"contained",sx:{width:"28px",minWidth:"0px",padding:"0px"},children:r?(0,_.jsx)(g.Z,{}):(0,_.jsx)(f.Z,{})}),(0,_.jsx)(v.Z,{}),(0,_.jsx)(b.Z,{variant:"h6",children:"Claim History"})]}),(0,_.jsx)(a.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:r&&(0,_.jsx)(y.Z,{variant:"contained",color:"secondary",size:"small",startIcon:(0,_.jsx)(f.Z,{}),onClick:()=>{c(!0)},children:"Claim"})})]})})}),r&&(0,_.jsx)(E.Z,{children:(0,_.jsx)(t.Z,{width:"100%",height:"30vh",children:(0,_.jsx)(C._$,{rows:[],columns:[{field:"policyNumber",headerName:"Policy Number",cellClassName:"name-column--cell",flex:2},{field:"claimType",headerName:"Claim Type",flex:2},{field:"claimAmount",headerName:"Claim Amount",flex:2},{field:"claimDate",headerName:"Claim Date",flex:2},{field:"claimStatus",headerName:"Claim Status",flex:2}],getRowId:e=>e._id,columnHeaderHeight:40})})})]})},L=r(51348),U=r(52354),F=r(88607),M=r(74143),G=r(96671),K=r(98761),$=r(35460);var J=()=>(0,_.jsx)("div",{children:(0,_.jsx)(h.Z,{style:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},children:(0,_.jsx)(t.Z,{p:3,children:(0,_.jsxs)(s.ZP,{container:!0,display:"flex",spacing:4,children:[(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Name :"})}),(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},py:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Date Of Birth :"})}),(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},py:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Gender :"})})]}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Phone Number :"})}),(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},py:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Email :"})}),(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},py:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Address :"})})]})]})})})});var Q=()=>(0,_.jsx)("div",{children:(0,_.jsx)(h.Z,{style:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},children:(0,_.jsx)(t.Z,{p:3,children:(0,_.jsxs)(s.ZP,{container:!0,display:"flex",spacing:4,children:[(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,_.jsx)(b.Z,{variant:"h4",children:"Additional Contact Details :-"})}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Alternate Phone Number :"})}),(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},py:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Instagram Profile :"})}),(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},py:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Preferred Contact Method :"})})]}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Additional Email :"})}),(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},py:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Twitter Profile :"})})]}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsxs)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:[(0,_.jsx)(b.Z,{variant:"h4",pb:2,children:"Referral Information :-"}),(0,_.jsx)(b.Z,{variant:"body1",children:"Referral source (if applicable):"})]})}),(0,_.jsxs)(s.ZP,{item:!0,xs:12,sm:6,children:[(0,_.jsx)(b.Z,{variant:"h4",pb:2,children:"Referral details :-"}),(0,_.jsxs)(s.ZP,{container:!0,display:"flex",spacing:4,children:[(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Referral Contact Name:"})})}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Relationship to Referrer:"})})})]})]}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:12,children:(0,_.jsx)(b.Z,{variant:"h4",children:"Communication Preferences :-"})}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Preferences For Marketing Communications :"})})}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Preferred Language For Communication :"})})})]})})})});var X=()=>(0,_.jsx)("div",{children:(0,_.jsx)(h.Z,{style:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"},children:(0,_.jsx)(t.Z,{p:3,children:(0,_.jsxs)(s.ZP,{container:!0,display:"flex",spacing:4,children:[(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Create Date :"})})}),(0,_.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,_.jsx)(s.ZP,{style:{borderBottom:"1.5px dashed",borderBottomColor:$.Z.grey[400]},pb:2,children:(0,_.jsx)(b.Z,{variant:"body1",children:"Modified Date :"})})})]})})})}),Y=r(51568);var ee=()=>{const[e,i]=(0,d.useState)(!1),[r,c]=(0,d.useState)(!1),[y,b]=(0,d.useState)(!1),[C,g]=(0,d.useState)(0),[v,f]=(0,d.useState)(!1),[P,N]=(0,d.useState)(!1),[T,B]=(0,d.useState)(!1),[S,A]=(0,d.useState)(!1),[I,D]=(0,d.useState)(!1),[w,R]=(0,d.useState)(!1),q=(0,x.s0)();return(0,_.jsxs)("div",{children:[(0,_.jsx)(Z.Z,{open:e,handleClose:()=>i(!1)}),(0,_.jsx)(j.Z,{open:r,handleClose:()=>c(!1)}),(0,_.jsx)(p.Z,{opendelete:y,handleClosedelete:()=>b(!1)}),(0,_.jsxs)(l.Z,{children:[(0,_.jsx)(s.ZP,{container:!0,display:"flex",alignItems:"center",children:(0,_.jsxs)(a.Z,{direction:"row",alignItems:"center",mb:3,justifyContent:"space-between",width:"100%",children:[(0,_.jsx)(K.Z,{title:"Kavin petter",subtitle:"Contact Details"}),(0,_.jsx)(a.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:2,children:(0,_.jsx)(u.Z,{handleOpen:()=>i(!0),handleOpenEdit:()=>c(!0),handleOpenDelete:()=>b(!0),handleExport:()=>{const e=m().unparse(contactCsvData),i=new Blob([e],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),l=document.createElement("a");l.href=r,l.setAttribute("download","first lastName Contact_Data.csv"),l.click()},back:()=>{q("/dashboard/contact")}})})]})}),(0,_.jsxs)(t.Z,{sx:{width:"100%"},children:[(0,_.jsx)(t.Z,{sx:{borderBottom:1,borderColor:"divider",marginBottom:"0px"},children:(0,_.jsxs)(n.Z,{value:C,onChange:(e,i)=>g(i),"aria-label":"basic tabs example",children:[(0,_.jsx)(o.Z,{label:"OVERVIEW",...(0,Y.P)(0)}),(0,_.jsx)(o.Z,{label:"MORE INFORMATION",...(0,Y.P)(1)}),(0,_.jsx)(o.Z,{label:"OTHER",...(0,Y.P)(2)})]})}),(0,_.jsx)(Y.O,{value:C,index:0,children:(0,_.jsx)(J,{})}),(0,_.jsx)(Y.O,{value:C,index:1,children:(0,_.jsx)(Q,{})}),(0,_.jsx)(Y.O,{value:C,index:2,children:(0,_.jsx)(X,{})})]}),(0,_.jsx)(h.Z,{sx:{marginTop:"20px"},children:(0,_.jsx)(H,{toggleVisibilityClaim:()=>f(!v),isVisibleClaim:v})}),(0,_.jsx)(h.Z,{sx:{marginTop:"50px"},children:(0,_.jsx)(L.Z,{toggleVisibilityNotes:()=>B(!T),isVisibleNotes:T})}),(0,_.jsx)(h.Z,{sx:{marginTop:"20px"},children:(0,_.jsx)(G.Z,{toggleVisibilityTask:()=>N(!P),isVisibleTask:P})}),(0,_.jsx)(h.Z,{sx:{marginTop:"20px"},children:(0,_.jsx)(F.Z,{toggleVisibilityMeeting:()=>D(!I),isVisibleMeetings:I})}),(0,_.jsx)(h.Z,{sx:{marginTop:"20px"},children:(0,_.jsx)(U.Z,{toggleVisibilityCall:()=>A(!S),isVisibleCall:S})}),(0,_.jsx)(h.Z,{sx:{marginTop:"20px"},children:(0,_.jsx)(M.Z,{toggleVisibilityEmail:()=>R(!w),isVisibleEmail:w})})]})]})}}}]);