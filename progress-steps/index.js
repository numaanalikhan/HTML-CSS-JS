const progress = document.querySelector(".progress")
const circles = document.querySelectorAll(".circle")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

// console.log(circles.length);

let currentActive = 1
next.addEventListener("click",()=>{
    currentActive++
    if(currentActive>circles.length){
        currentActive=circles.length
    }    

    update()
})

prev.addEventListener("click",()=>{
    currentActive--
    if(currentActive<1){
        currentActive=1
    }
    console.log(currentActive)

    update()
})


const update = ()=>{

    circles.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active")

console.log(actives.length,circles.length);

        progress.style.width = ((actives.length-1)/(circles.length-1)) * 100 + "%"



    if(currentActive==1){
        prev.disabled = true
    }else if(currentActive===circles.length){
        next.disabled = true
    }else{
        next.disabled =false
        prev.disabled =false
    }
}

update()