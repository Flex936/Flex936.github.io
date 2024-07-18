const PornHub = document.getElementById('PornHub')
const Artists = document.getElementById("Artists")
const HanimeTV = document.getElementById("HanimeTV")
const PornHubB = document.getElementById('PHB')
const ArtistsB = document.getElementById("ASB")
const HanimeTVB = document.getElementById("HTVB")

const listButton = [document.getElementById('HanimeTV')]

function colorChange() {
    for (let i=0; i < listButton.length; i++){
        if (listButton[i] != document.getElementById(this)){
            listButton[i].style.backgroundColor="rgb(20, 20, 20)"
            listButton[i].style.backgroundColor = "orange"
        }
        else{
            listButton[i].style.backgroundColor="orange"
            listButton[i].style.backgroundColor = "rgb(20, 20, 20)"
        }
    }
}

function PH(){
    PornHub.style.display="grid"
    Artists.style.display="none"
    HanimeTV.style.display = "none"
    PornHubB.style.backgroundColor = "orange"
    PornHubB.style.color = "rgb(20, 20, 20)"
    ArtistsB.style.backgroundColor = "rgb(20, 20, 20)"
    ArtistsB.style.color = "orange"
    HanimeTVB.style.backgroundColor = "rgb(20, 20, 20)"
    HanimeTVB.style.color = "orange"
}

function AS(){
    PornHub.style.display = "none"
    Artists.style.display = "grid"
    HanimeTV.style.display = "none"
    PornHubB.style.backgroundColor = "rgb(20, 20, 20)"
    PornHubB.style.color = "orange"
    ArtistsB.style.backgroundColor = "orange"
    ArtistsB.style.color = "rgb(20, 20, 20)"
    HanimeTVB.style.backgroundColor = "rgb(20, 20, 20)"
    HanimeTVB.style.color = "orange"
}

function HTV(){
    PornHub.style.display = "none"
    Artists.style.display = "none"
    HanimeTV.style.display = "grid"
    PornHubB.style.backgroundColor = "rgb(20, 20, 20)"
    PornHubB.style.color = "orange"
    ArtistsB.style.backgroundColor = "rgb(20, 20, 20)"
    ArtistsB.style.color = "orange"
    HanimeTVB.style.backgroundColor = "orange"
    HanimeTVB.style.color = "rgb(20, 20, 20)"
}