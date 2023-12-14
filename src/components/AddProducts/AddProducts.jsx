import { useState } from "react";
import styles from "./addproducts.module.css";
import Input from "../Input/Input";

const AddProducts = () => {
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const [isValidatedProduct, setIsValidatedProduct] = useState(true);
  const [isValidatedPrice, setIsValidatedPrice] = useState(true);
  const [isValidatedQuantity, setIsValidatedQuantity] = useState(true);

  const onAddProduct = () => {
    const isProductNameValid = validateProductName(productName);
    const isPriceValid = validatePrice(price);
    const isQuantityValid = validateQuantity(quantity);

    console.log(isProductNameValid, isPriceValid, isQuantityValid);

    const isValid = isProductNameValid && isPriceValid && isQuantityValid;

    if (!isValid) {
      return;
    }

    const product = {
      productName,
      price,
      quantity,
    };
    setProducts([...products, product]);
    setProductName("");
    setPrice("");
    setQuantity("");
  };

  const onGetProductName = (value) => {
    setProductName(() => value);
    validateProductName(value);
  };

  const onGetPrice = (value) => {
    setPrice(() => value);
    validatePrice(value);
  };

  const onGetQuantity = (value) => {
    setQuantity(() => value);
    validateQuantity(value);
  };

  const validateProductName = (name) => {
    return name.trim() !== ""
      ? setIsValidatedProduct(true)
      : setIsValidatedProduct(false);
  };

  const validatePrice = (price) => {
    return !isNaN(price) && parseFloat(price) > 0
      ? setIsValidatedPrice(true)
      : setIsValidatedPrice(false);
  };

  const validateQuantity = (quantity) => {
    return !isNaN(quantity) && parseInt(quantity) > 0
      ? setIsValidatedQuantity(true)
      : setIsValidatedQuantity(false);
  };

  return (
    <div className={styles["products"]}>
      <Input
        label="Product:"
        placeholder="Enter product name"
        onChangeFunction={onGetProductName}
        value={productName}
        type="text"
        validation={isValidatedProduct}
      />

      <Input
        label="Price:"
        placeholder="Enter price"
        onChangeFunction={onGetPrice}
        value={price}
        type="number"
        validation={isValidatedPrice}
      />

      <Input
        label="Quantity:"
        placeholder="Enter quantity"
        onChangeFunction={onGetQuantity}
        value={quantity}
        type="number"
        validation={isValidatedQuantity}
      />

      <button
        className={styles["addProducts"]}
        type="button"
        onClick={onAddProduct}
      >
        Add Product
      </button>

      <div className={styles["product-card"]}>
        {products.map((product, index) => {
          const { productName, price, quantity } = product;
          return (
            <div key={index}>
              <div>{`Product: ${productName}`}</div>
              <div>{`Price: ${price}`}</div>
              <div>{`Quantity: ${quantity}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddProducts;
