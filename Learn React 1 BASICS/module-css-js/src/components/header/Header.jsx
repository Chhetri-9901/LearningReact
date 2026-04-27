import React from 'react'
import styles from './header.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles['cmp-header']}>
                <h3>hello</h3>
                <button type="submit">Click Me</button>
            </div>
        </div>
    )
}

export default Header