import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../API/API';
export default function UserQuotes() {
    const params = useParams();
    const [quoteList, setQuoteList] = useState([]);
    useEffect(() => {
        data(params);
    }, [params])
    console.log(quoteList);
    const data = async params => {
        try {
            const res = await API.getAllQuotes(params.userId);
            if (res && res.data.quotes) setQuoteList(res.data.quotes);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            {quoteList.map(quote => (
                <div key={quote._id}>{quote.text}</div>
            ))}
        </div>
    )
}
