let input = `11 12 2 24 10
16 1 13 3 25
6 20 5 21 17
19 4 8 14 9
22 15 7 23 18
5 10 7 16 2
4 22 8 17 13
3 18 1 6 25
12 19 23 14 21
11 24 9 20 15`;

input = input.split("\n");

let board = input.slice(0,5);
let calls = input.slice(5);

board = board.map( ( item ) => item.split(" ").map(Number) );
// calls = calls.map( ( item ) => item.split(" ").map(Number) ).flat();
calls = calls.flatMap( ( item ) => item.split(" ").map(Number) );

marked = [];
for(let i = 0; i < 5; i++){
  marked.push(new Array(5).fill(false));
}
console.log(marked);
// const marked = Array.from( { length : 5 }, () => Array(5).fill(false) );

let posMap = new Map();

for(let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++){
    let num = board[i][j];
    let pos = [i, j]; // [x, y]

    posMap.set(num, pos);
  }
}

function countBingos(){
  let count = 0;

  // 가로줄 빙고
  for(let i = 0; i < 5; i++){
    if ( marked[i].every( ( item ) => item === true ) ) count ++;
  }

  // 세로줄 빙고
  for(let i = 0; i < 5; i ++){
    if ( marked.every( ( item ) => item[i] ) ) count ++;
  }

  // 대각선
  if( [0,1,2,3,4].every( ( i ) => marked[i][i] === true ) ) count ++;

  // 대각선
  if( [0,1,2,3,4].every( ( i ) => marked[i][4 - i] === true ) ) count ++;

  return count;
}

for (let i = 0; i < calls.length; i++) {
  const num = calls[i]; // 불린 숫자

  const [x, y] = posMap.get(num); // posMap에서 그 숫자의 위치를 찾는다.

  marked[x][y] = true; // true로 바꾼다.

  if (countBingos() >= 3) {
    console.log(i + 1); // 정답 출력. i는 0부터 시작이므로 +1
    break;
  }
}