import '@rainbow-me/rainbowkit/styles.css'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'

import { wagmiConfig } from './getChainsConfig'

const queryClient = new QueryClient()

const RainbowContextApp = ({ children }: { children: ReactNode }) => {

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            modalSize="compact"
            showRecentTransactions
          >
            {children}
          </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default RainbowContextApp
