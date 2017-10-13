import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitScoreFormComponent } from './git-score-form.component';

describe('GitScoreFormComponent', () => {
  let component: GitScoreFormComponent;
  let fixture: ComponentFixture<GitScoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitScoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitScoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
