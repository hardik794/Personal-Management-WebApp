package com.management.Life_Routine.services;

import com.management.Life_Routine.models.MoneyRecord;
import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserNotes;

import java.util.Set;

public interface MoneyService {

    public MoneyRecord addRecord(MoneyRecord moneyRecord);
    public MoneyRecord updateRecord(MoneyRecord moneyRecord);
    public void deleteRecord(Long moneyRecordId);

    public Set<MoneyRecord> getUserRecord(User user);
}
