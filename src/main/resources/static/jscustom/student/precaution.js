require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom'],
            function ($) {
                //start 该处定义我们自己的脚本


                $('#btn_nextBase').bind('click',function (){
                    window.location.href="/student/baseInfoHtml";
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);