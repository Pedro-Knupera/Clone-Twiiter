import React from 'react';

import Feed from '../Feed';

import { 
Container, 
Banner, 
Avatar, 
ProfileData, 
LocationIcon, 
CakeIcon, 
Followage,
EditButton,
} from './styles';

    const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar/>
            </Banner>
            <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
                

                <h2>Pedro Rodrigues</h2>
                <h3>@Pedro_kar</h3>

                <p>Fazendo nada...</p>

                <ul>
                    <li>
                        <LocationIcon/>
                        Minas Gerais, Brasil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 30 de Julho de 2003
                    </li>
                </ul>

                <Followage>
                    <span>
                        Seguindo <strong> 23 </strong>
                    </span>
                    <span>
                        <strong> 45 </strong> Seguidores
                    </span>
                </Followage>
            </ProfileData>
            <Feed/>
        </Container>
    );
    }

export default ProfilePage;