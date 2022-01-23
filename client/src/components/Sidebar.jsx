import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
// import AvatarImage from "../assets/avatarImage.jpeg";
// import { darkThemeColor } from "../utils";
function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        {/* <Avatar src={AvatarImage} /> */}
        <Name>Boiler Trade</Name>
        {/* <Badge content="Pro Level" /> */}
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <a href="/dashboard">Dashboard</a>
          </Link>
          <Link>
            <a href="/yourproduct">Your Product</a>
          </Link>
          <Link>
            <a href="/">Home</a>
          </Link>
        </Links>
        
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #2E4DD4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 1.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: #2E4DD4;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #FFFFFF !important;
  cursor: pointer;
  a {
    font-size: 20px;
    color: #FFFFFF !important;
    font-weight: 600;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
