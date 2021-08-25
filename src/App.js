import React from 'react';

function Food({name, picture}) { // props.fav
  return (<div>
<h3>I like {name } </h3>
<img src={picture}/>
  </div>
    
     
  );
}
const foodILike = [{name:"kimchi", image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maangchi.com%2Frecipe%2Ftongbaechu-kimchi&psig=AOvVaw2fyp3190a-i6DNWaB8mIeD&ust=1629983415924000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjjlcafzPICFQAAAAAdAAAAABAD"}
, {name:"chcha", image:"https://img.sbs.co.kr/newimg/news/20200923/201474086_1280.jpg"}];

function App() {
  return (
  <div> 
    <h1>Hello!!</h1>
      {foodILike.map(dish=> (<Food name={dish.name} picture={dish.image}/>))}
    
    </div>
    );
}

export default App;
