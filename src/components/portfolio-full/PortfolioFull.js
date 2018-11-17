import React from 'react';
import {Image,Thumbnail} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditPortfolio from '../edit/EditPortfolio';
import './PortfolioFull.css'

export default class PortfolioFull extends React.Component {
  delete(id) {
    this.props.delete(id);
  }
  editView(portfolio) {
    this.props.editView(portfolio);
  }
  selectView(view) {
    this.props.selectView(view);
  }
  render() {
    return (
      <div className="Portfolio">
      <Thumbnail >
        <Image  src={this.props.portfolio.image} thumbnail responsive/>
        <hr />
        <a className="btn btn-lg btn-info close-btn" onClick={this.selectView.bind(this,"portfolios")}>X</a>
        <h3>{this.props.portfolio.title}</h3>
        <hr />
        <p>{this.props.portfolio.description}</p>
        <div className="protofolio-full-buttons">
          <a className="btn btn-xs btn-danger" onClick={this.delete.bind(this,this.props.portfolio.id)}>Delete</a>
          <a className="btn btn-xs btn-warning" onClick={this.editView.bind(this,this.props.portfolio)}>Edit</a>
        </div>
      </Thumbnail>
      </div>
    );
  }
}


