let balls = []
let objects = []
let player1Score = 0;
let player2Score = 0;
let stage = null
let used_ballID = 0
function startGame() {
  console.log('ゲーム開始')
  mode = "game"
  stage = 0
  stage0()
}
function nextStage() {
  stage++
  if (stage >= 9) {
    finish_game()
    return;
  }
  mode = "movingStage";
  if (stage < 6)
    setTimeout(function() {
      mode = "game"
      switch (stage) {
        case 1:
          stage1()
          break;
        case 2:
          stage2()
          break;
        case 3:
          stage3()
          break;
        case 4:
          stage4()
          break;
        case 5:
          stage5()
          break;
        case 6:
          stage6()
          break;
        case 7:
          //ボーナスステージ
          stage7()
          break;
        case 8:
          //結果発表
          stage8()
          break;
      }

    }, 3 * 1000)
}
//ステージ移動中に表示する内容
function viewCanvasMovingStage() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 1920, 1080)
  ctx.fillStyle = "white";
  ctx.font = '30px serif';
  switch (stage) {
    case 8:
      ctx.fillText("結果発表に移動中", 800, 100)
    default:
      ctx.fillText("stage" + stage + "に移動中", 800, 100)
      ctx.fillText("player1:" + player1Score, 300, 1050)
      ctx.fillText("player2:" + player2Score, 1400, 1050)
      break;
  }

}
function viewCanvasGame() {
  //todo:ここでz軸を考えて表示したい(zが小さい方が手前)
  let drowItems = []
  for (let i = 0; i < objects.length; i++) {
    drowItems.push(objects[i])
  }
  for (let i = 0; i < balls.length; i++) {
    drowItems.push(balls[i])
  }
  //ここでzの大きい順に並び替える
  let result = drowItems.sort(function(a, b) {
    return (a.z > b.z) ? -1 : 1;  //オブジェクトの降順ソート
  });
  // console.log(result)
  //その後描画
  for (let i = 0; i < result.length; i++) {
    if (result[i].draw) {
      result[i].move()
      result[i].draw()
    }
  }
  //得点の描画
  ctx.fillStyle = "#000"
  ctx.font = '30px serif';
  ctx.fillText("player1:" + player1Score, 300, 1050)
  ctx.fillText("player2:" + player2Score, 1400, 1050)


}
function gameClickedByMouse(x, y, buttonId) {
  let ball
  let player
  if (buttonId == 2) {
    player = 2
  } else {
    player = 1
  }
  if (x <= 960) {
    ball = new Ball(x, y, 0, -1 * ((960 - x) / (2160 - y)) * 5, -5, 1, player)
  } else {
    ball = new Ball(x, y, 0, ((x - 960) / (2160 - y)) * 5, -5, 1, player)
  }
  balls.push(ball)
}
class Ball {
  constructor(x, y, z, xd, yd, zd, player) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xd = xd;
    this.yd = yd;
    this.zd = zd
    this.player = player
    this.ID = used_ballID
    this.deleted = false;
    used_ballID++
  }
  move() {
    // 1/60ごとに発火
    this.x += this.xd;
    this.y += this.yd;
    this.z += this.zd;
    if (!this.deleted) {
      //ここで当たり判定
      for (let i = 0; i < objects.length; i++) {
        if (objects[i]) {
          if (!objects[i].deleted) {
            if (objects[i].z <= this.z) {
              //x座標の当たり判定
              let objectX_left = objects[i].x
              let objectX_right = objectX_left + objects[i].width
              if (objectX_left <= this.x && this.x <= objectX_right) {
                //y座標の当たり判定
                let objectY_up = objects[i].y
                let objectY_buttom = objectY_up + objects[i].height
                if (objectY_up <= this.y && this.y <= objectY_buttom) {
                  console.log("たまが的に当たりました。")
                  //得点処理
                  switch (this.player) {
                    case 1:
                      player1Score += objects[i].score
                      break;
                    case 2:
                      player2Score += objects[i].score
                      break;
                  }
                  //todo: 的のIDに対応したアクションを実行
                  //たまの消去
                  this.deleted = true;
                  //的の消去が必要ならする
                  if (objects[i].isOnlyOne) {
                    objects[i].deleted = true
                    if (objects[i].callback) {
                      objects[i].callback()
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  draw() {
    if (this.deleted) return;
    switch (this.player) {
      case 1:
        ctx.fillStyle = "#0000ff"
        break;
      case 2:
        ctx.fillStyle = "#ff0000"
        break;
      case 3:
        ctx.fillStyle = "#green"
      case 4:
        ctx.fillStyle = "#00ff00"
    }
    switch (stage) {
      case 0:
      case 1:
        ctx.beginPath()
        if (20 - this.z / 10 > 5) {
          ctx.arc(this.x, this.y, 20 - this.z / 10, 0, 2 * Math.PI);
        } else {
          ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        }
        ctx.fill()
        break;
    }
  }
}
class Object_ {
  constructor(x, y, z, width, height, color, type, score, isOnlyOne, ID, callback) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.color = color
    this.type = type;
    this.score = score
    this.isOnlyOne = isOnlyOne
    this.ID = ID
    this.deleted = false;
    if (callback) {
      this.callback = callback;
    }
  }
  draw() {
    if (this.deleted) return;
    ctx.fillStyle = this.color
    switch (this.type) {
      case "finallyTarget1":
        break;
      case "finallyTarget2":
        break;
      default:
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  move() { }
}
class moveObject {
  constructor(x, y, z, width, height, color, type, score, isOnlyOne, dx, dy, ID) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.color = color
    this.type = type;
    this.score = score
    this.isOnlyOne = isOnlyOne
    this.dx = dx
    this.dy = dy
    this.ID = ID
    this.deleted = false;
  }
  move() {
    if (this.deleted) return;
    this.x += this.dx
    this.y += this.dy
  }
  draw() {
    if (this.deleted) return;

    ctx.fillStyle = this.color
    switch (this.type) {
      case "finallyTarget1":
        break;
      case "finallyTarget2":
        break;
      default:
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
}
