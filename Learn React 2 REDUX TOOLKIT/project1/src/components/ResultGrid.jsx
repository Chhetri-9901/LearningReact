import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setQuery, setLoading, setResults, setError, clearResult } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
        if(!query) return
        const getData = async function () {
            try {
                dispatch(setLoading())
                let data = [];
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: "video",
                        title: item.user.name || "video",
                        thumbnail: item.image,
                        src: item.video_files[0].link
                    }))
                }
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab, dispatch])

    if (error) {
        return (
            <h1>Error Found</h1>
        )
    }
    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <div className='flex justify-around w-full flex-wrap gap-5 mt-10  gap-y-10 overflow-auto'>
            {
                results.map((item, index) => {
                    return (
                        <div key={index}>
                            <ResultCard item={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ResultGrid