import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ComponentProps = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Component = (props: ComponentProps) => {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={clsx("", className)}>
      {children}
    </div>
  );
};

export default Component;
