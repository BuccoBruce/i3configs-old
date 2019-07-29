DialogWithGroupInput=function(t,o){(o=o||{}).additionalHeaderClasses=void 0===o.additionalHeaderClasses?[]:o.additionalHeaderClasses,o.additionalHeaderClasses.push("icon"),o.buttonAlign=o.buttonAlign||this.RIGHT_ALIGN,VaultItemDialog.call(this,t,o),this.updateFavButtonText=null},DialogWithGroupInput.prototype=Object.create(VaultItemDialog.prototype),DialogWithGroupInput.prototype.constructor=DialogWithGroupInput,function(){var t=Strings.translateString("Add Site to Favorites"),o=Strings.translateString("Remove Site from Favorites");DialogWithGroupInput.prototype.setup=function(t,o){var e=LPProxy.getGroups();e.sort(VaultItemBase.prototype.sortByNameAsc);for(var i=[],a=0,r=e.length;a<r;++a){var n=e[a];if(!(n instanceof DefaultGroup)){var s=n.getName();s!==Strings.Vault.NONE_GROUP&&s!==Strings.Consts.NONE_GROUP&&i.push(s)}}this.setGroupDropdownValues(i),this.updateFavButtonText&&this.updateFavButtonText(),VaultItemDialog.prototype.setup.apply(this,arguments)},DialogWithGroupInput.prototype.setGroupDropdownValues=function(t){this.inputFields.group.setValues(t)},DialogWithGroupInput.prototype.save=function(t,o){t.saveFromDialog(o,this.getGroup(o),this.data.saveOptions)},DialogWithGroupInput.prototype.add=function(t){if(!this.options.type)throw"Dialog must provide a type for new item or override this function.";var o=new this.options.type;if(this.data.saveOptions)if(t.group){var e=bg.get("siteCats");for(var i in e){if(e[i]===t.group){this.data.saveOptions.folder=t.group;break}this.data.saveOptions.folder="user"}}else this.data.saveOptions.folder="none";o.addFromDialog(t,this.getGroup(t),this.data.saveOptions)},DialogWithGroupInput.prototype.allowNoneGroup=function(){return!0},DialogWithGroupInput.prototype.addFavButton=function(){var e=LPTools.createElement("div","itemButtons dialogItemButtons");this.buttonContainer.prepend(e);var i=LPTools.createElement("input",{type:"checkbox",class:"favButton"});e.appendChild(i),this.inputFields.fav=new DialogInput.Input(i);var a=LPTools.createElement("label",{class:"favButtonLabel itemButton",title:t});e.appendChild(a);var r=this.updateFavButtonText=function(){i.checked?a.setAttribute("title",o):a.setAttribute("title",t)};return $(a).bind("click",function(){i.checked=!i.checked,r()}),this.actionButtonContainer=LPTools.createElement("div","actionButtonContainer"),e.appendChild(this.actionButtonContainer),this.actionButtonContainer=$(this.actionButtonContainer),e},DialogWithGroupInput.prototype.getGroupField=function(t){return"group"},DialogWithGroupInput.prototype.validate=function(t){var o=VaultItemDialog.prototype.validate.apply(this,arguments),e=this.getGroupField(t);if(t[e]){var i=LPProxy.getExistingGroupParent(t[e]);null===i&&t[e].indexOf(SharedGroup.prototype.SHARED_FOLDER_NAME_PREFIX)>-1&&(this.addError(e,Strings.translateString("Sorry - group names starting with 'Shared-' are created by LastPass to indicate groups shared with other people. Please use a different name.")),o=!1),this.originalData[e]!==t[e]&&i&&i.isReadOnly()&&(this.addError(e,Strings.translateString("You do not have permission to add items to this folder.")),o=!1)}return o},DialogWithGroupInput.prototype.getGroup=function(t,o){var e=t[this.getGroupField(t)];!e&&this.allowNoneGroup()&&(e=Strings.Consts.NONE_GROUP);var i=LPProxy.getGroupByName(e);if(!i&&e){var a=LPProxy.getExistingGroupParent(e);i=new DummyGroup(e,a?a.getSharedGroup():null)}return i}}();
//# sourceMappingURL=sourcemaps/dialogWithGroupInput.js.map
