// Shared "has the visitor passed the spiral Enter gate" signal. Lets the home
// page's web background hold off growing until the gate is dismissed, so the
// growth is actually seen instead of finishing behind the spiral.

let entered = false;
const listeners = new Set<() => void>();

export function hasEntered() {
  return entered;
}

export function markEntered() {
  if (entered) return;
  entered = true;
  for (const l of listeners) l();
}

// Runs cb immediately if already entered, otherwise once entry happens.
// Returns an unsubscribe function.
export function onEntered(cb: () => void) {
  if (entered) {
    cb();
    return () => {};
  }
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
