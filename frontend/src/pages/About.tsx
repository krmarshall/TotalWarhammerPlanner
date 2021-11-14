import { useState } from 'react';
import api from '../api/api';
import skillIcons from '../assets/img/skills/skillIcons';

const About = () => {
  const [imgSrc, setImgSrc] = useState('');
  const buttonHandler = () => {
    api.imageTest().then((res) => {
      console.log(res);
      console.log(skillIcons);
      // @ts-expect-error 7053
      const temp = skillIcons[`${res.iconType}`][res.icon];
      setImgSrc(temp);
    });
  };
  return (
    <div>
      <p>About Placeholder</p>
      <button onClick={buttonHandler}>Test</button>
      <img src={imgSrc} />
    </div>
  );
};

export default About;
