import { use, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    const [config, setConfig] = useState([]);
    const [method, setMethod] = useState('GET');
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };

    useEffect(( ) => {
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        }  
        fetchData();  
    }, [url, callFetch]);

    useEffect(() => {
        if (method === 'POST') {
            const postData = async () => {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
            };
            postData();
        }
    }); // <-- Added missing closing parenthesis for the second useEffect

    useEffect(() => {
        if (method) {
            httpRequest();
        }
    }, [config, method, url]); // <-- Fixed indentation and syntax

    return { data, httpConfig };
};