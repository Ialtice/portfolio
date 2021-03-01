import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Heading from '../components/Heading';
import Content from '../components/Content';

class ContactPage extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            name: '',
            email: '',
            message: '',
            disabled: 'fasle',
            emailSent: 'null',
        }
    }

    handleChange= (event) => {
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disable : true
        });
    }

    render(){
        return(
            <div>
                <Heading title={this.props.title}/>

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value= {this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value= {this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="Message">Message</Form.Label>
                            <Form.Control id="Message" name="Message" as="textarea" rows="3" value= {this.state.Message} onChange={this.handleChange} />
                        </Form.Group>
                        
                        <Button className="d-inline-block" variant="primary" type="submitt" disabled="{this.state.disabled">
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline sucess-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                    </Form>
                </Content>
            </div>
        );
    }
    
}

export default ContactPage;