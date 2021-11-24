import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../API/API';
export default function UserQuotes() {
    const params = useParams();
    const [quoteList, setQuoteList] = useState([]);
    useEffect(() => {
        data(params);
    }, [params])
    const data = async params => {
        try {
            const res = await API.getUserQuotesById(params.userId);
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
