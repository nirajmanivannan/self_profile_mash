import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dosa",
    description: "CRISPY DELECIOUS INDIAN DOSA",
    price: 60,
  },
  {
    id: "m2",
    name: "Idly",
    description: "HEALTHY BAKED IDLY.",
    price: 45,
  },
  {
    id: "m3",
    name: "Pongal",
    description: "RICH IN CHOLESTROL PONGAL",
    price: 130,
  },
  {
    id: "m4",
    name: "Poori",
    description: "FLUFFY PUFFY INDIAN POORI",
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
