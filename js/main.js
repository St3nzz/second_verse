// Появление блоков - анимация
AOS.init();

// Speedometr

document.addEventListener("DOMContentLoaded", ()=>{
    const counter_arrow = document.querySelector('.header-main__counter-arrow');
    const counter_num = document.querySelector('.header-main__counter-number');
    let number = parseInt(counter_num.textContent);
    // let arrow_angle = parseInt(counter_arrow.style.transform);
    
    setTimeout(()=>{
        let timer = setInterval(()=>{
            if(number <= 890){
                number += 10;
                counter_num.textContent = number;
                counter_arrow.style.transform = `rotateZ(120deg)`;
            } 
        }, 50);
    }, 200);
});

// Ответы и вопросы

const qna = document.getElementById('qna');

qna.addEventListener("click", function(event){
    let target = event.target;
    if(target.classList.contains("qna__toggleBtn")){
        target.nextElementSibling.classList.toggle('qna__content-active');
        target.classList.toggle('qna__toggleBtn-active');
    } else return;
});

// Плавная прокрутка

$("a.scrollTo").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 0);
});