import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			questions:[
				{
					id: 1,
					text: 'What is your name ?',
					choices: [
						{
							id: 'a',
							text: 'Michael'
						},
						{
							id: 'b',
							text: 'Brad'
						},
						{
							id: 'c',
							text: 'Steven'
						}
					],
					correct: 'b'
				},
				
			]
		}
	}
	render(){
		return(
			<div>
				APP
			</div>
		)
	}
}

export default App