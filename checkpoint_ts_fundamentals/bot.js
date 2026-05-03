const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.command('/hello', async ({ command, ack, respond }) => {
  await ack();
  await respond(`Hello <@${command.user_id}>! 👋`);
});

app.message(async ({ message }) => {
  console.log('Message received:', message);
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();
