var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var Server = require('./Server');

var ServerGenerator = React.createClass({
	componentWillMount: function(){
		this.setState({key:Math.random()});
	},
	componentWillUpdate: function(){
		this.setState({key:Math.random()});
	},
	Generate: function(servers){
		return servers.map(function(s){
			return <Server serverInfo={s} key={s.Name} />
		})
	},
	render: function(){
		return(
			<div>
				{this.Generate(this.props.serverList)}
			</div>
		)
	}
});

ServerGenerator.PropTypes = {
	serverList:PropTypes.array.isRequired
}

module.exports = ServerGenerator;