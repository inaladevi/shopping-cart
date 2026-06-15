import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductGrid.module.css'
import useReveal from '../../hooks/useReveal'

import bag from '../../assets/images/bag.png'
import shoes from '../../assets/images/shoes.png'
import blazer from '../../assets/images/blazer.png'
import scarf from '../../assets/images/scarf.png'
import sunglasses from '../../assets/images/sunglasses.png'

const newArrivals = [
  { id: 1, name: 'Le 5 À 7 Hobo Bag',       price: '$2,550', img: bag         },
  { id: 2, name: 'Opium Pumps',              price: '$1,190', img: shoes       },
  { id: 3, name: 'Tailored Wool Blazer',     price: '$1,890', img: blazer      },
  { id: 4, name: 'Monogram Silk Scarf',      price: '$360',   img: scarf       },
  { id: 5, name: 'Noir Rectangle Sunglasses',price: '$490',   img: sunglasses  },
]

function ProductGrid() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className={styles.products} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <h2 className={styles.heading}>New Arrivals</h2>
        <Link to="/shop" className={styles.viewAll}>View All</Link>
      </div>

      <div className={styles.grid}>
        {newArrivals.map(({ id, name, price, img }, i) => (
          <Link
            to="/shop"
            key={id}
            className={`${styles.card} reveal`}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className={styles.imgWrap}>
              <img src={img} alt={name} className={styles.image} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.price}>{price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid