import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMaintenanceComponent } from './dialog-maintenance.component';

describe('DialogMaintenanceComponent', () => {
  let component: DialogMaintenanceComponent;
  let fixture: ComponentFixture<DialogMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogMaintenanceComponent]
    });
    fixture = TestBed.createComponent(DialogMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
