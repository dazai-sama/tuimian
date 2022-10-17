package com.example.tuimian.controller;

import com.example.tuimian.mapper.UserMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
@RequestMapping("/student")
public class StudentController {

    @Resource
    UserMapper userMapper;

    @RequestMapping("/precautionHtml")
    public String precautionHtml()
    {
        /*
         * 学生注意事项界面
         * */
        System.out.println("/student/precautionHtml success!");
        return "/student/precaution.html";
    }
}
