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


    @RequestMapping("/findPageStuAdmit")
    @ResponseBody
    public String findPageStuAdmit(@RequestBody(required = false) Map<String,Object> reqMap)
    {
        /*
         * 分页查询社会实践信息
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


//    @RequestMapping("/submit")
//    @ResponseBody
//    public void submit(User user)
//    {
//        System.out.println("/admin/user success!");
//        userMapper.save(user);
//    }

    @RequestMapping("/modifyApplication")
    @ResponseBody
    public void modifyApplication(Application application)
    {
        /*
        * 修改志愿信息
        * */
        System.out.println("/admin/modify success!");
        userMapper.updateById(application);
    }

    @RequestMapping("/checkPass")
    @ResponseBody
    public int checkPass(Application application)
    {
        /*
        * 审核通过，发复试通知
        * */
        System.out.println("/admin/checkPass success!");
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
        System.out.println("/admin/checkFail success!");
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
        System.out.println("/admin/retestPass success!");
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
        System.out.println("/admin/retestFail success!");
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


    /*
    * 学生端操作
    * */
    @RequestMapping("/submitReview")
    @ResponseBody
    public Boolean submitReview(Application application)
    {
        /*
         * 提交申请
         * */
        System.out.println("/admin/submitReview success!");
        userMapper.submitReview(application);
        return true;
    }

    @RequestMapping("/acceptRetest")
    @ResponseBody
    public int acceptRetest(Application application)
    {
        /*
         * 接受复试
         * */
        System.out.println("/admin/acceptRetest success!");
        int tmp1=userMapper.checkCheckPass(application);
        int tmp2=userMapper.checkRetest(application);
        if(tmp1==1 && tmp2==-1){
            userMapper.acceptRetest(application);
            return 1;
        }
        else if(tmp1!=1){
            return 2;
        }
        else {
            return 3;
        }
    }

    @RequestMapping("/refuseRetest")
    @ResponseBody
    public int refuseRetest(Application application)
    {
        /*
         * 拒绝复试
         * */
        System.out.println("/admin/refuseRetest success!");
        int tmp1=userMapper.checkCheckPass(application);
        int tmp2=userMapper.checkRetest(application);
        if(tmp1==1 && tmp2==-1){
            userMapper.refuseRetest(application);
            return 1;
        }
        else if(tmp1!=1){
            return 2;
        }
        else {
            return 3;
        }
    }

    @RequestMapping("/acceptAdmit")
    @ResponseBody
    public int acceptAdmit(Application application)
    {
        /*
         * 接受拟录取
         * */
        System.out.println("/admin/acceptAdmit success!");
        int tmp1=userMapper.checkRetestPass(application);
        int tmp2=userMapper.checkAdmitAccept(application);
        int tmp3=userMapper.checkOneApplication(application);
        if(tmp1==1 && tmp2==-1 && tmp3==0){ // 收到通知 没进行过选择 没被其他志愿录取
            userMapper.acceptAdmit(application);
            return 1;
        }
        else if(tmp1!=1){ // 没收到通知
            return 2;
        }
        else if(tmp2!=-1){ // 进行过选择
            return 3;
        }
        else{
            return 4; // 已经被其他志愿录取
        }
    }

    @RequestMapping("/refuseAdmit")
    @ResponseBody
    public int refuseAdmit(Application application)
    {
        /*
         * 拒绝拟录取
         * */
        System.out.println("/admin/refuseAdmit success!");
        int tmp1=userMapper.checkRetestPass(application);
        int tmp2=userMapper.checkAdmitAccept(application);
        if(tmp1==1 && tmp2==-1){
            userMapper.refuseAdmit(application);
            return 1;
        }
        else if(tmp1!=1){
            return 2;
        }
        else {
            return 3;
        }
    }



//    @RequestMapping("/delete")
//    @ResponseBody
//    public void delete(User user)
//    {
//        System.out.println("/admin/delete success!");
////        System.out.println(user.getId());
////        System.out.println(user.getName());
////        System.out.println(user.getAddress());
////        System.out.println(user.getAge());
////        System.out.println(user.getSex());
////        System.out.println(user.getPhone());
//        userMapper.deleteById(user);
//
//    }


    /*
    * 页面跳转
    * */
    @RequestMapping("/listStuInfo")
    public String listStudent()
    {
        /*
         * 志愿信息列表界面
         * */
        return "/admin/listStuInfo.html";
    }

    @RequestMapping("/addStudentHtml")
    public String addStudentHtml()
    {
        //
        return "/admin/addStudent.html";
    }

    @RequestMapping("/modifyStudentHtml")
    public String modifyStudentHtml()
    {
        /*
         * 修改志愿信息信息界面
         * */
        return "/admin/modifyStudent.html";
    }


    @RequestMapping("/lookupStudentHtml")
    public String lookupStudentHtml()
    {
        /*
         * 查询学生详细信息界面
         * */
        System.out.println("/admin/lookupStudentHtml success!");
        return "/admin/lookupStudent.html";
    }

    @RequestMapping("/ListAdmitHtml")
    public String ListAdmitHtml()
    {
        /*
         * 查询学生详细信息界面
         * */
        System.out.println("/admin/ListAdmitHtml success!");
        return "/admin/ListAdmit.html";
    }

    @RequestMapping("/precautionHtml")
    public String precautionHtml()
    {
        /*
         * 查询学生详细信息界面
         * */
        System.out.println("/admin/precautionHtml success!");
        return "/admin/precaution.html";
    }

}
