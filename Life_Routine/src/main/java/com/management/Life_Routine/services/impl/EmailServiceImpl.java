package com.management.Life_Routine.services.impl;

import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailServiceImpl {


    private final String from;
    private final String host;
    private final Properties properties;

    public EmailServiceImpl() {
        this.from ="hardiksavaliya1010@gmail.com";
        //variable for email
        this.host="smtp.gmail.com";

        //system properties
        this.properties=System.getProperties();

        //host set
        properties.put("mail.smtp.host",host);
        properties.put("mail.smtp.port","465");
        properties.put("mail.smtp.ssl.enable","true");
        properties.put("mail.smtp.auth","true");

    }

    public Boolean sendEmail(String name, String subject, String email, String message){

        boolean f = false;
        String to ="hardiksavaliya1111@gmail.com";

        //get session object
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("hardiksavaliya1010@gmail.com","Hardik@0794");
            }
        });

        session.setDebug(true);

//        compose messsage
        MimeMessage m = new MimeMessage(session);
        try {
            //from email
            m.setFrom(from);

            //message
            m.addRecipients(Message.RecipientType.TO, String.valueOf(new InternetAddress(to)));

            //subject
            m.setSubject(subject);

            //messege
            m.setText(name);
            m.setText(email);
            m.setText("name:" + name + "\nemail:"+email+" \nmessage:"+message);

            //send

            Transport.send(m);
        }catch (Exception e){
            e.printStackTrace();
        }

        return f;

    }
}
