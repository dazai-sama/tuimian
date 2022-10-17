package com.example.tuimian.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.tuimian.entity.*;
import com.example.tuimian.mapper.UserMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

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

    @RequestMapping("/baseInfoHtml")
    public String baseInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/baseInfoHtml success!");
        return "/student/baseInfo.html";
    }

    @RequestMapping("/familyInfoHtml")
    public String familyInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/familyInfoHtml success!");
        return "/student/familyInfo.html";
    }

    @RequestMapping("/prizeInfoHtml")
    public String prizeInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/prizeInfoHtml success!");
        return "/student/prizeInfo.html";
    }

    @RequestMapping("/researchInfoHtml")
    public String researchInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/researchInfoHtml success!");
        return "/student/researchInfo.html";
    }

    @RequestMapping("/socialInfoHtml")
    public String socialInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/socialInfoHtml success!");
        return "/student/socialInfo.html";
    }

    @RequestMapping("/applicationInfoHtml")
    public String applicationInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/applicationInfoHtml success!");
        return "/student/applicationInfo.html";
    }

    @RequestMapping("/retestInfoHtml")
    public String retestInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/retestInfoHtml success!");
        return "/student/retestInfo.html";
    }

    @RequestMapping("/admitInfoHtml")
    public String admitInfoHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/admitInfoHtml success!");
        return "/student/admitInfo.html";
    }

    @RequestMapping("/addFamilyHtml")
    public String addFamilyHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/addFamilyHtml success!");
        return "/student/addFamily.html";
    }

    @RequestMapping("/addPrizeHtml")
    public String addPrizeHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/addPrizeHtml success!");
        return "/student/addPrize.html";
    }

    @RequestMapping("/addResearchHtml")
    public String addResearchHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/addResearchHtml success!");
        return "/student/addResearch.html";
    }

    @RequestMapping("/addSocialHtml")
    public String addSocialHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/addSocialHtml success!");
        return "/student/addSocial.html";
    }


    @RequestMapping("/modifyFamilyHtml")
    public String modifyFamilyHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/modifyFamilyHtml success!");
        return "/student/modifyFamily.html";
    }

    @RequestMapping("/modifyPrizeHtml")
    public String modifyPrizeHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/modifyPrizeHtml success!");
        return "/student/modifyPrize.html";
    }

    @RequestMapping("/modifyResearchHtml")
    public String modifyResearchHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/modifyResearchHtml success!");
        return "/student/modifyResearch.html";
    }

    @RequestMapping("/modifySocialHtml")
    public String modifySocialHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/modifySocialHtml success!");
        return "/student/modifySocial.html";
    }

    @RequestMapping("/modifyApplicationHtml")
    public String modifyApplicationHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/modifyApplicationHtml success!");
        return "/student/modifyApplication.html";
    }

    @RequestMapping("/addApplicationHtml")
    public String addApplicationHtml()
    {
        /*
         * 学生个人基本信息填写界面
         * */
        System.out.println("/student/addApplicationHtml success!");
        return "/student/addApplication.html";
    }



    /*
    * 返回数据
    * */
    @RequestMapping("/findBaseInfo")
    @ResponseBody
    public User findBaseInfo(HttpSession session)
    {
        /*
         * 学生个人基本信息数据
         * */
        System.out.println("/student/findBaseInfo success!");
        User user = (User) session.getAttribute("student");
        User userData=userMapper.findBaseInfo(user.getU_id());
        return userData;
//        System.out.println("u_id:"+userData.getU_id());
//        System.out.println("u_politics:"+userData.getU_politics());
//        System.out.println("u_soldier:"+userData.getU_soldier());
//        System.out.println("u_school:"+userData.getU_school());
    }



    @RequestMapping("/baseInfoSubmit")
    @ResponseBody
    public int baseInfoSubmit(User user,HttpSession session)
    {
        /*
         * 学生个人基本信息数据
         * */
        System.out.println("/student/baseInfoSubmit success!");
        User tmp = (User) session.getAttribute("student");
        user.setU_id(tmp.getU_id());
        userMapper.saveBaseInfo(user);
        return 1;
    }


    @RequestMapping("/findPageFamily")
    @ResponseBody
    public String findPageFamily(@RequestBody(required = false) Map<String,Object> reqMap,HttpSession session)
    {
        System.out.println("/student/findPageFamily success!");
        User user = (User) session.getAttribute("student");
        int pageNum=0;
        int pageSize=10;

        if(reqMap!=null)
        {
            if(reqMap.get("pageNum").toString()!=null) {pageNum=Integer.parseInt(reqMap.get("pageNum").toString());}
            if(reqMap.get("pageSize").toString()!=null) {pageSize=Integer.parseInt(reqMap.get("pageSize").toString());}
        }

        int offset = pageNum * pageSize;
        List<Family> userData = userMapper.findByPageFamily(offset, pageSize, user.getU_id());
        int total = userMapper.countFamily(user.getU_id());

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);
        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPagePrize")
    @ResponseBody
    public String findPagePrize(@RequestBody(required = false) Map<String,Object> reqMap,HttpSession session)
    {
        System.out.println("/student/findPagePrize success!");
        User user = (User) session.getAttribute("student");
        int pageNum=0;
        int pageSize=10;

        if(reqMap!=null)
        {
            if(reqMap.get("pageNum").toString()!=null) {pageNum=Integer.parseInt(reqMap.get("pageNum").toString());}
            if(reqMap.get("pageSize").toString()!=null) {pageSize=Integer.parseInt(reqMap.get("pageSize").toString());}
        }

        int offset = pageNum * pageSize;
        List<Prize> userData = userMapper.findByPagePrize(offset, pageSize, user.getU_id());
        int total = userMapper.countPrize(user.getU_id());

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);
        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPageResearch")
    @ResponseBody
    public String findPageResearch(@RequestBody(required = false) Map<String,Object> reqMap,HttpSession session)
    {
        System.out.println("/student/findPageResearch success!");
        User user = (User) session.getAttribute("student");
        int pageNum=0;
        int pageSize=10;

        if(reqMap!=null)
        {
            if(reqMap.get("pageNum").toString()!=null) {pageNum=Integer.parseInt(reqMap.get("pageNum").toString());}
            if(reqMap.get("pageSize").toString()!=null) {pageSize=Integer.parseInt(reqMap.get("pageSize").toString());}
        }

        int offset = pageNum * pageSize;
        List<Research> userData = userMapper.findByPageResearch(offset, pageSize, user.getU_id());
        int total = userMapper.countResearch(user.getU_id());

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);
        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPageSocial")
    @ResponseBody
    public String findPageSocial(@RequestBody(required = false) Map<String,Object> reqMap,HttpSession session)
    {
        System.out.println("/student/findPageSocial success!");
        User user = (User) session.getAttribute("student");
        int pageNum=0;
        int pageSize=10;

        if(reqMap!=null)
        {
            if(reqMap.get("pageNum").toString()!=null) {pageNum=Integer.parseInt(reqMap.get("pageNum").toString());}
            if(reqMap.get("pageSize").toString()!=null) {pageSize=Integer.parseInt(reqMap.get("pageSize").toString());}
        }

        int offset = pageNum * pageSize;
        List<Social> userData = userMapper.findByPageSocial(offset, pageSize, user.getU_id());
        int total = userMapper.countSocial(user.getU_id());

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);
        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/findPageApplication")
    @ResponseBody
    public String findPageApplication(@RequestBody(required = false) Map<String,Object> reqMap,HttpSession session)
    {
        System.out.println("/student/findPageApplication success!");
        User user = (User) session.getAttribute("student");
        int pageNum=0;
        int pageSize=10;

        if(reqMap!=null)
        {
            if(reqMap.get("pageNum").toString()!=null) {pageNum=Integer.parseInt(reqMap.get("pageNum").toString());}
            if(reqMap.get("pageSize").toString()!=null) {pageSize=Integer.parseInt(reqMap.get("pageSize").toString());}
        }

        int offset = pageNum * pageSize;
        List<Application> userData = userMapper.findByPageApplication(offset, pageSize, user.getU_id());
        int total = userMapper.countApplicationById(user.getU_id());

        // rows和total这两个属性时为前端bootstrap-table服务的
        JSONObject result=new JSONObject();
        result.put("rows", userData);
        result.put("total",total);
        return result.toJSONString(); // 返回json样式的字符串
    }

    @RequestMapping("/addFamily")
    @ResponseBody
    public int addFamily(Family family,HttpSession session)
    {
        System.out.println("/student/addFamily success!");
        User user = (User) session.getAttribute("student");
        family.setU_id(user.getU_id());
        userMapper.addFamily(family);
        return 1;
    }

    @RequestMapping("/modifyFamily")
    @ResponseBody
    public int modifyFamily(Family family,HttpSession session)
    {
        System.out.println("/student/modifyFamily success!");
        User user = (User) session.getAttribute("student");
        family.setU_id(user.getU_id());
        userMapper.modifyFamily(family);
        return 1;
    }

    @RequestMapping("/deleteFamily")
    @ResponseBody
    public int deleteFamily(@RequestParam int f_id)
    {
        System.out.println("/student/deleteFamily success!");
        userMapper.deleteFamily(f_id);
        return 1;
    }



    @RequestMapping("/addPrize")
    @ResponseBody
    public int addPrize(Prize prize,HttpSession session)
    {
        System.out.println("/student/addPrize success!");
        User user = (User) session.getAttribute("student");
        prize.setU_id(user.getU_id());
        userMapper.addPrize(prize);
        return 1;
    }

    @RequestMapping("/modifyPrize")
    @ResponseBody
    public int modifyPrize(Prize prize,HttpSession session)
    {
        System.out.println("/student/modifyPrize success!");
        User user = (User) session.getAttribute("student");
        prize.setU_id(user.getU_id());
        userMapper.modifyPrize(prize);
        return 1;
    }

    @RequestMapping("/deletePrize")
    @ResponseBody
    public int deletePrize(@RequestParam int p_id)
    {
        System.out.println("/student/deletePrize success!");
        userMapper.deletePrize(p_id);
        return 1;
    }



    @RequestMapping("/addResearch")
    @ResponseBody
    public int addResearch(Research research,HttpSession session)
    {
        System.out.println("/student/addResearch success!");
        User user = (User) session.getAttribute("student");
        research.setU_id(user.getU_id());
        userMapper.addResearch(research);
        return 1;
    }

    @RequestMapping("/modifyResearch")
    @ResponseBody
    public int modifyResearch(Research research,HttpSession session)
    {
        System.out.println("/student/modifyResearch success!");
        User user = (User) session.getAttribute("student");
        research.setU_id(user.getU_id());
        userMapper.modifyResearch(research);
        return 1;
    }

    @RequestMapping("/deleteResearch")
    @ResponseBody
    public int deleteResearch(@RequestParam int r_id)
    {
        System.out.println("/student/deleteResearch success!");
        userMapper.deleteResearch(r_id);
        return 1;
    }



    @RequestMapping("/addSocial")
    @ResponseBody
    public int addSocial(Social social,HttpSession session)
    {
        System.out.println("/student/addSocial success!");
        User user = (User) session.getAttribute("student");
        social.setU_id(user.getU_id());
        userMapper.addSocial(social);
        return 1;
    }

    @RequestMapping("/modifySocial")
    @ResponseBody
    public int modifySocial(Social social,HttpSession session)
    {
        System.out.println("/student/modifySocial success!");
        User user = (User) session.getAttribute("student");
        social.setU_id(user.getU_id());
        userMapper.modifySocial(social);
        return 1;
    }

    @RequestMapping("/deleteSocial")
    @ResponseBody
    public int deleteSocial(@RequestParam int s_id)
    {
        System.out.println("/student/deleteSocial success!");
        userMapper.deleteSocial(s_id);
        return 1;
    }


    @RequestMapping("/addApplication")
    @ResponseBody
    public int addApplication(Application application,HttpSession session)
    {
        System.out.println("/student/addApplication success!");
        User user = (User) session.getAttribute("student");
        application.setU_id(user.getU_id());
        userMapper.addApplication(application);
        return 1;
    }

    @RequestMapping("/modifyApplication")
    @ResponseBody
    public int modifyApplication(Application application,HttpSession session)
    {
        System.out.println("/student/modifyApplication success!");
        User user = (User) session.getAttribute("student");
        application.setU_id(user.getU_id());
        userMapper.modifyApplication(application);
        return 1;
    }

    @RequestMapping("/deleteApplication")
    @ResponseBody
    public int deleteApplication(@RequestParam int a_id)
    {
        System.out.println("/student/deleteApplication success!");
        int tmp=userMapper.checkSubmit2(a_id);
        if(tmp==0){
            userMapper.deleteApplication(a_id);
            return 1;
        }else{
            return 2;
        }
    }

    @RequestMapping("/submitApplication")
    @ResponseBody
    public int submitApplication(Application application)
    {
        /*
         * 提交申请
         * */
        System.out.println("/admin/submitApplication success!");
        int tmp=userMapper.checkSubmit(application);
        if(tmp==0){
            userMapper.submitReview(application);
            return 1;
        }else{
            return 2;
        }
    }


}
