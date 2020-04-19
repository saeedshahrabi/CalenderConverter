import React, { Component } from "react";
import NpmInput from "../npm_inpt/NpmInput";
import { AppInputRegex } from "./regex";
//import { IValue } from "./model";
interface IProps {
	//value:IValue
	value:string;
	type?:string
	Pattern?: string;
	label: string;
	isRequierd?: boolean;
	placeholder?: string;
	onChange: (value: string) => void;
	pattern?: string;
}
interface IState {
	isValid?: boolean;
	isTuch: boolean;
}
export class Jafar extends Component<IProps, IState> {
	inputRef: any;
	inputId = Math.random() + "";
	constructor(props: IProps) {
		super(props);
		this.inputRef = React.createRef();
		this.state = {
			isValid: false,
			isTuch: false,
		};
	}


	// 	/**
	// this function call on 2 condition
	// 1.if field requierd
	// 2.user touch input and leave it without any action
	// 3.inputError show text az an error
	// */

	inputError=(isRequierd: boolean, isvalid: boolean, isTuch: boolean)=> {
		if (isRequierd === true) {
			console.log(this.props);
			if (isvalid === false && isTuch === true) {
				return <span className="text-danger"> فیلد ضروری است</span>;
			}
			if (isvalid === true && isTuch === true) {
				return;
			}
			if (isvalid === false && isTuch === false) {
				return;
			}
		} else {
			return;
		}
	}

	/**  
whith this function:
1.we can act for isReguier props.for isRequier=true show star
*/
	starIsRequierd=(isRequierd: boolean)=> {
		if (this.props.isRequierd === true) {
			return <span className="text-danger">*</span>;
		} else {
			return;
		}
	}

	/**
	1.we can get input value 
	2.setState isValis && isTuch
	*/

	handlerInpur = (value: string) => {
		console.log(value, 123456);
	
		this.props.onChange(value);
		if (value !== "") {
			this.setState({
				isValid: true,
				isTuch: true,
			});
		} else {
			this.setState({
				isValid: false,
				isTuch: true,
			});
		}
	};

	componentDidMount() {

		 debugger;
		 
		// const el = document.getElementById(this.inputId);
		// const e1 = el?.querySelector("inputId");
		// (e1||{onblur: null}).onblur=()=>{this.setState({
		// 	...this.state,
		// 	isTuch: true,
		// 	});
		// 	console.log(this.state.isTuch)
		// };




		// 		 const el = document.getElementById(this.inputId)
		// 		const e=el?.addEventListener('blur',  inputTuch =()=> {
		// 			change to
		// ()=>{
		// 		 	this.setState({
		// 					...this.state,
		// 					isTuch: true,
		// 					});
		// 				}}
		// 		// this.inputRef.current.onblur = () => {
		// 		// 	debugger;
		// 		// };
		// 		// setTimeout(() => {
		// 		// 	debugger;
		// 		// 	const gholi = this.inputRef.current.props.onblur();
		// 		// }, 2000);
	}
	setEmailPattern=(pattern:string,value: string) =>{
		this.props.onChange(value)
		if ( this.props.Pattern==="email") {
			if (AppInputRegex.email.test(value)) {
				return true;
			} else {
				alert("You have entered an invalid email address!")
				return false;
			}
		}
	}




	inputEmailValidated=(pattern:string,value: string) =>{
		debugger
		console.log(value)
		this.props.onChange(value);
	debugger;
	if (this.setEmailPattern(pattern,value)===true ) {
		debugger
		console.log(value+"890-")
		return "";
	} else {
		debugger
		return "ایمیل را همانند نمونه وارد کنید";
	}
}
	
	
	
	render() {
		return (
			<div className="form-group" id={this.inputId}>
				<div>
					<label>
						{this.props.label}
						{this.starIsRequierd(this.props.isRequierd!)}
						{/* aya be in shekl neveshtam doroste.ya dar props undefine ham tarif konam */}
					</label>
				</div>
				<NpmInput
					value={this.props.value}
					onChange={(e: string) => {
						this.handlerInpur(e);
					}}
					ref={this.inputRef}
				/>
				{/* <div> {this.inputEmailValidated(this.props.pattern!,this.props.value)}</div> */}
				<div>
					{this.inputError(
						this.props.isRequierd!,
						this.state.isValid!,
						this.state.isTuch
					)}
				</div>
			</div>
		);
	}
}

