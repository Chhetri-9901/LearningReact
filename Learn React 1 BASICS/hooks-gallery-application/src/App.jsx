import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  let loadingScreen = <h1>Loading....</h1>

  async function getData() {
    const dataList = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`);
    setUserData(dataList.data);
    console.log(userData);
  }

  
  function printData() {
    return userData.map((elem, index) => {
      return (
        <div key={index}>
          <div className='h-40 w-40'>
            <img src={elem.download_url}
              className='h-full w-full object-cover'
              alt="_blank" />
          </div>
          <h3>{elem.author}</h3>
        </div>
      )
    }
    )
  };

   useEffect( ()=> {
    getData()
  },[]  )



  return (
    <div className='p-6'>
      {/* <button
        onClick={() => { getData() }}
        className=' py-2 px-4 bg-blue-500  w-max rounded-2xl cursor-pointer'>
        Click and see data
      </button> */}
      <h1 className='flex justify-center'>Your are in page {index}</h1>

      <div className='p-5 w-full flex flex-wrap justify-center gap-8'>{printData()}</div>
      <div className='mt-5 flex flex-row gap-8 justify-center'>
        <button 
          className={`px-4 py-3 text-white rounded cursor-pointer
          ${index === 1? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'}`}
          onClick={()=>{
            if(index>1) {
              setIndex(index-1);
              getData()
              setUserData([])
            }
          }}
          disabled={index === 1}  
          >
            Previous section
        </button>
        <button 
          className='px-4 py-3 bg-blue-500 text-white rounded cursor-pointer'
          onClick={()=>{
            setIndex(index+1);
            getData()
            setUserData([])
          }}
          >
            Next section
        </button>
      </div>
    </div>
  )
}

export default App