import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';
import UNCC from '../media/images/UNCC.jpg';
import Headshot from '../media/images/Headshot.jpg';
import GithubLogo from '../media/images/GithubLogo.png';



class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Unofficial Transcript',
                    subTitle: 'University Of North Carolina At Charlotte',
                    imgSrc: UNCC,
                    link: 'https://www.linkedin.com/in/isaac-altice-015a6317a/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACqD0lEBBvtnvKQ4g_1bkBlYDSVQ34fyNIA,1612620886897)/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Isaac Altice',
                    subTitle: 'Future Software Engineer',
                    imgSrc: Headshot,
                    link: 'https://www.linkedin.com/in/isaac-altice-015a6317a/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'GitHub',
                    subTitle: 'Course Work / Projects',
                    imgSrc: GithubLogo,
                    link: 'https://github.com/Ialtice',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item = {item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    } 


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;