
let searchBtn = document.querySelector('#srcBtn');
let ImgContainer = document.querySelector('#photoContainer');
let showMoreBtn = document.querySelector('#showMore-btn');
let loader = document.querySelector('#loader');
let mainBody = document.querySelector('.mainBody');
let apiKey = "Xz3yGRJjI6G5NztYcZ8_ZidujcI_UJzi5z4b9dqO-Uc";
let page = 1;

searchBtn.addEventListener('click', searchImages);

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages(); // Call searchImages again when showMoreBtn is clicked
});

async function searchImages() {
    mainBody.style.opacity = '0.2';
    loader.classList.add('display'); // Show the loading animation
    // Retrieve the value of searchInput inside the function
    let searchInput = document.getElementById("searchInput");
    let searchkey = searchInput.value;

    var url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchkey}&client_id=${apiKey}`;
    
    
//   try {
        
//          let result;
         
//          const resp = await fetch(url);
//          const data = await resp.json();
//         console.log(data);
//          result = data.results;
        
          
//         loader.classList.remove('display'); // Hide the loading animation once the data has  been retrieved
//         mainBody.style.opacity = '1';    //  Make the body visible again once the data has loaded

//         result.forEach((res) => {
//             const imgs = document.createElement("img");
//             imgs.src = res.urls.regular;
            
//             const imgLink = document.createElement("a");
//             imgLink.href = res.links.html;
//             imgLink.target = "_blank";
            
//             imgLink.appendChild(imgs);
//             ImgContainer.appendChild(imgLink);
//         });

//         showMoreBtn.style.display = 'block';
//     } 
//      catch(err){
//        console.log(err);
//      }


try {
    let result;

    
    // Simulate loading time with setTimeout
    setTimeout(async () => { 
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        result = data.results;

        // Hide loader after 2 seconds
        loader.classList.remove('display');

        // Display results
        mainBody.style.opacity = '1';

        result.forEach((res) => {
            const imgs = document.createElement("img");
            imgs.src = res.urls.regular;
            
            const imgLink = document.createElement("a");
            imgLink.href = res.links.html;
            imgLink.target = "_blank";
            
            imgLink.appendChild(imgs);
            ImgContainer.appendChild(imgLink);
        });

        showMoreBtn.style.display = 'block';
    }, 2000); // Delay execution for 2 seconds
} catch(err) {
    console.log(err);
}


}

// https://www.youtube.com/watch?v=E4znbZgUWzA
                                       