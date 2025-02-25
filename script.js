function valueSetters() {
    gsap.set("nav a", {y: "-100%", opacity: 0})
    gsap.set("#home span .child", {
        y: "100%"
    })
    gsap.set("#home .row img", {
        opacity: 0
    })

    gsap.set("#home #imagery", {
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
    .from("#loader .child .lText", {
        x: 160,
        duration: 1,
        ease: Power3.easeInOut
    })
    .from("#loader .child .fText", {
        x: 60,
        duration: 1,
        delay: -0.9,
        ease: Power3.easeInOut
    })
    .to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        delay: 0.3,
        ease: Power3.easeInOut
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Power3.easeOut
    })
    .to("#green", {
        height: "10%",
        top: 0,
        duration: 1,
        delay: -1,
        ease: Power3.easeOut,
        onComplete: function() {
            animateHomePage()
            animateImagery()
        }
    })
    .to("#green", {
        height: "0%",
        duration: 2.5,
        delay: -1,
        stagger: 0.5,
        ease: Power3.easeOut,
    })
    
}


function animateSvg(){
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 4,
        delay: -1,
        ease: Power3.easeInOut,
    })
}

function animateHomePage() {
    var tl = gsap.timeline()
    tl
    .to("#home .parent .child", {
        y: 0,
        stagger: .1,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to("nav a", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: -1,
        ease: Power3.easeInOut
    })
    .to("#home .row img", {
        opacity: 1,
        delay: -1,
        ease: Expo.easeInOut, 
        onComplete: function(){
            animateSvg()
        }
    })
}

function animateImagery(){
    gsap
    .to("#imagery", {
        opacity: 1,
        duration: 2,
        delay: 4,
        ease: Expo.easeInOut,
    })
}

function locoinitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect() {
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showingImage;
        cnt.addEventListener("mousemove", function(dets){
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1
            showingImage = dets.target
            let x = dets.pageX;
            let y = dets.pageY;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${x}px, ${y}px)`
        })

        // cnt.addEventListener("mouseleave", function(dets){
        //     document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0
        // })
    })
}

revealToSpan()
valueSetters()
loadingAnimation()
locoinitialize()
cardHoverEffect()
