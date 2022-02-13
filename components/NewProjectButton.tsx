import Image from "next/image";
import Button from "./Button";

export default function NewProjectButton() {
  const handleCreateNewProject = () => console.log("Create new project");

  return (
    <Button onClick={handleCreateNewProject}>
      <div className="flex items-center justify-center p-3 border rounded-md border-dark-lighter">
        <Image src="/images/layer.svg" alt="layer" height={20} width={20} />
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
    </Button>
  );
}
