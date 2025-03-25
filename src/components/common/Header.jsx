import React from 'react'

const Header = () => {
    const MARKET_DATA_LIST = [
        { name: 'S&P', change: '-1.01%', color: 'text-red-600' },
        { name: 'Shanghai', change: '+0.87%', color: 'text-green-600' },
        { name: 'FTSE 100', change: '+0.13%', color: 'text-green-600' },
        { name: 'ASD 100', change: '+0.13%', color: 'text-green-600' },
        { name: 'Brent Crude Oil', change: '-0.24%', color: 'text-red-600' },
        { name: 'DSC', change: '-0.24%', color: 'text-red-600' },
        { name: 'AXD 100', change: '+0.13%', color: 'text-green-600' },
        { name: 'Euro/Dollar', change: '+0.02%', color: 'text-green-600' },
    ];

    return (
        <div className="bg-black lg:py-4 md:py-3 py-2 flex items-center overflow-hidden max-w-[1920px] mx-auto">
            <div className="scrolling-content text-white flex animate-marquee whitespace-nowrap">
                {MARKET_DATA_LIST.map((market, index) => (
                    <div key={index} className="flex items-center mr-8">
                        <span className="lg:mr-[7px] uppercase !leading-[100%] mr-1 lg:text-base text-sm">{market.name}</span>
                        <div className={`flex items-center whitespace-nowrap bg-lightBrown text-white rounded-[73px]`}>
                            <span className={`lg:text-base text-sm border rounded-[5px] py-[3px] px-1 ${market.color}`}>{market.change}</span>
                        </div>
                    </div>
                ))}
                {MARKET_DATA_LIST.map((market, index) => (
                    <div key={index + '-duplicate'} className="flex items-center mr-8">
                        <span className="lg:mr-1.5 mr-1 lg:text-base text-sm">{market.name}</span>
                        <div className={`flex items-center whitespace-nowrap bg-lightBrown text-white rounded-[73px]`}>
                            <span className={`lg:text-base text-sm ${market.color}`}>{market.change}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Header

