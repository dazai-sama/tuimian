require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery', 'bootstrap','bootstrap_validator','bootstrap_validator_CN','jqueryform','layer'],
            function ($) {
                //start 该处定义我们自己的脚本

                // 利用bootstrapValidator进行表单验证
                $('#form_register').bootstrapValidator({
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
                                threshold: 2,
                                remote: {
                                    url: '/validateUsername',
                                    message: '用户名已存在'
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
                                // identical: {
                                //     field: 'u_repassword',
                                //     message: '两次输入的密码不相符'
                                // },
                                different: {
                                    field: 'u_username',
                                    message: '不能使用用户名作为密码'
                                }
                            }
                        },
                        u_repassword: {
                            validators: {
                                notEmpty: {
                                    message: '密码不能为空'
                                },
                                identical: {
                                    field: 'u_password',
                                    message: '两次输入的密码不相符'
                                },
                                different: {
                                    field: 'u_username',
                                    message: '不能使用用户名作为密码'
                                }
                            }
                        }
                    }
                });

                // 异步提交表单
                $('#btn_register').bind('click',function (){
                    var bootstrapValidator = $('#form_register').data('bootstrapValidator'); // 获取表单对象
                    bootstrapValidator.validate(); // 手动触发验证
                    if (bootstrapValidator.isValid()) // 全部验证通过，才能提交表单
                    {
                        var options = {
                            success: function (data) { // 提交完成执行的操作
                                if(data==1){
                                    alert("注册成功");
                                }
                                else{
                                    alert("注册失败，用户名已被注册");
                                }
                            },
                            url: '/register',
                            dataType: 'json',
                            resetForm: true  // 成功提交后，重置所有的表单元素的值
                        };
                        $('#form_register').ajaxSubmit(options); // 异步提交
                    }
                });


                //end 该处定义我们自己的脚本
            }
        )
    }
);