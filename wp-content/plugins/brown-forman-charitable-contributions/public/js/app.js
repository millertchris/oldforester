!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){function e(t){location.hash="#"+t,history.pushState("",document.title,window.location.pathname+window.location.search)}function n(t){"use strict";alert(t)}function o(){t("body .bfcurtain").remove()}function a(t){"use strict";var e=!0;return"g-recaptcha-failed"!==t&&"g-recaptcha-required"!==t||(o(),n("Please try reCAPTCHA again."),e=!1),e}function i(){"use strict";return t("#bfcd_form #confirm_email").val().trim()!==t("#bfcd_form #email").val().trim()?(t("#bfcd_form #confirm_email").addClass("invalid"),t("#bfcd_form #confirm_email")[0].setCustomValidity("E-mail addresses must match."),!1):(t("#bfcd_form #confirm_email").removeClass("invalid"),t("#bfcd_form #confirm_email")[0].setCustomValidity(""),!0)}function c(e,n,r,o){"use strict";if(function(t){"use strict";return t>=48&&t<=57||t>=96&&t<=105}(n)){var a=e.val();(r&&a>r||a.length===o)&&function(e){"use strict";var n=!1,r=!1;e.closest("fieldset").find("input[type=number]").each((function(o,a){if(n)return t(this).focus(),r=!0,!1;t(this)[0]==e[0]&&(n=!0)})),r||t("#bfcd_form #zip_postal").focus()}(e)}}function f(){var r=function(){"use strict";var e={},n=[];return t.each(t("#bfcd_form").serializeArray(),(function(r,o){if(e[o.name]=o.value,o.name.startsWith("rollup_")){var a=t("label[for=".concat(o.name,"]")).html().replace(" <span>*</span>","");n.push("".concat(a,": ").concat(o.value))}})),t("#bfcd_form").find("input:checkbox:not(:checked)").each((function(){e[t(this).attr("id")]="N"})),e.country_iso_3=e.country,e.description=e.description?e.description+"\n"+n.join("\n"):n.join("\n"),e}();if(!("confirm_email"in r)||i()){if(t("#g_recaptcha").length>0){if(""==t("#g-recaptcha-response").val())return void t("#g_recaptcha").addClass("invalid");t("#g_recaptcha").removeClass("invalid"),r["g-recaptcha-response"]=t("#g-recaptcha-response").val()}t("#bfcd_form .lda-error").hide(),function(){"use strict";var e='<div class="bfcurtain" style="position: fixed;top: 0;left: 0;right: 0;bottom: 0;height: 100%;width: 100%;background-color: black;opacity: .7; z-index: 99;"><div class="bfload" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%); background-color: white; padding: 15px;"><img src="'.concat(plugins_url,'/public/img/bfload.gif"></div></div>');t("body").append(e)}(),t.when(function(e){"use strict";var n=api_url+"contact_us";return t.ajax({url:n,method:"POST",data:e})}(r)).then((function(n){if("false"==n.lda)return t("#bfcd_form .lda-underage").show(),o(),void e("lda_error");a(n)&&(o(),function(){"use strict";var e=t("#bfcd_form #permalink").val();e.indexOf("?")>=0?e+="&success=yes":e+="?success=yes",window.location=e}())})).fail((function(r){if(o(),r.hasOwnProperty("responseJSON")&&"The birth date is not a valid date."==r.responseJSON.birth_date)return t("#bfcd_form .lda-invalid").show(),void e("lda_error");n("There was an error with your submission. Please try again.")}))}}window.bf_g_recaptcha_success=function(){"use strict";jQuery("#g_recaptcha").removeClass("invalid"),jQuery("#bfcd_form [type=submit]").removeProp("disabled")},window.bf_g_recaptcha_expired=function(){"use strict";jQuery("#g_recaptcha").addClass("invalid"),jQuery("#bfcd_form [type=submit]").prop("disabled","disabled")},window.bfcd_g_recaptcha_invisible_callback=function(e){t.ajax({url:ajax_url,method:"POST",data:{action:"webtocase","g-recaptcha-response":e},success:function(t){a(t)&&f()},error:function(t,e){a("g-recaptcha-failed")}})},function(){"use strict";t.ajax({url:api_url+"countries",dataType:"json",type:"GET",success:function(e){var n="",o=t("#bfcd_form #country"),a=function(t){"use strict";return"undefined"!==r(t)&&!1!==t}(o.attr("data-default-iso"))&&""!==o.attr("data-default-iso")?o.attr("data-default-iso"):"US";a=a.toUpperCase(),t.each(e,(function(t,e){e.iso2_code==a?n+="<option value='"+e.iso2_code+"' selected='selected'>"+e.name+"</option>\n":n+="<option value='"+e.iso2_code+"'>"+e.name+"</option>\n"})),o.html(n),function(){"use strict";var e={country_iso_2:["AS","GU","KR","MH","MP","UM","VI","FM","US","BS","GL","KE","PK","PA","PH","PR","SO","TG"],country_iso_3:["ASM","GUM","KOR","MHL","MNP","UMI","VIR","FSM","USA","BHS","GRL","KEN","PAK","PAN","PHL","PRI","SOM","TGO"]};t("#bfcd_form #country").on("change",(function(){var n=t(this).val(),r=3==n.length?"country_iso_3":"country_iso_2",o=e[r].indexOf(n)>0?t('#bfcd_form [data-date-format="ddmmyyyy"]'):t('#bfcd_form [data-date-format="mmddyyyy"]'),a=e[r].indexOf(n)>0?t('#bfcd_form [data-date-format="mmddyyyy"]'):t('#bfcd_form [data-date-format="ddmmyyyy"]');o.is(":disabled")||(a.prop("disabled",""),o.prop("disabled","disabled"),o.find("[type=number]").each((function(){""!=t(this).val()&&a.find("#"+t(this).attr("id")).first().val(t(this).val())})))})).change(),t("#bfcd_form #country").on("selectmenuchange",(function(){var n=t(this).val(),r=3==n.length?"country_iso_3":"country_iso_2",o=e[r].indexOf(n)>0?t('#bfcd_form [data-date-format="ddmmyyyy"]'):t('#bfcd_form [data-date-format="mmddyyyy"]'),a=e[r].indexOf(n)>0?t('#bfcd_form [data-date-format="mmddyyyy"]'):t('#bfcd_form [data-date-format="ddmmyyyy"]');o.is(":disabled")||(a.prop("disabled",""),o.prop("disabled","disabled"),o.find("[type=number]").each((function(){""!=t(this).val()&&a.find("#"+t(this).attr("id")).first().val(t(this).val())})))})).change()}()},complete:function(){t("select").selectmenu("refresh")}})}(),function(){"use strict";if(function(t){"use strict";return"undefined"!==r(t)&&!1!==t}(t("#bfcd_form").attr("data-auto-tab"))&&"false"!==t("#bfcd_form").attr("data-auto-tab")){var e=0;t("#bfcd_form [name=birth_month]").keyup((function(n){e&&clearTimeout(e);var r=t(this);e=setTimeout((function(){c(r,n.which,1,2)}),100)})),t("#bfcd_form [name=birth_day]").keyup((function(n){e&&clearTimeout(e);var r=t(this);e=setTimeout((function(){c(r,n.which,3,2)}),100)})),t("#bfcd_form [name=birth_year]").keyup((function(n){e&&clearTimeout(e);var r=t(this);e=setTimeout((function(){c(r,n.which,null,4)}),100)}))}}(),function(){"use strict";t("#bfcd_form #confirm_email").length>0&&t("#bfcd_form #confirm_email").change((function(){i()}))}(),function(){"use strict";t("#bfcd_form [type=submit]").click((function(e){t("#bfcd_form").addClass("validated")})),t("#bfcd_form").on("submit",(function(t){t.preventDefault(),"enabled"===g_recaptcha_enabled?grecaptcha.execute():f()}))}()}(jQuery)},function(t,e){}]);