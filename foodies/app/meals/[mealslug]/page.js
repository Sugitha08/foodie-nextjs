import Image from "next/image";
import classes from "./page.module.css";
import { GetMeal } from "@/data/meals";
import { notFound } from "next/navigation";

function MealDetailsPage({ params }) {
  const meal = GetMeal(params.mealslug);
  if(!meal)[
    notFound()  //shows the nearest not found error page
  ]
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
