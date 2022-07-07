import { json } from '@remix-run/node';
import { gql } from 'graphql-request';
import { client } from '../client';
import { useLoaderData } from '@remix-run/react';

import { Button, buttonLinks } from '../components/Button';
import { InvoiceItem, invoiceItemLinks } from '../components/InvoiceItem';

import styles from '../styles/invoices.css';

export function links() {
  return [
    ...buttonLinks(),
    ...invoiceItemLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

const getInvoices = gql`
  query GetInvoicesQuery() {
    invoices {
      invoiceId
      clientName
      paymentDue
      paymentStatus
      total
    }
  }
`;

export let loader = async () => {
  const { invoices } = await client.request(getInvoices);

  return json({ invoices });
};

export default function Index() {
  let { invoices } = useLoaderData();

  return (
    <main className="invoices">
      <div className="invoices__top-bar">
        <div className="top-bar__invoice-count">
          <h1>Invoices</h1>
          <p>{invoices.length} Invoices</p>
        </div>
        <Button variant="icon">New</Button>
      </div>

      <section className="invoices__section">
        <ul className="invoices__list">
          {invoices.map((invoice) => (
            <InvoiceItem
              key={invoice.invoiceId}
              id={invoice.invoiceId}
              name={invoice.clientName}
              status={invoice.paymentStatus}
              dueDate={invoice.paymentDue}
              total={invoice.total}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
