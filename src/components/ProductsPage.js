// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);


  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar />
      <ProductTable products={products} />
      </div>    
  )
}

export default ProductsPage;



// // Having the following erro but can't seem to be able to fix it so skipped the Filtering
// // ERROR
// Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

// Check the render method of `ProductTable`.
// // Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.