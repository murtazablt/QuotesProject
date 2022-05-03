import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    text: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck",
  },
  {
    id: "q2",
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    id: "q3",
    text: "The best way to learn is to teach.",
    author: "Richard Feynman",
  },
  {
    id: "q4",
    text: "The best way to fail is to not try.",
    author: "Elbert Hubbard",
  },
  {
    id: "q5",
    text: "The best way to learn is to ask questions.",
    author: "C.S. Lewis",
  },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
