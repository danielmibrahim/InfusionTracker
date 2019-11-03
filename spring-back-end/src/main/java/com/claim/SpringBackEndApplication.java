package com.claim;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages="com.claim")
@SpringBootApplication
public class SpringBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBackEndApplication.class, args);
	}

}
