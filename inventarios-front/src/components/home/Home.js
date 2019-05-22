import React from 'react'
import Navbar from '../Navbar/Navbar';

import 'bulma/css/bulma.css';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

const pages = ['Home'];

export default function Home() {
    return (
        <div>
            <div style={styles}>
                <Navbar pages={pages} />
            </div>
            <h1>This is HOME</h1>
        </div>
    )
}
