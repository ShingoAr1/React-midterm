import {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import { configKeys } from '../config/apikeys'


const NewsList = () => {
  const [articles, setArticles] = useState([])
  
  
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': configKeys.X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': configKeys.X_RAPIDAPI_HOST
    }
  };

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://transfermarket.p.rapidapi.com/news/list-by-club?id=6321&domain=com', options)
      const data = await response.json()
      setArticles(data.news)
      console.log(data);
    }catch (error){
      console.log(error)
    }
  }




  return (
    <>
      
       {articles.map(n => {
                return(
                  <>
                  <NewsItem 
                  onClick={() => setShowPopup(true)} 
                    id={n.id}
                    newsFirstImage={n.newsFirstImage}
                    newsHeadline={n.newsHeadline}
                    newsDate={n.newsDate} 
                    />

                  </>
                  

                )
                })}  
    </>
    
  )
}

export default NewsList