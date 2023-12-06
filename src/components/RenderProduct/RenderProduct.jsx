import "./RenderProduct.scss";

function RenderProduct(props) {
	let product = props.products.map((item, key) => {
		return (
			<div key={key} className="card">
				<div className="photo">
					<img src={item.image} />
				</div>
				<div className="description">
					<h2>{item.name}</h2>
					<h4>{item.company}</h4>
					<h1>{item.price}</h1>
					<p className="itemtext">{item.characteristick}</p>

					<div className="flexitembtns">
						<button className="itembtns2">
							<p className="text1">Go To Buy</p>
							<p className="textitem3">Design</p>
						</button>

						<div className="itemDivs">
							<span
								className="itemsArrowTwo"
								onClick={() => {
									props.dispatch({
										type: "add",
										payload: {
											...item,
										},
									});
									console.log(props.state);
								}}
							>
								Basket
							</span>
							<span className="itemArrow">
								<i className="fa-solid fa-arrow-left"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	});
	return <div className="flexcard">
		
		{product}
		
		</div>;
}

export default RenderProduct;
