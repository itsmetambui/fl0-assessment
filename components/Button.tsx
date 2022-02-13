import cn from "classnames";

export default function Button({
  children,
  ...rest
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-between p-4 transition-all border rounded border-dark-lighter bg-dark hover:bg-dark-lighter",
        rest.className
      )}
    >
      {children}
    </button>
  );
}
