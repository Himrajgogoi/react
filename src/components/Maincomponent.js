import React, { Component } from 'react';
import Header from './headercomponent';
import Footer from './footercomponent';
import Menu from './menucomponents';
import Contact from './contactcomponent';
import Home from './homecomponent';
import About from './aboutcomponent';
import DishDetails from './DishDetailcomponents';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            selectedDish: null
        };
    }

    render() {
        const HomePage = () => {
            return ( <
                Home dish = { this.state.dishes.filter((dish) => dish.featured)[0] }
                leader = { this.state.leaders.filter((leader) => leader.featured)[0] }
                promotion = { this.state.promotions.filter((promo) => promo.featured)[0] }
                / >
            );
        }
        const DishWithId = ({ match }) => {
            return ( <
                DishDetails dish = { this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                comments = { this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                />
            );
        }
        const Aboutus = () => {
            return ( <
                About leaders = { this.state.leaders }
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
                () => < Menu dishes = { this.state.dishes }
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

    export default Main;