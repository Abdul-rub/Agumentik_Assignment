import React, { useState } from 'react';
import styles from "../styles/Accordion.module.css";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState([
    { id: 1, question: 'The Parliament of India cannot be regarded as a sovereign body because', answer: '    the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution', isOpen: false },
    { id: 2, question: 'The Parliament of India cannot be regarded as a sovereign body because', answer: '    the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution', isOpen: false },
    { id: 3, question: 'The Parliament of India cannot be regarded as a sovereign body because', answer: '    the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution', isOpen: false },
  ]);

  const toggleAccordion = (id) => {
    setAccordionData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className={styles.container}>
        <p>FREQUENTLY ASKED QUESTION</p>
        <section className={styles.title}>
          <div>
          <h4>Pertanyaan yang Sering Diajukan</h4>
          </div>
          <div>
           <p className={styles.primary}> Lihat semua </p>
          </div>
        </section>

    <div className={styles.accordion__content}>
      {accordionData.map(item => (
        <div
          key={item.id}
          className={`${styles.accordion} ${item.isOpen ? styles.open : ''}`}
          onClick={() => toggleAccordion(item.id)}
        >
          <div className={styles.accordionTitle}>
            <p>{item.question}</p>
          </div>
          {item.isOpen && <div className={styles.accordionContent}>
            <p>{item.answer}</p>
            </div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Accordion;
