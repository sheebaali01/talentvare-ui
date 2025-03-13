import React from 'react'
import bgImage from '../assets/bg.png'
import profileImg from '../assets/image.png'
import arrowDownIcon from '../assets/icons/arrow-down.png'

const HeroSection = () => {
  return (
    <div className='flex gap-5 pt-10 pl-15'>
        {/* profile */}
        <div className='w-[346px] h-[461px] flex flex-col gap-[10px]'>
            <div className='w-full h-[248px] bg-[#FFFFFF] rounded-[10px] pb-[20px] border-[1px] border-[#F4F4F4]'>
                <div className='h-[100px] rounded-t-[10px]' style={{ backgroundImage: `url(${bgImage})` }}/>
                <div className='w-[86px] h-[86px] border-[2px] border-white rounded-full mx-auto -mt-[43px]'>
                    <img src={profileImg} alt="" className='w-full h-full rounded-full'/>
                </div>
                <div className='w-[236px] h-[77px] mx-auto text-center'>
                    <p className='text-[18px] font-semibold'>Albert Flores</p>
                    <p className='text-[14px] text-[#737A91] font-medium'>
                        Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...
                    </p>
                    <p className='text-[12px] text-[#737A91] font-medium'>Clinton, Maryland</p>
                </div>
            </div>
            <div className='w-full h-[137px] bg-[#FFFFFF] rounded-[10px] p-[20px] border-[1px] border-[#F4F4F4]'>
                <div className='profile_detail'>
                    <p>Profile Visitors</p>
                    <p>140</p>
                </div>
                <hr class="h-px  border-0 bg-[#E9ECEF]"/>
                <div className='profile_detail'>
                    <p>Resume Viewers</p>
                    <p>20</p>
                </div>
                <hr class="h-px  border-0 bg-[#E9ECEF]"/>
                <div className='profile_detail'>
                    <p>My Jobs</p>
                    <p>88</p>
                </div>

            </div>

            <div className="flex justify-between items-center w-full h-[56px] bg-white rounded-[10px] p-5 border border-[#F4F4F4]">
  <div>
    <p className="text-[#333333] text-[16px] font-semibold">My calendar</p>
    <p className="text-[#737A91] text-[14px] ">Upcoming Interviews</p>
  </div>
  <img src={arrowDownIcon} alt="Arrow Down" className="w-[15px] h-[12px]" />
</div>

        </div>

        {/* hero section */}
        <div>
            <h1 className='text-[22px] font-semibold pt-5'>Find your Dream Job, Albert!</h1>
        </div>
    </div>
  )
}

export default HeroSection