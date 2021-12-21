const emoji = require('node-emoji');

export function formatWelcomeMessage() {
  const prefix = `${emoji.get(':dollar:')} `;
  return `${prefix}Welcome to the ${bold(
    "Biscoint Arbitrage Check'n Fix Service",
  )}!`;
}

export function formatHelpMessage() {
  const prefix = emoji.get(':bulb:');
  return `${prefix}${bold('Available commands:')}

  - /bak_start nothing really useful
  - /bak_enable enable the service
  - /bak_disable disable the service
  - /bak_config get the service config
  - /bak_ping pong back
  - /bak_help show this message`;
}

export function formatServiceEnabledMessage() {
  const message = 'Service enabled';
  return formatGeneralInfoMessage(message);
}

export function formatServiceDisabledMessage() {
  const message = 'Service disabled';
  return formatGeneralInfoMessage(message);
}

export function formatPingMessage() {
  const message = 'Pong';
  return formatGeneralInfoMessage(message);
}

export function formatGeneralInfoMessage(message: string) {
  const prefix = emoji.get(':grey_exclamation:');
  return `${prefix}${message}`;
}

function bold(text: string) {
  return `<b>${text}</b>`;
}
