//生成障碍物的x
function genrateBarrierX(canvasWidth, barrierWidth, count) {
    var barriers = new Array();
    for (var i = 0; i < count; i++) {
        generateBarrier(canvasWidth - barrierWidth, barrierWidth, barriers);
    }
    return barriers;
}

//是否可以放置
function canPut(barrierWidth,x, barriers) {
    for (var i = 0; i < barriers.length; i++) {
        if (x <= (barriers[i] - barrierWidth) || x >= (barriers[i] + barrierWidth)) {
            continue;
        }else {
            // console.log("x="+x+" barriers"+barriers.toString());
            return false
        }
    }
    return true;
}

//随机生成，如果冲突，重新生成
function generateBarrier(canvasWidth, barrierWidth, barriers) {
    var x;
    do {
        x = Math.random() * canvasWidth;
    } while (!canPut(barrierWidth,x, barriers))
    barriers.push(x);
}