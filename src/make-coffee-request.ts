import { Connection, WorkflowClient } from '@temporalio/client';
import { paidCoffeeSignal } from './workflows';

async function run() {
  const workflowId = process.argv?.find((arg) => arg.includes('wf-id'))?.split('=')[1];

  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection });

  if (workflowId) {
    const handle = client.getHandle(workflowId);
    await handle.signal(paidCoffeeSignal);
    console.log('signal has been sent');
    return;
  }

  throw new Error('workflowId was not provided');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
