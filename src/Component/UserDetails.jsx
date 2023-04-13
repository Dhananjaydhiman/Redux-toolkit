import React from "react";
import DeleteAll from "./DeleteAll";
import fakeUserData from "../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, removeAll } from "../Store/Slices/UserSlice";

const UserDetails = () => {
	const dispatch = useDispatch();

	const addNewUser = (data) => {
		console.log(data);
		dispatch(addUser(data));
	};

	// const removeN

	const data = useSelector((state) => state.users);
	console.log(data);

	return (
		<>
			<div>
				<div className="d-flex justify-content-between">
					<h2>List of Users Details</h2>
					<div>
						<button
							className="btn btn-primary"
							onClick={() => {
								addNewUser(fakeUserData());
							}}
						>
							Add Users
						</button>
						{/* <button className="btn btn-danger"><DeleteAll /></button> */}
						<DeleteAll />
					</div>
				</div>
				<div>
					<div className="d-flex justify-content-between m-2">
						<h4>Index</h4>
						<h4 className="pe-5">Name</h4>
						<h4>Action</h4>
					</div>
					{data?.map((item, index) => {
						return (
							<div className="d-flex justify-content-between m-2" key={index}>
								<p className="ps-3">{index}</p>
								<p>{item}</p>
								<button
									className="btn btn-danger"
									onClick={() => {
										dispatch(removeUser(index));
									}}
								>
									Delete
								</button>
							</div>
						);
					})}
				</div>
				<hr />
				{/* <DeleteAll /> */}
			</div>
		</>
	);
};

export default UserDetails;
