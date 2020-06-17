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

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        const HomePage = () => {
            return ( <
                Home dish = { this.props.dishes.filter((dish) => dish.featured)[0] }
                leader = { this.props.leaders.filter((leader) => leader.featured)[0] }
                promotion = { this.props.promotions.filter((promo) => promo.featured)[0] }
                / >
            );
        }
        const DishWithId = ({ match }) => {
            return ( <
                DishDetails dish = { this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                comments = { this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                />
            );
        }
        const Aboutus = () => {
            return ( <
                About leaders = { this.props.leaders }
                />
            );
        }
        return ( <
            div >
            <
            Header / >
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
            component = { Contact }
            /><
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
                /Switch> <
                Footer / > < /
                div >
            );
        }



    }

    export default withRouter(connect(mapStateToProps)(Main));