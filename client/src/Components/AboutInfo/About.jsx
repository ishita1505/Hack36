import { useState} from "react";
import Count from "./Count";

function Aboutinfo(){
	return(
		<div className="bg-slate-900">
		{/* <div style={{ 
      backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-party-black-gold-high-end-banner-image_183957.jpg")` 
    }}> */}
			<div className="flex flex-col justify-center place-content-center lg:flex-row">
				<div className="flex mt-12 lg:my-20 lg:basis-1/2 place-content-center">
					<div>
						<h1 className="text-xl font-bold text-white xl:text-4xl lg:text-3xl md:text-2xl">ABOUT</h1>
						<h1 className="text-xl font-bold text-white xl:text-4xl lg:text-3xl md:text-2xl">US</h1>
						<button className="p-4 px-6 mt-6 text-sm bg-yellow-400 hover:bg-yellow-300 lg:text-base xl:text-lg lg:my-12">CONFIRM YOUR SEAT{'\u2192'}</button>
					</div>
				</div>
				<div className="flex lg:basis-1/2 place-content-center lg:place-content-start">
					<div className="w-10/12 mt-12 lg:my-20 md:w-7/12 sm:w-8/12 lg:w-9/12">
					<p className="text-sm text-justify text-white md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, harum nemo, alias, consequatur aliquid ullam quis ipsa doloribus adipisci dicta repudiandae vero. Labore, doloremque quo, libero at hic quidem odit autem facilis accusamus.</p><br/>
					<p className="text-sm text-justify text-white md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, harum nemo, alias, consequatur aliquid ullam quis ipsa doloribus adipisci dicta repudiandae vero. Labore, doloremque quo, libero at hic quidem odit autem facilis accusamus.</p>
					<div className="flex justify-between xlsm:place-items-center ">
					<Count
					zero="0"
					data="8"
					event="EVENTS"
					/>
				    <Count
					zero="0"
					data="9"
					event="SPEAKERS"
					/>
					<Count
					data="25"
					event="SPONSORS"
					plus="+"
					/>
					</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	)
}
export default Aboutinfo