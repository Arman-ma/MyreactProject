import RenderProduct from "./components/RenderProduct/RenderProduct";
import "./App.css";
import RenderBasket from "./components/RenderBasket/RenderBasket";
import { useReducer } from "react";
import { useState } from "react";
import RenderSrch from "./components/RenderSrch/RenderSrch";
let products = [
	{
		id: Math.ceil(Math.random() * 999999999),
		name: "GBM Helix Pro",
		price: 1400 + "$",
		characteristick: "i7-13700F, RTX4070 12GB, 32GB RAM, 1TB",
		company: "Mtech Computers",
		count: 0,
		image: "./images/comp1.png",
	},
	{
		id: Math.ceil(Math.random() * 999999999),
		name: "GBM Helix Blue Pro",
		price: 2000 + "$",
		characteristick: "Intel Core i7 13700KF, Nvidia",
		company: "Mtech Computers",
		count: 0,
		image: "./images/comp2.png",
	},
	{
		id: Math.ceil(Math.random() * 999999999),
		name: "GBM Iron by Saint HOV",
		price: 2900 + "$",
		characteristick: "Intel® Core™ i7-13700F, RTX 3060 Ti 8GB, 32GB",
		company: "Mtech Computers",
		count: 0,
		image: "./images/comp3.png",
	},
	{
		id: Math.ceil(Math.random() * 999999999),
		name: "GBM TT LCGS",
		price: 3200 + "$",
		characteristick: "Intel Core i5 13600KF, Nvidia",
		company: "Mtech Computers",
		count: 0,
		image: "./images/comp4.png",
	},

	{
		id: Math.ceil(Math.random() * 999999999),
		name: "GBM Helix RED",
		price: 1900 + "$",
		characteristick: "Ryzen 9 7900, RTX4070ti, 32GB",
		company: "Mtech Computers",
		count: 0,
		image: "./images/comp5.png",
	},
	{
		id: Math.ceil(Math.random() * 999999999),
		name: "GBM TUF B",
		price: 3700 + "$",
		characteristick: "Intel Core i7 13700KF, GeForce RTX 4080 16GB",
		company: "Mtech Computers",
		count: 0,
		image: "./images/comp6.png",
	},
];

function App() {
	const [state, dispatch] = useReducer(reducer, []);

	const [stateShearch, dispatchShearch] = useReducer(reducerSearch, []);

	function reducer(state, action) {
		console.log(action);
		if (action.type === "add") {
			let helper = false;
			state.forEach((item) => {
				if (item.id == action.payload.id) {
					helper = true;
				}
			});
			if (helper) {
				return state.map((elm) => {
					if (elm.id == action.payload.id) {
						return { ...elm, count: elm.count + 1 };
					}
					return elm;
				});
			} else {
				return [...state, action.payload];
			}
		} else if (action.type === "addcount") {
			return state.map((prod) => {
				if (action.payload.id == prod.id) {
					return action.payload;
				}

				return prod;
			});
		} else if (action.type === "deleteprod") {
			return state.filter((items) => {
				return action.payload.id !== items.id;
			});
		}
	}

	function reducerSearch(searchState, action) {
		if (action.type === "search") {
			if (action.payload.name == "") {
				return [];
			}
			return products.filter((item) => {
				return item.name.includes(action.payload.name);
			});
		}
	}
	return (
		<>
			<RenderBasket products={products} state={state} dispatch={dispatch} />
			<RenderSrch dispatchShearch={dispatchShearch} stateShearch={stateShearch} reducerSearch={reducerSearch} />
			<RenderProduct state={state} dispatch={dispatch} products={products} />
		</>
	);
}

export default App;
