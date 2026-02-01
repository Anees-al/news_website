import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BUsiness = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
  const fetchNews=async()=>{
    try {
        const res=await axios.get('https://news-website-0uuz.onrender.com/api/news/business');
        setNews(res.data.articles);
    } catch (error) {
        console.log(error)
    }
  }
  fetchNews()
    },[])
  return (
    <div className='flex flex-col gap-3 p-10'>
      <h1 className='text-3xl font-semibold'>Business</h1>

      <div className='flex flex-col gap-5 '>
         {
            news.slice(0,5).map((article,index)=>(
                <div key={index} className='flex flex-col sm:flex-row w-full h-auto sm:h-[250px] rounded-lg shadow-xl p-3'>
                 <img src={article.urlToImage} alt="" className='w-[300px]  h-[200px]' />

                 <div className='flex flex-col p-4'>
                     <div className='flex flex-row gap-1 text-sm font-semibold text-gray-500'>
                       <p>{article.source.name}</p>
                       <p>|</p>
                       <p>{article.author}</p>

                       
                     </div>
                     <h1 className='text-xl font-semibold mt-5'>{article.title}</h1>
                     <p className='font-semibold text-gray-500 mt-4'>{article.description}</p>
                      <a href={article.url}><p className='text-sm font-bold text-blue-500'>read details</p></a>

                 </div>
                </div>
            ))
         }
      </div>
    </div>
  )
}

export default BUsiness
