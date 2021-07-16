import React from 'react';
import Review from './Review';
// import {FaGithubSquare} from 'react-icons/fa'
function App() {
  return  <main >
  <section className="container">
   <div className="title">
      <h2>Your Reviews</h2>
      </div>
      <Review />
  </section> 
    {/* <FaGithubSquare className='icon' />  */}
  </main>;
}

export default App;