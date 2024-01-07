type HeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};
export default function Heading(props: HeadingProps) {
  const { children, level = 1, className, style, id } = props;
  const textSizes = [
    "text-5xl",
    "text-4xl",
    "text-3xl",
    "text-2xl",
    "text-xl",
    "text-lg",
  ];

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`text-3xl font-bold ${textSizes[level - 1]} ${className}`}
      style={style}
      id={id}
    >
      {children}
    </Tag>
  );
}
