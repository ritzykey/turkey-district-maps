export const onClick2 = (e, onClick) => {
  onClick && handleMouseEvent(e, onClick);
};

export const onHover2 = (e, onHover) => {
  onHover && handleMouseEvent(e, onHover);
};

export const handleMouseEvent = (e, callback) => {
  const element = e.target;
  if (element.tagName === "path") {
    const distPath = element.getAttribute("d");
    const name = element.id;
    callback({ distPath, name });
  }
};

export const onMouseEnter = (event, hoverColor) => {
  event.target.style.fill = hoverColor;
};

export const onMouseLeave = (event, idleColor) => {
  event.target.style.fill = idleColor;
};
