import './About.css';
import avatarBackground from '../../images/Victor Alexander Avatar.jpg';

function About() {
  return (
    <section className="about">
      <img className="about__image" src={avatarBackground} alt='author-avatar' />
      <div>
        <h3 className="about__title">About the author</h3>
        <p className="about__description">I am Victor and I am a software engineer.</p>
        <p className='about__description'>I have learned all of my skills from practcum.</p>
      </div>
    </section>
  )
}

export default About;