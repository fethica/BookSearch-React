var Header = React.createClass({

  handleSubmit : function (e) {
    e.preventDefault();
    var input = React.findDOMNode(this.refs.search);

    this.props.localSubmit(input.value);

    input.value = '';

  },

  render : function () {

    return (

      <header className="codrops-header">
				<h1>Book Search using React</h1>

				<div>
					<form className="form-inline" style={{marginTop: 30 + 'px'}} onSubmit={this.handleSubmit}>
            <div className="form-group">
						        <input className="form-control" placeholder="Book Title ..." ref="search"/>
						              <button className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
            </div>
					</form>
				</div>

			</header>

    );
  }
});

var Main = React.createClass({

  getInitialState : function () {
    return ({});
  },

  localSubmit : function (search) {

    this.setState({});
    var component = this;

  },

  componentDidMount : function () {
  },

  render : function () {

    return (
      <div>
      <Header localSubmit={this.localSubmit}/>
        <div className="main">
  				<div id="bookshelf" className="bookshelf">

          </div>
        </div>
      </div>
    );

  }

});

React.render(<Main />, document.getElementById("scroll-wrap"));
