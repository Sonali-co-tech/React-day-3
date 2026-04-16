import styled from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import StatusCard from './components/StatusCard'

const Page = styled.main`
  width: min(920px, 92%);
  margin: 2rem auto;
  display: grid;
  gap: 1.5rem;
`

const Card = styled.section`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
`

const Title = styled.h2`
  margin-top: 0;
`

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  gap: 0.75rem;
`

const NavLink = styled.a`
  color: #0f172a;
  text-decoration: none;
  font-weight: 600;
  padding: 0.45rem 0.75rem;
  border-radius: 0.5rem;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #dc2626;
    background-color: #fee2e2;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

function App() {
  return (
    <>
      <Header />

      <Page>
        <Card>
          <Title>Exercise 1: Global CSS Button</Title>
          <p>
            This button uses the global <code>.btn</code> class from{' '}
            <code>index.css</code>.
          </p>
          <button className="btn">Primary Action</button>
        </Card>

        <Card>
          <Title>Exercise 2: Dynamic StatusCard</Title>
          <StatusGrid>
            <StatusCard
              type="success"
              title="Success"
              message="Your profile has been updated successfully."
            />
            <StatusCard
              type="error"
              title="Error"
              message="Payment failed. Please check your card details."
            />
          </StatusGrid>
        </Card>

        <Card>
          <Title>Exercise 4: Responsive Navigation Link</Title>
          <p>
            Hover over the link to see it turn red. It hides automatically below
            600px screen width.
          </p>
          <NavWrapper>
            <NavLink href="#home">Home</NavLink>
          </NavWrapper>
        </Card>
      </Page>

      <Footer />
    </>
  )
}

export default App
