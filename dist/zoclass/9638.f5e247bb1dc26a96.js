"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[9638],{19638:(h,g,l)=>{l.r(g),l.d(g,{AdminStudentFeesStatementModule:()=>tt});var d=l(36895),p=l(89299),c=l(92340),t=l(94650),s=l(73716),_=l(87129),b=l(38283),x=l(86898),C=l(11005),Z=l(62373),A=l(88153),O=l(4859),M=l(97392),f=l(71948),P=l(3238),T=l(88789);let S=(()=>{class o{constructor(){this.words=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],this.tens=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],this.scales=["","Thousand","Million","Billion"]}transform(e){return isNaN(e)?"":0===e?"Zero":this.convertNumberToWords(e)}convertNumberToWords(e){if(e<20)return this.words[e];if(e<100)return`${this.tens[Math.floor(e/10)]} ${e%10?this.words[e%10]:""}`.trim();let n="",i=0;for(;e>0;){const r=e%1e3;r&&(n=`${this.chunkToWords(r)} ${this.scales[i]} ${n}`.trim()),e=Math.floor(e/1e3),i++}return n.trim()}chunkToWords(e){let n="";return e>=100&&(n+=`${this.words[Math.floor(e/100)]} Hundred `,e%=100),e>=20&&(n+=`${this.tens[Math.floor(e/10)]} `,e%=10),e>0&&(n+=`${this.words[e]} `),n.trim()}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"numberToWords",type:o,pure:!0}),o})();const F=["content"],v=["receipt"];function y(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-radio-button",65),t._uU(2),t.qZA(),t.BQk()),2&o){const e=a.$implicit,n=t.oxw();t.xp6(1),t.Q6J("value",e._id)("checked",e._id==n.selectedValue),t.xp6(1),t.Oqu(e.session)}}function w(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-radio-button",65),t._uU(2),t.qZA(),t.BQk()),2&o){const e=a.$implicit,n=t.oxw();t.xp6(1),t.Q6J("value",e._id)("checked",e._id==n.selectedValue),t.xp6(1),t.Oqu(e.session)}}function U(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij("( ",null==e.clsFeesStructure?null:e.clsFeesStructure.stream," )")}}function I(o,a){if(1&o&&(t.TgZ(0,"th",67),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.key," Fee")}}function q(o,a){if(1&o&&(t.ynx(0),t.YNc(1,I,2,1,"th",66),t.ALo(2,"keyvalue"),t.BQk()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e))}}function N(o,a){if(1&o&&(t.TgZ(0,"th",67),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" \u20b9 ",e.value,"")}}function k(o,a){if(1&o&&(t.ynx(0),t.YNc(1,N,2,1,"th",66),t.ALo(2,"keyvalue"),t.BQk()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e))}}function z(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function E(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.receiptNo)}}function R(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function D(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.paymentDate)}}function Q(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function j(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"mat-icon",69),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.feeReceipt(i.paymentDate))}),t._uU(1,"launch"),t.qZA()}}function B(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function L(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.createdBy)}}function J(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1,"Online Payment"),t.qZA())}function Y(o,a){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.YNc(4,z,2,0,"span",21),t.YNc(5,E,2,1,"span",21),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t.YNc(9,R,2,0,"span",21),t.YNc(10,D,2,1,"span",21),t.qZA(),t.TgZ(11,"td"),t.YNc(12,Q,2,0,"span",21),t.YNc(13,j,2,0,"mat-icon",68),t.qZA(),t.TgZ(14,"td"),t.YNc(15,B,2,0,"span",21),t.YNc(16,L,2,1,"span",21),t.YNc(17,J,2,0,"span",21),t.qZA()()),2&o){const e=a.$implicit,n=a.index;t.xp6(2),t.hij(" ",n+1," "),t.xp6(2),t.Q6J("ngIf",0==e.receiptNo),t.xp6(1),t.Q6J("ngIf",0!==e.receiptNo),t.xp6(2),t.hij(" \u20b9 ",e.paidAmount," "),t.xp6(2),t.Q6J("ngIf",0==e.paymentDate),t.xp6(1),t.Q6J("ngIf",0!==e.paymentDate),t.xp6(2),t.Q6J("ngIf",0==e.receiptNo),t.xp6(1),t.Q6J("ngIf",0!==e.receiptNo),t.xp6(2),t.Q6J("ngIf",0==e.paymentDate),t.xp6(1),t.Q6J("ngIf",0!==e.paymentDate&&0!==e.createdBy),t.xp6(1),t.Q6J("ngIf",0!==e.paymentDate&&0==e.createdBy)}}function $(o,a){if(1&o&&(t.ynx(0),t.YNc(1,Y,18,11,"tr",12),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.processedData)}}function W(o,a){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=a.$implicit,n=t.oxw(2);t.xp6(1),t.hij(" ",n.formatKey(e.key)," FEE ")}}function H(o,a){if(1&o&&(t.TgZ(0,"td",72),t._uU(1),t.qZA()),2&o){const e=a.$implicit,n=t.oxw(2);t.xp6(1),t.hij(" ",n.formatCurrency(e.value)," ")}}function G(o,a){if(1&o&&(t.TgZ(0,"tr",45)(1,"td",46),t._uU(2),t.qZA(),t.YNc(3,W,2,1,"td",70),t.ALo(4,"keyvalue"),t.YNc(5,H,2,1,"td",71),t.ALo(6,"keyvalue"),t.qZA()),2&o){const e=a.$implicit,n=a.index;t.xp6(2),t.hij(" ",n+1,". "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,e)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,5,e))}}const K=[{path:"",component:(()=>{class o{constructor(e,n,i,r,m,u){this.activatedRoute=e,this.adminAuthService=n,this.schoolService=i,this.printPdfService=r,this.feesService=m,this.feesStructureService=u,this.baseUrl=c.N.API_URL,this.showModal=!1,this.processedData=[],this.singleReceiptInstallment=[],this.loader=!0,this.allSessionData=[],this.selectedValue="1"}ngOnInit(){let e=this.adminAuthService.getLoggedInAdminInfo();this.adminId=e?.id,this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getSchool(),this.adminId&&this.id&&this.singleStudentFeesCollectionByStudentId(this.adminId,this.id)}formatCurrency(e){return"number"==typeof(e=parseInt(e))?"\u20b9 "+e.toLocaleString(void 0):"\u20b9 0"}formatKey(e){return"string"==typeof e?e.toUpperCase():""}onChange(e){this.singleStudentFeesCollectionByStudentId(this.adminId,e.value)}getSchool(){this.schoolService.getSchool(this.adminId).subscribe(e=>{e&&(this.schoolInfo=e)})}printStudentData(){const e=this.getPrintContent();this.printPdfService.printContent(e),this.closeModal()}getPrintContent(){let i="<html>";i+="<head>",i+="<style>",i+="body {width: 100%; height: 100%; margin: 0; padding: 0; }",i+="div {margin: 0; padding: 0;}",i+=".custom-container {font-family: Arial, sans-serif;overflow: auto; width: 100%; height: auto; box-sizing: border-box;}",i+=".table-container {width: 100%;height: auto; background-color: #fff;border: 2px solid #9e9e9e; box-sizing: border-box;}",i+=".logo { height: 75px;margin-top:15px;margin-left:10px;}",i+=".school-name {display: flex; align-items: center; justify-content: center; text-align: center; }",i+=".school-name h3 { color: #252525 !important; font-size: 20px !important;font-weight: bolder;margin-top:-125px !important; margin-bottom: 0 !important; }",i+=".address{margin-top: -45px;}",i+=".address p{font-size:12px;margin-top: -12px !important;}",i+=".title-lable {text-align: center;margin-top: -10px;margin-bottom: 0;}",i+=".title-lable p {color: #252525 !important;font-size: 16px;font-weight: bold;letter-spacing: .5px;}",i+=".info-table {width:100%;color: #252525 !important;border: none;font-size: 14px;margin-top: -8px;margin-bottom: 3px;padding-top:3px;display: inline-table;}",i+=".table-container .info-table th, .table-container .info-table td{color: #252525 !important;text-align:left;padding-left:15px;}",i+=".custom-table {width: 100%;color: #252525 !important;border-collapse:collapse;margin-bottom: -8px;display: inline-table;border-radius:5px;}",i+=".custom-table th{height: 25px;text-align: center;border:1px solid #9e9e9e;line-height:15px;font-size: 14px;}",i+=".custom-table tr{height: 25px;}",i+=".custom-table td {text-align: center;border:1px solid #9e9e9e;font-size: 14px;}",i+=".text-bold { font-weight: bold;}",i+=".text-left { text-align: left;}",i+="p {color: #252525 !important;font-size:15px;}",i+="h4 {color: #252525 !important;}",i+="</style>",i+="</head>",i+="<body>";const r=document.getElementById("student");return r&&(i+=r.outerHTML),i+="</body></html>",i}closeModal(){this.showModal=!1}feeReceipt(e){const i=e;this.singleReceiptInstallment=this.processedData.filter(r=>r.paymentDate===i),this.singleReceiptInstallment[0].feesConcession=this.studentFeesCollection.feesConcession,this.showModal=!0}singleStudentFeesCollectionByStudentId(e,n){let i={adminId:e,id:n};this.processedData=[],this.feesService.singleStudentFeesCollectionByStudentId(i).subscribe(r=>{r&&(this.selectedValue=n,this.studentFeesCollection=r.studentFeesCollection,this.studentInfo=r.studentInfo,this.allSessionData=r.allFeesSession,1==this.studentFeesCollection.admissionFeesPayable&&(r.singleFeesStr.feesType=[{Admission:r.singleFeesStr.admissionFees},...r.singleFeesStr.feesType],this.clsFeesStructure=r.singleFeesStr),0==this.studentFeesCollection.admissionFeesPayable&&(this.clsFeesStructure=r.singleFeesStr),console.log(this.clsFeesStructure),this.processData())})}processData(){let e=this.studentFeesCollection.admissionFees;for(let n=0;n<this.studentFeesCollection.installment.length;n++){const r=this.studentFeesCollection.installment[n];e+=r,this.processedData.push({allPaidAmount:e,receiptNo:this.studentFeesCollection.receipt[n],paidAmount:r,paymentDate:this.studentFeesCollection.paymentDate[n],createdBy:this.studentFeesCollection.createdBy[n]})}setTimeout(()=>{this.loader=!1},1e3)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.gz),t.Y36(s.Y),t.Y36(_.E),t.Y36(b.Z),t.Y36(x.$),t.Y36(C.t))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin-student-fees-statement"]],viewQuery:function(e,n){if(1&e&&(t.Gf(F,5),t.Gf(v,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.content=i.first),t.iGM(i=t.CRH())&&(n.receipt=i.first)}},decls:244,vars:80,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","main-container"],[1,"row","big-option-container"],[1,"desktop-option"],[1,"col-12"],[1,"col-3"],["mat-button","",1,"menu-button"],[1,"col-9",2,"text-align","right"],[3,"change"],[4,"ngFor","ngForOf"],[1,"mobile-option"],[1,"col-12","mt-2",2,"padding-left","20px"],[1,"main-container"],[1,"col-12","col-lg-12","big-container"],[1,"main-card"],[1,"table-wrapper"],[1,"info-table","text-center"],[1,"text-bold"],[4,"ngIf"],[1,"custom-table"],[1,"modal","fade","show","custom-modal"],[1,"modal-dialog","print-model-dialog","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["matRipple","",3,"click"],[1,"modal-body","print-model-body"],[2,"color","transparent"],["id","student"],[1,"col-lg-10","offset-lg-1","custom-container"],[1,"table-container"],[1,"row","mt-5"],[1,"col-2"],["alt","schoolo logo",1,"logo",3,"src"],[1,"col-10",2,"text-align","center"],[1,"school-name"],[1,"address",2,"text-align","center"],[1,"col-12","title-lable"],[1,"col-12",2,"text-align","right","margin-right","25px","margin-bottom","5px"],[2,"font-size","14px"],[1,"info-table",2,"border-top","1px solid #9e9e9e"],["colspan","2"],[1,"text-center"],[1,"border",2,"border-left","none"],[1,"border",2,"text-align","left","padding-left","100px"],[1,"border",2,"border-right","none"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center",2,"height","15px"],[2,"border","none","padding-top","5px"],[1,"text-bold",2,"text-align","right","border","none","padding-top","8px","font-size","15px"],[1,"text-bold",2,"border","none","padding-top","8px","font-size","16px"],[2,"border","none"],[1,"text-bold",2,"text-align","right","border","none","font-size","15px"],[1,"text-bold",2,"border","none","font-size","16px"],[2,"border","none","padding-bottom","20px"],[2,"display","inline-block","margin-left","20px","margin-bottom","0 !important"],[1,"text-bold",2,"font-size","15px"],[2,"text-align","center","margin-top","10px !important","font-size","12px"],[1,"text-bold",2,"font-size","14px"],[2,"margin-left","20px","right","0"],[1,"modal-footer"],["mat-raised-button","",1,"submit-button",2,"background-color","#8C52FF","color","#fff",3,"click"],[3,"value","checked"],["style","font-weight: normal;",4,"ngFor","ngForOf"],[2,"font-weight","normal"],[3,"click",4,"ngIf"],[3,"click"],["class","border","style","text-align: left;padding-left: 100px;",4,"ngFor","ngForOf"],["class","border","style","border-right: none;font-size: 15px;",4,"ngFor","ngForOf"],[1,"border",2,"border-right","none","font-size","15px"]],template:function(e,n){1&e&&(t._UZ(0,"app-header-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-navbar"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",1)(12,"div",8)(13,"button",9)(14,"span"),t._uU(15,"Fees > Statement"),t.qZA()()(),t.TgZ(16,"div",10)(17,"div",1)(18,"div",7),t.ynx(19),t.TgZ(20,"mat-radio-group",11),t.NdJ("change",function(r){return n.onChange(r)}),t.YNc(21,y,3,3,"ng-container",12),t.qZA(),t.BQk(),t.qZA()()()()()(),t.TgZ(22,"div",13)(23,"div",7)(24,"div",1)(25,"div",7)(26,"button",9)(27,"span"),t._uU(28,"Fees > Statement"),t.qZA()()(),t.TgZ(29,"div",14),t.ynx(30),t.TgZ(31,"mat-radio-group",11),t.NdJ("change",function(r){return n.onChange(r)}),t.YNc(32,w,3,3,"ng-container",12),t.qZA(),t.BQk(),t.qZA()()()()()(),t.TgZ(33,"div",15)(34,"div",16)(35,"div",17)(36,"div",18)(37,"table",19)(38,"tr")(39,"td",20),t._uU(40,"Admission No. :"),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA(),t.TgZ(43,"td",20),t._uU(44,"Roll Number :"),t.qZA(),t.TgZ(45,"td"),t._uU(46),t.qZA(),t.TgZ(47,"td",20),t._uU(48,"Class :"),t.qZA(),t.TgZ(49,"td"),t._uU(50),t.ALo(51,"classSuffix"),t.YNc(52,U,2,1,"span",21),t.qZA()(),t.TgZ(53,"tr")(54,"td",20),t._uU(55,"Student Name :"),t.qZA(),t.TgZ(56,"td"),t._uU(57),t.ALo(58,"titlecase"),t.qZA(),t.TgZ(59,"td",20),t._uU(60,"Father Name :"),t.qZA(),t.TgZ(61,"td"),t._uU(62),t.ALo(63,"titlecase"),t.qZA(),t.TgZ(64,"td",20),t._uU(65,"Mother Name :"),t.qZA(),t.TgZ(66,"td"),t._uU(67),t.ALo(68,"titlecase"),t.qZA()()(),t.TgZ(69,"table",22)(70,"tr")(71,"td",20),t._uU(72,"Fee Concession"),t.qZA(),t.TgZ(73,"td"),t._uU(74),t.qZA(),t.TgZ(75,"td",20),t._uU(76,"Paid Fee"),t.qZA(),t.TgZ(77,"td"),t._uU(78),t.qZA(),t.TgZ(79,"td",20),t._uU(80,"Due Fee"),t.qZA(),t.TgZ(81,"td"),t._uU(82),t.qZA(),t.TgZ(83,"td",20),t._uU(84,"Total Fee"),t.qZA(),t.TgZ(85,"td"),t._uU(86),t.qZA()()(),t.TgZ(87,"table",22)(88,"tr")(89,"th"),t._uU(90,"Particulars"),t.qZA(),t.YNc(91,q,3,3,"ng-container",12),t.qZA(),t.TgZ(92,"tr")(93,"th"),t._uU(94,"Fee Amount"),t.qZA(),t.YNc(95,k,3,3,"ng-container",12),t.qZA()(),t.TgZ(96,"table",22)(97,"tr")(98,"th"),t._uU(99,"S.No."),t.qZA(),t.TgZ(100,"th"),t._uU(101,"Receipt No."),t.qZA(),t.TgZ(102,"th"),t._uU(103,"Fee Amount"),t.qZA(),t.TgZ(104,"th"),t._uU(105,"Payment Date"),t.qZA(),t.TgZ(106,"th"),t._uU(107,"Fee Receipt"),t.qZA(),t.TgZ(108,"th"),t._uU(109,"Fee Recipient"),t.qZA()(),t.YNc(110,$,2,1,"ng-container",21),t.qZA()()()()()(),t.TgZ(111,"div",23)(112,"div",24)(113,"div",25)(114,"div",26)(115,"h5",27),t._uU(116,"Student Fee Payment Receipt"),t.qZA(),t.TgZ(117,"mat-icon",28),t.NdJ("click",function(){return n.closeModal()}),t._uU(118,"close"),t.qZA()(),t.TgZ(119,"div",29),t.ynx(120)(121),t._UZ(122,"p",30),t.TgZ(123,"div",31)(124,"div",32)(125,"div",33)(126,"div",34)(127,"div",35),t._UZ(128,"img",36),t.qZA(),t.TgZ(129,"div",37)(130,"div",38)(131,"h3",20),t._uU(132),t.ALo(133,"uppercase"),t.qZA()(),t.TgZ(134,"div",39)(135,"p"),t._uU(136),t.ALo(137,"uppercase"),t.qZA(),t.TgZ(138,"p")(139,"span"),t._uU(140),t.qZA()(),t.TgZ(141,"p")(142,"span"),t._uU(143),t.ALo(144,"titlecase"),t.ALo(145,"titlecase"),t.ALo(146,"titlecase"),t.ALo(147,"titlecase"),t.qZA()()()()(),t.TgZ(148,"div",1)(149,"div",40)(150,"p"),t._uU(151),t.qZA()(),t.TgZ(152,"div",41)(153,"p",42),t._uU(154),t.qZA()()(),t.TgZ(155,"table",43)(156,"tr")(157,"td",20),t._uU(158,"RECEIPT NO."),t.qZA(),t.TgZ(159,"td",44),t._uU(160),t.qZA(),t.TgZ(161,"td",20),t._uU(162,"ADMISSION NO."),t.qZA(),t.TgZ(163,"td",44),t._uU(164),t.qZA()(),t.TgZ(165,"tr")(166,"td",20),t._uU(167,"STUDENT NAME"),t.qZA(),t.TgZ(168,"td",44),t._uU(169),t.ALo(170,"uppercase"),t.qZA(),t.TgZ(171,"td",20),t._uU(172,"DATE OF BIRTH"),t.qZA(),t.TgZ(173,"td",44),t._uU(174),t.qZA()(),t.TgZ(175,"tr")(176,"td",20),t._uU(177,"MOTHER NAME"),t.qZA(),t.TgZ(178,"td",44),t._uU(179),t.ALo(180,"uppercase"),t.qZA(),t.TgZ(181,"td",20),t._uU(182,"FATHER NAME"),t.qZA(),t.TgZ(183,"td",44),t._uU(184),t.ALo(185,"uppercase"),t.qZA()(),t.TgZ(186,"tr")(187,"td",20),t._uU(188,"CLASS"),t.qZA(),t.TgZ(189,"td",44),t._uU(190),t.ALo(191,"uppercase"),t.ALo(192,"classSuffix"),t.qZA(),t.TgZ(193,"td",20),t._uU(194,"STREAM"),t.qZA(),t.TgZ(195,"td",44),t._uU(196),t.ALo(197,"uppercase"),t.qZA()()(),t.TgZ(198,"table",22)(199,"tr",45)(200,"th",46),t._uU(201,"S. No. "),t.qZA(),t.TgZ(202,"th",47),t._uU(203,"PARTICULARS "),t.qZA(),t.TgZ(204,"th",48),t._uU(205," FEE AMOUNT"),t.qZA()(),t.YNc(206,G,7,7,"tr",49),t.TgZ(207,"tr",45),t._UZ(208,"td",46),t.TgZ(209,"td",47),t._uU(210," CONCESSION AMOUNT"),t.qZA(),t.TgZ(211,"td",48),t._uU(212),t.qZA()(),t.TgZ(213,"tr",50),t._UZ(214,"td",51),t.TgZ(215,"td",52),t._uU(216," TOTAL FEE : "),t.qZA(),t.TgZ(217,"td",53),t._uU(218),t.qZA()(),t.TgZ(219,"tr",50),t._UZ(220,"td",54),t.TgZ(221,"td",55),t._uU(222," PAID FEE : "),t.qZA(),t.TgZ(223,"td",56),t._uU(224),t.qZA()(),t.TgZ(225,"tr",50),t._UZ(226,"td",54),t.TgZ(227,"td",55),t._uU(228," DUE FEE : "),t.qZA(),t.TgZ(229,"td",56),t._uU(230),t.qZA()()(),t.ynx(231,57),t.TgZ(232,"p",58)(233,"span",59),t._uU(234,"Authorized Signatory"),t.qZA()(),t.TgZ(235,"p",60),t._uU(236," FEE DEPOSITED "),t.TgZ(237,"span",61),t._uU(238),t.ALo(239,"numberToWords"),t.qZA()(),t.BQk(),t._UZ(240,"p",62),t.qZA()()(),t.BQk()(),t.qZA(),t.TgZ(241,"div",63)(242,"button",64),t.NdJ("click",function(){return n.printStudentData()}),t._uU(243," Print"),t.qZA()()()()()()()()),2&e&&(t.xp6(21),t.Q6J("ngForOf",n.allSessionData),t.xp6(11),t.Q6J("ngForOf",n.allSessionData),t.xp6(10),t.Oqu(null==n.studentInfo?null:n.studentInfo.admissionNo),t.xp6(4),t.Oqu(null==n.studentInfo?null:n.studentInfo.rollNumber),t.xp6(4),t.hij("",t.lcZ(51,46,null==n.clsFeesStructure?null:n.clsFeesStructure.class)," "),t.xp6(2),t.Q6J("ngIf",11==(null==n.clsFeesStructure?null:n.clsFeesStructure.class)||12==(null==n.clsFeesStructure?null:n.clsFeesStructure.class)),t.xp6(5),t.Oqu(t.lcZ(58,48,null==n.studentInfo?null:n.studentInfo.name)),t.xp6(5),t.Oqu(t.lcZ(63,50,null==n.studentInfo?null:n.studentInfo.fatherName)),t.xp6(5),t.Oqu(t.lcZ(68,52,null==n.studentInfo?null:n.studentInfo.motherName)),t.xp6(7),t.hij("\u20b9 ",null==n.studentFeesCollection?null:n.studentFeesCollection.feesConcession,""),t.xp6(4),t.hij("\u20b9 ",null==n.studentFeesCollection?null:n.studentFeesCollection.paidFees,""),t.xp6(4),t.hij("\u20b9 ",null==n.studentFeesCollection?null:n.studentFeesCollection.dueFees,""),t.xp6(4),t.hij("\u20b9 ",null==n.studentFeesCollection?null:n.studentFeesCollection.totalFees,""),t.xp6(5),t.Q6J("ngForOf",null==n.clsFeesStructure?null:n.clsFeesStructure.feesType),t.xp6(4),t.Q6J("ngForOf",null==n.clsFeesStructure?null:n.clsFeesStructure.feesType),t.xp6(15),t.Q6J("ngIf",n.processedData&&n.processedData.length>0),t.xp6(1),t.ekj("show",n.showModal),t.xp6(17),t.s9C("src",null==n.schoolInfo?null:n.schoolInfo.schoolLogo,t.LSH),t.xp6(4),t.Oqu(t.lcZ(133,54,null==n.schoolInfo?null:n.schoolInfo.schoolName)),t.xp6(4),t.AsE("Affiliated to ",t.lcZ(137,56,null==n.schoolInfo?null:n.schoolInfo.board),", Affliation No. - ",null==n.schoolInfo?null:n.schoolInfo.affiliationNumber," "),t.xp6(4),t.AsE("Contact - ",null==n.schoolInfo?null:n.schoolInfo.phoneOne," \xa0 Email - ",null==n.schoolInfo?null:n.schoolInfo.email,""),t.xp6(3),t.xDo("",t.lcZ(144,58,null==n.schoolInfo?null:n.schoolInfo.street),", ",t.lcZ(145,60,null==n.schoolInfo?null:n.schoolInfo.city),", Dist.- ",t.lcZ(146,62,null==n.schoolInfo?null:n.schoolInfo.district),", ",t.lcZ(147,64,null==n.schoolInfo?null:n.schoolInfo.state)," - ",null==n.schoolInfo?null:n.schoolInfo.pinCode,""),t.xp6(8),t.hij("FEES RECEIPT - ",null==n.clsFeesStructure?null:n.clsFeesStructure.session,""),t.xp6(3),t.hij("Date: ",null==n.singleReceiptInstallment[0]?null:n.singleReceiptInstallment[0].paymentDate,""),t.xp6(6),t.hij(" :\xa0\xa0",null==n.singleReceiptInstallment[0]?null:n.singleReceiptInstallment[0].receiptNo," "),t.xp6(4),t.hij(" :\xa0\xa0",null==n.studentInfo?null:n.studentInfo.admissionNo," "),t.xp6(5),t.hij(" :\xa0\xa0",t.lcZ(170,66,null==n.studentInfo?null:n.studentInfo.name)," "),t.xp6(5),t.hij(" :\xa0\xa0",null==n.studentInfo?null:n.studentInfo.dob," "),t.xp6(5),t.hij(" :\xa0\xa0",t.lcZ(180,68,null==n.studentInfo?null:n.studentInfo.motherName)," "),t.xp6(5),t.hij(" :\xa0\xa0",t.lcZ(185,70,null==n.studentInfo?null:n.studentInfo.fatherName)," "),t.xp6(6),t.hij(" :\xa0\xa0",t.lcZ(191,72,t.lcZ(192,74,null==n.clsFeesStructure?null:n.clsFeesStructure.class))," "),t.xp6(6),t.hij(" :\xa0\xa0",t.lcZ(197,76,null==n.studentInfo?null:n.studentInfo.stream)," "),t.xp6(10),t.Q6J("ngForOf",null==n.clsFeesStructure?null:n.clsFeesStructure.feesType),t.xp6(6),t.hij(" - ",n.formatCurrency(null==n.singleReceiptInstallment[0]?null:n.singleReceiptInstallment[0].feesConcession)," "),t.xp6(6),t.hij(" ",n.formatCurrency(null==n.studentFeesCollection?null:n.studentFeesCollection.totalFees),""),t.xp6(6),t.hij(" ",n.formatCurrency(null==n.singleReceiptInstallment[0]?null:n.singleReceiptInstallment[0].allPaidAmount)," "),t.xp6(6),t.hij(" ",n.formatCurrency((null==n.studentFeesCollection?null:n.studentFeesCollection.totalFees)-(null==n.singleReceiptInstallment[0]?null:n.singleReceiptInstallment[0].allPaidAmount)),""),t.xp6(8),t.AsE(" ",n.formatCurrency(null==n.singleReceiptInstallment[0]?null:n.singleReceiptInstallment[0].paidAmount)," /- (",t.lcZ(239,78,null==n.singleReceiptInstallment[0]?null:n.singleReceiptInstallment[0].paidAmount)," Rupees Only)"))},dependencies:[d.sg,d.O5,Z.R,A.A,O.lW,M.Hw,f.VQ,f.U0,P.wG,d.gd,d.rS,d.Nd,T.N,S],styles:[".dashboard-container[_ngcontent-%COMP%]{background:rgb(243,241,250);min-height:90vh;width:100%;padding-bottom:1.5vh}.chart-main-container[_ngcontent-%COMP%]{padding-left:3.5%;padding-right:3.5%}.listing-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;box-shadow:none;border-radius:20px;margin-bottom:2.5vh}.chart-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px;margin-top:10px;margin-bottom:2.5vh}#barChart[_ngcontent-%COMP%], #lineChart[_ngcontent-%COMP%], #pieChart[_ngcontent-%COMP%]{height:400px;width:100%}.main-container[_ngcontent-%COMP%]{padding:0 5% 0 3%}.big-option-container[_ngcontent-%COMP%]{background-color:#dcd2ff;min-height:auto;width:100%;margin-left:1%;margin-top:3vh;margin-bottom:5vh;padding-top:3vh;padding-bottom:2vh;padding-left:2%;padding-right:2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:10px}.setting-button[_ngcontent-%COMP%]{background-color:#fff;color:#2f2c5e;width:50px!important;height:50px!important;margin-bottom:3vh;border:1px solid #d5d0e1af;box-shadow:none;border-radius:50%}  .custom-select{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0;margin-bottom:3vh;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select .mat-form-field-underline{display:none}  .custom-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}  .custom-select-print{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0;margin-bottom:3vh;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select-print .mat-select-arrow{color:#8c52ff}  .custom-select-print .mat-form-field-underline{display:none}  .custom-select-print .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select-print[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}.form-control[_ngcontent-%COMP%]{width:100%;height:45px;color:#382066;border:none;margin-right:0!important;margin-bottom:3vh;display:inline-block;box-shadow:#0000000d 0 3px 8px}.form-control[_ngcontent-%COMP%]::placeholder{color:#382066;font-size:15px;letter-spacing:.5px}.form-control[_ngcontent-%COMP%]:focus{box-shadow:#0000000d 0 3px 8px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{margin-top:.5vh;padding-left:0}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#646089;padding-top:3px;font-size:20px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#382066;font-size:15px;font-weight:400;margin-top:2px;margin-left:10px;letter-spacing:.75px;display:inline-block}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:55vh;margin-left:1%;padding-left:1%;padding-right:1%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:10px}.main-card[_ngcontent-%COMP%]{min-height:55vh;width:100%;margin-top:1.5vh;padding-bottom:1vh;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#382066;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#382066;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#382066}p[_ngcontent-%COMP%]{color:#382066;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#382066}.text-danger[_ngcontent-%COMP%]{font-size:12px}.big-option-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:100%;height:44px;background:#8C52FF;color:#fff;font-family:Poppins,sans-serif!important;margin-right:0!important;margin-bottom:3vh;padding-left:0!important;padding-right:0!important;border-radius:6px;box-shadow:none!important}.big-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{height:44px;background:#8C52FF;color:#fff;font-family:Poppins,sans-serif!important;margin-right:0!important;border-radius:6px;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#9f79eb;color:#f5f3fb;font-family:Poppins,sans-serif!important;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8c52ff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#382066;cursor:pointer;text-decoration:none}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;-webkit-overflow-scrolling:touch}.table-wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;min-width:auto}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#8C52FF!important}th[_ngcontent-%COMP%]{white-space:nowrap;color:#382066;letter-spacing:.5px}td[_ngcontent-%COMP%]{white-space:nowrap;color:#382066}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#382066;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#382066}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.modal-header[_ngcontent-%COMP%]{background-color:#fff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#4a2b89;font-size:16px}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#4a2b89;margin-top:-10px}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-dialog[_ngcontent-%COMP%]{height:80vh;margin-top:75px}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8c52ff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}.mobile-option[_ngcontent-%COMP%]{display:inline}.desktop-option[_ngcontent-%COMP%]{display:none}  .custom-session-select{background-color:#fff;height:35px;width:35%!important;letter-spacing:.5px;padding-left:8px;padding-right:8px;padding-top:0!important;margin-right:0!important;margin-bottom:0!important;padding-bottom:0!important;box-shadow:none;border:1px solid #ced4da;border-radius:5px;color:#434445}  .custom-session-select .mat-select-panel{margin-bottom:20px!important}  .custom-session-select .mat-select-panel .mat-option{margin-bottom:10px!important;font-size:.85rem}  .custom-session-select .mat-select-arrow{top:0;position:relative}  .custom-session-select .mat-form-field-underline{display:none}  .custom-session-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}  .custom-session-select .mat-form-field-infix{padding-top:0!important;padding-bottom:0!important;margin-top:-10px!important;line-height:35px!important}@media (min-width: 992px){.mobile-option[_ngcontent-%COMP%]{display:none}.desktop-option[_ngcontent-%COMP%]{display:inline}.dashboard-container[_ngcontent-%COMP%]{width:100%;padding-bottom:1.5vh}.main-container[_ngcontent-%COMP%]{padding:0 5% 0 3%}.chart-main-container[_ngcontent-%COMP%]{padding-left:4%;padding-right:4.5%}.listing-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;box-shadow:none;border-radius:20px;margin-bottom:2.5vh}.chart-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px;margin-top:40px;margin-bottom:2.5vh}#barChart[_ngcontent-%COMP%], #lineChart[_ngcontent-%COMP%], #pieChart[_ngcontent-%COMP%]{height:50vh;width:100%;color:#5dc77b;color:#00c57d;color:#d0cdff}.big-option-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{padding-left:2%!important;padding-right:2%!important;margin-right:0!important;margin-bottom:0!important}.big-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin-right:0!important;margin-bottom:0!important}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{margin-top:.5vh;padding-left:0}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#646089;padding-top:3px;font-size:20px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#382066;font-size:15px;font-weight:400;margin-top:2px;margin-left:10px;letter-spacing:.75px;display:inline-block}.big-option-container[_ngcontent-%COMP%]{background-color:#dcd2ff;min-height:auto;width:100%;margin-left:1%;margin-top:3vh;margin-bottom:5vh;padding-top:3vh;padding-bottom:3vh;padding-left:2%;padding-right:2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:65vh;width:100%;margin-left:1%;padding-top:.5vh;padding-left:1%;padding-right:1%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px}.main-card[_ngcontent-%COMP%]{min-height:65vh;margin-top:2vh;padding-left:2px;padding-right:2px}.form-control[_ngcontent-%COMP%]{width:100%!important;height:45px;color:#382066;border:none;margin-right:0!important;margin-bottom:0!important;display:inline-block;box-shadow:#0000000d 0 3px 8px}.form-control[_ngcontent-%COMP%]::placeholder{color:#382066;font-size:15px;letter-spacing:.5px}.form-control[_ngcontent-%COMP%]:focus{box-shadow:#0000000d 0 3px 8px}  .custom-select{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select .mat-form-field-underline{display:none}  .custom-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}  .custom-select-print{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select-print .mat-select-arrow{color:#8c52ff}  .custom-select-print .mat-form-field-underline{display:none}  .custom-select-print .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select-print[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}.setting-button[_ngcontent-%COMP%]{background-color:#fff;color:#382066;width:50px!important;height:50px!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:50%}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#8C52FF!important}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.table-container[_ngcontent-%COMP%]{background-color:#fff;border:none;padding:25px;margin-top:2vh}.logo-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1.3em;margin-top:2vh;margin-bottom:5vh;letter-spacing:.5px;display:inline-table}.logo-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none;text-align:center}.info-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1em;letter-spacing:.25px;margin-bottom:5vh;display:inline-table}img[_ngcontent-%COMP%]{height:35px}.info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none}.custom-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid #ccc;display:inline-table}.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:1px solid rgb(218,218,222);text-align:center}.receipt-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid rgb(218,218,222);display:inline-table}.receipt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px}.receipt-table[_ngcontent-%COMP%]   .receipt-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:5px;padding-top:5px}.text-right[_ngcontent-%COMP%]{text-align:right}.border[_ngcontent-%COMP%]{border:1px solid #ccc}.text-center[_ngcontent-%COMP%]{text-align:center}.text-bold[_ngcontent-%COMP%]{font-weight:700}@media (min-width: 576px) and (max-width:991.98px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;border:1px solid #ccc}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%;font-size:10px}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}@media (min-width: 992px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;margin-bottom:2vh;border-radius:5px}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}.sign-table[_ngcontent-%COMP%]{border:1px solid transparent}.custom-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{margin-top:200px}.print-model-body[_ngcontent-%COMP%]{max-height:calc(0vh - 2.3 * 3.5rem);overflow-x:hidden;overflow-y:hidden}"]}),o})()}];let V=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(K),p.Bz]}),o})();var X=l(1293);let tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,V,X.g]}),o})()},88789:(h,g,l)=>{l.d(g,{N:()=>p});var d=l(94650);let p=(()=>{class c{transform(s){return s>=4&&s<=12?`${s}th`:1==s?`${s}st`:2==s?`${s}nd`:3==s?`${s}rd`:200==s?"Nursery":201==s?"LKG":202==s?"UKG":void 0}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275pipe=d.Yjl({name:"classSuffix",type:c,pure:!0}),c})()}}]);