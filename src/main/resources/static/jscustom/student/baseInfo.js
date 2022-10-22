require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','jqueryform','jqueryvalidate'],
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


                // 提交表单
                $('#form_baseInfo').bind('submit',function (e) {
                    e.preventDefault();
                    var mydata = $('#form_baseInfo').serialize();
                    $.ajax({
                        type: 'post',
                        url: '/student/baseInfoSubmit',
                        dataType: 'json',
                        data: mydata,
                        success: function (res) {
                            if(res==1){
                                alert("个人信息提交成功");
                                init();
                            }
                        }
                    })
                })


                $('#btn_nextFamily').bind('click',function (){
                    window.location.href="http://localhost:8090/student/familyInfoHtml";
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);