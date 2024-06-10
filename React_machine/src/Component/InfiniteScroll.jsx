import React, { useEffect, useRef, useState } from 'react'

export default function InfiniteScroll() {
    const [quotes,setQuotes]=useState([])
    const [loading,setLoading]=useState(false);
    const [page,setPage]=useState(1);
    const [total,setTotal] =useState(0);
    const loader =useRef(null);

    const limit=10;

    const getQuotes =async (page,limit)=>{
        const API_URL=`https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
        const response =await fetch(API_URL);

        if(!response.ok){
            throw new Error(`An Error ocuurred :${response.status}`)
        }

        return await response.json();
    }


    const loadQuotes= async ()=>{
        setLoading(true);
        try{
            const response = await getQuotes(page,limit);
            setQuotes((prevQuotes) => [...prevQuotes, ...response.data]);
            setTotal(response.total);
        }catch(error){
            console.log(error.message)
        }finally{
            setLoading(false)
        }
    }

    
    const hasMoreQuotes =()=>{
        const startIndex=(page-1)*limit+1;
        return total === 0 || startIndex<total;
    }
    const handleObserver=(entities)=>{
        const target =entities[0];
        if(target.isIntersecting && hasMoreQuotes()){
            setPage((prevPage)=>prevPage+1)
        }
    }
    useEffect(()=>{
        loadQuotes();
    },[page]);

    useEffect(()=>{
        const option={
            root:null,
            rootMargin :'20px',
            threshold:1.0
        };

        const observer = new IntersectionObserver(handleObserver,option);
        if(loader.current){
            observer.observe(loader.current)
        }
        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    },[])
  return (
    <div className="quotes-container">
    {quotes.map((quote) => (
        <blockquote className="quote" key={quote.id}>
            <span>{quote.id}</span>
            {quote.quote}
            <footer>{quote.author}</footer>
        </blockquote>
    ))}
    {loading && <div className="loader">Loading...</div>}
    <div ref={loader}></div>
</div>
  )
}
