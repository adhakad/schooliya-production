"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[794],{30794:(O,_,r)=>{r.r(_),r.d(_,{AdsModule:()=>Q});var e=r(36895),f=r(89299),m=r(24006),b=r(77579),x=r(92340),t=r(94650),C=r(40838),M=r(62373),c=r(88153),h=r(4859),i=r(97392),d=r(59549),p=r(44144),P=r(51572),A=r(3238),T=r(80980),v=r(4455);function w(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"p",25),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"p",25),t._uU(6),t.qZA()(),t._UZ(7,"td"),t.TgZ(8,"td"),t._UZ(9,"img",26),t.qZA(),t._UZ(10,"td"),t.TgZ(11,"td",25)(12,"mat-icon",27),t.NdJ("click",function(){const g=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.updateAdsModel(g))}),t._uU(13,"edit"),t.qZA()(),t.TgZ(14,"td",25)(15,"mat-icon",27),t.NdJ("click",function(){const g=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.deleteAdsModel(g._id))}),t._uU(16,"delete"),t.qZA()()()}if(2&o){const n=s.$implicit,a=s.index,l=t.oxw(2);t.xp6(3),t.Oqu(10*l.number+a+1-10),t.xp6(3),t.Oqu(n.title),t.xp6(3),t.hYB("src","",l.baseUrl,"/public/ads-image/",n.image,"",t.LSH)}}function Z(o,s){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,w,17,4,"tr",24),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.adsInfo)}}function k(o,s){if(1&o&&(t.TgZ(0,"div",28)(1,"div",29)(2,"h5",30),t._uU(3,"\xa0"),t.qZA()(),t.TgZ(4,"div",31)(5,"p",32),t._uU(6),t.qZA()(),t.TgZ(7,"div",33),t._UZ(8,"mat-icon"),t.qZA()()),2&o){const n=t.oxw();t.xp6(6),t.Oqu(n.successMsg)}}function y(o,s){if(1&o&&(t.TgZ(0,"div")(1,"p",44),t._uU(2),t.qZA()()),2&o){const n=t.oxw(3);t.xp6(2),t.Oqu(n.errorMsg)}}function N(o,s){1&o&&(t.TgZ(0,"mat-hint",45),t._uU(1,"Title is required"),t.qZA())}function U(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"form",37),t.NdJ("ngSubmit",function(){t.CHM(n);const l=t.oxw(2);return t.KtG(l.adsAddUpdate())}),t.TgZ(1,"div",31),t.YNc(2,y,3,1,"div",17),t.TgZ(3,"mat-form-field",38)(4,"mat-label"),t._uU(5,"Title"),t.qZA(),t._UZ(6,"input",39),t.YNc(7,N,2,0,"mat-hint",40),t.qZA(),t.TgZ(8,"mat-form-field",38)(9,"mat-label"),t._uU(10,"Choose Image"),t.qZA(),t.TgZ(11,"ngx-mat-file-input",41)(12,"mat-icon",42),t._uU(13,"cloud_upload"),t.qZA()()()(),t.TgZ(14,"div",33)(15,"button",43),t._uU(16,"Submit"),t.qZA()()()}if(2&o){const n=t.oxw(2);let a;t.Q6J("formGroup",n.adsForm),t.xp6(2),t.Q6J("ngIf",n.errorCheck),t.xp6(5),t.Q6J("ngIf",!(null!=(a=n.adsForm.get("title"))&&a.valid)&&(null==(a=n.adsForm.get("title"))?null:a.touched)),t.xp6(8),t.Q6J("disabled",!n.adsForm.valid)}}function I(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"h4"),t._uU(2,"To delete class, click ok to confirm."),t.qZA(),t.TgZ(3,"div",33)(4,"button",46),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(2);return t.KtG(l.adsDelete(l.deleteById))}),t._uU(5,"Ok"),t.qZA()()()}}function F(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"h5",34),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",35),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.closeModal())}),t._uU(5,"close"),t.qZA()(),t.YNc(6,U,17,4,"form",36),t.YNc(7,I,6,0,"div",17),t.qZA()}if(2&o){const n=t.oxw();t.xp6(3),t.hij("",n.updateMode?"Update":n.deleteMode?"Delete":"Create New"," Ads"),t.xp6(3),t.Q6J("ngIf",!n.deleteMode),t.xp6(1),t.Q6J("ngIf",n.deleteMode)}}function J(o,s){1&o&&t._UZ(0,"mat-progress-spinner",51)}function q(o,s){if(1&o&&(t.TgZ(0,"div",49),t.YNc(1,J,1,0,"mat-progress-spinner",50),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.loader)}}function z(o,s){if(1&o&&(t.TgZ(0,"div",47),t.YNc(1,q,2,1,"div",48),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loader)}}const L=[{path:"",component:(()=>{class o{constructor(n,a){this.fb=n,this.adsService=a,this.baseUrl=x.N.API_URL,this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.deleteById="",this.successMsg="",this.errorMsg="",this.errorCheck=!1,this.adsInfo=[],this.recordLimit=5,this.filters={},this.number=0,this.paginationValues=new b.x,this.loader=!0,this.adsForm=this.fb.group({_id:[""],title:["",m.kI.required],image:[""]})}ngOnInit(){this.getAds({page:1})&&setTimeout(()=>{this.loader=!1},1e3)}getAds(n){return new Promise((a,l)=>{let g={filters:{},page:n.page,limit:n.limit?n.limit:this.recordLimit};this.recordLimit=g.limit,this.filters.searchText&&(g.filters.searchText=this.filters.searchText.trim()),this.adsService.adsPaginationList(g).subscribe(u=>{if(u)return this.adsInfo=u.adsList,this.number=g.page,this.paginationValues.next({type:"page-init",page:g.page,totalTableRecords:u.countAds}),a(!0)})})}closeModal(){this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.errorMsg=""}addAdsModel(){this.showModal=!0,this.deleteMode=!1,this.adsForm.reset()}updateAdsModel(n){this.showModal=!0,this.deleteMode=!1,this.updateMode=!0,this.adsForm.patchValue(n)}deleteAdsModel(n){this.showModal=!0,this.updateMode=!1,this.deleteMode=!0,this.deleteById=n}successDone(){setTimeout(()=>{this.closeModal(),this.successMsg="",this.getAds({page:1})},1e3)}adsAddUpdate(){this.adsForm.valid&&(this.updateMode?this.adsService.updateAds(this.adsForm.value).subscribe(n=>{n&&(this.successDone(),this.successMsg=n)},n=>{this.errorCheck=!0,this.errorMsg=n.error}):this.adsService.addAds(this.adsForm.value).subscribe(n=>{n&&(this.successDone(),this.successMsg=n)},n=>{this.errorCheck=!0,this.errorMsg=n.error}))}adsDelete(n){this.adsService.deleteAds(n).subscribe(a=>{a&&(this.successDone(),this.successMsg=a,this.deleteById="")})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.qu),t.Y36(C.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ads"]],decls:44,vars:8,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12","offset-lg-0"],[1,"main-card"],[1,"row","mt-4","mb-2"],[1,"col-8","col-lg-5"],["type","text","placeholder","Ads Search...","id","searchText","name","searchText",1,"form-control",3,"ngModel","ngModelChange","keyup"],["searchText","ngModel"],[1,"col-4","col-lg-2","offset-lg-5"],["mat-raised-button","",1,"submit-button",3,"click"],[1,"table","table-hover","align-middle","mt-2","mb-1","bg-white"],[1,"bg-light"],[1,"text-muted"],[2,"color","transparent"],[4,"ngIf"],[1,"pagination"],[3,"paginationValues","onChange"],[1,"modal","fade","show"],["role","document",1,"modal-dialog","modal-dialog-top"],["class","modal-content",4,"ngIf"],["class","spinner-container",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mb-0"],["alt","",2,"height","28px",3,"src"],[3,"click"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"color","transparent"],[1,"modal-body"],[1,"success-message"],[1,"modal-footer"],[1,"modal-title"],["matRipple","",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","title"],["class","form-text text-danger",4,"ngIf"],["formControlName","image"],["ngxMatFileInputIcon","",2,"color","#8d6dff"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"error-message"],[1,"form-text","text-danger"],["mat-raised-button","","type","button",1,"delete-button",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(n,a){1&n&&(t._UZ(0,"app-header-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-navbar"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"input",9,10),t.NdJ("ngModelChange",function(g){return a.filters.searchText=g})("keyup",function(){return a.getAds({page:1,limit:0})}),t.qZA()(),t.TgZ(14,"div",11)(15,"button",12),t.NdJ("click",function(){return a.addAdsModel()}),t.TgZ(16,"mat-icon"),t._uU(17,"add"),t.qZA(),t._uU(18,"Create"),t.qZA()()(),t.TgZ(19,"table",13)(20,"thead",14)(21,"tr",15)(22,"th"),t._uU(23,"No."),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Ads Title"),t.qZA(),t.TgZ(26,"th",16),t._uU(27,"Ads Title"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Image"),t.qZA(),t.TgZ(30,"th",16),t._uU(31,"Image"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Edit"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Remove"),t.qZA()()(),t.YNc(36,Z,2,1,"tbody",17),t.qZA(),t.TgZ(37,"div",18)(38,"app-pagination",19),t.NdJ("onChange",function(g){return a.getAds(g)}),t.qZA()(),t.TgZ(39,"div",20)(40,"div",21),t.YNc(41,k,9,1,"div",22),t.YNc(42,F,8,3,"div",22),t.qZA()()()()()()()()(),t.YNc(43,z,2,1,"div",23)),2&n&&(t.xp6(12),t.Q6J("ngModel",a.filters.searchText),t.xp6(24),t.Q6J("ngIf",a.adsInfo&&a.adsInfo.length>0),t.xp6(2),t.Q6J("paginationValues",a.paginationValues),t.xp6(1),t.ekj("show",a.showModal),t.xp6(2),t.Q6J("ngIf",a.successMsg),t.xp6(1),t.Q6J("ngIf",!a.successMsg),t.xp6(1),t.Q6J("ngIf",a.loader))},dependencies:[e.sg,e.O5,M.R,c.A,h.lW,i.Hw,d.KE,d.bx,d.hX,p.Nt,P.Ou,A.wG,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,m.On,T.Q,v.v6,v.qb],styles:[".dashboard-container[_ngcontent-%COMP%]{background:rgb(243,241,250);min-height:90vh;width:100%;padding-bottom:1.5vh}.chart-main-container[_ngcontent-%COMP%]{padding-left:3.5%;padding-right:3.5%}.listing-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;box-shadow:none;border-radius:20px;margin-bottom:2.5vh}.chart-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px;margin-top:10px;margin-bottom:2.5vh}#barChart[_ngcontent-%COMP%], #lineChart[_ngcontent-%COMP%], #pieChart[_ngcontent-%COMP%]{height:400px;width:100%}.main-container[_ngcontent-%COMP%]{padding:0 5% 0 3%}.big-option-container[_ngcontent-%COMP%]{background-color:#dcd2ff;min-height:auto;width:100%;margin-left:1%;margin-top:3vh;margin-bottom:5vh;padding-top:3vh;padding-bottom:2vh;padding-left:2%;padding-right:2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:10px}.setting-button[_ngcontent-%COMP%]{background-color:#fff;color:#2f2c5e;width:50px!important;height:50px!important;margin-bottom:3vh;border:1px solid #d5d0e1af;box-shadow:none;border-radius:50%}  .custom-select{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0;margin-bottom:3vh;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select .mat-form-field-underline{display:none}  .custom-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}  .custom-select-print{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0;margin-bottom:3vh;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select-print .mat-select-arrow{color:#8c52ff}  .custom-select-print .mat-form-field-underline{display:none}  .custom-select-print .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select-print[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}.form-control[_ngcontent-%COMP%]{width:100%;height:45px;color:#382066;border:none;margin-right:0!important;margin-bottom:3vh;display:inline-block;box-shadow:#0000000d 0 3px 8px}.form-control[_ngcontent-%COMP%]::placeholder{color:#382066;font-size:15px;letter-spacing:.5px}.form-control[_ngcontent-%COMP%]:focus{box-shadow:#0000000d 0 3px 8px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{margin-top:.5vh;padding-left:0}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#646089;padding-top:3px;font-size:20px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#382066;font-size:15px;font-weight:400;margin-top:2px;margin-left:10px;letter-spacing:.75px;display:inline-block}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:55vh;margin-left:1%;padding-left:1%;padding-right:1%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:10px}.main-card[_ngcontent-%COMP%]{min-height:55vh;width:100%;margin-top:1.5vh;padding-bottom:1vh;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#382066;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#382066;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#382066}p[_ngcontent-%COMP%]{color:#382066;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#382066}.text-danger[_ngcontent-%COMP%]{font-size:12px}.big-option-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:100%;height:44px;background:#8C52FF;color:#fff;font-family:Poppins,sans-serif!important;margin-right:0!important;margin-bottom:3vh;padding-left:0!important;padding-right:0!important;border-radius:6px;box-shadow:none!important}.big-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{height:44px;background:#8C52FF;color:#fff;font-family:Poppins,sans-serif!important;margin-right:0!important;border-radius:6px;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#9f79eb;color:#f5f3fb;font-family:Poppins,sans-serif!important;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8c52ff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#382066;cursor:pointer;text-decoration:none}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;-webkit-overflow-scrolling:touch}.table-wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;min-width:auto}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#8C52FF!important}th[_ngcontent-%COMP%]{white-space:nowrap;color:#382066;letter-spacing:.5px}td[_ngcontent-%COMP%]{white-space:nowrap;color:#382066}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#382066;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#382066}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.modal-header[_ngcontent-%COMP%]{background-color:#fff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#4a2b89;font-size:16px}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#4a2b89;margin-top:-10px}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-dialog[_ngcontent-%COMP%]{height:80vh;margin-top:75px}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8c52ff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}.mobile-option[_ngcontent-%COMP%]{display:inline}.desktop-option[_ngcontent-%COMP%]{display:none}  .custom-session-select{background-color:#fff;height:35px;width:35%!important;letter-spacing:.5px;padding-left:8px;padding-right:8px;padding-top:0!important;margin-right:0!important;margin-bottom:0!important;padding-bottom:0!important;box-shadow:none;border:1px solid #ced4da;border-radius:5px;color:#434445}  .custom-session-select .mat-select-panel{margin-bottom:20px!important}  .custom-session-select .mat-select-panel .mat-option{margin-bottom:10px!important;font-size:.85rem}  .custom-session-select .mat-select-arrow{top:0;position:relative}  .custom-session-select .mat-form-field-underline{display:none}  .custom-session-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}  .custom-session-select .mat-form-field-infix{padding-top:0!important;padding-bottom:0!important;margin-top:-10px!important;line-height:35px!important}@media (min-width: 992px){.mobile-option[_ngcontent-%COMP%]{display:none}.desktop-option[_ngcontent-%COMP%]{display:inline}.dashboard-container[_ngcontent-%COMP%]{width:100%;padding-bottom:1.5vh}.main-container[_ngcontent-%COMP%]{padding:0 5% 0 3%}.chart-main-container[_ngcontent-%COMP%]{padding-left:4%;padding-right:4.5%}.listing-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;box-shadow:none;border-radius:20px;margin-bottom:2.5vh}.chart-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px;margin-top:40px;margin-bottom:2.5vh}#barChart[_ngcontent-%COMP%], #lineChart[_ngcontent-%COMP%], #pieChart[_ngcontent-%COMP%]{height:50vh;width:100%;color:#5dc77b;color:#00c57d;color:#d0cdff}.big-option-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{padding-left:2%!important;padding-right:2%!important;margin-right:0!important;margin-bottom:0!important}.big-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin-right:0!important;margin-bottom:0!important}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{margin-top:.5vh;padding-left:0}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#646089;padding-top:3px;font-size:20px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#382066;font-size:15px;font-weight:400;margin-top:2px;margin-left:10px;letter-spacing:.75px;display:inline-block}.big-option-container[_ngcontent-%COMP%]{background-color:#dcd2ff;min-height:auto;width:100%;margin-left:1%;margin-top:3vh;margin-bottom:5vh;padding-top:3vh;padding-bottom:3vh;padding-left:2%;padding-right:2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:65vh;width:100%;margin-left:1%;padding-top:.5vh;padding-left:1%;padding-right:1%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px}.main-card[_ngcontent-%COMP%]{min-height:65vh;margin-top:2vh;padding-left:2px;padding-right:2px}.form-control[_ngcontent-%COMP%]{width:100%!important;height:45px;color:#382066;border:none;margin-right:0!important;margin-bottom:0!important;display:inline-block;box-shadow:#0000000d 0 3px 8px}.form-control[_ngcontent-%COMP%]::placeholder{color:#382066;font-size:15px;letter-spacing:.5px}.form-control[_ngcontent-%COMP%]:focus{box-shadow:#0000000d 0 3px 8px}  .custom-select{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select .mat-form-field-underline{display:none}  .custom-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}  .custom-select-print{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select-print .mat-select-arrow{color:#8c52ff}  .custom-select-print .mat-form-field-underline{display:none}  .custom-select-print .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select-print[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}.setting-button[_ngcontent-%COMP%]{background-color:#fff;color:#382066;width:50px!important;height:50px!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:50%}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#8C52FF!important}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}"]}),o})()}];let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(L),f.Bz]}),o})();var E=r(1293);let Q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.ez,R,E.g]}),o})()},80980:(O,_,r)=>{r.d(_,{Q:()=>M});var e=r(94650),f=r(36895),m=r(4859),b=r(97392);function x(c,h){if(1&c){const i=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(i);const p=e.oxw().$implicit,P=e.oxw(2);return e.KtG(P.onChangePage(p,0))}),e._uU(1),e.qZA()}if(2&c){const i=e.oxw().$implicit,d=e.oxw(2);e.ekj("pagination_active",d.activePageNumber==i),e.xp6(1),e.Oqu(i)}}function t(c,h){if(1&c&&e.YNc(0,x,2,3,"button",5),2&c){const i=h.$implicit,d=e.oxw(2);e.Q6J("ngIf",d.showPages(i))}}function C(c,h){if(1&c){const i=e.EpF();e.TgZ(0,"div",1)(1,"ul",2)(2,"button",3),e.NdJ("click",function(){e.CHM(i);const p=e.oxw();return e.KtG(p.changePage(-1))}),e.TgZ(3,"mat-icon"),e._uU(4,"chevron_left"),e.qZA()(),e.YNc(5,t,1,1,"ng-template",4),e.TgZ(6,"button",3),e.NdJ("click",function(){e.CHM(i);const p=e.oxw();return e.KtG(p.changePage(1))}),e.TgZ(7,"mat-icon"),e._uU(8,"chevron_right"),e.qZA()()()()}if(2&c){const i=e.oxw();e.xp6(5),e.Q6J("ngForOf",i.pages)}}let M=(()=>{class c{constructor(){this.totalTableRecords=0,this.onChange=new e.vpe,this.recordLimit=10,this.pages=[],this.activePageNumber=0,this.iteration=0,this.filters={},this.selectedLimit=10}ngOnInit(){this.paginationValues?.subscribe(i=>{i&&"page-init"==i.type&&(this.totalTableRecords=i.totalTableRecords,this.onChangePage(i.page,0))})}calcNumberOfPage(){this.iteration=0==this.recordLimit?0:this.totalTableRecords/this.recordLimit,this.iteration=this.iteration<0?0:this.iteration>Number(this.iteration.toFixed())?Number(this.iteration.toFixed())+1:Number(this.iteration.toFixed())}onChangePage(i,d){this.calcNumberOfPage(),this.pages=[];for(var p=1;p<=this.iteration;p++)this.pages[p-1]=p;(i!=this.activePageNumber||d)&&(this.activePageNumber=i,this.onChange.emit({page:i,limit:this.recordLimit}))}queryLimitChange(i){this.recordLimit="ALL"==i?0:parseInt(i),this.onChangePage(1,1)}changePage(i){if(!(-1==i&&this.activePageNumber<=1||1==i&&this.iteration<=this.activePageNumber)){var d=this.activePageNumber+Number(i);this.calcNumberOfPage(),-1==d&&(d=0),d>this.iteration&&(d=this.iteration),this.onChangePage(d,0)}}showPages(i){if(i>this.activePageNumber-5&&this.activePageNumber+5>i)return!0}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-pagination"]],inputs:{totalTableRecords:"totalTableRecords",paginationValues:"paginationValues"},outputs:{onChange:"onChange"},decls:1,vars:1,consts:[["class","pagination-wrapper mt-0",4,"ngIf"],[1,"pagination-wrapper","mt-0"],[1,"pagination"],["mat-icon-button","",3,"click"],["ngFor","",3,"ngForOf"],["class","button","mat-icon-button","",3,"pagination_active","click",4,"ngIf"],["mat-icon-button","",1,"button",3,"click"]],template:function(i,d){1&i&&e.YNc(0,C,9,1,"div",0),2&i&&e.Q6J("ngIf",d.totalTableRecords&&d.totalTableRecords>0&&d.selectedLimit<d.totalTableRecords)},dependencies:[f.sg,f.O5,m.lW,b.Hw],styles:[".flm[_ngcontent-%COMP%]{float:left;margin-top:10px}button[_ngcontent-%COMP%]{color:#8d6dff}.button[_ngcontent-%COMP%]{background-color:#e7e6f897;margin:3px}.pagination_active[_ngcontent-%COMP%]{background-color:#8d6dff;color:#fff;margin:3px}"]}),c})()}}]);