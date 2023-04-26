import { Connection, WorkflowClient } from '@temporalio/client';
import { makeCoffeeWorkflow } from './workflows';

async function run() {
  const connection = await Connection.connect();
  const client = new WorkflowClient({ connection });

  const handle = await client.start(makeCoffeeWorkflow, {
    args: ['60s'],
    taskQueue: 'coffee-maker-task-queue',
    workflowId: 'workflow-' + Math.floor(Math.random() * 1000),
  });
  console.log(`Started workflow ${handle.workflowId}`);

  console.log(await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
