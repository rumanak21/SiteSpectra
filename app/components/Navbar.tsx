import Image from "next/image";
import Logo from "./../../public/assets/Logo.svg"
import User from "./../../public/assets/User.svg"
import Menu from "./../../public/assets/Menu.svg"

export function Navbar() {

    const navLinks = [
        { name: "Features" },
        { name: "Pricing" },
        { name: "Enterprise" },
        { name: "Careers" },
    ]

    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:mx-auto lg:container lg:px-20" >
            <div className="flex">
                <Image src={Logo} alt="Logo" />
                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item, index) => (
                        <p className="text-[#36485C] font-medium" key={index}>{item.name}</p>
                    ))}
                </div>
            </div>
            <div className="flex gap-x-5 items-center">
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an Account</p>
                <div className="flex gap-x-2 items-center">
                    <Image src={User} alt="User Profile" />
                    <span className="hidden lg:block font-medium text-[#36485C]">Sign in</span>
                </div>
                <div>
                    <Image src={Menu} alt="Menu Button" className="lg:hidden" />
                </div>
            </div>
        </nav>
    )
}