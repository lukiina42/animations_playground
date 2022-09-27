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

    document.addEventListener('scroll', (e) => {
        flamingo.classList.remove('onlyEyes');
        if(!flamingoHidden){
            let number = Math.random() * 10000 + 5000 //random hidey hidey time :)
            setTimeout(() => {
                flamingo.classList.add('onlyEyes')
                flamingoHidden = false
            }, number)
        }
        flamingoHidden = true
    })
    
})()


