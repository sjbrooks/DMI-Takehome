import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <Img src={Banner} alt="Macrame Wall Hanging - Strings" />
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/add">
          <FormattedMessage {...messages.addString} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
