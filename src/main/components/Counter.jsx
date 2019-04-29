import React from 'react';

import styled from 'styled-components';

const CounterMain = styled.div`
    border: 1px solid black;
    padding: 1rem;
    width: 19rem
`;

const CounterH1 = styled.h1`
    margin-top: 0;
    margin-bottom: 1rem;
`

class Counter extends React.Component {


    render() {

        const {value, color, onIncrement, onDecrement} = this.props;

        return (
            <React.Fragment>
                <CounterMain>
                    <CounterH1 style={{color}}>{value}</CounterH1>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                </CounterMain>
            </React.Fragment>
        );
    }

}

export default Counter;
