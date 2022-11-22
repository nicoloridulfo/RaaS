interface TextProps {
  children?: string | React.ReactNode;
  color?: string;
  size?: string;
  bold?: boolean;
}
export const Text = ({ children, color, size, bold }: TextProps) => (
  <p
    style={{
      color,
      margin: 0,
    }}
    className={size + " " + (bold ? "font-bold" : "")}
  >
    {children}
  </p>
);
