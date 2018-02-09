import React from 'react';
import './brand-logo.css';

class BrandLogoContainer extends React.Component {
    render() {
        return (
            <div className="brand-logo-container">
                <div className="brand-logo-image-container">
                    <img src={this.props.src} className="brand-image" />
                </div>
            </div>
        );
    }
}

export default BrandLogoContainer;