
import { TezosToolkit } from '@taquito/taquito'
import { networkType, rpcUrl } from '~/config'
import {
  BeaconWallet,
} from '@taquito/beacon-wallet'

// create the wallet provider as a singleton
class WalletProvider {
  static _instance: any; 
  tezos: TezosToolkit;
  wallet: any;
  client: any;
  address: any;
  constructor() {
    if (WalletProvider._instance) {
      return WalletProvider._instance
    }
    WalletProvider._instance = this;

    this.tezos = new TezosToolkit(rpcUrl)
    if (!this.wallet) {
      this.wallet = new BeaconWallet({
        name: 'beacon-wallet',
        preferredNetwork: networkType,
      })
    }
    //this.client = this.wallet.client
    //this.address = this.wallet.getPKH()
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: WalletProvider,
      cunt: () => {
        
      }
    }
  }
})