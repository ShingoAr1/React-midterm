import {useState} from 'react'
import Popup from './popup'

const NewsItem = ({id,newsFirstImage,newsHeadline,newsDate}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    <div id='news-item' key={id} onClick={()=> setShowPopup(true)} className='w-full h-auto p-3 border-l border-b border-sky-900 p-2 m-2 shadow-item shadow-sky-900 flex flex-col md:grid md:grid-cols-5 md:gap-2 hover:shadow-lg md:active:shadow-lg '>
      <img src={newsFirstImage} alt={newsFirstImage} className="row-span-3 m-2  w-3/5 place-self-center" />
      <p className='col-span-4 w-4/5 text-left font-semibold text-slate-300 md:text-right'>{newsDate}</p>
      <h3 className='row-span-3 col-span-4 text-2xl font-bold truncate text-sky-900 md:text-4xl lg:text-5xl'>{newsHeadline}</h3>
      
    </div>
    <Popup 
    open={showPopup}
    onClose={()=> setShowPopup(false)} 
    id={id}
    newsDate={newsDate}
    newsHeadline={newsHeadline}
    newsFirstImage={newsFirstImage}
    />
    </>
    
  )
}

export default NewsItem