
import { NetworkType } from '@airgap/beacon-sdk'

const isDevMode = () => true // mode === 'development'

export const networkType = isDevMode() ? NetworkType.ITHACANET : NetworkType.MAINNET
export const rpcUrl = isDevMode() ? 'https://ithacanet.smartpy.io' : 'https://mainnet.smartpy.io'
export const tzktUrl = isDevMode() ? 'https://api.ithacanet.tzkt.io' : 'https://api.mainnet.tzkt.io'

export const administrator = 'tz1X7tJS43rSxf6WsB8hpvJzAHK5aBbedbZv'

export const mainContract = 'KT1EpVpiKWtGvZet8U5FgUuSpCTfurxbDJCH'
export const artefactsContract = 'KT1Tqh475qruSvBp1D4g1cczYvo4R8QyGBL4'
export const missionsContract = 'KT1Di12JcoN9wYJZovQh2TWneUYzBpvTsi8a'
export const charactersContract = 'KT1SDWXTbW94xs6DwAT1DToDebMP5P9xFHo9' //'KT1RcQN5CWMSLzxrX79edAUm7pXoKq58y5zA'
export const rwcoContract = 'KT1TMpKxrxT5D6SdEKo2tnPfPqwUMZNMjZEH'
export const fakeObjktContract = 'KT1DdsNz2soR2SimFveYLFqjytsKAkcMfnMD'
export const randomizerContract = 'KT1X7T7HdtHVawCWNbhP1pUkRKS9eVbX7UMD'
export const treasuresContract = 'KT1XYaQoFWmM7zxJJ52hGfHFXSWzHExvGAqf'

export const txConfirmations = 2
export const txConfirmationTimeout = txConfirmations * 2 * 60

export const ipfsGateway = 'https://ipfs.io/ipfs/'
export const infuraUrl = 'https://ipfs.infura.io:5001'

export const artefactTokenTags = ''
export const characterTokenTags = ''