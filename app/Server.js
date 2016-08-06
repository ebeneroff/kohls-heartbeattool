var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var ServerDetails = require('./ServerDetails');
var styles = require('./style');
var Modal = require('react-modal');
var ModalTable = require('./modalTable');

var Server = React.createClass({
	getInitialState: function() {
    	return { modalIsOpen: false };
    },
	openModal: function() {
	    this.setState({modalIsOpen: true});
	},
	closeModal: function() {
    	this.setState({modalIsOpen: false});
  	},
	render: function() {
		return(	
			<div onClick={this.openModal} className='col-sm-3' style={styles.server}>
			<ServerDetails info={this.props.serverInfo}/>
			
        	<Modal
        	className="Modal__Bootstrap modal-backdrop"
          	isOpen={this.state.modalIsOpen}
          	onRequestClose={this.closeModal}
          	closeTimeoutMS={500}
          	overlayClassName="OverlayClass">
	          	<div className="modal-content" style={{backgroundColor:'#FFFFFF', borderRadius: 0, border: 'none'}}>
	      			<div className="modal-header" style={{backgroundColor:'#0C374D'}}>
	          			<button type="button" className="close" onClick={this.closeModal}>
	                		<span aria-hidden="true">&times;</span>
	                		<span className="sr-only">Close</span>
	             		</button>
		          		<span style={styles.modalHeader}>Server information for {this.props.serverInfo.Name}</span>
	      			</div>	
	          		<div className="modal-body">
		          		<ModalTable />
	          		</div>
	          	</div>       	  
    		</Modal>  	
		</div>
		)
	}
});

Server.PropTypes = {
	serverInfo:PropTypes.array.isRequired,
}

module.exports = Server;