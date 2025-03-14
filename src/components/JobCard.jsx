import React from "react";
import { Bookmark, MapPin, Clock } from "lucide-react";

const JobCard = ({ job }) => {
  const { title, company, tag, logo, applicants, location, created_at } = job;
  const daysAgoFunction = (dateTime) => {
    const createdAt = new Date(dateTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="w-full sm:w-[182px] h-[164px] bg-[#FFFFFF] rounded-[10px] py-[5px] px-[19px] border-[1px] border-[#FFFFFF]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] text-[#333333] font-semibold">{tag}</p>
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] rounded-[9.11px] bg-[#FAFAFA] flex items-center justify-center overflow-hidden">
              <img
                src={`/logos/${logo}`}
                alt={company}
                className="w-[23px] h-[21.4px] object-contain"
              />
            </div>
            <div>
              <h1 className="font-medium text-[14px] text-[#333333]">
                {title}
              </h1>
              <p className="text-[#333333] text-[12px]">{company}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="text-[#333333] w-[12px] h-[14px] " />
            <p className="text-[12px] text-[#585D6E]">{location}</p>
          </div>
          <div className="flex items-center gap-1 flex-nowrap">
            <Clock className="text-[#333333] w-[12px] h-[14px]" />
            <p className="text-[12px] text-[#585D6E] whitespace-nowrap">
              {daysAgoFunction(created_at) === 0
                ? "Today"
                : `${daysAgoFunction(created_at)} days ago`}
              <span> | </span>
              <span className="text-[12px] text-[#0154AA]">
                {applicants} applicants
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:w-full">
          <button className="flex-grow sm:w-[80%] h-[34px] bg-[#0154AA] text-white rounded-[8px] font-roman cursor-pointer text-[12px]">
            Apply Now
          </button>
          <Bookmark className="text-[#AAAAAA] sm:w-[20%]" size={23} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
