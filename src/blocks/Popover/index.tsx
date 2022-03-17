import * as React from 'react';
import {
  Popover as ReactTinyPopover,
  PopoverProps as ReactTinyPopoverProps,
  PopoverPosition,
} from 'react-tiny-popover';

export interface PopoverProps {
  align?: ReactTinyPopoverProps['align'];
  padding?: ReactTinyPopoverProps['padding'];
  popover: React.ReactElement;
  children: React.ReactElement;
  direction?: PopoverPosition | PopoverPosition[];
  on?: 'hover' | 'click';
  closeOnOutsideClick?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  // only for hover
  enterDelay?: number;
  // only for hover
  existDelay?: number;
}

const Popover = ({
  direction,
  align,
  padding,
  children,
  popover,
  on = 'click',
  closeOnOutsideClick = false,
  onOpen,
  onClose,
  enterDelay,
  existDelay,
}: PopoverProps) => {
  const [open, setOpen] = React.useState(false);
  const popoverPosition: PopoverPosition[] =
    typeof direction === 'string' ? [direction] : direction;

  const onClick = () => {
    setOpen((o) => {
      const newState = !o;
      if (newState) {
        onOpen && onOpen();
      } else {
        onClose && onClose();
      }
      return newState;
    });
  };

  const onMouseEnter = () => {
    if (enterDelay) {
      setTimeout(() => {
        setOpen(true);
        if (onOpen) onOpen();
      }, enterDelay);
    } else {
      setOpen(true);
      if (onOpen) onOpen();
    }
  };
  const onMouseLeave = () => {
    if (existDelay) {
      setTimeout(() => {
        setOpen(false);
        if (onClose) onClose();
      }, existDelay);
    } else {
      setOpen(false);
      if (onClose) onClose();
    }
  };
  const clickProps = { onClick };
  const hoverProps = { onMouseEnter, onMouseLeave };
  const triggerProps = on === 'click' ? clickProps : hoverProps;
  const onOutsideClick =
    closeOnOutsideClick && on === 'click' ? onMouseLeave : undefined;
  return (
    <ReactTinyPopover
      onClickOutside={onOutsideClick}
      positions={popoverPosition}
      align={align}
      isOpen={open}
      padding={padding}
      content={popover}
    >
      {React.cloneElement(children, triggerProps)}
    </ReactTinyPopover>
  );
};

export default Popover;
