import React from 'react';
import Heading from '../components/Heading';
import Carousel from '../components/Carousel';

function HomePage(props){
    return(
        <div>
            <Heading title={props.title} subTitle={props.subTitle} subText={props.subText} />
            <Carousel />
        </div>

    );
}

export default HomePage;