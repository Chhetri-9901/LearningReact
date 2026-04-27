import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {
  const dispatch = useDispatch()

  const addToCollection = (item) => {
    // const oldData = JSON.parse(localStorage.getItem('collection')) || []
    // console.log(oldData)

    // const newData = [...oldData, item];

    // localStorage.setItem('collection', JSON.stringify(newData))
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  return (
    <div className='w-[25vw] h-[25vw] bg-gray-500 rounded relative mb-5'>
      {item.type == 'photo'? <img src={item.src} alt=""/> :''}
      {item.type == 'video'? <video autoPlay loop muted src={item.src} alt=""/> :''}
      <h3>{item.title}</h3>

      <div className='absolute left-4 top-4'>
        <button
        className='px-4 py-2 bg-blue-600 text-taupe-50 rounded active:scale-90 cursor-pointer'
         onClick={() => {
          addToCollection(item)
        }}>Save</button>
      </div>
    </div>
  )
}

export default ResultCard