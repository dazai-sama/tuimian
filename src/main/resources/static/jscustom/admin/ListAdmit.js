require(
    ['/jscustom/globalConfig.js'],
    function () {
        requirejs(
            ['jquery','bootstrap','custom','bootstrap_table','bootstrap_table_CN','layer','jqueryform'],
            function ($) {
                //start 该处定义我们自己的脚本

                $('#tb_stuAdmit').bootstrapTable({
                    url: '/admin/findPageStuAdmit',           // 请求后台url
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

                    // 行单击事件
                    onClickRow:function (row,$element)
                    {
                        var detail = "<h2><strong>"+row.u_name+"详细信息</strong></h2>";
                        detail+="<p>手机号:<b>"+row.u_phone+"</b></p>";
                        detail+="<p>本科学校:<b>"+row.u_school+"</b></p>";
                        detail+="<p>本科专业:<b>"+row.u_major+"</b></p>";
                        detail+="<p>录取层次:<b>"+row.a_level+"</b></p>";
                        detail+="<p>录取专业:<b>"+row.a_major+"</b></p>";
                        detail+="<p>学习方式:<b>"+row.a_studytype+"</b></p>";
                        detail+="<p>研究方向:<b>"+row.a_direction+"</b></p>";
                        detail+="<p>导师:<b>"+row.a_tutor+"</b></p>";
                        detail+="<p>定向就业:<b>"+row.a_orient+"</b></p>";

                        // 赋值给页面id为detail_stu的元素
                        $("#detail_stuAdmit").html(detail);
                    },

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
                                var pageSize=$('#tb_stuAdmit').bootstrapTable('getOptions').pageSize;
                                var pageNumber=$('#tb_stuAdmit').bootstrapTable('getOptions').pageNumber;
                                return pageSize * (pageNumber - 1) + index + 1;
                            },
                            align:'center',
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
                            title: '录取层次',
                        },
                        {
                            field: 'a_major',
                            title: '录取专业',
                        },
                        {
                            field: 'a_studytype',
                            title: '学习方式',
                            visible: false,
                        },
                        {
                            field: 'a_direction',
                            title: '研究方向',
                            visible: false,
                        },
                        {
                            field: 'a_tutor',
                            title: '导师',
                            visible: false,
                        },
                        {
                            field: 'a_orient',
                            title: '定向就业',
                            visible: false,
                        },
                        {
                            field: 'a_submit',
                            title: '提交状态',
                            visible: false,
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
                            visible: false,
                            formatter: function indexFormatter(value, row, index)
                            {
                                if(value == 1) {newvalue = '<span class="badge badge-success">审核通过，请选择是否接受复试通知</span>';}
                                else if(value == 0){newvalue = '<span class="badge badge-warning">审核不通过</span>';}
                                else {newvalue = '<span class="badge badge-secondary">未审核</span>';}
                                return newvalue;
                            }
                        },
                        {
                            field: 'a_acretest',
                            title: '接受复试状态',
                            visible: false,
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
                            visible: false,
                            formatter: function indexFormatter(value, row, index)
                            {
                                if(value == 1) {newvalue = '<span class="badge badge-success">复试通过，请选择是否接受拟录取通知</span>';}
                                else if(value == 0){newvalue = '<span class="badge badge-warning">复试不通过</span>';}
                                else {newvalue = '<span class="badge badge-secondary">未进行复试</span>';}
                                return newvalue;
                            }
                        },
                        {
                            field: 'a_acadmit',
                            title: '接受拟录取状态',
                            visible: false,
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
                            visible: false,
                            formatter: function indexFormatter(value, row, index)
                            {
                                if(value == 1) {newvalue = '<span class="badge badge-success">已录取</span>';}
                                else if(value == 0){newvalue = '<span class="badge badge-warning">未录取</span>';}
                                else {newvalue = '<span class="badge badge-secondary">待定</span>';}
                                return newvalue;
                            }
                        },

                    ]
                });


                //end 该处定义我们自己的脚本
            }
        )
    }
);