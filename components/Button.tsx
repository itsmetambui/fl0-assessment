import cn from "classnames";

export default function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-between p-4 transition-all border rounded border-dark-lighter bg-dark hover:bg-dark-lighter",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
