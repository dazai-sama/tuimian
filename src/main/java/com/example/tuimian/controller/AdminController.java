package com.example.tuimian.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.tuimian.entity.*;
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


    /*
     * 1.页面跳转
     * */
    @RequestMapping("/listStuInfo")
    public String listStudent()
    {
        /*
         * 志愿信息列表界面
         * */
        return "admin/listStuInfo.html";
    }

    @RequestMapping("/modifyStudentHtml")
    public String modifyStudentHtml()
    {
        /*
         * 修改志愿信息界面
         * */
        return "admin/modifyStudent.html";
    }


    @RequestMapping("/lookupStudentHtml")
    public String lookupStudentHtml()
    {
        /*
         * 查询学生详细信息界面
         * */
        System.out.println("/admin/lookupStudentHtml");
        return "admin/lookupStudent.html";
    }

    @RequestMapping("/ListAdmitHtml")
    public String ListAdmitHtml()
    {
        /*
         * 录取名单界面
         * */
        System.out.println("/admin/ListAdmitHtml");
        return "admin/ListAdmit.html";
    }

    @RequestMapping("/precautionHtml")
    public String precautionHtml()
    {
        /*
         * 管理员注意事项界面
         * */
        System.out.println("/admin/precautionHtml");
        return "admin/precaution.html";
    }



    /*
    * 2.数据处理
    * */
    @RequestMapping("/findPageStuAdmit")
    @ResponseBody
    public String findPageStuAdmit(@RequestBody(required = false) Map<String,Object> reqMap)
    {
        /*
         * 分页查询录取名单信息
         * */
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
        List<Display> userData = userMapper.findByPageAdmit(offset,pageSize);
        int total = userMapper.countAdmit();

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);

        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPageSocial")
    @ResponseBody
    public String findPageSocial(@RequestBody(required = false) Map<String,Object> reqMap)
    {
        /*
         * 分页查询社会实践信息
         * */
        int pageNum=0;
        int pageSize=10;
        int u_id=0;

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
            if(reqMap.get("u_id").toString()!=null) {u_id=Integer.parseInt(reqMap.get("u_id").toString());}
        }

        int offset = pageNum * pageSize;
        List<Social> userData = userMapper.findByPageSocial(offset,pageSize,u_id);
        int total = userMapper.countSocial(u_id);

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);

        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPageResearch")
    @ResponseBody
    public String findPageResearch(@RequestBody(required = false) Map<String,Object> reqMap)
    {
        /*
         * 分页查询科研经历信息
         * */
        int pageNum=0;
        int pageSize=10;
        int u_id=0;

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
            if(reqMap.get("u_id").toString()!=null) {u_id=Integer.parseInt(reqMap.get("u_id").toString());}
        }

        int offset = pageNum * pageSize;
        List<Research> userData = userMapper.findByPageResearch(offset,pageSize,u_id);
        int total = userMapper.countResearch(u_id);

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);

        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPagePrize")
    @ResponseBody
    public String findPagePrize(@RequestBody(required = false) Map<String,Object> reqMap)
    {
        /*
         * 分页查询竞赛获奖信息
         * */
        int pageNum=0;
        int pageSize=10;
        int u_id=0;

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
            if(reqMap.get("u_id").toString()!=null) {u_id=Integer.parseInt(reqMap.get("u_id").toString());}
        }

        int offset = pageNum * pageSize;
        List<Prize> userData = userMapper.findByPagePrize(offset,pageSize,u_id);
        int total = userMapper.countPrize(u_id);

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);

        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPageFamily")
    @ResponseBody
    public String findPageFamily(@RequestBody(required = false) Map<String,Object> reqMap)
    {
        /*
         * 分页查询家庭成员信息
         * */
        int pageNum=0;
        int pageSize=10;
        int u_id=0;

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
            if(reqMap.get("u_id").toString()!=null) {u_id=Integer.parseInt(reqMap.get("u_id").toString());}
        }

        int offset = pageNum * pageSize;
        List<Family> userData = userMapper.findByPageFamily(offset,pageSize,u_id);
        int total = userMapper.countFamily(u_id);

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);

        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPageStuInfo")
    @ResponseBody
    public String findPageStuInfo(@RequestBody(required = false) Map<String,Object> reqMap){
        /*
         * 分页查询志愿信息
         * */
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
        List<Display> userData = userMapper.findByPage(offset,pageSize);
        int total = userMapper.countApplication();

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);

        return result.toJSONString(); // 返回json样式的字符串
    }



    @RequestMapping("/modifyApplication")
    @ResponseBody
    public int modifyApplication(Application application)
    {
        /*
        * 修改志愿信息
        * */
        System.out.println("/admin/modifyApplication");
        int tmp1=userMapper.checkCheckPass(application);
        int tmp2=userMapper.checkSubmit(application);
        if(tmp1==-1 && tmp2==1){
            userMapper.updateById(application);
            return 1;
        }else if(tmp1!=-1){
            return 2;
        }else{
            return 3;
        }
    }

    @RequestMapping("/checkPass")
    @ResponseBody
    public int checkPass(Application application)
    {
        /*
        * 审核通过，发复试通知
        * */
        System.out.println("/admin/checkPass");
        int tmp1=userMapper.checkSubmit(application);
        int tmp2=userMapper.checkCheckPass(application);
        if(tmp1==1 && tmp2==-1) // 已提交并且未审核
        {
            userMapper.checkPass(application);
            return 1;
        }
        else if(tmp1!=1){ // 未提交
            return 2;
        }
        else { // 已审核
            return 3;
        }
    }

    @RequestMapping("/checkFail")
    @ResponseBody
    public int checkFail(Application application)
    {
        /*
         * 审核不通过
         * */
        System.out.println("/admin/checkFail");
        int tmp1=userMapper.checkSubmit(application);
        int tmp2=userMapper.checkCheckPass(application);
        if(tmp1==1 && tmp2==-1) // 已提交并且未审核
        {
            userMapper.checkFail(application);
            return 1;
        }
        else if(tmp1!=1){ // 未提交
            return 2;
        }
        else { // 未审核
            return 3;
        }
    }

    @RequestMapping("/retestPass")
    @ResponseBody
    public int retestPass(Application application)
    {
        /*
         * 复试通过，发拟录取通知
         * */
        System.out.println("/admin/retestPass");
        int tmp1=userMapper.checkRetest(application);
        int tmp2=userMapper.checkRetestPass(application);
        if(tmp1==1 && tmp2==-1) // 已提交并且未审核
        {
            userMapper.retestPass(application);
            return 1;
        }
        else if(tmp1!=1){ // 未提交
            return 2;
        }
        else { // 未审核
            return 3;
        }
    }

    @RequestMapping("/retestFail")
    @ResponseBody
    public int retestFail(Application application)
    {
        /*
         * 复试不通过
         * */
        System.out.println("/admin/retestFail");
        int tmp1=userMapper.checkRetest(application);
        int tmp2=userMapper.checkRetestPass(application);
        if(tmp1==1 && tmp2==-1) // 已提交并且未审核
        {
            userMapper.retestFail(application);
            return 1;
        }
        else if(tmp1!=1){ // 未提交
            return 2;
        }
        else { // 未审核
            return 3;
        }
    }

}
