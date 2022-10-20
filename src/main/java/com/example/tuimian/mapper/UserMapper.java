package com.example.tuimian.mapper;

import com.example.tuimian.entity.*;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import javax.transaction.Transactional;
import java.util.List;

public interface UserMapper {

    @Select("select * from user")
    List<User> findAll();

//    @Select("select * from user where name=")
//    List<User> findByName();


    @Update("update application set a_level=#{a_level},a_major=#{a_major},a_studytype=#{a_studytype},a_direction=#{a_direction},a_tutor=#{a_tutor},a_orient=#{a_orient} where a_id=#{a_id}")
    @Transactional
    //void updateById(int id,String name,String address,int age,String sex,String phone);
    void updateById(Application application);

    @Delete("delete from `user` where id=#{id}")
    @Transactional
    void deleteById(User user);

    @Select("select * from `user` where id = #{id}")
    User findById(User user);

    // 后台操作表分页查询
    @Select("select * from application,`user` where application.u_id=`user`.u_id limit #{offset},#{pageSize}")
    List<Display> findByPage(int offset, int pageSize);

    @Select("select count(a_id) from application")
    int countApplication();

    // 录取名单表
    @Select("select * from application,`user` where application.u_id=`user`.u_id and a_admit=1 limit #{offset},#{pageSize}")
    List<Display> findByPageAdmit(int offset, int pageSize);
    @Select("select count(a_id) from application where a_admit=1")
    int countAdmit();

    // family分页查询
    @Select("select * from family where family.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Family> findByPageFamily(int offset, int pageSize,int u_id);

    @Select("select count(f_id) from family where family.u_id=#{u_id}")
    int countFamily(int u_id);

    // prize表分页查询
    @Select("select * from prize where prize.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Prize> findByPagePrize(int offset, int pageSize, int u_id);

    @Select("select count(p_id) from prize where prize.u_id=#{u_id}")
    int countPrize(int u_id);

    // research分页查询
    @Select("select * from research where research.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Research> findByPageResearch(int offset, int pageSize, int u_id);

    @Select("select count(r_id) from research where research.u_id=#{u_id}")
    int countResearch(int u_id);

    // social分页查询
    @Select("select * from social where social.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Social> findByPageSocial(int offset, int pageSize, int u_id);

    @Select("select count(s_id) from social where social.u_id=#{u_id}")
    int countSocial(int u_id);

    // application表分页查询
    @Select("select * from application where application.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Application> findByPageApplication(int offset, int pageSize, int u_id);

    @Select("select count(a_id) from application where application.u_id=#{u_id}")
    int countApplicationById(int u_id);

    // retest
    @Select("select * from application where application.u_id=#{u_id} and a_check=1 limit #{offset},#{pageSize}")
    List<Application> findByPageRetest(int offset, int pageSize, int u_id);

    @Select("select count(a_id) from application where application.u_id=#{u_id}")
    int countRetestById(int u_id);

    // admit
    @Select("select * from application where application.u_id=#{u_id} and a_retest=1 limit #{offset},#{pageSize}")
    List<Application> findPageAdmit(int offset, int pageSize, int u_id);

    @Select("select count(a_id) from application where application.u_id=#{u_id}")
    int countAdmitById(int u_id);


    // 审核通过，发复试通知
    @Select("select a_submit from application where a_id=#{a_id}")
    int checkSubmit2(int a_id);
    @Select("select a_submit from application where a_id=#{a_id}")
    int checkSubmit(Application application);
    @Update("update application set a_check=1 where a_id=#{a_id}")
    @Transactional
    void checkPass(Application application);

    // 初审不通过
    @Update("update application set a_check=0 where a_id=#{a_id}")
    @Transactional
    void checkFail(Application application);

    // 复试通过，发拟录取通知
    @Select("select a_acretest from application where a_id=#{a_id}")
    int checkRetest(Application application);
    @Update("update application set a_retest=1 where a_id=#{a_id}")
    @Transactional
    void retestPass(Application application);

    // 复试不通过
    @Update("update application set a_retest=0 where a_id=#{a_id}")
    @Transactional
    void retestFail(Application application);

    /*
    * 学生端操作
    * */
    // 提交申请
    @Update("update application set a_submit=1 where a_id=#{a_id}")
    @Transactional
    void submitReview(Application application);

    // 接受复试
    @Select("select a_check from application where a_id=#{a_id}")
    int checkCheckPass(Application application);
    @Update("update application set a_acretest=1 where a_id=#{a_id}")
    @Transactional
    void acceptRetest(Application application);

    // 拒绝复试
    @Update("update application set a_acretest=0 where a_id=#{a_id}")
    @Transactional
    void refuseRetest(Application application);

    // 接受拟录取
    @Select("select a_retest from application where a_id=#{a_id}")
    int checkRetestPass(Application application);
    @Select("select a_acadmit from application where a_id=#{a_id}")
    int checkAdmitAccept(Application application);
    @Select("select count(a_id) from application where u_id=#{u_id} and a_acadmit=1")
    int checkOneApplication(Application application);
    @Update("update application set a_acadmit=1,a_admit=1 where a_id=#{a_id}")
    @Transactional
    void acceptAdmit(Application application);

    // 拒绝拟录取
    @Update("update application set a_acadmit=0 where a_id=#{a_id}")
    @Transactional
    void refuseAdmit(Application application);

    // 验证用户名唯一性
    @Select("select count(u_id) from `user` where u_username=#{u_username}")
    int validateUsername(String u_username);

    // 验证密码是否正确
    @Select("select u_password from `user` where u_username=#{u_username} and u_type=#{u_type}")
    String login(User user);

    // 通过用户名找到用户id
    @Select("select u_id from `user` where u_username=#{u_username}")
    int findIdByName(User user);

    // 通过用户id找到用户身份
    @Select("select u_type from `user` where u_id=#{u_id}")
    int findTypeById(int u_id);

    // 通过id找到学生基本信息
    @Select("select * from `user` where u_id=#{u_id}")
    User findBaseInfo(int u_id);

    // 添加用户信息
    @Update("insert into `user`(u_username,u_password,u_type) values(#{u_username},#{u_password},#{u_type})")
    @Transactional
    void save(User user);

    // 更新个人基本信息
    @Update("update `user` set u_name=#{u_name},u_sex=#{u_sex},u_nationality=#{u_nationality},u_politics=#{u_politics},u_soldier=#{u_soldier},u_idnumber=#{u_idnumber}," +
            "u_birthday=#{u_birthday},u_phone=#{u_phone},u_email=#{u_email},u_location=#{u_location},u_school=#{u_school},u_major=#{u_major},u_grank=#{u_grank},u_srank=#{u_srank}" +
            "where u_id=#{u_id}")
    @Transactional
    void saveBaseInfo(User user);

    // 添加家庭成员
    @Update("insert into `family`(f_name,f_relation,f_work,f_phone,u_id) values(#{f_name},#{f_relation},#{f_work},#{f_phone},#{u_id})")
    @Transactional
    void addFamily(Family family);

    // 修改家庭成员信息
    @Update("update `family` set f_name=#{f_name},f_relation=#{f_relation},f_work=#{f_work},f_phone=#{f_phone} where f_id=#{f_id}")
    @Transactional
    void modifyFamily(Family family);

    // 删除家庭成员信息
    @Delete("delete from `family` where f_id=#{f_id}")
    @Transactional
    void deleteFamily(int f_id);


    // 添加竞赛获奖
    @Update("insert into prize(p_time,p_name,p_level,u_id) values(#{p_time},#{p_name},#{p_level},#{u_id})")
    @Transactional
    void addPrize(Prize prize);

    // 修改竞赛获奖信息
    @Update("update prize set p_time=#{p_time},p_name=#{p_name},p_level=#{p_level} where p_id=#{p_id}")
    @Transactional
    void modifyPrize(Prize prize);

    // 删除竞赛获奖信息
    @Delete("delete from prize where p_id=#{p_id}")
    @Transactional
    void deletePrize(int p_id);


    // 添加科研经历
    @Update("insert into research(r_start,r_end,r_content,u_id) values(#{r_start},#{r_end},#{r_content},#{u_id})")
    @Transactional
    void addResearch(Research research);

    // 修改科研经历信息
    @Update("update research set r_start=#{r_start},r_end=#{r_end},r_content=#{r_content} where r_id=#{r_id}")
    @Transactional
    void modifyResearch(Research research);

    // 删除科研经历信息
    @Delete("delete from research where r_id=#{r_id}")
    @Transactional
    void deleteResearch(int r_id);



    // 添加社会实践
    @Update("insert into social(s_start,s_end,s_content,u_id) values(#{s_start},#{s_end},#{s_content},#{u_id})")
    @Transactional
    void addSocial(Social social);

    // 修改社会实践
    @Update("update social set s_start=#{s_start},s_end=#{s_end},s_content=#{s_content} where s_id=#{s_id}")
    @Transactional
    void modifySocial(Social social);

    // 删除社会实践
    @Delete("delete from social where s_id=#{s_id}")
    @Transactional
    void deleteSocial(int s_id);


    // 添加志愿
    @Update("insert into application(a_level,a_major,a_studytype,a_direction,a_tutor,a_orient,u_id) values(#{a_level},#{a_major},#{a_studytype},#{a_direction},#{a_tutor},#{a_orient},#{u_id})")
    @Transactional
    void addApplication(Application application);

    // 修改志愿
    @Update("update application set a_level=#{a_level},a_major=#{a_major},a_studytype=#{a_studytype},a_direction=#{a_direction},a_tutor=#{a_tutor},a_orient=#{a_orient} where a_id=#{a_id}")
    @Transactional
    void modifyApplication(Application application);

    // 删除志愿
    @Delete("delete from application where a_id=#{a_id}")
    @Transactional
    void deleteApplication(int a_id);

    // 限制填报志愿个数
    @Select("select count(a_id) from application where u_id=#{u_id}")
    int checkCountApplication(Application application);


}
