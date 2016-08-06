var React = require('react');
var ReactDOM = require('react-dom');
var ServerGenerator = require('./ServerGenerator');
var PropTypes = React.PropTypes;
var styles = require('./style');

var CurrentlyRunning = React.createClass({
	render: function(){
		return(
			<div className='col-md-12' style={styles.currentlyRunning}>
				<h3 style={styles.wellHeader}> <span style={{marginLeft:'2%'}}> Currently Running </span></h3>
				<hr style={styles.horizontal}/>
				<ServerGenerator serverList={this.props.serverList}/>
			</div>
		)
	}
});

CurrentlyRunning.PropTypes = {
	serverList: PropTypes.array.isRequired
}

module.exports = CurrentlyRunning;