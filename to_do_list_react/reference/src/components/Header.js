import React from 'react';
import styled from 'styled-components';

const HeaderA = styled.div`
    background-color: rgb(153, 204, 255);
    padding: 10px;
    border-bottom: 1px solid black;
    p:nth-of-type(2) {
        font-size: 16px;
    }
    p, h1 {
        margin: 0 10px;
        font-size: 20px;
    }
    
`;

export default function Header({ todos }) {
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDate = today.getDate();
    const week = ['일','월', '화', '수', '목', '금', '토'];
    let dayWeek = week[today.getDay()];

    const workEx = todos.filter(todo => !todo.checked);

    return (
        <>
            <HeaderA className="header">
                <p>{todayYear + '년' + todayMonth + '월' + todayDate + '일'}</p>
                <p>{dayWeek + '요일'}</p><br />
                <h1>할 일 - {workEx.length}개</h1>
            </HeaderA>
        </>
    );
}