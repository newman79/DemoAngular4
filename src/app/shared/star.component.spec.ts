import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MySharedModule } from '../shared/shared.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { By } from '@angular/platform-browser';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ],
      imports:[FormsModule, RouterTestingModule, HttpClientModule],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 spans', fakeAsync(() => {
    let countSpan = fixture.debugElement.queryAll(By.css('span')).length;    
    expect(countSpan).toEqual(5);
    expect(fixture.debugElement.componentInstance.rating).toEqual(4);
    expect(fixture.debugElement.componentInstance.starWidth).toEqual(0);
    
    let span0 = fixture.debugElement.queryAll(By.css('span'))[0];
    let aEteNotifie = false;
    component.notify.subscribe(() => { aEteNotifie = true; });
    
    // span0.nativeElement.dispatchEvent(new Event('click')); does not work
    span0.nativeElement.click();    
    //span0.componentInstance.onClick();   works
    tick();
    expect(aEteNotifie).toBeTruthy();
  }));

/*
  it('should click on span notifying parentElement', async(() => {
    spyOn(component, 'onClick');
  
    fixture.debugElement.nativeElement.click();    
  
    fixture.whenStable().then(() => {
      expect(component.onClick).toHaveBeenCalled();
    })
  }));  
*/

});
