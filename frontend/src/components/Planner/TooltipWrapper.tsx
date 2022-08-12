import { cloneElement, useEffect, useState } from 'react';
import {
  Placement,
  offset,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  FloatingPortal,
  autoPlacement,
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
    middleware: [offset(20), autoPlacement({ padding: 8 }), shift({ padding: 8, crossAxis: true })],
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
      <FloatingPortal>
        {open && (
          <div
            {...getFloatingProps({
              ref: floating,
              className: 'Tooltip z-30 max-h-[98vh] fade-in font-CaslonAntique select-none overflow-hidden',
              style: {
                position: strategy,
                // top: y ?? '', // Allegedly using below transform is better perf but can blur if set on subpixels?
                // left: x ?? '',
                top: '0',
                left: '0',
                transform: `translate(${Math.round(x as number)}px,${Math.round(y as number)}px)`,
              },
            })}
          >
            {tooltip}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

export default TooltipWrapper;
