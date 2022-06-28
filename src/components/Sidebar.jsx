import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

function Sidebar() {
  const categories = useSelector((state)=>state.categories)
  return(
    categories.map((element)=>{
      return <div className={styles.container}>
        <Link to={`/category/${element.id}`} className={styles.sideBar}>{element.name}</Link>
        <hr />
      </div>
    })
  )
}

export default Sidebar;
