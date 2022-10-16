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

    @Update("insert into `user`(name,address,age,sex,phone) values(#{name},#{address},#{age},#{sex},#{phone})")
    @Transactional
    void save(User user);

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

    @Select("select count(f_id) from family")
    int countFamily();

    // prize表分页查询
    @Select("select * from prize where prize.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Prize> findByPagePrize(int offset, int pageSize, int u_id);

    @Select("select count(p_id) from prize")
    int countPrize();

    // research分页查询
    @Select("select * from research where research.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Research> findByPageResearch(int offset, int pageSize, int u_id);

    @Select("select count(r_id) from research")
    int countResearch();

    // social分页查询
    @Select("select * from social where social.u_id=#{u_id} limit #{offset},#{pageSize}")
    List<Social> findByPageSocial(int offset, int pageSize, int u_id);

    @Select("select count(s_id) from social")
    int countSocial();


    // 审核通过，发复试通知
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


}
