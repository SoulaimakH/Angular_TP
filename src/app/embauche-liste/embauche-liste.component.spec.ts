import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaucheListeComponent } from './embauche-liste.component';

describe('EmbaucheListeComponent', () => {
  let component: EmbaucheListeComponent;
  let fixture: ComponentFixture<EmbaucheListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbaucheListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbaucheListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
