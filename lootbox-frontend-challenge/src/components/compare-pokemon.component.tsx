import { Button, Modal, Select, Spin } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useListPokemon } from '../hooks/queries/list-pokemon.query';
import { usePokemonStore } from '../models/zustand/pokemon.store';

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ComparePokemonModal({ open, onClose }: Props) {
  const { setPokemonFromCompare, litsPokemon, appendLitsPokemon } = usePokemonStore();

  const [offset, setOffset] = useState(0);

  const { data, isLoading, isFetching } = useListPokemon({
    limit: 50,
    offset,
  });

  useEffect(() => {
    appendLitsPokemon(data?.results ?? []);
  }, [data, appendLitsPokemon]);

  const pokemonOptions = useMemo(
    () => litsPokemon.map((p) => ({ label: p.name, value: p.name })),
    [litsPokemon],
  );

  const handleSelect = (value: string) => {
    setPokemonFromCompare(value);
    onClose();
  };

  return (
    <Modal open={open} onCancel={onClose} footer={null} title="Comparar Pokémon" centered>
      {isLoading && pokemonOptions.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <Spin size="large" />
        </div>
      ) : (
        <Select
          showSearch
          placeholder="Selecione um Pokémon"
          className="w-full"
          onSelect={handleSelect}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={pokemonOptions}
          popupRender={(menu) => (
            <>
              {menu}
              <div className="flex justify-center items-center p-2 border-t bg-gray-50">
                <Button
                  type="primary"
                  loading={isFetching}
                  onClick={() => setOffset((prev) => prev + 50)}
                  className="w-full"
                >
                  {isFetching ? 'Carregando...' : 'Carregar mais'}
                </Button>
              </div>
            </>
          )}
        />
      )}
    </Modal>
  );
}
