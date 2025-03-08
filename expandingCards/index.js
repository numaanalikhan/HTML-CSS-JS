const nodeListPanels = document.querySelectorAll(".panel")
console.log(nodeListPanels);


nodeListPanels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeActiveClass()
        panel.classList.add("active")
    })
})

const removeActiveClass = ()=>{
    nodeListPanels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}