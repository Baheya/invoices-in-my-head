import styles from './InvoiceStatus.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const STYLES = {
  pending: {
    '--color': 'hsla(34, 100%, 50%, 1)',
    '--backgroundColor': 'hsla(34, 100%, 50%, 0.06)',
  },
  paid: {
    '--color': 'hsla(160, 67%, 52%, 1)',
    '--backgroundColor': 'hsla(160, 67%, 52%, 0.06)',
  },
  draft: {
    '--color': 'hsla(231, 75%, 93%, 1)',
    '--backgroundColor': 'hsla(231, 75%, 93%, 0.06)',
    '--colorDark': 'hsla(231, 20%, 27%, 1)',
    '--backgroundColorDark': 'hsla(231, 20%, 27%, 0.06)',
  },
};

export function InvoiceStatus({ status, className }) {
  if (!STYLES[status]) {
    throw new Error("The status you entered doesn't exist!");
  }

  return (
    <div className={`invoice-status ${className}`} style={STYLES[status]}>
      <p className="invoice-status__text">
        {`${status.slice(0, 1).toUpperCase()}` + `${status.slice(1)}`}
      </p>
    </div>
  );
}
