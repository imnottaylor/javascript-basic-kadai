// numに1以上の整数を代入する
let num = 135;

// numの値が3の倍数の場合
if ((num % 3) === 0 && (num % 5) === 0) {
  console.log('3と5の倍数です');
}
// numの値が5の倍数の場合
else if ((num % 5) === 0) {
  console.log('5の倍数です');
}
// numの値が3と5の倍数の場合
else if ((num % 3) === 0) {
  console.log('3の倍数です');
}
// いずれの条件にも当てはまらない場合
else {
  console.log(num);
}