import React from 'react';
import { AiFillGithub, AiFillBulb, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:07712 465011">07712 465011</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bangla.sky.d1@gmail.com">
            bangla.sky.d1@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/BanglaSky">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UC_F5ouGS2ULqxpJzshqMEzg">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.tiktok.com/@3h54n_?lang=en">
          <AiFillBulb size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
