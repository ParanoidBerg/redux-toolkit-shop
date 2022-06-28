import { useDispatch } from 'react-redux'
import styles from './product.module.css'
import { add } from '../../../redux/reducer'
import { useState } from 'react'

function Product({ product }) {

  const [inCart, setBtn] = useState(false)

  const disabled = product.left === 0 ? true : false

  const dispatch = useDispatch()

  
  
  const handleAddtoCart = (id) =>{
    dispatch(add(id))
    setBtn(true)
  }

  return (
    
      <div className={styles.product}>
        <div className={styles.inner}>
          <div className={styles.image}>
            <img alt='ima' src={product.image}></img>
          </div>
          <div className={styles.price}>
            <h4>{product.discount !== '' ? (product.price * (100 - product.discount)/100) : ''} ₽</h4>
            <strike>
            {product.discount ? product.price + ' ₽' : '' } 
            </strike>
          </div>
          <div className={styles.name}>{product.name}</div>
          <button onClick={()=>handleAddtoCart(product)} disabled={disabled || inCart} className={(disabled ? styles.noBuy : styles.buy)&&(inCart ? styles.noBuy : styles.buy)}
           >{(disabled ? 'Нет в наличии' : 'Купить') && (inCart ? 'Уже в корзине' : 'Купить')}</button>
        </div>
      </div>
  )
}

export default Product;
