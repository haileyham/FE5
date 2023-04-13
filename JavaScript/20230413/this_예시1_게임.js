function attackBeam(){ // 레이저 공격
  this.hp -= 20
}

function attackKnife(){ // 칼 공격
  this.hp -= 5
  // console.log(this); //왜 안되는지 잘 모를때는 찍어보기
}
//호출한 것의 hp를 깎는다

let jombi = {
  name: 'jombi',
  damaged: [attackBeam, attackKnife],
  hp: 10000,
  power: 2
}

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100
}

jombi.damaged()
jombi

thanos.damaged()
