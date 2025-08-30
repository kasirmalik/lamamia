import Image from "next/image";
import Hero from '../../public/hero (1).png'
import styles from  "./page.module.css";


export default function Home() {
  return (
   <div className={styles.contain}>
    <div className={styles.item}>
        <h1 className={styles.title}>Better design for you digital products</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry
        </p>
        <button  className={styles.button}>See our Works</button>
        
    </div>
    <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
    </div>
     
   </div>
  );
}
