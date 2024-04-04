
const SkillsCard = (title , pargraph)=> {
    return(

        <div className="flex items-center justify-center flex-col lg:max-w-md min-w-min bg-white  2xl:w-[390px] 2xl:h-[260px] md:w-[328px] sm:h-[245px] w-[250px] h-[220px] rounded sm:pb-5 pb-2 2xl:space-y-12 -space-y-2 md:px-8 px-1">
        <div className="space-y-6 ">
          <p className="  font-bold lg:text-[20px] text-[18px] text-sub_text whitespace-nowrap text-center  ">
            {title}
          </p>
          <p className=" font-Lato sm:text-[19px] text-[16px] text-sub_text text-center ">
            {pargraph}
          </p>
        </div>
        </div>
)
}

export default SkillsCard;