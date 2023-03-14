import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { loadProducts } from "../../../Redux/slices/productSlice";
import { fetchData } from "../../../Redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  const status = useSelector((state) => state.productReducer.status);

  const error = useSelector((state) => state.productReducer.error);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === "loading") {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
      <Spin
        style={{ position: "absolute", top: "40%", left: "50%" }}
        indicator={antIcon}
      />
    );
  }

  if (status === "failed") {
    return (
      <>
        <h3>Uh oh! Something went wrong</h3>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div className="ProductList">
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;

// npm install eslint-plugin-react-hooks@next  =>  ** for react icon ****

// import { LoadingOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

// const App: React.FC = () => <Spin indicator={antIcon} />;

// *******************************************

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loadProducts } from "../../../Redux/slices/productSlice";
// import SingleProduct from "../singleProduct/SingleProduct";
// import "./ProductList.css";

// function ProductList() {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.productReducer.products);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     const response = await fetch("https://api.escuelajs.co/api/v1/products");

//     const data = await response.json();
//     dispatch(loadProducts(data));
//   }

//   return (
//     <div className="ProductList">
//       {products.map((item) => (
//         <SingleProduct key={item.id} product={item} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;

// // npm install eslint-plugin-react-hooks@next
