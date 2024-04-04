const SideNave = (Name, id)=> {
    return(
        <div className="w-[140px]">
        <a href={id} className={`text-main_text font-Lato cursor-pointer hover:text-primary hover:font-semibold `}>
                {Name}
              </a>
      </div>
    )
}

export default SideNave;