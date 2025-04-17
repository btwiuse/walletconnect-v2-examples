/**
 * Types
 */
export type TPolkadotChain = keyof typeof POLKADOT_MAINNET_CHAINS

/**
 * Chains
 */
export const POLKADOT_MAINNET_CHAINS = {
  'polkadot:fe1b4c55fd4d668101126434206571a7': {
    chainId: 'fe1b4c55fd4d668101126434206571a7',
    name: 'Vara',
    logo: '/chain-logos/vara.png',
    rgb: '230, 1, 122',
    rpc: '',
    namespace: 'polkadot'
  },
  'polkadot:91b171bb158e2d3848fa23a9f1c25182': {
    chainId: '91b171bb158e2d3848fa23a9f1c25182',
    name: 'Polkadot',
    logo: '/chain-logos/polkadot.svg',
    rgb: '230, 1, 122',
    rpc: '',
    namespace: 'polkadot'
  }
}

export const POLKADOT_TEST_CHAINS = {
  'polkadot:525639f713f397dcf839bd022cd821f3': {
    chainId: '525639f713f397dcf839bd022cd821f3',
    name: 'Vara Testnet',
    logo: '/chain-logos/vara-testnet.png',
    rgb: '218, 104, 167',
    rpc: '',
    namespace: 'polkadot'
  },
  'polkadot:e143f23803ac50e8f6f8e62695d1ce9e': {
    chainId: 'e143f23803ac50e8f6f8e62695d1ce9e',
    name: 'Polkadot Westend',
    logo: '/chain-logos/westend.svg',
    rgb: '218, 104, 167',
    rpc: '',
    namespace: 'polkadot'
  }
}

export const POLKADOT_CHAINS = { ...POLKADOT_MAINNET_CHAINS, ...POLKADOT_TEST_CHAINS }
/**
 * Methods
 */
export const POLKADOT_SIGNING_METHODS = {
  POLKADOT_SIGN_TRANSACTION: 'polkadot_signTransaction',
  POLKADOT_SIGN_MESSAGE: 'polkadot_signMessage'
}
