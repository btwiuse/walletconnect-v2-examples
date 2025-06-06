import PageHeader from '@/components/PageHeader'
import RelayRegionPicker from '@/components/RelayRegionPicker'
import SettingsStore from '@/store/SettingsStore'
import { cosmosWallets } from '@/utils/CosmosWalletUtil'
import { eip155Wallets } from '@/utils/EIP155WalletUtil'
import { solanaWallets } from '@/utils/SolanaWalletUtil'
import { multiversxWallets } from '@/utils/MultiversxWalletUtil'
import { tronWallets } from '@/utils/TronWalletUtil'
import { kadenaWallets } from '@/utils/KadenaWalletUtil'
import { Card, Col, Divider, Row, Switch, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import packageJSON from '../../package.json'
import { tezosWallets } from '@/utils/TezosWalletUtil'

export default function SettingsPage() {
  const {
    testNets,
    smartAccountSponsorshipEnabled,
    eip155Address,
    cosmosAddress,
    solanaAddress,
    multiversxAddress,
    tronAddress,
    tezosAddress,
    kadenaAddress,
    smartAccountEnabled,
    kernelSmartAccountEnabled,
    safeSmartAccountEnabled,
    biconomySmartAccountEnabled,
    moduleManagementEnabled,
    chainAbstractionEnabled,
    eip155Enabled,
    polkadotEnabled,
    solanaEnabled,
    nearEnabled,
    cosmosEnabled,
    multiversxEnabled,
    tronEnabled,
    tezosEnabled,
    kadenaEnabled,
    bip122Enabled
  } = useSnapshot(SettingsStore.state)

  return (
    <Fragment>
      <PageHeader title="Settings" />

      <Text h4 css={{ marginBottom: '$5' }}>
        Packages
      </Text>
      <Row justify="space-between" align="center">
        <Text color="$gray400">@reown/walletkit</Text>
        <Text color="$gray400">{packageJSON.dependencies['@reown/walletkit']}</Text>
      </Row>

      <Divider y={2} />

      <Text h4 css={{ marginBottom: '$5' }}>
        Testnets
      </Text>
      <Row justify="space-between" align="center">
        <Switch
          checked={testNets}
          onChange={SettingsStore.toggleTestNets}
          data-testid="settings-toggle-testnets"
        />
        <Text>{testNets ? 'Enabled' : 'Disabled'}</Text>
      </Row>

      <Divider y={2} />

      <Row>
        <Col>
          <Text h4 css={{ marginBottom: '$5' }}>
            Chain Abstraction
          </Text>
          {testNets ? (
            <>
              <Row justify="space-between" align="center">
                <Switch
                  checked={chainAbstractionEnabled}
                  onChange={SettingsStore.toggleChainAbstractionEnabled}
                  data-testid="settings-toggle-chain-abstraction-enabled"
                />
                <Text>{chainAbstractionEnabled ? 'Enabled' : 'Disabled'}</Text>
              </Row>
            </>
          ) : (
            <Text color="$gray400">This feature requires testnets</Text>
          )}
        </Col>
      </Row>

      <Divider y={2} />

      <Row>
        <Col>
          <Text h4 css={{ marginBottom: '$5' }}>
            Smart Accounts
          </Text>
          {testNets ? (
            <>
              <Row justify="space-between" align="center">
                <Switch
                  checked={smartAccountEnabled}
                  onChange={SettingsStore.toggleSmartAccountEnabled}
                  data-testid="settings-toggle-smart-account-enabled"
                />
                <Text>{smartAccountEnabled ? 'Enabled' : 'Disabled'}</Text>
              </Row>

              {smartAccountEnabled ? (
                <>
                  <Text h4 css={{ marginBottom: '$5', marginTop: '$5' }}>
                    ZeroDev Smart Account
                  </Text>
                  <Row justify="space-between" align="center">
                    <Switch
                      checked={kernelSmartAccountEnabled}
                      onChange={SettingsStore.toggleKernelSmartAccountsEnabled}
                      data-testid="settings-toggle-smart-account-sponsorship"
                    />
                    <Text>{kernelSmartAccountEnabled ? 'Enabled' : 'Disabled'}</Text>
                  </Row>

                  <Text h4 css={{ marginBottom: '$5', marginTop: '$5' }}>
                    Safe Smart Account
                  </Text>
                  <Row justify="space-between" align="center">
                    <Switch
                      checked={safeSmartAccountEnabled}
                      onChange={SettingsStore.toggleSafeSmartAccountsEnabled}
                      data-testid="settings-toggle-smart-account-sponsorship"
                    />
                    <Text>{safeSmartAccountEnabled ? 'Enabled' : 'Disabled'}</Text>
                  </Row>

                  <Text h4 css={{ marginBottom: '$5', marginTop: '$5' }}>
                    Biconomy Smart Account
                  </Text>
                  <Row justify="space-between" align="center">
                    <Switch
                      checked={biconomySmartAccountEnabled}
                      onChange={SettingsStore.toggleBiconomySmartAccountsEnabled}
                      data-testid="settings-toggle-smart-account-sponsorship"
                    />
                    <Text>{biconomySmartAccountEnabled ? 'Enabled' : 'Disabled'}</Text>
                  </Row>

                  <Text h4 css={{ marginBottom: '$5', marginTop: '$5' }}>
                    Sponsorship (Pimlico)
                  </Text>
                  <Row justify="space-between" align="center">
                    <Switch
                      checked={smartAccountSponsorshipEnabled}
                      onChange={SettingsStore.toggleSmartAccountSponsorship}
                      data-testid="settings-toggle-smart-account-sponsorship"
                    />
                    <Text>{smartAccountSponsorshipEnabled ? 'Enabled' : 'Disabled'}</Text>
                  </Row>
                  <Divider y={2} />
                  <Text h4 css={{ marginBottom: '$5', cursor: 'pointer' }}>
                    Module Management
                  </Text>
                  <Row justify="space-between" align="center">
                    <Switch
                      disabled={
                        !kernelSmartAccountEnabled &&
                        !safeSmartAccountEnabled &&
                        !biconomySmartAccountEnabled
                      }
                      checked={moduleManagementEnabled}
                      onChange={SettingsStore.toggleModuleManagement}
                      data-testid="settings-toggle-module-management"
                    />
                    <Text>{moduleManagementEnabled ? 'Enabled' : 'Disabled'}</Text>
                  </Row>
                </>
              ) : null}
            </>
          ) : (
            <Text color="$gray400">This feature requires testnets</Text>
          )}
        </Col>
      </Row>

      <Divider y={2} />

      <Row>
        <Col>
          <Text h4 css={{ marginBottom: '$5' }}>
            Address Families
          </Text>
          <Row justify="space-between" align="center">
            <Text>EIP155</Text>
            <Switch
              checked={eip155Enabled}
              onChange={SettingsStore.toggleEip155Enabled}
              data-testid="settings-toggle-eip155"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>Polkadot</Text>
            <Switch
              checked={polkadotEnabled}
              onChange={SettingsStore.togglePolkadotEnabled}
              data-testid="settings-toggle-polkadot"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>Solana</Text>
            <Switch
              checked={solanaEnabled}
              onChange={SettingsStore.toggleSolanaEnabled}
              data-testid="settings-toggle-solana"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>Near</Text>
            <Switch
              checked={nearEnabled}
              onChange={SettingsStore.toggleNearEnabled}
              data-testid="settings-toggle-near"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>Cosmos</Text>
            <Switch
              checked={cosmosEnabled}
              onChange={SettingsStore.toggleCosmosEnabled}
              data-testid="settings-toggle-cosmos"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>MultiversX</Text>
            <Switch
              checked={multiversxEnabled}
              onChange={SettingsStore.toggleMultiversxEnabled}
              data-testid="settings-toggle-multiversx"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>Tron</Text>
            <Switch
              checked={tronEnabled}
              onChange={SettingsStore.toggleTronEnabled}
              data-testid="settings-toggle-tron"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>Tezos</Text>
            <Switch
              checked={tezosEnabled}
              onChange={SettingsStore.toggleTezosEnabled}
              data-testid="settings-toggle-tezos"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>Kadena</Text>
            <Switch
              checked={kadenaEnabled}
              onChange={SettingsStore.toggleKadenaEnabled}
              data-testid="settings-toggle-kadena"
            />
          </Row>
          <Row justify="space-between" align="center">
            <Text>BIP122</Text>
            <Switch
              checked={bip122Enabled}
              onChange={SettingsStore.toggleBip122Enabled}
              data-testid="settings-toggle-bip122"
            />
          </Row>
        </Col>
      </Row>

      <Divider y={2} />

      <Row justify="space-between" align="center">
        <Text h4 css={{ marginBottom: '$5' }}>
          Relayer Region
        </Text>
        <RelayRegionPicker />
      </Row>

      <Divider y={2} />

      <Text css={{ color: '$yellow500', marginBottom: '$5', textAlign: 'left', padding: 0 }}>
        Warning: mnemonics and secret keys are provided for development purposes only and should not
        be used elsewhere!
      </Text>

      <Text h4 css={{ marginTop: '$5', marginBottom: '$5' }}>
        EIP155 Mnemonic
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '100px' }}>
        <Text css={{ fontFamily: '$mono' }}>{eip155Wallets[eip155Address].getMnemonic()}</Text>
      </Card>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        Cosmos Mnemonic
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '100px' }}>
        <Text css={{ fontFamily: '$mono' }}>{cosmosWallets[cosmosAddress].getMnemonic()}</Text>
      </Card>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        Solana Secret Key
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '215px', wordWrap: 'break-word' }}>
        <Text css={{ fontFamily: '$mono' }}>{solanaWallets[solanaAddress].getSecretKey()}</Text>
      </Card>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        MultiversX Mnemonic
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '215px', wordWrap: 'break-word' }}>
        <Text css={{ fontFamily: '$mono' }}>
          {multiversxWallets[multiversxAddress].getMnemonic()}
        </Text>
      </Card>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        Tron Private Key
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '100px', wordWrap: 'break-word' }}>
        <Text css={{ fontFamily: '$mono' }}>{tronWallets[tronAddress].privateKey}</Text>
      </Card>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        Tezos Mnemonic
      </Text>
      <Card bordered borderWeight="light" css={{ minHeight: '100px', wordWrap: 'break-word' }}>
        <Text css={{ fontFamily: '$mono' }}>{tezosWallets[tezosAddress].getMnemonic()}</Text>
      </Card>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}>
        Kadena Secret Key
      </Text>
      <Card bordered borderWeight="light" css={{ wordWrap: 'break-word' }}>
        <Text css={{ fontFamily: '$mono' }}>{kadenaWallets[kadenaAddress].getSecretKey()}</Text>
      </Card>

      <Text h4 css={{ marginTop: '$10', marginBottom: '$5' }}></Text>
    </Fragment>
  )
}
