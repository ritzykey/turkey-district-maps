import type { TurkeyCityMapsProps } from './Istanbul'

type MouseEventCallback = TurkeyCityMapsProps['onClick']

export const onClick2 = (e: React.MouseEvent<SVGPathElement>, onClick?: MouseEventCallback): void => {
  onClick && handleMouseEvent(e, onClick);
};

export const onHover2 = (e: React.MouseEvent<SVGPathElement>, onHover?: MouseEventCallback): void => {
  onHover && handleMouseEvent(e, onHover);
};

export const handleMouseEvent = (e: React.MouseEvent<SVGPathElement>, callback: MouseEventCallback): void => {
  const element = e.target as SVGPathElement;
  if (element.tagName === "path") {
    const distPath = element.getAttribute("d");
    const name = element.id;
    callback?.({ distPath, name });
  }
};

export const onMouseEnter = (event: React.MouseEvent<SVGPathElement>, hoverColor: string): void => {
  const target = event.target as SVGPathElement;
  target.style.fill = hoverColor;
};

export const onMouseLeave = (event: React.MouseEvent<SVGPathElement>, idleColor: string): void => {
  const target = event.target as SVGPathElement;
  target.style.fill = idleColor;
};
