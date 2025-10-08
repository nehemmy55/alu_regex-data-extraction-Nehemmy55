package com.example.demo;

import java.util.Objects;


public class softwareEngineer {
    private Integer id;
    private String name;
    private String techStack;

    public softwareEngineer() {};

    public softwareEngineer(Integer id, String name, String techStack) {
    this.id = id;
    this.name = name;
    this.techStack = techStack;
    }

    public String getName() {
        return name;
    }
    public Integer getId() {
        return id;
    }
    public String getTechStack() {
        return techStack;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        softwareEngineer that = (softwareEngineer) o;
        return Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(techStack, that.techStack);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, techStack);
    }
}
