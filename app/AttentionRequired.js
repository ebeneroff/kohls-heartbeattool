var React = require('react');
var ReactDOM = require('react-dom');
var ServerGenerator = require('./ServerGenerator');
var PropTypes = React.PropTypes; 
var styles = require('./style');

var AttentionRequired = React.createClass({
	render: function(){
		return(
			<div className='col-md-12' style={styles.attentionRequired} >
				<h3 style={styles.wellHeader}> <span style={{marginLeft: '2%'}}> Attention Required </span> </h3>
				<hr style={styles.horizontal}/>
				<ServerGenerator serverList={this.props.serverList} />
			</div>
		)
	}
});

AttentionRequired.PropTypes = {
	serverList: PropTypes.array.isRequired
}

module.exports = AttentionRequired;