import { Container } from 'react-bootstrap';
import './about.css'

const About = () => {
  return (
    <Container>
      <div className="about-page">
        <h1>About us</h1>
        <h3>In 300,000 years of human civilization, we have come across the bartering system, trading with shell money, and all kinds of scarce resources. Nowadays we don’t even need to rely on third-party organizations to provide authentication on our transactions, such as using digital currency. However, as college students, most of us don’t have much money to spend, which implies trading objects with objects works better than using money that we don’t have. Therefore, we created this platform where Purdue students and faculties can post things they no longer need and trade with things they want.</h3>
        <h1 className="slogan">"Welcome to boiler trade, <br/>trade safe and trade free."</h1>
      </div>
    </Container>
    
  )
}

export default About;