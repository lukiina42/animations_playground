(function onScrollAnimationSetup(){
    //On scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

     //Arrows appearing and behavior
     document.getElementById("arrows").addEventListener('click', function (){
        document.getElementById("section2").scrollIntoView({behavior: 'smooth'})
    })
})();

(function flamingoSetup(){

    const flamingo = document.getElementById("flamingoWithEyes")
    let flamingoHidden = false

    setTimeout(() => {
        flamingo.classList.add('onlyEyes')
    }, 5000)

    flamingo.addEventListener('mouseover', (e) => {
        flamingo.classList.add('wholeVisible')
    })
    flamingo.addEventListener('mouseleave', (e) => {
        flamingo.classList.remove('wholeVisible')
    })

    //compute angle of the eyes
    function angle(cx, cy, ex, ey) {
        const dy = ey - cy
        const dx = ex - cx
        const rad = Math.atan2(dy, dx)
        const deg = rad * 180 / Math.PI
        return deg
    }

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY

        const anchor = document.getElementById('anchor')
        const rekt = anchor.getBoundingClientRect()
        const anchorX = rekt.left + rekt.width / 2
        const anchorY = rekt.top + rekt.height / 2

        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

        const eyes = document.querySelectorAll('.eye')
        eyes.forEach((eye) => {
            eye.style.transform = `rotate(${90 + angleDeg}deg)`
        })
    })

    function hideFlamingo() {
        flamingo.classList.remove('onlyEyes');
        if(!flamingoHidden){
            let number = Math.random() * 10000 + 5000 //random hidey hidey time :)
            setTimeout(() => {
                flamingo.classList.add('onlyEyes')
                flamingoHidden = false
            }, number)
        }
        flamingoHidden = true
    }

    document.addEventListener('scroll', (e) => {
        hideFlamingo()
    })
    
})()

document.getElementById('hideHeader').addEventListener('click', function hideHeader(event){
    const spriteMan = document.getElementById("spriteContainer")
    spriteMan.classList.add('run')
    document.getElementById("header").classList.add('move')
    setTimeout(function stopTheSpriteMan(){
        spriteMan.classList.add('rotate')
        spriteMan.classList.add('stop')
    }, 2000)
})

document.getElementById("spriteContainer").addEventListener('click', function returnHeader(event){
    const spriteMan = document.getElementById("spriteContainer")
    spriteMan.classList.remove('stop')
    spriteMan.classList.remove('run')
    document.getElementById("header").classList.remove('move')
    setTimeout(function rotateSpriteManBack(){
        spriteMan.classList.remove('rotate')
    }, 2000)
})
