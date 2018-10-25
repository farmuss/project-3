import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import IngredientSearch from "./components/IngredientSearch";
import CustomRecipe from "./components/CustomRecipe";
import UnderConstruction from "./components/UnderConstruction";
import RecipeSearch from "./components/RecipeSearch";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import API from "./utils/API";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    ingredientSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => {
        console.log(res);
        this.setState({ recipes: res.data })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Jumbotron} />
          <Route exact path="/recipesearch" component={RecipeSearch} />
          <Route exact path="/ingredientsearch" component={IngredientSearch} />
          <Route exact path="/customrecipe" component={CustomRecipe} />
          <Route exact path="/saved" component={UnderConstruction} />
          <Route exact path="/random" component={UnderConstruction} />

        </Fragment>
      </Router>
    );
  }
}

export default App;







// handleFormSubmit = event => {
//   event.preventDefault();
//   API.getRecipes(this.state.recipeSearch)
//     .then(res => {
//       console.log(res);
//       this.setState({ recipes: res.data })
//     })
//     .catch(err => console.log(err));
// };

// handleFormSubmit2 = event => {
//   event.preventDefault();
//   API.getIngredients(this.state.ingredientSearch)
//     .then(res => {
//       console.log(res);
//       this.setState({ recipes: res.data })
//     })
//     .catch(err => console.log(err));
// };
