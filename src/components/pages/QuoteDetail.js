import React from 'react'
import {useParams} from "react-router-dom"

function QuoteDetail() {
    const {quoteId} = useParams()


  return (
    <section>
        <h1>QuoteDetail Page</h1>

        <p><strong>QuoteId</strong>  is: {quoteId} </p>
    </section>  
  )
}

export default QuoteDetail