import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import QuoteItem from '../../components/QuoteItem/QuoteItem';
import AddQuotes from '../AddQuotes/AddQuotes';
import API from '../../API/API';
export default function UserQuotes() {
    const params = useParams();
    const [quoteList, setQuoteList] = useState([]);
    useEffect(() => {
        data(params);
    }, [params])
    const data = async params => {
        try {
            const res = await API.getAllQuotes();
            setQuoteList(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="p-2">
            {/* <AddQuotes /> */}
            <>
                {quoteList.map(quote => (<QuoteItem key={quote._id} quote={quote} />
                ))}
            </>
        </div>
    )
}
