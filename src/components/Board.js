import { calculateWinner } from "../utils/Utilities";
import { Table } from 'semantic-ui-react';

export default function Board({ boardSideSize, xIsNext, onPlay, isRestarted, boardSquares }) {    
    function handleClick(i) {
        if (calculateWinner(boardSquares, boardSideSize) || boardSquares[i]) {
            return;
        }
        const nextSquares = boardSquares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        onPlay(nextSquares)
    }

    const winner = calculateWinner(boardSquares, boardSideSize);
    let displayStatus = (winner) ? <div>Winner: {winner}</div> : '';

    const tableCells = Array(boardSideSize)
        .fill()
        .map((row, i) => (
            <Table.Row key={i}>
                {Array(boardSideSize)
                    .fill()
                    .map((col, j) => (
                        <Table.Cell 
                            key={boardSideSize * i + j}
                            onClick={() => handleClick(boardSideSize * i + j)}
                            textAlign="center"
                            className='cell-style'
                        >
                            {boardSquares[boardSideSize * i + j]}
                        </Table.Cell>
                    ))}
            </Table.Row>
        ))

    return (
        <>
            <div className="winner-status">{displayStatus}</div>
            <Table celled style={{ backgroundColor: '#40E0D0', fontSize: "40px"}}>
                <Table.Body >{tableCells}</Table.Body>
            </Table>
        </>
    );
}