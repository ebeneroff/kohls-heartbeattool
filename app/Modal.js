var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Modal = React.createClass({
    render: function() {
        if(this.props.isOpen){
            return (
              <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
                <div className="modal">
                  {this.props.children}
                </div>
              </ReactCSSTransitionGroup>
            );
        } else {
            return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
        }
    }
});

module.exports = Modal;