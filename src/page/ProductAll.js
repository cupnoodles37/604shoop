import React, { useEffect, useState } from "react";
import ProductCard from "../conponent/ProductCard";
import { useSearchParams } from "react-router-dom";

function ProductAll() {
  const [productList, setProductList] = useState([]);
  let [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery=query.get("q") || "";
    //await(비동기적) -> async를 넣어 순서적으로 되게 해야한다.
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/cupnoodles37/604shoop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  // useEffect(()=>{},[])//[]배열이 비어있으면 component가 실행될 때 한 번만 실행된다.
  // useEffect(()=>{},[변수])//[]에 변수가 있으면 component가 실행될 때 한 번만 실행되고 변수값이 바뀔 때마다 함수가 실행된다.ㄴ
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="cards">
      {productList.map((menu) => {
        return <ProductCard key={menu.id} item={menu} />;
      })}
    </div>
  );
}

export default ProductAll;
