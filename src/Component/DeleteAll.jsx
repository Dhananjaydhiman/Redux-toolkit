import React from "react";
import { removeAll } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAll = () => {
	const dispatch = useDispatch();
	return (
		<>
			<button
				className="btn btn-danger"
				onClick={() => {
					dispatch(removeAll());
				}}
			>
				Delete All Users
			</button>
		</>
	);
};

export default DeleteAll;
