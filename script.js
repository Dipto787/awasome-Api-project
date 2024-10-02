let catagory=async ()=>{
    
          
    let res=await fetch('https://openapi.programming-hero.com/api/news/categories');
    let data=await res.json();
    data.data.news_category.forEach(categorys => {

        let categoryContainer=document.getElementById('cetegory-container');
         let div=document.createElement('div');
         div.classList='btn text-black bg-[#ddd]'
         div.innerHTML=`<button onclick="loadNews('${categorys.category_id}')" >${categorys.category_name}</button>`;
         categoryContainer.appendChild(div);
         
         
    });
    
}

let loadNews=async(getId)=>{
    let cardContainer=document.getElementById('card-container');
    cardContainer.innerHTML=' ';
    let respons=await fetch(`https://openapi.programming-hero.com/api/news/category/${getId}`);
    let data=await respons.json();
    data.data.forEach(newsData=>{
        let cardContainer=document.getElementById('card-container');
        console.log();
        
        let div=document.createElement('div');
        div.innerHTML=`
        <div class="card card-side w-[80%] px-3 m-auto mb-5 mt-5 bg-white text-black shadow-xl">
                <figure>
                  <img class="h-72 rounded-3xl w-[500px]"
                    src="${newsData.thumbnail_url}"
                    alt="Movie" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${newsData.title}</h2>
                  <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-up.
                </p>
                <p class="mt-5">
                    Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...
                </p>
                <!-- button -->
                <div class="flex justify-between items-center">
                    <div class="flex gap-5">
                        <img class="rounded-full h-10 " width="" height="" src="${newsData.author.img}" alt="">
                        <div>
                            <h1>Jane Cooper</h1>
                            <p>Jan 10, 2022 </p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <img src="carbon_view.png" alt="">
                        <h1>15m</h1>
                    </div>
                    <div class="card-actions justify-end">
                      <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
                <!-- dd -->
                </div>
              </div>
        `;
         
        cardContainer.appendChild(div);
        
    })
    // cardContainer.textContent=' ';
   
}

// loadNews()
catagory();