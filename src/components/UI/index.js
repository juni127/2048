import React from 'react';
import { atom, useRecoilState } from 'recoil';
import IconButton from './IconButton';
import ScoreDisplay from './ScoreDisplay';

const UI = ({ }) => {

    const score = atom({
        key: 'score',
        default: 0
    });

    const high_score = atom({
        key: 'high_score',
        default: 0
    });

    const tabuleiro = atom({
        key: 'tabuleiro',
        default: Array(16)
    });

    const tabuleiro_old = atom({
        key: 'tabuleiro_old',
        default: Array(16)
    })

    const [, setScore] = useRecoilState(score);
    const [, setHighScore] = useRecoilState(high_score);
    const [, setTabuleiro] = useRecoilState(tabuleiro);
    const [tabuleiroOld, setTabuleiroOld] = useRecoilState(tabuleiro_old);

    return (
        <div>
            <h1>2048</h1>
            <ScoreDisplay title="Score" atom={score} />
            <ScoreDisplay title="High Score" atom={high_score} />
            <IconButton icon="" onClick={() => {
                setTabuleiro(tabuleiroOld);
                // reset score to last state
            }} />
            <IconButton icon="" onClick={() => {
                setScore(0);
                // Randomizar duas peças
                setTabuleiro(Array(16));
                setTabuleiroOld(Array(16));
            }}/>
        </div>
    );
}

export default UI;