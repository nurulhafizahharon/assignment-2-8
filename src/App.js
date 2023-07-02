import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { dummyData } from "./data";
import Header from "./routes/Header";
import View from "./routes/View";
import ItemDefault from "./routes/ItemDefault";
import Item from "./routes/Item";
import Add from "./routes/Add";

function App() {
  const DefaultPage = () => <p>Error 404. URL not found</p>;
  const [list, setList] = useState(dummyData);

  const handlerDeleteProduct = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handlerAddProduct = (product) => {
    setList((prevList) => [...prevList, product]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="view" element={<View list={list} />}>
            <Route index element={<ItemDefault />} />
            <Route
              path=":id"
              element={
                <Item list={list} handlerDelete={handlerDeleteProduct} />
              }
            />
          </Route>
          <Route path="add" element={<Add handlerAdd={handlerAddProduct} />} />
          <Route path="*" element={<DefaultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
