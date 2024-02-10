import { Router } from 'express';
import { TeamController } from '../Controllers/Team.controller';

const routes = Router();
const teamController = new TeamController();

routes.post('/create', teamController.createTeam);
routes.get('/allTeams', teamController.getAllTeams);
routes.get('/:id', teamController.getTeamByID);

export default routes