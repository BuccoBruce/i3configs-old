function lpPutUserPref(e,t){"undefined"==typeof g_userprefs&&(g_userprefs=getBG().g_userprefs),void 0!==g_userprefs[e]&&g_userprefs[e]==t||(g_userprefs_changed[e]=!0),g_userprefs[e]=t,ExtensionPreferences.triggerChange(e,t)}function lpPutGblPref(e,t){"undefined"==typeof g_gblprefs&&(g_gblprefs=getBG().g_gblprefs),void 0!==g_gblprefs[e]&&g_gblprefs[e]==t||(g_gblprefs_changed[e]=!0),g_gblprefs[e]=t,ExtensionPreferences.triggerChange(e,t)}function lpGetPref(e,t){return"undefined"==typeof g_userprefs&&(g_userprefs=getBG().g_userprefs),"undefined"!=typeof g_userprefs&&void 0!==g_userprefs[e]?g_userprefs[e]:("undefined"==typeof g_gblprefs&&(g_gblprefs=getBG().g_gblprefs),"undefined"!=typeof g_gblprefs&&void 0!==g_gblprefs[e]?g_gblprefs[e]:t)}function dodefault(){var e=get_innertext(document.getElementById("default"));if(e.indexOf("General")>=0)document.getElementById("logoffWhenCloseBrowserVal").value=0,document.getElementById("logoffWhenCloseBrowser").checked=!1,document.getElementById("idleLogoffVal").value="",document.getElementById("idleLogoffEnabled").checked=!1,document.getElementById("openpref").value="tabs",document.getElementById("htmlindialog").checked=g_isfirefoxsdk,document.getElementById("highlightFields").checked=!0,document.getElementById("automaticallyFill").checked=!0,document.getElementById("showvault").checked=!1,document.getElementById("showAcctsInGroups").checked=!0,document.getElementById("hideContextMenus").checked=!1,document.getElementById("defaultffid").value=0,document.getElementById("donotoverwritefilledfields").checked=!1;else if(e.indexOf("Notifications")>=0)document.getElementById("showNotifications").checked=!0,document.getElementById("showGenerateNotifications").checked=!1,document.getElementById("showFormFillNotifications").checked=!1,document.getElementById("showNotificationsAfterClick").checked=!1,document.getElementById("showSaveNotificationBar").checked=!0,document.getElementById("showSaveSiteNotifications").checked=!1,document.getElementById("notificationsBottom").checked=!1,document.getElementById("showChangeNotificationBar").checked=!0,document.getElementById("showmatchingbadge").checked=!0,document.getElementById("usepopupfill").checked=!0;else if(e.indexOf("Hotkeys")>=0){getBG().g_is_mac?(optionsData.HotKeys.generateHkKeyCode=0,optionsData.HotKeys.generateHkMods="",optionsData.HotKeys.recheckHkKeyCode=0,optionsData.HotKeys.recheckHkMods="",optionsData.HotKeys.searchHkKeyCode=0,optionsData.HotKeys.searchHkMods="",optionsData.HotKeys.nextHkKeyCode=33,optionsData.HotKeys.nextHkMods="meta",optionsData.HotKeys.prevHkKeyCode=34,optionsData.HotKeys.prevHkMods="meta",optionsData.HotKeys.homeHkKeyCode=0,optionsData.HotKeys.homeHkMods="",optionsData.HotKeys.openpopoverHkKeyCode=220,optionsData.HotKeys.openpopoverHkMods="meta"):(optionsData.HotKeys.generateHkKeyCode=71,optionsData.HotKeys.generateHkMods="alt",optionsData.HotKeys.recheckHkKeyCode=73,optionsData.HotKeys.recheckHkMods="alt",optionsData.HotKeys.searchHkKeyCode=87,optionsData.HotKeys.searchHkMods="alt",optionsData.HotKeys.nextHkKeyCode=33,optionsData.HotKeys.nextHkMods="alt",optionsData.HotKeys.prevHkKeyCode=34,optionsData.HotKeys.prevHkMods="alt",optionsData.HotKeys.homeHkKeyCode=72,optionsData.HotKeys.homeHkMods="control alt",optionsData.HotKeys.openpopoverHkKeyCode=220,optionsData.HotKeys.openpopoverHkMods="alt"),optionsData.HotKeys.submitHkKeyCode=0,optionsData.HotKeys.submitHkMods="",optionsData.HotKeys.saveallHkKeyCode=0,optionsData.HotKeys.saveallHkMods="",optionsData.HotKeys.logoffHkKeyCode=0,optionsData.HotKeys.logoffHkMods="",optionsData.HotKeys.defaultffidHkKeyCode=0,optionsData.HotKeys.defaultffidHkMods="";for(var t=new Array("generateHk","recheckHk","searchHk","nextHk","prevHk","homeHk","submitHk","saveallHk","logoffHk","defaultffidHk","openpopoverHk"),o=0;o<t.length;o++)writeHotKeyValue(t[o])}else e.indexOf("Advanced")>=0?(document.getElementById("autoautoEnabled").checked=!0,document.getElementById("autoautoVal").value="25",document.getElementById("warninsecureforms").checked=!1,document.getElementById("dontfillautocompleteoff").checked=!1,document.getElementById("pollServerEnabled").checked=!0,document.getElementById("pollServerVal").value="15",document.getElementById("recentUsed").checked=!0,document.getElementById("recentUsedCount").value="10",document.getElementById("searchNotes").checked=!0,document.getElementById("openloginstart").checked=!1,document.getElementById("storeLostOTP").checked=!0,document.getElementById("enablenewlogin").checked=!0,document.getElementById("clearfilledfieldsonlogoff").checked=!1,document.getElementById("toplevelmatchingsites").checked=!1):e.indexOf("Icons")>=0&&(document.getElementById("icons2").checked=!0)}function fix_userhash(e){return""==e&&is_edge()?"global":e}var lpReadAllPrefs=function(){var e=function(e){try{return JSON.parse(e)}catch(e){return{}}},t=function(t){if("undefined"!=typeof browser&&browser.storage&&browser.storage.local&&g_username_hash){var s=["userPrefs_"+g_username_hash,"globalPrefs"];browser.storage.local.get(s).then(function(a){a&&a["userPrefs_"+g_username_hash]&&(g_userprefs_changed=g_userprefs=e(a["userPrefs_"+g_username_hash]),g_gblprefs_changed=g_gblprefs=e(a.globalPrefs),lpWriteAllPrefs(),browser.storage.local.remove(s)),o(t)},function(e){console.error(e),o(t)})}else o(t)},o=function(e){var t=g_username_hash&&""!=g_username_hash?g_username_hash:"";g_userprefs={},g_identity="";var o=opendb();if(createPrefsTable(o),o){var s=function(t,o){g_gblprefs={};for(var s=0;s<o.rows.length;s++){var a=o.rows.item(s).username_hash,r=o.rows.item(s).prefname,n=o.rows.item(s).prefvalue;a!=fix_userhash("")?(g_userprefs[r]=n,"identity"==r&&(g_identity=n)):g_gblprefs[r]=n}if(g_issafari||g_isopera||g_ismaxthon||g_isfirefoxsdk){var l=lpGetPref("language","");include_language(l)}if(start_idle_checker(),void 0===g_gblprefs.generateHkKeyCode&&setup_default_hotkeys(),setup_hotkeys(),void 0!==g_gblprefs.server){var c=g_gblprefs.server;""==c||"lastpass.com"!=c&&"lastpass.eu"!=c||(0!=base_url.indexOf("https://preprod.lastpass.com")&&0!=base_url.indexOf("https://lpdev.lastpass.com")||"lastpass.com"!=c)&&(base_url="https://"+c+"/")}g_prefs_read=!0,console_log("read: "+o.rows.length+" preferences"),Topics.get(Topics.PREFERENCES_READ).publish(),e&&e(o.rows.length)};if(g_indexeddb){var a={rows:{item:function(e){return this[e]},length:0}},r=o.transaction("LastPassPreferences","readonly").objectStore("LastPassPreferences").index("username_hash");r.openCursor(IDBKeyRange.only(fix_userhash(t))).onsuccess=function(e){var o=e.target.result;o?(a.rows[a.rows.length]=o.value,a.rows.length++,o.continue()):t!=fix_userhash("")?r.openCursor(IDBKeyRange.only(fix_userhash(""))).onsuccess=function(e){var t=e.target.result;t?(a.rows[a.rows.length]=t.value,a.rows.length++,t.continue()):s(null,a)}:s(null,a)}}else o.transaction(function(e){e.executeSql("SELECT * FROM LastPassPreferences where username_hash=? or username_hash=?",[t,""],s,function(e,t){console_log(t)})})}else e&&e()};return t}();function setup_default_hotkeys(){g_is_mac?(lpPutGblPref("generateHkKeyCode",0),lpPutGblPref("generateHkMods",""),lpPutGblPref("recheckHkKeyCode",0),lpPutGblPref("recheckHkMods",""),lpPutGblPref("searchHkKeyCode",0),lpPutGblPref("searchHkMods",""),lpPutGblPref("nextHkKeyCode",33),lpPutGblPref("nextHkMods","meta"),lpPutGblPref("prevHkKeyCode",34),lpPutGblPref("prevHkMods","meta"),lpPutGblPref("homeHkKeyCode",0),lpPutGblPref("homeHkMods",""),lpPutGblPref("openpopoverHkKeyCode",220),lpPutGblPref("openpopoverHkMods","meta")):(lpPutGblPref("generateHkKeyCode",71),lpPutGblPref("generateHkMods","alt"),lpPutGblPref("recheckHkKeyCode",73),lpPutGblPref("recheckHkMods","alt"),lpPutGblPref("searchHkKeyCode",87),lpPutGblPref("searchHkMods","alt"),lpPutGblPref("nextHkKeyCode",33),lpPutGblPref("nextHkMods","alt"),lpPutGblPref("prevHkKeyCode",34),lpPutGblPref("prevHkMods","alt"),lpPutGblPref("homeHkKeyCode",72),lpPutGblPref("homeHkMods","control alt"),lpPutGblPref("openpopoverHkKeyCode",220),lpPutGblPref("openpopoverHkMods","alt")),lpPutGblPref("submitHkKeyCode",0),lpPutGblPref("submitHkMods",""),lpPutGblPref("saveallHkKeyCode",0),lpPutGblPref("saveallHkMods",""),lpPutGblPref("logoffHkKeyCode",0),lpPutGblPref("logoffHkMods",""),lpPutGblPref("defaultffidHkKeyCode",0),lpPutGblPref("defaultffidHkMods",""),lpWriteAllPrefs()}function lpWriteAllPrefs(){var e=g_isfirefoxsdk,t=opendb();if(createPrefsTable(t),t){if(g_indexeddb){var o=t.transaction("LastPassPreferences","readwrite").objectStore("LastPassPreferences");if(null!=g_username_hash&&""!=g_username_hash)for(var s in g_userprefs_changed)o.put({username_hash:fix_userhash(g_username_hash),prefname:s,prefvalue:g_userprefs[s],userkey:g_username_hash+"_"+s});for(var s in g_userprefs_changed={},g_gblprefs_changed)o.put({username_hash:fix_userhash(""),prefname:s,prefvalue:g_gblprefs[s],userkey:"_"+s});g_gblprefs_changed={}}else t.transaction(function(t){var o="",s="",a=[],r=0;if(e&&(o="REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES "),null!=g_username_hash&&""!=g_username_hash)for(var n in g_userprefs_changed)e?(o+=s+"(?, ?, ?)",s=", ",a.push(g_username_hash),a.push(n),a.push(g_userprefs[n]),r++):(t.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)",[g_username_hash,n,g_userprefs[n]],function(e,t){},function(e,t){console_log(t)}),ExtensionPreferences.triggerChange(n,g_userprefs[n]));for(var n in g_userprefs_changed={},g_gblprefs_changed)e?(o+=s+"(?, ?, ?)",s=", ",a.push(""),a.push(n),a.push(g_gblprefs[n]),r++):(t.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)",["",n,g_gblprefs[n]],function(e,t){},function(e,t){console_log(t)}),ExtensionPreferences.triggerChange(n,g_gblprefs[n]));g_gblprefs_changed={},e&&r>0&&t.executeSql(o,a,function(e,t){},function(e,t){console_log(t)})});Topics.get(Topics.PREFERENCES_WRITE).publish()}start_idle_checker()}function capturehk(e,t){var o="";if(o+=t.ctrlKey?"control":"",o+=t.metaKey?(""!=o?" ":"")+"meta":"",o+=t.altKey?(""!=o?" ":"")+"alt":"",""!=(o+=t.shiftKey?(""!=o?" ":"")+"shift":"")&&"shift"!=o||(o=getBG().g_is_mac?"meta":"alt"),8==t.keyCode||127==t.keyCode||46==t.keyCode)optionsData.HotKeys[e+"KeyCode"]=0;else{if(t.keyCode<=32||91==t.keyCode)return;0!=t.keyCode?optionsData.HotKeys[e+"KeyCode"]=t.keyCode:optionsData.HotKeys[e+"KeyCode"]=t.charCode}optionsData.HotKeys[e+"Mods"]=o,writeHotKeyValue(e)}function writeHotKeyValue(e){var t=optionsData.HotKeys[e+"KeyCode"],o=document.getElementById(e),s="";if(0!=t){var a=optionsData.HotKeys[e+"Mods"];"string"!=typeof a&&(a="");var r=a.split(" ");for(var n in r)"control"==r[n]&&(s+=gs("Ctrl")+"+"),"meta"==r[n]&&(s+=gs("Meta")+"+"),"alt"==r[n]&&(s+=gs("Alt")+"+"),"shift"==r[n]&&(s+=gs("Shift")+"+")}if(0!=t){switch(t=parseInt(t)){case 33:s+=gs("Page Up");break;case 34:s+=gs("Page Down");break;case 35:s+=gs("End");break;case 36:s+=gs("Home");break;case 37:s+=gs("Left");break;case 38:s+=gs("Up");break;case 39:s+=gs("Right");break;case 40:s+=gs("Down");break;case 189:s+="-";break;case 219:s+="[";break;case 220:s+="\\";break;case 221:s+="]";break;case 186:s+=";";break;case 222:s+="'";break;case 188:s+=",";break;case 187:s+="+";break;case 190:s+=".";break;case 191:s+="/";break;case 106:s+="*";break;case 192:s+="~";break;case 124:s+=gs("Print Screen");break;default:s+=String.fromCharCode(t).toUpperCase()}o.value=s}else o.value=""}function fixhk(e,t){optionsData.HotKeys[e+"KeyCode"]<32&&(optionsData.HotKeys[e+"Mods"]="",writeHotKeyValue(e)),t.cancelBubble=!0,t.stopPropagation()}optionsData={},optionsData.HotKeys={};var last_idle_check=0,idle_checker_started=!1;function start_idle_checker(){if(0==last_idle_check&&!idle_checker_started){var e=parseInt(lpGetPref("idleLogoffVal",0));lpdbg("idle","starting idle checker, idleLogoffVal is "+lpGetPref("idleLogoffVal",0)),e>0&&(last_idle_check=lp_get_gmt_timestamp(),idle_checker_started=!0,setTimeout(function(){idle_checker()},1e4))}}var last_active_time=0,enable_native_idle=!0;function idle_checker(){var e=parseInt(lpGetPref("idleLogoffVal",0));if(lpdbg("idle","checking idle, idleLogoffVal is "+lpGetPref("idleLogoffVal",0)),e>0){var t=60*e,o=function(o){var s=!1,a=lp_get_gmt_timestamp();"active"==o?last_active_time=lp_get_gmt_timestamp():"locked"==o?s=t<a-last_active_time:"idle"==o&&(s=!0);var r=!0;0!=last_idle_check&&0!=t&&(s||t<a-last_idle_check)&&(console_log("IDLE CHECKER ISSUING LOGOFF: idleLogoffVal="+e+" isidle="+s+" limit="+t+" currtime="+a+" last_idle_check="+last_idle_check+" state="+o+" last_active_time="+last_active_time),lplogoff_if(),r=!1),r&&(last_idle_check=a)},s=function(e){e?call_binary_function("get_idle_ms",function(e){var s=parseInt(e/1e3);o(t<s?"idle":"active")}):enable_native_idle&&"undefined"!=typeof chrome&&void 0!==chrome.idle&&chrome.idle.queryState(t,o)};have_binary_function("get_idle_ms")?can_check_idle(s):s(!1)}setTimeout(function(){idle_checker()},1e4)}var g_can_check_idle=-1;function can_check_idle(e){-1!=g_can_check_idle?e(!!g_can_check_idle):g_is_linux&&have_binary_function("can_check_idle")?call_binary_function("can_check_idle",function(t){e(!!(g_can_check_idle=t?1:0))}):(g_can_check_idle=1,e(!0))}
//# sourceMappingURL=sourcemaps/prefs.js.map
