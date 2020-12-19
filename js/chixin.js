var items = document.getElementsByClassName('item'); //获取item（图片）
var PreBtn = document.getElementById('Pre');   //获取左按钮。
var NexBtn = document.getElementById('Nex');   //获取右按钮
var points = document.getElementsByClassName('point'); //获取点

var time = 0;   //定时器图片跳转参数
var index = 0;  /* 表示第几张图片(第几个点）在展示（意味着第index张图片有active类名（在展示）） */

var clearActive = function(){
    for(var i=0;i<items.length;i++){   //将之前添加的active去掉。
        items[i].className = 'item';
    }
    for(var i=0;i<points.length;i++){
        points[i].className = 'point';
    }
}

var goIndex = function(){
    clearActive();
    points[index].className = 'point active';   /* 第index个点展示 */
    items[index].className = 'item active';     /* 第index张图片展示 */
}


var goNex = function(){       //自动的挑战到下一张图片
    if(index < 6){  /* 一共有5张图片 */
        index++; //index自增
    }
    else{
        index = 0;
    }     
    goIndex();        //给自增后的item加active。
}

var goPre = function(){     /* 自动挑战至上一张图片 */
    if(index == 0){
        index = 6;
    }else{
        index--;
    }
    goIndex();
}


NexBtn.addEventListener('click',function(){    /* 为 <buttoncx> 元素添加点击事件 */
    goNex();    /* nex按钮一点击，就调用gonex执行下一张。 */
})

PreBtn.addEventListener('click',function(){goPre();})

for(var i=0;i<points.length;i++){
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index');    /* 获取标签属性中的点 */
        index = pointIndex;
        goIndex();
        time = 0;  
    })
}

setInterval(function(){     /* 定时器 */
    time++;
    if(time == 30){ /* 30*100=3000也就是2秒 */
        goNex();
        time = 0;   /* 每3秒执行1次后，清0 */
    }

},100)/* 每次计时到时间后清0，解决点击后时间不均匀的问题 */