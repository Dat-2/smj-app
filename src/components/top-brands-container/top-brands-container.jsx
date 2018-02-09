import React from 'react';
import BrandLogo from '../brand-logo/brand-logo';
import './top-brands-container.css';

class TopBrandsContainer extends React.Component {
    render() {
        return (
            <div className="top-brands">
                <h1 className="title">{this.props.title}</h1>
                <BrandLogo src="./images/abxtopbrand.png"/>
                <BrandLogo src="./images/bhangtopbrand.png"/>
                <BrandLogo src="./images/cbdtopbrand.png"/>
                <BrandLogo src="./images/kivatopbrand.png"/>
                <BrandLogo src="./images/korovatopbrand.png"/>
                <BrandLogo src="./images/naturalcannabistopbrand.png"/>
            </div>
        );
    }
}

export default TopBrandsContainer;