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

  clearSearchValue = () =>
    this.setState({
      results: [],
      searchTerm: '',
    });

  pickAddress = address =>
    this.setState({
      chosenAddress: address,
      results: [],
      searchTerm: '',
    });

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value,
    });

    if (e.target.value === "error") {
      return this.setState({
        results: [],
        error: true,
      });
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
    });
  };

  render() {
    const { chosenAddress, results, error, searchTerm } = this.state;
    return (
      <div>
        <label htmlFor="search">Address finder:</label>
        <div className="input_box">
          <input
            id="search"
            name="search"
            className="input"
            value={searchTerm}
            onChange={this.handleChange}
          />
          {searchTerm.length !== 0 && (
            <button
              className="clear_button"
              onClick={() => this.clearSearchValue()}
            >
              <img src="clear.svg" alt="Clear address finder" />
            </button>
          )}
        </div>
        {error && <div className="error">Something is wrong!</div>}
        {results.length > 0 && (
          <ul className="results" aria-live="polite">
            {results.map(result => (
              <li key={result}>
                <button
                  onClick={() => this.pickAddress(result)}
                  className="a_result"
                >
                  {result}
                </button>
              </li>
            ))}
          </ul>
        )}
        {chosenAddress && <p className="chosen_address">{chosenAddress}</p>}
      </div>
    );
  }
}

ReactDOM.render(<AddressFinder />, document.getElementById("root"));
