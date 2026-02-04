package com.example.restaurant;

public class Restaurant {
    private Long id;
    private String name;
    private String category;
    private String location;
    private String signature;
    private String description;

    public Restaurant() {

    }

    public Restaurant(Long id, String name, String category, String location, String signature, String description) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.location = location;
        this.signature = signature;
        this.description = description;
    }

    // Getter
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getLocation() {
        return location;
    }

    public String getSignature() {
        return signature;
    }

    public String getDescription() {
        return description;
    }

    // Setter
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}


