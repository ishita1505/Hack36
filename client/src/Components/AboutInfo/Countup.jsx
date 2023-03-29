import React, {useState, useRef, useEffect} from "react";

//contain code for countup animation..

const Countup = ({end}) => {

	const [state, setstate] = useState(null)
	const ref = useRef(0)

	const accumulator = end/200;

	const updateCounterState = () => {
		if(ref.current <end){
			const result = Math.ceil(ref.current + accumulator)
			if(result>end) return setstate(end)

			setstate(result)
			ref.current = result
		}
		setTimeout(updateCounterState, 100)
	}

	useEffect(() => {
		let isMounted = true;
		if(isMounted){
			updateCounterState();
		}

		return() => (isMounted = false);
	}, [end]);
	return(
		    <div>
				{state}
			</div>
	);
	};
	export default Countup