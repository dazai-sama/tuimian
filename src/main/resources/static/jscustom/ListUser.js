
$(function()
{
    // 数据显示列表
    $('#tb_stu').bootstrapTable({
        url: '/findPage',
        method: 'post',
        striped: true,             // 是否显示行间隔色
        cache: false,               // 是否使用缓存
        pagination: true,           //
        sortable: true,             //
        sortOrder: "asc",           //
        sidePagination: "server",   //
        pageNumber: 1,              //
        pageSize: 10,               //







    })
});