//package com.example.tuimian.controller;
//
//import com.alibaba.fastjson.JSONObject;
//import com.example.tuimian.entity.User;
//import com.example.tuimian.mapper.UserMapper;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import javax.annotation.Resource;
//import java.util.List;
//import java.util.Map;
//
//@Controller
////@RequestMapping("/user")
//public class testController2 {
//
//    @Resource
//    UserMapper userMapper;
//
//    @RequestMapping("/all")
//    @ResponseBody
//    public List<User> getUser(){
//        return userMapper.findAll();
//    }
//
//    /*
//    * RequestBody传json，有的字段可以为空
//    * */
//    @RequestMapping("/add")
//    @ResponseBody
//    public void addUser(@RequestBody User user){
//        userMapper.save(user);
//    }
//
//    /*
//     * RequestParam传参数，格式： ? id=xx & name=xxx & address=xx ，所有字段都不能为空
//     * */
////    @RequestMapping("/update")
////    @ResponseBody
////    public void updateUser(@RequestParam int id,
////                           @RequestParam String name,
////                           @RequestParam(defaultValue = "null") String address,
////                           @RequestParam(defaultValue = "null") int age,
////                           @RequestParam(defaultValue = "null") String sex,
////                           @RequestParam(defaultValue = "null") String phone){
////        userMapper.updateById(id,name,address,age,sex,phone);
////    }
//
//    @RequestMapping("/delete")
//    @ResponseBody
//    public void deleteUser(@RequestParam int id){
//        userMapper.deleteById(id);
//    }
//
//    @RequestMapping("/find")
//    @ResponseBody
//    public User findById(@RequestParam int id){
//        return userMapper.findById(id);
//    }
//
////    /*
////    * 分页查询
////    * */
////    @RequestMapping("/page")
////    @ResponseBody
////    public String findByPage(@RequestParam(defaultValue = "1") int pageNum,
////                                 @RequestParam(defaultValue = "10") int pageSize){
////        int offset = (pageNum -1) * pageSize;
////        List<User> userData = userMapper.findByPage(offset,pageSize);
////        int total=userMapper.countUser();
////
//////        // 返回值是Page型的写法
//////        Page<User> page=new Page<>();
//////        page.setData(userData);
//////        page.setTotal(total);
//////        page.setPageNum(pageNum);
//////        page.setPageSize(pageSize);
//////        return page;
////
////        // 返回值是string的写法
////        // rows和total这两个属性时为前端bootstrap-table服务的
////        JSONObject result=new JSONObject();
////        result.put("rows",userData);
////        result.put("total",total);
////        return result.toJSONString();
////    }
//
//    // 前端传来的是json数据
//    @RequestMapping("/findPage")
//    @ResponseBody
//    public String findPage(@RequestBody(required = false) Map<String,Object> reqMap){
//        int pageNum=0;
//        int pageSize=10;
//
////        for(Map.Entry<String, Object> entry : reqMap.entrySet()){
////            String mapKey = entry.getKey();
////            Object mapValue = entry.getValue();
////            System.out.println(mapKey+":"+mapValue.toString());
////        }
//
//        if(reqMap!=null)
//        {
//            if(reqMap.get("pageNum").toString()!=null) {pageNum=Integer.parseInt(reqMap.get("pageNum").toString());}
//            if(reqMap.get("pageSize").toString()!=null) {pageSize=Integer.parseInt(reqMap.get("pageSize").toString());}
//        }
//
//        int offset = pageNum * pageSize;
//        List<User> userData = userMapper.findByPage(offset,pageSize);
//        int total = userMapper.countUser();
//
//        // rows和total这两个属性时为前端bootstrap-table服务的
//        JSONObject result=new JSONObject();
//        result.put("rows", userData);
//        result.put("total",total);
//        return result.toJSONString(); // 返回json样式的字符串
//    }
//
//    @RequestMapping("/listStudent")
//    public String listStudent()
//    {
//        return "listStuInfo.html";
//    }
//}
