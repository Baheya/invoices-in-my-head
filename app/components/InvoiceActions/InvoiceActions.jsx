import { Button, buttonLinks } from '../Button';
import {
  InvoiceStatus,
  invoiceStatusLinks,
} from '../InvoiceItem/InvoiceStatus';
import styles from './InvoiceActions.css';

export function links() {
  return [
    ...buttonLinks(),
    ...invoiceStatusLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function InvoiceActions({ status }) {
  return (
    <div className="invoice-actions__container">
      <h2 className="body-sm invoice-actions__title">Status</h2>
      <InvoiceStatus status={status} />
      <ul className="invoice-actions__list invoice-actions__list--inline">
        <li className="invoice-actions__item">
          <Button variant="edit">Edit</Button>
        </li>
        <li className="invoice-actions__item">
          <Button variant="delete">Delete</Button>
        </li>
        <li className="invoice-actions__item">
          <Button variant="primary">Mark as Read</Button>
        </li>
      </ul>
    </div>
  );
}
