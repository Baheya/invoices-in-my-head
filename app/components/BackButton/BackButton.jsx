import { useNavigate } from '@remix-run/react';

import { Button, buttonLinks } from '../Button';

import styles from './BackButton.css';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button className="button--back title-xxs" onPress={() => navigate(-1)}>
      <span>
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.342.886L2.114 5.114l4.228 4.228"
            stroke="#9277FF"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </span>{' '}
      Go back
    </Button>
  );
}
