import { InvoiceStatus, invoiceStatusLinks } from './InvoiceStatus';

import styles from './InvoiceItem.css';

export function links() {
  return [...invoiceStatusLinks(), { rel: 'stylesheet', href: styles }];
}

export function InvoiceItem({ id, name, status, dueDate, total }) {
  return (
    <li>
      <div className="invoice-item__container">
        <div className="invoice-item">
          <a className="invoice-item__link" href={`/invoices/${id}`}>
            <p className="invoice-item__id title-xxs">
              <span>#</span>
              {id}
            </p>
          </a>

          <p className="invoice-item__date body-sm">
            Due{' '}
            {new Date(dueDate).toLocaleDateString('en-US', {
              weekday: undefined,
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>

          <p className="invoice-item__name body-sm">{name}</p>

          <p className="invoice-item__total title-sm">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'GBP',
            }).format(total)}
          </p>

          <InvoiceStatus className="invoice-item__status" status={status} />
        </div>

        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1l4 4-4 4"
            stroke="#7C5DFA"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </li>
  );
}
