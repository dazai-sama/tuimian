require(
    ['/jscustom/globalConfig.js'],
    function(){
        requirejs(
            ['jquery','bootstrap','custom'],
            function($){
                window.location.href="http://localhost:8090/loginHtml";
            }
        )
    }
);