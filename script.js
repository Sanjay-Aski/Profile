var nameplate = document.querySelector("#nameplate");
var temp = nameplate.innerHTML;
nameplate.innerHTML = "";
var i = 0;

function nameplat() {
    if (i < temp.length) {
        if (temp[i] === "<") {
            nameplate.innerHTML += "<br>";
            i += 4;
        } else {
            nameplate.innerHTML += temp[i];
            i++;
        }
    }
}
setInterval(nameplat, 100);


var skill = document.getElementById("skills");
var img_container = document.getElementById("img_container");
var pic_file = ['java','mysql','Django','python','connection','html','css','js'];

var Pic_arrange = () => {
    if(img_container.innerHTML != ""){
        img_container.innerHTML = "";
    }
    let i = 0;
    let intervalId = setInterval(() => {
        const img = document.createElement('img'); 
        const img_src = '../Profile/pictures/Skill/' + pic_file[i] + '.png'; 
        img.src = img_src; 
        img.alt = pic_file[i];
        img.classList.add(pic_file[i]); 
        img.style.height = '8rem' ;
        img.style.width = 'auto' ;
        img_container.appendChild(img);
        i++;
        if(i == pic_file.length) {
            clearInterval(intervalId);
        }
    }, 100);
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            img_container.innerHTML = "";
            Pic_arrange();
        }
        else{
            img_container.innerHTML = "";
        }
    });
}, { threshold: 0.2 });


window.addEventListener('scroll', () => {
    const skillSection = document.getElementById("skill");
    const boundingRect = skillSection.getBoundingClientRect();
    
    if (boundingRect.top > window.innerHeight || boundingRect.bottom < 0) {
        img_container.innerHTML = "";
    }
});
const skillSection = document.getElementById("skill");
observer.observe(skillSection);
