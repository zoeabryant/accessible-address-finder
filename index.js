
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

  clearSearchValue = () => this.setState({
    results: [],
    searchTerm: '',
  });

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
        '1 Bletchley Park',
        '5 Batey Avenue',
        '7 Rock Road',
        '24 Murray Street',
        '30 Briggs Lane',
      ],
      error: false,
    })
  };

  render() {
    const {
      chosenAddress,
      results,
      error,
      searchTerm,
    } = this.state;
    return (
      <div>
        <div>Address finder:</div>
        <div className="input_box">
          <input
            className="input"
            value={searchTerm}
            onChange={this.handleChange}
          />
          {
            searchTerm.length !== 0 &&
              <div className="clear_button" onClick={() => this.clearSearchValue()}>
                <img src="clear.svg" />
              </div>
          }
        </div>
        {
          error &&
            <div className="error">Something is wrong!</div>
        }
        {
          results.length > 0 &&
            <div className="results">
              {results.map(result =>
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
          chosenAddress &&
            <div className="chosen_address">
              {chosenAddress}
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
