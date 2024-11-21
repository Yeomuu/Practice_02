const menu = document.querySelector('.menu');
const icon = document.querySelector('.hero iconify-icon');
const imgBox = document.querySelectorAll('div.images');
const galBg = document.querySelector('.brand');
const storyText = document.querySelector('.story .text');
const storyBoxes = document.querySelectorAll('.story .text .box');
const storyImg = document.querySelector('.story .img-box img');

document.addEventListener('scroll', function(){
    // 헤더 메뉴 글씨 보이기
    let start = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if(window.scrollY > start){
        menu.style.color = "#141414";
    } else{
        menu.style.color = "";
    };

    if((window.scrollY + window.innerHeight) >= docHeight){
        menu.style.color = "";
    };

    // 스크롤 시 중앙 하단에 있는 스크롤 유도 요소 사라짐
    if(window.scrollY > 0){
        icon.style.opacity = '0';
    } else{
        icon.style.opacity = '';
    }

    // 이미지가 뷰포트에 들어왔을 때 이미지 크기 조정 및 패럴랙스 효과
    // 이미지 순서에 따라 배경 색상 변경
    imgBox.forEach((box, index) => {
      let boxTop = box.getBoundingClientRect().top;
      let boxBottom = box.getBoundingClientRect().bottom;
      let veiwIn = window.innerHeight / 2;

      let color = ['#EEEADD', '#FFEE80', '#EEDED5'];

      const images = box.querySelector('div.images img');
      
      if(boxTop < veiwIn && boxBottom > 0){
        images.style.transform = `scale(1) translateY(${scrollY/-40}px)`;
        galBg.style.backgroundColor = color[index];
      }else{
        images.style.transform = "";
      }
    });
});



// IKEA 이야기 내 목록 스크롤 시 이미지 변경
storyText.addEventListener('scroll', function() {
    const storyHeight = storyText.getBoundingClientRect().height;
    const storyTop = storyText.getBoundingClientRect().top;
    const storyCenter = storyTop + (storyHeight / 2);

    storyBoxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        // 박스가 storyText의 중앙에 들어올 때
        if (boxTop <= storyCenter && boxBottom >= storyCenter) {
            storyImg.src = `images/0${index + 1}.webp`;
            box.style.opacity = '1';
        } else{
            box.style.opacity = ''
        }
    });
});