import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';
import { Currency, Money } from '@utils/civet/finance';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.redirect('/api');
});

router.get('/api', (ctx) => {
  const ten = Money.new(10, Currency.CAD);
  const twenty = Money.new(20, Currency.CAD);
  const result = Money.sum([ten, twenty]);
  console.log(Object.keys(result));
  ctx.response.body = {
    message: `Hello deno-app. You owe me $${result.toString()}.`,
  };
  ctx.response.type = 'text/json';
});

const app = new Application();

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? 'https://' : 'http://'}${
      hostname ?? 'localhost'
    }:${port}`
  );
});

app.use(router.routes());
app.use(router.allowedMethods());

await app
  .listen({ port: Number(Deno.env.get('PORT') || 4200) })
  .catch((err) => {
    console.error('Error serving app. Original Error:', err);
  });
