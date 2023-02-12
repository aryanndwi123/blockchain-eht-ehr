import React from 'react';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import Head from 'next/head';
import MenuBar from './MenuBar';

//Layout properly the Header at the top of every page and then the content come afterwards

export default props => {
    return (
        <div style={{color:"white",background:"#1a202c"}}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
            </Head>

            <Segment
            inverted
            textAlign='center'
            >
            <MenuBar/>
                
            </Segment>
            
            <Container>
                {props.children}
            </Container>
            </div>
    );
};