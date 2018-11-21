!function(){
	var duration = 50
	function writeCode(prefix, code, fn){
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0;
		setTimeout(function run(){
			n+=1
			container.innerHTML = code.substring(0,n)
			styleTag.innerHTML = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if(n < code.length){
				setTimeout(run, duration)
			}else{
				fn && fn.call()
			}
		},duration)
	}

$('.actions').on('click','button',function(e){
		let $button = $(e.currentTarget) //button
		let speed = $button.attr('data-speed')
		$button.addClass('active')
			.siblings('.active').removeClass('active')
		switch(speed){
			case 'slow':
				duration = 100
				break
			case 'normal':
				duration = 50
				break
			case 'fast':
				duration = 5
				break
		}
	})

	let code = `
/*
*首先，来一个背景
*/
.preview {
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}

.wrapper {
    height: 165px;
    width: 100%;
    position: relative;
}
/*
*接下来，画皮卡丘的鼻子
*/
.nose {
    width: 0;
    height: 0;
    border: 11px solid black;
    border-color: black transparent transparent;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}
/*
*接下来，画皮卡丘的眼镜
*/
.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}
/*
*眼珠～～～
*/
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -2px;
    border: 2px solid #000
}
/*
*左眼～～～
*/
.eye.left {
    right: 50%;
    margin-right: 90px;
}
/*
*右眼～～～
*/
.eye.right {
    left: 50%;
    margin-left: 90px;
}

/*
*接下来，是皮卡丘的脸～～～
*/

.face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    top: 85px;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
}
/*
*把脸放好～～～
*/
.face.left {
    right: 50%;
    margin-right: 116px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
*上嘴唇
*/
.upperLip {
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #fde348;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/*
*下嘴唇～
*/
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 110px;
    width: 300px;
    overflow: hidden;
}

.lowerLip {
    height: 3500px;
    width: 300px;
    background: #990523;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*
*最后，来一个舌头
*/
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px
}
/*
*谢谢～结束啦～
*/
	`
	writeCode('',code,)
	
}.call()