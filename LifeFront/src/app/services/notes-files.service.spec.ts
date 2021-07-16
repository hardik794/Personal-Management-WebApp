import { TestBed } from '@angular/core/testing';

import { NotesFilesService } from './notes-files.service';

describe('NotesFilesService', () => {
  let service: NotesFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
