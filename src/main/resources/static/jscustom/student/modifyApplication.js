require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery', 'bootstrap','bootstrap_validator','bootstrap_validator_CN','jqueryform','layer'],
            function ($) {
                // start 该处定义我们自己的脚本

                // 利用bootstrapValidator进行表单验证
                $('#form_modifyApplication').bootstrapValidator({
                    feedbackIcons: {
                        valid: 'fa fa-check',
                        invalid: 'fa fa-close',
                        validating: 'fa fa-refresh'
                    },
                });

                // 异步提交表单
                $('#btn_modifyApplication').bind('click',function (){
                    var bootstrapValidator = $('#form_modifyApplication').data('bootstrapValidator'); // 获取表单对象
                    bootstrapValidator.validate(); // 手动触发验证
                    if (bootstrapValidator.isValid()) // 全部验证通过，才能提交表单
                    {
                        var options = {
                            success: function (data) { // 提交完成执行的操作
                                if(data==1)
                                {
                                    alert("志愿信息修改成功");
                                    var mylay = parent.layer.getFrameIndex(window.name);
                                    parent.layer.close(mylay); // 关闭当前窗口页
                                }
                                else{
                                    alert("操作失败，你已经提交该志愿，无法更改");
                                }

                            },
                            url: '/student/modifyApplication',
                            dataType: 'json',
                            resetForm: true  // 成功提交后，重置所有的表单元素的值
                        };
                        $('#form_modifyApplication').ajaxSubmit(options); // 异步提交
                    }
                });

                // end 该处定义我们自己的脚本
            }
        )
    }

)