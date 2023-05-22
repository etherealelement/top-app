import React from "react";
import { LayoutProps } from "./Layout.props";


export const Layout = ({children}: LayoutProps):JSX.Element => {
    return <>
        <Header></Header>
        <div>
            <Sidebar></Sidebar>
            <div>
                {children}
            </div>
        </div>
        <Footer></Footer>
    </>;
};