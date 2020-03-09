import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TesterBlockComponent} from './tester-block.component';

describe('TesterBlockComponent', () => {
  let component: TesterBlockComponent;
  let fixture: ComponentFixture<TesterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TesterBlockComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
