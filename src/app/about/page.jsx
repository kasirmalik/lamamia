import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "../../../public/aboutimg.jpg"
import Button from "@/components/Button/Button";


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Hero} fill={true} alt="about img" className={styles.img} />
        <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award wining digital expericences
        </h2>
      </div>
      </div>
      
      {/* first item */}
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            cupiditate aperiam? Culpa sed rerum consequatur quisquam quia
            debitis autem sequi. Ipsum totam possimus commodi ad quaerat dolorem
            magni? 
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Libero
            esse vero impedit in nulla. Quisquam quia libero nesciunt nisi vel
            placeat quis laboriosam. Distinctio vel quos dolor ad?
          </p>
        </div>
            {/* second item */}
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          cupiditate aperiam? Culpa sed rerum consequatur quisquam quia debitis
          autem sequi. Ipsum totam possimus commodi ad quaerat dolorem magni?
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero esse
          vero impedit in nulla. Quisquam quia libero nesciunt nisi vel placeat
          quis laboriosam. Distinctio vel quos dolor ad?
        </p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          cupiditate aperiam? Culpa sed rerum consequatur quisquam quia debitis
          autem sequi. Ipsum totam possimus commodi ad quaerat dolorem magni?
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero esse
          vero impedit in nulla. Quisquam quia libero nesciunt nisi vel placeat
          quis laboriosam. Distinctio vel quos dolor ad?
        </p>
        <br />
        <br />
        <Button url="contact " text="Contact" />
      </div>
      </div>
    
      
    </div>
  );
};

export default About;
