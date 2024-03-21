document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.querySelector(".game-container")
    const isaac = document.querySelector(".isaac")
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
        let newPosition = isaac.offsetLeft + offset; //checking
        if(newPosition < 0) {
            newPosition = 0;
        } else if (newPosition + isaacWidth > gameContainerWidth) {
            newPosition = gameContainerWidth - isaacWidth;
        }
        isaac.style.left = newPosition + 'px'
    }

    //creating apples   
    let creatingApple = () => {
        const apple = document.createElement('div')
        apple.classList.add('apple')
        const randomX = Math.random() * (gameContainer.offsetWidth - 40)
        apple.style.left = randomX + 'px';
        
        gameContainer.appendChild(apple);
        
        // console.log('yes');//checking
        //falling apples
        const fallInterval = setInterval(function () {
            const isaacArea = isaac.getBoundingClientRect()
            const applesArea = apple.getBoundingClientRect()

            if(applesArea.bottom >= isaacArea.top && applesArea.right >= isaacArea.left && isaacArea.right >= applesArea.left) {
                apple.remove()
                clearInterval(fallInterval)
            } else if (applesArea.bottom >= gameContainer.offsetHeight) {
                apple.remove()
                clearInterval(fallInterval)
            } else {
                apple.style.top = apple.offsetTop + 5 + 'px' //moving do down
            }
        }, 20)
    }

    setInterval(creatingApple, 2000)

})