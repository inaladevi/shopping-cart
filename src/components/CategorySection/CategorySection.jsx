import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './CategorySection.module.css'
import useReveal from '../../hooks/useReveal'
import bagImg from '../../assets/images/bag-category.png'
import shoeImg from '../../assets/images/shoe-category.png'
import clothingImg from '../../assets/images/clothing-category.png'
import scarfImg from '../../assets/images/scarf-category.png'

const categories = [
  { label: 'Bags',     desc: 'Iconic shapes, modern attitude.',         img: bagImg,      to: '/shop' },
  { label: 'Shoes',    desc: 'Crafted for comfort and sophistication.',  img: shoeImg,     to: '/shop' },
  { label: 'Clothing', desc: 'Refined pieces for every occasion.',       img: clothingImg, to: '/shop' },
  { label: 'Scarves',  desc: 'Silk, cashmere and timeless prints.',      img: scarfImg,    to: '/shop' },
]

function CategorySection() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className={styles.categories} ref={ref}>
      {categories.map(({ label, desc, img, to }, i) => (
        <Link
          to={to}
          key={label}
          className={`${styles.card} reveal`}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className={styles.imgWrap}>
            <img src={img} alt={label} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.heading}>{label}</h3>
            <p className={styles.desc}>{desc}</p>
            <span className={styles.shopNow}>SHOP NOW →</span>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default CategorySection