require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer','jqueryform'],
            function ($) {
                //start 该处定义我们自己的脚本

                $('#tb_applicationInfo').bootstrapTable({
                    url: '/student/findPageApplication',           // 请求后台url
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
                    uniqueId: "a_id",             // 每一行的唯一标识，一般为主键列
                    showToggle: false,          // 是否显示详细视图和列表视图的切换按钮
                    cardView: false,            // 是否显示详细视图
                    detailView: false,          // 是否显示父子表

                    queryParams: function (params) {
                        // 重写参数，这样方便后期增加查询条件
                        var param = {
                            pageSize: params.limit, // 页面大小
                            pageNum: (params.offset / params.limit), // 页码
                        };
                        return param;
                    },
                    columns: [
                        {
                            title: '编号',
                            formatter:function (value,row,index)
                            {
                                var pageSize=$('#tb_applicationInfo').bootstrapTable('getOptions').pageSize;
                                var pageNumber=$('#tb_applicationInfo').bootstrapTable('getOptions').pageNumber;
                                return pageSize * (pageNumber - 1) + index + 1;
                            },
                            align:'center',
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
                                if(value == 1) {newvalue = '<span class="badge badge-success">审核通过，请选择是否接受复试通知</span>';}
                                else if(value == 0){newvalue = '<span class="badge badge-warning">审核不通过</span>';}
                                else {newvalue = '<span class="badge badge-secondary">未审核</span>';}
                                return newvalue;
                            }
                        },
                        {
                            field: 'u_id',
                            title: '学生id',
                            visible: false,
                        },
                        {
                            field: '',
                            title: '操作',
                            events: {
                                'click #edit': function (e, value, row, index) {
                                    editApplication(row.a_id,row.a_level,row.a_major,row.a_studytype,row.a_direction,row.a_tutor,row.a_orient);
                                },
                                'click #delete': function (e, value, row, index) {
                                    deleteApplication(row.a_id);
                                },
                                'click #submit': function (e, value, row, index) {
                                    submitApplication(row.a_id);
                                }
                            },
                            formatter:function (value, row, index){
                                var result = "";
                                result += '<button id="edit" class="btn btn-info btn-sm btn-primary">修改志愿</button>';
                                result += '<button id="delete" class="btn btn-info btn-sm btn-dark" style="margin-left:10px;">删除志愿</button>';
                                result += '<button id="submit" class="btn btn-info btn-sm btn-success" style="margin-left:10px;">提交志愿</button>';
                                return result;
                            }
                        },
                    ]
                });

                // 添加志愿
                $('#btn_addApplication').on('click',function (){
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'新增志愿',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/student/addApplicationHtml',
                        end:function (){
                            $('#tb_applicationInfo').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                });

                // 修改志愿
                function editApplication(a_id,a_level,a_major,a_studytype,a_direction,a_tutor,a_orient) {
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'修改志愿',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/student/modifyApplicationHtml',
                        success: function(layero, index){
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                            body.find('#a_id').val(a_id);
                            body.find('#a_level').val(a_level);
                            body.find('#a_major').val(a_major);
                            body.find('#a_studytype').val(a_studytype);
                            body.find('#a_direction').val(a_direction);
                            body.find('#a_tutor').val(a_tutor);
                            body.find('#a_orient').val(a_orient);
                        },
                        end:function (){
                            $('#tb_applicationInfo').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                }

                // 删除志愿
                function deleteApplication(a_id) {
                    var r = confirm("请确认删除");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/student/deleteApplication',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_applicationInfo').bootstrapTable('refresh');
                                }
                                else{
                                    alert('操作失败，此志愿已提交，无法更改');
                                }
                            }
                        })
                    }
                }

                // 提交志愿
                function submitApplication(a_id) {
                    var r = confirm("请确认提交，提交之后无法此志愿无法更改");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/student/submitApplication',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_applicationInfo').bootstrapTable('refresh');
                                }
                                else {
                                    alert('操作失败，你已经提交此志愿，请不要重复提交');
                                }
                            }
                        })
                    }
                }



                //end 该处定义我们自己的脚本
            }
        )
    }
);