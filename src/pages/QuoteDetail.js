import React from 'react'
import { Route } from 'react-router-dom'
import {useParams} from "react-router-dom"

import Comments from '../components/comments/Comments'

function QuoteDetail() {
    const {quoteId} = useParams()


  return (
    <section>
        <h1>QuoteDetail Page</h1>
        <p>QuoteId  is: {quoteId} </p>
        <Route path={`/quotes/${quoteId}/comments`} >
            <Comments />
        </Route>
        {/* <Route path="/quotes/:quoteId/comments" >
            <Comments />
        </Route> */}
    </section>  
  )
}

export default QuoteDetail