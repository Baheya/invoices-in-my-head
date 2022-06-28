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
  icon: 'button button--primary button--icon',
};

export function Button({ children, variant, onPress, ...delegated }) {
  return (
    <button className={STYLES[variant]} onClick={onPress} {...delegated}>
      {variant === 'icon' && (
        <div className="icon__container">
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
              fill="#7C5DFA"
              fillRule="nonzero"
            />
          </svg>
        </div>
      )}
      {children}
    </button>
  );
}
