import React from "react";

// RecipeList renders a bootstrap list item
export const RecipeList = props => (
  <div className="col-md-12 d-flex justify-content-center">
  <ul className="list-group">{props.children}</ul>
  </div>
);
