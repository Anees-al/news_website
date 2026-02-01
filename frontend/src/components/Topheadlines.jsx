import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Topheadlines = () => {
    const [news,setNews]=useState([]);

   useEffect(()=>{
   const fetchNews=async()=>{
    try {
         const res=await axios.get('https://news-website-0uuz.onrender.com/api/news/top-headlines');
         setNews(res.data.articles)
         console.log(res.data.articles)
    } catch (error) {
         console.log(error)
    }
   }
   fetchNews();


   },[])
  return (
    <div className='flex flex-col gap-10 p-10'>
         <h1 className='text-4xl font-semibold'>Top Headlines</h1>
         <div className='grid grid-cols-1 sm:grid-cols-4   gap-10 '>
      {
        news.slice(0,4).map((article, index)=>(
            <div key={index}  style={{backgroundImage:`url(${article.urlToImage})`}} className='flex flex-row w-[300px] sm:w-[350px] h-[200px] bg-cover bg-center p-5 justify-end items-end rounded-sm shadow cursor-pointer hover:shadow-xl'>
                <p className='text-white font-bold'>{article.title}</p>
            </div>
        ))
      }
    </div>

     <div className='flex flex-col   gap-5 '>
      {
        news.slice(5,9).map((article, index)=>(
            <div key={index}   className='flex flex-col sm:flex-row w-full h-auto sm:h-[250px] bg-cover bg-center p-5  rounded-sm shadow cursor-pointer hover:shadow-xl'>
                <img src={article.urlToImage} alt="" className='w-[300px]  h-[200px]'/>

                <div className='flex flex-col h-auto p-5 gap-2'>
                    <div className='flex flex row text-sm font-semibold text-gray-500 gap-2'>
                        <p >{article.source.name} </p>
                        <p>|</p>
                        <p> {article.author}</p>
                    </div>
                       <h1 className='text-xl font-semibold'>{article.title}</h1>

                       <p className=' font-semibold text-gray-600'>{article.description}</p>
                       <a href={article.url}><p className='text-sm font-bold text-blue-500'>read details</p></a>
                </div>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default Topheadlines
