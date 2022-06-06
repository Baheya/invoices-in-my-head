import { Button, buttonLinks } from '../Button';

import styles from './InvoiceButton.css';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function InvoiceButton({ children }) {
  return <Button>{children}</Button>;
}
