const date = new Date;
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

console.log(date);

console.log(date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日');

console.log(date.toLocaleDateString(undefined, options));