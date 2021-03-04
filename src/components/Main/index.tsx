import React from 'react';

import ProfilePage from '../ProfilePage'

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottonMenu, 
    HomeIcon, 
    SearchIcon, 
    BellIcon, 
    EmailIcon, } from './styles';

const Main: React.FC = () => {
  return(
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Pedro Rodrigues </strong>
                  <span> 2 tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage/>

       <BottonMenu>
            <HomeIcon/>
            <SearchIcon/>
            <BellIcon/>
            <EmailIcon/>
       </BottonMenu>
       </Container>
  );
}

export default Main;