import React from 'react';

const CardComponent = (props) => {
    return (
        <div className="card px-4 pt-3 pb-3">
            <div className="card-header">
                <h3 className="display-3">Card Header</h3>
            </div>
            <div className="card-body">
                <p className="font-size-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet minus minima illum dolorum earum quis ipsum quia natus voluptatum tempora laudantium aliquid, deleniti quasi.</p>
            </div>
        </div>
    );
};

export default CardComponent;