import { ReactNode } from "react";

const GridElement = ({
  children,
  customStyle,
}: {
  children: ReactNode;
  customStyle: any;
}) => {
  return (
    <div className="grid-element" style={customStyle}>
      {children}
    </div>
  );
};

export default GridElement;
