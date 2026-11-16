import { useEffect, useRef } from 'react';

/** Native <dialog> used for result details and project details. */
export default function Sheet({ open, onClose, label, wide = false, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={`sheet ${wide ? 'sheet-wide' : ''}`}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <button className="sheet-close" onClick={onClose} aria-label="Close" data-cursor="Close">
        Close
      </button>
      <div className="sheet-body">{children}</div>
    </dialog>
  );
}
