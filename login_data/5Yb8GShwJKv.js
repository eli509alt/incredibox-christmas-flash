var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;/*FB_PKG_DELIM*/

__d("SchedulerFeatureFlags",["gkx"],(function(a,b,c,d,e,f,g){a=c("gkx")("8859");b=!0;d=250;e=5e3;f=1e4;g.enableRequestPaint=a;g.enableSchedulerDebugging=b;g.userBlockingPriorityTimeout=d;g.normalPriorityTimeout=e;g.lowPriorityTimeout=f}),98);
__d("Scheduler-dev.classic",["SchedulerFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("Scheduler-profiling.classic",["SchedulerFeatureFlags"],(function(c,d,e,f,g,h){"use strict";"undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var i=d("SchedulerFeatureFlags").enableRequestPaint;function j(c,d){var e=c.length;c.push(d);a:for(;0<e;){var f=e-1>>>1,g=c[f];if(0<m(g,d))c[f]=d,c[e]=g,e=f;else break a}}function k(c){return 0===c.length?null:c[0]}function l(c){if(0===c.length)return null;var d=c[0],e=c.pop();if(e!==d){c[0]=e;a:for(var f=0,g=c.length,h=g>>>1;f<h;){var i=2*(f+1)-1,j=c[i],k=i+1,l=c[k];if(0>m(j,e))k<g&&0>m(l,j)?(c[f]=l,c[k]=e,f=k):(c[f]=j,c[i]=e,f=i);else if(k<g&&0>m(l,e))c[f]=l,c[k]=e,f=k;else break a}}return d}function m(c,d){var e=c.sortIndex-d.sortIndex;return 0!==e?e:c.id-d.id}h.unstable_now=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var n=performance;h.unstable_now=function(){return n.now()}}else{var o=Date,p=o.now();h.unstable_now=function(){return o.now()-p}}var q=[],r=[],s=1;c=null;var t=3,u=!1,v=!1,w=!1,x=!1,y="function"===typeof setTimeout?setTimeout:null,z="function"===typeof clearTimeout?clearTimeout:null,A="undefined"!==typeof setImmediate?setImmediate:null;function B(c){for(var d=k(r);null!==d;){if(null===d.callback)l(r);else if(d.startTime<=c)l(r),d.sortIndex=d.expirationTime,j(q,d);else break;d=k(r)}}function C(c){w=!1;B(c);if(!v)if(null!==k(q))v=!0,D||(D=!0,J());else{var d=k(r);null!==d&&L(C,d.startTime-c)}}var D=!1,E=-1,F=10,G=-1;function H(){return i&&x?!0:h.unstable_now()-G<F?!1:!0}function I(){i&&(x=!1);if(D){var d=h.unstable_now();G=d;var e=!0;try{a:{v=!1;w&&(w=!1,z(E),E=-1);u=!0;var f=t;try{b:{B(d);for(c=k(q);null!==c&&!(c.expirationTime>d&&H());){var g=c.callback;if("function"===typeof g){c.callback=null;t=c.priorityLevel;g=g(c.expirationTime<=d);d=h.unstable_now();if("function"===typeof g){c.callback=g;B(d);e=!0;break b}c===k(q)&&l(q);B(d)}else l(q);c=k(q)}if(null!==c)e=!0;else{g=k(r);null!==g&&L(C,g.startTime-d);e=!1}}break a}finally{c=null,t=f,u=!1}e=void 0}}finally{e?J():D=!1}}}var J;if("function"===typeof A)J=function(){A(I)};else if("undefined"!==typeof MessageChannel){e=new MessageChannel();var K=e.port2;e.port1.onmessage=I;J=function(){K.postMessage(null)}}else J=function(){y(I,0)};function L(c,d){E=y(function(){c(h.unstable_now())},d)}h.unstable_IdlePriority=5;h.unstable_ImmediatePriority=1;h.unstable_LowPriority=4;h.unstable_NormalPriority=3;h.unstable_Profiling=null;h.unstable_UserBlockingPriority=2;h.unstable_cancelCallback=function(c){c.callback=null};h.unstable_forceFrameRate=function(c){0>c||125<c?!1:F=0<c?Math.floor(1e3/c):10};h.unstable_getCurrentPriorityLevel=function(){return t};h.unstable_next=function(c){switch(t){case 1:case 2:case 3:var d=3;break;default:d=t}var e=t;t=d;try{return c()}finally{t=e}};h.unstable_requestPaint=function(){i&&(x=!0)};h.unstable_runWithPriority=function(c,d){switch(c){case 1:case 2:case 3:case 4:case 5:break;default:c=3}var e=t;t=c;try{return d()}finally{t=e}};h.unstable_scheduleCallback=function(c,d,e){var f=h.unstable_now();"object"===typeof e&&null!==e?(e=e.delay,e="number"===typeof e&&0<e?f+e:f):e=f;switch(c){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}g=e+g;c={id:s++,callback:d,priorityLevel:c,startTime:e,expirationTime:g,sortIndex:-1};e>f?(c.sortIndex=e,j(r,c),null===k(q)&&c===k(r)&&(w?(z(E),E=-1):w=!0,L(C,e-f))):(c.sortIndex=g,j(q,c),v||u||(v=!0,D||(D=!0,J())));return c};h.unstable_shouldYield=H;h.unstable_wrapCallback=function(c){var d=t;return function(){var e=t;t=d;try{return c.apply(this,arguments)}finally{t=e}}};"undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}),null);
__d("SchedulerFb-Internals_DO_NOT_USE",["Scheduler-dev.classic","Scheduler-profiling.classic","ifRequireable","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){"use strict";a.requestAnimationFrame===void 0&&(a.requestAnimationFrame=b("requestAnimationFramePolyfill"));var g;g=b("Scheduler-profiling.classic");e.exports={unstable_ImmediatePriority:g.unstable_ImmediatePriority,unstable_UserBlockingPriority:g.unstable_UserBlockingPriority,unstable_NormalPriority:g.unstable_NormalPriority,unstable_LowPriority:g.unstable_LowPriority,unstable_IdlePriority:g.unstable_IdlePriority,unstable_getCurrentPriorityLevel:g.unstable_getCurrentPriorityLevel,unstable_runWithPriority:g.unstable_runWithPriority,unstable_now:g.unstable_now,unstable_scheduleCallback:function(a,c,d){var e=b("ifRequireable")("TimeSlice",function(a){return a.guard(c,"unstable_scheduleCallback",{propagationType:a.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return c});return g.unstable_scheduleCallback(a,e,d)},unstable_cancelCallback:function(a){return g.unstable_cancelCallback(a)},unstable_wrapCallback:function(a){var c=b("ifRequireable")("TimeSlice",function(b){return b.guard(a,"unstable_wrapCallback",{propagationType:b.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return a});return g.unstable_wrapCallback(c)},unstable_pauseExecution:function(){return g.unstable_pauseExecution()},unstable_continueExecution:function(){return g.unstable_continueExecution()},unstable_shouldYield:g.unstable_shouldYield,unstable_requestPaint:g.unstable_requestPaint,unstable_forceFrameRate:g.unstable_forceFrameRate,unstable_Profiling:g.unstable_Profiling}}),null);
__d("JSScheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";var g={unstable_Idle:(c=b("SchedulerFb-Internals_DO_NOT_USE")).unstable_IdlePriority,unstable_Immediate:c.unstable_ImmediatePriority,unstable_Low:c.unstable_LowPriority,unstable_Normal:c.unstable_NormalPriority,unstable_UserBlocking:c.unstable_UserBlockingPriority},h=!1,i=c.unstable_scheduleCallback,j=c.unstable_cancelCallback,k={cancelCallback:function(a){j(a)},cancelDelayedCallback_DO_NOT_USE:function(a){a=a;return j(a)},defer:function(a){var b=k.getCurrentPriorityLevel();return i(b,a)},deferUserBlockingRunAtCurrentPri_DO_NOT_USE:function(a){var c=k.getCurrentPriorityLevel();return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(c,a)})},getCallbackScheduler:function(){var a=k.getCurrentPriorityLevel();return function(b){return i(a,b)}},getCurrentPriorityLevel:c.unstable_getCurrentPriorityLevel,getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE:function(){var a=k.getCurrentPriorityLevel();return function(c){return i(g.unstable_UserBlocking,function(){b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(a,c)})}},makeSchedulerGlobalEntry:function(c,d,e){c===void 0&&(c=null);d===void 0&&(d=!1);e===void 0&&(e=!1);c!=null&&b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c);d&&k.startEventProfiling();if(e===!0)return;a.ScheduleJSWork=function(a){return function(){for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];h?a.apply(void 0,c):k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function(){h=!0;try{a.apply(void 0,c)}finally{h=!1}})}}},priorities:g,runWithPriority:c.unstable_runWithPriority,runWithPriority_DO_NOT_USE:c.unstable_runWithPriority,scheduleDelayedCallback_DO_NOT_USE:function(a,b,c){a=i(a,c,{delay:b});return a},scheduleImmediatePriCallback:function(a){return i(g.unstable_Immediate,a)},scheduleLoggingPriCallback:function(a){return i(g.unstable_Low,a)},scheduleNormalPriCallback:function(a){return i(g.unstable_Normal,a)},scheduleSpeculativeCallback:function(a){return i(g.unstable_Idle,a)},scheduleUserBlockingPriCallback:function(a){return i(g.unstable_UserBlocking,a)},shouldYield:c.unstable_shouldYield,startEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.startLoggingProfilingEvents;typeof a==="function"&&a()},stopEventProfiling:function(){var a;a=(a=b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling)==null?void 0:a.stopLoggingProfilingEvents;return typeof a==="function"?a():null}};e.exports=k}),null);

}
/*
     FILE ARCHIVED ON 03:08:49 Jan 20, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:31:05 Mar 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.711
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.014
  esindex: 0.009
  cdx.remote: 27.93
  LoadShardBlock: 382.171 (6)
  PetaboxLoader3.datanode: 314.663 (7)
  load_resource: 66.259
  PetaboxLoader3.resolve: 54.06
*/