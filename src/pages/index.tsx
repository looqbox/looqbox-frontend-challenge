import React from 'react';
import IndexPageDesktop from '../components/IndexPageDesktop';
import IndexPageMobile from '../components/IndexPageMobile';

export default function Home() {
    return (
        <>
            <IndexPageDesktop />
            <IndexPageMobile />
        </>
    );
}
