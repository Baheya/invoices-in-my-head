import styles from './Avatar.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Avatar() {
  return (
    <img
      className="user-avatar"
      src="images/image-avatar.webp"
      alt="User avatar"
    />
  );
}
