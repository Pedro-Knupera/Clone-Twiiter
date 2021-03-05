import React from 'react';

import { 
    Container, 
    Retweeted, 
    Body, 
    Avatar, 
    Content, 
    Header, 
    Dot, 
    Description, 
    ImageContent, 
    Icon, 
    Status, 
    ComentIcon, 
    RetweetIcon, 
    LikeIcon } from './styles'

const Tweet: React.FC = ()=> {
    return (
        <Container>
            <Retweeted>
                Voçê retweetou!
            </Retweeted>

            <Body>
                <Avatar/>
                
                <Content>
                    <Header>
                        <strong>Pedro Rodrigues</strong>
                        <span>@Pedro_kar</span>
                        <Dot/>
                        <time>04/03/2021</time>
                    </Header>

                    <Description>Metade Do projeto!!</Description>

                    <ImageContent />

                    <Icon>
                        <Status>
                            <ComentIcon/>
                            18
                        </Status>
                    </Icon>
                    <Icon>
                        <Status>
                            <RetweetIcon/>
                            2
                        </Status>
                    </Icon>
                    <Icon>
                        <Status>
                            <LikeIcon/>
                            46
                        </Status>
                    </Icon>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet;