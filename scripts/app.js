// ! Elements
const btnElement = document.querySelectorAll('.dp-sound-btn')

// ! Events

btnElement.forEach((audioBtn) => {
    audioBtn.addEventListener('click', () => {
        const audioFileElement = audioBtn.dataset.url;
        const audioElement = new Audio(`./sounds/${audioFileElement}`)
        audioElement.volume = 0.2
        audioElement.play()
        // console.log(audioElement)
    })

    audioBtn.addEventListener('mouseover', () => {
        // audioBtn.src = "url('./images/head.gif')"
        audioBtn.style.backgroundImage = "url('./images/head.gif')";
        audioBtn.style.backgroundSize = 'auto';
        audioBtn.style.backgroundPosition = 'center center';
        audioBtn.style.color = 'white';
        // console.log('Testing')
    })

    audioBtn.addEventListener('mouseleave', () => {
        audioBtn.style.backgroundImage = ''
        audioBtn.style.color = 'red';
    })
})


// ! Executions



nameElement.forEach((nameId) => {
    nameId.addEventListener('mouseover', () => {
        nameHereElement.textContent = nameId.textContent
    })

    nameId.addEventListener('mouseleave', () => {
        nameHereElement.textContent = '';
    })
})