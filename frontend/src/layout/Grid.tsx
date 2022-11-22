interface GridProps {
  children: React.ReactNode;
  cols: number;
  spacing?: string;
}
export const Grid = ({ children, cols, spacing }: GridProps) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "grid",
      gap: spacing,
      alignContent: "space-between",
      justifyContent: "space-between",
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    }}
  >
    {children}
  </div>
);
