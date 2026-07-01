import ProductItem from "./productItem";

export default function ProductList(props) {
  const { product, onQuickView } = props;

  const renderProductItem = () => {
    const productItemList = product.map((item) => (
      <ProductItem
        key={item.id}
        itemData={item}
        handleQuickViewItem={onQuickView}
      />
    ));
    return productItemList;
  };

  return (
    <div className="mb-4 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
      {renderProductItem()}
    </div>
  );
}
