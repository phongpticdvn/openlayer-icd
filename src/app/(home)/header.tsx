import { DarkmodeButton } from "@/utilities/darkmode_button"
import { Logo } from "@/utilities/logo"

export const Header = () => {
  return (
    <header className="flex flex-row w-full h-[100px] justify-around items-center">
      <Logo></Logo>
      <div>
        Link1 2 3
      </div>
      <div>
        Navigation
      </div>
    </header>
  )
}