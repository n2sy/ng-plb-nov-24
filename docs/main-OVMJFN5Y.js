import{$ as D,A as m,B as y,C as E,D as a,E as Q,F as S,G as se,H as T,I as F,J as L,K as Ue,L as X,M as qe,N as Ye,O as w,P as k,Q as Je,R as Ze,S as le,U as ee,V as $e,W as Ke,X as Qe,Y as Xe,Z as me,_ as de,a as J,aa as z,b as je,ba as et,c as Z,ca as tt,d as $,da as N,e as p,ea as re,f as ze,fa as R,g as Ge,ga as G,h as He,ha as nt,i as C,ia as te,j as v,ja as pe,k as K,ka as H,l as Be,la as B,m as j,ma as it,n as c,na as ot,o as g,oa as rt,p as M,pa as at,q as u,qa as ct,r as We,ra as st,s as x,sa as ue,t as P,ta as fe,u as O,ua as ne,v as I,va as lt,w as r,wa as mt,x as o,xa as dt,y as l,ya as pt,z as h,za as ut}from"./chunk-KAABNF5O.js";var V=class i{constructor(t){this.http=t}link="http://localhost:3000/auth";seConnecter(t){return this.http.post(`${this.link}/login`,t)}seDeconnecter(){localStorage.removeItem("access_token")}inscription(t){return this.http.post(`${this.link}/register`,t)}estConnecte(){return!!localStorage.getItem("access_token")}static \u0275fac=function(e){return new(e||i)(Z(ee))};static \u0275prov=J({token:i,factory:i.\u0275fac,providedIn:"root"})};var De=()=>({exact:!0});function ht(i,t){i&1&&(r(0,"li",1)(1,"a",7),a(2,"Ajouter Cv"),o()()),i&2&&(c(),u("routerLinkActiveOptions",X(1,De)))}function St(i,t){i&1&&(r(0,"li",1)(1,"a",8),a(2,"Login"),o()())}function Mt(i,t){if(i&1){let e=h();r(0,"li",1)(1,"a",9),m("click",function(){C(e);let s=y();return v(s.authSer.seDeconnecter())}),a(2,"Logout"),o()()}}var ge=class i{constructor(t){this.authSer=t}static \u0275fac=function(e){return new(e||i)(g(V))};static \u0275cmp=p({type:i,selectors:[["app-navbar"]],decls:19,vars:6,consts:[[1,"nav","nav-tabs"],[1,"nav-item"],["routerLink","","routerLinkActive","active",1,"nav-item","nav-link",3,"routerLinkActiveOptions"],["routerLink","cv","routerLinkActive","active",1,"nav-item","nav-link",3,"routerLinkActiveOptions"],["routerLink","accounts","routerLinkActive","active",1,"nav-item","nav-link"],["routerLink","servers","routerLinkActive","active",1,"nav-item","nav-link"],["routerLink","ms-word","routerLinkActive","active",1,"nav-item","nav-link"],["routerLink","cv/add","routerLinkActive","active",1,"nav-item","nav-link",3,"routerLinkActiveOptions"],["routerLink","login","routerLinkActive","active",1,"nav-item","nav-link"],[1,"nav-item","nav-link",3,"click"]],template:function(e,n){e&1&&(r(0,"ul",0)(1,"li",1)(2,"a",2),a(3,"Accueil"),o()(),r(4,"li",1)(5,"a",3),a(6,"Cv"),o()(),M(7,ht,3,2,"li",1),r(8,"li",1)(9,"a",4),a(10,"Accounts"),o()(),r(11,"li",1)(12,"a",5),a(13,"Servers"),o()(),r(14,"li",1)(15,"a",6),a(16,"Ms-Word"),o()(),M(17,St,3,0,"li",1)(18,Mt,3,0,"li",1),o()),e&2&&(c(2),u("routerLinkActiveOptions",X(4,De)),c(3),u("routerLinkActiveOptions",X(5,De)),c(2),x(n.authSer.estConnecte()?7:-1),c(10),x(n.authSer.estConnecte()?18:17))},dependencies:[z,et]})};var Ce=class i{title="tt";traitementDuApp(t){alert(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(e,n){e&1&&(r(0,"div",0),l(1,"app-navbar")(2,"router-outlet"),o())},dependencies:[de,ge]})};var ie=class{constructor(){}sayHello(){console.log("Salut, bienvenue chez les services")}};var Et=()=>["accounts"],ve=class i{constructor(t,e){this.router=t;this.http=e}goToMsWord(){this.router.navigateByUrl("ms-word")}goToCv(){this.router.navigate(["cv"])}ngOnInit(){}static \u0275fac=function(e){return new(e||i)(g(D),g(ee))};static \u0275cmp=p({type:i,selectors:[["app-accueil"]],decls:16,vars:2,consts:[["routerLink","cv",1,"btn","btn-primary"],[1,"btn","btn-danger",3,"routerLink"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-info",3,"click"]],template:function(e,n){e&1&&(r(0,"h3"),a(1,"Formation en Angular avec PLB"),o(),l(2,"hr"),r(3,"h5"),a(4,"Navigation c\xF4t\xE9 HTML :"),o(),r(5,"button",0),a(6,"Go To CV"),o(),r(7,"button",1),a(8,` Go To Accounts
`),o(),l(9,"hr"),r(10,"h5"),a(11,"Navigation c\xF4t\xE9 TS :"),o(),r(12,"button",2),m("click",function(){return n.goToMsWord()}),a(13,"Go To Ms-Word"),o(),r(14,"button",3),m("click",function(){return n.goToCv()}),a(15,"Go To CV"),o()),e&2&&(c(7),u("routerLink",X(1,Et)))},dependencies:[z]})};var U=class i{constructor(t){this.test=t}tabRecrues=[];getAllRecrues(){return this.tabRecrues}addRecrue(t){this.test.sayHello(),this.tabRecrues.indexOf(t)==-1?this.tabRecrues.push(t):alert("Ce candidat a d\xE9j\xE0 \xE9t\xE9 recrut\xE9 !")}static \u0275fac=function(e){return new(e||i)(Z(ie))};static \u0275prov=J({token:i,factory:i.\u0275fac})};var Y=class{constructor(t,e,n,s,f,d){this._id=t;this.prenom=e;this.nom=n;this.age=s;this.profession=f;this.avatar=d}};var A=class i{constructor(t){this.http=t}link="http://localhost:3000/cv/candidats";tabCandidats=[new Y(1,"bart","simpson",23,"ing\xE9nieur","bart.jpeg"),new Y(2,"homer","simpson",52,"chef de projet","homer.png"),new Y(3,"lisa","simpson",20,"designer","lisa.png"),new Y(4,"nidhal","jelassi",40,"formateur")];getAllCandidates(){return this.tabCandidats}getAllCandidatesAPI(){return this.http.get(this.link)}addCandidateAPI(t){return this.http.post(`${this.link}`,t)}uploadAvatar(t){return this.http.post("http://localhost:3000/images/upload",t)}addCandidate(t){t.id=this.tabCandidats[this.tabCandidats.length-1]._id+1,this.tabCandidats.push(t)}showInfos(){console.log("Je suis le service")}updateCandidat(t){let e=this.tabCandidats.findIndex(n=>n._id==t.id);this.tabCandidats[e]=t}updateCandidatAPI(t){return this.http.put(`${this.link}/${t._id}`,t)}deleteCandidat(t){let e=this.tabCandidats.findIndex(n=>n._id==t);this.tabCandidats.splice(e,1)}getCandidatById(t){return this.tabCandidats.find(e=>e._id==t)}getCandidatByIdAPI(t){return this.http.get(`${this.link}/${t}`)}deleteCandidatAPI(t){return this.http.delete(`${this.link}/${t}`)}static \u0275fac=function(e){return new(e||i)(Z(ee))};static \u0275prov=J({token:i,factory:i.\u0275fac,providedIn:"root"})};var _e=class i{constructor(t){this.Elt=t}bg="white";cl="black";mouseenter(){this.bg="grey",this.cl="white"}mouseleave(){this.bg="white",this.cl="grey"}static \u0275fac=function(e){return new(e||i)(g(Be))};static \u0275dir=Ge({type:i,selectors:[["","appCustomDir",""]],hostVars:4,hostBindings:function(e,n){e&1&&m("mouseenter",function(){return n.mouseenter()})("mouseleave",function(){return n.mouseleave()}),e&2&&We("background-color",n.bg)("color",n.cl)}})};var q=class i{transform(t){return t||"avatar.jpg"}static \u0275fac=function(e){return new(e||i)};static \u0275pipe=He({name:"noAvatar",type:i,pure:!0})};var oe=class i{unCandidat;candidateToListe=new K;sendCandidateToListe(){this.candidateToListe.emit(this.unCandidat)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-item"]],inputs:{unCandidat:"unCandidat"},outputs:{candidateToListe:"candidateToListe"},decls:5,vars:7,consts:[["appCustomDir","",1,"list-group-item",3,"click"],[3,"src"]],template:function(e,n){e&1&&(r(0,"li",0),m("click",function(){return n.sendCandidateToListe()}),l(1,"img",1),w(2,"noAvatar"),a(3),w(4,"titlecase"),o()),e&2&&(c(),u("src",k(2,3,n.unCandidat.avatar),j),c(2),se(" ",k(4,5,n.unCandidat.prenom)," ",n.unCandidat.nom,`
`))},dependencies:[_e,Ze,q],styles:["img[_ngcontent-%COMP%]{width:50px;height:50px}"]})};function kt(i,t){if(i&1){let e=h();r(0,"app-item",2),m("candidateToListe",function(s){C(e);let f=y();return v(f.sendCandidateToCv(s))}),o()}if(i&2){let e=t.$implicit;u("unCandidat",e)}}var be=class i{constructor(t){this.candSer=t}allCandidates=[];candidateToCv=new K;ngOnInit(){this.candSer.getAllCandidatesAPI().subscribe({next:t=>{this.allCandidates=t},error:t=>{alert("Donn\xE9es fictives"),this.allCandidates=this.candSer.getAllCandidates()}})}sendCandidateToCv(t){this.candidateToCv.emit(t)}showCandidats(){console.log(this.candSer.getAllCandidates())}static \u0275fac=function(e){return new(e||i)(g(A))};static \u0275cmp=p({type:i,selectors:[["app-liste"]],outputs:{candidateToCv:"candidateToCv"},decls:3,vars:0,consts:[[1,"list-group"],[3,"unCandidat"],[3,"candidateToListe","unCandidat"]],template:function(e,n){e&1&&(r(0,"ol",0),O(1,kt,1,1,"app-item",1,P),o()),e&2&&(c(),I(n.allCandidates))},dependencies:[oe]})};var Ot=i=>[i],he=class i{constructor(t){this.recSer=t}selCandidate;onRecruter(){this.recSer.addRecrue(this.selCandidate)}static \u0275fac=function(e){return new(e||i)(g(U))};static \u0275cmp=p({type:i,selectors:[["app-details"]],inputs:{selCandidate:"selCandidate"},decls:52,vars:10,consts:[[1,"card-container"],[1,"card"],[1,"front"],[1,"cover"],["src","rotating_card_thumb2.png"],[1,"user"],[1,"img-circle",3,"src"],[1,"content"],[1,"main"],[1,"name"],[1,"profession"],[1,"text-center"],[1,"footer"],[1,"rating"],[1,"fa","fa-mail-forward"],[1,"back"],[1,"header"],[1,"motto"],[1,"stats-container"],[1,"stats"],[1,"social-links","text-center"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-info",3,"routerLink"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),l(4,"img",4),o(),r(5,"div",5),l(6,"img",6),w(7,"noAvatar"),o(),r(8,"div",7)(9,"div",8)(10,"h3",9),a(11),o(),r(12,"p",10),a(13),o(),r(14,"p",11),a(15),o()(),r(16,"div",12)(17,"div",13),l(18,"i",14),a(19," Auto Rotation "),o()()()(),r(20,"div",15)(21,"div",16)(22,"h5",17),a(23,'"To be or not to be, this is my awesome motto!"'),o()(),r(24,"div",7)(25,"div",8)(26,"h4",11),a(27,"Job Description"),o(),r(28,"p",11),a(29," Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others... "),o(),r(30,"div",18)(31,"div",19)(32,"h4"),a(33,"235"),o(),r(34,"p"),a(35,"Followers"),o()(),r(36,"div",19)(37,"h4"),a(38,"114"),o(),r(39,"p"),a(40,"Following"),o()(),r(41,"div",19)(42,"h4"),a(43,"35"),o(),r(44,"p"),a(45,"Projects"),o()()()()(),r(46,"div",12)(47,"div",20)(48,"button",21),m("click",function(){return n.onRecruter()}),a(49," Recruter "),o(),r(50,"a",22),a(51," Details "),o()()()()()()),e&2&&(c(6),u("src",k(7,6,n.selCandidate==null?null:n.selCandidate.avatar),j),c(5),se(" ",n.selCandidate==null?null:n.selCandidate.prenom," ",n.selCandidate==null?null:n.selCandidate.nom," "),c(2),Q(n.selCandidate==null?null:n.selCandidate.age),c(2),S(" ",n.selCandidate==null?null:n.selCandidate.profession," "),c(35),u("routerLink",qe(8,Ot,n.selCandidate._id)))},dependencies:[z,q],styles:["body[_ngcontent-%COMP%]{margin-top:60px;font-size:14px;font-family:Helvetica Nueue,Arial,Verdana,sans-serif;background-color:#e5e9ed}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active{outline:0!important}.card-container[_ngcontent-%COMP%]{-webkit-perspective:800px;-moz-perspective:800px;-o-perspective:800px;perspective:800px;margin-bottom:30px}.card-container[_ngcontent-%COMP%]:not(.manual-flip):hover   .card[_ngcontent-%COMP%], .card-container.hover.manual-flip[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg)}.card-container.static[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%], .card-container.static.hover[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{-webkit-transform:none;-moz-transform:none;-o-transform:none;transform:none}.card[_ngcontent-%COMP%]{-webkit-transition:-webkit-transform .5s;-moz-transition:-moz-transform .5s;-o-transition:-o-transform .5s;transition:transform .5s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;background-color:#fff;box-shadow:0 1px 3px #00000024}.front[_ngcontent-%COMP%]{z-index:2}.back[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg);z-index:3}.back[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%]{position:absolute;left:0;bottom:4px}.card[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #fff;border-radius:4px;color:#444}.card-container[_ngcontent-%COMP%], .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{width:100%;height:420px;border-radius:4px}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{height:105px;overflow:hidden;border-radius:4px 4px 0 0}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{border-radius:50%;display:block;height:120px;margin:-55px auto 0;overflow:hidden;width:120px}.card[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #fff;border:4px solid #FFFFFF;width:100%}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-color:#0000;box-shadow:none;padding:10px 20px 20px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{min-height:160px}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:215px}.card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:22px;line-height:28px;margin:10px 0 0;text-align:center;text-transform:capitalize}.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:5px 0;font-weight:400;line-height:20px}.card[_ngcontent-%COMP%]   .profession[_ngcontent-%COMP%]{color:#999;text-align:center;margin-bottom:20px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{border-top:1px solid #EEEEEE;color:#999;margin:30px 0 0;padding:10px 0 0;text-align:center}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{font-size:18px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 7px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%]{margin-top:-6px}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px 20px;height:90px}.card[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%]{border-bottom:1px solid #EEEEEE;color:#999;font-size:14px;font-weight:400;padding-bottom:10px;text-align:center}.card[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]{width:100%;margin-top:50px}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:block;float:left;width:33.333333%;text-align:center}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]:first-child{border-right:1px solid #EEEEEE}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]:last-child{border-left:1px solid #EEEEEE}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300;margin-bottom:5px}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#777}.title[_ngcontent-%COMP%]{color:#506a85;text-align:center;font-weight:300;font-size:44px;margin-bottom:90px;line-height:90%}.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:17px;color:#999;text-transform:uppercase;margin:0}.space-30[_ngcontent-%COMP%]{height:30px;display:block}.space-50[_ngcontent-%COMP%]{height:50px;display:block}.space-200[_ngcontent-%COMP%]{height:200px;display:block}.white-board[_ngcontent-%COMP%]{background-color:#fff;min-height:200px;padding:60px 60px 20px}.ct-heart[_ngcontent-%COMP%]{color:#f74933}pre.prettyprint[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #999;margin-top:20px;padding:20px;text-align:left}.atv[_ngcontent-%COMP%], .str[_ngcontent-%COMP%]{color:#05ae0e}.tag[_ngcontent-%COMP%], .pln[_ngcontent-%COMP%], .kwd[_ngcontent-%COMP%]{color:#3472f7}.atn[_ngcontent-%COMP%]{color:#2c93ff}.pln[_ngcontent-%COMP%]{color:#333}.com[_ngcontent-%COMP%]{color:#999}.btn-simple[_ngcontent-%COMP%]{opacity:.8;color:#666;background-color:transparent}.btn-simple[_ngcontent-%COMP%]:hover, .btn-simple[_ngcontent-%COMP%]:focus{background-color:transparent;box-shadow:none;opacity:1}.btn-simple[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px}.navbar-brand-logo[_ngcontent-%COMP%]{padding:0}.navbar-brand-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border:1px solid #333333;border-radius:50%;float:left;overflow:hidden;width:60px}.navbar[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#fff;float:left;font-size:18px;font-weight:400;line-height:20px;margin-left:10px;margin-top:10px;width:60px}.navbar-default[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#555}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{-ms-backface-visibility:visible;backface-visibility:visible}.back[_ngcontent-%COMP%]{visibility:hidden;-ms-transition:all .2s cubic-bezier(.92,.01,.83,.67)}.front[_ngcontent-%COMP%]{z-index:4}.card-container[_ngcontent-%COMP%]:not(.manual-flip):hover   .back[_ngcontent-%COMP%], .card-container.manual-flip.hover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{z-index:5;visibility:visible}}"]})};function Tt(i,t){if(i&1&&l(0,"app-item",1),i&2){let e=t.$implicit;u("unCandidat",e)}}function Ft(i,t){if(i&1&&(r(0,"div")(1,"h3"),a(2,"Liste des recrues"),o(),r(3,"ol",0),O(4,Tt,1,1,"app-item",1,P),o()()),i&2){let e=y();c(4),I(e.tab)}}var Se=class i{tab=[];recSer=$(U);ngOnInit(){this.tab=this.recSer.getAllRecrues()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-recruter"]],decls:1,vars:1,consts:[[1,"list-group"],[3,"unCandidat"]],template:function(e,n){e&1&&M(0,Ft,6,0,"div"),e&2&&x(n.tab.length?0:-1)},dependencies:[oe]})};function Dt(i,t){if(i&1&&l(0,"app-details",4),i&2){let e=y();u("selCandidate",e.selectedCandidate)}}function Nt(i,t){i&1&&(r(0,"h3"),a(1,"Veuillez sel\xE9ctionner un candidat..."),o())}var Me=class i{constructor(t){this.candSer=t}selectedCandidate;tabCandidats=[];recupererCandidat(t){this.selectedCandidate=t}ngOnInit(){this.candSer.showInfos(),this.tabCandidats=this.candSer.getAllCandidates()}showCandidats(){console.log(this.candSer.getAllCandidates())}static \u0275fac=function(e){return new(e||i)(g(A))};static \u0275cmp=p({type:i,selectors:[["app-cv"]],features:[Ue([U])],decls:8,vars:1,consts:[[1,"row"],[1,"col-5"],[3,"candidateToCv"],[1,"col-7"],[3,"selCandidate"]],template:function(e,n){e&1&&(l(0,"router-outlet"),r(1,"div",0)(2,"div",1)(3,"app-liste",2),m("candidateToCv",function(f){return n.recupererCandidat(f)}),o()(),r(4,"div",3),M(5,Dt,1,1,"app-details",4)(6,Nt,2,0,"h3"),o()(),l(7,"app-recruter")),e&2&&(c(5),x(n.selectedCandidate?5:6))},dependencies:[de,be,he,Se]})};var Rt=(i,t,e,n)=>({backgroundColor:i,color:t,fontSize:e,fontFamily:n}),xe=class i{bgColor;txtColor;size;font;changeSize(t){let e=prompt("Veuillez saisir une unit\xE9");this.size=`${t}${e}`}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-ms-word"]],decls:17,vars:9,consts:[["sz",""],[3,"ngStyle"],["type","text",1,"form-control",3,"ngModelChange","ngModel"],["type","number",1,"form-control",3,"change"],[1,"form-control",3,"ngModelChange","ngModel"],["value","garamond"],["value","phosphate"],["value","arial"]],template:function(e,n){if(e&1){let s=h();r(0,"div",1),a(1,` Exemple de ngStyle
`),o(),a(2,` Background Color :
`),r(3,"input",2),L("ngModelChange",function(d){return C(s),F(n.bgColor,d)||(n.bgColor=d),v(d)}),o(),a(4,` Text Color :
`),r(5,"input",2),L("ngModelChange",function(d){return C(s),F(n.txtColor,d)||(n.txtColor=d),v(d)}),o(),a(6,` font Size :
`),r(7,"input",3,0),m("change",function(){C(s);let d=E(8);return v(n.changeSize(d.value))}),o(),a(9,` font Family
`),r(10,"select",4),L("ngModelChange",function(d){return C(s),F(n.font,d)||(n.font=d),v(d)}),r(11,"option",5),a(12,"Garamond"),o(),r(13,"option",6),a(14,"Phosphate"),o(),r(15,"option",7),a(16,"Arial"),o()()}e&2&&(u("ngStyle",Ye(4,Rt,n.bgColor,n.txtColor,n.size,n.font)),c(3),T("ngModel",n.bgColor),c(2),T("ngModel",n.txtColor),c(5),T("ngModel",n.font))},dependencies:[Je,ue,fe,N,st,R,H]})};function Vt(i,t){if(i&1&&(r(0,"option",4),a(1),o()),i&2){let e=t.$implicit;u("value",e),c(),Q(e)}}var ye=class i{statusOptions=["","unknown","active","inactive"];eventToHome=new K;sendNewAccountToHome(t,e){this.eventToHome.emit({name:t,status:e})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-add-account"]],outputs:{eventToHome:"eventToHome"},decls:12,vars:0,consts:[["inpName",""],["selectStatus",""],["type","text",1,"form-control"],[1,"form-control"],[3,"value"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){if(e&1){let s=h();r(0,"label"),a(1,"Account name : "),o(),l(2,"input",2,0),r(4,"label"),a(5,"Account status : "),o(),r(6,"select",3,1),O(8,Vt,2,2,"option",4,P),o(),r(10,"button",5),m("click",function(){C(s);let d=E(3),Le=E(7);return v(n.sendNewAccountToHome(d.value,Le.value))}),a(11,` Add account
`),o()}e&2&&(c(8),I(n.statusOptions))},dependencies:[ue,fe]})};var Ee=class i{oneAccount;changeStatus(t){this.oneAccount.status=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-item-account"]],inputs:{oneAccount:"oneAccount"},decls:12,vars:5,consts:[[1,"contour"],[1,"btn","btn-success",3,"click","disabled"],[1,"btn","btn-danger",3,"click","disabled"],[1,"btn","btn-info",3,"click","disabled"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"h2"),a(2),o(),l(3,"hr"),r(4,"p"),a(5),o(),r(6,"button",1),m("click",function(){return n.changeStatus("active")}),a(7," Set to 'active' "),o(),r(8,"button",2),m("click",function(){return n.changeStatus("inactive")}),a(9," Set to 'inactive' "),o(),r(10,"button",3),m("click",function(){return n.changeStatus("unknown")}),a(11," Set to 'unknown' "),o()()),e&2&&(c(2),Q(n.oneAccount.name),c(3),S("This account is ",n.oneAccount.status,""),c(),u("disabled",n.oneAccount.status=="active"),c(2),u("disabled",n.oneAccount.status=="inactive"),c(2),u("disabled",n.oneAccount.status=="unknown"))},styles:[".contour[_ngcontent-%COMP%]{border:1px solid grey;padding:10px;margin:10px}"]})};function Gt(i,t){if(i&1&&l(0,"app-item-account",2),i&2){let e=t.$implicit;u("oneAccount",e)}}var Ae=class i{tabAccounts=[{name:"Vincent Account",status:"inactive"},{name:"L\xE9on Account",status:"active"}];addAccount(t){this.tabAccounts.push(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-home-account"]],decls:4,vars:0,consts:[[3,"eventToHome"],[1,"list-group"],[3,"oneAccount"]],template:function(e,n){e&1&&(r(0,"app-add-account",0),m("eventToHome",function(f){return n.addAccount(f)}),o(),r(1,"ol",1),O(2,Gt,1,1,"app-item-account",2,P),o()),e&2&&(c(2),I(n.tabAccounts))},dependencies:[ye,Ee]})};var we=class i{constructor(t,e,n){this.activatedRoute=t;this.candSer=e;this.router=n}cand;ngOnInit(){this.candSer.getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get("id")).subscribe({next:t=>{this.cand=t},error:t=>{alert("Aucun candidat avec cet ID"),this.router.navigateByUrl("/not-found")}})}onDelete(){confirm("Etes-vous s\xFBr de vouloir supprimer ce candidat ?")&&this.candSer.deleteCandidatAPI(this.cand._id).subscribe({next:t=>{alert(t.message),this.router.navigateByUrl("/cv")},error:t=>{console.log(t)}})}static \u0275fac=function(e){return new(e||i)(g(me),g(A),g(D))};static \u0275cmp=p({type:i,selectors:[["app-infos"]],decls:44,vars:8,consts:[[1,"d-flex","justify-content-center"],[1,"col-lg-8","push-lg-4"],[1,"tab-content","p-b-3"],["id","profile",1,"tab-pane","active"],["width","150px","height","150px","alt","",1,"rounded-circle","align-content-center",3,"src"],[1,"row"],[1,"col-md-12"],[1,"m-t-2"],[1,"fa","fa-clock-o","ion-clock","pull-xs-right"],[1,"table","table-hover","table-striped"],[1,"btn","btn-danger",3,"click"],["routerLink","edit",1,"btn","btn-primary"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",0),l(5,"img",4),w(6,"noAvatar"),o(),r(7,"div",5)(8,"div",6)(9,"h4",7),l(10,"span",8),a(11," Informations "),o(),r(12,"table",9)(13,"tbody")(14,"tr")(15,"td")(16,"strong"),a(17,"Pr\xE9nom"),o(),a(18),o()(),r(19,"tr")(20,"td")(21,"strong"),a(22,"Nom"),o(),a(23),o()(),r(24,"tr")(25,"td")(26,"strong"),a(27,"Age"),o(),a(28),o()(),r(29,"tr")(30,"td")(31,"strong"),a(32,"Profession"),o(),a(33),o()(),r(34,"tr")(35,"td")(36,"strong"),a(37,"Image"),o(),a(38),o()()()(),r(39,"div",0)(40,"button",10),m("click",function(){return n.onDelete()}),a(41," Delete "),o(),r(42,"button",11),a(43,"Update"),o()()()()()()()()),e&2&&(c(5),u("src",k(6,6,n.cand==null?null:n.cand.avatar),j),c(13),S(" ",n.cand==null?null:n.cand.prenom,""),c(5),S(" ",n.cand==null?null:n.cand.nom,""),c(5),S(" ",n.cand==null?null:n.cand.age,""),c(5),S(" ",n.cand==null?null:n.cand.profession,""),c(5),S(" ",n.cand==null?null:n.cand.avatar,""))},dependencies:[z,q]})};var ke=class i{constructor(t,e){this.candSer=t;this.router=e}onAdd(t,e){console.log(e.target[4].files[0]);let n=new FormData;n.append("avatar",e.target[4].files[0]),this.candSer.uploadAvatar(n).subscribe({next:s=>{t.avatar=s.fileName,this.candSer.addCandidateAPI(t).subscribe({next:f=>{alert(f.message),this.router.navigateByUrl("/cv")}})}})}static \u0275fac=function(e){return new(e||i)(g(A),g(D))};static \u0275cmp=p({type:i,selectors:[["app-add"]],decls:23,vars:4,consts:[["f","ngForm"],[1,"container"],[3,"ngSubmit"],["for","prenom"],["required","","ngModel","","type","text","id","prenom","name","prenom",1,"form-control"],["for","nom"],["ngModel","","required","","type","text","id","nom","name","nom",1,"form-control"],["for","age"],["ngModel","","type","number","id","age","name","age",1,"form-control"],["for","profession"],["ngModel","","type","text","id","profession","name","profession",1,"form-control"],["for","path"],["type","file","id","path","name","avatar",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,n){if(e&1){let s=h();r(0,"div",1)(1,"form",2,0),m("ngSubmit",function(d){C(s);let Le=E(2);return v(n.onAdd(Le.value,d))}),r(3,"label",3),a(4,"Pr\xE9nom"),o(),l(5,"input",4),r(6,"label",5),a(7,"Nom"),o(),l(8,"input",6),r(9,"label",7),a(10,"Age"),o(),l(11,"input",8),r(12,"label",9),a(13,"Profession"),o(),l(14,"input",10),r(15,"label",11),a(16,"Url de l'avatar"),o(),l(17,"input",12),r(18,"button",13),a(19," Ajouter CV "),o(),r(20,"pre"),a(21),w(22,"json"),o()()()}if(e&2){let s=E(2);c(18),u("disabled",s.invalid),c(3),S(`
        `,k(22,2,s.value),`
    `)}},dependencies:[B,N,it,R,G,ne,H,te,le]})};var Pe=class i{constructor(t,e,n){this.activatedRoute=t;this.candSer=e;this.router=n}candAEditer;ngOnInit(){let t=this.activatedRoute.snapshot.paramMap.get("id");this.candSer.getCandidatByIdAPI(t).subscribe({next:e=>{this.candAEditer=e},error:e=>{console.log(e)}})}onUpdate(){this.candSer.updateCandidatAPI(this.candAEditer).subscribe({next:t=>{alert(t.message),this.router.navigateByUrl("/cv")}})}static \u0275fac=function(e){return new(e||i)(g(me),g(A),g(D))};static \u0275cmp=p({type:i,selectors:[["app-edit"]],decls:28,vars:6,consts:[["f","ngForm"],[1,"container","alert","alert-info","col-md-8"],[1,"well","form-horizontal",3,"ngSubmit"],[1,"profile-userpic"],["alt","",1,"img-responsive",3,"src"],[1,"form-group"],[1,"col-md-4","control-label"],["name","prenom","required","true","type","text",1,"form-control",3,"ngModelChange","ngModel"],["name","nom","required","true","type","text",1,"form-control",3,"ngModelChange","ngModel"],["name","age","required","true","type","text",1,"form-control",3,"ngModelChange","ngModel"],["name","profession","type","text",1,"form-control",3,"ngModelChange","ngModel"],["name","avatar","type","text",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-success"]],template:function(e,n){if(e&1){let s=h();r(0,"div",1)(1,"form",2,0),m("ngSubmit",function(){return C(s),v(n.onUpdate())}),r(3,"div",3),l(4,"img",4),o(),r(5,"fieldset")(6,"div",5)(7,"label",6),a(8,"Pr\xE9nom"),o(),r(9,"input",7),L("ngModelChange",function(d){return C(s),F(n.candAEditer.prenom,d)||(n.candAEditer.prenom=d),v(d)}),o()(),r(10,"div",5)(11,"label",6),a(12,"Nom"),o(),r(13,"input",8),L("ngModelChange",function(d){return C(s),F(n.candAEditer.nom,d)||(n.candAEditer.nom=d),v(d)}),o()(),r(14,"div",5)(15,"label",6),a(16,"Age"),o(),r(17,"input",9),L("ngModelChange",function(d){return C(s),F(n.candAEditer.age,d)||(n.candAEditer.age=d),v(d)}),o()(),r(18,"div",5)(19,"label",6),a(20,"Profession"),o(),r(21,"input",10),L("ngModelChange",function(d){return C(s),F(n.candAEditer.profession,d)||(n.candAEditer.profession=d),v(d)}),o()(),r(22,"div",5)(23,"label",6),a(24,"Avatar"),o(),r(25,"input",11),L("ngModelChange",function(d){return C(s),F(n.candAEditer.avatar,d)||(n.candAEditer.avatar=d),v(d)}),o()()(),r(26,"button",12),a(27,"Valider"),o()()()}e&2&&(c(4),u("src",n.candAEditer==null?null:n.candAEditer.avatar,j),c(5),T("ngModel",n.candAEditer.prenom),c(4),T("ngModel",n.candAEditer.nom),c(4),T("ngModel",n.candAEditer.age),c(4),T("ngModel",n.candAEditer.profession),c(4),T("ngModel",n.candAEditer.avatar))},dependencies:[B,N,R,G,ne,H,te],styles:["img[_ngcontent-%COMP%]{width:100px;height:100px}"]})};var Oe=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-not-found"]],decls:3,vars:0,consts:[["src","https://static.vecteezy.com/ti/vecteur-libre/t2/8568878-page-site-introuvable-erreur-404-oops-inquiet-robot-personnage-jetant-un-coup-d-oeil-hors-de-l-espace-site-crash-sur-travail-technique-web-design-template-with-chatbot-mascotte-dessin-anime-echec-assistance-bot-en-ligne-vectoriel.jpg"]],template:function(e,n){e&1&&(r(0,"h3"),a(1,"Le chemin demand\xE9 n'existe pas"),o(),l(2,"img",0))}})};function Ht(i,t){i&1&&(r(0,"div",2),a(1,"Login et/ou mot de passe invalide(s)"),o())}function Bt(i,t){i&1&&(r(0,"div",2),a(1,"Veuillez saisir une adresse mail valide"),o())}function Wt(i,t){if(i&1){let e=h();r(0,"button",9),m("click",function(){C(e);let s=y(),f=E(2);return v(s.onLogin(f))}),a(1," Se connecter "),o(),r(2,"button",10),m("click",function(){C(e);let s=y();return v(s.toggleShowLogin())}),a(3," Switch to Register "),o()}}function Ut(i,t){if(i&1){let e=h();r(0,"button",11),m("click",function(){C(e);let s=y(),f=E(2);return v(s.onRegister(f))}),a(1," S'inscrire "),o(),r(2,"button",12),m("click",function(){C(e);let s=y();return v(s.toggleShowLogin())}),a(3," Switch to Login "),o()}}var Ie=class i{constructor(t,e){this.authSer=t;this.router=e}defaultLangagePrefere="php";defaultComment="Rien \xE0 signaler...";showLogin=!0;showErrorMsg=!1;onSubmit(t){console.log(t.value)}onLogin(t){this.authSer.seConnecter(t.value).subscribe({next:e=>{localStorage.setItem("access_token",e.token),this.router.navigateByUrl("/cv")},error:e=>{console.log(e),this.showErrorMsg=!0,t.reset()}})}onRegister(t){this.authSer.inscription(t.value).subscribe({next:e=>{alert(e.message),this.toggleShowLogin(),t.reset()},error:e=>{console.log(e)}})}generatedPwd(t){t.form.patchValue({password:"azerty123",infos:{langage:"java"}})}onReset(t){t.reset()}toggleShowLogin(){this.showLogin=!this.showLogin}static \u0275fac=function(e){return new(e||i)(g(V),g(D))};static \u0275cmp=p({type:i,selectors:[["app-login"]],decls:20,vars:6,consts:[["f","ngForm"],["inpLogin","ngModel"],[1,"alert","alert-danger"],["for","login"],["ngModel","","required","","email","","name","email","id","login",1,"form-control"],["for",""],["required","","minlength","4","ngModel","","name","password",1,"form-control"],[1,"row"],[1,"col-6","offset-4"],["type","submit",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","submit",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-dark",3,"click"]],template:function(e,n){if(e&1&&(M(0,Ht,2,0,"div",2),r(1,"form",null,0)(3,"label",3),a(4,"Login"),o(),l(5,"input",4,1),M(7,Bt,2,0,"div",2),r(8,"label",5),a(9,"Mot de passe"),o(),l(10,"input",6)(11,"br")(12,"br"),r(13,"div",7)(14,"div",8),M(15,Wt,4,0)(16,Ut,4,0),o()(),r(17,"pre"),a(18),w(19,"json"),o()()),e&2){let s=E(2),f=E(6);x(n.showErrorMsg?0:-1),c(7),x(f.invalid&&f.touched?7:-1),c(8),x(n.showLogin?15:16),c(3),S("    ",k(19,4,s.value),`
  `)}},dependencies:[B,N,R,G,ne,mt,lt,H,te,le],styles:[".ng-invalid.ng-dirty[_ngcontent-%COMP%]{border-color:red}.ng-valid[_ngcontent-%COMP%]{border-color:green}"]})};function qt(i,t){i&1&&(r(0,"div",4),a(1,"Veuillez saisir une adresse mail valide"),o())}function Yt(i,t){if(i&1&&l(0,"input",7),i&2){let e=t.$implicit;u("formControl",e)}}var Te=class i{signupForm;ngOnInit(){this.signupForm=new nt({username:new pe("nidhal",re.required),addMail:new pe("",[re.required,re.email]),skills:new dt([])})}get formSkills(){return this.signupForm.get("skills")}addSkill(){let t=new pe("",re.required);this.formSkills.push(t)}onSubmit(){console.log(this.signupForm.value)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-react-form"]],decls:17,vars:2,consts:[[3,"ngSubmit","formGroup"],["for",""],["type","text","formControlName","username",1,"form-control"],["type","text","formControlName","addMail",1,"form-control"],[1,"alert","alert-danger"],["formArrayName","skills"],[3,"click"],["type","text",1,"form-control",3,"formControl"],["type","submit",1,"btn","btn-danger"]],template:function(e,n){e&1&&(r(0,"form",0),m("ngSubmit",function(){return n.onSubmit()}),r(1,"label",1),a(2,"Nom d'utilisateur"),o(),l(3,"input",2),r(4,"label",1),a(5,"Adresse Mail "),o(),l(6,"input",3),M(7,qt,2,0,"div",4),r(8,"div",5)(9,"label"),a(10,"Skills"),o(),r(11,"button",6),m("click",function(){return n.addSkill()}),a(12,"+"),o(),O(13,Yt,1,1,"input",7,P),o(),r(15,"button",8),a(16,"Submit"),o()()),e&2&&(u("formGroup",n.signupForm),c(7),x(n.signupForm.get("addMail").invalid&&n.signupForm.get("addMail").dirty?7:-1),c(6),I(n.formSkills.controls))},dependencies:[B,N,R,G,ot,rt,ct,at]})};var Ve=(i,t)=>$(V).estConnecte();var vt=(i,t)=>!$(V).estConnecte();var Jt=[{path:"",component:ve},{path:"cv",children:[{path:"",component:Me},{path:"add",component:ke,canActivate:[Ve]},{path:":id",children:[{path:"",component:we},{path:"edit",component:Pe,canActivate:[Ve]}]}]},{path:"ms-word",component:xe},{path:"react",component:Te},{path:"login",component:Ie,canActivate:[vt]},{path:"servers",loadChildren:()=>import("./chunk-S5S5IS4Z.js").then(i=>i.SubModule)},{path:"accounts",component:Ae},{path:"not-found",component:Oe},{path:"**",redirectTo:"not-found"}],_t=tt.forRoot(Jt);var bt=(i,t)=>{if(i.method=="GET")return t(i);let e=localStorage.getItem("access_token");if(e){console.log(i);let n=i.clone({setHeaders:{Authorization:`bearer ${e}`}});return console.log(n),t(n)}return t(i)};var Fe=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=ze({type:i,bootstrap:[Ce]});static \u0275inj=je({providers:[ie,$e(Ke([bt]))],imports:[Xe,pt,_t,ut]})};Qe().bootstrapModule(Fe,{ngZoneEventCoalescing:!0}).catch(i=>console.error(i));