import styles from './InvoiceSummary.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function InvoiceSummary({ items, total, className }) {
  return (
    <table
      className={className ? `invoice-table ${className}` : 'invoice-table'}
    >
      <thead className="invoice-table__header">
        <tr className="invoice-table__row">
          <th scope="col" className="invoice-table__cell--header body-xs">
            Item Name
          </th>
          <th scope="col" className="invoice-table__cell--header body-xs">
            QTY
          </th>
          <th scope="col" className="invoice-table__cell--header body-xs">
            Price
          </th>
          <th scope="col" className="invoice-table__cell--header body-xs">
            Total
          </th>
        </tr>
      </thead>
      <tbody className="invoice-table__body">
        {items.map((item, i) => (
          <tr key={i} className="invoice-table__row invoice-table__row">
            <th scope="row" className="title-xxs invoice-table__cell--header">
              {item.name}
            </th>
            <td className="title-xxs invoice-table__cell invoice-table__cell--compact">
              {item.quantity} x{' '}
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
              }).format(item.price)}
            </td>
            <td className="title-xxs invoice-table__cell invoice-table__cell--expanded">
              {item.quantity}
            </td>
            <td className="title-xxs invoice-table__cell invoice-table__cell--expanded">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
              }).format(item.price)}
            </td>
            <td className="title-xxs invoice-table__cell">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
              }).format(item.price * item.quantity)}
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot className="invoice-table__footer">
        <tr className="invoice-table__row">
          <th className="invoice-table__cell--header" scope="row" colSpan="1">
            <h3 className="body-xs">Grand Total</h3>
          </th>
          <td className="invoice-table__cell" colSpan="3">
            <p className="title-lg">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
              }).format(total)}
            </p>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
