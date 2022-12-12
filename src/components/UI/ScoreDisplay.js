import React from 'react';
import { useRecoilState } from 'recoil';

const ScoreDisplay = ({ title, atom }) => {

    const [score, setScore] = useRecoilState(atom);

    return (
        <div>
            <h3>{title}</h3>
            <h5>{score}</h5>
        </div>
    );
}

export default ScoreDisplay;