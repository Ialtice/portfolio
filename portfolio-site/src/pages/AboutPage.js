import React from 'react';
import Heading from '../components/Heading';
import Content from '../components/Content';

function AboutPage(props){
    return(
        <div>
            <Heading title={props.title}/>
            <Content>
                <p>
                I am a recent graduate from UNCC where I obtained my Bachelor’s in Computer Science with a concentration in Software, Systems, and Networking with a GPA of 3.82.
                 My goal is to start a fulfilling and challenging computer science related career where I can gain more experience and build upon the foundation that I created while obtaining my degree.
                  I look forward to working in a fast pace environment where I can put my problem solving skills and ability to learn quickly to use. 
                  I feel that I will be a great asset to any company as I excel at critical thinking, adapting to challenges, and contributing to a positive work environment that promotes innovation. 
                </p>
            </Content>
        </div>
    );
}

export default AboutPage;