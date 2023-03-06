const handleLoadWindow = () => {
    document.querySelector(".document-wrap").style.display = 'flex'
}

window.addEventListener("load",handleLoadWindow)
window.removeEventListener("unload",handleLoadWindow)

const handleClickDocumentWrap = () => {
    document.querySelector(".document-wrap").style.display = 'none'
}