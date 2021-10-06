import {useState, useEffect} from "react"

const useFetch = (url = '', options = {method:'GET'}) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [isMounted, setIsMounted] = useState(false)
    const [loading,setLoading] = useState(false)

    const methodFunctions =  (data) => {
        fetch(url,{...options,body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(data =>{
            if (isMounted) {
                console.log({data})
            setData(data)
            setError(null)
            }
        })
        .catch(error => {
            if (isMounted) {
            setError(error)
            setData(null)
            }
        })
        .finally(() => isMounted && setLoading(false))

    } 

    useEffect(() => {
        setLoading(true)

       if(options.method === "GET") methodFunctions()


        return () => setIsMounted(false)
    
    }, [url, options,data ])

    return {loading, error, data, methodFunctions}
}

export default useFetch