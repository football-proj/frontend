import { useState } from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import type { Team } from './Team';
import TeamCard from './components/TeamCard';
import TeamModal from './components/TeamModal';
import './App.css';

// Sample Data
const initialTeams: Team[] = [
  {
    id: 1,
    name: 'Tottenham Hotspur',
    country: 'England',
    emblemUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png',
    description: 'A professional football club in London, competing in the Premier League.'
  },
  {
    id: 2,
    name: 'Real Madrid',
    country: 'Spain',
    emblemUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
    description: 'A Spanish professional football club based in Madrid.'
  },
    {
    id: 3,
    name: 'Paris Saint-Germain',
    country: 'France',
    emblemUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png',
    description: 'A professional football club based in Paris, France. They compete in Ligue 1.'
  }
];

function App() {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [modalOpen, setModalOpen] = useState(false);
  const [teamToEdit, setTeamToEdit] = useState<Team | null>(null);

  const handleOpenModal = () => {
    setTeamToEdit(null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTeamToEdit(null);
  };

  const handleEditTeam = (team: Team) => {
    setTeamToEdit(team);
    setModalOpen(true);
  };

  const handleDeleteTeam = (id: number) => {
    setTeams(teams.filter(team => team.id !== id));
  };

  const handleSaveTeam = (teamData: Omit<Team, 'id'> | Team) => {
    if ('id' in teamData) {
      // Update existing team
      setTeams(teams.map(t => t.id === teamData.id ? teamData : t));
    } else {
      // Add new team
      const newTeam: Team = {
        id: Date.now(), // simple unique id generation
        ...teamData
      };
      setTeams([...teams, newTeam]);
    }
    handleCloseModal();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Football Team Manager
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenModal}>
          Add Team
        </Button>
      </Box>

      <Grid container spacing={4}>
        {teams.map(team => (
          <Grid item key={team.id} xs={12} sm={6} md={4}>
            <TeamCard team={team} onEdit={handleEditTeam} onDelete={handleDeleteTeam} />
          </Grid>
        ))}
      </Grid>

      <TeamModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTeam}
        teamToEdit={teamToEdit}
      />
    </Container>
  );
}

export default App;
