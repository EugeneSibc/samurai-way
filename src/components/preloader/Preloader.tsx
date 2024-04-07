import React from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import preloader from "./../../assets/Spinner@1x-1.0s-200px-200px.svg"


const Preloader = () => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;