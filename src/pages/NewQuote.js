import React from 'react'
import { useHistory } from 'react-router-dom'

import QuoteForm from "../components/quotes/QuoteForm"


function NewQuote() {
  const history = useHistory()

  const addQuoteHandler = (newQuote) => {
    console.log(newQuote)
    //push method allows users to go back to previous page but replace does not.
    history.push('/quotes')
  }

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote