import "./App.css";
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';

// import CreateNote from './components/notes/CreateNote';
// import ListNotes from './components/notes/ListNotes';

import NavBar from "./components/e-commerce/navbar/NavBar";
import ProductList from "./components/e-commerce/productList/ProductList";

function App() {
  return (
    <div className="App">
      {/* <Child1 />
     <Child2 /> */}

      <NavBar />
      <ProductList />

      {/* 
<CreateNote />
<ListNotes /> */}
    </div>
  );
}

export default App;

// npm i @reduxjs/toolkit react-redux
