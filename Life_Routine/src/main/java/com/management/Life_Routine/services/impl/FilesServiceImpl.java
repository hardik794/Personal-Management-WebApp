package com.management.Life_Routine.services.impl;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserFile;
import com.management.Life_Routine.repo.FilesRepository;
import com.management.Life_Routine.services.FilesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class FilesServiceImpl implements FilesService {

    @Autowired
    private FilesRepository filesRepository;

    @Override
    public UserFile addFiles(UserFile userFile) {
        return this.filesRepository.save(userFile);
    }

    @Override
    public void deleteFiles(Long userFileId) {
//        UserFile userFile = new UserFile();
//        userFile.setfId(userFileId);
        this.filesRepository.deleteById(userFileId);
    }

    @Override
    public Set<UserFile> getallFiles(User users) {
        return this.filesRepository.findByUsers(users);
    }

}
