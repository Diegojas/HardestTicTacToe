import { useState } from 'react';
import Board from './components/Board';
import { Card, Select, Button } from 'semantic-ui-react';

export default function App() {
    const [selectedLevel, setSelectedLevel] = useState(3);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isRestarted, setIsRestarded] = useState(false);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const initialBoard = Array((+selectedLevel) ** 2).fill(null);
    const [boardSquares, setBoardSquares] = useState(initialBoard);
    const options = [
        { key: 'easy', value: '3', text: '3 x 3' },
        { key: 'medium', value: '4', text: '4 x 4' },
        { key: 'difficult', value: '5', text: '5 x 5' },
    ];

    function handlePlay (squares) {
        if (currentMove === 0) setIsDisabled(true);
        setCurrentMove(currentMove + 1);
        setBoardSquares(squares);
    }

    function handleRestart() {
        setCurrentMove(0);
        setIsRestarded(true);
        setBoardSquares(initialBoard);
        setIsDisabled(false);
    }

    return (
        <div>
            <Card centered fluid={window.innerWidth < 768}>
                <Card.Content>
                    <Card.Header>Tic-Tac-Toe Game</Card.Header>
                    <Card.Meta textAlign='right'>
                        <Select
                            placeholder="Select level"
                            value={selectedLevel}
                            disabled={isDisabled}
                            onChange={(e, { value }) => setSelectedLevel(value)}
                            options={options}
                        />
                    </Card.Meta>
                    <Card.Description>
                        <div className='ui two buttons mt-small'>
                            <Button color='teal' className={xIsNext ? '' : 'basic'}>
                                Player 1: X
                            </Button>
                            <Button color='black' className={xIsNext ? 'basic' : ''}>
                                Player 2: O
                            </Button>
                        </div>
                        <div className="mt-small">
                            <Board boardSideSize={+selectedLevel} xIsNext={xIsNext} onPlay={handlePlay} isRestarted={isRestarted} boardSquares={boardSquares}/>
                        </div>
                    </Card.Description>
                    <Card.Content extra style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className='mt-small'>
                        <span floated='left'>Counter: {currentMove}</span>
                        <Button basic labelPosition='right' icon='undo' content='Restart' color='teal' onClick={handleRestart}/>
                    </Card.Content>
                </Card.Content>
            </Card>
        </div>
    );
}