import React from 'react';
import styled from 'styled-components';

// Definición de un componente estilizado
const StyledProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 16px;
  max-width: 380px;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  font-size: 1.8em;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.95em;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-size: 0.9em;
  margin-bottom: 24px;
  padding-top: 10px;
  border-top: 1px dashed #eee;
`;

const DetailSpan = styled.span`
  font-weight: 500;
  &:first-child {
    color: #007bff;
  }
  &:last-child {
    color: #28a745;
  }
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

function ProductCardStyle({ title, description, interestRate, minimum }) {
  return (
    <StyledProductCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DetailsContainer>
        <DetailSpan>Tasa de interés: {interestRate}%</DetailSpan>
        <DetailSpan>Mínimo: ₡{minimum}</DetailSpan>
      </DetailsContainer>
      <StyledButton>Más información</StyledButton>
    </StyledProductCard>
  );
}

export default ProductCardStyle;