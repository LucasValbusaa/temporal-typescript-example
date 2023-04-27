# Temporal Example With Typescript

This is a simple example of how to use the temporal, in this example I simulated a coffee payment transaction

If you want to know more about the storm I made an [Article](https://medium.com/@lucasvalbusagit/temporal-o-poder-do-workflow-81c2c3390d97) about it

Before starting you need to have the temporal server running

### Running this sample

- To init run `npm install` to install all necessary packages.
- `npm run start.watch` to start the Worker.
- In another shell, `npm run workflow` to run the Workflow Client.
- In another shell, `npx ts-node src/make-coffee-request.ts wf-id=your-workflow-id` to run the Signal.
