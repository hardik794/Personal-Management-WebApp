package com.management.Life_Routine.services;

import com.management.Life_Routine.models.User;
import com.management.Life_Routine.models.UserFile;

import java.util.Set;

public interface FilesService {

    public UserFile addFiles(UserFile userFile);
    public void deleteFiles(Long userFileId);

    public Set<UserFile> getallFiles(User users);
}
