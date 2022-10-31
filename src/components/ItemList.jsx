import Item from "./Item";
import React from "react";

const ItemList = ({ data = [] }) => {
  data.map((producto) => <Item key={producto.id} info={producto} />);
};
export default ItemList;
