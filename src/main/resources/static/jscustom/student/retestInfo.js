require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer','jqueryform'],
            function ($) {
                //start 该处定义我们自己的脚本

                $('#tb_retestInfo').bootstrapTable({
                    url: '/student/findPageRetest',           // 请求后台url
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
                                var pageSize=$('#tb_retestInfo').bootstrapTable('getOptions').pageSize;
                                var pageNumber=$('#tb_retestInfo').bootstrapTable('getOptions').pageNumber;
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
                                if(value == 1) {newvalue = '<span class="badge badge-success">复试通过，请选择是否接受拟录取通知</span>';}
                                else if(value == 0){newvalue = '<span class="badge badge-warning">复试不通过</span>';}
                                else {newvalue = '<span class="badge badge-secondary">未进行复试</span>';}
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
                                'click #acretest': function (e, value, row, index) {
                                    acceptRetest(row.a_id);
                                },
                                'click #reretest': function (e, value, row, index) {
                                    refuseRetest(row.a_id);
                                },
                            },
                            formatter:function (value, row, index){
                                var result = "";
                                result += '<button id="acretest" class="btn btn-info btn-sm btn-success">接受复试</button>';
                                result += '<button id="reretest" class="btn btn-info btn-sm btn-danger" style="margin-left:10px;">拒绝复试</button>';
                                return result;
                            }
                        },
                    ]
                });


                // 接受复试
                function acceptRetest(a_id) {
                    var r = confirm("请确认提交");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/student/acceptRetest',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_retestInfo').bootstrapTable('refresh');
                                }
                                else if(data==2){
                                    alert('操作失败，未收到复试通知');
                                }
                                else {
                                    alert('操作失败，已进行过选择');
                                }
                            }
                        })
                    }
                }

                // 拒绝复试
                function refuseRetest(a_id) {
                    var r = confirm("请确认提交");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/student/refuseRetest',
                            dataType: 'json',
                            data: {
                                a_id: a_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_retestInfo').bootstrapTable('refresh');
                                }
                                else if(data==2){
                                    alert('操作失败，未收到复试通知');
                                }
                                else {
                                    alert('操作失败，已进行过选择');
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