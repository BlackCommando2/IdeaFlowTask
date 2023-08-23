import React, { useState, useEffect } from 'react';
import { TextareaAutosize } from '@mui/material';

const Idea = ({ idea, index, onEdit }) => {
    const [editedIdea, setEditedIdea] = useState(idea);

    useEffect(() => {
        setEditedIdea(idea);
    }, [idea]);

    const handleEdit = (e) => {
        setEditedIdea(e.target.value);
    };

    const handleBlur = () => {
        onEdit(index, editedIdea);
    };

    return (
        <div className="idea">
            <TextareaAutosize
                rowsMin={3}
                value={editedIdea}
                onChange={handleEdit}
                onBlur={handleBlur}
                style={{ width: '100%', marginBottom: '10px' }}
            />
        </div>
    );
};

export default Idea;
