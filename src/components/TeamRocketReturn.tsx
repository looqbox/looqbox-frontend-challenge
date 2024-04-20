import { useNavigate } from 'react-router-dom';

import teamRocketImg from '@/assets/teamRocket.png';

import { Button } from './ui/button';

export function TeamRocketReturn() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={teamRocketImg} alt="Team Rocket intro" className="w-[400px]" />
      <span className="text-4xl font-bold">
        The rocket team{' '}
        <strong className="text-muted-foreground">has won this time.</strong>
      </span>

      <Button className="text-xl" onClick={() => navigate('/')}>
        Return
      </Button>
    </div>
  );
}
