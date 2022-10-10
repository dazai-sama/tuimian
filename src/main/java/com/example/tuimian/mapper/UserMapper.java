package com.example.tuimian.mapper;

import com.example.tuimian.entity.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.data.domain.Page;

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

    @Update("update `user` set name=#{name},address=#{address},age=#{age},sex=#{sex},phone=#{phone} where id=#{id}")
    @Transactional
    void updateById(int id,String name,String address,int age,String sex,String phone);

    @Delete("delete from `user` where id=#{id}")
    @Transactional
    void deleteById(int id);

    @Select("select * from `user` where id = #{id}")
    User findById(int id);

    @Select("select * from `user` limit #{offset},#{pageSize}")
    List<User> findByPage(int offset, int pageSize);

    @Select("select count(id) from `user`")
    int countUser();
}
