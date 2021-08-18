import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const grid = 8;
// fake data generator
const data = {
    1: [
        { id: "item-1-1628569576267", content: "item 1" },
        { id: "item-2-1628569576267", content: "item 2" },
        { id: "item-3-1628569576267", content: "item 3" },
        { id: "item-4-1628569576267", content: "item 4" },
    ],
    2: [
        { id: "item-5-1628569576267", content: "item 5" },
        { id: "item-6-1628569576267", content: "item 6" },
        { id: "item-7-1628569576267", content: "item 7" },
        { id: "item-8-1628569576267", content: "item 8" },
    ],
    3: [
        { id: "item-9-1628569576267", content: "item 9" },
        { id: "item-10-1628569576267", content: "item 10" },
        { id: "item-11-1628569576267", content: "item 11" },
        { id: "item-12-1628569576267", content: "item 12" },
    ],
    4: [
        { id: "item-13-1628569576267", content: "item 13" },
        { id: "item-14-1628569576267", content: "item 14" },
        { id: "item-15-1628569576267", content: "item 15" },
        { id: "item-16-1628569576267", content: "item 16" },
    ],
    5: [],
};

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    console.log('sourceClone.............',sourceClone);
    console.log('destClone.............',destClone);
    console.log('droppableSource.............',droppableSource);
    console.log('droppableDestination.............',droppableDestination);

    const [removedDes] = destClone.splice(droppableDestination.index > 3 ? 3 : droppableDestination.index , 1);
    console.log('removedDes.............',removedDes);
    sourceClone.splice(droppableSource.index, 0, removedDes);
    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => {
    return {
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: grid,
        width: 250,
    };
};

function QuoteApp() {
    const [state, setState] = useState(data);
    const [dragging, setDragging] = useState(data);

    function onDragEnd(result) {
        console.log("result............", result);
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = source.droppableId;
        const dInd = destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = state;
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = state;

            // if (result[dInd] && result[dInd].length > 4 && dInd !== "5")
            //     return alert("you cannot add more than 4 elements to one box. first add your element to bin box");
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState);
        }
    }

    return (
        <div>
            <div style={{ display: "flex" }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable key={`1`} droppableId={`1`}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                {state[1].map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-around",
                                                    }}
                                                >
                                                    {item.content}
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable key={`2`} droppableId={`2`}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                {state[2].map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-around",
                                                    }}
                                                >
                                                    {item.content}
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable key={`3`} droppableId={`3`}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                {state[3].map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-around",
                                                    }}
                                                >
                                                    {item.content}
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable key={`4`} droppableId={`4`}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                {state[4].map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-around",
                                                    }}
                                                >
                                                    {item.content}
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
}
export default QuoteApp;
