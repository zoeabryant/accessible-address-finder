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
              <img src="clear.svg" />
            </button>
          )}
        </div>
        {error && <div className="error">Something is wrong!</div>}
        {results.length > 0 && (
          <ul className="results">
            {results.map(result => (
              <li key={result}>
                <a
                  href=""
                  onClick={() => this.pickAddress(result)}
                  className="a_result"
                >
                  {result}
                </a>
              </li>
            ))}
          </ul>
        )}
        {chosenAddress && <address className="chosen_address">{chosenAddress}</address>}
      </div>
    );
  }
}

ReactDOM.render(<AddressFinder />, document.getElementById("root"));
