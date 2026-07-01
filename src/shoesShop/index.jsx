import React from "react";
import ProductList from "./productList";
import HeadingFilter from "./headingFilter";
import FilterModal from "./filterModal";
import ModalBoxContent from "./modalBoxContent";
import Data from "./../../data.json";
import { useState } from "react";

export default function ShoesShop() {
  const [arrData, setArrData] = useState(Data);
  const [selectedItem, setSelectedItem] = useState(arrData);

  const handleQuickView = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <HeadingFilter />
      <FilterModal />
      <ProductList product={arrData} onQuickView={handleQuickView} />
      <ModalBoxContent getItem={selectedItem} />
    </div>
  );
}
