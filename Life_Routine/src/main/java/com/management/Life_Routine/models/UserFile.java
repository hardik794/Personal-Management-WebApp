package com.management.Life_Routine.models;

import javax.persistence.*;

@Entity
@Table(name = "user_files")
public class UserFile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long fId;
    private String FileName;
    private String Files;
    private String Caterogy;

    @ManyToOne
    private User users;


    public UserFile() {
    }

    public Long getfId() {
        return fId;
    }

    public void setfId(Long fId) {
        this.fId = fId;
    }

    public String getFiles() {
        return Files;
    }

    public void setFiles(String files) {
        Files = files;
    }

    public String getCaterogy() {
        return Caterogy;
    }

    public void setCaterogy(String caterogy) {
        Caterogy = caterogy;
    }

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
    }

    public String getFileName() {   
        return FileName;
    }

    public void setFileName(String fileName) {
        FileName = fileName;
    }
}
