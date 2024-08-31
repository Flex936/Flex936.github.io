function details(menu){
    if (menu.style.width != '110%'){
        menu.style.cssText="width: 110%; height: auto; transform: translateX(-6.5%); border-width: 3px; z-index: 2;"
        menu.querySelector('table').style.display='flex'
    }
    else{
        menu.style.cssText="width: 70%; height: 0; transform: translateX(0); border-width: 6px; z-index: 1;"
        menu.querySelector('table').style.display='none'
    }
}

function listClasses(table){
    let list = table.querySelectorAll('td')
    if(table.classList.contains('active')){
        table.classList.remove('active')
        for (let i=1; i < list.length; i++){
            list[i].style.display='none'
        }
    }
    else{
        table.classList.add('active')
        for (let i=1; i < list.length; i++){
            list[i].style.display='table-cell'
        }
    }
}

function switchSchedule(thisClass){
    let list = document.getElementsByClassName('schedule')
    for (let i=0; i < list.length; i++){
        list[i].style.display='none'
    }
    document.getElementById(thisClass).style.display='table-row-group'
    document.getElementById('class').innerHTML=thisClass
}