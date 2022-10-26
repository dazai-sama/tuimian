require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery', 'bootstrap','bootstrap_validator','bootstrap_validator_CN','jqueryform','layer'],
            function ($) {
                //start 该处定义我们自己的脚本

                // 利用bootstrapValidator进行表单验证
                $('#form_login').bootstrapValidator({
                    feedbackIcons: {
                        valid: 'fa fa-check',
                        invalid: 'fa fa-close',
                        validating: 'fa fa-refresh'
                    },
                    fields: {
                        u_username: {
                            validators: {
                                notEmpty: {message: '用户名不能为空'},
                                stringLength: {
                                    min: 2,
                                    max: 20,
                                    message: '用户名长度必须大于2位，小于20位'
                                },
                            }
                        },
                        u_password: {
                            validators: {
                                notEmpty: {message: '密码不能为空'},
                                stringLength: {
                                    min: 5,
                                    max: 30,
                                    message: '密码长度必须大于5位，小于30位'
                                },
                            }
                        },
                    }
                });

                // 异步提交表单
                $('#btn_login').bind('click',function (){
                    var bootstrapValidator = $('#form_login').data('bootstrapValidator'); // 获取表单对象
                    bootstrapValidator.validate(); // 手动触发验证
                    if (bootstrapValidator.isValid()) // 全部验证通过，才能提交表单
                    {
                        var options = {
                            success: function (data) { // 提交完成执行的操作
                                if(data==0){
                                    alert("登录成功，你是学生用户");
                                    window.location.href="/student/precautionHtml";
                                }
                                else if(data==1)
                                {
                                    alert("登录成功，你是管理员用户");
                                    window.location.href="/admin/precautionHtml";
                                }
                                else if(data==2){
                                    alert("登录失败，此账号未注册，请先注册");
                                }
                                else {
                                    alert("登录失败，密码错误");
                                }
                            },
                            url: '/login',
                            dataType: 'json',
                            resetForm: true  // 成功提交后，重置所有的表单元素的值
                        };
                        $('#form_login').ajaxSubmit(options); // 异步提交
                    }
                });


                //end 该处定义我们自己的脚本
            }
        )
    }
);