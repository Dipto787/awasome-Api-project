let catagory=async ()=>{
    let res=await fetch('https://openapi.programming-hero.com/api/news/categories');
    let data=await res.json();
    data.data.news_category.forEach(categorys => {
        let categoryContainer=document.getElementById('cetegory-container');
         let div=document.createElement('div');
         div.classList='btn text-black bg-[#ddd]'
         div.innerHTML=`<button>${categorys.category_name}</button>`;
         categoryContainer.appendChild(div)
    });
    
}
catagory()