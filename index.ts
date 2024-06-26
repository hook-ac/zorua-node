const _req = require;
const interceptModule = _req("./intercept.node");

export const original = { x: 0, y: 0 };
export function intercept() {
  interceptModule.start_raw_input((deltaX, deltaY, mode) => {
    if (mode == "a") {
      original.x = deltaX;
      original.y = deltaY;
    } else {
      original.x += deltaX;
      original.y += deltaY;
    }
  });
  interceptModule.block_input();
}

export function setVirtual(position: { x: number; y: number }) {
  interceptModule.set_mouse_position(position.x, position.y);
}

export function disableThrottling() {
  interceptModule.disable_throttling();
}
