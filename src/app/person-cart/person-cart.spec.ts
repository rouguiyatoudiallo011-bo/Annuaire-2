import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonCart } from './person-cart';

describe('PersonCart', () => {
  let component: PersonCart;
  let fixture: ComponentFixture<PersonCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonCart],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
