package com.management.Life_Routine.models;

import javax.persistence.*;

@Entity
@Table(name = "user_notes")
public class UserNotes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long noteId;
    private String Title;

    @Column(length = 10000)
    private String Description;

    private String Caterogy;

    @ManyToOne
    private User user;

    public Long getNoteId() {
        return noteId;
    }

    public void setNoteId(Long noteId) {
        this.noteId = noteId;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getCaterogy() {
        return Caterogy;
    }

    public void setCaterogy(String caterogy) {
        Caterogy = caterogy;
    }
}
