package com.management.Life_Routine.models;

import javax.persistence.*;

@Entity
@Table(name = "money_record")
public class MoneyRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long mID;
    private String name;
    private String email;
    private Long money;
    private String type;

    @ManyToOne
    private User usermoney;

    public MoneyRecord() {  
    }

    public MoneyRecord(Long mID, String name, String email, Long money, String type, User user_money) {
        this.mID = mID;
        this.name = name;
        this.email = email;
        this.money = money;
        this.type = type;
        this.usermoney = user_money;
    }

    public Long getmID() {
        return mID;
    }

    public void setmID(Long mID) {
        this.mID = mID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getMoney() {
        return money;
    }

    public void setMoney(Long money) {
        this.money = money;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public User getUser_money() {
        return usermoney;
    }

    public void setUser_money(User user_money) {
        this.usermoney = user_money;
    }
}
