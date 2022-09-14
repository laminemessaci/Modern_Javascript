import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  books: [],
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "BOOKS_REQUEST":
      return {
        loading: true,
      };
    case "BOOKS_SUCCESS":
      return {
        loading: false,
        books: payload,
        error: null,
      };

    case "BOOKS_ERROR":
      return {
        loading: false,
        books: [],
        error: payload,
      };
    default:
      return state;
  }
};

function App() {
  const { state, dispatch } = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        dispatch({ type: BOOKS_REQUEST });
        const res = await axios.get("https://fakerapi.it/api/v1/books");
        console.log(res.data.data);
        dispatch({ type: BOOKS_SUCCESS, payload: res.data.data });
      } catch (e) {
        dispatch({ type: BOOKS_ERROR, payload: e.message });
      }
    };
    fetchBooks();
  }, []);

  const { loading, error, books } = state;

  return (
    <div>
      {loading ? (
        App(<h1>...Loading</h1>)
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        books.map((book) => <h1 key={books.isbn}>{book.title}</h1>)
      )}
    </div>
  );
}

export default App;
