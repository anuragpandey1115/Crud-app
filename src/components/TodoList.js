import React from 'react'


function TodoList({id, content, done, index, category, deleteTodo, onEdit, complete}) {

    let style = {
        'pointer-events': 'none',
        'opacity': "0.5",
        'background': "#CCC",
    }

    return (
        <div className={'col-sm-12 row border-top mb-2'} key={id}>
            <div className={'col-sm-1'}>
                {/* <input type="checkbox" checked={done}/> */}
            </div>
            <div className={category !== '' ? 'col-sm-4' : 'col-sm-8'} style={done ? style : {}}>{content}</div>
            {category !== '' && <div className={'col-sm-4'} style={done ? style : {}}>{category}</div>}

            <div className={'col-sm-1'} onClick={() => deleteTodo(id)}><i className="fas fa-trash"/></div>
            <div className={'col-sm-1'} onClick={() => onEdit(id, content, done, category)} style={done ? style : {}}><i
                className="fas fa-edit"/>
            </div>
             {/* <div className={'col-sm-1'} onClick={() => complete(id)} style={done ? style : {}}><i
                 className="fas fa-check-circle"/></div>  */}
        </div>  
    )

}

export default TodoList