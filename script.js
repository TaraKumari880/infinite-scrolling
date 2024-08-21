


const imageContainer = document.getElementById("image-container");
let ready = false;
let imagesLoaded = 0;
let totalImages = 10;
let photosArray = [];



const apiUrl= "https://api.unsplash.com/photos/random/?client_id=HgAI8o_mQF82RKKHOQgwpJUX85VsmX2sc9lvcCFVkzU&count=10"



async function getphotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos()
    }catch(error){

    }
}


function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        imagesLoaded =0;
    }
    console.log("imageloaded");

}

function displayPhotos(){
    photosArray.forEach((photos)=>{
        
        const img = document.createElement("img");
        img.setAttribute("src", photos.urls.regular);
        img.setAttribute("title", photos.alt_description);
        img.addEventListener("load", imageLoaded)

        imageContainer.appendChild(img)
    })
}


window.addEventListener("scroll", function scroll(){
    if(window.scrollY >= document.body.offsetHeight - 2000 && ready){
        ready = false;
        getphotos()
        console.log("more images loaded")
    }
})



getphotos();