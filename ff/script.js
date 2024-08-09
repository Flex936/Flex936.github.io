for (let k=1; k < 635;k++){
    var pics = document.createElement("img")
    try{
        pics.src='artists/thiccwithaq/'+k+'.jpg'
        pics.style.maxHeight='100%'
        pics.style.maxWidth='220px'
        pics.style.borderRadius='10px'
        document.getElementById('Thiccwithaq').appendChild(pics)
    }catch(exceptionVar){
        pics.src='artists/thiccwithaq/'+k+'.gif'
        pics.style.borderRadius='10px'
        document.getElementById('Thiccwithaq').appendChild(pics)
    }
}

const listSections=[document.getElementById('Porn'),document.getElementById('Leaks'),document.getElementById('Hentai'),document.getElementById('Artists'),document.getElementById('Thiccwithaq')]
const listButton=[document.getElementById('PB'),document.getElementById('LSB'),document.getElementById('HB'),document.getElementById('ASB')]
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