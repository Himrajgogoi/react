import React, { Component } from 'react';
import Header from './headercomponent';
import Footer from './footercomponent';
import Menu from './menucomponents';
import Contact from './contactcomponent';
import Home from './homecomponent';
import About from './aboutcomponent';
import DishDetails from './DishDetailcomponents';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
const mapDispatchToProps = dispatch => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) }
});

class Main extends Component {



    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }



    render() {
            const HomePage = () => {
                return ( <
                    Home dish = { this.props.dishes.dishes.filter((dish) => dish.featured)[0] }
                    dishesLoading = { this.props.dishes.isLoading }
                    dishesErrMess = { this.props.dishes.errMess }
                    leadersLoading = { this.props.leaders.isLoading }
                    leadersErrMess = { this.props.leaders.errMess }
                    leader = { this.props.leaders.leaders.filter((leader) => leader.featured)[0] }
                    promosLoading = { this.props.promotions.isLoading }
                    promosErrMess = { this.props.promotions.errMess }
                    promotion = { this.props.promotions.promotions.filter((promo) => promo.featured)[0] }
                    / >
                );
            };
            const DishWithId = ({ match }) => {
                return ( <
                    DishDetails dish = { this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                    isLoading = { this.props.dishes.isLoading }
                    errMess = { this.props.dishes.errMess }
                    comments = { this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                    commentserrMess = { this.props.comments.errMess }
                    postComment = { this.props.postComment }
                    />
                );
            };
            const Aboutus = () => {
                return ( <
                    About leaders = { this.props.leaders }
                    />
                );
            };
            return ( <
                div >
                <
                Header / >
                <
                TransitionGroup >
                <
                CSSTransition key = { this.props.location.key }
                classNames = "page"
                timeout = { 300 } >
                <
                div >
                <
                Switch >

                <
                Route path = "/home"
                component = { HomePage }
                /> <
                Route path = '/aboutus'
                component = { Aboutus }
                />  <
                Route exact path = "/contactus"
                component = {
                    () => < Contact resetFeedbackForm = { this.props.resetFeedbackForm }
                    postFeedback = { this.props.postFeedback }
                    /> } / >
                    <
                    Route exact path = "/menu"
                    component = {
                        () => < Menu dishes = { this.props.dishes }
                        />}/ >
                        <
                        Route path = "/menu/:dishId"
                        component = { DishWithId }
                        /> <
                        Redirect to = "/home" / >
                        <
                        /Switch> < /
                        div >

                        <
                        / CSSTransition > < /
                        TransitionGroup > <
                        Footer / > < /
                        div >
                    );
                }



            }

            export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));