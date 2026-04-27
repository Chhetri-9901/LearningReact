import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

const Collection = () => {
  const collection = useSelector(state => state.collection.items)
  return (
    <div className='flex justify-around w-full flex-wrap gap-5 mt-10  gap-y-10 overflow-auto'>
      {collection.map((item, idx) => {
        return <div key={idx}>
          <CollectionCard item={item} />
        </div>
      })
      }
    </div >
  )
}

export default Collection