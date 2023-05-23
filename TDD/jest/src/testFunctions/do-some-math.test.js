import {sum, substract, multiply, divide} from '../myFunctions/do-some-math';


describe("Math functions test", ()=>{
  it("두 가지 값을 더합니다.",() =>{
    expect(sum(1,1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0,0)).toBe(0);
  })

  it("두 가지 값을 빼줍니다.",() =>{
    expect(substract(2,1)).toBe(1);
    expect(substract()).toBe(0);
    expect(substract(0,0)).toBe(0);
  })

  it("두 가지 값을 곱합니다.",() =>{
    expect(multiply(1,1)).toBe(1);
    expect(multiply()).toBe(0);
    expect(multiply(0,0)).toBe(0);
    expect(multiply(3.1,2)).toBe(6.2);
    expect(multiply(3,2)).toBe(6);
  })

  it("두 가지 값을 나눕니다.",() =>{
    expect(divide(1,1)).toBe(1);
    expect(divide(3,4)).toBe(0.75);
    expect(()=>divide()).toThrowError('0으로 나눌 수 없습니다.');
  })
  /**
    expect(divide()).toBe(0);
    expect(divide(0,0)).toBe(0);
    안되는 이유

  typeof Infinity
  'number'

  0/0
  NaN

  컴퓨터 프로그래밍에서는 어떤 수를 0으로 나누는 경우 오류를 발생시키거나, NaN, 또는 무한대를 반환한다. 컴퓨터 프로그래밍은 A÷B를 A에 B로 몇 번 뺄 수 있느냐로 인식하기 때문이다. 이 경우 그 몫은 무한대가 되며, 나머지는 없다. 하지만 대부분의 프로그램은 계속 0을 빼 무한 루프에 걸리는 것을 방지하기 위해서 처음부터 지정된 값을 반환한다.

  0/3
  0

  3/0
  Infinite

   */
})
