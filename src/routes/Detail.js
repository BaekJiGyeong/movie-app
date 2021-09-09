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
            
            return <span>{location.state.title}</span>
        }
        else return null;
    }
}

export default Detail;