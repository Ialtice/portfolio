import React from 'react';
import Heading from '../components/Heading'
function HomePage(props){
    return(
        <Heading title={props.title} subTitle={props.subTitle} subText={props.subText} />
    );
}

export default HomePage;