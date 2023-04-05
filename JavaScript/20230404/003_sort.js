//sort()
//sort() 메소드는 배열의 요소를 정렬하는데 사용됩니다. 메소드를 호출하면 배열을 변경하며, 정렬된 배열을 반환합니다.


const avengers = ['아이언맨', '스파이더맨', '헐크,']


//사전식 정렬. 시간이 지나도 못 바뀌는 내용
const num = [3, 1, 8, 6];
console.log(nums.sort());
//(5) [1, 3, 6, 8]

const nums = [3, 1, 11, 8, 6];
console.log(nums.sort());
//(5) [1, 11, 3, 6, 8]
//'sort를 어느알고리즘으로 할거냐?'는 브라우저의 자유!



// 오름차순
const nums2 = [3, 1, 11, 8, 6];
console.log(nums2.sort((a, b) => a - b));

// 내림차순
const nums3 = [3, 1, 11, 8, 6];
console.log(nums3.sort((a, b) => b - a));


// 실무사용코드
function sort(key) {
  if (click) {
    click = false
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else {
    click = true
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}


// 딥하게 sort를 탐색해보겠다?!
const nums4 = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => {
  console.log(a, b)
  console.log(a - b)
}));