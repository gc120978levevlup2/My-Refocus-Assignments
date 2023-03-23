document.onreadystatechange = () => {
    if (document.readyState === 'complete'){
        setTimeout(()=>{
            window.scrollTo(0,0);
        },1000);
        const els = document.querySelectorAll("*");
        for (const el of els){
            //console.log(el.tagName);
            //console.log(el.classList)
            if (   !(el.tagName === 'HTML'   )
                && !(el.tagName === 'HEAD'   )
                && !(el.tagName === 'META'   )
                && !(el.tagName === 'TITLE'  )
                && !(el.tagName === 'LINK'   )
                && !(el.tagName === 'SCRIPT' )
                && !(el.tagName === 'BODY'   )
                && !(el.tagName === 'SECTION')
                && !(el.tagName === 'HEADER' )
                && !(el.tagName === 'MAIN'   )
                && !(el.tagName === 'FOOTER' )
                && !((el.tagName === 'DIV'   ) && (el.classList.contains('header')))
                && !((el.tagName === 'DIV'   ) && (el.classList.contains('main'  )))
                && !((el.tagName === 'DIV'   ) && (el.classList.contains('footer')))
            ){
                el.classList.add('hide-all');
                const observer = new IntersectionObserver((entries, observer) => {
                    // Loop over the entries
                    entries.forEach(entry => {
                        // If the element is visible
                        if (entry.isIntersecting) {
                            // Add the animation class
                            entry.target.classList.remove('hide-all');
                            entry.target.classList.add('animate-start');
                        }
                    });
                });
                observer.observe(el);
            }
        }
    }
}