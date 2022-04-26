import React, {useState, useEffect} from 'react';

const BoardContext = React.createContext();

export function BoardContextProvider(props) {
    const [boardName, setBoardName] = useState("")
    const [boardId, setBoardId] = useState("")
    useEffect(() => {

    }, [boardName])
    const switchBoard = (boardName) => setBoardName(boardName)
    const switchBoardId = (id) => setBoardId(id)
  return (
    <BoardContext.Provider value={{switchBoard, boardName, boardId, switchBoardId}}>
      {props.children}
    </BoardContext.Provider>
  );
}

export const useBoardContext = () => React.useContext(BoardContext);