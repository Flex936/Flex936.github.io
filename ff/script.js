for (let k=1; k < 635;k++){
    var pics = document.createElement("img")
    try{
        pics.src='artists/thiccwithaq/'+k+'.jpg'
        document.getElementById("Thiccwithaq").appendChild(pics)
    }catch(gifError){
        pics.src='artists/thiccwithaq/'+k+'.gif'
        document.getElementById("Thiccwithaq").appendChild(pics)
    }
}

const listSections=[document.getElementById('PornHub'),document.getElementById("Leaks"),document.getElementById("HanimeTV"),document.getElementById("Artists"),document.getElementById("Sites"),document.getElementById('Thiccwithaq')]
const listButton=[document.getElementById('PHB'),document.getElementById("LSB"),document.getElementById("HTVB"),document.getElementById("ASB"),document.getElementById("SSB")]

function buttonClick(clicked_id) {
    for (let i=0; i < listSections.length;i++){
        if (listSections[i].id[0] != clicked_id.id[0]){
            listSections[i].style.display="none"
            listButton[i].style.backgroundColor="rgb(20, 20, 20)"
            listButton[i].style.color = "orange"
        }
        else{
            listButton[i].style.backgroundColor="orange"
            listButton[i].style.color = "rgb(20, 20, 20)"
            listSections[i].style.display="grid"
        }
    }
}

function showPics(artist_id) {
    for (let j=0; j < listSections.length;j++){
        if (listSections[j].id == artist_id){
            listSections[j].style.display='grid'
        }
    }
    listSections[3].style.display='none'
}