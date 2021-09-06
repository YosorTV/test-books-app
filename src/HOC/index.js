import { createContext, useEffect, useState } from "react";
import { Loader } from "../components/UI/Loader";
import { getBooks } from "../helpers";

export const Context = createContext();

export const BooksProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks(setBooks, setLoading, setError);
  },[])

  return(
    <>
      {error && <div>{error}</div>}
      {loading 
      ? <Loader />
      : <Context.Provider value={books}>
          {children}
        </Context.Provider>
      }
    </>
  )
}