const listSections=[document.getElementById('PornHub'),document.getElementById("Artists"), document.getElementById("HanimeTV"), document.getElementById("Sites")]
const listButton=[document.getElementById('PHB'),document.getElementById("ASB"), document.getElementById("HTVB"), document.getElementById("SB")]

function buttonClick(clicked_id) {
    for (let i=0; i < listButton.length;i++){
        if (listSections[i].id[0] != clicked_id.id[0]){
            listButton[i].style.backgroundColor="rgb(20, 20, 20)"
            listButton[i].style.color = "orange"
            listSections[i].style.display="none"
        }
        else{
            listButton[i].style.backgroundColor="orange"
            listButton[i].style.color = "rgb(20, 20, 20)"
            listSections[i].style.display="grid"
        }
    }
}