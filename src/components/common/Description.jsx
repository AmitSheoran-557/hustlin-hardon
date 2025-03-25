import React from 'react'

const Description = ({ title, customClass }) => {
    return (
        <p className={`lg:text-base text-sm leading-[100%] text-black ${customClass}`}>{title}</p>
    )
}

export default Description
