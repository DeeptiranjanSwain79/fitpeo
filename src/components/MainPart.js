import React, { Fragment } from 'react';
import "./MainPart.css";
import Header from './Header';
import LeftPart from "./LeftPart";
import RightPart from "./RightPart"

const MainPart = () => {
    return (
        <Fragment>
            <div className="main-part">
                <div>
                    <Header />
                </div>

                <div className="main-page">
                    <LeftPart />
                    <RightPart />
                </div>
            </div>
        </Fragment>
    )
}

export default MainPart
