export const printPrice = (product) => {
  const { price, discount } = product;

  if (!discount) {
    return <h4>{price} ₽</h4>;
  }

  // ...
};
