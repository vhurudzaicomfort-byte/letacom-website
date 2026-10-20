import { Boxes, Code2, Globe, GraduationCap, LayoutTemplate, LifeBuoy, PenTool, Plug, ShoppingCart, Workflow, type LucideProps } from "lucide-react";

const icons = { Boxes, Code2, Globe, GraduationCap, LayoutTemplate, LifeBuoy, PenTool, Plug, ShoppingCart, Workflow };

export function ServiceIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = icons[name as keyof typeof icons] ?? Code2;
  return <Icon aria-hidden {...props} />;
}
