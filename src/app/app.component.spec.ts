import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'taller2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('taller2');
  });

  it(`comprobar que devuelve fizz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.multiples(3)).toEqual('fizz');
  });

  it(`comprobar que devuelve buzz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.multiples(5)).toEqual('buzz');
  });

  it(`comprobar que devuelve fizzbuzz`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.multiples(15)).toEqual('fizzbuzz');
  });

  it(`comprobar que devuelve un numero no multiple 7`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.multiples(7)).toEqual(7);
  });

  it(`comprobar que devuelve un numero no multiplo 11`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.multiples(11)).toEqual(11);
  });

  it(`comprobar que es un anagrama`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('cara','arc a')).toEqual(true);
  });

  it(`comprobar que no es un anagrama`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.anagrama('cara','cara   ')).toEqual('Las cadenas son exactamente iguales, no pueden ser un anagrama');
  });

  it(`comprobar que es un numero primo`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.primo(3)).toEqual(true);
  });

  it(`comprobar que es un fibonacci y itera hasta el numero ingresado`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.fibonacci(5)).toEqual(true);
  });

 
});
