package com.example.tuimian.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.tuimian.entity.User;
import com.example.tuimian.mapper.UserMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Resource
    UserMapper userMapper;

    @RequestMapping("/findPageStuInfo")
    @ResponseBody
    public String findPageStuInfo(@RequestBody(required = false) Map<String,Object> reqMap){
        int pageNum=0;
        int pageSize=10;

        // 调试，输出前端传来的json数据
        for(Map.Entry<String, Object> entry : reqMap.entrySet()){
            String mapKey = entry.getKey();
            Object mapValue = entry.getValue();
            System.out.println(mapKey+":"+mapValue.toString());
        }

        if(reqMap!=null)
        {
            if(reqMap.get("pageNum").toString()!=null) {pageNum=Integer.parseInt(reqMap.get("pageNum").toString());}
            if(reqMap.get("pageSize").toString()!=null) {pageSize=Integer.parseInt(reqMap.get("pageSize").toString());}
        }

        int offset = pageNum * pageSize;
        List<User> userData = userMapper.findByPage(offset,pageSize);
        int total = userMapper.countUser();

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);

        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/listStuInfo")
    public String listStudent()
    {
        // 返回
        return "/admin/listStuInfo.html";
    }

    @RequestMapping("/addStudentHtml")
    public String addStudentHtml()
    {
        // 返回
        return "/admin/addStudent.html";
    }
}
