import { Wallet } from '@rainbow-me/rainbowkit'
import { CreateConnectorFn, createConnector } from 'wagmi';
import {
  CoinbaseWalletParameters,
  coinbaseWallet as coinbaseConnector,
} from 'wagmi/connectors';

export interface CoinbaseWalletOptions {
  appName: string;
  appIcon?: string;
}

interface CoinbaseWallet {
  (params: CoinbaseWalletOptions): Wallet;
  preference?: CoinbaseWalletParameters<'4'>['preference'];
}

export const coinbaseSmartWallet: CoinbaseWallet = ({ appName, appIcon }) => {

  return {
    id: 'coinbase-smart',
    name: 'Coinbase Smart Wallet',
    shortName: 'Smart Wallet',
    // rdns: 'com.coinbase.wallet',
    iconUrl: async () => (await import('./coinbaseWallet.svg')).default,
    iconAccent: '#2c5ff6',
    iconBackground: '#2c5ff6',
    installed: true,
    createConnector: (walletDetails) => {
      const connector: CreateConnectorFn = coinbaseConnector({
        appName,
        appLogoUrl: appIcon,
        preference: coinbaseSmartWallet.preference,
      });

      return createConnector((config) => ({
        ...connector(config),
        ...walletDetails,
      }));
    },
  };
};

coinbaseSmartWallet.preference = 'smartWalletOnly'
