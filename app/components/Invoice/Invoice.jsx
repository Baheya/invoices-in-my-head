import { InvoiceSummary, invoiceSummaryLinks } from './InvoiceSummary';

import styles from './Invoice.css';

export function links() {
  return [...invoiceSummaryLinks(), { rel: 'stylesheet', href: styles }];
}

export function Invoice({
  id,
  description,
  clientAddress,
  date,
  paymentDue,
  clientName,
  clientEmail,
  senderAddress,
  items,
  total,
}) {
  return (
    <article className="invoice-grid invoice">
      <div className="invoice-grid__item-1">
        <h2 className="invoice__id title-xxs">
          <span>#</span>
          {id}
        </h2>
        <p className="body-sm">{description}</p>
      </div>

      <address className="invoice-grid__item-2 body-xs">
        {clientAddress.street}
        <br /> {clientAddress.city}
        <br /> {clientAddress.postCode}
        <br /> {clientAddress.country}
      </address>

      <div className="invoice-grid__item-3">
        <h3 className="body-sm">Invoice Date</h3>
        <p className="title-xs">
          {new Date(date).toLocaleDateString('en-US', {
            weekday: undefined,
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>

      <div className="invoice-grid__item-4">
        <h3 className="body-sm">Payment Due</h3>
        <p className="title-xs">
          {new Date(paymentDue).toLocaleDateString('en-US', {
            weekday: undefined,
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>

      <div className="invoice-grid__item-5">
        <h3 className="body-sm">Bill To</h3>
        <p className="title-xs">{clientName}</p>

        <address className="invoice-grid__item-6 body-xs">
          {senderAddress.street}
          <br /> {senderAddress.city}
          <br /> {senderAddress.postCode}
          <br /> {senderAddress.country}
        </address>
      </div>

      <div className="invoice-grid__item-7">
        <h3 className="body-sm">Sent to</h3>
        <address className="title-xs">{clientEmail}</address>
      </div>

      <InvoiceSummary
        className="invoice-grid__item-8"
        items={items}
        total={total}
      />
    </article>
  );
}
