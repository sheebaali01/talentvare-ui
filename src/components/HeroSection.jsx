import React from "react";
import TabButton from "./TabButton";
import JobCard from "./JobCard";
import data from "../data.json";
import { ChevronDown } from 'lucide-react';
import searchIcon from "../assets/icons/search-white.svg";
import bgImage from "../assets/bg.png";
import profileImg from "../assets/image.png";

const HeroSection = () => {
  const jobs = data.jobs;
  console.log("jobs", jobs);

  const jobTypes = ["Frontend", "Backend", "Graphic Designer"];
  return (
    <div className="flex flex-col lg:flex-row gap-5 pt-10 px-4 lg:px-15">
      {/* Profile Sidebar */}
      <div className="w-full lg:w-[346px] flex flex-col gap-[10px]">
        <div className="w-full h-auto bg-white rounded-[10px] pb-[20px] border border-[#F4F4F4]">
          <div
            className="h-[100px] rounded-t-[10px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="w-[86px] h-[86px] border-[2px] border-white rounded-full mx-auto -mt-[43px]">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-full max-w-[236px] mx-auto text-center px-2">
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

        <div className="w-full bg-white rounded-[10px] p-[20px] border border-[#F4F4F4]">
          <div className="profile_detail flex justify-between">
            <p>Profile Visitors</p>
            <p>140</p>
          </div>
          <hr className="h-px border-0 bg-[#E9ECEF] my-2" />
          <div className="profile_detail flex justify-between">
            <p>Resume Viewers</p>
            <p>20</p>
          </div>
          <hr className="h-px border-0 bg-[#E9ECEF] my-2" />
          <div className="profile_detail flex justify-between">
            <p>My Jobs</p>
            <p>88</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-full h-auto bg-white rounded-[10px] p-5 border border-[#F4F4F4]">
          <div>
            <p className="text-[#333333] text-[16px] font-semibold">
              My calendar
            </p>
            <p className="text-[#737A91] text-[14px]">Upcoming Interviews</p>
          </div>
          <ChevronDown size={20} className="text-[#333333]" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col gap-[21px] w-full lg:w-[calc(100%-366px)]">
        <div>
          <h1 className="text-[22px] font-semibold pt-5">
            Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
          </h1>
          <p className="text-[14px] text-[#585D6E]">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>

        {/* <div className="flex flex-col sm:flex-row items-center gap-4 w-full bg-white rounded-[10px] p-5 border border-[#F4F4F4]">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="w-full sm:w-[70%] placeholder:text-[#585D6E] placeholder:text-[14px] outline-none rounded px-3 py-2 text-sm"
          />
          <button className="w-full sm:w-auto px-5 py-2 bg-[#0154AA] text-white rounded text-sm font-medium">
            Search
          </button>
        </div> */}
        <div className="flex flex-col sm:flex-row items-center w-full bg-white rounded-[10px] p-4 border border-[#F4F4F4] gap-3 sm:gap-0 sm:divide-x sm:divide-[#E5E5E5]">
          {/* Search Input */}
          <div className="flex items-center w-full sm:w-[40%] px-2 h-[37px]">
            <input
              type="text"
              placeholder="Job Title, Company, or Keywords"
              className="w-full placeholder:text-[#585D6E] placeholder:text-[14px] text-sm outline-none"
            />
          </div>

          {/* Location Dropdown */}
          <div className="w-full sm:w-[20%] px-2 flex items-center justify-between sm:justify-start gap-2 h-[37px]">
            <select className="w-full text-[14px] text-[#585D6E] outline-none bg-transparent">
              <option>Select Location</option>
              <option>London</option>
              <option>New York</option>
            </select>
          </div>

          {/* Job Type Dropdown */}
          <div className="w-full sm:w-[20%] px-2 flex items-center justify-between sm:justify-start gap-2 h-[37px]">
            <select className="w-full text-[14px] text-[#585D6E] outline-none bg-transparent">
              <option>Job Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="w-full sm:w-[20%] px-2 mt-2 sm:mt-0 flex justify-end">
            <button className="w-full sm:w-[147px] h-[39px] bg-[#0154AA] text-white rounded-[8px] font-roman cursor-pointer flex items-center justify-center gap-2">
              <img
                src={searchIcon}
                alt="Search"
                className="w-4 h-4 invert brightness-0"
              />
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#737A91] text-[14px]">Similar:</span>
          <div className="flex gap-3 flex-wrap">
            {jobTypes.map((jobType) => (
              <TabButton key={jobType} type={jobType} />
            ))}
          </div>
        </div>
        <hr className="h-px border-0 bg-[#E9ECEF] my-2" />

        {/* Featured Jobs Section */}
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-wrap gap-[15px] items-center ">
            <span className="text-[#333333] font-medium text-[18px]">
              Featured Jobs
            </span>
            <span className="text-[14px] text-[#0154AA] underline cursor-pointer">
              See Featured Jobs
            </span>
          </div>
          <div className="flex gap-[15px] flex-wrap">
            {jobs
              .filter((job) => job.tag !== "")
              .map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
          </div>
        </div>
        <hr className="h-px border-0 bg-[#E9ECEF] my-2" />

        {/* Recommended Jobs Section */}
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-wrap gap-[15px] items-center ">
            <span className="text-[#333333] font-medium text-[18px]">
              Recommended Jobs
            </span>
            <span className="text-[14px] text-[#0154AA] underline cursor-pointer">
              See Recommended Jobs
            </span>
          </div>
          <div className="flex gap-[15px] flex-wrap">
            {jobs
              .filter((job) => job.tag === "")
              .map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
