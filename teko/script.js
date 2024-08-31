function details(menu){
    if (menu.style.width != '110%'){
        menu.style.cssText="width: 110%; height: auto; transform: translateX(-6.5%); border-width: 3px; z-index: 2;"
        menu.children[0].style.display='flex'
    }
    else{
        menu.style.cssText="width: 70%; height: 0; transform: translateX(0); border-width: 6px; z-index: 1;"
        menu.children[0].style.display='none'
    }
}