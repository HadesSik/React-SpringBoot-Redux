import React from 'react';

import styled from 'styled-components';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const PaletteMain = styled.div`
    background: black;
    color: white;
    padding: 1rem;
    display: inline-flex;
    flex-direction: column;
`;

const PaletteH2 = styled.h2`
    margin-top: 0;
    margin-bottom: 1rem;
`;

const PaletteColors = styled.div`
    display: flex;
`;

const PaletteItemMain = styled.div`
    border-radius: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    border: 2px solid white;
    opacity: 0.7;
    
    &:hover {
        opacity: 0.9;
    }
    
    &.active {
        opacity: 1;
    }
    
    & + & {
        margin-left: 0.56rem;
    }
`;

const PaletteItem = ({ color, active, onClick }) => {
    console.log(active);
    return (
        <PaletteItemMain
            className={`${active ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={onClick}
        />
    );
};

class Palette extends React.Component {


    render() {

        const {selected, onSelect} = this.props;

        return (
            <React.Fragment>
                <PaletteMain>
                    <PaletteH2>색깔을 골라골라</PaletteH2>
                    <PaletteColors>
                        {colors.map(color => (
                            <PaletteItem color={color} key={color} onClick={() => onSelect(color)} active={selected === color} />
                        ))}
                    </PaletteColors>
                </PaletteMain>
            </React.Fragment>
        );
    }

}

export default Palette;
