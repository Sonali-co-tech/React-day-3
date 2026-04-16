import styled from 'styled-components'

const cardColors = {
  success: '#d1fae5',
  error: '#fee2e2',
}

const textColors = {
  success: '#065f46',
  error: '#991b1b',
}

const Card = styled.article`
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(15, 23, 42, 0.1);
  background-color: ${({ $type }) => cardColors[$type] || '#e0e7ff'};
  color: ${({ $type }) => textColors[$type] || '#1e1b4b'};
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.07);
`

function StatusCard({ type, title, message }) {
  return (
    <Card $type={type}>
      <h3>{title}</h3>
      <p>{message}</p>
    </Card>
  )
}

export default StatusCard
