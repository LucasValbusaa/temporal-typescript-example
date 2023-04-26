export async function requestACoffee(): Promise<any> {
  console.log('Request a coffee from the coffee-maker-api');
  return {
    name: 'Black Coffee',
    type: 'Arabica',
  };
}
