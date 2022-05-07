import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import QuoteForm from "../components/quotes/QuoteForm"

import useHttp from '../hooks/use-http'
import {addQuote} from '../lib/api'

function NewQuote() {
  const {sendRequest, status} = useHttp(addQuote)

  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes')
    }
    

  },[status,navigate])

  const addQuoteHandler = (newQuote) => {
    sendRequest(newQuote)
    //push method allows users to go back to previous page but replace does not.
    // history.push('/quotes')
  }

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote