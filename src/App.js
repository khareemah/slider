import React, { useState, useEffect } from 'react';
import people from './data';
import Title from './Title';
import SinglePerson from './SinglePerson';
import Buttons from './Buttons';

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoout = setInterval(() => setIndex(checkIndex(index + 1)), 3000);
    return () => {
      clearInterval(timeoout);
    };
  }, [index]);

  const checkIndex = (index) => {
    let newIndex;
    if (index < 0) {
      newIndex = people.length - 1;
      return newIndex;
    }
    if (index > people.length - 1) {
      newIndex = 0;
      console.log(newIndex);
      return newIndex;
    }
    return index;
  };
  const showNextImage = () => {
    setIndex(checkIndex(index + 1));
  };
  const showPrevImage = () => {
    setIndex(checkIndex(index - 1));
  };

  return (
    <section className="section">
      <Title />

      <section className="section-center">
        {people.map((person, personIndex) => {
          let position = 'nextSlide';
          if (index === personIndex) {
            position = 'activeSlide';
          }
          if (
            (index === 0 && personIndex === people.length - 1) ||
            personIndex === index - 1
          ) {
            position = 'lastSlide';
          }
          return (
            <SinglePerson key={person.id} {...person} position={position} />
          );
        })}
        <Buttons showPrevImage={showPrevImage} showNextImage={showNextImage} />
      </section>
    </section>
  );
};

export default App;
