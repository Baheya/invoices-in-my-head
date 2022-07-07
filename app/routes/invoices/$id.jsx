import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from 'graphql-request';
import { client } from '../../client';

import { BackButton, backButtonLinks } from '~/components/BackButton';
import { Invoice, invoiceLinks } from '~/components/Invoice';
import {
  InvoiceActions,
  invoiceActionsLinks,
} from '~/components/InvoiceActions';

import styles from '../../styles/invoice.css';

export function links() {
  return [
    ...invoiceActionsLinks(),
    ...backButtonLinks(),
    ...invoiceLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

const getInvoice = gql`
  query GetInvoicesQuery($id: String!) {
    invoice(where: { invoiceId: $id }) {
      invoiceId
      clientName
      description
      clientEmail
      clientAddress {
        street
        city
        postCode
        country
      }
      items {
        quantity
        name
        price
      }
      senderAddress {
        street
        city
        postCode
        country
      }
      paymentDue
      invoiceDate
      paymentStatus
      total
    }
  }
`;

export let loader = async ({ params }) => {
  const { invoice } = await client.request(getInvoice, { id: params.id });

  return json({ invoice });
};

export default function ViewInvoice() {
  const { invoice } = useLoaderData();

  return (
    <>
      <BackButton />
      <main className="invoice__container">
        <section className="invoice__section">
          <InvoiceActions status={invoice.paymentStatus} />
          <Invoice
            id={invoice.invoiceId}
            description={invoice.description}
            clientAddress={invoice.clientAddress}
            clientEmail={invoice.clientEmail}
            date={invoice.invoiceDate}
            paymentDue={invoice.paymentDue}
            clientName={invoice.clientName}
            senderAddress={invoice.senderAddress}
            items={invoice.items}
            total={invoice.total}
          />
        </section>
      </main>
    </>
  );
}
