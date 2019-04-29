import React, { Component } from 'react';

import styled from 'styled-components';

import PaletteContainer from '../containers/PaletteContainer.jsx'; // **** (1) 불러오기
import CounterContainer from '../containers/CounterContainer.jsx'; // **** (1) 불러오기
import WaitingListContainer from '../containers/WaitingListContainer.jsx'; // **** 불러오기

const AppMain = styled.div`
    padding: 1rem;
`

class App extends Component {
    render() {
        return (
            <AppMain>
                <PaletteContainer /> {/* **** (2) 대체하기 */}
                <CounterContainer />
                <WaitingListContainer />
            </AppMain>
        );
    }
}

export default App;
