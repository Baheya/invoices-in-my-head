import styles from './Invoice.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Invoice() {
  return (
    <article className="invoice">
      <h2 className="invoice__id">
        <span>#</span>XM9141
      </h2>
      <p className="invoice__title">Graphic Design</p>

      <address className="invoice__address">
        19 Union Terrace
        <br /> London
        <br /> E1 3EZ
        <br /> United Kingdom
      </address>

      <div className="invoice__date">
        <h3>Invoice Date</h3>
        <p>Date</p>
      </div>

      <div className="invoice__due">
        <h3>Payment Due</h3>
        <p>Date</p>
      </div>

      <div className="invoice__recipient">
        <h3>Bill To</h3>
        <p>Name</p>

        <address className="invoice__address">
          84 Church Way
          <br /> Bradford
          <br /> BD1 9PB
          <br /> United Kingdom
        </address>
      </div>

      <h3>Sent to</h3>
      <address>mail</address>

      <div className="invoice__services">
        <ul className="invoice__services__list">
          <li className="invoice__services__item">
            <div className="invoice__service">
              <h4>Banner Design</h4>
              <p>1 x £ 156.00</p>
              <p>£ 156.00</p>
            </div>
          </li>

          <li className="invoice__services__item">
            <div className="invoice__service">
              <h4>Banner Design</h4>
              <p>1 x £ 156.00</p>
              <p>£ 156.00</p>
            </div>
          </li>
        </ul>

        <div className="invoice__total">
          <h3>Amount Due</h3>
          <p>Price</p>
        </div>
      </div>
    </article>
  );
}
