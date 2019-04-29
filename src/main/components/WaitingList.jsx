import React from 'react';

import styled from 'styled-components';

const WaitingListMain = styled.div`
    margin-top: 1rem;
    border: 1px solid black;
    width: 19rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

const WaitingListH2 = styled.h2`
    margin-top: 0;
    margin-bottom: 1rem;
`;

const WaitingListForm = styled.form`
    display: flex;
`;

const WaitingListInput = styled.input`
    flex: 1;
    font-size: 1.25rem;
`;

const WaitingListButton = styled.div`
    font-size: 1.25rem;
    padding: 0.5rem;
`;

const WaitingListUl = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
`;

const WaitingListUlLi = styled.li`
    display: flex;
    padding: 0.5rem;
    border: 1px solid black;
    
    &+& {
        border-top: none;
    }
`;

const WaitingListUlLiText = styled.div`
    flex: 1;
    &.entered {
        text-decoration: line-through;
        color: gray;
    }
`;


const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
    return (
        <WaitingListUlLi>
            <WaitingListUlLiText className={`${entered ? 'entered' : ''}`}>{text}</WaitingListUlLiText>
            <WaitingListButton className="buttons">
                <button onClick={onEnter}>입장</button>
                <button onClick={onLeave}>나감</button>
            </WaitingListButton>
        </WaitingListUlLi>
    );
};

class WaitingList extends React.Component {


    render() {

        const {waitingList, onEnter, onLeave, input, onChange, onSubmit} = this.props;

        const WaitingItems = waitingList.map(w => (
            <WaitingItem
                key={w.id}
                text={w.name}
                entered={w.entered}
                id={w.id}
                onEnter={() => onEnter(w.id)}
                onLeave={() => onLeave(w.id)}
            />
        ));

        return (
            <React.Fragment>
                <WaitingListMain>
                    <WaitingListH2>대기자 명단</WaitingListH2>
                    <WaitingListForm onSubmit={onSubmit}>
                        <WaitingListInput value={input} onChange={onChange}/>
                        <button>등록</button>
                    </WaitingListForm>
                    <WaitingListUl>
                        {WaitingItems}
                    </WaitingListUl>
                </WaitingListMain>
            </React.Fragment>
        );
    }

}

export default WaitingList;