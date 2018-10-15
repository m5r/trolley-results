import React, { Component } from 'react';
import './App.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class App extends Component {
	state = {
		data: [
			{ name: 'One', one: 0 },
			{ name: 'Five', five: 0 },
		],
	};

	componentWillMount() {
		setInterval(
			() => this.fetchData(),
			5000,
		);
	}

	async fetchData() {
		const results = await (await fetch('https://analytics.mokhtarmial.com/results')).json();
		const data = [
			{ name: 'One', one: results.one },
			{ name: 'Five', five: results.five },
		];
		this.setState({ data });
	}

  render() {
		const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
	        <p>Results</p>
	        <BarChart width={400} height={300} data={data}>
		        <CartesianGrid strokeDasharray="3 3"/>
		        <XAxis dataKey="name"/>
		        <YAxis/>
		        <Tooltip/>
		        <Bar dataKey="one" fill="#8884d8" />
		        <Bar dataKey="five" fill="#82ca9d" />
	        </BarChart>
        </header>
      </div>
    );
  }
}

export default App;
