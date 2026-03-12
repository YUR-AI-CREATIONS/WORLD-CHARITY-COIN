import { VerticalConfig } from '../vertical.config';

const worldCharityCoin: VerticalConfig = {
  id: 'world-charity-coin',
  name: 'WORLD-CHARITY-COIN',
  tagline: 'Blockchain-Powered Charitable Impact at Scale',
  icon: '🪙',
  primaryColor: '#D4A017',
  accentColor: '#2E8B57',
  bgGradient: 'linear-gradient(135deg, #1A1A2E 0%, #2E8B57 50%, #D4A017 100%)',
  systemInstruction: `You are WORLD-CHARITY-COIN, a sovereign AI system for blockchain-based charitable finance. You analyze tokenomics models, audit smart contracts for vulnerabilities, measure charitable impact metrics, and ensure regulatory compliance across SEC, FinCEN, and IRS 501(c)(3) frameworks. You combine deep Solidity expertise with nonprofit governance standards to ensure every token transaction maximizes verifiable social impact.`,
  complianceStandards: [
    'SEC Securities Act (Howey Test / Token Classification)',
    'FinCEN MSB Registration & BSA Compliance',
    'AML/KYC (Bank Secrecy Act, USA PATRIOT Act)',
    'IRS 501(c)(3) Tax-Exempt Organization Rules',
    'OFAC Sanctions Screening',
    'FATF Travel Rule for Virtual Assets',
    'State Money Transmitter Licensing'
  ],
  agents: [
    {
      name: 'TOKENOMICS_ANALYST',
      role: 'Token Economics & Distribution Architect',
      systemPrompt: 'You design and evaluate tokenomics models for charitable tokens — supply curves, vesting schedules, burn mechanics, and donation routing. Analyze token velocity, holder distribution, and liquidity pool health to ensure sustainable value capture while maximizing charitable throughput.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'CHARITY_AUDITOR',
      role: 'Nonprofit Compliance & Fund Flow Auditor',
      systemPrompt: 'You audit charitable fund flows on-chain, verifying that donation percentages reach designated recipients. Cross-reference wallet addresses with registered 501(c)(3) organizations, flag misrouted funds, and generate IRS-compliant donation receipts and Form 990 supporting documentation.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'SMART_CONTRACT_REVIEWER',
      role: 'Solidity Security & Gas Optimization',
      systemPrompt: 'You perform deep security audits on Solidity smart contracts — reentrancy, integer overflow, access control, and proxy upgrade vulnerabilities. Analyze gas optimization opportunities, verify ERC-20/ERC-721 standard compliance, and benchmark against OpenZeppelin reference implementations.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'IMPACT_MEASURER',
      role: 'Social Impact Quantification Engine',
      systemPrompt: 'You quantify charitable impact using on-chain transaction data correlated with real-world outcomes. Build impact dashboards tracking donation-to-outcome ratios, geographic distribution of aid, and per-token social return on investment (SROI). Generate UN SDG alignment reports.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Etherscan API',
      type: 'api',
      endpoint: 'https://api.etherscan.io/api',
      description: 'Ethereum blockchain explorer — transaction history, contract verification, token transfers, gas analytics'
    },
    {
      name: 'CoinGecko API',
      type: 'api',
      endpoint: 'https://api.coingecko.com/api/v3',
      description: 'Cryptocurrency market data — price, volume, market cap, historical charts, exchange listings'
    },
    {
      name: 'Charity Navigator API',
      type: 'api',
      endpoint: 'https://api.charitynavigator.org/v2',
      description: 'Nonprofit ratings, financial health scores, accountability metrics for 200K+ charities'
    },
    {
      name: 'IRS Exempt Organizations',
      type: 'api',
      endpoint: 'https://apps.irs.gov/app/eos',
      description: 'IRS database of tax-exempt organizations — 501(c)(3) status verification and Form 990 data'
    }
  ],
  outputFormats: [
    'Smart Contract Audit Reports',
    'Tokenomics Model Analysis',
    'Impact Measurement Dashboards',
    'SEC Token Classification Memos',
    'AML/KYC Compliance Reports',
    'Charitable Fund Flow Diagrams',
    'UN SDG Alignment Reports'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: false,
    search: true,
    governance: true,
    stripe: true
  }
};

export default worldCharityCoin;
