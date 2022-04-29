import { cloneElement, useEffect, useState } from 'react';
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
} from '@floating-ui/react-dom-interactions';

interface Props {
  tooltip: JSX.Element;
  placement?: Placement;
  children: JSX.Element;
}

// Adapted from documentation example:
// https://codesandbox.io/s/winter-tree-wmmffl?file=/src/Tooltip.tsx
const TooltipWrapper = ({ children, tooltip, placement = 'right' }: Props) => {
  const [open, setOpen] = useState(false);

  const { x, y, reference, floating, strategy, context, refs, update } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(20), flip(), shift({ padding: 8 })],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([useHover(context)]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [refs.reference, refs.floating, update, open]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}
      {open && (
        <div
          {...getFloatingProps({
            ref: floating,
            className: 'Tooltip z-20 max-w-[40vw] min-w-[20vw] fade-in',
            style: {
              position: strategy,
              top: y ?? '',
              left: x ?? '',
            },
          })}
        >
          {tooltip}
        </div>
      )}
    </>
  );
};

export default TooltipWrapper;
