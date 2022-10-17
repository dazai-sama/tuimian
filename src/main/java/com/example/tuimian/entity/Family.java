package com.example.tuimian.entity;

public class Family
{
    private int u_id;
    private int f_id;
    private String f_name;
    private String f_relation;
    private String f_work;
    private String f_phone;


    public int getF_id() {
        return f_id;
    }

    public void setF_id(int f_id) {
        this.f_id = f_id;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getF_relation() {
        return f_relation;
    }

    public void setF_relation(String f_relation) {
        this.f_relation = f_relation;
    }

    public String getF_work() {
        return f_work;
    }

    public void setF_work(String f_work) {
        this.f_work = f_work;
    }

    public String getF_phone() {
        return f_phone;
    }

    public void setF_phone(String f_phone) {
        this.f_phone = f_phone;
    }

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }
}
