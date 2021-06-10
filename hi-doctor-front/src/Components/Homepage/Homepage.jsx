import React from 'react';
import SlideShow from '../SlideShow/SlideShow';
import Content from "../Content/Content"

const HomePage = () => {

    return (
        <div>
            <div className='section1'>
                <div>
                    <Content/>
                </div>
            </div>
            <SlideShow/>
            <div/>
        </div>
    );
};

export default HomePage;
