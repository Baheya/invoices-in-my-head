import styles from './InvoiceItem.css';

import { InvoiceStatus, invoiceStatusLinks } from './InvoiceStatus';

export function links() {
  return [...invoiceStatusLinks(), { rel: 'stylesheet', href: styles }];
}

export function InvoiceItem({ id = 'RT3080', name = 'Jensen Huang', status = 'draft', dueDate = '19 Aug 2021', total = '£ 1,800.90' }) {
  return (
    <li>
      <div className="invoice-item">
        <p className="invoice-item__id">
          <span>#</span>
          {id}
        </p>
        <p className="invoice-item__name">{name}</p>
        <div>
          <p className="invoice-item__date">Due {new Date(dueDate).toLocaleDateString('en-US', {weekday: undefined, day: '2-digit', month: 'short', year: 'numeric'})}</p>
          <p className="invoice-item__total">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(total)}</p>
        </div>
        <InvoiceStatus className="invoice-item__status" status={status} />
      </div>
    </li>
  );
}
