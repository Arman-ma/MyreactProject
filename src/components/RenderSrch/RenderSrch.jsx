import "./RenderSrch.scss";
function RenderSrch(props) {
	let searchInps = props.stateShearch.map((elms) => {
		return (
			<div className="flexdivProds">
				<img className="imgsprods" src={elms.image} />
				<div className="flexinfoProds">
					<p className="textinfoProds1">{elms.name}</p>
					<p className="textinfoProds2">{elms.company}</p>
					<p className="textinfoProds3">{elms.price}</p>
				</div>
			</div>
		);
	});

	return (
		<>
			<div>
				<input
					onChange={(e) => {
						console.log(props.stateShearch);
						props.dispatchShearch({
							type: "search",
							payload: {
								name: e.target.value,
							},
						});
					}}
					className="inputSearch"
					type="text"
				/>
				<div className="searchIcon">
					<i class="fa-solid fa-magnifying-glass"></i>
				</div>
			</div>

			<div className="productsItemSearch">{searchInps}</div>
		</>
	);
}

export default RenderSrch;
