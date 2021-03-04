import React from 'react';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>
          <ProfileData>
              {/*<EditButton outlined>perfil</EditButton>*/}

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
                    Seguindo <strong>x pessoas</strong>
                </span>
                <span>
                    <strong> x </strong> Seguidores
                </span>
            </Followage>
          </ProfileData>
      </Container>
  );
}

export default ProfilePage;