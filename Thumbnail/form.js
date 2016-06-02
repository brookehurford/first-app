var Badge = React.createClass({
  render: function() {
    return <button>
      {this.props.title} - {this.props.number}
    </button>
  }
});

// This will make it so any instance of class, will use an instance of Badge. The class creates the "cookie", it does not render it to the HTML. That is what the createElement below is for.
var Form = React.createClass({
 render: function(){
  return <div>
    <Badge title={this.props.title} number={this.props.number}/>
  </div>
 }
});

// Create the Form

var options = {
  title: "Inbox",
  number: 5
}
React.createElement(Form, options);
