import React from 'react'

const LiIcon = () => {
    return (
        <figure className='stroke-dark dark:stroke-light'>
            <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark' />
            </svg>
        </figure>
    )
}

export default LiIcon
