import { URL } from '../../../backend'

import React from 'react'
import useFetch from '../../../store/actions/useFetch'
import AddProject from './AddProject'

const Projects = () => {
    const {loading, error, data} =useFetch(URL)

    console.log({data,error})
    return (
        <div>
            <AddProject />
        </div>
    )
}

export default Projects
