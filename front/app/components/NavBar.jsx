import React from 'react';
import NavLink from './NavLink';
import styles from './style/NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <NavLink href="/" text="Accueil" />
            <NavLink href="/campaigns" text="Campaigns" />
            <NavLink href="/create_campaigns" text="Création de campagnes" />
            <NavLink href="/delete_campaigns" text="Suppression de campagnes" />
        </nav>
    );
}

export default NavBar;