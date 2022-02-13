import Image from "next/image";

export default function NewProjectButton() {
  return (
    <button className="flex items-center justify-between p-4 transition-all border rounded border-dark-lighter bg-dark hover:bg-dark-lighter">
      <div className="flex items-center justify-center p-3 border rounded-md border-dark-lighter">
        <Image src="/images/layer.svg" alt="lightning" height={20} width={20} />
      </div>
      <div className="flex flex-col items-start justify-between ml-4 mr-10">
        <span className="text-sm font-semibold text-spacegrey-lighter">
          New Project
        </span>
        <span className="text-xs font-medium text-spacegrey-darker">
          Create your own new project
        </span>
      </div>
      <Image src="/images/Group 24191.svg" alt="plus" height={10} width={10} />
    </button>
  );
}
