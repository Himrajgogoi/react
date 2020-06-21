import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardText, CardTitle, Modal, ModalBody, ModalHeader, Row, Col, Button, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from '../redux/ActionCreators';
import { Loading } from './loadingcomponent';


const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

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

    function RenderComments({ comments, dishid, addComment }) {

        const comment = comments.map((comment) => {
            return ( <
                div >
                <
                ul className = "list-unstyled" >
                <
                li className = "mt-4" > { comment.comment } < /li>   <
                li className = "mt-4" > --{ comment.author }, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date))) } < /li>  < /
                ul > <
                /div> 
            );
        });

        return ( < div > < h4 > Comments < /h4> <
            div > { comment } < /div>  <
            CommentForm dishId = { dishid }
            addComment = { addComment }
            /> < /
            div >
        );
    }
    class CommentForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        toggleModal() {
            this.setState({ isModalOpen: !this.state.isModalOpen });
        }
        handleSubmit(values) {
            this.toggleModal();

            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        }
        render() {
            return ( <
                div className = "container" >
                <
                div className = "row" >
                <
                div className = "col-12 col-md-6" >
                <
                Modal isOpen = { this.state.isModalOpen }
                toggle = { this.toggleModal } >
                <
                ModalHeader toggle = { this.toggleModal } > Submit Comment < /ModalHeader> <
                ModalBody >
                <
                LocalForm onSubmit = {
                    (values) => this.handleSubmit(values)
                } >
                <
                Row classname = "form-group" >
                <
                Col md = { 12 } >
                <
                h6 > rating < /h6> < /
                Col > <
                /Row> <
                Row className = "form-group" >
                <
                Col md = { 12 } >
                <
                Control.select model = ".rating"
                name = "rating"
                className = "form-control" >
                <
                option > 1 < /option> <
                option > 2 < /option> <
                option > 3 < /option> <
                option > 4 < /option> <
                option > 5 < /option> < /
                Control.select > < /Col >

                <
                /Row> <
                Row className = "form-group" >
                <
                Col md = { 12 } >
                <
                h6 > Your Name < /h6> < /
                Col > <
                /Row> <
                Row className = "form-group" >
                <
                Col md = { 12 } >
                <
                Control.text model = ".author"
                name = "author"
                id = "author"
                className = "form-control"
                validators = {
                    {

                        minLength: minLength(3),
                        maxLength: maxLength(15)
                    }
                }
                /> <
                Errors className = "text-danger"
                model = ".author"
                show = "touched"
                messages = {
                    { minLength: " Must have atleast 3 characters", maxLength: "Must have less than or equal to 15 characters" }
                } > < /Errors> < /
                Col > < /
                Row > <
                Row className = "form-group" >
                <
                Col md = { 12 } >
                <
                h6 > Comment < /h6> < /
                Col > <
                /Row> <
                Row className = "form-group" >
                <
                Col md = { 12 } >
                <
                Control.textarea model = ".comment"
                name = "comment"
                rows = "12"
                className = "form-control" / >
                <
                /Col> < /
                Row >
                <
                Row className = "form-group" >
                <
                Col md = { 12 } >
                <
                Button type = "submit"
                color = "primary" > Submit < /Button> < /
                Col > <
                /Row> < /
                LocalForm > < /ModalBody > < /
                Modal > <
                /div> < /
                div > <
                div className = "row" >
                <
                Button outline onClick = { this.toggleModal } > < span className = "fa fa-pencil fa-lg" > < /span> Comment < /Button > < /
                div > <
                /div>
            );
        }
    }
    const DishDetails = (props) => {
            if (props.isLoading) {
                return ( <
                    div className = "container" >
                    <
                    div className = "row" >
                    <
                    Loading / >
                    <
                    /div> <
                    /div>
                );
            } else if (props.errMess) {
                return (

                    <
                    div className = "container" >
                    <
                    div className = "row" >
                    <
                    h4 > { props.errMess } < /h4> <
                    /div> <
                    /div>
                );
            } else if (props.dish != null) {
                return ( < div className = "container" >
                    <
                    div className = "row" >
                    <
                    Breadcrumb >
                    <
                    BreadcrumbItem > < Link to = '/menu' > Menu < /Link></BreadcrumbItem >
                    <
                    BreadcrumbItem active > { props.dish.name } < /BreadcrumbItem> < /
                    Breadcrumb >
                    <
                    div className = "col-12" >
                    <
                    h3 > { props.dish.name } < /h3> <
                    hr / > < /div> < /
                    div >
                    <
                    div className = "row" >
                    <
                    div className = "col-12 col-md-5 m-1" > < RenderDish dish = { props.dish }
                    />< /
                    div > <
                    div className = "col-12 col-md-5 m-1" > < RenderComments comments = { props.comments }
                    addComment = { props.addComment }
                    dishid = { props.dish.id }

                    />   < /
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