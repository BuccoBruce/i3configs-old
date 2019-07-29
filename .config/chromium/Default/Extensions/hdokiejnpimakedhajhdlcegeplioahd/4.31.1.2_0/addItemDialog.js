var AddItemDialog=function(e){Dialog.call(this,e,{title:Strings.translateString("Add Item"),dynamicHeight:!1,closeButtonEnabled:!0,overlayDialog:!0,hideButtons:!0,additionalHeaderClasses:["icon"],isExpanded:!1})};AddItemDialog.prototype=Object.create(Dialog.prototype),AddItemDialog.prototype.constructor=AddItemDialog,AddItemDialog.prototype.addCard=function(e){var t=LPTools.createElement("div","col-3"),a=LPTools.createElement("button",e.classes?[].concat("addItemCard",e.classes):"addItemCard"),o;return t.appendChild(a),e.icon&&a.appendChild(e.icon),a.appendChild(LPTools.createElement("span","addItemCardName",e.name)),(e.isPrimaryItem?$("#addItemOptions"):$("#addItemSecondaryOptions")).append(t),a},AddItemDialog.prototype.toggleExpanded=function(){var e=$("#addItemSecondaryOptionsContainer"),t=$("#addItemSecondaryOptionsLabel");e.slideToggle(),t.toggleClass("open"),Dialog.prototype.getCurrentDialog().element.classList.toggle("isMaximized"),this.isExpanded=!this.isExpanded},AddItemDialog.prototype.setup=function(e,t){Dialog.prototype.setup.apply(this,arguments),t.isExpanded&&!this.isExpanded&&this.toggleExpanded()},AddItemDialog.prototype.initialize=function(){Dialog.prototype.initialize.apply(this,arguments);var e=this;$("#addItemSecondaryOptionsContainer").slideUp();var t=$("#addItemSecondaryOptions"),a,o={postSetup:function(){e.close()}};$("#addItemSecondaryOptionsLabel").bind("click",function(){e.toggleExpanded()});var n=bg.get("RecordTypeConfig");n.types.forEach(function(t){var a=!1,i;if(bg&&bg.get("g_prefoverrides")&&bg.get("g_prefoverrides").noformfill){var d=bg.get("g_prefoverrides").noformfill;a=d&&d.includes("0")||d.includes(t.enterprisePolicyId)}t.composite||t.noAddItemCard||"Password"!==t.id&&a||e.addCard({name:Strings.translateString(t.name),classes:t.id,isPrimaryItem:t.isPrimaryItem}).addEventListener("click",function(){if(bg.lpevent("m_add"),LPFeatures.allowOmarDrawer())window.location.hash="/drawers/(drawer:new-item/"+t.id+")";else switch(t.recordType){case n.TYPE.Password:dialogs.site.open(o);break;default:dialogs.note.open($.extend(o,{defaultData:{notetype:t.recordType,language:Note.prototype.isValidLanguage(navigator.language)?navigator.language:"en-US"}}))}})});var i=function(a){var n=e.addCard({parent:t,name:a.title,classes:"Custom"}),i=LPTools.createElement("button","customTemplateDeleteButton");return i.appendChild(LPTools.createElement("i","fa fa-trash")),n.appendChild(i),n.addEventListener("click",function(){dialogs.note.open($.extend(o,{defaultData:{notetype:"Custom_"+a.id}}))}),i.addEventListener("click",function(e){e.stopPropagation(),dialogs.confirmation.open({title:Strings.translateString("Confirm Deletion"),text:[Strings.translateString("Are you sure you want to delete %1?",a.title),Strings.translateString("Any notes you created using this template will not be deleted.")],nextButtonText:Strings.translateString("Continue"),backButtonText:Strings.Vault.CANCEL,handler:function(){LPRequest.makeRequest(LPProxy.deleteCustomNoteTemplate,{params:{id:a.id},success:function(){var e=n.parentElement;e.parentElement.removeChild(e)},requestSuccessOptions:{closeDialog:!1}})}})}),n};LPProxy.getCustomNoteTemplates().forEach(i),Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).subscribe(function(e){var t=i(e);setTimeout(function(){t.focus()},0)});var d=this.addCard({parent:t.parent(),name:Strings.translateString("New custom item type"),icon:LPTools.createElement("i","fa fa-plus")});$(d).addClass("customTemplateAddButton").bind("click",function(){dialogs.customNoteTemplate.open()})};
//# sourceMappingURL=sourcemaps/addItemDialog.js.map