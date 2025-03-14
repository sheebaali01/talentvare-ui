import React from "react";
import bgImage from "../assets/bg.png";
import profileImg from "../assets/image.png";
import arrowDownIcon from "../assets/icons/arrow-down.png";
import TabButton from "./TabButton";
import JobCard from "./JobCard";

const HeroSection = () => {

    const jobTypes = ["Frontend","Backend","Graphic Designer"];
  return (
    <div className="flex gap-5 pt-10 pl-15 pr-15">
      {/* profile */}
      <div className="w-[346px] h-[461px] flex flex-col gap-[10px]">
        <div className="w-full h-[248px] bg-[#FFFFFF] rounded-[10px] pb-[20px] border-[1px] border-[#F4F4F4]">
          <div
            className="h-[100px] rounded-t-[10px]"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="w-[86px] h-[86px] border-[2px] border-white rounded-full mx-auto -mt-[43px]">
            <img
              src={profileImg}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-[236px] h-[77px] mx-auto text-center">
            <p className="text-[18px] font-semibold">Albert Flores</p>
            <p className="text-[14px] text-[#737A91] font-medium">
              Senior Product Designer | UI/UX Designer | Graphic Designer |
              Web...
            </p>
            <p className="text-[12px] text-[#737A91] font-medium">
              Clinton, Maryland
            </p>
          </div>
        </div>
        <div className="w-full h-[137px] bg-[#FFFFFF] rounded-[10px] p-[20px] border-[1px] border-[#F4F4F4]">
          <div className="profile_detail">
            <p>Profile Visitors</p>
            <p>140</p>
          </div>
          <hr class="h-px  border-0 bg-[#E9ECEF]" />
          <div className="profile_detail">
            <p>Resume Viewers</p>
            <p>20</p>
          </div>
          <hr class="h-px  border-0 bg-[#E9ECEF]" />
          <div className="profile_detail">
            <p>My Jobs</p>
            <p>88</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-full h-[56px] bg-white rounded-[10px] p-5 border border-[#F4F4F4]">
          <div>
            <p className="text-[#333333] text-[16px] font-semibold">
              My calendar
            </p>
            <p className="text-[#737A91] text-[14px] ">Upcoming Interviews</p>
          </div>
          <img
            src={arrowDownIcon}
            alt="Arrow Down"
            className="w-[15px] h-[12px]"
          />
        </div>
      </div>

      {/* hero section */}
      <div className="flex flex-col gap-[21px] w-[974px]">
        <div>
          <h1 className="text-[22px] font-semibold pt-5">
            Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
          </h1>
          <p className="text-[14px] text-[#585D6E]">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>
        <div className="flex items-center gap-10 w-full h-[77px] bg-white rounded-[10px] p-[20px] border border-[#F4F4F4]">
            <div className="w-[192px] h-[17px] ">
                <input type="text" placeholder="Job Title, Company, or Keywords" className="placeholder:text-[#585D6E] placeholder:text-[14px]"/>
            </div>

        </div>
        <div className="flex gap-5 items-center">
            <span className="text-[#737A91] text-[14px]">Similar:</span>
            <div className="flex gap-4">
                {
                    jobTypes.map((jobType)=>(

                        <TabButton type={jobType}/>
                    ))
                }
            </div>
        </div>
        {/* featured jobs section */}
        <div className="flex flex-col gap-[15px]">
            <div className="flex gap-[15px] items-center">
                <span className="text-[#333333] font-medium text-[18px]">Featured Jobs</span>
                <span className="text-[14px] text-[#0154AA] underline">See Featured Jobs</span>
            </div>
            <div>
                <JobCard/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
