const containerelement=document.querySelector('.counter');
const loadingbar=document.querySelector('.loading-bar-front');

let index=0;

result()

function result(){
    containerelement.innerText=`${index}%`;
    loadingbar.style.width=`${index}%`;
    index++;
    if(index<=100){
        setTimeout(result,50)
    }
}

