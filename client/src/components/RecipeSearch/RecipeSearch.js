import React, { Component, Fragment } from "react";
import Input from "../Input";
import Button from "../Button";
import API from "../../utils/API";
import { RecipeList, RecipeListItem } from "../RecipeList";
import { Container, Row, Col } from "../Grid";


class RecipeSearch extends Component {
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
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="recipeSearch"
                      value={this.state.recipeSearch}
                      onChange={this.handleInputChange}
                      placeholder="Search For a Recipe"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                      Search
          </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="xs-12">
            {!this.state.recipes.length ? (
              <h1 className="text-center">Search for a recipe to begin using the website.</h1>
            ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
          </Col>
        </Row>
      </Container>

    )
  }
}

export default RecipeSearch;




