import React from 'react';
import  NavScrollExample  from './NavScrollExample'; // Import your navbar component

const withNavbar = (Screen) => (props) => (
  <>
    <NavScrollExample navigation={props.navigation} />  {/* Pass navigation prop */}
    <Screen {...props} />  {/* Spread other props to the screen component */}
  </>
);

export default withNavbar;
