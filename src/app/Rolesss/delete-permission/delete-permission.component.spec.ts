import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePermissionComponent } from './delete-permission.component';

describe('DeletePermissionComponent', () => {
  let component: DeletePermissionComponent;
  let fixture: ComponentFixture<DeletePermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePermissionComponent]
    });
    fixture = TestBed.createComponent(DeletePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
