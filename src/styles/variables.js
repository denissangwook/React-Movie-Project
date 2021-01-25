import styled from 'styled-components';

// Values
export const headerHeight = '50px';
export const headerWidthLaptop = '1200px';

// Colors
export const primaryColor = '#142850';
export const secondaryColor = '#f2f2f2';
export const tertiaryColor = '#000 ';
export const hoverOrangeColor = '#E65100';
export const hoverYellowColor = '#ffa726';
export const loaderColor = '#37c0ae';

// z-indexes
export const headerZindex = 7;
export const overlayZindex = 6;
export const footerZindex = 5;
export const homeIntroZindex = 3;

//School Email & Landing Page URL
export const MyEmail = 'your Email';
export const MyLandingPage = 'Your Landing or Homepage';

// Media query breakpoints
const size = {
  MobileLandscape: '480px',
  MobileFooter: '543px',
  TabletPortrait: '768px',
  TabletLandscape: '980px',
  Laptops: '1220px',
};

export const device = {
  MobileLandscape: `(min-width: ${size.MobileLandscape})`,
  MobileFooter: `(min-width: ${size.MobileFooter})`,
  TabletPortrait: `(min-width: ${size.TabletPortrait})`,
  TabletLandscape: `(min-width: ${size.TabletLandscape})`,
  Laptops: `(min-width: ${size.Laptops})`,
};

// Layout components
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    padding-top: ${headerHeight};
    flex: 1;
  }
`;

// Wrapper components
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 95vw;
  @media ${device.Laptops} {
    width: ${headerWidthLaptop};
  }
`;
