import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData = (apiEndPoint) => {
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true)
    const [initialLoad, setInitialLoad] = useState(true)
    const [allMovie, setAllMovie] = useState([])


    useEffect(() => {
        if (initialLoad) {
            setInitialLoad(false)
            setLoading(false)
            return;
        }
        setLoading(true);
        const fetchAllData = async () => {
            try {
                const res = await axios.get(apiEndPoint)
                const allData = res.data;
                setAllData(allData)
                setAllMovie(allData)
                setLoading(false)
            } catch (error) {
                console.error("error fetching movie data:", error)
                setLoading(false)
            }
        }

        if (apiEndPoint) {
            fetchAllData();
        }
    }, [initialLoad, apiEndPoint])

    return { allData, allMovie, loading }
}

export default useFetchData;