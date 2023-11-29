import React from 'react';
import styles from './style/Hero.module.css';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.leftColumn}>
                <h1>Gérez vos Campagnes Publicitaires</h1>
                <p>Découvrez comment MarketX peut transformer votre marketing numérique.</p>
                <Link href="/campaigns" className={styles.ctaButton}>Voir les Campagnes</Link>
            </div>
            <div className={styles.rightColumn}>
                <p>MarketX vous aide à analyser et optimiser vos campagnes pour maximiser l'impact de votre marketing numérique.</p>
            </div>
        </section>
    );
}

export default Hero;
