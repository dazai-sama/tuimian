package com.example.tuimian.controller;

import com.example.tuimian.mapper.UserMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
public class LoginController {

    @Resource
    UserMapper userMapper;


    @RequestMapping("/login")
    public String login()
    {
        /*
         * 志愿信息列表界面
         * */
        return "/login.html";
    }

    @RequestMapping("/register")
    public String register()
    {
        /*
         * 志愿信息列表界面
         * */
        return "/register.html";
    }

}
