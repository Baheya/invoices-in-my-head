import { useButton } from '@react-aria/button';
import { HiddenSelect, useSelect } from '@react-aria/select';

import { useSelectState } from '@react-stately/select';
import { OverlayProvider } from '@react-aria/overlays';
import { Popover, popoverLinks } from '../Popover';
import { Button, buttonLinks } from '../Button';
import { useRef } from 'react';

import styles from './Select.css';
import { ListBox, listBoxLinks } from '../ListBox';

export function links() {
  return [
    ...popoverLinks(),
    ...buttonLinks(),
    ...listBoxLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function Select(props) {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = useRef();
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  // Get props for the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref);

  return (
    <div
      className="select"
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div className="select-label" {...labelProps}>
        {props.label}
      </div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button className="select-button" {...buttonProps} ref={ref}>
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4.228 4.228L9.456 1"
              stroke="#7C5DFA"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {state.isOpen && (
        <OverlayProvider>
          <Popover isOpen={state.isOpen} onClose={state.close}>
            <ListBox {...menuProps} state={state} />
          </Popover>
        </OverlayProvider>
      )}
    </div>
  );
}
