import React from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="layout-container ">
            <Header />
            <main className="layout-content h-screen">{children}</main>
            <Footer />
        </div>
    );
}


export default Layout;