import { json, redirect } from '@remix-run/node';
import { gql } from 'graphql-request';
import { client } from '../client';

import { colorSchemeCookie, getColorScheme } from '~/utils/getInitialColorMode';

import { Header, headerLinks } from '../components/Header';
import { Invoice, invoiceLinks } from '../components/Invoice';
import { InvoiceItem, invoiceItemLinks } from '../components/InvoiceItem';
import { Button, buttonLinks } from '../components/Button';

import styles from '../styles/invoices.css';
import { useLoaderData } from '@remix-run/react';

export function links() {
  return [
    ...buttonLinks(),
    ...invoiceItemLinks(),
    ...invoiceLinks(),
    ...headerLinks(),
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

export let loader = async ({ params }) => {
  const { invoices } = await client.request(getInvoices);

  return json({ invoices });
};

export const action = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light';

  return redirect(request.url, {
    headers: {
      'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};

export default function Index() {
  let { invoices } = useLoaderData();

  return (
    <>
      <Header />
      <main className='invoices'>
        <div className="invoices__top-bar">
          <div className="top-bar__invoice-count">
            <h1>Invoices</h1>
            <p>{invoices.length} Invoices</p>
          </div>
          <Button variant="icon">New</Button>
        </div>

        <section className='invoices__section'>
          <ul className='invoices__list'>
            {invoices.map((invoice) => <InvoiceItem key={invoice.invoiceId} id={invoice.invoiceId} name={invoice.clientName} status={invoice.paymentStatus} dueDate={invoice.paymentDue} total={invoice.total} />)}
          </ul>
        </section>
      </main>
    </>
  );
}
