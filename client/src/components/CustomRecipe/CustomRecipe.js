import React from "react";
import "./CustomRecipe.css";

const CustomRecipe = () => {

  return (
    <div className="container">
      <form>
        <input class="form-control" type="text" placeholder="Name for this Recipe"></input>
        <br />
        <input class="form-control" type="text" placeholder="Separate Ingredients by comma"></input>
        <br />
        <textarea class="form-control" placeholder="Step-by-Step Instructions" rows="3"></textarea>
        <br />
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  )
};

export default CustomRecipe;
