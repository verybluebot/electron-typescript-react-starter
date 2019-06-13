import React from 'react';

// types
import { Props, defaultProps } from './types';

// styles
import './functionalComponent.scss';

// Functional Component have only props that can be passed from the parent component
const FunctionalComponent = (props: Props) => {
    return (
        <div className="functional-component-wrapper">
            <p>Hello {props.name} {props.age}</p>
        </div>
    )
};

FunctionalComponent.defaultProps = defaultProps;

export default FunctionalComponent;
