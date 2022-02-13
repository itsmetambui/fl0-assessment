import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        <Image
          src="/images/Button.Logo.Back.svg"
          alt="FL0 logo"
          height={20}
          width={40}
        />
        <div className="">
          <span className="mr-1 text-xs font-semibold text-spacegrey">
            Company name
          </span>
          <Image
            src="/images/Icons-ic_play_arrow.svg"
            alt="arrow down"
            height={8}
            width={8}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center px-3 border-r border-dark-lighter">
          <Image
            src="/images/icon.helpInfo.svg"
            alt="chat"
            height={16}
            width={16}
          />
          <span className="ml-2 mr-1 text-xs font-medium text-spacegrey">
            Help & Support
          </span>
          <Image
            src="/images/Icons-ic_play_arrow.svg"
            alt="arrow down"
            height={8}
            width={8}
          />
        </div>
        <Image
          src="/images/icon.activity.svg"
          alt="notification"
          height={16}
          width={16}
        />
        <Image
          src="/images/navigation Profile.svg"
          alt="avatar"
          height={27}
          width={27}
        />
      </div>
    </header>
  );
}
