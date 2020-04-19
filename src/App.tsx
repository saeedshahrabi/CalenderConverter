import React, { Component } from "react";
import { Jafar } from "./app_input/jafar";

export class App extends Component {
	state = {
		// value:""
		value: {
			name: "",
			lastname: "",
			email: "",
		},
		validate: false,
	};
	//validate: false,

	render() {
		return (
			<div className="container">
				<div className="container shadow">
					<div className="row">
					<div className="col-md-3">
							<Jafar
								label="ایمیل"
								value={this.state.value.email}
								isRequierd={true}
								//	 pattern={AppInputRegex.email}
								//type="email"
								pattern="email"
								placeholder="a.hasani@gmail.com"
								onChange={(v: string) => {
									this.setState({
										...this.state,
										value: v,
									});
								}}
								

							/>
						</div>
						<div className="col-md-3">
							<Jafar
								label="نام خانوادگی"
								value={this.state.value.lastname}
								isRequierd={true}
								onChange={(v: string) => {
									this.setState({
										...this.state,
										value: v,
									});
								}}
							/>
						</div>
						<div className="col-md-3">
							<Jafar
								label="نام"
								pattern="number"
								value={this.state.value.name}
								onChange={(v: string) => {
									console.log(v);
									this.setState({
										...this.state,
										value: v,
									});

									console.log(v);
								}}
							/>
						</div>
					
					</div>
				</div>
			</div>
		);
	}
}

//
//
//
//
// 						 <ConvertToDate
// 						 value={this.state.value}
/* 
we have to convert timestamp to string
*/
// 						 />
// 					 </div> */}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
