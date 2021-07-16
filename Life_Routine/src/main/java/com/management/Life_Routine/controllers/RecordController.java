package com.management.Life_Routine.controllers;

import com.management.Life_Routine.models.MoneyRecord;
import com.management.Life_Routine.models.User;
import com.management.Life_Routine.services.MoneyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/record")
@CrossOrigin("*")
public class RecordController {

    @Autowired
    private MoneyService moneyService;

    //add money record
    @PostMapping("/")
    public ResponseEntity<?> addRecord(@RequestBody MoneyRecord moneyRecord){
        MoneyRecord moneyRecord1 = this.moneyService.addRecord(moneyRecord);
        return ResponseEntity.ok(moneyRecord1);
    }

    //update money record
    @PutMapping("/")
    public MoneyRecord updateRecord(@RequestBody MoneyRecord moneyRecord){
        return this.moneyService.updateRecord(moneyRecord);
    }

    //delete money record
    @DeleteMapping("/{mID}")
    public void deleteRecord(@PathVariable("mID") Long mID){
        this.moneyService.deleteRecord(mID);
    }

    //get money record
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserRecord(@PathVariable("id") Long id){
        User user = new User();
        user.setId(id);
        Set<MoneyRecord> userRecord= this.moneyService.getUserRecord(user);
        return ResponseEntity.ok(userRecord);
    }
}
