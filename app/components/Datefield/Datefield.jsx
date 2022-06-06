import { useRef } from 'react';

import { useLocale } from '@react-aria/i18n';
import { useDateFieldState } from '@react-stately/datepicker';
import { useDateField, useDateSegment } from '@react-aria/datepicker';
import { createCalendar } from '@internationalized/date';

import styles from './Datefield.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Datefield(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = useRef();
  let { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <div className="datefield">
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className="datefield-field">
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        {state.validationState === 'invalid' && (
          <span aria-hidden="true">🚫</span>
        )}
      </div>
    </div>
  );
}

function DateSegment({ segment, state }) {
  let ref = useRef();
  let { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`datefield-segment ${
        segment.isPlaceholder ? 'datefield-placeholder' : ''
      }`}
    >
      {segment.text}
    </div>
  );
}
