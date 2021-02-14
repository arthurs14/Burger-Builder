import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuthenticated }) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem item="Burger Builder" link="/" />
    <NavigationItem item="Orders" link="/orders" />
    {!isAuthenticated 
      ? <NavigationItem item="Login" link="/auth" />
      : <NavigationItem item="Logout" link="/logout" />}
  </ul>
);

export default navigationItems;