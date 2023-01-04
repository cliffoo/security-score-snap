import { OnTransactionHandler } from '@metamask/snap-types';
import * as snapsUi from '@metamask/snaps-ui';

/**
 * Get a message from the origin. For demonstration purposes only.
 *
 * @param originString - The origin string.
 * @returns A message based on the origin.
 */
export const getMessage = (originString: string): string =>
  `Hello, ${originString}!`;

/**
 * @param args - The request handler args as object.
 * @param args.transaction - The transaction object.
 * @returns The transaction insights.
 */
export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  // Omitting checking if `transaction.to` is indeed a contract

  return {
    insights: {
      'Target address': transaction.to,
      'Target security score': 'Low - Caution!',
    },
  };
};
