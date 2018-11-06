import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";

import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageDescription from "../components/PageDescription/PageDescription";
import PaginatedContent from "../components/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";
import Logo from "../components/Logo/Logo";
import Slogan from "../components/Slogan/Slogan";
import LogoImg from '../../static/logos/logo-transparent.png'
import SloganImg from '../../static/images/slogan-transparent.png'
import WeddingImg from '../../static/images/wedding_img.jpg'
import SimpleCard from '../components/Cards/SimpleCard'


class IndexTemplate extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.c
      this.loseMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { nodes,page,pages,total,limit,prev,next } = this.props.pathContext;
    const authorsEdges = this.props.data.authors.edges;
    const logo_img = LogoImg;
    const slogan_img = SloganImg;
    const wedding_img = WeddingImg;

    return (
      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={nodes} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template">
            {/* The big featured header */}
            <MainHeader cover={wedding_img}>
              <MainNav overlay={wedding_img}>
              <Logo logo={logo_img} title={config.siteTitle}/>
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
              <div className="vertical">
                <div className="main-header-content inner">
                <Slogan logo={slogan_img} title={config.siteTitle} />
                  
                  <PageDescription style={{fontWeight:'bold'}} text={config.siteDescription} />

                  <SocialMediaIcons
                    urls={config.siteSocialUrls}
                    color="currentColor"
                  />

                </div>
              </div>
              <Link
                className="scroll-down icon-arrow-left"
                to="content"
                data-offset="-45"
                spy
                smooth
                duration={500}
              >
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>
              <div style={{display:'flex',alignContent:'center',justifyContent:'space-around'}}>
                  <SimpleCard style={{width:'50%'}}/>
              </div>
           
          </div>

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          id
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default IndexTemplate;
