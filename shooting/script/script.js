const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
window.onload = init
let mode = "home"
function init() {
  document.getElementById('loading_message').style.display = "none";
  viewCanvasHome()
  setInterval(changeCanvas, 1 / 60 * 1000)
}
/**
* canvasの更新(1/60秒ごとに必ず実行)
  */
function changeCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  switch (mode) {
    case "home":
      viewCanvasHome()
      break;
    case "game":
      viewCanvasGame()
      break;
    case "movingStage":
      viewCanvasMovingStage()
      break;
    default:
      break;
  }
}
function viewCanvasHome() {
  ctx.fillStyle = "#ccc"
  ctx.fillRect(0, 0, 1920, 1080)
  ctx.fillStyle = "#000"
  ctx.font = '50px serif';
  ctx.fillText("シューティングゲーム", 600, 50)
  ctx.font = '20px serif'
  ctx.fillText('画面をタップしてゲームを開始', 700, 100)

}
/**
* home表示中にcanvasがマウスで押されたら発火
  */
function homeClickedByMouse() {
  startGame()
}

window.addEventListener("DOMContentLoaded", () => {
  const cvs = document.getElementById("canvas");
  cvs.addEventListener("click", e => {
    const rect = e.target.getBoundingClientRect();
    // ブラウザ上での座標を求める
    const viewX = e.clientX - rect.left,
      viewY = e.clientY - rect.top;

    // 表示サイズとキャンバスの実サイズの比率を求める
    const scaleWidth = cvs.clientWidth / cvs.width,
      scaleHeight = cvs.clientHeight / cvs.height;

    // ブラウザ上でのクリック座標をキャンバス上に変換
    const canvasX = Math.floor(viewX / scaleWidth),
      canvasY = Math.floor(viewY / scaleHeight);
    switch (mode) {
      case "home":
        homeClickedByMouse(canvasX, canvasY, 0)
        break;
      case "game":
        gameClickedByMouse(canvasX, canvasY, 0)
        break;
      default:
        break;
    }
  });
  cvs.addEventListener("contextmenu", e => {
    const rect = e.target.getBoundingClientRect();
    // ブラウザ上での座標を求める
    const viewX = e.clientX - rect.left,
      viewY = e.clientY - rect.top;

    // 表示サイズとキャンバスの実サイズの比率を求める
    const scaleWidth = cvs.clientWidth / cvs.width,
      scaleHeight = cvs.clientHeight / cvs.height;

    // ブラウザ上でのクリック座標をキャンバス上に変換
    const canvasX = Math.floor(viewX / scaleWidth),
      canvasY = Math.floor(viewY / scaleHeight);
    switch (mode) {
      case "home":
        break;
      case "game":
        gameClickedByMouse(canvasX, canvasY, 2)
        break;
      default:
        break;
    }
  });

});
