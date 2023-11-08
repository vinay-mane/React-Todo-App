
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {Draggable} from './Dragable';
import {Droppable} from './Dropable';

function Example() {
  const [parent, setParent] = useState(null);
  const [parent1, setParent1] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );
  const draggable1 = (
    <Draggable id="draggable2">
      Go ahead, drag me.
    </Draggable>
  );

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      {!parent ? draggable1 : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : 'Drop here'}
      </Droppable>
    </DndContext>
    </>
  );

  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
  }
}

export default Example
  