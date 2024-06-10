(function (){
    const quotesE1= document.querySelector(".quotes");
const loader= document.querySelector(".loader");

const getQuotes =async (page,limit) =>{
    const API_URL=`https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const response = await fetch(API_URL);
    if(!response.ok){
        throw new Error(`An Error Occured "${response.status}`)
    }

    return await response.json();
}


const showQuotes =(quotes) =>{
    quotes.forEach(quote=>{
        const quoteE1 =document.createElement('blockquote');
        quoteE1.classList.add('quote');

        quoteE1.innerHTML=
           ` <span>${quote.id}</span>
            ${quote.quote}
            <footer>${quote.author}</footer>`;

        quotesE1.appendChild(quoteE1)
    });
};


const hideLoader =()=>{
    loader.classList.remove('show');
}

const showLoader=()=>{
    loader.classList.add('show');
}

let currentPage = 1;
const limit = 15;
let total = 0;


const hasMoreQuotes =(page,limit,total)=>{
    const startIndex =(page-1)*limit+1;
    return total === 0 || startIndex < total
}


const loadQuotes = async(page,limit)=>{
    showLoader();
    setTimeout(async ()=>{
        try{
            if(hasMoreQuotes(page,limit,total)){
                const response = await getQuotes(page,limit);
                showQuotes(response.data);
                total =response.total;
            }
        }catch(error){
            console.log(error.message)
        }finally{
            hideLoader()
        }
    },500);
}

window.addEventListener('scroll',()=>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    }=document.documentElement;

    if(scrollTop+ clientHeight >= scrollHeight-5 && hasMoreQuotes(currentPage,limit,total)){
        currentPage++;
        loadQuotes(currentPage,limit);
    }
},{
    passive:true
});

loadQuotes(currentPage, limit);

})()