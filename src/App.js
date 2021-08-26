import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) { // props.fav
  return (
  <div>
    <h3>I like {name } </h3>
    <h4>{rating}/5.0</h4>
    <img src={picture}/>
  </div>
    
     
  );
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const foodILike = [{id:1, name:"kimchi", image:"https://www.google.com/search?q=react&rlz=1C5CHFA_enKR952KR952&sxsrf=ALeKk00IXXfBio5aeHiuSsKQpW-Qwqhvmw:1629936494383&tbm=isch&source=iu&ictx=1&fir=CSdKvaXFVNCzjM%252CWD7UrTSsaFzRYM%252C%252Fm%252F012l1vxv&vet=1&usg=AI4_-kQVjYqz0LMQrRsb1BuvhiHsVFvtxQ&sa=X&ved=2ahUKEwipx4POss3yAhXtQPUHHXs-BH0Q_B16BAgvEAE#imgrc=CSdKvaXFVNCzjM"
,rating:5}
, {id:2, name:"chcha", image:"https://www.google.com/search?q=react&rlz=1C5CHFA_enKR952KR952&sxsrf=ALeKk00IXXfBio5aeHiuSsKQpW-Qwqhvmw:1629936494383&tbm=isch&source=iu&ictx=1&fir=CSdKvaXFVNCzjM%252CWD7UrTSsaFzRYM%252C%252Fm%252F012l1vxv&vet=1&usg=AI4_-kQVjYqz0LMQrRsb1BuvhiHsVFvtxQ&sa=X&ved=2ahUKEwipx4POss3yAhXtQPUHHXs-BH0Q_B16BAgvEAE#imgrc=CSdKvaXFVNCzjM"
, rating:4.8}];

function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
  <div> 
    <h1>Hello!!</h1>
      <div>
        {console.log(foodILike.map(renderFood))}
        {foodILike.map(dish=> (<Food key={dish.id} name={dish.name} picture={dish.image} rating = {dish.rating}/>))}
      </div>
    </div>
    );
}

export default App;
