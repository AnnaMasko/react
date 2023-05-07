import { cardPrice } from '../../data/Data.js'
import styles from './Price.module.css'

export const Price = () => {
  return (
    <div className={styles.container}>
      {
        cardPrice.map(element =>{
          const popularTitle = element.popular ? styles.popularTitle : "";
				  const popularPrice = element.popular ? styles.popularPrice : "";

          return (
            <div className={styles.card} key={element.id}>
              <h3 className={`${styles.title} ${popularTitle}`}>{element.title}</h3>
                        <div className={`${styles.price} ${popularPrice}`}>{element.price}</div>
                        <div className={styles.text}>{element.text}</div> 
                        <div className={styles.download}>{element.download}</div>
                        <div className={styles.memory}>{element.memory}</div>
                        <button className={styles.button}>{element.button}</button> 
            </div>



            
                        
                  
          )
        })
      }
    </div>
  )
}
