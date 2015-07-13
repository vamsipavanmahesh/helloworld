var world = require('./world');

var Hello = React.createClass({
  render:function(){
    return (<div>
        <div>Hello,</div>
        <world/>
      </div>)

  }

})

var element = React.createElement(Hello);

React.render(element,document.body);
