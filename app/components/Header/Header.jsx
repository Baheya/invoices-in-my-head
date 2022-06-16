import { Form } from '@remix-run/react';
import { DarkModeToggle, darkModeToggleLinks } from '../DarkModeToggle';
import { Avatar, avatarLinks } from '../Avatar';
import { Logo, logoLinks } from '../Logo';

import styles from './Header.css';

export function links() {
  return [
    ...avatarLinks(),
    ...logoLinks(),
    ...darkModeToggleLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function Header() {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list-item">
          <Logo className="header__logo" />
        </li>
        <li className="header__list-item">
          <Form method="POST">
            <DarkModeToggle type="submit" />
          </Form>
        </li>
        <li className="header__list-item">
          <Avatar />
        </li>
      </ul>
    </header>
  );
}
