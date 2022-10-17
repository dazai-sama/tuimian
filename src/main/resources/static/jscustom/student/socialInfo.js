require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer','jqueryform'],
            function ($) {
                //start 该处定义我们自己的脚本

                $('#tb_socialInfo').bootstrapTable({
                    url: '/student/findPageSocial',           // 请求后台url
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
                    uniqueId: "u_id",             // 每一行的唯一标识，一般为主键列
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
                                var pageSize=$('#tb_socialInfo').bootstrapTable('getOptions').pageSize;
                                var pageNumber=$('#tb_socialInfo').bootstrapTable('getOptions').pageNumber;
                                return pageSize * (pageNumber - 1) + index + 1;
                            },
                            align:'center',
                        },
                        {
                            field: 's_id',
                            title: '社会实践ID',
                            visible: false,
                        },
                        {
                            field: 's_start',
                            title: '开始时间',
                        },
                        {
                            field: 's_end',
                            title: '结束时间',
                        },
                        {
                            field: 's_content',
                            title: '实践内容',
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
                                    editSocial(row.s_id,row.s_start,row.s_end,row.s_content);
                                },
                                'click #delete': function (e, value, row, index) {
                                    deleteSocial(row.s_id);
                                }
                            },
                            formatter:function (value, row, index){
                                var result = "";
                                result += '<button id="edit" class="btn btn-info btn-sm btn-primary">修改</button>';
                                result += '<button id="delete" class="btn btn-info btn-sm btn-dark" style="margin-left:10px;">删除</button>';
                                return result;
                            }
                        },
                    ]
                });

                // 添加成员
                $('#btn_addSocial').on('click',function (){
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'新增社会实践',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/student/addSocialHtml',
                        end:function (){
                            $('#tb_socialInfo').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                });

                // 修改成员信息
                function editSocial(s_id,s_start,s_end,s_content) {
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'修改社会实践',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/student/modifySocialHtml',
                        success: function(layero, index){
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                            body.find('#s_id').val(s_id);
                            body.find('#s_start').val(s_start);
                            body.find('#s_end').val(s_end);
                            body.find('#s_content').val(s_content);
                        },
                        end:function (){
                            $('#tb_socialInfo').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                }

                // 删除成员信息
                function deleteSocial(s_id) {
                    var r = confirm("请确认删除");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/student/deleteSocial',
                            dataType: 'json',
                            data: {
                                s_id: s_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_socialInfo').bootstrapTable('refresh');
                                }
                            }
                        })
                    }
                }

                $('#btn_nextApp').bind('click',function (){
                    window.location.href="http://localhost:8090/student/applicationInfoHtml";
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);