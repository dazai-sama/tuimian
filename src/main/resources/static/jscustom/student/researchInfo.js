require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer','jqueryform'],
            function ($) {
                //start 该处定义我们自己的脚本

                $('#tb_researchInfo').bootstrapTable({
                    url: '/student/findPageResearch',           // 请求后台url
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
                                var pageSize=$('#tb_researchInfo').bootstrapTable('getOptions').pageSize;
                                var pageNumber=$('#tb_researchInfo').bootstrapTable('getOptions').pageNumber;
                                return pageSize * (pageNumber - 1) + index + 1;
                            },
                            align:'center',
                        },
                        {
                            field: 'r_id',
                            title: '科研经历ID',
                            visible: false,
                        },
                        {
                            field: 'r_start',
                            title: '开始时间',
                        },
                        {
                            field: 'r_end',
                            title: '结束时间',
                        },
                        {
                            field: 'r_content',
                            title: '科研内容',
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
                                    editResearch(row.r_id,row.r_start,row.r_end,row.r_content);
                                },
                                'click #delete': function (e, value, row, index) {
                                    deleteResearch(row.r_id);
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
                $('#btn_addResearch').on('click',function (){
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'新增科研经历',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/student/addResearchHtml',
                        end:function (){
                            $('#tb_researchInfo').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                });

                // 修改成员信息
                function editResearch(r_id,r_start,r_end,r_content) {
                    layer.open({
                        type:2,
                        skin:'layui-layer-molv',
                        title:'修改科研经历',
                        shadeClose:true,
                        shade:0.2,
                        maxmin:true,  // 最大化最小化按钮
                        area:['800px','800px'], // 90%
                        content:'/student/modifyResearchHtml',
                        success: function(layero, index){
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                            body.find('#r_id').val(r_id);
                            body.find('#r_start').val(r_start);
                            body.find('#r_end').val(r_end);
                            body.find('#r_content').val(r_content);
                        },
                        end:function (){
                            $('#tb_researchInfo').bootstrapTable('refresh'); // 关闭弹出层时刷新学生列表
                        }
                    });
                }

                // 删除成员信息
                function deleteResearch(r_id) {
                    var r = confirm("请确认删除");
                    if (r == true) {
                        $.ajax({
                            type: 'post',
                            url: '/student/deleteResearch',
                            dataType: 'json',
                            data: {
                                r_id: r_id
                            },
                            success: function (data) { // int
                                if(data==1)
                                {
                                    alert('操作成功');
                                    $('#tb_researchInfo').bootstrapTable('refresh');
                                }
                            }
                        })
                    }
                }

                $('#btn_nextSocial').bind('click',function (){
                    window.location.href="http://localhost:8090/student/socialInfoHtml";
                });

                //end 该处定义我们自己的脚本
            }
        )
    }
);