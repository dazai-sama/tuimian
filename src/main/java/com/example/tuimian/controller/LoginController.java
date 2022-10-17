package com.example.tuimian.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.tuimian.entity.User;
import com.example.tuimian.mapper.UserMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Objects;

@Controller
public class LoginController {

    @Resource
    UserMapper userMapper;


    @RequestMapping("/loginHtml")
    public String loginHtml()
    {
        /*
         * 登录界面
         * */
        return "/login.html";
    }

    @RequestMapping("/registerHtml")
    public String registerHtml()
    {
        /*
         * 注册界面
         * */
        return "/register.html";
    }

    @RequestMapping("/validateUsername")
    @ResponseBody
    public String validateUsername(@RequestParam String u_username)
    {
        /*
         * 验证用户名唯一性，唯一:{"valid":true},不唯一：{"valid"：false}
         * */
        System.out.println("/validateUsername success!");
        boolean flag=true;
        int num=userMapper.validateUsername(u_username);
        if(num==0) flag=true; // 唯一
        else flag=false;
        JSONObject result = new JSONObject();
        result.put("valid", flag);
        return result.toJSONString();
    }



    @RequestMapping("/register")
    @ResponseBody
    public int register(User user)
    {
        /*
         * 注册功能
         * */
        System.out.println("/register success!");
        int num=userMapper.validateUsername(user.getU_username());
        if(num==0){
            userMapper.save(user);
            return 1;
        }
        else{
            return 2;
        }

    }

    @RequestMapping("/login")
    @ResponseBody
    public int login(User user,HttpSession session)
    {
        /*
         * 登录功能
         * */
        System.out.println("/login success!");
        int num=userMapper.validateUsername(user.getU_username());
        String password=userMapper.login(user);
//        System.out.println("num:"+num);
//        System.out.println("password:"+password);
//        System.out.println("user.getU_password():"+user.getU_password());
//        System.out.println(Objects.equals(password, user.getU_password()));
        if(num==1 && Objects.equals(password, user.getU_password())){
            int u_id=userMapper.findIdByName(user);
            int u_type=userMapper.findTypeById(u_id);
            user.setU_id(u_id);
            if(u_type==0){
                session.setAttribute("student",user);
                session.setMaxInactiveInterval(100*60);
                return 0; // 学生用户 用户名存在 密码正确
            }
            else{
                session.setAttribute("admin",user);
                session.setMaxInactiveInterval(100*60);
                return 1; // 管理员用户 用户名存在 密码正确
            }

        }
        else if(num==0){
            return 2; // 用户未注册
        }
        else{
            return 3; // 密码错误
        }
    }

}
