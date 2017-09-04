
class AddressFinder extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenAddress: '',
      error: false,
      results: [],
      searchTerm: '',
    };
  }

  pickAddress = (address) => this.setState({
    chosenAddress: address,
    results: [],
    searchTerm: '',
  });

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });

    if(e.target.value === 'error') {
      return this.setState({
        results: [],
        error: true,
      })
    }
    return this.setState({
      results: [
        '123 avenue',
        'blah',
        'blah',
        'blah',
        'blah',
        'blah',
        'blah',
        'blah',
      ],
      error: false,
    })
  };

  render() {
    return (
      <div>
        <div>Address finder:</div>
        <input
          className="input"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        {
          this.state.error &&
            <div className="error">Something is wrong!</div>
        }
        {
          this.state.results.length > 0 &&
            <div className="results">
              {this.state.results.map(result =>
                <div
                  onClick={() => this.pickAddress(result)}
                  className="a_result"
                >
                  {result}
                </div>
              )}
            </div>
        }
        {
          this.state.chosenAddress &&
            <div className="chosen_address">
              {this.state.chosenAddress}
            </div>
        }
      </div>
    )
  }
}

ReactDOM.render(
  <AddressFinder />,
  document.getElementById('root')
);
