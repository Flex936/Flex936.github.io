function details(slider){
    if (slider.style.width != '110%'){
        slider.style.cssText="width: 110%; height: auto; transform: translateX(-6.5%); border-width: 3px; z-index: 2;"
        slider.children[0].style.display='flex'
    }
    else{
        slider.style.cssText="width: 70%; height: 0; transform: translateX(0); border-width: 6px; z-index: 1;"
        slider.children[0].style.display='none'
    }
}