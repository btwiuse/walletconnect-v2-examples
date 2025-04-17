import { createOrRestoreEIP155Wallet } from '@/utils/EIP155WalletUtil'
import {
  createOrRestoreBiconomySmartAccount,
  createOrRestoreKernelSmartAccount,
  createOrRestoreSafeSmartAccount,
  removeSmartAccount
} from '@/utils/SmartAccountUtil'
import { Verify, SessionTypes } from '@walletconnect/types'
import { proxy } from 'valtio'

const TEST_NETS_ENABLED_KEY = 'TEST_NETS'
const CA_ENABLED_KEY = 'CHAIN_ABSTRACTION'
const SMART_ACCOUNTS_ENABLED_KEY = 'SMART_ACCOUNTS'
const ZERO_DEV_SMART_ACCOUNTS_ENABLED_KEY = 'ZERO_DEV_SMART_ACCOUNTS'
const SAFE_SMART_ACCOUNTS_ENABLED_KEY = 'SAFE_SMART_ACCOUNTS'
const BICONOMY_SMART_ACCOUNTS_ENABLED_KEY = 'BICONOMY_SMART_ACCOUNTS'
const MODULE_MANAGEMENT_ENABLED_KEY = 'MODULE_MANAGEMENT'
const EIP155_ENABLED_KEY = 'EIP155_ENABLED'
const POLKADOT_ENABLED_KEY = 'POLKADOT_ENABLED'
const SOLANA_ENABLED_KEY = 'SOLANA_ENABLED'
const NEAR_ENABLED_KEY = 'NEAR_ENABLED'
const COSMOS_ENABLED_KEY = 'COSMOS_ENABLED'
const MULTIVERSX_ENABLED_KEY = 'MULTIVERSX_ENABLED'
const TRON_ENABLED_KEY = 'TRON_ENABLED'
const TEZOS_ENABLED_KEY = 'TEZOS_ENABLED'
const KADENA_ENABLED_KEY = 'KADENA_ENABLED'
const BIP122_ENABLED_KEY = 'BIP122_ENABLED'

/**
 * Types
 */
interface State {
  testNets: boolean
  account: number
  eip155Address: string
  cosmosAddress: string
  solanaAddress: string
  polkadotAddress: string
  nearAddress: string
  multiversxAddress: string
  tronAddress: string
  tezosAddress: string
  kadenaAddress: string
  bip122Address: string
  kernelSmartAccountAddress: string
  safeSmartAccountAddress: string
  biconomySmartAccountAddress: string
  relayerRegionURL: string
  activeChainId: string
  currentRequestVerifyContext?: Verify.Context
  sessions: SessionTypes.Struct[]
  smartAccountSponsorshipEnabled: boolean
  smartAccountEnabled: boolean
  kernelSmartAccountEnabled: boolean
  safeSmartAccountEnabled: boolean
  biconomySmartAccountEnabled: boolean
  moduleManagementEnabled: boolean
  chainAbstractionEnabled: boolean
  eip155Enabled: boolean
  polkadotEnabled: boolean
  solanaEnabled: boolean
  nearEnabled: boolean
  cosmosEnabled: boolean
  multiversxEnabled: boolean
  tronEnabled: boolean
  tezosEnabled: boolean
  kadenaEnabled: boolean
  bip122Enabled: boolean
}

/**
 * State
 */
const state = proxy<State>({
  testNets:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem(TEST_NETS_ENABLED_KEY))
      : true,
  account: 0,
  activeChainId: '1',
  eip155Address: '',
  cosmosAddress: '',
  solanaAddress: '',
  polkadotAddress: '',
  nearAddress: '',
  multiversxAddress: '',
  tronAddress: '',
  tezosAddress: '',
  kadenaAddress: '',
  bip122Address: '',
  kernelSmartAccountAddress: '',
  safeSmartAccountAddress: '',
  biconomySmartAccountAddress: '',
  relayerRegionURL: '',
  sessions: [],
  smartAccountSponsorshipEnabled: false,
  smartAccountEnabled:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem(SMART_ACCOUNTS_ENABLED_KEY))
      : false,
  kernelSmartAccountEnabled:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem(ZERO_DEV_SMART_ACCOUNTS_ENABLED_KEY))
      : false,
  safeSmartAccountEnabled:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem(SAFE_SMART_ACCOUNTS_ENABLED_KEY))
      : false,
  biconomySmartAccountEnabled:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem(BICONOMY_SMART_ACCOUNTS_ENABLED_KEY))
      : false,
  moduleManagementEnabled:
    typeof localStorage !== 'undefined'
      ? Boolean(localStorage.getItem(MODULE_MANAGEMENT_ENABLED_KEY))
      : false,
  chainAbstractionEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(CA_ENABLED_KEY)) : false,
  eip155Enabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(EIP155_ENABLED_KEY)) : true,
  polkadotEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(POLKADOT_ENABLED_KEY)) : true,
  solanaEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(SOLANA_ENABLED_KEY)) : true,
  nearEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(NEAR_ENABLED_KEY)) : true,
  cosmosEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(COSMOS_ENABLED_KEY)) : true,
  multiversxEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(MULTIVERSX_ENABLED_KEY)) : true,
  tronEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(TRON_ENABLED_KEY)) : true,
  tezosEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(TEZOS_ENABLED_KEY)) : true,
  kadenaEnabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(KADENA_ENABLED_KEY)) : true,
  bip122Enabled:
    typeof localStorage !== 'undefined' ? Boolean(localStorage.getItem(BIP122_ENABLED_KEY)) : true
})

/**
 * Store / Actions
 */
const SettingsStore = {
  state,

  setAccount(value: number) {
    state.account = value
  },

  setEIP155Address(eip155Address: string) {
    state.eip155Address = eip155Address
  },

  setCosmosAddress(cosmosAddresses: string) {
    state.cosmosAddress = cosmosAddresses
  },

  setSolanaAddress(solanaAddress: string) {
    state.solanaAddress = solanaAddress
  },

  setPolkadotAddress(polkadotAddress: string) {
    state.polkadotAddress = polkadotAddress
  },
  setNearAddress(nearAddress: string) {
    state.nearAddress = nearAddress
  },
  setKadenaAddress(kadenaAddress: string) {
    state.kadenaAddress = kadenaAddress
  },
  setbip122Address(bip122Address: string) {
    state.bip122Address = bip122Address
  },
  setRelayerRegionURL(relayerRegionURL: string) {
    state.relayerRegionURL = relayerRegionURL
  },

  setMultiversxAddress(multiversxAddress: string) {
    state.multiversxAddress = multiversxAddress
  },

  setTronAddress(tronAddress: string) {
    state.tronAddress = tronAddress
  },

  setTezosAddress(tezosAddress: string) {
    state.tezosAddress = tezosAddress
  },

  setKernelSmartAccountAddress(smartAccountAddress: string) {
    state.kernelSmartAccountAddress = smartAccountAddress
  },
  setSafeSmartAccountAddress(smartAccountAddress: string) {
    state.safeSmartAccountAddress = smartAccountAddress
  },
  setBiconomySmartAccountAddress(smartAccountAddress: string) {
    state.biconomySmartAccountAddress = smartAccountAddress
  },

  setActiveChainId(value: string) {
    state.activeChainId = value
  },

  setCurrentRequestVerifyContext(context: Verify.Context) {
    state.currentRequestVerifyContext = context
  },
  setSessions(sessions: SessionTypes.Struct[]) {
    state.sessions = sessions
  },

  toggleTestNets() {
    state.testNets = !state.testNets
    if (state.testNets) {
      state.smartAccountSponsorshipEnabled = true
      localStorage.setItem(TEST_NETS_ENABLED_KEY, 'YES')
    } else {
      state.smartAccountSponsorshipEnabled = false
      localStorage.removeItem(TEST_NETS_ENABLED_KEY)
    }
  },

  toggleSmartAccountSponsorship() {
    if (!state.testNets) return
    state.smartAccountSponsorshipEnabled = !state.smartAccountSponsorshipEnabled
  },

  toggleSmartAccountEnabled() {
    state.smartAccountEnabled = !state.smartAccountEnabled
    if (state.smartAccountEnabled) {
      localStorage.setItem(SMART_ACCOUNTS_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(SMART_ACCOUNTS_ENABLED_KEY)
    }
  },
  toggleModuleManagement() {
    state.moduleManagementEnabled = !state.moduleManagementEnabled
    if (state.moduleManagementEnabled) {
      localStorage.setItem(MODULE_MANAGEMENT_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(MODULE_MANAGEMENT_ENABLED_KEY)
    }
  },

  toggleChainAbstractionEnabled() {
    state.chainAbstractionEnabled = !state.chainAbstractionEnabled
    if (state.chainAbstractionEnabled) {
      localStorage.setItem(CA_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(CA_ENABLED_KEY)
    }
  },

  async toggleKernelSmartAccountsEnabled() {
    state.kernelSmartAccountEnabled = !state.kernelSmartAccountEnabled
    if (state.kernelSmartAccountEnabled) {
      const { eip155Addresses, eip155Wallets } = createOrRestoreEIP155Wallet()
      const { kernelSmartAccountAddress } = await createOrRestoreKernelSmartAccount(
        eip155Wallets[eip155Addresses[0]].getPrivateKey()
      )
      SettingsStore.setKernelSmartAccountAddress(kernelSmartAccountAddress)
      localStorage.setItem(ZERO_DEV_SMART_ACCOUNTS_ENABLED_KEY, 'YES')
    } else {
      removeSmartAccount(SettingsStore.state.kernelSmartAccountAddress)
      SettingsStore.setKernelSmartAccountAddress('')
      state.moduleManagementEnabled = false
      localStorage.removeItem(MODULE_MANAGEMENT_ENABLED_KEY)
      localStorage.removeItem(ZERO_DEV_SMART_ACCOUNTS_ENABLED_KEY)
    }
  },

  async toggleSafeSmartAccountsEnabled() {
    state.safeSmartAccountEnabled = !state.safeSmartAccountEnabled
    if (state.safeSmartAccountEnabled) {
      const { eip155Addresses, eip155Wallets } = createOrRestoreEIP155Wallet()
      const { safeSmartAccountAddress } = await createOrRestoreSafeSmartAccount(
        eip155Wallets[eip155Addresses[0]].getPrivateKey()
      )
      SettingsStore.setSafeSmartAccountAddress(safeSmartAccountAddress)
      localStorage.setItem(SAFE_SMART_ACCOUNTS_ENABLED_KEY, 'YES')
    } else {
      removeSmartAccount(SettingsStore.state.safeSmartAccountAddress)
      SettingsStore.setSafeSmartAccountAddress('')
      state.moduleManagementEnabled = false
      localStorage.removeItem(MODULE_MANAGEMENT_ENABLED_KEY)
      localStorage.removeItem(SAFE_SMART_ACCOUNTS_ENABLED_KEY)
    }
  },

  async toggleBiconomySmartAccountsEnabled() {
    state.biconomySmartAccountEnabled = !state.biconomySmartAccountEnabled
    if (state.biconomySmartAccountEnabled) {
      const { eip155Addresses, eip155Wallets } = createOrRestoreEIP155Wallet()
      const { biconomySmartAccountAddress } = await createOrRestoreBiconomySmartAccount(
        eip155Wallets[eip155Addresses[0]].getPrivateKey()
      )
      SettingsStore.setBiconomySmartAccountAddress(biconomySmartAccountAddress)
      localStorage.setItem(BICONOMY_SMART_ACCOUNTS_ENABLED_KEY, 'YES')
    } else {
      removeSmartAccount(SettingsStore.state.biconomySmartAccountAddress)
      SettingsStore.setBiconomySmartAccountAddress('')
      state.moduleManagementEnabled = false
      localStorage.removeItem(MODULE_MANAGEMENT_ENABLED_KEY)
      localStorage.removeItem(BICONOMY_SMART_ACCOUNTS_ENABLED_KEY)
    }
  },

  toggleEip155Enabled() {
    state.eip155Enabled = !state.eip155Enabled
    if (state.eip155Enabled) {
      localStorage.setItem(EIP155_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(EIP155_ENABLED_KEY)
    }
  },

  togglePolkadotEnabled() {
    state.polkadotEnabled = !state.polkadotEnabled
    if (state.polkadotEnabled) {
      localStorage.setItem(POLKADOT_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(POLKADOT_ENABLED_KEY)
    }
  },

  toggleSolanaEnabled() {
    state.solanaEnabled = !state.solanaEnabled
    if (state.solanaEnabled) {
      localStorage.setItem(SOLANA_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(SOLANA_ENABLED_KEY)
    }
  },

  toggleNearEnabled() {
    state.nearEnabled = !state.nearEnabled
    if (state.nearEnabled) {
      localStorage.setItem(NEAR_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(NEAR_ENABLED_KEY)
    }
  },

  toggleCosmosEnabled() {
    state.cosmosEnabled = !state.cosmosEnabled
    if (state.cosmosEnabled) {
      localStorage.setItem(COSMOS_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(COSMOS_ENABLED_KEY)
    }
  },

  toggleMultiversxEnabled() {
    state.multiversxEnabled = !state.multiversxEnabled
    if (state.multiversxEnabled) {
      localStorage.setItem(MULTIVERSX_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(MULTIVERSX_ENABLED_KEY)
    }
  },

  toggleTronEnabled() {
    state.tronEnabled = !state.tronEnabled
    if (state.tronEnabled) {
      localStorage.setItem(TRON_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(TRON_ENABLED_KEY)
    }
  },

  toggleTezosEnabled() {
    state.tezosEnabled = !state.tezosEnabled
    if (state.tezosEnabled) {
      localStorage.setItem(TEZOS_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(TEZOS_ENABLED_KEY)
    }
  },

  toggleKadenaEnabled() {
    state.kadenaEnabled = !state.kadenaEnabled
    if (state.kadenaEnabled) {
      localStorage.setItem(KADENA_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(KADENA_ENABLED_KEY)
    }
  },

  toggleBip122Enabled() {
    state.bip122Enabled = !state.bip122Enabled
    if (state.bip122Enabled) {
      localStorage.setItem(BIP122_ENABLED_KEY, 'YES')
    } else {
      localStorage.removeItem(BIP122_ENABLED_KEY)
    }
  }
}

export default SettingsStore
