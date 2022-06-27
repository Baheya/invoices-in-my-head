import styles from './InvoiceItem.css';

import { InvoiceStatus, invoiceStatusLinks } from './InvoiceStatus';

export function links() {
  return [...invoiceStatusLinks(), { rel: 'stylesheet', href: styles }];
}

export function InvoiceItem({ id = 'RT3080', name = 'Jensen Huang' }) {
  return (
    <li>
      <div className="invoice-item">
        <p className="invoice-item__id">
          <span>#</span>
          {id}
        </p>
        <p className="invoice-item__name">{name}</p>
        <div>
          <p className="invoice-item__date">Due 19 Aug 2021</p>
          <p className="invoice-item__amount">£ 1,800.90</p>
        </div>
        <InvoiceStatus className="invoice-item__status" status="draft" />
      </div>
    </li>
  );
}
