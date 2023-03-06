import React, { useState, useRef, useEffect, memo } from 'react';
import {
    Card,
    Checkbox,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { Clear, Create, SaveOutlined } from "@material-ui/icons";

const TodoListItem = memo(({ todo, handleDelete, handleUpdate, handleCheck }) => {
    const { id, text, checked } = todo;

    // 수정모드인지 확인
    const [edit, setEdit] = useState(false);
    // 새로운 text값
    const [newText, setNewText] = useState(text);
   
    const editInput = useRef(null);

    useEffect(() => {
        if(edit) {
            editInput.current.focus();
        }
    }, [edit])

    const onEditClick = () => {
        console.log('onUpdate');
        setEdit(true);
    }

    const onChangeEditInput = (e) => {
        setNewText(e.target.value);
    }

    const onSubmitClick = () => {
        console.log('onUpdateSubmit');
        handleUpdate(text);
        
        setEdit(false);
    }

    const onRemove = () => {
        console.log('onRemove');
        handleDelete(id);
    };

    const onCheck = () => {
        console.log('onCheck');
        handleCheck(id);
    };

    return (
        <>
            <Card>
                <List
                    sx={{
                        width: 200,
                        height: 230,
                        bgcolor: "background.paper",
                        overflow: "auto",
                    }}
                    dense
                    component="div"
                    role="list"
                >
                    <ListItem role="listitem" button>
                        <ListItemIcon>
                            <Checkbox tabIndex={-1} disableRipple onClick={onCheck} />
                        </ListItemIcon>
                        {edit ? (
                            <InputBase type="text" ref={editInput} value={newText} onChange={onChangeEditInput} style={{ width: "90%", fontSize: "14px", fontextDecoration: checked === true ? "line-through" : null,
                            color: checked === true ? "#ccc" : "#000"}}
                            autoFocus
                            required />
                        ) : (
                            <ListItemText 
                                style={{
                                textDecoration: checked === true ? "line-through" : null,
                                color: checked === true ? "#ccc" : "#000",
                                
                            }}>
                                {newText}
                            </ListItemText>
                        )}
                        {/* <IconButton color="secondary" aria-label="Delete"> */}
                            {/* 완료한 일은 수정 불가하게 null 처리 */}
                            {!checked === true ? (
                                edit ? (
                                    <IconButton color="secondary" aria-label="Delete" onClick={onSubmitClick}>
                                        <SaveOutlined fontSize="small" />
                                    </IconButton>
                                ) : (
                                    <IconButton color="secondary" aria-label="Delete"  onClick={onEditClick}>
                                        <Create fontSize="small" />
                                    </IconButton>
                                )
                            ) : null}
                        {/* </IconButton> */}
                        <IconButton color="secondary" aria-label="Delete" onClick={onRemove}>
                            <Clear fontSize="small" />
                        </IconButton>
                    </ListItem>
                </List>
            </Card>
        </>
    );
})

export default React.memo(TodoListItem);