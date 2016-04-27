import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component {
	constructor(props){				
		super(props);
		this.onChange = this.onChange.bind(this);
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
				{
					id: 2,
					text: 'What is your mothers name ?',
					choices: [
						{
							id: 'a',
							text: 'Sara'
						},
						{
							id: 'b',
							text: 'Sue'
						},
						{
							id: 'c',
							text: 'Donna'
						}
					],
					correct: 'c'
				},				
				{
					id: 3,
					text: 'What is your father name ?',
					choices: [
						{
							id: 'a',
							text: 'Bobby'
						},
						{
							id: 'b',
							text: 'Harry'
						},
						{
							id: 'c',
							text: 'Wayne'
						}
					],
					correct: 'a'
				},								
				{
					id: 4,
					text: 'What is your friend name ?',
					choices: [
						{
							id: 'a',
							text: 'John'
						},
						{
							id: 'b',
							text: 'Paul'
						},
						{
							id: 'c',
							text: 'Dan'
						}
					],
					correct: 'c'
				}				
			],
			score: 0,
			current: 1
		}		
	}
	render(){
		return(
			<div>
				<QuestionList {...this.state} />
			</div>
		)
	}
}

export default App