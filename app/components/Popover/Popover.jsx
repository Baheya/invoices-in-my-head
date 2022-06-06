import { useRef } from 'react';
import { FocusScope } from '@react-aria/focus';
import { useDialog } from '@react-aria/dialog';
import { useOverlay, useModal, DismissButton } from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';

import styles from './Popover.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Popover(props) {
  let ref = useRef();
  let { popoverRef = ref, isOpen, onClose, children, ...otherProps } = props;

  let { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    popoverRef
  );

  let { modalProps } = useModal();
  let { dialogProps } = useDialog(otherProps, popoverRef);

  return (
    <FocusScope contain restoreFocus>
      <div
        className="popover"
        {...mergeProps(overlayProps, modalProps, dialogProps)}
        ref={popoverRef}
        style={
          {
            // position: 'absolute',
            // marginTop: 4,
            // padding: 20,
            // zIndex: 1,
          }
        }
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  );
}
