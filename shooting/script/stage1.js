function stage1() {
  //農場のやつ
  console.log('ステージ1開始')
  objects = []
  balls = []
  //玉などの準備  
  objects.push(new Object(0, 0, 150, 1920, 1080, "#ccc", "background", 0, false))

  for (let i = 0; i < 18; i++) {
    objects.push(new moveObject(i * 100, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
    objects.push(new moveObject(i * 100, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  }
  objects.push(new moveObject(0, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(100, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(200, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(300, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(400, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(500, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(600, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(700, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(800, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(900, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1000, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1100, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1200, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1300, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1400, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1500, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1600, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1700, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
  objects.push(new moveObject(1800, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))

  objects.push(new moveObject(0, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(100, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(100, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(200, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(300, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(400, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(500, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(600, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(700, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(800, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(900, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1000, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1100, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1200, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1300, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1400, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1500, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1600, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1700, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  objects.push(new moveObject(1800, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  stage1Move1 = setInterval(function() {
    objects.push(new moveObject(0, 300, 100, 50, 50, "blue", "target", 100, true, 1, 0))
    objects.push(new moveObject(0, 400, 80, 80, 80, "red", "target", 100, true, 1, 0))
  }, 100 / 60 * 1000)
  setTimeout(() => {/*開始から1分後に行うこと*/
    clearInterval(stage1Move1)
    nextStage()
  }, 1 * 60 * 1000)
}