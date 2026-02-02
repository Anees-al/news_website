import axios from "axios";



export const getTopHeadline=async(req,res)=>{
    try {
         const { country="us" , category } = req.query;
         const responce=await axios.get(
            "https://newsapi.org/v2/top-headlines",
            {
                params: {
          country,
          category,
          apiKey: process.env.API_KEY,
        },
            }
         )


         return res.status(200).json({success:true,message:'successfully fetched',articles:responce.data.articles})
    } catch (error) {
        return res.status(500).json({message:error.message,success:false})
    }
}



export const getSports=async(req,res)=>{
    try {
         const { country="us" , category } = req.query;
         const responce=await axios.get(
            "https://newsapi.org/v2/top-headlines?category=sports",
            {
                params: {
          country,
          category,
          apiKey: process.env.API_KEY,
        },
            }
         )


         return res.status(200).json({success:true,message:'successfully fetched',articles:responce.data.articles})
    } catch (error) {
        return res.status(500).json({message:error.message,success:false})
    }
}





export const getbusiness=async(req,res)=>{
    try {
         const { country="us" , category } = req.query;
         const responce=await axios.get(
            "https://newsapi.org/v2/top-headlines?category=business",
            {
                params: {
          country,
          category,
          apiKey: process.env.API_KEY,
        },
            }
         )


         return res.status(200).json({success:true,message:'successfully fetched',articles:responce.data.articles})
    } catch (error) {
        return res.status(500).json({message:error.message,success:false})
    }
}



export const gettechnology=async(req,res)=>{
    try {
         const { country="us" , category } = req.query;
         const responce=await axios.get(
            "https://newsapi.org/v2/top-headlines?category=technology",
            {
                params: {
          country,
          category,
          apiKey: process.env.API_KEY,
        },
            }
         )


         return res.status(200).json({success:true,message:'successfully fetched',articles:responce.data.articles})
    } catch (error) {
        return res.status(500).json({message:error.message,success:false})
    }
}