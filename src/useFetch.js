import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // No need to store a useEffect in a constant since it is not returning anything to us. 

    useEffect(() => {
        const abortConst = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortConst.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data requested.')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError') {
                    console.log('Fetch Aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },1000);

        return () => abortConst.abort();
    }, [url]);

    return { data, isPending, error }
};

export default useFetch;