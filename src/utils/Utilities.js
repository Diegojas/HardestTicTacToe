function generateWinningConditions(squareSize) {
    const winningConditions = [];

    // Rows
    for (let i = 0; i < squareSize; i++) {
        const row = [];
        for (let j = 0; j < squareSize; j++) {
            row.push(i * squareSize + j);
        }
        winningConditions.push(row);
    }

    // Columns
    for (let i = 0; i < squareSize; i++) {
        const column = [];
        for (let j = 0; j < squareSize; j++) {
            column.push(j * squareSize + i);
        }
        winningConditions.push(column);
    }

    // Diagonal from top-left to bottom-right
    const diagonal1 = [];
    for (let i = 0; i < squareSize; i++) {
        diagonal1.push(i * squareSize + i);
    }
    winningConditions.push(diagonal1);

    // Diagonal from top-right to bottom-left
    const diagonal2 = [];
    for (let i = 0; i < squareSize; i++) {
        diagonal2.push(i * squareSize + (squareSize - 1 - i));
    }
    winningConditions.push(diagonal2);

    return winningConditions;
}

function calculateWinner(squares, squareSize) {
    const lines = generateWinningConditions(squareSize);

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export {
    generateWinningConditions,
    calculateWinner
};