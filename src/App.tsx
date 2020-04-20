import React, { Component } from "react";
import { Jafar } from "./app_input/jafar";
import ConvertToDate from "./ConvertToDate/ConvertToDate";


export class App extends Component {
	state = {
		value: {
			name: "",
			lastname: "",
			email: "",
		},
		time: 2587382541,
		//validate: false,
	};

	handlerInput(v: string) {
		this.setState({
			...this.state,
			value: v,
		});
	}
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
								//type="email"
								pattern="email"
								placeholder="a.hasani@gmail.com"
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
						<div className="col-md-3">
							<Jafar
								label="نام خانوادگی"
								value={this.state.value.lastname}
								isRequierd={true}
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
						<div className="col-md-3">
							<Jafar
								label="نام"
								pattern="number"
								value={this.state.value.name}
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<ConvertToDate 
					timestamp={this.state.time} />
				</div>
			</div>
		);
	}
}

// 					 </div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
