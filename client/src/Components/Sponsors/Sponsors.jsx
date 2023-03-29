import React from "react"


import Image from "./Image"
import Content from "./Content" 

function Sponsors(){
	return(
		<div className="w-screen mb-12 bg-orange-500 h-1/3 sm:h-full md:h-full pt-8 sm:pt-16 lg:pt-16">       
			<Content />        	
			<Image />

			<div className="px-4 pb-8 text-xs text-center text-white sm:text-sm md:text-lg mb:24 lg:font-semibold"><p>Don't hesitate, contact us for better help and services. </p><a className="underline" href="">View All Sponsors</a></div>
		</div>
	)
}

export default Sponsors
