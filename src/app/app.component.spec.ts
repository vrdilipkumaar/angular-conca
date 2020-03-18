import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('NameListComponent', () => {
  let component: NameListComponent;
  let fixture: ComponentFixture<NameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('On click of "Add" button "onAdd" method to have been called', () => {
    spyOn(component, 'onAdd');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.onAdd).toHaveBeenCalled();
  });
  it('Check firstname value is binded to textbox', () => {
    fixture.detectChanges();
    // Add first Name
    const inputElement = fixture.debugElement.query(By.css('#firstName')).nativeElement;
    inputElement.value = 'Dilip';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputElement.value).toEqual('Dilip');
  });
  it('Check lastName value is binded to textbox', () => {
    fixture.detectChanges();
    // Add last name
    const inputElement = fixture.debugElement.query(By.css('#lastName')).nativeElement;
    inputElement.value = 'Kumar';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputElement.value).toEqual('Kumar');
  });
  it('Check lastName value is binded to textbox', () => {
    fixture.detectChanges();
    // Add first Name
    const firstName = fixture.debugElement.query(By.css('#firstName')).nativeElement;
    firstName.value = 'Dilip';
    firstName.dispatchEvent(new Event('input'));
    // Add last name
    const lastName = fixture.debugElement.query(By.css('#lastName')).nativeElement;
    lastName.value = 'Kumar';
    lastName.dispatchEvent(new Event('input'));

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.users.length).toEqual(3);
  });
});
