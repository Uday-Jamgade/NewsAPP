
 const container = document.getElementsByClassName("container");

async function getdata() {
    try {

        const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=a2cfd4fd50a5420a975e8fba1af7a1f0`
        const response= await fetch(url);
        const data = await response.json();
        return data.articles;


    } catch(error){
        console.log("error found ",error);
        return [];

    }
    
}

function displayBlogs(articles){
    container.innerHTML=" ";

    articles.forEach((article)=>{
        const card=  document.createElement("div");
        card.classList.add=" card";
        const img = document.createElement("img");
        img.src= article.urlToImage;
        img.alt=article.title;
        const title = document.createElement('h1');
        title.textContent= article.title;
        const description = document.createElement('p');
        description.textContent= article.description;

        
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        container.appendChild(card);
        
        
    });

}


(async ()=>{
    try {
        const articles = await getdata();
         displayBlogs(articles);
     } catch(error){
        console.log("error found ",error);
    }
})();
