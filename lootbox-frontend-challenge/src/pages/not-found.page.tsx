import { Button } from 'antd';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50 gap-6">
      <img
        src="/src/assets/images/pikachu-sad.png"
        alt="Pikachu triste"
        className="w-48 h-48 object-contain"
      />
      <h1 className="text-5xl font-bold text-yellow-700">404</h1>
      <p className="text-lg text-yellow-800 font-medium">Ops! Pokémon não encontrado.</p>
      <Link to="/">
        <Button type="primary">Voltar para Home</Button>
      </Link>
    </div>
  );
}
