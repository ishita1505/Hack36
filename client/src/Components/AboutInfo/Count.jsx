import react from "react";
import Countup from "./Countup";

function Count(props){
	return(
			<div>
				<div className="my-8 xlsm:my-3">
					<div className="flex">
					<h1 className="text-3xl font-bold text-pink-400 lg:text-5xl md:text-4xl">
					{props.zero}
					</h1>
					<h1 className="text-3xl font-bold text-pink-400 lg:text-5xl md:text-4xl">
					<Countup end={props.data}/>
					</h1>
					<h1 className="text-3xl font-bold text-pink-400 lg:text-5xl md:text-4xl">
					{props.plus}
					</h1>
					</div>
					<h2 className="py-2 text-sm font-semibold text-gray-300 md:text-base">{props.event}</h2>
				</div>
			</div>
	)
}
export default Count;