import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



function RenderDish({ dish }) {
    return ( <
        Card >
        <
        CardImg width = "100%"
        src = { dish.image }
        alt = { dish.name } >

        <
        /CardImg> <
        CardBody >
        <
        CardTitle > { dish.name } < /CardTitle> <
        CardText > { dish.description } < /CardText> < /
        CardBody > <
        /Card> );

    }

    function RenderComments({ comments }) {
        return ( < div > < h4 > Comments < /h4> <
            ul className = "list-unstyled" >
            <
            li className = "mt-4" > { comments[0].comment } < /li>  <
            li className = "mt-4" > --{ comments[0].author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments[0].date))) } < /li>  <
            li className = "mt-4" > { comments[1].comment } < /li>  <
            li className = "mt-4" > --{ comments[1].author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments[1].date))) } < /li>  <
            li className = "mt-4" > { comments[2].comment } < /li>  <
            li className = "mt-4" > --{ comments[2].author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments[2].date))) } <
            /li>  <
            li className = "mt-4" > { comments[3].comment } < /li>  <
            li className = "mt-4" > --{ comments[3].author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments[3].date))) } < /li>  <
            li className = "mt-4" > { comments[4].comment } < /li>  <
            li className = "mt-4" > --{ comments[4].author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments[4].date))) } < /li> < /
            ul > < /div >
        );
    }
    const DishDetails = (props) => {
            console.log("dishdetail component did render invoked");
            if (props.dish != null) {
                return ( < div className = "container" >
                    <
                    div className = "row" >
                    <
                    div className = "col-12 col-md-5 m-1" > < RenderDish dish = { props.dish }
                    />< /
                    div > <
                    div className = "col-12 col-md-5 m-1" > < RenderComments comments = { props.dish.comments }
                    />< /
                    div >

                    <
                    /div> < /
                    div >
                );
            } else {
                return ( < div > < /div>);
                }




            }


            export default DishDetails;