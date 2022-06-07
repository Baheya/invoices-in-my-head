import { useRef } from 'react';
import { useTextField } from '@react-aria/textfield';

import styles from './TextField.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function TextField(props) {
  let { label } = props;
  let ref = useRef();
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div
      className="text-field"
      style={{ display: 'flex', flexDirection: 'column', width: 200 }}
    >
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}
