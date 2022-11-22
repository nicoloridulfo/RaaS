interface StackProps {
  children: React.ReactNode;
  spacing?: number;
  vertical?: boolean;
  width?: string;
  wrap?: boolean;
  centerX?: boolean;
  centerY?: boolean;
  spaceBetween?: boolean;
  scrollVertical?: boolean;
}
export const Stack = ({
  children,
  spacing,
  vertical,
  width,
  wrap,
  centerX,
  centerY,
  spaceBetween,
  scrollVertical,
}: StackProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      flexWrap: wrap ? "wrap" : "nowrap",
      gap: `${spacing}px`,
      width: width,
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
