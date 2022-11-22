interface BoxProps {
  children: React.ReactNode;
  backgroundColor?: string;
  height?: string;
  width?: string;
  padding?: string;
  centerX?: boolean;
  centerY?: boolean;
  spaceBetween?: boolean;
  scrollVertical?: boolean;
}
export const Box = ({
  children,
  backgroundColor,
  height,
  width,
  padding,
  centerX,
  centerY,
  spaceBetween,
  scrollVertical,
}: BoxProps) => (
  <div
    style={{
      backgroundColor,
      height,
      width,
      padding,
      display: "flex",
      justifyContent: spaceBetween
        ? "space-between"
        : centerX
        ? "center"
        : "flex-start",
      alignItems: centerY ? "center" : "flex-start",
      overflowY: scrollVertical ? "scroll" : "hidden",
    }}
  >
    {children}
  </div>
);
