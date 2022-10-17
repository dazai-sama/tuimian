require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer','jqueryform'],
            function ($) {
                //start 该处定义我们自己的脚本

                $('#btn_nextBase').bind('click',function (){
                    window.location.href="http://localhost:8090/student/baseInfoHtml";
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);