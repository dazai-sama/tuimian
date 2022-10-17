require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','jqueryform'],
            function ($) {
                //start 该处定义我们自己的脚本

                // 获取表单初始数据
                function init() {
                    $.ajax({
                    type: 'post',
                    url: '/student/findBaseInfo',
                    dataType: 'json',
                    success: function (userData) {
                        $('#u_name').val(userData.u_name);
                        $('#u_sex').val(userData.u_sex);
                        $('#u_nationality').val(userData.u_nationality);
                        $('#u_politics').val(userData.u_politics);
                        $('#u_soldier').val(userData.u_soldier);
                        $('#u_idnumber').val(userData.u_idnumber);
                        $('#u_birthday').val(userData.u_birthday);
                        $('#u_phone').val(userData.u_phone);
                        $('#u_email').val(userData.u_email);
                        $('#u_location').val(userData.u_location);
                        $('#u_school').val(userData.u_school);
                        $('#u_major').val(userData.u_major);
                        $('#u_grank').val(userData.u_grank);
                        $('#u_srank').val(userData.u_srank);
                    }
                })}
                init();

                // 表单验证
                // $('#form_baseInfo').bootstrapValidator({
                //     feedbackIcons: {
                //         valid: 'fa fa-check',
                //         invalid: 'fa fa-close',
                //         validating: 'fa fa-refresh'
                //     },
                //     fields: {
                //         u_name: {
                //             validators: {
                //                 notEmpty: {message: '学生姓名不能为空'},
                //                 stringLength: {
                //                     min: 2,
                //                     max: 20,
                //                     message: '学生姓名长度在2-20个汉字范围内'
                //                 }
                //             }
                //         },
                //         u_phone: {
                //             validators: {
                //                 notEmpty: {message: '手机号码不能为空'},
                //                 regexp: {
                //                     regexp: /^[1][3,4,5,7,8][0-9]{9}$/,
                //                     message: '手机号码格式错误'
                //                 }
                //             }
                //         },
                //         u_idnumber: {
                //             validators: {
                //                 notEmpty: {message: '身份证号不能为空'},
                //                 regexp: {
                //                     regexp: /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                //                     message: '身份证号格式错误'
                //                 }
                //             }
                //         },
                //         u_email: {
                //             validators: {
                //                 notEmpty: {message: '邮箱不能为空'},
                //                 emailAddress: {message: '邮箱格式不正确'}
                //             }
                //         },
                //     }
                // });

                // 异步提交表单
                $('#btn_baseSubmit').bind('click',function (){
                    var options = {
                        success: function (data) { // 提交完成执行的操作
                            if(data==1){
                                alert("个人信息提交成功");
                                init();
                            }
                        },
                        url: '/student/baseInfoSubmit',
                        dataType: 'json',
                        resetForm: true  // 成功提交后，重置所有的表单元素的值
                    };
                    $('#form_baseInfo').ajaxSubmit(options); // 异步提交
                });

                $('#btn_nextFamily').bind('click',function (){
                    window.location.href="http://localhost:8090/student/familyInfoHtml";
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);