interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-2xl font-semibold mb-4">{children}</h2>;
}