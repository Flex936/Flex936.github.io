for (let k=1; k < 635;k++){
    var pics = document.createElement("img")
    try{
        pics.src='artists/thiccwithaq/'+k+'.jpg'
        document.getElementById('Thiccwithaq').appendChild(pics)
    }catch(gifError){
        pics.src='artists/thiccwithaq/'+k+'.gif'
        document.getElementById('Thiccwithaq').appendChild(pics)
    }
}

const listSections=[document.getElementById('PornHub'),document.getElementById('Leaks'),document.getElementById('HanimeTV'),document.getElementById('Artists'),document.getElementById('Sites'),document.getElementById('Thiccwithaq')]
const listButton=[document.getElementById('PHB'),document.getElementById('LSB'),document.getElementById('HTVB'),document.getElementById('ASB'),document.getElementById('SSB')]
const hrc = document.getElementById('hri')  

function buttonClick(clicked_id){
    for (let i=0; i < listSections.length;i++){
        if (listSections[i].id[0] != clicked_id.id[0]){
            listSections[i].style.display='none'
        }
        else{
            listSections[i].style.display='flex'
            hrc.style.marginLeft=i+'00%'
        }
    }
}

function showPics(artist_id){
    for (let j=0; j < listSections.length;j++){
        if (listSections[j].id == artist_id){
            listSections[j].style.display='flex'
        }
    }
    listSections[3].style.display='none'
}