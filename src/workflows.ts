import * as wf from '@temporalio/workflow';

import type * as activities from './activities';

const { requestACoffee } = wf.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export const paidCoffeeSignal = wf.defineSignal('paidCoffeeSignal');

export async function makeCoffeeWorkflow(preparationTime: string): Promise<string> {
  const coffee = await requestACoffee();

  let coffeeReady = false;

  wf.setHandler(paidCoffeeSignal, () => void (coffeeReady = true));

  if (await wf.condition(() => coffeeReady === true, preparationTime)) {
    return `This ${coffee.name} - ${coffee.type} is ready to drink`;
  }

  return 'No coffee in stook';
}
