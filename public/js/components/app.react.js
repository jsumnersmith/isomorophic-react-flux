var React = require('react');

var App = React.createClass({

  render() {
  	return (
      <div className="bp-app bp-grid">
        <div className="bp-col-12">
          <p>My { this.props.title ? this.props.title : "Reactive"} App</p>
        </div>
      </div>
  	);
  }
});

module.exports = App;
