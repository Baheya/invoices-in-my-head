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

export function Header({ fetcher }) {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list-item">
          <Logo className="header__logo" />
        </li>
        <li className="header__list-item">
          <fetcher.Form method="POST" action="/toggle-theme">
            <DarkModeToggle type="submit" />
          </fetcher.Form>
        </li>
        <li className="header__list-item">
          <Avatar />
        </li>
      </ul>
    </header>
  );
}
