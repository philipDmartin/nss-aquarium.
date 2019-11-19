const borderColorChange = (=> {
    let tipDivs = document.querySelectorAll(".tip");

    for (const tip of tipDivs) {
        
        tip.addEventListener(
            "colorChange",
            (theColorChange) => {
                tip.classList.add("colorChange")
            }
        )
    }
})