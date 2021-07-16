package com.management.Life_Routine.services.impl;

import com.management.Life_Routine.models.MoneyRecord;
import com.management.Life_Routine.models.User;
import com.management.Life_Routine.repo.MoneyRepository;
import com.management.Life_Routine.services.MoneyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class MoneyServiceImpl implements MoneyService {

    @Autowired
    private MoneyRepository moneyRepository;

    @Override
    public MoneyRecord addRecord(MoneyRecord moneyRecord) {
        return this.moneyRepository.save(moneyRecord);
    }

    @Override
    public MoneyRecord updateRecord(MoneyRecord moneyRecord) {
        return this.moneyRepository.save(moneyRecord);
    }

    @Override
    public void deleteRecord(Long moneyRecordId) {
        this.moneyRepository.deleteById(moneyRecordId);
    }

    @Override
    public Set<MoneyRecord> getUserRecord(User user) {
        return this.moneyRepository.findByUsermoney(user);
    }
}
