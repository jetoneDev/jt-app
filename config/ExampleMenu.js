import React, { PropTypes } from 'react';
const ExampleMenu = props => {
    return (
        <div>
            <ul>
                <li><a href="#/componentExample">textarea</a></li>
                <li><a href="#/componentExample">Input</a></li>
                <li><a href="#/formViewExample">formView</a></li>
            </ul>
            components Menu Router
            {props.children}
        </div>

    );
};

ExampleMenu.propTypes = {

};

export default ExampleMenu;