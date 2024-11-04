
 const container = document.querySelector(".container");
 const searchinput=document.querySelector(".input");
 const searchbutton=document.querySelector("#Serch-button");

 

  searchbutton.addEventListener("click",async ()=>{
    const quary = searchinput.value.trim();
    if(quary !== ""){
        try{
            const articles = await fetchNewsQuary(quary);
            displayBlogs(articles);

        }catch(error){
           console.log("error in Quary" ,error);
        }
    }
 })

 async function fetchNewsQuary(quary){
    try {

        const url = `https://newsapi.org/v2/everything?q=${quary}&pageSize=10&apikey=a2cfd4fd50a5420a975e8fba1af7a1f0`
        const response= await fetch(url);
        const data = await response.json();
        return data.articles;


    } catch(error){
        console.log("error found ",error);
        return [];

    }
 }


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
        card.classList.add("card");
        const img = document.createElement("img");
        img.src= article.urlToImage;
        img.alt=article.title;
        const title = document.createElement('h2');
        const titlength = article.title.length > 30 ? article.title.slice(0,30)+"....." : article.title;
        title.textContent= titlength;
        // title.textContent= article.title;
        const description = document.createElement('p');
        // const deslength = article.description.length > 120 ? article.title.slice(0,120)+"....." : article.description;
        // description.textContent= deslength; 

        description.textContent= article.description;

        
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.addEventListener("click",function(){
            window.open(article.url, "_blanc");
        })
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
