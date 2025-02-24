function valueSetters() {
    gsap.set("nav a", {y: "-100%", opacity: 0})
    gsap.set("#home span .child", {
        y: "100%"
    })
    gsap.set("#home .row img", {
        opacity: 0
    })

    document.querySelectorAll("#Visual>g>g>path, #Visual>g>g>polyline ").forEach(function(e){
        e.style.strokeDasharray = e.getTotalLength() + 'px';
        e.style.strokeDashoffset = e.getTotalLength() + 'px';
      })
}

function revealToSpan(){
    document.querySelectorAll(".reveal")
        .forEach(function(elem) {
            let parent = document.createElement("span")
            let child = document.createElement("span")
            parent.classList.add("parent")
            child.classList.add("child")

            child.innerHTML = elem.innerHTML
            parent.appendChild(child)

            elem.innerHTML = ""
            elem.appendChild(parent)
        }
    )
}

function loadingAnimation(){
    var tl = gsap.timeline()

    tl
    .from("#loader .child span", {
        x: 100,
        stagger: .2,
        duration: 1,
        ease: Power3.easeInOut
    })
    .to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        delay: 1,
        ease: Circ.easeInOut
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#green", {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -1,
        ease: Circ.easeOut
    })
    .to("#green", {
        height: "0%",
        duration: 1,
        delay: -.5,
        ease: Circ.easeInOut,
        onComplete: function() {
            animateHomePage()
        }
    })
}


function animateSvg(){
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
    })
}

function animateHomePage() {
    var tl = gsap.timeline()
    tl
    .to("nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child", {
        y: 0,
        stagger: .1,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to("#home .row img", {
        opacity: 1,
        ease: Expo.easeInOut, 
        onComplete: function(){
            animateSvg()
        }
    })
}

revealToSpan()
valueSetters()
loadingAnimation()
