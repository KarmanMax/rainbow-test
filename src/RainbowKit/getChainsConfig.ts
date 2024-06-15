// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { injectedWallet, coinbaseWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'
import { createConfig, http } from 'wagmi'
import { optimism } from 'wagmi/chains'

const appName = 'ExtraX'
const projectId = 'ae9bc6c16bf3d9121367f023f740150a' // Project ID of WalletConnect Cloud

;(coinbaseWallet as any).preference = 'smartWalletOnly'

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [injectedWallet, coinbaseWallet, walletConnectWallet],
    },
  ],
  {
    appName,
    projectId,
  },
)

export const wagmiConfig = createConfig({
  connectors,
  chains: [optimism] as any,
  transports: {
    [optimism.id]: http(
      'https://mainnet.optimism.io',
    ),
  },
})
