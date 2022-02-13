import cn from "classnames";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = React.HTMLProps<HTMLDivElement> & {
  id: string;
  icon: string;
  name: string;
  versions: {
    number: number;
    env: string;
    timestamp: Date;
  }[];
};

export default function ProjectCard({
  id,
  icon,
  name,
  versions,
  ...divProps
}: ProjectCardProps) {
  return (
    <div
      {...divProps}
      className={cn(
        "flex justify-between items-center p-4 border-t border-b border-dark-lighter",
        divProps.className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex items-center justify-center w-8 h-8 border rounded-full border-dark-lighter">
          {icon}
        </div>
        <div className="text-sm">
          <span className="mr-2 font-semibold text-spacegrey-lighter">
            {name}
          </span>
          <span className="font-regular text-spacegrey">{`Version ${versions[0].number}`}</span>
        </div>
      </div>
      <div>
        <Popover className="relative">
          <Popover.Button className="inline-flex items-center px-3 py-2 text-base font-medium rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Image
              src="/images/3 Dotts workspace.svg"
              height={16}
              width={16}
              alt="project menu"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 p-1 transform -translate-x-full border rounded-md w-72 left-1/2 border-dark-lighter bg-dark-darker">
              <div className="p-2 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                <div className="mb-6 text-xs font-medium text-spacegrey">
                  Versions
                </div>
                <div>
                  {versions.map((v) => (
                    <Link
                      key={v.number}
                      href={`/projects/${id}/versions/${v.number}`}
                      passHref
                    >
                      <div className="flex items-start justify-start gap-6 p-2 my-2 text-sm border rounded-sm cursor-pointer border-dark-lighter">
                        <div className="basis-12">
                          <span
                            className={cn(
                              "px-1 rounded-sm font-medium uppercase bg-opacity-30",
                              {
                                "bg-green-400 text-green-600": v.env === "uta",
                                " bg-orange-400 text-orange-600":
                                  v.env === "prod",
                              }
                            )}
                          >
                            {v.env}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-spacegrey-lighter">
                            {name}
                          </p>
                          <p className="font-regular text-spacegrey">{`Version ${v.number}`}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}
