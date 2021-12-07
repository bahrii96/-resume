$(document).ready(function () {
    $('.interest__slider').slick({
        dots: true,
        // кількість елементів
        slidesToShow: 3,
        // з якого слайду починається
        initialSlide:3,
        // прокручування безкінечне
        infinite: false,
        // ділення елемента на частини потрібно при перетягувванні мишкою
        touchThreshold: 10,
        // центрує зображення
        centerMode:true
    });
})
const settingsBox=document.querySelector(".settings")
const settings = document.querySelector(".btn-settings");
settings.addEventListener("click", settingsActive)
function settingsActive() {
    if (
      settingsBox.classList.contains("settings-active")  
    ) {
         settingsBox.classList.remove("settings-active");
    }
   else
    settingsBox.classList.add("settings-active");
}
 
// зміна беграонду!!!!!!!!!
// const color = {
//   blue:  document.querySelector(".blue"),
//    maroon: document.querySelector(".maroon"),
//    saddleBrown: document.querySelector(".saddleBrown"),
//    indigo: document.querySelector(".indigo"),
//    purple: document.querySelector(".purple"),
//    DarkSlateGrey: document.querySelector(".DarkSlateGrey")
// }
const color = document.querySelector(".settings__list")
console.log(color);
const blockColor = {
hero:document.querySelector(".hero__box"),
skills:document.querySelector(".skills"), 
    form:document.querySelector(".form")
  
//    DarkSlateGrey: document.querySelector(".DarkSlateGrey")   
}
// console.log(blockColor.hero.classList);

let colorAddReove=""
color.addEventListener('click', catchElement)
function catchElement(event) {
   
    if (event.target.nodeName !== 'BUTTON') {
        return
    }
    const classEl = event.target.classList[1];
    // console.log(classEl);
    
    addClassOnElement(classEl)
}

function addClassOnElement(classEl) {
     
    const values = Object.values(blockColor);
    if (colorAddReove!=="") {
     values.map(el =>
        el.classList.remove(`${colorAddReove}`));   
    }
    // values.map(el =>
    //     el.classList.remove(`${colorAddReove}`));
console.log(colorAddReove);
    values.map(el => el.classList.add(`${classEl}`))
    colorAddReove=classEl
    console.log(values);
    
     

  
    
    

    // console.log(values);

//     blockColor.hero.classList.add("blue");
//     blockColor.education.forEach.call(blockColor.education, function (el) {
//         el.classList.add("blue");
//     });
// blockColor.form__button.classList.add("blue");
}