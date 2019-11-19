const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bitey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bitey")
            theDialog.showModal()
        }
    )



    document.querySelector("#button--carl").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--carl")
            theDialog.showModal()
        }
    )



    document.querySelector("#button--main").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--main")
            theDialog.showModal()
        }
    )



    document.querySelector("#button--joe").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--joe")
            theDialog.showModal()
        }
    )



    document.querySelector("#button--blue").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--blue")
            theDialog.showModal()
        }
    )



    document.querySelector("#button--len").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--len")
            theDialog.showModal()
        }
    )

}

export default initializeDetailButtonEvents