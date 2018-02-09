import React from 'react';
import BrandLogo from '../brand-logo/brand-logo';
import './top-brands-container.css';

class TopBrandsContainer extends React.Component {
    render() {
        return (
            <div className="top-brands">
                <h1 className="title">{this.props.title}</h1>
                <BrandLogo src="https://shopmarijuana.com/wp-content/uploads/2017/02/nccbanneradsmj.jpg"/>
                <BrandLogo src="https://shopmarijuana.com/wp-content/uploads/2017/02/nccbanneradsmj.jpg"/>
                <BrandLogo src="https://shopmarijuana.com/wp-content/uploads/2017/02/nccbanneradsmj.jpg"/>
                <BrandLogo src="https://shopmarijuana.com/wp-content/uploads/2017/02/kivabanner.jpg"/>
                <BrandLogo src="https://shopmarijuana.com/wp-content/uploads/2017/02/kivabanner.jpg"/>
                <BrandLogo src="https://shopmarijuana.com/wp-content/uploads/2017/02/kivabanner.jpg"/>
            </div>
        );
    }
}

export default TopBrandsContainer;