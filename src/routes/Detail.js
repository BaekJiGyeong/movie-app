import React from 'react'
import reactDom from 'react-dom';

/*
function Detail({location}){ // props 쓸때는 그냥 쓰고 props 안에 파라미터 추출시 { } 해줌
    console.log({location});
    return <span>Detail</span>
}
*/

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        console.log(location);
        if(location.state=== undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            
            return (
                <div className="movie">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{location.state.title}</h3>
                    <h5 className="movie__year">{location.state.year}</h5>
                    <p className="movie__summary">{location.state.summary.slice(0,180)}...</p>
                    <ul className="movies__genres">
    
                        {location.state.genres.map((genre, index) => 
                        <li key = {index} className="genres__genre">{index}, {genre}</li>
                        )}   
                    </ul>
                </div>
            </div>
            )
        }
        else return null;
    }
}

export default Detail;