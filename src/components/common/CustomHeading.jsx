import React from 'react'

const CustomHeading = ({ title, customClass }) => {
    return (
        <h2 className={`xl:text-[80px] lg:text-[60px] md:text-[50px] text-[40px] !leading-[104%] shadow-[2px_2px_1px_0px_#FFFFFF52_inset] shadow-[2px_2px_4px_0px_#00000040] ${customClass}`}>{title}</h2>
    )
}

export default CustomHeading
