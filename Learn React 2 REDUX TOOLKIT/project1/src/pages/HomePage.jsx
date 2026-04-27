import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import Navbar from '../components/Navbar'

const HomePage = () => {

    const { query } = useSelector((store) => store.search)

    return (
        <div>
            <SearchBar></SearchBar>
            {query != '' ? <div>
                <Tabs></Tabs>
                <ResultGrid></ResultGrid>
            </div> : ""
            }
        </div>
    )
}

export default HomePage