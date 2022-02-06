import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import { getSdk, Recipe } from "./generated/client";

const client = new GraphQLClient("http://localhost:8000/graphql");
const sdk = getSdk(client);

export async function getRecipe(id: number) {
  const response = await sdk.getRecipe({ id });
  // const response = await sdk.getRecipe(); // Error: Expected 1-2 arguments, but got 0.

  console.log(response.recipe.id); // id: number
  console.log(response.recipe.title); // title: string
  console.log(response.recipe.imageUrl); // imageUrl?: string

  // // @ts-expect-error
  // console.log(response.recipe.foo); // Property 'foo' does not exist

  return response.recipe;
}

