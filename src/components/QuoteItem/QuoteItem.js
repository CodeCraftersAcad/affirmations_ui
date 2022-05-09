import React, { useEffect } from 'react'
import formatDate from '../../helpers/formatDate'

export default function QuoteItem({ quote }) {
    return (
        <div className="card p-3 my-1">
            <p><b>{quote.author}</b></p>
            <p><small>{formatDate(quote.createdAt)}</small></p>
            <p>{quote.text}</p>
            <div>
                <p><b>LIKES: {quote.likes}</b></p>
            </div>
        </div>
    )
}
