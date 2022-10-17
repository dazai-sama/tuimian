require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery', 'bootstrap','bootstrap_validator','bootstrap_validator_CN','jqueryform','layer'],
            function ($) {
                //start 该处定义我们自己的脚本

                // 利用bootstrapValidator进行表单验证
                $('#form_addResearch').bootstrapValidator({
                    feedbackIcons: {
                        valid: 'fa fa-check',
                        invalid: 'fa fa-close',
                        validating: 'fa fa-refresh'
                    },
                });

                // 异步提交表单
                $('#btn_submitAddResearch').bind('click',function (){
                    var bootstrapValidator = $('#form_addResearch').data('bootstrapValidator'); // 获取表单对象
                    bootstrapValidator.validate(); // 手动触发验证
                    if (bootstrapValidator.isValid()) // 全部验证通过，才能提交表单
                    {
                        var options = {
                            success: function (data) { // 提交完成执行的操作
                                if(data==1)
                                {
                                    alert("科研经历添加成功");
                                    var mylay = parent.layer.getFrameIndex(window.name);
                                    parent.layer.close(mylay); // 关闭当前窗口页
                                }
                            },
                            url: '/student/addResearch',
                            dataType: 'json',
                            resetForm: true  // 成功提交后，重置所有的表单元素的值
                        };
                        $('#form_addResearch').ajaxSubmit(options); // 异步提交
                    }
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);