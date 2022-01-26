import React from "react";
import { Papa } from "papaparse";
class CsvDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined,
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      csvfile: event.target.files[0],
    });
  };
  updateData(result) {
    var data = result.data;
    console.log(data);
  }
  importCSV = () => {
    const { csvfile } = this.state;

    Papa.parse(csvfile, {
      complete: function (results) {
        console.log("Finished:", results.data);
      },
    });
  };

  render() {
    console.log(this.state.csvfile);
    return (
      <div className="App">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={(input) => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <p />
        <button onClick={this.importCSV}> Upload now!</button>
      </div>
    );
  }
}

export default CsvDetail;
