//表示用の文字列取得
let texts = window.localStorage.getItem('texts').split(',');
let score = 0;
let already_question = 0;
const all_question_number = 10
let view_score = document.getElementById('score')

function start_game() {
  mode = "play";
  let start = document.getElementById("start");
  let game = document.getElementById("game");
  start.style.display = "none";
  game.style.display = "block";
  view_text();
}
let mode = "home";
function view_text() {
  mode = "play";
  let texts_length = texts.length;
  console.log(texts)
  console.log(texts_length)
  if (texts_length == 0) {
    window.alert("表示するものがありません。");
    finish_game();
    return;
  }
  already_question++;
  //表示するやつを設定
  let view_text_number = getRandom(0, texts_length - 1);
  let view_text = texts[view_text_number];
  console.log(view_text);
  let html_view_text = document.getElementById("html_view_text");
  html_view_text.innerText = view_text;
}
let view_timer = document.getElementById('timer')
function finish_game() {
  mode = "home"
  let start = document.getElementById("start");
  let game = document.getElementById("game")
  start.style.display = "block";
  game.style.display = "none";
}
function check_input() {
  let text_value = document.getElementById("html_view_text").innerText;
  let input_value = document.getElementById('input_text').value;
  let view_score = document.getElementById('score')
  let input = document.getElementById('input_text')

  console.log(text_value + ':' + input_value);
  if (text_value == input_value) {
    //正解したので次へ
    alert('正解です')
    score++
    view_score.innerText = score;
    input.value = '';
    if (already_question == all_question_number) {
      finish_game();
      return;
    } else {
      view_text();
    }
  } else {
    window.alert("どこかが間違えています。");
    return;
  }
}
hotkeys('enter,f5,ctrl+r,space', function(event, handler) {
  event.preventDefault();
  switch (handler.key) {
    case 'enter':
      if (mode = 'play') {
        check_input();
      } else if (mode = 'home') {
        start_game();
      }
      break;
    case 'f5':
      break;
    case 'ctrl+r':
      break;
    case 'space':
      if (mode = "home") {
        start_game();
      }else{}
      break;
    default: alert(event);
  }
});

//最大値・最小値を引数に持つ関数
function getRandom(min, max) {
  let random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
}