import 'mocha';
import {expect} from 'chai';
import {Racionales} from '../src/ejercicio-clase/Racionales';

const numero1 = new Racionales(15, 3);
const numero2 = new Racionales(2, 5);
const numero3 = new Racionales(15, 0);

describe('Racionales function tests: ', () => {
  it('15/3 simplificado retorna 5/1', () =>{
    expect(numero1.simplificar(numero1)).to.be.equal('5/1');
  });
  it('15/3 + 2/5 = 27/5', () =>{
    expect(numero1.add(numero1, numero2)).to.be.equal('27/5');
  });
  it('15/3 - 2/5 = 23/5', () =>{
    expect((numero1.sub(numero1, numero2))).to.be.equal('23/5');
  });
  it('15/3 * 2/5 = 30/15', () =>{
    expect((numero1.multiply(numero1, numero2))).to.be.equal('30/15');
  });
  it('15/3 / 2/5 = 25/2', () =>{
    expect((numero1.div(numero1, numero2))).to.be.equal('25/2');
  });
  it('15/3 = 3/15', () =>{
    expect((numero1.inverse(numero1))).to.be.equal('3/15');
  });
  it('15/0 should be invalid', () =>{
    expect((numero3.isvalid(numero3))).to.be.false;
  });
  it('15/3 should be valid', () =>{
    expect((numero1.isvalid(numero1))).to.be.true;
  });
});