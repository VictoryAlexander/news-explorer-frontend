import './About.css';
import avatarBackground from '../../images/Victor Alexander Avatar.jpg';

function About() {
  return (
    <section className="about">
      <img className="about__image" src={avatarBackground} alt='author-avatar' />
      <div className='about__container'>
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          My name is Victor Alexander and I am a web developer software engineer. I am 
          skilled through React, javascript, express and mongoDB.
        </p>
        <p className='about__description'>
          I have spent half a year with practicum where I learned my skills with them.
          I can use my skills to create web applications for companies.
        </p>
      </div>
    </section>
  )
}

export default About;