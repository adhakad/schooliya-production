"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[2426],{82426:(O,_,r)=>{r.r(_),r.d(_,{PlansModule:()=>D});var e=r(36895),f=r(89299),g=r(24006),x=r(77579),t=r(94650),P=r(63193),C=r(62373),M=r(88153),p=r(4859),h=r(97392),i=r(59549),c=r(44144),m=r(51572),v=r(3238),T=r(80980);function Z(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"p",25),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"p",25),t._uU(6),t.qZA()(),t.TgZ(7,"td")(8,"p",25),t._uU(9),t.qZA()(),t.TgZ(10,"td",25)(11,"mat-icon",26),t.NdJ("click",function(){const d=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.updatePlansModel(d))}),t._uU(12,"edit"),t.qZA()(),t.TgZ(13,"td",25)(14,"mat-icon",26),t.NdJ("click",function(){const d=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.deletePlansModel(d._id))}),t._uU(15,"delete"),t.qZA()()()}if(2&o){const n=s.$implicit,a=s.index,l=t.oxw(2);t.xp6(3),t.Oqu(10*l.number+a+1-10),t.xp6(3),t.Oqu(n.plans),t.xp6(3),t.hij("\u20b9 ",n.price,"")}}function w(o,s){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,Z,16,3,"tr",24),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.plansInfo)}}function k(o,s){if(1&o&&(t.TgZ(0,"div",27)(1,"div",28)(2,"h5",29),t._uU(3,"Class"),t.qZA()(),t.TgZ(4,"div",30)(5,"p",31),t._uU(6),t.qZA()(),t.TgZ(7,"div",32),t._UZ(8,"mat-icon"),t.qZA()()),2&o){const n=t.oxw();t.xp6(6),t.Oqu(n.successMsg)}}function y(o,s){if(1&o&&(t.TgZ(0,"div")(1,"p",45),t._uU(2),t.qZA()()),2&o){const n=t.oxw(3);t.xp6(2),t.Oqu(n.errorMsg)}}function I(o,s){1&o&&(t.TgZ(0,"mat-hint",46),t._uU(1,"Plans is required"),t.qZA())}function A(o,s){1&o&&(t.TgZ(0,"mat-hint",46),t._uU(1,"Price is required"),t.qZA())}function N(o,s){1&o&&(t.TgZ(0,"mat-hint",46),t._uU(1,"Student limit is required"),t.qZA())}function U(o,s){1&o&&(t.TgZ(0,"mat-hint",46),t._uU(1,"Per student increment price is required"),t.qZA())}function F(o,s){1&o&&(t.TgZ(0,"mat-hint",46),t._uU(1,"Student increment range is required"),t.qZA())}function q(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"form",36),t.NdJ("ngSubmit",function(){t.CHM(n);const l=t.oxw(2);return t.KtG(l.plansAddUpdate())}),t.TgZ(1,"div",30),t.YNc(2,y,3,1,"div",17),t.TgZ(3,"mat-form-field",37)(4,"mat-label"),t._uU(5,"Plans"),t.qZA(),t._UZ(6,"input",38),t.YNc(7,I,2,0,"mat-hint",39),t.qZA(),t.TgZ(8,"mat-form-field",37)(9,"mat-label"),t._uU(10,"Price"),t.qZA(),t._UZ(11,"input",40),t.YNc(12,A,2,0,"mat-hint",39),t.qZA(),t.TgZ(13,"mat-form-field",37)(14,"mat-label"),t._uU(15,"Student Limit"),t.qZA(),t._UZ(16,"input",41),t.YNc(17,N,2,0,"mat-hint",39),t.qZA(),t.TgZ(18,"mat-form-field",37)(19,"mat-label"),t._uU(20,"Per Student Increment Price"),t.qZA(),t._UZ(21,"input",42),t.YNc(22,U,2,0,"mat-hint",39),t.qZA(),t.TgZ(23,"mat-form-field",37)(24,"mat-label"),t._uU(25,"Student Increment Range"),t.qZA(),t._UZ(26,"input",43),t.YNc(27,F,2,0,"mat-hint",39),t.qZA()(),t.TgZ(28,"div",32)(29,"button",44),t._uU(30,"Submit"),t.qZA()()()}if(2&o){const n=t.oxw(2);let a,l,d,u,b;t.Q6J("formGroup",n.plansForm),t.xp6(2),t.Q6J("ngIf",n.errorCheck),t.xp6(5),t.Q6J("ngIf",!(null!=(a=n.plansForm.get("plans"))&&a.valid)&&(null==(a=n.plansForm.get("plans"))?null:a.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(l=n.plansForm.get("price"))&&l.valid)&&(null==(l=n.plansForm.get("price"))?null:l.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(d=n.plansForm.get("studentLimit"))&&d.valid)&&(null==(d=n.plansForm.get("studentLimit"))?null:d.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(u=n.plansForm.get("perStudentIncrementPrice"))&&u.valid)&&(null==(u=n.plansForm.get("perStudentIncrementPrice"))?null:u.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(b=n.plansForm.get("studentIncrementRange"))&&b.valid)&&(null==(b=n.plansForm.get("studentIncrementRange"))?null:b.touched)),t.xp6(2),t.Q6J("disabled",!n.plansForm.valid)}}function J(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"h4"),t._uU(2,"To delete class, click ok to confirm."),t.qZA(),t.TgZ(3,"div",32)(4,"button",47),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(2);return t.KtG(l.plansDelete(l.deleteById))}),t._uU(5,"Ok"),t.qZA()()()}}function L(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"h5",33),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",34),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.closeModal())}),t._uU(5,"close"),t.qZA()(),t.YNc(6,q,31,8,"form",35),t.YNc(7,J,6,0,"div",17),t.qZA()}if(2&o){const n=t.oxw();t.xp6(3),t.hij("",n.updateMode?"Update":n.deleteMode?"Delete":"Create New"," Plans"),t.xp6(3),t.Q6J("ngIf",!n.deleteMode),t.xp6(1),t.Q6J("ngIf",n.deleteMode)}}function z(o,s){1&o&&t._UZ(0,"mat-progress-spinner",52)}function R(o,s){if(1&o&&(t.TgZ(0,"div",50),t.YNc(1,z,1,0,"mat-progress-spinner",51),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.loader)}}function Q(o,s){if(1&o&&(t.TgZ(0,"div",48),t.YNc(1,R,2,1,"div",49),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loader)}}const S=[{path:"",component:(()=>{class o{constructor(n,a){this.fb=n,this.plansService=a,this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.deleteById="",this.successMsg="",this.errorMsg="",this.errorCheck=!1,this.plansInfo=[],this.recordLimit=5,this.filters={},this.number=0,this.paginationValues=new x.x,this.loader=!0,this.plansForm=this.fb.group({_id:[""],plans:["",g.kI.required],price:["",g.kI.required],studentLimit:["",g.kI.required],perStudentIncrementPrice:["",g.kI.required],studentIncrementRange:["",g.kI.required]})}ngOnInit(){this.getPlans({page:1})&&setTimeout(()=>{this.loader=!1},1e3)}getPlans(n){return new Promise((a,l)=>{let d={filters:{},page:n.page,limit:n.limit?n.limit:this.recordLimit};this.recordLimit=d.limit,this.filters.searchText&&(d.filters.searchText=this.filters.searchText.trim()),this.plansService.plansPaginationList(d).subscribe(u=>{if(u)return this.plansInfo=u.plansList,this.number=d.page,this.paginationValues.next({type:"page-init",page:d.page,totalTableRecords:u.countPlans}),a(!0)})})}closeModal(){this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.errorMsg=""}addPlansModel(){this.showModal=!0,this.deleteMode=!1,this.plansForm.reset()}updatePlansModel(n){this.showModal=!0,this.deleteMode=!1,this.updateMode=!0,this.plansForm.patchValue(n)}deletePlansModel(n){this.showModal=!0,this.updateMode=!1,this.deleteMode=!0,this.deleteById=n}successDone(){setTimeout(()=>{this.closeModal(),this.successMsg="",this.getPlans({page:1})},1e3)}plansAddUpdate(){this.plansForm.valid&&(this.updateMode?this.plansService.updatePlans(this.plansForm.value).subscribe(n=>{n&&(this.successDone(),this.successMsg=n)},n=>{this.errorCheck=!0,this.errorMsg=n.error}):this.plansService.addPlans(this.plansForm.value).subscribe(n=>{n&&(this.successDone(),this.successMsg=n)},n=>{this.errorCheck=!0,this.errorMsg=n.error}))}plansDelete(n){this.plansService.deletePlans(n).subscribe(a=>{a&&(this.successDone(),this.successMsg=a,this.deleteById="")})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.qu),t.Y36(P.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-plans"]],decls:40,vars:8,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12","offset-lg-0"],[1,"main-card"],[1,"row","mt-4","mb-2"],[1,"col-8","col-lg-5"],["type","text","placeholder","Plans Search...","id","searchText","name","searchText",1,"form-control",3,"ngModel","ngModelChange","keyup"],["searchText","ngModel"],[1,"col-4","col-lg-2","offset-lg-5"],["mat-raised-button","",1,"submit-button",3,"click"],[2,"font-size","20px"],[1,"table","table-hover","align-middle","mt-2","mb-1","bg-white"],[1,"bg-light"],[1,"text-muted"],[4,"ngIf"],[1,"pagination"],[3,"paginationValues","onChange"],[1,"modal","fade","show"],["role","document",1,"modal-dialog","modal-dialog-top"],["class","modal-content",4,"ngIf"],["class","spinner-container",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mb-0"],[3,"click"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"color","transparent"],[1,"modal-body"],[1,"success-message"],[1,"modal-footer"],[1,"modal-title"],["matRipple","",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","plans"],["class","form-text text-danger",4,"ngIf"],["matInput","","type","text","formControlName","price"],["matInput","","type","text","formControlName","studentLimit"],["matInput","","type","text","formControlName","perStudentIncrementPrice"],["matInput","","type","text","formControlName","studentIncrementRange"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"error-message"],[1,"form-text","text-danger"],["mat-raised-button","","type","button",1,"delete-button",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(n,a){1&n&&(t._UZ(0,"app-header-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-navbar"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"input",9,10),t.NdJ("ngModelChange",function(d){return a.filters.searchText=d})("keyup",function(){return a.getPlans({page:1,limit:0})}),t.qZA()(),t.TgZ(14,"div",11)(15,"button",12),t.NdJ("click",function(){return a.addPlansModel()}),t.TgZ(16,"mat-icon",13),t._uU(17,"add"),t.qZA(),t._uU(18,"Create"),t.qZA()()(),t.TgZ(19,"table",14)(20,"thead",15)(21,"tr",16)(22,"th"),t._uU(23,"No."),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Plans"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Price"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Edit"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Remove"),t.qZA()()(),t.YNc(32,w,2,1,"tbody",17),t.qZA(),t.TgZ(33,"div",18)(34,"app-pagination",19),t.NdJ("onChange",function(d){return a.getPlans(d)}),t.qZA()(),t.TgZ(35,"div",20)(36,"div",21),t.YNc(37,k,9,1,"div",22),t.YNc(38,L,8,3,"div",22),t.qZA()()()()()()()()(),t.YNc(39,Q,2,1,"div",23)),2&n&&(t.xp6(12),t.Q6J("ngModel",a.filters.searchText),t.xp6(20),t.Q6J("ngIf",a.plansInfo&&a.plansInfo.length>0),t.xp6(2),t.Q6J("paginationValues",a.paginationValues),t.xp6(1),t.ekj("show",a.showModal),t.xp6(2),t.Q6J("ngIf",a.successMsg),t.xp6(1),t.Q6J("ngIf",!a.successMsg),t.xp6(1),t.Q6J("ngIf",a.loader))},dependencies:[e.sg,e.O5,C.R,M.A,p.lW,h.Hw,i.KE,i.bx,i.hX,c.Nt,m.Ou,v.wG,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,g.On,T.Q],styles:[".dashboard-container[_ngcontent-%COMP%]{background:rgb(243,241,250);min-height:90vh;width:100%;padding-bottom:1.5vh}.chart-main-container[_ngcontent-%COMP%]{padding-left:3.5%;padding-right:3.5%}.listing-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;box-shadow:none;border-radius:20px;margin-bottom:2.5vh}.chart-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px;margin-top:10px;margin-bottom:2.5vh}#barChart[_ngcontent-%COMP%], #lineChart[_ngcontent-%COMP%], #pieChart[_ngcontent-%COMP%]{height:400px;width:100%}.main-container[_ngcontent-%COMP%]{padding:0 5% 0 3%}.big-option-container[_ngcontent-%COMP%]{background-color:#dcd2ff;min-height:auto;width:100%;margin-left:1%;margin-top:3vh;margin-bottom:5vh;padding-top:3vh;padding-bottom:2vh;padding-left:2%;padding-right:2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:10px}.setting-button[_ngcontent-%COMP%]{background-color:#fff;color:#2f2c5e;width:50px!important;height:50px!important;margin-bottom:3vh;border:1px solid #d5d0e1af;box-shadow:none;border-radius:50%}  .custom-select{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0;margin-bottom:3vh;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select .mat-form-field-underline{display:none}  .custom-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}  .custom-select-print{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0;margin-bottom:3vh;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select-print .mat-select-arrow{color:#8c52ff}  .custom-select-print .mat-form-field-underline{display:none}  .custom-select-print .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select-print[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}.form-control[_ngcontent-%COMP%]{width:100%;height:45px;color:#382066;border:none;margin-right:0!important;margin-bottom:3vh;display:inline-block;box-shadow:#0000000d 0 3px 8px}.form-control[_ngcontent-%COMP%]::placeholder{color:#382066;font-size:15px;letter-spacing:.5px}.form-control[_ngcontent-%COMP%]:focus{box-shadow:#0000000d 0 3px 8px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{margin-top:.5vh;padding-left:0}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#646089;padding-top:3px;font-size:20px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#382066;font-size:15px;font-weight:400;margin-top:2px;margin-left:10px;letter-spacing:.75px;display:inline-block}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:55vh;margin-left:1%;padding-left:1%;padding-right:1%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:10px}.main-card[_ngcontent-%COMP%]{min-height:55vh;width:100%;margin-top:1.5vh;padding-bottom:1vh;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#382066;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#382066;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#382066}p[_ngcontent-%COMP%]{color:#382066;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#382066}.text-danger[_ngcontent-%COMP%]{font-size:12px}.big-option-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:100%;height:44px;background:#8C52FF;color:#fff;font-family:Poppins,sans-serif!important;margin-right:0!important;margin-bottom:3vh;padding-left:0!important;padding-right:0!important;border-radius:6px;box-shadow:none!important}.big-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{height:44px;background:#8C52FF;color:#fff;font-family:Poppins,sans-serif!important;margin-right:0!important;border-radius:6px;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#9f79eb;color:#f5f3fb;font-family:Poppins,sans-serif!important;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8c52ff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#382066;cursor:pointer;text-decoration:none}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;-webkit-overflow-scrolling:touch}.table-wrapper[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;min-width:auto}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#8C52FF!important}th[_ngcontent-%COMP%]{white-space:nowrap;color:#382066;letter-spacing:.5px}td[_ngcontent-%COMP%]{white-space:nowrap;color:#382066}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#382066;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#382066}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.modal-header[_ngcontent-%COMP%]{background-color:#fff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#4a2b89;font-size:16px}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#4a2b89;margin-top:-10px}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-dialog[_ngcontent-%COMP%]{height:80vh;margin-top:75px}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8c52ff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}.mobile-option[_ngcontent-%COMP%]{display:inline}.desktop-option[_ngcontent-%COMP%]{display:none}  .custom-session-select{background-color:#fff;height:35px;width:35%!important;letter-spacing:.5px;padding-left:8px;padding-right:8px;padding-top:0!important;margin-right:0!important;margin-bottom:0!important;padding-bottom:0!important;box-shadow:none;border:1px solid #ced4da;border-radius:5px;color:#434445}  .custom-session-select .mat-select-panel{margin-bottom:20px!important}  .custom-session-select .mat-select-panel .mat-option{margin-bottom:10px!important;font-size:.85rem}  .custom-session-select .mat-select-arrow{top:0;position:relative}  .custom-session-select .mat-form-field-underline{display:none}  .custom-session-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}  .custom-session-select .mat-form-field-infix{padding-top:0!important;padding-bottom:0!important;margin-top:-10px!important;line-height:35px!important}@media (min-width: 992px){.mobile-option[_ngcontent-%COMP%]{display:none}.desktop-option[_ngcontent-%COMP%]{display:inline}.dashboard-container[_ngcontent-%COMP%]{width:100%;padding-bottom:1.5vh}.main-container[_ngcontent-%COMP%]{padding:0 5% 0 3%}.chart-main-container[_ngcontent-%COMP%]{padding-left:4%;padding-right:4.5%}.listing-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;box-shadow:none;border-radius:20px;margin-bottom:2.5vh}.chart-card[_ngcontent-%COMP%]{background-color:#fff;padding:10px 2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px;margin-top:40px;margin-bottom:2.5vh}#barChart[_ngcontent-%COMP%], #lineChart[_ngcontent-%COMP%], #pieChart[_ngcontent-%COMP%]{height:50vh;width:100%;color:#5dc77b;color:#00c57d;color:#d0cdff}.big-option-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{padding-left:2%!important;padding-right:2%!important;margin-right:0!important;margin-bottom:0!important}.big-container[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin-right:0!important;margin-bottom:0!important}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]{margin-top:.5vh;padding-left:0}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#646089;padding-top:3px;font-size:20px}.main-container[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#382066;font-size:15px;font-weight:400;margin-top:2px;margin-left:10px;letter-spacing:.75px;display:inline-block}.big-option-container[_ngcontent-%COMP%]{background-color:#dcd2ff;min-height:auto;width:100%;margin-left:1%;margin-top:3vh;margin-bottom:5vh;padding-top:3vh;padding-bottom:3vh;padding-left:2%;padding-right:2%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:65vh;width:100%;margin-left:1%;padding-top:.5vh;padding-left:1%;padding-right:1%;border:1px solid #d5d0e1af;box-shadow:none;border-radius:20px}.main-card[_ngcontent-%COMP%]{min-height:65vh;margin-top:2vh;padding-left:2px;padding-right:2px}.form-control[_ngcontent-%COMP%]{width:100%!important;height:45px;color:#382066;border:none;margin-right:0!important;margin-bottom:0!important;display:inline-block;box-shadow:#0000000d 0 3px 8px}.form-control[_ngcontent-%COMP%]::placeholder{color:#382066;font-size:15px;letter-spacing:.5px}.form-control[_ngcontent-%COMP%]:focus{box-shadow:#0000000d 0 3px 8px}  .custom-select{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select .mat-form-field-underline{display:none}  .custom-select .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}  .custom-select-print{background-color:#fff;height:45px;width:100%!important;letter-spacing:.5px;padding-left:10px;padding-right:10px;margin-right:0!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:5px}  .custom-select-print .mat-select-arrow{color:#8c52ff}  .custom-select-print .mat-form-field-underline{display:none}  .custom-select-print .mat-form-field-label{color:#382066!important;letter-spacing:.5px}.custom-select-print[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{margin-top:-5px}.setting-button[_ngcontent-%COMP%]{background-color:#fff;color:#382066;width:50px!important;height:50px!important;margin-bottom:0!important;box-shadow:#0000000d 0 3px 8px;border-radius:50%}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#8C52FF!important}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}.table[_ngcontent-%COMP%]{display:inline-table}"]}),o})()}];let Y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(S),f.Bz]}),o})();var E=r(1293);let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.ez,Y,E.g]}),o})()},80980:(O,_,r)=>{r.d(_,{Q:()=>M});var e=r(94650),f=r(36895),g=r(4859),x=r(97392);function t(p,h){if(1&p){const i=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(i);const m=e.oxw().$implicit,v=e.oxw(2);return e.KtG(v.onChangePage(m,0))}),e._uU(1),e.qZA()}if(2&p){const i=e.oxw().$implicit,c=e.oxw(2);e.ekj("pagination_active",c.activePageNumber==i),e.xp6(1),e.Oqu(i)}}function P(p,h){if(1&p&&e.YNc(0,t,2,3,"button",5),2&p){const i=h.$implicit,c=e.oxw(2);e.Q6J("ngIf",c.showPages(i))}}function C(p,h){if(1&p){const i=e.EpF();e.TgZ(0,"div",1)(1,"ul",2)(2,"button",3),e.NdJ("click",function(){e.CHM(i);const m=e.oxw();return e.KtG(m.changePage(-1))}),e.TgZ(3,"mat-icon"),e._uU(4,"chevron_left"),e.qZA()(),e.YNc(5,P,1,1,"ng-template",4),e.TgZ(6,"button",3),e.NdJ("click",function(){e.CHM(i);const m=e.oxw();return e.KtG(m.changePage(1))}),e.TgZ(7,"mat-icon"),e._uU(8,"chevron_right"),e.qZA()()()()}if(2&p){const i=e.oxw();e.xp6(5),e.Q6J("ngForOf",i.pages)}}let M=(()=>{class p{constructor(){this.totalTableRecords=0,this.onChange=new e.vpe,this.recordLimit=10,this.pages=[],this.activePageNumber=0,this.iteration=0,this.filters={},this.selectedLimit=10}ngOnInit(){this.paginationValues?.subscribe(i=>{i&&"page-init"==i.type&&(this.totalTableRecords=i.totalTableRecords,this.onChangePage(i.page,0))})}calcNumberOfPage(){this.iteration=0==this.recordLimit?0:this.totalTableRecords/this.recordLimit,this.iteration=this.iteration<0?0:this.iteration>Number(this.iteration.toFixed())?Number(this.iteration.toFixed())+1:Number(this.iteration.toFixed())}onChangePage(i,c){this.calcNumberOfPage(),this.pages=[];for(var m=1;m<=this.iteration;m++)this.pages[m-1]=m;(i!=this.activePageNumber||c)&&(this.activePageNumber=i,this.onChange.emit({page:i,limit:this.recordLimit}))}queryLimitChange(i){this.recordLimit="ALL"==i?0:parseInt(i),this.onChangePage(1,1)}changePage(i){if(!(-1==i&&this.activePageNumber<=1||1==i&&this.iteration<=this.activePageNumber)){var c=this.activePageNumber+Number(i);this.calcNumberOfPage(),-1==c&&(c=0),c>this.iteration&&(c=this.iteration),this.onChangePage(c,0)}}showPages(i){if(i>this.activePageNumber-5&&this.activePageNumber+5>i)return!0}}return p.\u0275fac=function(i){return new(i||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-pagination"]],inputs:{totalTableRecords:"totalTableRecords",paginationValues:"paginationValues"},outputs:{onChange:"onChange"},decls:1,vars:1,consts:[["class","pagination-wrapper mt-0",4,"ngIf"],[1,"pagination-wrapper","mt-0"],[1,"pagination"],["mat-icon-button","",3,"click"],["ngFor","",3,"ngForOf"],["class","button","mat-icon-button","",3,"pagination_active","click",4,"ngIf"],["mat-icon-button","",1,"button",3,"click"]],template:function(i,c){1&i&&e.YNc(0,C,9,1,"div",0),2&i&&e.Q6J("ngIf",c.totalTableRecords&&c.totalTableRecords>0&&c.selectedLimit<c.totalTableRecords)},dependencies:[f.sg,f.O5,g.lW,x.Hw],styles:[".flm[_ngcontent-%COMP%]{float:left;margin-top:10px}button[_ngcontent-%COMP%]{color:#8d6dff}.button[_ngcontent-%COMP%]{background-color:#e7e6f897;margin:3px}.pagination_active[_ngcontent-%COMP%]{background-color:#8d6dff;color:#fff;margin:3px}"]}),p})()}}]);