export interface SectionHeaderProps {
  children: React.ReactNode;
}
export default function SectionHeader({ children }: SectionHeaderProps) {
  return <h1 className="text-4xl text-center py-10">{children}</h1>;
}
