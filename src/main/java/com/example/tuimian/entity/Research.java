package com.example.tuimian.entity;

public class Research
{
    private int u_id;
    private int r_id;
    private String r_start;
    private String r_end;
    private String r_content;

    public int getR_id() {
        return r_id;
    }

    public void setR_id(int r_id) {
        this.r_id = r_id;
    }

    public String getR_start() {
        return r_start;
    }

    public void setR_start(String r_start) {
        this.r_start = r_start;
    }

    public String getR_end() {
        return r_end;
    }

    public void setR_end(String r_end) {
        this.r_end = r_end;
    }

    public String getR_content() {
        return r_content;
    }

    public void setR_content(String r_content) {
        this.r_content = r_content;
    }

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }
}
