import React from 'react';
import { Row, Col, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import type { RootState, AppDispatch } from '../../store/store';
import { setSelectedType, setSelectedGeneration } from '../../store/slices/pokemonSlice';

export const FilterControls: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { types, generations, selectedType, selectedGeneration } = useSelector(
    (state: RootState) => state.pokemon
  );

  const handleTypeChange = (value: string | null) => {
    dispatch(setSelectedType(value));
  };

  const handleGenerationChange = (value: string | null) => {
    dispatch(setSelectedGeneration(value));
  };

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      <Col xs={24} sm={12}>
        <Select
          placeholder={t('home.filterByType')}
          style={{ width: '100%' }}
          allowClear
          value={selectedType}
          onChange={handleTypeChange}
          options={types.map((type) => ({
            value: type.name,
            label: t(`pokemonTypes.${type.name}`),
          }))}
        />
      </Col>
      <Col xs={24} sm={12}>
        <Select
          placeholder={t('home.filterByGeneration')}
          style={{ width: '100%' }}
          allowClear
          value={selectedGeneration}
          onChange={handleGenerationChange}
          options={generations.map((gen) => ({
            value: gen.name,
            label: gen.name.replace('generation-', '').toUpperCase(),
          }))}
        />
      </Col>
    </Row>
  );
};
