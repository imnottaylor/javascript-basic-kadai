// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const textH2 = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', ()=> {
  textH2.textContent = 'ボタンをクリックしました';
});