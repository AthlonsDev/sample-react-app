import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { getFoodData } from "../api/actions";

import lasagna_image from "../assets/lasagna.png"; //lasagna icons created by Freepik - Flaticon
import pizza_image from "../assets/pizza.png"; //Pizza icons created by Freepik - Flaticon
import salad_image from "../assets/salad.png"; //Salad icons created by Freepik - Flaticon
import bol_image from "../assets/spaghetti_b.png"; //Bolognese icons created by Freepik - Flaticon
import carb_image from "../assets/spaghetti_c.png"; //Carbonara icons created by monkik - Flaticon
import ravioli_image from "../assets/ravioli.png"; //ravioli icons created by Freepik - Flaticon

const RestaurantCard: React.FC = () => {
  const [data, setData] = useState<FoodData>();
  const [loadingState, setLoadingState] = useState(false);
  const [food, setFood] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching Food Data...");
    console.log(food);
    setLoadingState(true);
    getFoodData(food)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };

  return (

    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-2 space-y-4">
            <Input
              id="foodname"
              type="text"
              label="food"
              value={food}
              onChange={(e) => {
                setFood(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Search
            </Button>         
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">{data.food}</h1>
            {data.food === "pizza" ? (
              <div>
                <img src={pizza_image} className="w-36 h-36" />
              </div>
            ) : null}
            {data.food === "salad" ? (
              <div>
                <img src={salad_image} className="w-36 h-36" />
              </div>
            ) : null}
            {data.food === "bolognese" ? (
              <div>
                <img src={bol_image} className="w-36 h-36" />
              </div>
            ) : null}
            {data.food === "carbonara" ? (
              <div>
                <img src={carb_image} className="w-36 h-36" />
              </div>
            ) : null}
            {data.food === "ravioli" ? (
              <div>
                <img src={ravioli_image} className="w-36 h-36" />
              </div>
            ) : null}
            {data.food === "lasagna" ? (
              <div>
                <img src={lasagna_image} className="w-36 h-36" />
              </div>
            ) : null}
            <p className="text-lg">Weight: {data.weight}gr</p>
            <p className="text-lg">Calories: {data.calories}kcal</p>
            <p className="text-lg">Price: ${data.price}</p>
            <p className="text-lg">Availablity: {data.availability}</p>
            <p className="text-lg">Delivery: {data.delivery} </p>
            <p className="text-lg">Time to prepare: {data.time_to_prepare} mins</p>

          </div>
        </CardBody>
      ) : (
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter a dish</p>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
