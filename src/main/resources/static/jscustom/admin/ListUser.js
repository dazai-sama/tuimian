require(
    ['/jscustom/globalConfig.js'],
    function(){
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer','jqueryform'],
            function ($)
            {
                // start 该处定义我们自己的脚本

                // 数据显示列表
                $('#tb_stu').bootstrapTable({
                        url: '/admin/findPageStuInfo',           // 请求后台url
                        method: 'post',             // 请求方式
                        class:"table table-bordered table-hover", // 启用bootstrap的表格样式
                        theadClasses:"thead-light", // 表头背景色
                        cache: false,               // 是否使用缓存
                        pagination: true,           // 是否显示分页
                        sortable: true,             // 是否启用排序
                        sortOrder: "asc",           // 排序方式
                        sidePagination: "server",   // 分页方式：server服务端分页，client客户端分页
                        pageNumber: 1,              // 初始化加载第一页，默认第一页
                        pageSize: 10,               // 每页的记录条数
                        pageList: [5,10,20],        // 可供选择的每页的行数
                        search: false,              // 是否显示表格搜索
                        strictSearch: true,         // 默认为false，设置为true启用全匹配搜索，否则为模糊搜索
                        showColumns: false,         // 是否显示所有的列
                        showRefresh: false,         // 是否显示刷新按钮
                        minimumCountColumns: 10,    // 最少允许的列数
                        clickToSelect: true,        // 是否启用点击选中行
                        //height: 500,              // 行高，不设置的话会自动设置
                        uniqueId: "a_id",             // 每一行的唯一标识，一般为主键列
                        showToggle: false,          // 是否显示详细视图和列表视图的切换按钮
                        cardView: false,            // 是否显示详细视图
                        detailView: false,          // 是否显示父子表

                        // 行单击事件
                        // onClickRow:function (row,$element)
                        // {
                        //     var pageSize=$('#tb_stu').bootstrapTable('getOptions').pageSize;
                        //     var pageNumber=$('#tb_stu').bootstrapTable('getOptions').pageNumber;
                        //     var id=pageSize * (pageNumber - 1) + index + 1;
                        //
                        //     var detail = "<h2><strong>志愿"+id+"详细信息</strong></h2>";
                        //     detail+="<p>id:<b>"+row.id+"</b></p>";
                        //     detail+="<p>address:<b>"+row.address+"</b></p>";
                        //     detail+="<p>age:<b>"+row.age+"</b></p>";
                        //     detail+="<p>sex:<b>"+row.sex+"</b></p>";
                        //     detail+="<p>phone:<b>"+row.phone+"</b></p>";
                        //
                        //     // 赋值给页面id为detail_stu的元素
                        //     $("#detail_stu").html(detail);
                        // },

                        // // 根据行中某列的值，动态渲染整行的颜色
                        // rowStyle: function (row,index){
                        //     if(row.a_admit==1)
                        //     {
                        //         return {
                        //             css:{color:'green'}, // 本行文字的颜色（自定义）
                        //             classes:'table-success' // 本行背景色（bootstrap样式）
                        //         };
                        //     }
                        //     else {
                        //         return {};
                        //     }
                        // },

                        queryParams: function (params) {
                            // 重写参数，这样方便后期增加查询条件
                            var param = {
                                pageSize: params.limit, // 页面大小
                                pageNum: (params.offset / params.limit) // 页码
                            };
                            return param;
                        },
                        columns: [
                            {
                                title: '编号',
                                formatter:function (value,row,index)
                                {
                                    var pageSize=$('#tb_stu').bootstrapTable('getOptions').pageSize;
                                    var pageNumber=$('#tb_stu').bootstrapTable('getOptions').pageNumber;
                                    return pageSize * (pageNumber - 1) + index + 1;
                                },
                                align:'center',
                                // width: 80
                            },
                            {
                                field: 'u_id',
                                title: '学生ID',
                                visible: false,
                            },
                            {
                                field: 'u_username',
                                title: '用户名',
                                visible: false,
                            },
                            {
                                field: 'u_phone',
                                title: '手机号',
                                visible: false,
                            },
                            {
                                field: 'u_email',
                                title: '邮箱',
                                visible: false,
                            },
                            {
                                field: 'u_name',
                                title: '姓名',
                            },
                            {
                                field: 'u_sex',
                                title: '性别',
                                visible: false,
                            },
                            {
                                field: 'u_nationality',
                                title: '民族',
                                visible: false,
                            },
                            {
                                field: 'u_soldier',
                                title: '现役军人',
                                visible: false,
                            },
                            {
                                field: 'u_school',
                                title: '本科学校',
                                visible: false,
                            },
                            {
                                field: 'u_major',
                                title: '本科专业',
                                visible: false,
                            },
                            {
                                field: 'u_grank',
                                title: '成绩排名',
                                visible: false,
                                formatter: function indexFormatter(value, row, index)
                                {
                                    newvalue = '<span>'+value*100+'%</span>';
                                    return newvalue;
                                }
                            },
                            {
                                field: 'u_srank',
                                title: '综合排名',
                                visible: false,
                                formatter: function indexFormatter(value, row, index)
                                {
                                    newvalue = '<span>'+value*100+'%</span>';
                                    return newvalue;
                                }
                            },
                            {
                                field: 'u_idnumber',
                                title: '身份证号',
                                visible: false,
                            },
                            {
                                field: 'u_politics',
                                title: '政治面貌',
                                visible: false,
                            },
                            {
                                field: 'u_location',
                                title: '居住地',
                                visible: false,
                            },
                            {
                                field: 'u_birthday',
                                title: '出生日期',
                                visible: false,
                            },
                            {
                                field: 'a_id',
                                title: '志愿ID',
                                visible: false,
                            },
                            {
                                field: 'a_level',
                                title: '申请层次',
                            },
                            {
                                field: 'a_major',
                                title: '申请专业',
                            },
                            {
                                field: 'a_studytype',
                                title: '学习方式',
                            },
                            {
                                field: 'a_direction',
                                title: '研究方向',
                            },
                            {
                                field: 'a_tutor',
                                title: '导师',
                            },
                            {
                                field: 'a_orient',
                                title: '定向就业',
                                visible: false,
                            },
                            {
                                field: 'a_submit',
                                title: '提交状态',
                                formatter: function indexFormatter(value, row, index)
                                {
                                    if(value == 1) {newvalue = '<span class="badge badge-success">已提交</span>';}
                                    else {newvalue = '<span class="badge badge-warning">未提交</span>';}
                                    return newvalue;
                                }
                            },
                            {
                                field: 'a_check',
                                title: '审核状态',
                                formatter: function indexFormatter(value, row, index)
                                {
                                    if(value == 1) {newvalue = '<span class="badge badge-success">审核通过，已发送复试通知</span>';}
                                    else if(value == 0){newvalue = '<span class="badge badge-warning">审核不通过</span>';}
                                    else {newvalue = '<span class="badge badge-secondary">未审核</span>';}
                                    return newvalue;
                                }
                            },
                            {
                                field: 'a_acretest',
                                title: '接受复试状态',
                                formatter: function indexFormatter(value, row, index)
                                {
                                    if(value == 1) {newvalue = '<span class="badge badge-success">接受复试</span>';}
                                    else if(value == 0){newvalue = '<span class="badge badge-warning">拒绝复试</span>';}
                                    else {newvalue = '<span class="badge badge-secondary">待定</span>';}
                                    return newvalue;
                                }
                            },
                            {
                                field: 'a_retest',
                                title: '复试状态',
                                formatter: function indexFormatter(value, row, index)
                                {
                                    if(value == 1) {newvalue = '<span class="badge badge-success">复试通过，已发送拟录取通知</span>';}
                                    else if(value == 0){newvalue = '<span class="badge badge-warning">复试不通过</span>';}
                                    else {newvalue = '<span class="badge badge-secondary">未进行复试</span>';}
                                    return newvalue;
                                }
                            },
                            {
                                field: 'a_acadmit',
                                title: '接受拟录取状态',
                                formatter: function indexFormatter(value, row, index)
                                {
                                    if(value == 1) {newvalue = '<span class="badge badge-success">接受拟录取</span>';}
                                    else if(value == 0){newvalue = '<span class="badge badge-warning">拒绝拟录取</span>';}
                                    else {newvalue = '<span class="badge badge-secondary">待定</span>';}
                                    return newvalue;
                                }
                            },
                            {
                                field: 'a_admit',
                                title: '录取状态',
                                formatter: function indexFormatter(value, row, index)
                                {
                                    if(value == 1) {newvalue = '<span class="badge badge-success">已录取</span>';}
                                    else if(value == 0){newvalue = '<span class="badge badge-warning">未录取</span>';}
                                    else {newvalue = '<span class="badge badge-secondary">待定</span>';}
                                    return newvalue;
                                }
                            },

                            {
                                field: '',
                                title: '管理员操作',
                                events: {
                                    'click #edit': function (e, value, row, index) {
                                        editInfo(row.a_id,row.u_id,row.u_name,row.a_level,row.a_major,row.a_studytype,row.a_direction,row.a_tutor,row.a_orient);
                                    },
                                    'click #lookup': function (e, value, row, index) {
                                        lookupStudent(row.u_id,row.u_name,row.u_sex,row.u_idnumber,row.u_birthday,row.u_location,row.u_nationality,row.u_phone,row.u_email,row.u_school,row.u_major,row.u_grank,row.u_srank,row.u_politics,row.u_soldier);
                                    },
                                    'click #checkpass': function (e, value, row, index) {
                                        checkPass(row.a_id);
                                    },
                                    'click #checkfail': function (e, value, row, index) {
                                        checkFail(row.a_id);
                                    },
                                    'click #retestpass': function (e, value, row, index) {
                                        retestPass(row.a_id);
                                    },
                                    'click #retestfail': function (e, value, row, index) {
                                        retestFail(row.a_id);
                                    },

                                    /*
                                    * 学生端操作 在此测试
                                    * */
                                    // 'click #submitreview': function (e, value, row, index) {
                                    //     submitReview(row.a_id);
                                    // },
                                    // 'click #acretest': function (e, value, row, index) {
                                    //     acceptRetest(row.a_id);
                                    // },
                                    // 'click #reretest': function (e, value, row, index) {
                                    //     refuseRetest(row.a_id);
                                    // },
                                    // 'click #acadmit': function (e, value, row, index) {
                                    //     acceptAdmit(row.a_id,row.u_id);
                                    // },
                                    // 'click #readmit': function (e, value, row, index) {
                                    //     refuseAdmit(row.a_id);
                                    // },

                                },
                                formatter:function (value, row, index){
                                    var result = "";
                                    result += '<button id="edit" class="btn btn-info btn-sm btn-primary">修改志愿信息</button>';
                                    result += '<button id="lookup" class="btn btn-info btn-sm btn-dark" style="margin-left:10px;">查看学生信息</button>';
                                    result += '<button id="checkpass" class="btn btn-info btn-sm btn-success" style="margin-left:10px;">审核通过，发复试通知</button>';
                                    result += '<button id="checkfail" class="btn btn-info btn-sm btn-danger" style="margin-left:10px;">审核不通过</button>';
                                    result += '<button id="retestpass" class="btn btn-info btn-sm btn-success" style="margin-left:10px;">复试通过，发拟录取通知</button>';
                                    result += '<button id="retestfail" class="btn btn-info btn-sm btn-danger" style="margin-left:10px;">复试不通过</button>';

                                    /*
                                    * 学生端操作 在此测试
                                    * */
                                    // result += '<button id="submitreview" class="btn btn-info btn-sm btn-primary" style="margin-left:30px;">提交申请</button>';
                                    // result += '<button id="acretest" class="btn btn-info btn-sm btn-success" style="margin-left:10px;">接受复试</button>';
                                    // result += '<button id="reretest" class="btn btn-info btn-sm btn-danger" style="margin-left:10px;">拒绝复试</button>';
                                    // result += '<button id="acadmit" class="btn btn-info btn-sm btn-success" style="margin-left:10px;">接受拟录取</button>';
                                    // result += '<button id="readmit" class="btn btn-info btn-sm btn-danger" style="margin-left:10px;">拒绝拟录取</button>';
                                    return result;
                                }
                            },
                        ]
                    });

                // 修改志愿信息
                function editInfo(a_id,u_id,u_name,a_level,a_major,a_studytype,a_direction,a_tutor,a_orient) {
                //     $.ajax({
                //         type: 'post',
                //         url: '/admin/modifyStudentHtml',
                //         dataType: 'json',
                //         data: {
                //             id: $('#id').val(),
                //             name: $('#name').val(),
                //             address: $('#address').val(),
                //             age: $('#age').val(),
                //             sex: $('#sex').val(),
                //             phone: $('#phone').val(),
                //         },
                //         success: function (data) {
                //             if (data == "Yes") {
                //                 $('#tb_stu').bootstrapTable('refresh');
                //                 $('#editModal').modal('hide');
                //             }
                //             else {
                //                 alert('修改失败');
                //             }
                //         }
                //     })
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'修改志愿信息',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/admin/modifyStudentHtml',
                        success: function(layero, index){
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                            body.find('#a_id').val(a_id);
                            body.find('#u_id').val(u_id);
                            body.find('#u_name').val(u_name);
                            body.find('#a_level').val(a_level);
                            body.find("#a_major").val(a_major);
                            body.find('#a_studytype').val(a_studytype);
                            body.find('#a_direction').val(a_direction);
                            body.find('#a_tutor').val(a_tutor);
                            body.find('#a_orient').val(a_orient);
                        },
                        end:function (){
                            $('#tb_stu').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                }

                // 查看学生信息
                function lookupStudent(u_id,u_name,u_sex,u_idnumber,u_birthday,u_location,u_nationality,u_phone,u_email,u_school,u_major,u_grank,u_srank,u_politics,u_soldier) {
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'查看学生信息',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/admin/lookupStudentHtml',
                        success: function(layero, index){
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                            body.find('#u_id').val(u_id);
                            body.find('#u_name').val(u_name);
                            body.find('#u_sex').val(u_sex);
                            body.find('#u_idnumber').val(u_idnumber);
                            body.find("#u_birthday").val(u_birthday);
                            body.find('#u_location').val(u_location);
                            body.find('#u_nationality').val(u_nationality);
                            body.find('#u_phone').val(u_phone);
                            body.find('#u_email').val(u_email);
                            body.find('#u_school').val(u_school);
                            body.find('#u_major').val(u_major);
                            body.find('#u_grank').val(u_grank);
                            body.find('#u_srank').val(u_srank);
                            body.find('#u_politics').val(u_politics);
                            body.find('#u_soldier').val(u_soldier);
                        },
                        end:function (){
                            $('#tb_stu').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                }

                // 审核通过，发复试通知
                function checkPass(a_id) {
                    var r = confirm("请确认审核通过，并发送复试通知");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/admin/checkPass',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_stu').bootstrapTable('refresh');
                                }
                                else if(data==2){
                                    alert('操作失败，学生未提交申请');
                                }
                                else{
                                    alert('操作失败，已进行过审核');
                                }
                            }
                        })
                    }
                }

                // 审核不通过
                function checkFail(a_id) {
                    var r = confirm("请确认审核不通过");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/admin/checkFail',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_stu').bootstrapTable('refresh');
                                }
                                else if(data==2){
                                    alert('操作失败，学生未提交申请');
                                }
                                else{
                                    alert('操作失败，已进行过审核');
                                }
                            }
                        })
                    }
                }

                // 复试通过，发拟录取通知
                function retestPass(a_id) {
                    var r = confirm("请确认复试通过，发拟录取通知");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/admin/retestPass',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_stu').bootstrapTable('refresh');
                                }
                                else if(data==2){
                                    alert('操作失败，学生未参加复试');
                                }
                                else {
                                    alert('操作失败，复试结果已经操作过');
                                }
                            }
                        })
                    }
                }

                // 复试不通过
                function retestFail(a_id) {
                    var r = confirm("请确认复试不通过");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/admin/retestFail',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_stu').bootstrapTable('refresh');
                                }
                                else if(data==2){
                                    alert('操作失败，学生未参加复试');
                                }
                                else {
                                    alert('操作失败，复试结果已经操作过');
                                }
                            }
                        })
                    }
                }

                /*
                * 学生端操作 在此测试
                * */

                // // 提交申请
                // function submitReview(a_id) {
                //     var r = confirm("请确认提交");
                //     if (r == true) {
                //         $.ajax({
                //             type: 'post',
                //             url: '/admin/submitReview',
                //             dataType: 'json',
                //             data: {
                //                 a_id: a_id
                //             },
                //             success: function (data) { // boolean
                //                 if(data)
                //                 {
                //                     alert('操作成功');
                //                     $('#tb_stu').bootstrapTable('refresh');
                //                 }
                //                 else{
                //                     alert('操作失败，必填项未填写');
                //                 }
                //             }
                //         })
                //     }
                // }
                //
                // // 接受复试
                // function acceptRetest(a_id) {
                //     var r = confirm("请确认提交");
                //     if (r == true) {
                //         $.ajax({
                //             type: 'post',
                //             url: '/admin/acceptRetest',
                //             dataType: 'json',
                //             data: {
                //                 a_id: a_id
                //             },
                //             success: function (data) { // int
                //                 if(data==1)
                //                 {
                //                     alert('操作成功');
                //                     $('#tb_stu').bootstrapTable('refresh');
                //                 }
                //                 else if(data==2){
                //                     alert('操作失败，未收到复试通知');
                //                 }
                //                 else {
                //                     alert('操作失败，已进行过选择');
                //                 }
                //             }
                //         })
                //     }
                // }
                //
                // // 拒绝复试
                // function refuseRetest(a_id) {
                //     var r = confirm("请确认提交");
                //     if (r == true) {
                //         $.ajax({
                //             type: 'post',
                //             url: '/admin/refuseRetest',
                //             dataType: 'json',
                //             data: {
                //                 a_id: a_id
                //             },
                //             success: function (data) { // int
                //                 if(data==1)
                //                 {
                //                     alert('操作成功');
                //                     $('#tb_stu').bootstrapTable('refresh');
                //                 }
                //                 else if(data==2){
                //                     alert('操作失败，未收到复试通知');
                //                 }
                //                 else {
                //                     alert('操作失败，已进行过选择');
                //                 }
                //             }
                //         })
                //     }
                // }
                //
                // // 接受拟录取
                // function acceptAdmit(a_id,u_id) {
                //     var r = confirm("请确认提交");
                //     if (r == true) {
                //         $.ajax({
                //             type: 'post',
                //             url: '/admin/acceptAdmit',
                //             dataType: 'json',
                //             data: {
                //                 a_id: a_id,
                //                 u_id: u_id
                //             },
                //             success: function (data) { // int
                //                 if(data==1)
                //                 {
                //                     alert('操作成功');
                //                     $('#tb_stu').bootstrapTable('refresh');
                //                 }
                //                 else if(data==2){
                //                     alert('操作失败，未收到拟录取通知');
                //                 }
                //                 else if(data==3){
                //                     alert('操作失败，已进行过选择');
                //                 }
                //                 else{
                //                     alert('操作失败，你已经被其他志愿录取');
                //                 }
                //             }
                //         })
                //     }
                // }
                //
                // // 拒绝拟录取
                // function refuseAdmit(a_id) {
                //     var r = confirm("请确认提交");
                //     if (r == true) {
                //         $.ajax({
                //             type: 'post',
                //             url: '/admin/refuseAdmit',
                //             dataType: 'json',
                //             data: {
                //                 a_id: a_id
                //             },
                //             success: function (data) { // int
                //                 if(data==1)
                //                 {
                //                     alert('操作成功');
                //                     $('#tb_stu').bootstrapTable('refresh');
                //                 }
                //                 else if(data==2){
                //                     alert('操作失败，未收到拟录取通知');
                //                 }
                //                 else{
                //                     alert('操作失败，已进行过选择');
                //                 }
                //             }
                //         })
                //     }
                // }


                // 删除信息
                // function deleteInfo(id) {
                //     var r = confirm("请确认是否要删除此条信息");
                //     if (r == true) {
                //         $.ajax({
                //             type: 'post',
                //             url: '/admin/delete',
                //             dataType: 'json',
                //             data: {
                //                 id: id
                //             },
                //             complete: function () {
                //                 alert('删除成功');
                //                 $('#tb_stu').bootstrapTable('refresh');
                //             }
                //         })
                //     }
                // }

                // 弹出新增学生窗口
                // $('#btn_add').on('click',function (){
                //     layer.open({
                //        type:2,
                //        skin:'layui-layer-molv',
                //        title:'新增学生',
                //        shadeClose:true,
                //        shade:0.2,
                //        maxmin:true,  // 最大化最小化按钮
                //        area:['800px','800px'], // 90%
                //        content:'/admin/addStudentHtml',
                //        end:function (){
                //            $('#tb_stu').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                //        }
                //     });
                // });

                // 异步提交表单
                // $('#delete').bind('click',function (e,value,row,index){
                //     var options = {
                //         complete: function (data) { // 提交完成执行的操作
                //             alert("学生添加成功");
                //             var mylay = parent.layer.getFrameIndex(window.name);
                //             parent.layer.close(mylay); // 关闭当前窗口页
                //         },
                //         url: '/admin/submit',
                //         dataType: 'json',
                //         resetForm: true  // 成功提交后，重置所有的表单元素的值
                //     };
                //     $('#form_Student').ajaxSubmit(options); // 异步提交
                // });

                // 测试bind
                // $('#btn_add').bind('click',function (){
                //     alert("reset");
                // });

                // end 该处定义我们自己的脚本
            }
        )
    }
)


