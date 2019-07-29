var familyOnboardingTour=function(t,e,n,i,a,o){"use strict";var s={name:"familyOnboardingTour",showDate:new Date,isLater:!1,isTaken:!1,isNever:!1,isAvailable:function(){return n.allowFamilies()&&e.isFamilyUser()},tour:{welcomeStep:{class:"family-onboarding-override family-onboarding-welcome-step",title:a.translateString("Welcome to Families!"),contentText1:a.translateString("Take a tour of your new vault to explore some of the new features of your LastPass Families account."),contentImage:{src:"images/vault_4.0/welcomemat.svg",style:"family-onboarding-header-image"},buttons:[{style:"family-close-button btn-link",text:a.translateString("Maybe later"),action:"later"},{style:"family-next-button btn-primary",text:a.translateString("Take the tour"),action:"start"}],position:{targetId:"#header",align:"left",orientation:"top",offset:{left:200,top:150}},openAction:function(){i.maximizeLeftMenu(),o(".family-onboarding-override.family-onboarding-welcome-step").css("max-height","")},shadeOn:!0,exitAction:"never"},laterStep:{class:"family-onboarding-override family-onboarding-welcome-step",title:a.translateString("Welcome to Families!"),contentText1:a.translateString("Take a tour of your new vault to explore some of the new features of your LastPass Families account."),contentImage:{src:"images/vault_4.0/welcomemat.svg",style:"family-onboarding-header-image",placement:"before"},buttons:[{style:"family-next-button btn-primary",sizeStyle:"col-6 col-push-6",text:a.translateString("Take the tour"),action:"start"}],position:{targetId:"#header",align:"left",orientation:"top",offset:{left:200,top:150}},openAction:function(){i.maximizeLeftMenu(),o(".family-onboarding-override.family-onboarding-welcome-step").css("max-height","")},shadeOn:!0,exitAction:"never"},steps:[{class:"family-onboarding-override family-onboarding-step",hideXCloseBtn:!0,title:a.translateString("Share as much as you like"),contentText1:a.translateString("Share with your family quickly and easily with unlimited family folders."),buttons:[{style:"family-close-button btn-link",text:a.translateString("Close"),action:"exit"},{style:"family-next-button btn-primary",text:a.translateString("Next"),action:"next"}],position:{targetId:".no-omaria:visible>#sharingMenuItem, .sharingMenuItem.omaria:visible",align:"top",orientation:"left",offset:{left:20,top:-35},pingOffset:{left:115,top:0}},openAction:function(){i.maximizeLeftMenu(),o("#sharingMenuItem").children(":first").click()},exitAction:"exit"},{class:"family-onboarding-override family-onboarding-step",hideXCloseBtn:!0,title:a.translateString("In case of an emergency"),contentText1:a.translateString("Designate a family member to receive access to your LastPass account in case of an emergency."),buttons:[{style:"family-close-button btn-link",text:a.translateString("Close"),action:"exit"},{style:"family-next-button btn-primary",text:a.translateString("Next"),action:"next"}],position:{targetId:"#emergencyAccessMenuItem",align:"top",orientation:"left",offset:{left:20,top:-75},pingOffset:{left:115,top:0}},openAction:function(){o("#emergencyAccessMenuItem").children(":first").click()},exitAction:"exit"},{class:"family-onboarding-override family-onboarding-step",hideXCloseBtn:!0,title:a.translateString("Welcome to the family"),contentText1:a.translateString("Invite members to your family, all you need is the email address and name of the person you'd like to invite."),buttons:[{style:"family-close-button btn-link",text:a.translateString("Close"),action:"exit"},{style:"family-next-button btn-primary",text:a.translateString("Next"),action:"exit"}],position:{targetId:"#familyAdminConsoleMenuItem",align:"top",orientation:"left",offset:{left:20,top:-75},pingOffset:{left:115,top:0}},openAction:function(){o("#emergencyAccessMenuItem").removeClass("selected")},exitAction:"exit"}],exitStep:{class:"family-onboarding-override family-onboarding-step family-onboarding-last-step",hideXCloseBtn:!0,title:a.translateString("Congratulations, you're ready to go!"),contentText1:a.translateString("Protect your family and share your digital lives securely. Enjoy the simplicity and security of your LastPass Families subscription."),contentImage:{src:"images/vault_4.0/Circle_Success.svg",style:"family-onboarding-final-header-image",placement:"before"},buttons:[{style:"family-close-button btn-link",text:a.translateString("Skip for now"),action:{event:"close",params:"skip"}},{style:"family-next-button btn-primary invite-family-members",text:a.translateString("Invite family members"),action:[{event:function(){t.openFamilyConsole()}},{event:"close",params:"invite_family_members"}]}],openAction:function(){o("#all, #vaultMenuItem").click()},position:{targetId:"#header",align:"left",orientation:"top",offset:{left:200,top:150}},shadeOn:!0,exitAction:"close"}}},r=[{style:"family-next-button btn-primary get-started",text:a.translateString("Get started"),action:{event:"close",params:"get_started"}}];return{getTourData:function(){var t=o.extend(!0,{},s);t.tour.steps=t.tour.steps.filter(function(t){return!("#familyAdminConsoleMenuItem"===t.position.targetId&&!e.isFamilyAdmin())});var n=t.tour.steps[t.tour.steps.length-1];return n.buttons[n.buttons.length-1].action="exit",e.isFamilyAdmin()||(t.tour.exitStep.buttons=r.slice()),t}}}(bg,LPProxy,LPFeatures,LPVault,Strings,$);
//# sourceMappingURL=sourcemaps/Tour/FamilyOnboarding/familyOnboardingTour.js.map
