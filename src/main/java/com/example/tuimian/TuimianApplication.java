package com.example.tuimian;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.tuimian.mapper")
public class TuimianApplication {

    public static void main(String[] args) {
        SpringApplication.run(TuimianApplication.class, args);
    }

}
