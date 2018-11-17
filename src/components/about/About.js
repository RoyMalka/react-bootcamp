import React from 'react';
import {Image,Thumbnail} from "react-bootstrap";

export default class About extends React.Component {
    selectView(view) {
        this.props.selectView(view);
    }
  render() {
    return (
        <div className="Portfolio">
      <Thumbnail >
        <Image  src="https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/20228430_10213712445263928_1430993492005721512_n.jpg?_nc_cat=100&_nc_ht=scontent.fsdv2-1.fna&oh=89d3be791d4610643bec6349924b6acc&oe=5C716AEA" thumbnail responsive/>
        <hr />
        <a className="btn btn-lg btn-info close-btn" onClick={this.selectView.bind(this,"portfolios")}>X</a>
        <h3>Roy Malka</h3>
        <hr />
        <p>Hey my name is Roy and I'm pretty new in the web business so go easy one me please :]</p>
      </Thumbnail>
      </div>
    );
  }
}


