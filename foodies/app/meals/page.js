import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrids from "@/Components/meals/meals.grid";
import { GetMeals } from "@/data/meals";
async function Getmeals() {
  const meals = await GetMeals();
  return <MealsGrids meals={meals} />;
}

function AboutUsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicios Meals , created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose Your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<div className={classes.loading}>Loading meals...</div>}
        >
          <Getmeals />
        </Suspense>
      </main>
    </>
  );
}

export default AboutUsPage;
