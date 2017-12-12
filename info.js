const { dependencies, endpoints, environment, expressions, imports, schema } = program;

program.name = 'nanopool';

expressions
  .add('url', '^https://eth.nanopool.org/account/.*$')

schema.type('Root')
  .computed('account', 'Account')
    .param('address', 'String')

schema.type('Account')
  .field('balance', 'Float')
  .field('hashrate', 'Float')
