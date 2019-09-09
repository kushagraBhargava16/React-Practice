//Custom element
import React, { Component } from 'react';
import styles from './Person.module.css'
import altWithClass from '../../../hoc/altWithClass'
import Aux from '../../../hoc/Auxillary'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputEleRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
        this.inputEleRef.current.focus();
        console.log('AuthContext', this.context);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux >
                {this.context.authenticated === true ? <p>Logged In</p> : <p>Please Login</p>}
                <p onClick={this.props.click}>Hi, I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref={(inputEle) => { this.inputElement = inputEle }}
                    ref={this.inputEleRef}
                />
                {/* children is a default property which gives us access to the nested tags inside our custom tag */}
            </Aux>
        );
    }
}


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default altWithClass(Person, styles.Person);