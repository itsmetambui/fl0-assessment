import Image from "next/image";
import cn from "classnames";

type RecipeCardProps = React.HTMLProps<HTMLDivElement> & {
  background: { color?: string; image: string };
  name: string;
};

export default function RecipeCard({
  background: { color = "#000000", image },
  name,
  ...divProps
}: RecipeCardProps) {
  return (
    <div {...divProps} className={cn("cursor-pointer", divProps.className)}>
      <div
        className="relative w-full h-32 mb-4 overflow-hidden rounded group"
        style={{
          backgroundColor: color,
        }}
      >
        <Image src={image} alt={name} layout="fill" />
        <div className="absolute flex items-center justify-center w-full h-full transition-all bg-opacity-0 bg-dark-darker group-hover:bg-opacity-90">
          <div className="hidden group-hover:block">
            <button className="w-20 py-2 mr-1 text-xs font-semibold text-center text-white transition-all bg-blue-700 rounded hover:bg-opacity-80">
              Use
            </button>
            <button className="w-20 py-2 text-xs font-semibold text-center transition-all rounded text-spacegrey bg-dark-lighter hover:bg-opacity-80">
              Preview
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-2 my-1">
        <Image src="/images/UserLogo.svg" height={18} width={18} alt="FL0" />
        <span className="text-xs text-medium text-spacegrey-darker">
          FL0 Recipe
        </span>
      </div>
      <p className="text-sm font-medium text-spacegrey-lighter">{name}</p>
    </div>
  );
}
