(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8Zbc":function(e,t,n){"use strict";n.r(t),n.d(t,"ManagerModule",(function(){return ye}));var i=n("ofXK"),o=n("tyNb"),a=n("W3y4"),s=n("fXoL"),r=n("7EHt"),c=n("hNVA");let l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-manage-forum"]],decls:9,vars:1,consts:[["href","forum/novo",1,"btn","btn-cadastrar-forum"],[1,"d-md-flex","flex-column","align-items-center"],[1,"w-50"],[3,"expanded"]],template:function(e,t){1&e&&(s.Pb(0,"a",0),s.xc(1,"Cadastrar novo forum"),s.Ob(),s.Pb(2,"div",1),s.Pb(3,"mat-accordion",2),s.Pb(4,"mat-expansion-panel",3),s.Pb(5,"mat-expansion-panel-header"),s.Pb(6,"mat-panel-title"),s.xc(7," F\xf3runs Cadastrados "),s.Ob(),s.Ob(),s.Lb(8,"app-foruns-cadastrados"),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.zb(4),s.ec("expanded",!0))},directives:[r.a,r.c,r.g,r.h,c.a],styles:["mat-expansion-panel-header[_ngcontent-%COMP%]{background-color:#550504}mat-panel-title[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px;font-size:28px;color:#fff}.btn-cadastrar-forum[_ngcontent-%COMP%]{background-color:#550504;color:#fff;margin-left:30px;margin-top:20px}a[_ngcontent-%COMP%]:hover{background-color:#fff;color:#550504;border:1px solid #550504}"]}),e})();var h=n("lGQG"),p=n("Xa2L"),d=n("kmnG"),b=n("rDax"),g=n("FKr1"),u=n("vxfF"),_=n("u47x"),m=n("8LU1"),f=n("0EQZ"),O=n("FtGj"),v=n("XNiG"),y=n("NXyV"),C=n("VRyK"),w=n("JX91"),P=n("eIep"),x=n("IzEk"),M=n("pLZG"),k=n("lJxs"),I=n("/uUt"),j=n("1G5W"),S=n("R0Ic"),R=n("cH1L"),D=n("3Pt+");const z=["trigger"],A=["panel"];function F(e,t){if(1&e&&(s.Pb(0,"span",8),s.xc(1),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.yc(e.placeholder||"\xa0")}}function T(e,t){if(1&e&&(s.Pb(0,"span"),s.xc(1),s.Ob()),2&e){const e=s.Zb(2);s.zb(1),s.yc(e.triggerValue||"\xa0")}}function L(e,t){1&e&&s.cc(0,0,["*ngSwitchCase","true"])}function E(e,t){if(1&e&&(s.Pb(0,"span",9),s.wc(1,T,2,1,"span",10),s.wc(2,L,1,0,"ng-content",11),s.Ob()),2&e){const e=s.Zb();s.ec("ngSwitch",!!e.customTrigger),s.zb(2),s.ec("ngSwitchCase",!0)}}function K(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",12),s.Pb(1,"div",13,14),s.Wb("@transformPanel.done",(function(t){return s.lc(e),s.Zb()._panelDoneAnimatingStream.next(t.toState)}))("keydown",(function(t){return s.lc(e),s.Zb()._handleKeydown(t)})),s.cc(3,1),s.Ob(),s.Ob()}if(2&e){const e=s.Zb();s.ec("@transformPanelWrap",void 0),s.zb(1),s.Bb("mat-select-panel ",e._getPanelTheme(),""),s.tc("transform-origin",e._transformOrigin)("font-size",e._triggerFontSize,"px"),s.ec("ngClass",e.panelClass)("@transformPanel",e.multiple?"showing-multiple":"showing"),s.Ab("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const W=[[["mat-select-trigger"]],"*"],V=["mat-select-trigger","*"],Z={transformPanelWrap:Object(S.l)("transformPanelWrap",[Object(S.k)("* => void",Object(S.g)("@transformPanel",[Object(S.f)()],{optional:!0}))]),transformPanel:Object(S.l)("transformPanel",[Object(S.i)("void",Object(S.j)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),Object(S.i)("showing",Object(S.j)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),Object(S.i)("showing-multiple",Object(S.j)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),Object(S.k)("void => *",Object(S.e)("120ms cubic-bezier(0, 0, 0.2, 1)")),Object(S.k)("* => void",Object(S.e)("100ms 25ms linear",Object(S.j)({opacity:0})))])};let Y=0;const B=new s.q("mat-select-scroll-strategy"),U=new s.q("MAT_SELECT_CONFIG"),X={provide:B,deps:[b.c],useFactory:function(e){return()=>e.scrollStrategies.reposition()}};class q{constructor(e,t){this.source=e,this.value=t}}class G{constructor(e,t,n,i,o){this._elementRef=e,this._defaultErrorStateMatcher=t,this._parentForm=n,this._parentFormGroup=i,this.ngControl=o}}const H=Object(g.q)(Object(g.t)(Object(g.r)(Object(g.s)(G)))),$=new s.q("MatSelectTrigger");let N=(()=>{class e extends H{constructor(e,t,n,i,o,a,r,c,l,h,p,d,b,g){super(o,i,r,c,h),this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=n,this._dir=a,this._parentFormField=l,this.ngControl=h,this._liveAnnouncer=b,this._panelOpen=!1,this._required=!1,this._scrollTop=0,this._multiple=!1,this._compareWith=(e,t)=>e===t,this._uid="mat-select-"+Y++,this._triggerAriaLabelledBy=null,this._destroy=new v.a,this._triggerFontSize=0,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+Y++,this._transformOrigin="top",this._panelDoneAnimatingStream=new v.a,this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}],this._disableOptionCentering=!1,this._focused=!1,this.controlType="mat-select",this.ariaLabel="",this.optionSelectionChanges=Object(y.a)(()=>{const e=this.options;return e?e.changes.pipe(Object(w.a)(e),Object(P.a)(()=>Object(C.a)(...e.map(e=>e.onSelectionChange)))):this._ngZone.onStable.pipe(Object(x.a)(1),Object(P.a)(()=>this.optionSelectionChanges))}),this.openedChange=new s.n,this._openedStream=this.openedChange.pipe(Object(M.a)(e=>e),Object(k.a)(()=>{})),this._closedStream=this.openedChange.pipe(Object(M.a)(e=>!e),Object(k.a)(()=>{})),this.selectionChange=new s.n,this.valueChange=new s.n,this.ngControl&&(this.ngControl.valueAccessor=this),this._scrollStrategyFactory=d,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(p)||0,this.id=this.id,g&&(null!=g.disableOptionCentering&&(this.disableOptionCentering=g.disableOptionCentering),null!=g.typeaheadDebounceInterval&&(this.typeaheadDebounceInterval=g.typeaheadDebounceInterval))}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required}set required(e){this._required=Object(m.b)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=Object(m.b)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=Object(m.b)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){e!==this._value&&(this.options&&this._setSelectionByValue(e),this._value=e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=Object(m.e)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new f.b(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(Object(I.a)(),Object(j.a)(this._destroy)).subscribe(()=>{this.panelOpen?(this._scrollTop=0,this.openedChange.emit(!0)):(this.openedChange.emit(!1),this.overlayDir.offsetX=0,this._changeDetectorRef.markForCheck())}),this._viewportRuler.change().pipe(Object(j.a)(this._destroy)).subscribe(()=>{this._panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe(Object(j.a)(this._destroy)).subscribe(e=>{e.added.forEach(e=>e.select()),e.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(Object(w.a)(null),Object(j.a)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby();if(e!==this._triggerAriaLabelledBy){const t=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?t.setAttribute("aria-labelledby",e):t.removeAttribute("aria-labelledby")}this.ngControl&&this.updateErrorState()}ngOnChanges(e){e.disabled&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){!this.disabled&&this.options&&this.options.length&&!this._panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._calculateOverlayPosition(),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this._ngZone.onStable.pipe(Object(x.a)(1)).subscribe(()=>{this._triggerFontSize&&this.overlayDir.overlayRef&&this.overlayDir.overlayRef.overlayElement&&(this.overlayDir.overlayRef.overlayElement.style.fontSize=this._triggerFontSize+"px")}))}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this.value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel.selected:this._selectionModel.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const t=e.keyCode,n=t===O.b||t===O.l||t===O.g||t===O.i,i=t===O.d||t===O.j,o=this._keyManager;if(!o.isTyping()&&i&&!Object(O.o)(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){const t=this.selected;o.onKeydown(e);const n=this.selected;n&&t!==n&&this._liveAnnouncer.announce(n.viewValue,1e4)}}_handleOpenKeydown(e){const t=this._keyManager,n=e.keyCode,i=n===O.b||n===O.l,o=t.isTyping();if(i&&e.altKey)e.preventDefault(),this.close();else if(o||n!==O.d&&n!==O.j||!t.activeItem||Object(O.o)(e))if(!o&&this._multiple&&n===O.a&&e.ctrlKey){e.preventDefault();const t=this.options.some(e=>!e.disabled&&!e.selected);this.options.forEach(e=>{e.disabled||(t?e.select():e.deselect())})}else{const n=t.activeItemIndex;t.onKeydown(e),this._multiple&&i&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==n&&t.activeItem._selectViaInteraction()}else e.preventDefault(),t.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this.disabled||this.panelOpen||(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this.overlayDir.positionChange.pipe(Object(x.a)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop})}_getPanelTheme(){return this._parentFormField?"mat-"+this._parentFormField.color:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this._setSelectionByValue(this.ngControl?this.ngControl.value:this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.multiple&&e)Array.isArray(e),this._selectionModel.clear(),e.forEach(e=>this._selectValue(e)),this._sortValues();else{this._selectionModel.clear();const t=this._selectValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectValue(e){const t=this.options.find(t=>{try{return null!=t.value&&this._compareWith(t.value,e)}catch(n){return!1}});return t&&this._selectionModel.select(t),t}_initKeyManager(){this._keyManager=new _.a(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe(Object(j.a)(this._destroy)).subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.pipe(Object(j.a)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollActiveOptionIntoView():this._panelOpen||this.multiple||!this._keyManager.activeItem||this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=Object(C.a)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Object(j.a)(e)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Object(C.a)(...this.options.map(e=>e._stateChanges)).pipe(Object(j.a)(e)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}_onSelect(e,t){const n=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t=null;t=this.multiple?this.selected.map(e=>e.value):this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(new q(this,t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_scrollActiveOptionIntoView(){const e=this._keyManager.activeItemIndex||0,t=Object(g.n)(e,this.options,this.optionGroups),n=this._getItemHeight();this.panel.nativeElement.scrollTop=Object(g.o)((e+t)*n,n,this.panel.nativeElement.scrollTop,256)}focus(e){this._elementRef.nativeElement.focus(e)}_getOptionIndex(e){return this.options.reduce((t,n,i)=>void 0!==t?t:e===n?i:void 0,void 0)}_calculateOverlayPosition(){const e=this._getItemHeight(),t=this._getItemCount(),n=Math.min(t*e,256),i=t*e-n;let o=this.empty?0:this._getOptionIndex(this._selectionModel.selected[0]);o+=Object(g.n)(o,this.options,this.optionGroups);const a=n/2;this._scrollTop=this._calculateOverlayScroll(o,a,i),this._offsetY=this._calculateOverlayOffsetY(o,a,i),this._checkOverlayWithinViewport(i)}_calculateOverlayScroll(e,t,n){const i=this._getItemHeight();return Math.min(Math.max(0,i*e-t+i/2),n)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const e=this._getLabelId();return this.ariaLabelledby?e+" "+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getLabelId(){var e;return(null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId())||""}_calculateOverlayOffsetX(){const e=this.overlayDir.overlayRef.overlayElement.getBoundingClientRect(),t=this._viewportRuler.getViewportSize(),n=this._isRtl(),i=this.multiple?56:32;let o;if(this.multiple)o=40;else{let e=this._selectionModel.selected[0]||this.options.first;o=e&&e.group?32:16}n||(o*=-1);const a=0-(e.left+o-(n?i:0)),s=e.right+o-t.width+(n?0:i);a>0?o+=a+8:s>0&&(o-=s+8),this.overlayDir.offsetX=Math.round(o),this.overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(e,t,n){const i=this._getItemHeight(),o=(i-this._triggerRect.height)/2,a=Math.floor(256/i);let s;return this._disableOptionCentering?0:(s=0===this._scrollTop?e*i:this._scrollTop===n?(e-(this._getItemCount()-a))*i+(i-(this._getItemCount()*i-256)%i):t-i/2,Math.round(-1*s-o))}_checkOverlayWithinViewport(e){const t=this._getItemHeight(),n=this._viewportRuler.getViewportSize(),i=this._triggerRect.top-8,o=n.height-this._triggerRect.bottom-8,a=Math.abs(this._offsetY),s=Math.min(this._getItemCount()*t,256)-a-this._triggerRect.height;s>o?this._adjustPanelUp(s,o):a>i?this._adjustPanelDown(a,i,e):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(e,t){const n=Math.round(e-t);this._scrollTop-=n,this._offsetY-=n,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(e,t,n){const i=Math.round(e-t);if(this._scrollTop+=i,this._offsetY+=i,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=n)return this._scrollTop=n,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_getOriginBasedOnOption(){const e=this._getItemHeight(),t=(e-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-t+e/2}px 0px`}_getItemCount(){return this.options.length+this.optionGroups.length}_getItemHeight(){return 3*this._triggerFontSize}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._getLabelId()+" "+this._valueId;return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(u.e),s.Kb(s.h),s.Kb(s.z),s.Kb(g.a),s.Kb(s.l),s.Kb(R.c,8),s.Kb(D.t,8),s.Kb(D.k,8),s.Kb(d.a,8),s.Kb(D.q,10),s.Ub("tabindex"),s.Kb(B),s.Kb(_.f),s.Kb(U,8))},e.\u0275cmp=s.Eb({type:e,selectors:[["mat-select"]],contentQueries:function(e,t,n){var i;1&e&&(s.Db(n,$,!0),s.Db(n,g.h,!0),s.Db(n,g.c,!0)),2&e&&(s.jc(i=s.Xb())&&(t.customTrigger=i.first),s.jc(i=s.Xb())&&(t.options=i),s.jc(i=s.Xb())&&(t.optionGroups=i))},viewQuery:function(e,t){var n;1&e&&(s.Ac(z,!0),s.Ac(A,!0),s.Ac(b.a,!0)),2&e&&(s.jc(n=s.Xb())&&(t.trigger=n.first),s.jc(n=s.Xb())&&(t.panel=n.first),s.jc(n=s.Xb())&&(t.overlayDir=n.first))},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","true",1,"mat-select"],hostVars:20,hostBindings:function(e,t){1&e&&s.Wb("keydown",(function(e){return t._handleKeydown(e)}))("focus",(function(){return t._onFocus()}))("blur",(function(){return t._onBlur()})),2&e&&(s.Ab("id",t.id)("tabindex",t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-describedby",t._ariaDescribedby||null)("aria-activedescendant",t._getAriaActiveDescendant()),s.Cb("mat-select-disabled",t.disabled)("mat-select-invalid",t.errorState)("mat-select-required",t.required)("mat-select-empty",t.empty)("mat-select-multiple",t.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],id:"id",disableOptionCentering:"disableOptionCentering",typeaheadDebounceInterval:"typeaheadDebounceInterval",placeholder:"placeholder",required:"required",multiple:"multiple",compareWith:"compareWith",value:"value",panelClass:"panelClass",ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",sortComparator:"sortComparator"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[s.yb([{provide:d.d,useExisting:e},{provide:g.d,useExisting:e}]),s.wb,s.xb],ngContentSelectors:V,decls:9,vars:10,consts:[["cdk-overlay-origin","",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder"],[1,"mat-select-value-text",3,"ngSwitch"],[4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-panel-wrap"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(e,t){if(1&e&&(s.dc(W),s.Pb(0,"div",0,1),s.Wb("click",(function(){return t.toggle()})),s.Pb(3,"div",2),s.wc(4,F,2,1,"span",3),s.wc(5,E,3,2,"span",4),s.Ob(),s.Pb(6,"div",5),s.Lb(7,"div",6),s.Ob(),s.Ob(),s.wc(8,K,4,14,"ng-template",7),s.Wb("backdropClick",(function(){return t.close()}))("attach",(function(){return t._onAttached()}))("detach",(function(){return t.close()}))),2&e){const e=s.kc(1);s.zb(3),s.ec("ngSwitch",t.empty),s.Ab("id",t._valueId),s.zb(1),s.ec("ngSwitchCase",!0),s.zb(1),s.ec("ngSwitchCase",!1),s.zb(3),s.ec("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",e)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayMinWidth",null==t._triggerRect?null:t._triggerRect.width)("cdkConnectedOverlayOffsetY",t._offsetY)}},directives:[b.b,i.x,i.y,b.a,i.z,i.q],styles:[".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],encapsulation:2,data:{animation:[Z.transformPanelWrap,Z.transformPanel]},changeDetection:0}),e})(),Q=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},providers:[X],imports:[[i.c,b.f,g.i,g.e],u.b,d.e,g.i,g.e]}),e})();var J=n("NFeN");function ee(e,t){1&e&&(s.Nb(0),s.Pb(1,"div",2),s.Lb(2,"mat-spinner"),s.Ob(),s.Mb())}function te(e,t){if(1&e&&(s.Pb(0,"p"),s.xc(1),s.Ob()),2&e){const e=s.Zb().$implicit;s.zb(1),s.yc(e.tipoUsuario)}}function ne(e,t){if(1&e&&(s.Pb(0,"mat-option",14),s.xc(1),s.Ob()),2&e){const e=t.$implicit;s.ec("value",e),s.zb(1),s.zc(" ",e," ")}}const ie=function(){return["aluno","professor"]};function oe(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",8),s.Pb(1,"mat-form-field",9),s.Pb(2,"mat-select",10),s.Wb("valueChange",(function(t){return s.lc(e),s.Zb().$implicit.tipoUsuario=t})),s.wc(3,ne,2,2,"mat-option",11),s.Ob(),s.Ob(),s.Pb(4,"button",12),s.Wb("click",(function(){s.lc(e);const t=s.Zb().$implicit;return s.Zb(2).onChangeRole(t)})),s.Pb(5,"mat-icon",13),s.xc(6,"save"),s.Ob(),s.Ob(),s.Ob()}if(2&e){const e=s.Zb().$implicit;s.zb(2),s.ec("value",e.tipoUsuario),s.zb(1),s.ec("ngForOf",s.hc(3,ie)),s.zb(1),s.ec("disabled",!1)}}function ae(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",8),s.Pb(1,"button",15),s.Wb("click",(function(){s.lc(e);const t=s.Zb().$implicit;return s.Zb(2).sendDecision(t,"ativo")})),s.Pb(2,"mat-icon",13),s.xc(3,"done"),s.Ob(),s.Ob(),s.Pb(4,"button",16),s.Wb("click",(function(){s.lc(e);const t=s.Zb().$implicit;return s.Zb(2).sendDecision(t,"inativo")})),s.Pb(5,"mat-icon",13),s.xc(6,"close"),s.Ob(),s.Ob(),s.Ob()}}function se(e,t){if(1&e&&(s.Pb(0,"p"),s.xc(1),s.Ob()),2&e){const e=s.Zb().$implicit;s.zb(1),s.yc(e.status)}}function re(e,t){if(1&e&&(s.Pb(0,"div",6),s.Pb(1,"p"),s.xc(2),s.Ob(),s.Pb(3,"p"),s.xc(4),s.Ob(),s.wc(5,te,2,1,"p",1),s.wc(6,oe,7,4,"div",7),s.wc(7,ae,7,0,"div",7),s.wc(8,se,2,1,"p",1),s.Ob()),2&e){const e=t.$implicit;s.zb(2),s.yc(e.nome),s.zb(2),s.yc(e.email),s.zb(1),s.ec("ngIf","admin"==e.tipoUsuario),s.zb(1),s.ec("ngIf","admin"!=e.tipoUsuario),s.zb(1),s.ec("ngIf","pendente"==e.status),s.zb(1),s.ec("ngIf","pendente"!=e.status)}}function ce(e,t){if(1&e&&(s.Nb(0),s.Pb(1,"div",3),s.Pb(2,"div",4),s.Pb(3,"span"),s.xc(4,"Nome"),s.Ob(),s.Pb(5,"span"),s.xc(6,"E-mail"),s.Ob(),s.Pb(7,"span"),s.xc(8,"Cargo"),s.Ob(),s.Pb(9,"span"),s.xc(10,"Status"),s.Ob(),s.Ob(),s.Lb(11,"hr"),s.wc(12,re,9,6,"div",5),s.Ob(),s.Mb()),2&e){const e=s.Zb();s.zb(12),s.ec("ngForOf",e.userPool)}}let le=(()=>{class e{constructor(e){this.authService=e,this.loading=!1,this.subscription=[]}ngOnInit(){this.getUserPool()}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}getUserPool(){try{this.loading=!0;const e=this.authService.getUserPool().subscribe(e=>{this.userPool=e.user,this.loading=!1});this.subscription.push(e)}catch(e){throw console.error("ERROR on getUserPool",e),e}}onChangeRole(e){try{this.loading=!0;const t=this.authService.updateUser(e).subscribe(e=>{this.loading=!1});this.subscription.push(t)}catch(t){throw console.error("ERROR on getUserPool",t),t}}sendDecision(e,t){e.status=t;try{this.loading=!0;const t=this.authService.updateUser(e).subscribe(e=>{this.loading=!1});this.subscription.push(t)}catch(n){throw console.error("ERROR on getUserPool",n),n}}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(h.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-manage-user-pool"]],decls:3,vars:2,consts:[[1,"user-pool"],[4,"ngIf"],[1,"user-pool__loading","d-flex","justify-content-center"],[1,"user-pool__table"],[1,"user-pool__table--header"],["class","user-pool__table--row align-items-center",4,"ngFor","ngForOf"],[1,"user-pool__table--row","align-items-center"],["class","actions",4,"ngIf"],[1,"actions"],["appearance","fill"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["type","button","title","Confirmar",1,"actions__save",3,"disabled","click"],["aria-hidden","false"],[3,"value"],["type","button","title","Aprovar",1,"actions__approve",3,"click"],["type","button","title","Rejeitar",1,"actions__decline",3,"click"]],template:function(e,t){1&e&&(s.Pb(0,"div",0),s.wc(1,ee,3,0,"ng-container",1),s.wc(2,ce,13,1,"ng-container",1),s.Ob()),2&e&&(s.zb(1),s.ec("ngIf",t.loading),s.zb(1),s.ec("ngIf",!t.loading))},directives:[i.t,p.c,i.s,d.c,N,J.a,g.h],styles:[".user-pool[_ngcontent-%COMP%]{width:100%}.user-pool__loading[_ngcontent-%COMP%]{margin:64px}.user-pool__table[_ngcontent-%COMP%]{padding:24px;border:1px solid rgba(0,0,0,.2)}.user-pool__table--header[_ngcontent-%COMP%], .user-pool__table--row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:16px}.user-pool__table--header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .user-pool__table--row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:20%;text-align:center}.user-pool__table--header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%], .user-pool__table--row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}.user-pool__table--header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .user-pool__table--row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:36px;border:none;padding:4px 8px;border-radius:4px}.user-pool__table--header[_ngcontent-%COMP%]   .actions__approve[_ngcontent-%COMP%], .user-pool__table--row[_ngcontent-%COMP%]   .actions__approve[_ngcontent-%COMP%]{background-color:#2dd36f}.user-pool__table--header[_ngcontent-%COMP%]   .actions__decline[_ngcontent-%COMP%], .user-pool__table--row[_ngcontent-%COMP%]   .actions__decline[_ngcontent-%COMP%]{background-color:#eb445a}.user-pool__table--header[_ngcontent-%COMP%]   .actions__save[_ngcontent-%COMP%], .user-pool__table--row[_ngcontent-%COMP%]   .actions__save[_ngcontent-%COMP%]{color:#3d4dff;background-color:#b5bbff}.user-pool__table--header[_ngcontent-%COMP%]   .actions__save[_ngcontent-%COMP%]:disabled, .user-pool__table--row[_ngcontent-%COMP%]   .actions__save[_ngcontent-%COMP%]:disabled{color:#848efa;background-color:#d0d4ff}.user-pool__table--header[_ngcontent-%COMP%]{font-weight:500}"]}),e})();var he=n("2MiI"),pe=n("hrlM");let de=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}goTo(e){this.router.navigate([e])}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(o.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-manager"]],decls:21,vars:0,consts:[[1,"manager"],[1,"manager__title"],[1,"manager__content"],[1,"options"],[1,"options__item"],[3,"click"]],template:function(e,t){1&e&&(s.Lb(0,"app-header"),s.Lb(1,"app-navbar"),s.Pb(2,"div",0),s.Pb(3,"div",1),s.Pb(4,"h1"),s.xc(5,"\xc1rea da gest\xe3o"),s.Ob(),s.Ob(),s.Pb(6,"div",2),s.Pb(7,"ul",3),s.Pb(8,"li",4),s.Pb(9,"button",5),s.Wb("click",(function(){return t.goTo("manager/forum")})),s.xc(10,"Gerenciar f\xf3runs"),s.Ob(),s.Ob(),s.Pb(11,"li",4),s.Pb(12,"button",5),s.Wb("click",(function(){return t.goTo("manager/categoria")})),s.xc(13,"Gerenciar categorias"),s.Ob(),s.Ob(),s.Pb(14,"li",4),s.Pb(15,"button",5),s.Wb("click",(function(){return t.goTo("manager/posts")})),s.xc(16,"Revis\xe3o de publica\xe7\xf5es"),s.Ob(),s.Ob(),s.Pb(17,"li",4),s.Pb(18,"button",5),s.Wb("click",(function(){return t.goTo("manager/users")})),s.xc(19,"Gerenciar usu\xe1rios"),s.Ob(),s.Ob(),s.Ob(),s.Lb(20,"router-outlet"),s.Ob(),s.Ob())},directives:[he.a,pe.a,o.g],styles:[".manager[_ngcontent-%COMP%]{padding:36px 24px 16px}.manager[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:16px}.manager__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#550504;font-weight:600;font-size:36px}.manager__content[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{padding:0;width:100%;display:flex;justify-content:space-between;font-size:16px;list-style-type:none}.manager__content[_ngcontent-%COMP%]   .options__item[_ngcontent-%COMP%]{padding:16px}.manager__content[_ngcontent-%COMP%]   .options__item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background-color:#550504;padding:16px;border:none;border-radius:8px}"]}),e})();var be=n("jwUf");function ge(e,t){1&e&&(s.Nb(0),s.Pb(1,"div",2),s.Lb(2,"mat-spinner"),s.Ob(),s.Mb())}function ue(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div",6),s.Pb(1,"p"),s.xc(2),s.Ob(),s.Pb(3,"p"),s.xc(4),s.Ob(),s.Pb(5,"p"),s.xc(6),s.Ob(),s.Pb(7,"p"),s.xc(8),s.ac(9,"date"),s.Ob(),s.Pb(10,"span",7),s.Wb("click",(function(){s.lc(e);const n=t.$implicit;return s.Zb(2).goTo(n.category.type,n.id)})),s.xc(11,"Ver Post"),s.Ob(),s.Pb(12,"div",8),s.Pb(13,"button",9),s.Wb("click",(function(){s.lc(e);const n=t.$implicit;return s.Zb(2).sendDecision(n,!0)})),s.Pb(14,"mat-icon",10),s.xc(15,"done"),s.Ob(),s.Ob(),s.Pb(16,"button",11),s.Wb("click",(function(){s.lc(e);const n=t.$implicit;return s.Zb(2).sendDecision(n,!1)})),s.Pb(17,"mat-icon",10),s.xc(18,"close"),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&e){const e=t.$implicit;s.zb(2),s.yc(e.title),s.zb(2),s.yc(e.descricao),s.zb(2),s.yc(e.tbuser.nome),s.zb(2),s.yc(s.bc(9,4,e.updatedAt))}}function _e(e,t){if(1&e&&(s.Nb(0),s.Pb(1,"div",3),s.Pb(2,"div",4),s.Pb(3,"span"),s.xc(4,"T\xedtulo"),s.Ob(),s.Pb(5,"span"),s.xc(6,"Conte\xfado"),s.Ob(),s.Pb(7,"span"),s.xc(8,"Nome"),s.Ob(),s.Pb(9,"span"),s.xc(10,"Data de publica\xe7\xe3o"),s.Ob(),s.Pb(11,"span"),s.xc(12,"Link"),s.Ob(),s.Pb(13,"span"),s.xc(14,"A\xe7\xf5es"),s.Ob(),s.Ob(),s.Lb(15,"hr"),s.wc(16,ue,19,6,"div",5),s.Ob(),s.Mb()),2&e){const e=s.Zb();s.zb(16),s.ec("ngForOf",e.postsToReview)}}const me=[{path:"",component:de,children:[{path:"forum",component:l},{path:"posts",component:(()=>{class e{constructor(e,t){this.postsService=e,this.router=t,this.loading=!1,this.subscription=[]}ngOnInit(){this.getPostsToReview()}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}getPostsToReview(){try{this.loading=!0;const e=this.postsService.getSolicitacoes().subscribe(e=>{this.postsToReview=e.posts,this.loading=!1});this.subscription.push(e)}catch(e){throw console.error("ERROR on GetPostsToReview",e),e}}sendDecision(e,t){try{this.loading=!0,this.postsService.sendDecision(e.id,t).subscribe(e=>{this.loading=!1,this.getPostsToReview()})}catch(n){}}goTo(e,t){"banner"===e&&window.open("http://localhost:4200/banners/cartazes?postId="+t),"ebook"===e&&window.open("http://localhost:4200/ebook/cartilhas/folder?postId="+t),"manual"===e&&window.open("http://localhost:4200/manuais/notas-tecnicas/protocolos?postId="+t),"video"===e&&window.open("http://localhost:4200/videos/podcasts?postId="+t),"artigo"===e&&window.open("http://localhost:4200/artigo/texto-de-apoio?postId="+t)}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(be.a),s.Kb(o.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-review-posts"]],decls:3,vars:2,consts:[[1,"review"],[4,"ngIf"],[1,"review__loading","d-flex","justify-content-center"],[1,"review__table"],[1,"review__table--header"],["class","review__table--row",4,"ngFor","ngForOf"],[1,"review__table--row"],[1,"link",3,"click"],[1,"actions"],["type","button","title","Aprovar",1,"actions__approve",3,"click"],["aria-hidden","false"],["type","button","title","Rejeitar",1,"actions__decline",3,"click"]],template:function(e,t){1&e&&(s.Pb(0,"div",0),s.wc(1,ge,3,0,"ng-container",1),s.wc(2,_e,17,1,"ng-container",1),s.Ob()),2&e&&(s.zb(1),s.ec("ngIf",t.loading),s.zb(1),s.ec("ngIf",!t.loading))},directives:[i.t,p.c,i.s,J.a],pipes:[i.f],styles:[".review[_ngcontent-%COMP%]{width:100%}.review__loading[_ngcontent-%COMP%]{margin:64px}.review__table[_ngcontent-%COMP%]{padding:24px;border:1px solid rgba(0,0,0,.2)}.review__table--header[_ngcontent-%COMP%], .review__table--row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:16px}.review__table--header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .review__table--row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:20%;text-align:center}.review__table--header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%], .review__table--row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.review__table--header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .review__table--row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:36px;border:none;padding:4px 8px;border-radius:4px}.review__table--header[_ngcontent-%COMP%]   .actions__approve[_ngcontent-%COMP%], .review__table--row[_ngcontent-%COMP%]   .actions__approve[_ngcontent-%COMP%]{background-color:#2dd36f}.review__table--header[_ngcontent-%COMP%]   .actions__decline[_ngcontent-%COMP%], .review__table--row[_ngcontent-%COMP%]   .actions__decline[_ngcontent-%COMP%]{background-color:#eb445a}.review__table--header[_ngcontent-%COMP%]{font-weight:500}.link[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;color:#00f}"]}),e})()},{path:"categoria",component:a.a},{path:"users",component:le}]}];let fe=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[o.f.forChild(me)],o.f]}),e})();var Oe=n("j1ZV"),ve=n("VByS");let ye=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[i.c,fe,Oe.a,ve.ForumModule,p.b,J.b,Q,d.e]]}),e})()}}]);