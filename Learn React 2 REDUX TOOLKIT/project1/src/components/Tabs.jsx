import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setActiveTabs} from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ["photos", "videos"]
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab)
    console.log(activeTab)

  return (
    <div className='flex gap-4 w-full items-center justify-center'>
        {
            tabs.map((element, index)=>{
                return (
                    <button 
                        className={`${activeTab==element?'bg-blue-600':'bg-gray-600'} px-4 py-2 border rounded cursor-pointer uppercase active:scale-95`}
                        key={index} onClick={()=>{
                            dispatch(setActiveTabs(element))
                        }}
                        >
                        {element}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Tabs