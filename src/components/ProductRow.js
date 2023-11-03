import React from 'react';

function ProductRow ({product}) {
    const {category, name, price, inStock} = product;

    const rowStyle = {
        color: inStock ? 'black' : 'red',
      };

      return (
        <tr style={rowStyle}>
          <td>{category}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{inStock ? 'Yes' : 'No'}</td>
        </tr>
      );
}

export default ProductRow;
 