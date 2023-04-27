type CoffeeProps = {
  name: string;
  type: string;
};

export async function requestACoffee(): Promise<CoffeeProps> {
  console.log('Request a coffee from the coffee-maker-api');
  return {
    name: 'Black Coffee',
    type: 'Arabica',
  };
}
