require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery', 'bootstrap','bootstrap_validator','bootstrap_validator_CN','jqueryform','layer'],
            function ($) {
                //start 该处定义我们自己的脚本

                // 利用bootstrapValidator进行表单验证
                $('#form_modifyFamily').bootstrapValidator({
                    feedbackIcons: {
                        valid: 'fa fa-check',
                        invalid: 'fa fa-close',
                        validating: 'fa fa-refresh'
                    },
                    fields: {
                        f_name: {
                            validators: {
                                notEmpty: {message: '姓名不能为空'},
                                stringLength: {
                                    min: 2,
                                    max: 20,
                                    message: '学生姓名长度在2-20个汉字范围内'
                                }
                            }
                        },
                        f_phone: {
                            validators: {
                                notEmpty: {message: '手机号码不能为空'},
                                regexp: {
                                    regexp: /^[1][3,4,5,7,8][0-9]{9}$/,
                                    message: '手机号码格式错误'
                                }
                            }
                        }
                    }
                });

                // 异步提交表单
                $('#btn_submitModifyFamily').bind('click',function (){
                    var bootstrapValidator = $('#form_modifyFamily').data('bootstrapValidator'); // 获取表单对象
                    bootstrapValidator.validate(); // 手动触发验证
                    if (bootstrapValidator.isValid()) // 全部验证通过，才能提交表单
                    {
                        var options = {
                            success: function (data) { // 提交完成执行的操作
                                if(data==1)
                                {
                                    alert("家庭成员信息修改成功");
                                    var mylay = parent.layer.getFrameIndex(window.name);
                                    parent.layer.close(mylay); // 关闭当前窗口页
                                }
                            },
                            url: '/student/modifyFamily',
                            dataType: 'json',
                            resetForm: true  // 成功提交后，重置所有的表单元素的值
                        };
                        $('#form_modifyFamily').ajaxSubmit(options); // 异步提交
                    }
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);