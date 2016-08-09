var React = require('react');
var ReactDOM = require('react-dom');
var AttentionRequired = require('./AttentionRequired');
var CurrrentlyRunning = require('./CurrentlyRunning');
var PropTypes = React.PropTypes;
var styles = require('./style');
var serverArray;
var onlineServers = [];
var offlineServers = [];

function ServiceCheck(){
	$(function(){
		$.ajax({
			url:"http://localhost:3000/api/servers",
			type: "get",
			dataType: "json",
		}).done(function(json){
			serverArray = json.servers;
			console.log(serverArray);
			for (var i = serverArray.length - 1; i >= 0; i--) {
				if (serverArray[i].Online === true)
				{
					onlineServers.push(serverArray[i]);
				}
				else
				{
					offlineServers.push(serverArray[i]);
				}
			}
			ReactDOM.render(
				<Main offlineServers={offlineServers} onlineServers={onlineServers}/>,
				document.getElementById('app')
			);
		})
	})
}

$(document).ready(function(){
		ServiceCheck();
		//setInterval(ServiceCheck, 10000);
	});	

var Main = React.createClass({
	render: function(){
		return(
			<div style={styles.main}>
				<nav className="navbar navbar-default" style={styles.navbar}>
					<div className="container-fluid">
	    				<div className="navbar-header">
	    					<h2 style={{color: '#FFFFFF', marginTop: 10}}> Heart Beat Health Check </h2>
					    </div>
					</div>
				</nav>
				<AttentionRequired serverList={this.props.offlineServers}> </AttentionRequired>
				<CurrrentlyRunning serverList={this.props.onlineServers}> </CurrrentlyRunning>
			</div>
		)
	}
});

Main.PropTypes = {
	offlineServers: PropTypes.array.isRequired,
	onlineServers: PropTypes.array.isRequired
}

