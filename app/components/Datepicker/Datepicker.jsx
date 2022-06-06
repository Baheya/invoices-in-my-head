import { useRef } from 'react';

import { useDatePickerState } from '@react-stately/datepicker';
import { useDatePicker } from '@react-aria/datepicker';
import { OverlayProvider } from '@react-aria/overlays';

import { Button, buttonLinks } from '../Button';

import styles from './Datepicker.css';
import { Popover, popoverLinks } from '../Popover';
import { Calendar, calendarLinks } from '../Calendar';
import { Datefield, datefieldLinks } from '../Datefield';

export function links() {
  return [
    ...buttonLinks(),
    ...popoverLinks(),
    ...calendarLinks(),
    ...datefieldLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function Datepicker(props) {
  let state = useDatePickerState(props);
  let ref = useRef();
  let {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  return (
    <div style={{ position: 'relative' }}>
      <span className="datepicker-label" {...labelProps}>
        {props.label}
      </span>
      <div className="datepicker-field" {...groupProps} ref={ref}>
        <Datefield {...fieldProps} />
        <Button variant="icon" {...buttonProps}>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
        </Button>
      </div>
      {state.isOpen && (
        <OverlayProvider>
          <Popover
            {...dialogProps}
            isOpen={state.isOpen}
            onClose={() => state.setOpen(false)}
          >
            <Calendar {...calendarProps} />
          </Popover>
        </OverlayProvider>
      )}
    </div>
  );
}
