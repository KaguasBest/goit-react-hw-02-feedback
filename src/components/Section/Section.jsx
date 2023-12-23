import { Container, Title } from './SectionContainer.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
