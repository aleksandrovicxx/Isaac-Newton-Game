document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.querySelectorAll(".game-container")
    const isaac = document.querySelectorAll(".isaac")
    const isaacWidth = isaac.offsetWidth;
    const gameContainerWidth = gameContainer.offsetWidth;

    //moving Isaac:
    document.addEventListener('keydown', (e) =>{
        if(e.key === 'ArrowLeft'){
            moveIsaac(-20);
        } else if ( e.key === 'ArrowRight'){
            moveIsaac(20)
        }
    });

    function moveIsaac(offset) {
        //checking
        let newPosition = isaac.offsetLeft + offset;
        if(newPosition < 0) {
            newPosition = 0;
        } else if (newPosition + isaacWidth > gameContainerWidth) {
            newPosition = gameContainerWidth - isaacWidth;
        }
        isaac.style.left = newPosition + 'px'
    }

})