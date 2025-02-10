let check = true;   
function change(){
    if(check == true){
        let box = document.getElementById('box');
        box.style.backgroundImage = 'url(lilght.jpg)'
        check = false;
    }
    else if(check == false){
        box.style.backgroundImage = 'url(hello.jpg)'
        check='third';
    }
    else{
        box.style.backgroundImage = 'url(img.avif)'
        check = true;
    }
}
