import React from 'react';
import Heading from '../components/Heading';
import Content from '../components/Content';

function AboutPage(props){
    return(
        <div>
            <Heading title={props.title}/>
            <Content>
                <p>
                I am a recent graduate from UNCC where I obtained my bachelor’s in Computer Science with a concentration in Software, Systems, and Networking with a GPA of 3.82. 
                My goal is to start a fulfilling and challenging computer science related career where I can gain more experience and build upon the foundation of networking, software development, and programming that I created while obtaining my degree. 
                I look forward to working in a fast pace environment where I can fulfill customer requests, do maintenance, and ensure the security of the company. 
                I feel that I will be a great asset to any company as I have great trouble shooting skills, communication skills, and customer service skills. 
                </p>
            </Content>
        </div>
    );
}

export default AboutPage;