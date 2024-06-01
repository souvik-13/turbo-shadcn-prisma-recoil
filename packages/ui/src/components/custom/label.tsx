import { cn } from "@ui/lib/utils"

interface LabelProps {
  children?: React.ReactNode;
  className?: string;
}

export const Label = ({ children, className }:LabelProps ) => {
  return (
    <div className={cn(className)}>
      <h1>Label Component</h1>
      {children}
    </div>
  );
};
