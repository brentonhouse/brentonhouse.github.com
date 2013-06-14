function(e,a,g,h,f,c,b,d) {
    
    if(!(f=e.jQuery)||g>f.fn.jquery||h(f)) {
        c=a.createElement("script");
        c.type="text/javascript";
        c.src="http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
        c.onload=c.onreadystatechange=function() {
            if(!b && (!(d=this.readyState) || d=="loaded" || d=="complete" )) {
                h((f=e.jQuery).noConflict(1),b=1);
                f(c).remove()}};
        a.documentElement.childNodes[0].appendChild(c);}}( window,document,"1.3.2", function($,L) {
            $('.inherited, .sidebar').remove(); 
            $("div[id^='method-get']").remove();
            $("div[id^='method-set']").remove();  
            $("div[class='doc-contents']").attr('class','doc-contents x-panel-body x-panel-body-default');  
            $("div[class='doc-contents']").attr('style','padding: 20px 8px 20px 5px;');  
            $("div[class='members']").attr('class','members x-panel-body x-panel-body-default'); 
            $('head').append('<link rel="stylesheet" href="resources/css/my.css" type="text/css">');});

// javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://github.brentonhouse.com/resources/appc-print2.js';})();