var index = 2
function details(slider){
    if (slider.style.width != '130px' && slider.style.width != '260px'){
        if (!slider.classList.contains('double')){
            slider.style.width='130px'
        slider.style.transform='translateX(-25px)'
        }
        else{
            slider.style.width='260px'
        slider.style.transform='translateX(-50px)'
        }
        slider.style.height='auto'
        slider.style.borderWidth='3px'
        slider.style.zIndex=index
        slider.children[0].style.display='flex'
        index++
    }
    else{
        if (!slider.classList.contains('double')){
            slider.style.width='80px'
        }
        else{
            slider.style.width='160px'
        }
        slider.style.height='0'
        slider.style.borderWidth='6px'
        slider.style.transform='translateX(0px)'
        slider.style.zIndex=1
        slider.children[0].style.display='none'
    }
    if (index >= 9){
        index=2
    }
}