import React from 'react';
import './SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SideNav extends React.Component {
 selectView(view) {
   this.props.selectView(view);
 }
  render() {
    return (
      <div  className="sidenav">
        <img alt="" width="100" src="https://image.flaticon.com/icons/png/512/343/343406.png" />
        <div className="sidenav-header">
          <a onClick={this.selectView.bind(this,'portfolios')} href="#">Portfolios</a>
          <a onClick={this.selectView.bind(this,'addNew')} href="#">Add Portfolio</a>
          <a onClick={this.selectView.bind(this,'about')} href="#">About Me</a>
        </div>
        <div className="sidenav-footer">
          <a id="facebook" target="_blank" href="https://www.facebook.com"><FontAwesomeIcon icon={['fab', 'facebook']}/></a>
          <a id="twitter" target="_blank" href="https://www.twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
          <a id="instagram" target="_blank" href="https://www.instagram.com" ><FontAwesomeIcon icon={['fab', 'instagram']}/></a>
        </div>
      </div>
    );
  }
}


