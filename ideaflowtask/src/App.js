import React, { useState, useEffect } from 'react';
import { Button, Container, CssBaseline, Paper, TextareaAutosize, Typography } from '@mui/material';
import { Create } from '@mui/icons-material';
import Idea from './components/Idea';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');

  const handleAddIdea = () => {
    setIdeas([newIdea, ...ideas]);
    setNewIdea('');
  };

  const handleEditIdea = (index, updatedIdea) => {
    const updatedIdeas = [...ideas];
    updatedIdeas[index] = updatedIdea;
    setIdeas(updatedIdeas);
  };

  useEffect(() => {
    // Clear the newIdea state after adding an idea
    setNewIdea('');
  }, [ideas]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className="App">
        <Paper elevation={3} className="paper">
          <Typography variant="h4">Idea Board</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Create />}
            onClick={handleAddIdea}
          >
            Add Idea
          </Button>
          <div>
            <TextareaAutosize
              placeholder="Enter your idea..."
              rowsMin={3}
              value={newIdea}
              onChange={(e) => setNewIdea(e.target.value)}
              style={{ width: '100%', marginBottom: '10px', marginTop: '10px' }}
            />
          </div>
          <div className="ideas">
            {ideas.map((idea, index) => (
              <Idea
                key={index}
                idea={idea}
                index={index}
                onEdit={handleEditIdea}
              />
            ))}
          </div>
        </Paper>
      </div>
    </Container>
  );
}

export default App;
