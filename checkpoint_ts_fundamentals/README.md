# Slack Bot Checkpoint

A simple Slack bot built with Node.js and Bolt that responds to `/hello` and logs messages.

## Setup

1. Create a Slack app at https://api.slack.com/apps
2. Add scopes: `chat:write`, `channels:history`
3. Enable Socket Mode and generate an App Token
4. Copy your Bot Token, Signing Secret, and App Token

## Configure

Copy `.env.example` to `.env` and fill in your tokens:

```
cp .env.example .env
```

## Run

```
npm start
```
