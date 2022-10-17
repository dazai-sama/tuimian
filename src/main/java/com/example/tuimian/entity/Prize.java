package com.example.tuimian.entity;

public class Prize
{
    private int u_id;
    private int p_id;
    private String p_time;
    private String p_name;
    private String p_level;

    public int getP_id() {
        return p_id;
    }

    public void setP_id(int p_id) {
        this.p_id = p_id;
    }

    public String getP_time() {
        return p_time;
    }

    public void setP_time(String p_time) {
        this.p_time = p_time;
    }

    public String getP_name() {
        return p_name;
    }

    public void setP_name(String p_name) {
        this.p_name = p_name;
    }

    public String getP_level() {
        return p_level;
    }

    public void setP_level(String p_level) {
        this.p_level = p_level;
    }

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }
}
