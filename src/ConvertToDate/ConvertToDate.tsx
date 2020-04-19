import React, { Component } from "react";
import 'moment/locale/fa';
// import 'moment/locale/ar';
import moment from "moment-jalaali";
// interface IProps {
// 	timestamp: number;
// }
/** 
 * value dar App string tarif shode ast va bayad
 *  noe an ra taghir be numbet daham ta be onvane props estefade konam.pas baresi bishtar
 */
export default class ConvertToDate extends Component {
	state = {
		timestamp: 87991199,
	};

	getTimestampToDatejalaali = (timestamp: number) => {
		//moment.loadPersian({dialect: 'persian-modern',usePersianDigits: true})
		moment.loadPersian({ usePersianDigits: true });
		return moment(timestamp * 1000).format("jYYYY/jM/jD");
		return moment(timestamp * 1000)
			.locale("fa")
			.format("jYYYY/jMMM/jD"); //13/مهر/1350
	};

	getTimestampToDateGregorian = (timestamp: number) => {
		return moment(timestamp * 1000).format("YYYY/MM/DD");
	};
	getYearjalaali = (timestamp: number) => {
		return moment(timestamp * 1000).format("jYYYY");}
		

	getYearGregorian = (timestamp: number) => {
		return moment(timestamp * 1000).format("YYYY");};

	getMonthjalaali = (timestamp: number) => {
		moment.loadPersian({ usePersianDigits: true });
		return moment(timestamp * 1000)
			.locale("fa")
			.format("jMMM")
	
	};

	getMonthGregorian = (timestamp: number) => {
	return	moment(timestamp * 1000)
			.format("MMM")
	};
/* 

*/
	getDayjalaali(timestamp: number) {
		const days = [
			"یکشنبه",
			"دوشنبه",
			"سه شنبه",
			"چهارشنبه",
			"Tپنج شنبه",
			"جمعه",
			"شنبه",
		];
		let m = (new Date(timestamp * 1000));
		let x =  m.getDay();
		return days[x];
		// return moment(timestamp * 1000)
		// .locale("fa")
		// .format("jD")
	}
	getDayGregorian(timestamp: number) {
		 const days = 
		//  [
		// 	"Sunday",
		// 	"Monday",
		// 	"Tuesday",
		// 	"Wednesday",
		// 	"Thursday",
		// 	"Friday",
		// 	"Saturday",
		// ];
		[
			"یکشنبه",
			"دوشنبه",
			"سه شنبه",
			"چهارشنبه",
			"Tپنج شنبه",
			"جمعه",
			"شنبه",
		]
		let m = new Date(timestamp * 1000);
		console.log(m, 76543);
		let x = m.getDay();
		return days[x];
	}

	render() {
		return (
			<div className="container">
				<div>
					<div>
						شمسی:
						{this.getTimestampToDatejalaali(this.state.timestamp)}
					</div>
					<div>
						میلادی:
						{this.getTimestampToDateGregorian(this.state.timestamp)}
					</div>
				</div>

				<h3>شمسی</h3>
				<br />
				<br />

				<div>سال شمسی:{this.getYearjalaali(this.state.timestamp)}</div>

				<div>ماه شمسی:{this.getMonthjalaali(this.state.timestamp)}</div>
				<div>روز شمسی:{this.getDayjalaali(this.state.timestamp)}</div>
				<br />
				<br />
				<br />
				<h3>میلادی</h3>
				<br />
				<br />
				<div>سال:{this.getYearGregorian(this.state.timestamp)}</div>

				<div>ماه:{this.getMonthGregorian(this.state.timestamp)}</div>
				<div>روز:{this.getDayGregorian(this.state.timestamp)}</div>
			</div>
		);
	}
}

/* 
 var d=get date(timestamp*1000)
 const day=["satarday",sundaaaya]

*/
