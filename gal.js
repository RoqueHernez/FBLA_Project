const gallery = document.querySelector('#portfolio');
console.log(gallery);
function appendImg(gal, index){
    let img = document.createElement('IMG');
    img.src = `./images/image${index}.jpg`;
    img.classList += `img${index}`;
    gal.append(img);
}
for(let index = 1; index < 18; index++){
    appendImg(gallery, index);
}