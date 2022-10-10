package com.example.tuimian.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*
* 测试控制类
* */
@Controller
@RequestMapping("/test")
public class testController
{
    /*
    * public页面跳转
    * */
    @RequestMapping("/showpubpage")
    public String showpubpage()
    {
        return "redirect:/testUse.html";
    }

    /*
    * template页面跳转
    * */
    @RequestMapping("/showtempage")
    public String showtempage()
    {
        return "index.html";
    }

    @RequestMapping("/showpage")
    public String showpage()
    {
        return "index.html";
    }

    @RequestMapping("/index.html")
    public String showindexpage()
    {
        return "index.html";
    }



}
