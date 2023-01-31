import React from 'react';
import ReactDOM from 'react-dom';
import SingleCard from './SingleCard';
import picture1 from './images/pic1.png';
import picture2 from './images/pic2.png';
import picture3 from './images/pic3.jfif';
import picture4 from './images/pic4.png';
import picture5 from './images/pic5.png';
import UserCard from './UserCard';

const App = function () {
  return (
    <div className='ui grid'>

      <UserCard>
        <SingleCard
          name="React Js - The complete course"
          profile={picture1}
          author="Avinash Jain"
          cost="$639"
        />
      </UserCard>
      <UserCard>
        <SingleCard
          name="Angular Js - For Beginners"
          profile={picture2}
          author="John Samual"
          cost="$649" />
      </UserCard>
      <UserCard>
        <SingleCard
          name="Javascript - Fundamentals"
          profile={picture3}
          author="Edwin John"
          text="$659" />
      </UserCard>
      <UserCard>
        <SingleCard
          name="HTML5- Basic and Fundamentals"
          profile={picture4}
          author="Huzzin Bolt"
          text="$669" />
      </UserCard>
     
      </div>


  )
}
ReactDOM.render(<App />, document.querySelector('#root'))