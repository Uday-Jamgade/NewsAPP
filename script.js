const apikey= "a2cfd4fd50a5420a975e8fba1af7a1f0";

async function getdata() {
    try{
        const response= await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apikey}`);
        const data = await response.json();


    }catch(error){
        console.log("error found ",error);
        return [];

    }
    
}

