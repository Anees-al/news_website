import axios from 'axios';
import React, { useEffect, useEffectEvent, useState } from 'react'

const Sports = () => {

    const [news,setNews]=useState([]);

    useEffect(()=>{
   const fetchNews=async()=>{
    try {
        const res=await axios.get('https://news-website-0uuz.onrender.com/api/news/sports');
        setNews(res.data.articles);
    } catch (error) {
        console.log(error)
    }
   }

   fetchNews()
    },[])
  return (
    <div className='flex flex-col gap-10 p-10'>
      <h1 className='text-3xl font-semibold'>Sports</h1>


      <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
       {
        news.slice(0,8).map((article,index)=>(
            <div className='flex flex-col'>
                <div key={index}  className='flex flex-col w-[330px]  h-[450px]  shadow-lg'>
            <img src={article.urlToImage} alt="" className='w-full h-[200px]' />
            <div className='flex flex-row gap-2 text-sm font-semibold text-gray-500 ml-3 mt-3'>
                <p className=''>{article.source.name}</p>
                <p>|</p>
                <p className='text-red-500'>{article.author}</p>
            </div>
            <div className='flex flex-col items-center justify-center p-3'>
                <p className='text-center font-bold mt-3' >{article.title}</p>
                <p className='text-sm font-semibold text-gray-700 mt-6'>{article.description}</p>
                
            </div>
                        </div>

                        <div>
                            <a href={article.url}><p className='text-center p-2 text-white rounded-b-lg bg-black h-10 w-[330px] font-semibold text-blue-500'>Read More</p></a>

                        </div>
            </div>
        ))
       }
      </div>
    </div>
  )
}

export default Sports
