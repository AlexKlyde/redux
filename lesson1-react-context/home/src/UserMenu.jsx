import React from 'react';
import { UserDataContext } from './userData-context';

const UserMenu = () => {
  return (
    <UserDataContext.Consumer>
      {({ name, avatar_url }) => (
        <div className="menu">
          <span className="menu__greeting">{name}</span>
          <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
        </div>
      )}
    </UserDataContext.Consumer>
  );
};

export default UserMenu;
