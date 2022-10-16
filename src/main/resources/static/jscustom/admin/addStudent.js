require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery', 'bootstrap','bootstrap_validator','bootstrap_validator_CN','jqueryform','layer'],
            function ($) {
                // start 该处定义我们自己的脚本

                // 利用bootstrapValidator进行表单验证
                $('#form_Student').bootstrapValidator({
                    feedbackIcons: {
                        valid: 'fa fa-check',
                        invalid: 'fa fa-close',
                        validating: 'fa fa-refresh'
                    },
                    fields: {
                        name: {
                            validators: {
                                notEmpty: {message: '学生姓名不能为空'},
                                stringLength: {
                                    min: 2,
                                    max: 20,
                                    message: '学生姓名长度在2-20个汉字范围内'
                                }
                            }
                        },
                        phone: {
                            validators: {
                                notEmpty: {message: '手机号码不能为空'},
                                regexp: {
                                    regexp: /^[1][3,4,5,7,8][0-9]{9}$/,
                                    message: '手机号码格式错误'
                                }
                            }
                        }

                        // 验证邮箱
                        // contactemail: {
                        //     validators: {
                        //         notEmpty: {message: '邮箱不能为空'},
                        //         threshold: 2, //有2字符以上才发送ajax请求,（input中输入一个字符，插件会向服务器发送一次，设置限制，2字符以上才开始）
                        //         remote: {
                        //             url: '/CompanyModule/validateEmail',
                        //             message: '邮箱已存在'
                        //         },
                        //         emailAddress: {message: '邮箱格式不正确'}
                        //     }
                        // },

                        // 验证实数
                        // totaloutput:{
                        //     notEmpty: {message: '总收入不能为空'},
                        //     number: {message: '格式错误，只能是数字、包括小数点'}
                        // },

                        // 验证url
                        // comurl:{
                        //     notEmpty: {message: '网址不能为空'},
                        //     uri: {message: '网址格式错误'}
                        // }

                    }
                });

                // 异步提交表单
                $('#btn_Submit').bind('click',function (){
                    var bootstrapValidator = $('#form_Student').data('bootstrapValidator'); // 获取表单对象
                    bootstrapValidator.validate(); // 手动触发验证
                    if (bootstrapValidator.isValid()) // 全部验证通过，才能提交表单
                    {
                        var options = {
                            complete: function (data) { // 提交完成执行的操作
                                alert("学生添加成功");
                                var mylay = parent.layer.getFrameIndex(window.name);
                                parent.layer.close(mylay); // 关闭当前窗口页
                            },
                            url: '/admin/submit',
                            dataType: 'json',
                            resetForm: true  // 成功提交后，重置所有的表单元素的值
                        };
                        $('#form_Student').ajaxSubmit(options); // 异步提交
                    }
                });

                // end 该处定义我们自己的脚本
            }
        )
    }

)