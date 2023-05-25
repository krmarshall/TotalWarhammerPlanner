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
  limitShift,
  safePolygon,
} from '@floating-ui/react';

interface Props {
  tooltip: JSX.Element;
  placement?: Placement;
  children: JSX.Element;
}

// Adapted from documentation example:
// https://codesandbox.io/s/winter-tree-wmmffl?file=/src/Tooltip.tsx
const TooltipWrapper = ({ children, tooltip, placement = 'right' }: Props) => {
  const [open, setOpen] = useState(false);
  // const [locked, setLocked] = useState(false);

  const { x, y, strategy, context, refs, update } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(20),
      autoPlacement({ padding: 8 }),
      shift({ padding: 8, crossAxis: true, limiter: limitShift() }),
    ],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([useHover(context)]);
  // let getReferenceProps;
  // let getFloatingProps;
  // if (locked) {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const temp = useInteractions([useHover(context, { handleClose: safePolygon({ blockPointerEvents: true }) })]);
  //   getReferenceProps = temp.getReferenceProps;
  //   getFloatingProps = temp.getFloatingProps;
  // } else {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const temp = useInteractions([useHover(context)]);
  //   getReferenceProps = temp.getReferenceProps;
  //   getFloatingProps = temp.getFloatingProps;
  // }

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [refs.reference, refs.floating, update, open]);

  // useEffect(() => {
  //   if (!open) {
  //     setLocked(false);
  //   }
  //   const tempRef = refs.reference.current;
  //   setTimeout(() => {
  //     if (open === true && refs.reference.current === tempRef) {
  //       setLocked(true);
  //     }
  //   }, 3500);
  // }, [open]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref: refs.setReference, ...children.props }))}
      <FloatingPortal>
        {open && (
          <div
            {...getFloatingProps({
              ref: refs.setFloating,
              className:
                'Tooltip z-30 max-h-[98vh] fade-in font-CaslonAntique select-none overflow-y-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-700',
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
