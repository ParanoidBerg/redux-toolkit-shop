import React, { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { plus } from "../../redux/reducer";
import { minus } from "../../redux/reducer";
import { del } from "../../redux/reducer";

const Cart = () => {
const dispatch = useDispatch()

  const [opened, setOpened] = useState(false);

  const products = useSelector((state) => state.products)
  const cartItems = useSelector((state) => state.cartItems)

  const handlePlus = (id, left) =>{
      if (left > 0)
      dispatch(plus(id))
  }

  const handleMinus = (id, amount) =>{
    if (amount > 1) {
    dispatch(minus(id))
    }
  }

  const handleRemove = (i) =>{
    dispatch(del(i))
  }

  console.log(cartItems)

  return (
    <>
      <div className={styles.cartButton} onClick={() => setOpened(true)}>
        <img src={bagIcon} alt="" />
        <span>{cartItems.length}</span>
      </div>
        {opened && <div className={styles.openedCart}>
           <button className={styles.close} onClick={() => setOpened(false)}>закрыть</button>
            <table>
              <thead>
               <tr className={styles.shapka}>
                <th >#</th>
                <th>Товары</th>
                <th >Остаток</th>
                <th>Кол-во</th>
               </tr>
              </thead>
              <tbody>
              {cartItems.map((item, index) => {
              return(
                products.map((element) => {
                  if (element.id === item.productId) {
                    return(
                  <tr className={styles.forLine}>
                  <td>{index+1}</td>
                  <td>
                    <img className={styles.img} alt='img' src={element.image}></img>
                    {element.name}
                  </td>
                  <td>{element.left}</td>
                  <td>
                    <button className={styles.plus} onClick={()=>handlePlus(element.id, element.left)}>+</button>
                    {item.amount}
                    <button className={styles.minus} onClick={()=>handleMinus(element.id, item.amount)}>-</button>
                  </td>
                  <td><button className={styles.delBtn} onClick={()=>handleRemove(item.productId)}>X</button></td>
                </tr>
                    )
                  }
                })
              )
            })}
              </tbody>
            </table>
        </div>}
    </>
  );
};

export default Cart;
