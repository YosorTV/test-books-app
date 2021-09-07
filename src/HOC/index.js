import { createContext, useEffect, useState } from "react";
import { Loader, Error } from "../components/UI";
import { getBooks } from "../helpers";

export const Context = createContext();

export const BooksProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks(setBooks, setLoading, setError);
  },[])

  return(
    <>
      {error && <Error error={error}/>}
      {loading && <Loader />}
      <Context.Provider value={books}>
          {children}
      </Context.Provider>
    </>
  )
}