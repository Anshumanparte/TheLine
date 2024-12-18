


function customscrollbar() {
    const scrollbar = document.querySelector('.custom-scrollbar');
    const thumb = document.querySelector('.scroll-thumb');

    // Function to update thumb position and height based on page scroll
    function updateThumb() {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const thumbPosition = (scrollPosition / scrollableHeight) * 100;
        const thumbHeight = (window.innerHeight / document.documentElement.scrollHeight) * 100;

        // Update thumb's position and height
        thumb.style.top = `${thumbPosition}%`;
        thumb.style.height = `${thumbHeight}%`;
    }

    window.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);

    let isDragging = false;
    let startY, startThumbTop;

    thumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        startThumbTop = thumb.offsetTop;
        document.body.style.userSelect = 'none'; // Disable text selection while dragging
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaY = e.clientY - startY;
        const scrollbarHeight = scrollbar.clientHeight;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Calculate the new thumb position
        let newThumbTop = startThumbTop + deltaY;

        // Clamp thumb's position within the scrollbar's bounds
        newThumbTop = Math.max(0, Math.min(newThumbTop, scrollbarHeight - thumb.clientHeight));

        // Calculate the scroll ratio
        const thumbScrollRatio = newThumbTop / (scrollbarHeight - thumb.clientHeight);

        // Update scroll position based on thumb position
        const newScrollPosition = thumbScrollRatio * scrollableHeight;

        // Scroll the page to the new position
        window.scrollTo(0, newScrollPosition);

        // Update thumb's position in sync with scroll
        thumb.style.top = `${(newScrollPosition / scrollableHeight) * 100}%`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.userSelect = ''; // Re-enable text selection
    });

    // Initial setup to position the thumb correctly
    updateThumb();
}









var fpsnumber = document.querySelector("#pre-load-fps span");
var fpsnumplus = 0;
var delay = 0;
var multi=0;
function updateFps() {
    fpsnumber.textContent = fpsnumplus++;
    
    // Stop the function when fpsnumplus reaches 24
    if (fpsnumplus > 24) return;
    
    // Increase delay by 10ms each time
    delay += Math.pow(2,2+multi);
    if(delay>50)
        multi+=.5;
    console.log(`Current delay: ${delay} ms`);
    
    // Schedule the next update with the new delay
    setTimeout(updateFps, delay);
}

// Start the first call
setTimeout(() => {
    updateFps();
    
    
},300);   



function lenis(){
    // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on('scroll', (e) => {
  
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
return lenis;
}
var lenisinstance = lenis();

lenisinstance.stop();

gsap.from('#pre-load-fps', {
    opacity: 0,
    
     // Initial delay before blink starts
    duration: .1, // Duration of each blink (0.5 seconds on, 0.5 seconds off)
    repeat: 3, // Three cycles for two full blinks
     // Enables the yoyo effect, making it blink
     ease: "slow(0.7,0.7,true)", // Easing for a smooth blink
});
gsap.from('.nav-span', {
    opacity: 0,
    
     // Initial delay before blink starts
    duration: .1, // Duration of each blink (0.5 seconds on, 0.5 seconds off)
    repeat:3, // Three cycles for two full blinks
     // Enables the yoyo effect, making it blink
     ease: "slow(0.7,0.7,true)",     // Easing for a smooth blink
});
gsap.from('.nav-a', {
    opacity: 0,
    
     // Initial delay before blink starts
    duration: .01, // Duration of each blink (0.5 seconds on, 0.5 seconds off)
     // Three cycles for two full blinks
     stagger:.2,// Enables the yoyo effect, making it blink
     ease: "slow(0.7,0.7,true)", // Easing for a smooth blink
});
gsap.from('#pre-load-nav .status', {
    opacity: 0,
    delay:.3,
     // Initial delay before blink starts
    duration: .1,
    repeat:2, // Duration of each blink (0.5 seconds on, 0.5 seconds off)
     // Three cycles for two full blinks
     // Enables the yoyo effect, making it blink
     ease: "slow(0.7,0.7,true)", // Easing for a smooth blink
});



gsap.from('#pre-load-bottom-svg2-anime1',{
    transform:"translate(-150%,-50%)",
    duration:1.3
})
gsap.to('#pre-load-bottom-svg2-anime1',{
    height:"100%", 
    delay:1.3
})

gsap.to('#pre-load-bottom-svg2-anime1',{
    scaleY: 0,          // Collapse the SVG by scaling it down to 0
           // Fade out the SVG
       // Duration of the collapse animation
    ease: "power2.in", // Easing for a smooth collapse effect
    transformOrigin: "center center", // Collapse from the center
    delay: 1.7         // Delay before the animation starts
    
})

gsap.to('#pre-load-bottom-svg2-anime',{
          // Collapse the SVG by scaling it down to 0
     opacity:1,  
     duration:.1,    // Fade out the SVG
         // Duration of the collapse animation
   // Easing for a smooth collapse effect
     // Collapse from the center
         delay:1.7 // Delay before the animation starts
    
})
gsap.to('#pre-load-bottom-svg-div', {
    opacity: 1,
    delay: 1.7, // Initial delay before blink starts
    duration: 0.1, // Duration of each blink (0.5 seconds on, 0.5 seconds off)
    repeat: 3, // Three cycles for two full blinks
     // Enables the yoyo effect, making it blink
     ease: "slow(0.7,0.7,true)", // Easing for a smooth blink
});


gsap.to('#pre-load-red',{
    transform:"translateY(-200%) scaleX(2) rotateY(0deg)",
  
    delay:4,
    duration:1,
    transformOrigin: "top left",
})


gsap.to('#pre-load-fps', {
    opacity: 0,
    delay:4,
     // Initial delay before blink starts
    duration: .1, // Duration of each blink (0.5 seconds on, 0.5 seconds off)
    repeat: 3, // Three cycles for two full blinks
     // Enables the yoyo effect, making it blink
    ease: "power1.inOut" // Easing for a smooth blink
});

gsap.to('#preloader', {
    display:"none",
    duration:.1,
    delay:4.2
});

setTimeout(()=>{
  lenisinstance.start(); 
customscrollbar();  
   
},4200)

//above preloader animation and navbar animation only



var tl = gsap.timeline({scrollTrigger:{
    trigger:"#swipe1",
    start:"50% 50%",
    end:"150% 50%",
    scrub:true,
    // markers:true,
}})

tl.to('#colorburnframe ',{
    transformOrigin: "0% 100%",
    transform: "translate(-10%, 0%) rotate(-15deg)",
    ease: "power2.inOut",
    
},"thelinelogo")
tl.to('#siwpe1-botom-logo',{
    transformOrigin: "0% 100%",
    transform: "translate(-10%, 0%) rotate(-15deg)",
    ease: "power2.inOut",
    
},"thelinelogo")





var tl2 = gsap.timeline({scrollTrigger:{
    trigger:"#swipe1-swiper2",
    start:"-100% 50%",
    end:"100% 50%",
    scrub:true,
    // markers:true,
}})

tl2.to('#swipe1-swiper2',{
    
    transformOrigin: "0% 100%",
    transform: "translate(0%, 0%) rotate(0deg)",
    duration:1,
    ease: "power1.inOut",
    
})



tl2.to('#swipe1-swiper2',{
    
    transformOrigin: "0% 100%",
    transform: "translate(0%, 0%) rotate(0deg)",
    duration:1,
    ease: "power1.inOut",
    
})
tl2.to('#swipe1-swiper2', {
    transformOrigin: "0% 100%",
    transform: "translate(-10%, 0%) rotate(-5deg)", 
    duration:1, // Same target position to hold
      // Adjust duration to control how long it holds
    ease: "power1.inOut"   // No easing to keep it static
});



//swiper animation

// Correcting selector and syntax
var highlightElem = document.querySelectorAll(".swipe1-swiper2-about a ");
// var highlighttext = document.querySelectorAll("#swipe1-swiper2-about a span");
// var highlightarrow = document.querySelectorAll("#swipe1-swiper2-about a span svg");

highlightElem.forEach((elem,index) => {
    var highlighttext = elem.querySelector("span");
    var highlightarrow = elem.querySelector("svg");
    console.log(highlightarrow);
    
    elem.addEventListener('mouseenter', () => {

        gsap.to(highlighttext, {
            transform:"translateX(3vw)", // Moves element 100px on the x-axis
            duration: 0.3 // Optional: duration for smooth animation
        });
        gsap.to(highlightarrow, {
            transform:"translateX(1vw)", // Moves element 100px on the x-axis
            duration: 0.3 // Optional: duration for smooth animation
        });
    });

    elem.addEventListener('mouseleave', () => {
        gsap.to(highlighttext, {
            transform:"translateX(0vw)", // Reset position on mouse leave
            duration: 0.3
        });
        gsap.to(highlightarrow, {
            transform:"translateX(0vw)", // Reset position on mouse leave
            duration: 0.3
        });
    });
});






var tl3 = gsap.timeline({scrollTrigger:{
    trigger:"#swipe1-swiper3-wrapper",
    start:"4% 50%",
    end:"12% 50%",
    scrub:true,
    onEnter: function addpointerevent(){
        document.querySelector('#swipe1-swiper3-work1').style.pointerEvents = 'all'
    },
    onLeaveBack:function removepointerevent(){
        document.querySelector('#swipe1-swiper3-work1').style.pointerEvents = 'none'
    },
    
    // markers:true,
    
}})
tl3.to('#swipe1-swiper3-work1-before',{
    transformOrigin: "0% 0%",
    transform: "translate(0%, 0%) translate3d(0px, 0px, 0px) rotate(0deg)",
    duration:3,
},0)
tl3.to('#swipe1-swiper3-work1-after',{
    transformOrigin: "0% 100%",
    transform: "translate(0%, 0%) translate3d(0px, 0px, 0px) rotate(0deg)",
    duration:4,
},0)


function setBackgroundColor() {
    const element = document.querySelector('#swipe1-swiper3-sticky');
    if (element) {
        element.style.backgroundColor = "#dedfe3"; // Change to desired color
    }
}

function revertBackgroundColor() {
    const element = document.querySelector('#swipe1-swiper3-sticky');
    if (element) {
        element.style.backgroundColor = ""; // Revert to default color (or specify another color here)
    }
}

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#swipe1-swiper3-wrapper",
        start: "12% 50%",
        end: "20% 50%",
        scrub: true,
        // markers: true,
        onEnter: setBackgroundColor,        // Triggered when scrolling down into view
        onLeaveBack: revertBackgroundColor   // Pass the function directly
    }
});


tl4.to('#swipe1-swiper3-work1-after',{
    transformOrigin: "0% 100%",
    transform: "translate(-5%, -50%) translate3d(0px, 0px, 0px) rotate(-5deg)",
    duration:2,
},0)
tl4.to('#swipe1-swiper3-work1-before',{
    transformOrigin: "0% 0%",
    transform: "translate(-25%, -80%) translate3d(0px, 0px, 0px) rotate(-7deg)",
    duration:3,
},0)



var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#swipe1-swiper3-wrapper",
        start: "10% 50%",
        end: "20% 50%",
        scrub: true,
        onEnter: function addpointerevent(){
            document.querySelector('#swipe1-swiper3-work2').style.pointerEvents = 'all'
        },
        onLeaveBack:function removepointerevent(){
            document.querySelector('#swipe1-swiper3-work2').style.pointerEvents = 'none'
        },
        // markers: true,
          
    }
});


tl5.to('#swipe1-swiper3-work2-before',{
    transformOrigin: "0% 0%",
    transform: "translate(0%, 0%) translate3d(0px, 0px, 0px) rotate(0deg)",
    
    duration:3,
},1)
tl5.to('#swipe1-swiper3-work2-after',{
    transformOrigin: "0% 100%",
    transform: "translate(0%, 0%) translate3d(0px, 0px, 0px) rotate(0deg)",
    
    duration:4,
},1)


var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#swipe1-swiper3-wrapper",
        start: "20% 50%",
        end: "30% 50%",
        scrub: true,
        // markers: true,
         
    }
});


tl6.to('#swipe1-swiper3-work2-after',{
    transformOrigin: "0% 100%",
    transform: "translate(-5%, -50%) translate3d(0px, 0px, 0px) rotate(-5deg)",
    duration:5,
},0)
tl6.to('#swipe1-swiper3-work2-before',{
    transformOrigin: "0% 0%",
    transform: "translate(-25%, -80%) translate3d(0px, 0px, 0px) rotate(-7deg)",
    duration:3,
},0)


var tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#footer",
        start: "0% 80%",
        end: "15% 80%",
        scrub: true,
        // markers: true,
         
    }
});

tl7.to('#footer-wrapper',{
    transformOrigin: "0% 0%",
    transform: "translate(0%, 0%) translate3d(0px, 0px, 0px) rotate(0deg)",
    
    duration:3,
},1)


var tl8 = gsap.timeline({
    scrollTrigger:{
        trigger:"#footer",
        start:"70% 50%",
        end:"90% 40%",
        scrub: true,
        // markers:true,
    }
})

tl8.to('#footer-wrapper',{
    transformOrigin:"0% 0%",
    transform:"translate(-7%,-25%) rotate(-6deg)"
})