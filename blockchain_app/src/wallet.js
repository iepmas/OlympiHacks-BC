import { WalletHandler, IChainConfig } from "jackal.js";

async function main () {

    const walletConfig =
    {
    signerChain: 'jackal-1',
    enabledChains: ['jackal-1'],
    queryAddr: 'https://kdb -grpc.jackalprotocol.com',
    txAddr: 'https://kdb-rpc.jackalprotocol.com',
    chainConfig: IChainConfig
    }

    const wallet = await WalletHandler.trackWallet(walletConfig);

    const chainConfig =
    {
        chainId: 'jackal-1',
        chainName: 'Jackal Mainnet',
        rpc: 'https://rpc.jackalprotocol.com',
        rest: 'https://api.jackalprotocol.com',
        bip44: {
        coinType: 118
        },
        coinType: 118,
        stakeCurrency: {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
        },
        bech32Config: {
        bech32PrefixAccAddr: 'jkl',
        bech32PrefixAccPub: 'jklpub',
        bech32PrefixValAddr: 'jklvaloper',
        bech32PrefixValPub: 'jklvaloperpub',
        bech32PrefixConsAddr: 'jklvalcons',
        bech32PrefixConsPub: 'jklvalconspub'
        },
        currencies: [
        {
            coinDenom: 'JKL',
            coinMinimalDenom: 'ujkl',
            coinDecimals: 6
        }
        ],
        feeCurrencies: [
        {
            coinDenom: 'JKL',
            coinMinimalDenom: 'ujkl',
            coinDecimals: 6,
            gasPriceStep: {
            low: 0.002,
            average: 0.002,
            high: 0.02
            }
        }
        ],
        features: []
    }

}

main() 