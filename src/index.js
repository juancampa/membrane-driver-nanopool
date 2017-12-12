import { root } from './schema';
import * as client from './client';
import { parse as parseUrl } from 'url';

export const parse = ({ name, value }) => {
  switch (name) {
    case 'url': {
      const { pathname: path } = parseUrl(value, true);
      const parts = path.split('/');
      if (parts.length >= 3) {
        return root.account({ name: parts[2] });
      }
      break;
    }
  }
}

export const Root = {
  async account({ args }) {
    const result = await client.get(`/balance_hashrate/${args.address}`);
    console.log('RESULT', result);
    if (!result.status) {
      return null;
    }
    return result.data;
  },
}

