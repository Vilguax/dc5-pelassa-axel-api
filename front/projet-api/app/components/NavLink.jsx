import React from 'react';
import Link from 'next/link';
import styles from './NavLink.module.css';

const NavLink = ({ href, text }) => {
    return (
        <div className={styles.navLink}>
            <Link href={href}>
                {text}
            </Link>
        </div>
    );
}

export default NavLink;
