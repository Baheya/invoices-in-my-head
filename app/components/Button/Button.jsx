import styles from './Button.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const STYLES = {
  primary: 'button button--primary',
  edit: 'button button--edit',
  save: 'button button--save',
  delete: 'button button--delete',
  add: 'button button--add',
};

export function Button({ children, variant = 'primary' }) {
  return <button className={STYLES[variant]}>{children}</button>;
}
