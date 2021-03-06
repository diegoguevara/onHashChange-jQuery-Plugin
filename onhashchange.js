/*!
* @(#) OnHashChange jQuery plugin v1.0.0
* http://www.ritbox.com
*
* Copyright (c) 2011, Diego Guevara
* Dual licensed under the MIT and/or GPL Version 2 licenses.
*
* Creation Date: Feb.03.2011
* Last Update: Feb.03.2011
*
* Usage:
*
* $(window).hashChange(function(){
*   // your code...
* });
*
*/

(function($){
    var _actualHashValue = '';
    $.fn.hashChange = function(hashChangeFunction){
        if ("onhashchange" in window){
            $(window).bind( "hashchange", function(e) {
                hashChangeFunction();
            });
        }
        else{
            _actualHashValue = window.location.hash;
            setInterval ( function(){
                if ( _actualHashValue != window.location.hash){
                    _actualHashValue = window.location.hash;
                    hashChangeFunction();
                }
            },500 );
        }
    }
})(jQuery);
