import MealItem from "./meal-items";
import classes from "./meals-grid.module.css"

export default function MealsGrids({meals}){
    return(
        <ul className={classes.meals}>
            {meals.map((meal)=>(
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}