var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('./style');

var ServerDetails = React.createClass({
  getInitialState: function(){
    return {hovered: false}
  },
  style: function(){
    if(this.state.hovered){
      return {
      backgroundColor: '#FFFFFF', //"#9FA8DA",
      textAlign: 'left',
      padding: 10,
      paddingBottom: 1,
      cursor: 'pointer',
      color: '#333333',
      boxShadow: '0px 0px 15px black', 
      transition: 'all 200ms ease-in',
      transform: 'scale(1.2)',
      zIndex: 10,
      position: 'relative'}
    } else {
      return styles.serverDetails
    }
  },
  headerStyle: function(){
    if(this.state.hovered){
      return {
      backgroundColor: '#0C374D',//"#6573C4",
      fontSize: '150%', 
      color: '#FFFFFF', 
      margin:-11, 
      marginBottom: 5, 
      padding: 6,
      borderBottom: 'solid 1px black',
      }
    } else {
      return styles.serverHeader
    }
  },
  indicatorStyle: function(){
    if(this.props.info.Online){
      return {
        backgroundColor: '#22DD22', float: 'right', height: '30px', borderRadius: 5, border: 'none', marginTop: -1, width: '20px'}
      }
      else{
        return {
          backgroundColor: '#FF2222', float: 'right', height: '30px', borderRadius: 5, border: 'none', marginTop: -1, width: '20px'}
        }
  },
  onMouseOver: function(){
    this.setState({hovered:true});
  },
  onMouseOut: function(){
    this.setState({hovered:false});
  },
  onClick: function(){
    this.setState({hovered:false});
  },
  render: function(){
    return(
      <div>
        <div onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={this.style()}>
        <p style={this.headerStyle()}>{this.props.info.Name} <button style={this.indicatorStyle()}/></p>
        <p> Available: {this.props.info.Available} <span style={{float:'right'}}> Last Update:
        </span> </p>
        <p> Threshold: {this.props.info.Threshold} <span style={{color: '#666666', float:'right',}}> {this.props.info.LastUpdate} </span></p>
      </div>
    </div>
    )
  }
});

ServerDetails.propTypes = {
  info: PropTypes.shape({
  Name : PropTypes.string,
  Online : PropTypes.bool,
  Available: PropTypes.string,
  Threshold: PropTypes.string,
  LastUpdate: PropTypes.string
  })
}

module.exports = ServerDetails;