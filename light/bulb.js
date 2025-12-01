document.addEventListener('DOMContentLoaded', () => {

    let btn = document.querySelector('btn');

    let image = document.getElementById('bulb_img');
    let audio = document.querySelector('#audio');
    let lighthum = document.querySelector('#light_hum');
    let body = document.body;

    btn.addEventListener('click', () =>{
        body.classList.toggle("on");
        lightChange();

        if(audio.paused){
            audio.currentTime = 0;
            audio.play();
        }
    });

    function lightChange(){
        if(image.src.includes("bulb_off")){
            image.src = "offbulb.PNG"
            lighthum.play();
            setTimeout(() => {
                image.src = "onbulb.PNG";
            }, 1200);
    }else{
        image.src = "offbulb.PNG";
    }
}
});