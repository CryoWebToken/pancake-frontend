import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration, no hassle.'),
  bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('CAKE token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('PancakeSwap makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Cryogen is our first fully vetted, audited & doxxed project to list here'),
  bodyText: t(
    'Cryogen has MANY use-cases already deployed, a strong team & community. Earn $Cake on all transactions just by holding 200bn or more Cryogen. You can also Stake Cryogen to earn even more.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x6A73A99fAC60c265863307c5A40abf32F0a040aC',
    text: t('Buy Cryogen'),
    external: false,
  },
  secondaryButton: {
    to: 'https://cryogen.life',
    text: t('Learn More'),
    external: true,
  },

  images: {
    path: 'https://cryogen.life/images/',
    attributes: [{ src: '', alt: t('Cryogen') }],
  },
})
