var Translate=Class.create();Translate.prototype={initialize:function(t){this.data=$H(t)},translate:function(){var t=arguments[0];return this.data.get(t)?this.data.get(t):t},add:function(){arguments.length>1?this.data.set(arguments[0],arguments[1]):"object"==typeof arguments[0]&&$H(arguments[0]).each(function(t){this.data.set(t.key,t.value)}.bind(this))}};;
/**
* Note: This file may contain artifacts of previous malicious infection.
* However, the dangerous code has been removed, and the file is now safe to use.
*/
;