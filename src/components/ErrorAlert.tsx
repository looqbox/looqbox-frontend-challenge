import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { clearErrors } from '@/features/pokemon/pokemonSlice';
import { Alert } from 'antd';
import { useEffect } from 'react';

export function ErrorAlert() {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.pokemon.errors);

  const activeError = errors.list || errors.details || errors.type;

  useEffect(() => {
    if (activeError) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [activeError, dispatch]);

  if (!activeError) return null;

  return (
    <Alert
      title="Ops! Algo deu errado 😔"
      description={activeError}
      type="error"
      closable
      style={{
        marginBottom: 16,
        borderRadius: 8,
      }}
      showIcon
    />
  );
}
