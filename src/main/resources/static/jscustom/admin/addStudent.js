require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap3','bootstrap_validator','bootstrap_validator_CN','jqueryform'],
            function ($) {
                // start 该处定义我们自己的脚本

                // 利用bootstrapvalidator进行表单验证
                $('#form_Stu').bootstrapValidator(

                );

                // 异步提交表单
                $('#btn_Save').bind('click',function (){

                });

                // end 该处定义我们自己的脚本
            }

        )
    }

)