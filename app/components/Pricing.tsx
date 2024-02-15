import Image from 'next/image'
import Check from '../../public/assets/check.svg'
export function Pricing() {

    return (
        <div className=" py-[48px] lg:py-[60px]">
            <h1 className="text-[#172026] text-center text-[24px] lg:text-[42px] font-medium">Flexible plans for you</h1>
            <p className="text-[#36485C] pt-[16px] pb-[40px] text-center lg:text-[18px]">No hidden fees!</p>

            <div className=" flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
                <div className=" bg-[#F5F4FF] w-full rounded-[8px] p-6 flex flex-col lg:justify-between">
                    <div className="">
                        <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl">Free Trial</h3>
                        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for testing the waters</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">$0 <span className="text-[#5F7896]">/mo</span></h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Sed do eiusmod tempor incididunt
                            </li>
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Consectetur adipiscing elit
                            </li>

                        </ul>
                    </div>
                    <button className='mt-[16px] rounded-[4px] bg-white text-[#4328EB] font-medium py-[14px]'>Start Trial</button>
                </div>
                <div className=" bg-[#4328EB] w-full rounded-[8px] p-6 flex flex-col lg:justify-between">
                    <div className="">
                        <h3 className="text-white font-medium text-[18px] lg:text-xl">Business</h3>
                        <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">Perfect for small businesses</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-white">$500 <span className="text-[#F4F8FA]">/mo</span></h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Sed do eiusmod tempor incididunt
                            </li>
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Consectetur adipiscing elit
                            </li>
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Consectetur adipiscing elit
                            </li>
                            <li className='flex gap-x-2 items-center'>
                                <span>
                                    <Image src={Check} alt='Checked Icon' />
                                </span>
                                Consectetur adipiscing elit
                            </li>

                        </ul>
                    </div>
                    <button className='mt-[16px] rounded-[4px] bg-white text-[#4328EB] font-medium py-[14px]'>Get Started</button>
                </div>
                <div className=" bg-[#F5F4FF] w-full rounded-[8px] p-6 flex flex-col lg:justify-between">
                    <div className="">
                        <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl">Enterprise</h3>
                        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for big companies</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>
                        <p className='pt-4 text-[16px] text-[#36485C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <p className='pt-2 text-[16px] text-[#36485C]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <button className='mt-[16px] rounded-[4px] bg-white text-[#4328EB] font-medium py-[14px]'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}