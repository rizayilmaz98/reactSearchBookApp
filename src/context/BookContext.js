import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [search, setSearch] = useState("React");
  const [data, setData] = useState(null);
  console.log(search);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20&key=AIzaSyB0c5du_dvyxuXW_B6fvaQ1A_Ls7S2QUHY`
      )
      .then((res) => setData(res.data));
  }, [search]);
  const values = {
    search,
    setSearch,
    data,
  };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
export default BookContext;
