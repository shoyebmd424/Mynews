const general =document.getElementById("general");
const business =document.getElementById("business");
const technical =document.getElementById("technical");
const sports =document.getElementById("sports");
const entertainment =document.getElementById("entertainment");


const newssearch =document.getElementById("newssearch");
const newstype =document.getElementById("newstype");
const newsdetail=document.getElementById("newsdetails");

const apikey="a50af5ffe1424b44812fc0d247d458e1";
const headline=" https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const general_news=" https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const business_news=" https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const technical_news=" https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const sports_news=" https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const entertainment_news=" https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const search_news="https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newstype.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};

general.addEventListener("click",function(){
    newstype.innerHTML="<h4>General News</h4>";
    fatchgeneralnews();


});
business.addEventListener("click",function(){
    newstype.innerHTML="<h4>Business News</h4>";

    fatchbusinessnews();

});
technical.addEventListener("click",function(){
    newstype.innerHTML="<h4>Technical News</h4>";

    fatchtechnicalnews();

});
sports.addEventListener("click",function(){
    newstype.innerHTML="<h4>Sports News</h4>";

    fatchsportsnews();

});
entertainment.addEventListener("click",function(){
    newstype.innerHTML="<h4>Entertainment News</h4>";

    fatchentertainmentnews();

});
newssearch.addEventListener("click",function(){
    newstype.innerHTML="<h4>Search : "+newssearch.value+"</h4>";

    fatchnewssearchnews();

});
const fetchHeadlines = async () => {
    const response = await fetch(headline+apikey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetail.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fatchgeneralnews = async () => {
    const response = await fetch(general_news+apikey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetail.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fatchbusinessnews = async () => {
    const response = await fetch(business_news+apikey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetail.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fatchtechnicalnews = async () => {
    const response = await fetch(technical_news+apikey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetail.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fatchsportsnews = async () => {
    const response = await fetch(sports_news+apikey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetail.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fatchentertainmentnews = async () => {
    const response = await fetch(entertainment_news+apikey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetail.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fatchnewssearchnews=async()=>{
    const response=await fetch(search_news+encodeURIComponent(newssearch.value)+"&api"+apikey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetail.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetail.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}
