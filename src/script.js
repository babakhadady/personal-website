

const loadchar = () => {
    let list = [...document.querySelectorAll('.listitems')];

    let map = new Map();
    
    console.log(list);
    
    let option = {
        rootMargin: '-10%',
        threshold: 0
    }
     
    let observer = new IntersectionObserver(showItem, option);
    
    function showItem(entries){
        entries.forEach(entry=> {
            if(entry.isIntersecting) {
                animateText(entry);
            }
        })  
    }
    
    function animateText(entry) {
        const text = entry.target;
        const stringText  = text.textContent;
        const split = stringText.split("");
        
        if (map.get(text) != true) {
            map.set(text, true);
    
            console.log(map.get(entry));
    
            text.textContent = "";
            for(let i=0; i < split.length; i++) {
                text.innerHTML += "<span>" + split[i] + "</span>";
            }
    
            let char = 0;
            let timer = setInterval(onTick, 30);
            text.style.opacity = "1";
    
            function onTick() {
                if (char == split.length) {
                    end();
                    return;
                }
                const span1 = text.querySelectorAll('span')[char];
                span1.classList.add('animate');
                char++
            }
    
            function end() {
                clearInterval(timer);
                timer = null;
            }
        } else {
        }
    }
    
    
    list.forEach(item=> {
        observer.observe(item);
    })
}

export default loadchar;


