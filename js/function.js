// function sum(a,b,c){
//     console.log(a,b,c);
//     console.log(a*b/c);
// }

// sum(30,20,5)

// 함수를 제작
// circle의 색깔을 넘겨받은 값으로
// 바꿔주는 함수 제작

const circle = document.querySelector('#circle');

function change(color){
    
    circle.style.background = color
}


// 함수이름 write
// 넘겨받은 값으로 circle 안에 글자를 입력해주는 함수

function write(text,color, name){
    circle.innerText = `제이름은 ${name}이고취미는${text}입니다`
    circle.style.background = color;
}

write("컴퓨터","green","taeeon");