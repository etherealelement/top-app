import React from 'react';
import { HeaderProps } from './Header.props';
import Link from 'next/link';

export const Header = ({...props}: HeaderProps):JSX.Element => {
    return <header {...props}>
        <Link href ="/">Home</Link>
        <Link href="/pages/page">Page</Link>
        <Link href="/pages/product">Product</Link>
    </header>;
};