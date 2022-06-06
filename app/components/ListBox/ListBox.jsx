import { useRef } from 'react';
import { useListBox, useOption } from '@react-aria/listbox';

import styles from './ListBox.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function ListBox(props) {
  let ref = useRef();
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      className="list-box"
      {...listBoxProps}
      ref={listBoxRef}
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        maxHeight: '150px',
        overflow: 'auto',
      }}
    >
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

function Option({ item, state }) {
  let ref = useRef();
  let { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  let backgroundColor;
  let classes = '';
  let color = 'black';

  if (isSelected) {
    classes = 'active';
    backgroundColor = 'blueviolet';
    color = 'var(--purple-200)';
  } else if (isFocused) {
    classes = 'active';
    // backgroundColor = 'gray';
    color = 'var(--purple-200)';
  } else if (isDisabled) {
    backgroundColor = 'transparent';
    color = 'gray';
  }

  return (
    <li
      className={`listbox-item ${classes}`}
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        // color: color,
        // padding: '2px 5px',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      {item.rendered}
    </li>
  );
}
