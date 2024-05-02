This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Connect Database

The application will work without any database. We can view the generated form result using the `Preview` button. However, you can connect the database to create a sharable the form. Use the content from `.env.example` and create an `env.local` file and add the DB String.

Now you can try out the `Save and Share` button on the form generator section. This will redirect to a new form which can be shared with others.
