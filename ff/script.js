const listSections=[document.getElementById('PornHub'),document.getElementById("Artists"), document.getElementById("HanimeTV")]
const listButton=[document.getElementById('PHB'),document.getElementById("ASB"), document.getElementById("HTVB")]

function buttonClick(clicked_id) {
    for (let i=0; i < listButton.length;i++){
        if (listButton[i] != clicked_id){
            listButton[i].style.backgroundColor="rgb(20, 20, 20)"
            listButton[i].style.color = "orange"
        }
        else{
            listButton[i].style.backgroundColor="orange"
            listButton[i].style.color = "rgb(20, 20, 20)"
        }
    }
    for (let i=0; i < listSections.length;i++){
        if (listSections[i].id[0] != clicked_id.id[0]){
            listSections[i].style.display="none"
        }
        else{
            listSections[i].style.display="grid"
        }
    }
}