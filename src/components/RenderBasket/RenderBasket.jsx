import "./RenderBasket.scss";
import { useState } from "react";
function RenderBasket(props) {
	const [basket, setBasket] = useState(false);
	let product = props.state.map((elements) => {
		return (
			<div className="flexitemProd">
				<div className="flexImagesprod">
					<div className="imgdivs">
						<img className="itemimg" src={elements.image} />
					</div>
					<div className="flextextItem">
						<p className="itemtext1">{elements.name}</p>
						<p className="itemtext2">{elements.company}</p>
						<p className="pricetextItem">{elements.price}</p>
					</div>
				</div>
				<div className="flexnumberprod">
					<div className="productnumber">
						<button
							onClick={() => {
								if (elements.count > 0) {
									props.dispatch({
										type: "addcount",
										payload: {
											...elements,
											count: elements.count - 1,
										},
									});
								}
							}}
							className="btnsMinuse"
						>
							-
						</button>
						<div>{elements.count}</div>
						<button
							onClick={() => {
								props.dispatch({
									type: "addcount",
									payload: {
										...elements,
										count: elements.count + 1,
									},
								});
							}}
							className="btnsPluse"
						>
							+
						</button>
					</div>
					<div className="flexbtnsitem">
						<button
							onClick={() => {
								props.dispatch({
									type: "deleteprod",
									payload: {
										id: elements.id,
									},
								});
							}}
							className="btnsItemDelete"
						>
							delete
						</button>
					</div>
				</div>
			</div>
		);
	});
	return (
		<>
			<button
				className="btns"
				onClick={() => {
					if (basket === false) {
						setBasket(true);
					} else {
						setBasket(false);
					}
				}}
			>
				basket
			</button>

			<div className={`basketMenu ${basket ? "activeBasket" : ""}`}>{product}</div>
		</>
	);
}
export default RenderBasket;
