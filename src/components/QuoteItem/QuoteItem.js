import React from 'react'
import formatDate from '../../helpers/formatDate'
import '../../styles/QuoteItem.css'
export default function QuoteItem({ quote }) {
    return (
        <div className="QuoteItem p-1 col-md-4 col-sm-12">
            <div className='card p-3'>
                <p className='quoteText'><b><span>&ldquo;</span> </b>{quote.text}</p>
                <p className='quoteAuthor'><b>- {quote.author || <span>Unknown</span>}</b></p>
                <p className='quoteDate'><small><em>{formatDate(quote.createdAt)}</em></small></p>
                <div className='quoteActivity'>
                    <p><b>LIKES: {quote.likes}</b></p>
                </div>
            </div>
        </div>
    )
}
