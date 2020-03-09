import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TesterSearchComponent} from './tester-search.component';

describe('TesterSearchComponent', () => {
  let component: TesterSearchComponent;
  let fixture: ComponentFixture<TesterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TesterSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
