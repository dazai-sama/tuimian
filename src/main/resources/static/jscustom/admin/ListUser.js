require(
    ['/jscustom/globalConfig.js'],
    function(){
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer'],
            function ($)
            {
                // start 该处定义我们自己的脚本

                // 绑定列表中的修改和删除操作
                window.cellEvents = {
                        'click .modify':function (e,value,row,index){
                            // 执行修改操作
                            alert("点击了修改图标："+row.name);
                        },
                        'click .delete':function (e,value,row,index){
                            // 执行删除操作
                            alert("点击了删除图标："+row.name);
                        }
                    };

                // 数据显示列表
                $('#tb_stu').bootstrapTable({
                        url: '/admin/findPageStuInfo',           // 请求后台url
                        method: 'post',             // 请求方式
                        //striped: true,              // 是否显示行间隔色
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
                        uniqueId: "id",             // 每一行的唯一标识，一般为主键列
                        showToggle: false,          // 是否显示详细视图和列表视图的切换按钮
                        cardView: false,            // 是否显示详细视图
                        detailView: false,          // 是否显示父子表

                        onClickRow:function (row,$element) // 行单击事件
                        {
                            var detail = "<h2><strong>"+row.name+"详细信息</strong></h2>";
                            detail+="<p>id:<b>"+row.id+"</b></p>";
                            detail+="<p>address:<b>"+row.address+"</b></p>";
                            detail+="<p>age:<b>"+row.age+"</b></p>";
                            detail+="<p>sex:<b>"+row.sex+"</b></p>";
                            detail+="<p>phone:<b>"+row.phone+"</b></p>";

                            // 赋值给页面id为detail_stu的元素
                            $("#detail_stu").html(detail);
                        },

                        // rowStyle: function (row,index){  // 根据行中某列的值，动态渲染整行的颜色
                        //     if(row.age>=21)
                        //     {
                        //         return {
                        //             css:{color:'blue'}, // 本行文字的颜色（自定义）
                        //             classes:'table-warning' // 本行背景色（bootstrap样式）
                        //         };
                        //     }
                        //     else if(row.age<21)
                        //     {
                        //         return {
                        //             css:{background:'#DA9111'}  // 本行文字的颜色（自定义）
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
                                align:'center'
                                // width: 80
                            },
                            {
                                field: 'id',
                                title: 'ID',
                                visible: false
                            },
                            {
                                field: 'name',
                                title: '姓名'
                                // align:'center'
                            },
                            {
                                field: 'address',
                                title: '地址'
                                // align:'center'
                            },
                            {
                                field: 'age',
                                title: '年龄'
                                // align:'center'
                            },
                            {
                                field: 'sex',
                                title: '性别',
                                // align:'center',
                                formatter: function indexFormatter(value, row, index) // 利用badge渲染文字
                                {
                                    if(value == "男") {newvalue = '<span class="badge badge-success">'+value+'</span>';}
                                    else {newvalue = '<span class="badge badge-warning">'+value+'</span>';}
                                    return newvalue;
                                }
                            },
                            {
                                field: 'phone',
                                title: '电话'
                                // align:'center'
                            },
                            {
                                field: '',
                                title: '操作',
                                events: cellEvents, // 定义事件名
                                formatter:function (value, row, index){
                                    return '<i class="modify fa fa-edit fa-lg text-warning" title="修改记录"></i>&nbsp;&nbsp;&nbsp;'+'<i class="delete fa fa-close fa-lg text-danger" title="删除记录"></i>';
                                }
                            }
                        ]
                    });

                // 弹出新增公司窗口
                $('#btn_add').on('click',function (){
                    layer.open({
                       type:2,
                       skin:'layui-layer-molv',
                       title:'新增公司',
                       shadeClose:true,
                       shade:0.2,
                       maxmin:false,
                       area:['800px','800px'],
                       content:'/admin/addStudentHtml',
                       end:function (){
                           $('#tb_stu').bootstrapTable('refresh');
                       }
                    });
                });

                // end 该处定义我们自己的脚本
            }
        )
    }
)


