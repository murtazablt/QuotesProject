import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

function QuoteDetail() {
  const { quoteId } = useParams();
  const match = useRouteMatch()


  const quote = DUMMY_QUOTES.find((q) => q.id === quoteId);

  if (!quote) {
    return <h2>No quote found.</h2>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>

      {/* <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route> */}
    </section>
  );
}

export default QuoteDetail;
