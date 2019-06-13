import React, { Component, MouseEvent } from 'react';

// types
import { Props, State, defaultProps, initialState} from './types';

// styles
import './classComponent.scss';

// class components have their own state - and can control it within the component
class ClassComponent extends Component<Props, State> {
    static readonly defaultProps = defaultProps;
    readonly state = initialState;

    handleClick(e: MouseEvent<HTMLElement>): void {
        this.setState({isActive: !this.state.isActive});

        this.props.onClick();
    }

    render() {
        const { label } = this.props;
        return (
            <div onClick={e => this.handleClick(e)} className={`class-component-wrapper ${this.state.isActive && 'pressed'}`}>
                <label>{label}</label>
            </div>
        )
    }
}

export default ClassComponent;
