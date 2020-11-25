import React from 'react';

const MainPageContext = React.createContext({
  navigationClosed: false,
  currentPromo: [{name: '', cover: '', price: '', volume: ''}],
  contentPromo: [{name: '', cover: '', price: '', volume: ''}],
  currentSlides: [''],
  headerCircleRotation: 0,
  mediaLoading: true,
  teamList: [{name: '', photo: ''}],
  currentShops: [''],
  toggleNavigation: () => {},
  rotateHeaderCircle: () => {},
  getMainPageMedia: () => {},
  toggleScrollTop: () => {},
});

export default MainPageContext;