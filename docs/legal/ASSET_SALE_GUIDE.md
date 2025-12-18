# Asset Sale Guide for CompileStrength

**Owner**: Eliaz Bobadilla (individual owner) **Legal Structure**:
Individual/Sole Proprietorship **Operating Brand**: "Bobadilla Tech" (GitHub
organization, NOT included in sale)

---

## Pre-Sale Preparation Checklist

### 1. Financial Documentation (Critical)

- [ ] **Revenue Reports**: 6-12 months of MRR data from LemonSqueezy
- [ ] **Subscription Metrics**: Active users, churn rate, LTV, CAC
- [ ] **P&L Statements**: Profit and loss for the business period
- [ ] **Expense Breakdown**: Hosting (Cloudflare), database (Neon), AI (OpenAI),
      domain, etc.
- [ ] **Tax Records**: All business tax filings
- [ ] **Bank Statements**: Business account statements showing revenue

**SaaS Valuation Formula**: Typically 12-36x monthly profit (not revenue)

- Example: $5,000 MRR with 80% margin = $4,000 profit → $48k-$144k valuation

### 2. Technical Assets Audit

- [ ] **Source Code**: Ensure all code is in private GitHub repo with clean
      commit history
- [ ] **Database**: Export full database schema and anonymized data sample
- [ ] **API Keys**: Document all third-party services and transfer process
- [ ] **Domain Names**: Prepare transfer instructions for compilestrength.com
- [ ] **Infrastructure**: Document Cloudflare Workers, Neon DB, deployment
      process
- [ ] **Documentation**: Ensure ONBOARDING.md, CLAUDE.md, and all docs are
      up-to-date

### 3. Legal & IP Preparation

- [ ] **Ownership Verification**: Confirm Eliaz Bobadilla owns 100%

- [ ] **Business Structure**: Operating as sole proprietor/individual (not LLC
      or corporation)

- [ ] **Contract Review**: Review all service agreements (LemonSqueezy,
      Cloudflare, Neon)

- [ ] **User Agreements**: Ensure ToS and Privacy Policy are implemented on site

- [ ] **No Legal Issues**: Confirm no pending disputes, DMCA claims, or
      violations

- [ ] **Tax Preparation**: Gather Schedule C forms (sole proprietor income) if
      applicable

### 4. Business Assets

- [ ] **Customer List**: Anonymized list of active subscribers (no PII shared
      pre-sale)
- [ ] **Marketing Materials**: Brand assets, logos, social media accounts
- [ ] **Analytics Access**: Google Analytics, PostHog, or other tracking tools
- [ ] **Content**: Blog posts, SEO content, landing pages
- [ ] **Social Proof**: Reviews, testimonials, case studies

### 5. Operational Documentation

- [ ] **Standard Operating Procedures (SOPs)**: How to handle support, billing
      issues
- [ ] **Deployment Guide**: Step-by-step deployment and rollback procedures
- [ ] **Monitoring**: How to check app health, error tracking, uptime
- [ ] **Customer Support Process**: Email templates, common issues, response
      times

---

## Sale Process Steps

### Phase 1: Preparation (1-2 months before listing)

1. **Organize Financials**: Create a clean spreadsheet with all revenue/expenses
2. **Clean Up Code**: Remove any TODOs, dead code, or embarrassing comments
3. **Update Documentation**: Make sure a buyer can run the app without you
4. **Improve Metrics**: Focus on reducing churn, improving conversion

### Phase 2: Listing (When ready to sell)

**Where to List:**

- **MicroAcquire** (microacquire.com) - Best for SaaS under $500k
- **Acquire.com** - Popular marketplace, $50k+ deals
- **Flippa** - Broader marketplace, more tire-kickers
- **Empire Flippers** - More vetted, but higher minimums ($100k+)
- **Private Broker** - Consider for deals over $100k

**Listing Information Needed:**

- Business overview and unique value proposition
- Monthly revenue, profit margins, growth rate
- Tech stack summary (Next.js, Cloudflare, PostgreSQL, etc.)
- Time investment (likely "passive" or "10 hours/month")
- Reason for selling (new projects, cash out, etc.)

### Phase 3: Due Diligence (Buyer's Investigation)

Buyers will request:

1. **Financial Verification**: LemonSqueezy dashboard access, Stripe exports
2. **Analytics Access**: Google Analytics read-only access
3. **Code Review**: GitHub repo access (use a private fork or NDA first)
4. **Database Metrics**: User count, active sessions, data size
5. **Traffic Sources**: Where users come from (organic, paid, referral)
6. **Churn Analysis**: Why users cancel, retention cohorts

**Protect Yourself:**

- Use NDA (Non-Disclosure Agreement) before sharing sensitive data
- Watermark/redact user PII in any screenshots or exports
- Don't share production database credentials

### Phase 4: Negotiation

**Be Prepared to Negotiate:**

- **Price**: Start 10-20% higher than your target ($82k-$90k for $75k target)
- **Terms**: All-cash vs. earnout (partial payment based on future performance)
- **Transition Period**: Buyer may want 30-90 days of support/training
- **Non-Compete**: Expect 1-3 year non-compete in fitness SaaS space

**Red Flags to Watch:**

- Buyer asks for full code access before offer/deposit
- Buyer wants free trial period running the business
- Buyer delays payment or proposes complex earnout structures

### Phase 5: Asset Transfer

**What Gets Transferred:**

1. **Source Code**: Transfer GitHub repo ownership to buyer
2. **Domain**: Transfer compilestrength.com via registrar (Namecheap,
   Cloudflare, etc.)
3. **Infrastructure**: Transfer Cloudflare account or create new project for
   buyer
4. **Database**: Export Neon database, buyer creates new instance
5. **Service Accounts**:
   - LemonSqueezy: Transfer store ownership or buyer creates new account
   - OpenAI API: Buyer uses their own key
   - Better Auth: Buyer re-configures with their domain
6. **Social Media**: Transfer @compilestrength accounts if applicable
7. **Customer List**: Provide subscriber export from database

**Transfer Timeline**: Typically 7-30 days after payment clears

---

## Asset Purchase Agreement (APA) Essentials

Work with a lawyer to draft the APA. Key sections:

### 1. Purchase Price & Payment Terms

- Total purchase price: $[AMOUNT] USD
- Payment method: International wire transfer OR Escrow.com (recommended)
- Currency: USD (buyer covers wire transfer fees)
- Bank fees: Typically $25-$50 for incoming international transfers
- Earnout terms (if applicable): [PERCENTAGE]% based on [METRIC]
- Taxes: Seller responsible for taxes in their jurisdiction

### 2. Assets Included

- All source code, databases, intellectual property
- Domain names (compilestrength.com), trademarks, brand assets
- GitHub repository transfer (repo transferred to buyer's GitHub organization)
- Customer lists and subscriber data (comply with GDPR/CCPA)
- Documentation, SOPs, marketing materials
- CompileStrength brand and trademark

**NOT Included:**

- "Bobadilla Tech" GitHub organization (remains with seller)
- "Bobadilla Tech" brand name (seller retains for other projects)

### 3. Liabilities & Warranties

- **Seller Warranties**: You own 100% of IP, no legal disputes, financials are
  accurate
- **Buyer Assumption**: Buyer assumes all liabilities after closing date
- **Indemnification**: Seller indemnifies buyer for pre-closing issues
  (time-limited)
- **Jurisdiction**: Specify governing law (typically buyer's jurisdiction for
  small deals)
- **Tax Responsibility**: Each party responsible for taxes in their own
  jurisdiction

### 4. Non-Compete Clause

- Duration: Typically 1-3 years
- Scope: "Seller will not create, operate, or advise a competing AI-powered
  fitness SaaS"
- Geography: Worldwide (for online businesses)
- Note: Enforceability of non-competes varies by jurisdiction; consult attorney
  if concerned

### 5. Transition Support

- Support period: 30-90 days post-closing
- Availability: [X] hours/week for questions, training, handoff calls
- Compensation: Usually included in sale price, or $[HOURLY_RATE]/hour

### 6. Confidentiality

- Both parties agree not to disclose sale terms publicly
- Buyer cannot share codebase or trade secrets

### 7. Closing Conditions

- Payment received in escrow
- All assets successfully transferred
- Buyer confirms app is operational

---

## Tax & Legal Considerations

### Tax & Legal Considerations

**Tax Treatment:**

- Consult with a tax advisor in your jurisdiction before finalizing sale
- Set aside appropriate amount for taxes (varies by country)
- Ensure Asset Purchase Agreement clearly states each party handles their own
  taxes

**Legal Counsel:**

- **Optional but recommended**: Have attorney review Asset Purchase Agreement
  ($500-$2,000)
- Many micro-SaaS sales ($50k-$75k) use standard templates without custom legal
  review
- Use Escrow.com for payment security (especially for international
  transactions)

**International Sale Considerations:**

- Payment takes 3-5 business days for international wire transfers
- Escrow.com simplifies cross-border transactions
- Most buyers prefer jurisdiction in their country for small deals

---

## SaaS Valuation Multiples (As of 2025)

Typical multiples for micro SaaS ($50k-$200k sale price):

- **12-24x monthly profit** (most common for $5k MRR businesses)
- **Higher multiples (24-36x)** if:
  - Strong growth trend (20%+ MoM)
  - Low churn (<5% monthly)
  - Recurring revenue (vs. one-time)
  - Defensible moat (unique AI, data, or tech)
  - Strong SEO/organic traffic

**CompileStrength Valuation Estimate:**

- $5,000 MRR x 80% margin = $4,000 monthly profit
- 12x multiple = $48,000
- 18x multiple = $72,000
- 24x multiple = $96,000

---

## Post-Sale Responsibilities

### Immediate (Week 1-2)

- [ ] Transfer all assets per APA
- [ ] Introduce buyer to key contacts (if any)
- [ ] Provide transition support calls

### Short-Term (Month 1-3)

- [ ] Be available for questions during transition period
- [ ] Assist with any unforeseen technical issues
- [ ] Complete any agreed-upon handoff tasks

### Long-Term (Year 1-3)

- [ ] Honor non-compete agreement
- [ ] Maintain confidentiality of sale terms
- [ ] Do not disparage the business or buyer

---

## Additional Resources

### SaaS Sale Marketplaces

- MicroAcquire: https://microacquire.com
- Acquire.com: https://acquire.com
- Flippa: https://flippa.com
- Empire Flippers: https://empireflippers.com

### Legal Templates

- Startups.co Asset Purchase Agreement template
- Rocket Lawyer business sale templates
- LegalZoom business transfer documents

### Books

- "Buy Then Build" by Walker Deibel (for understanding buyer perspective)
- "The Exit Strategy Handbook" by Jerry Mills

### Advisors

- Consider hiring a business broker for deals >$100k (typically 10-15%
  commission)

---

**Notes for Eliaz:**

- Start organizing financials 2-3 months before listing
- Set calendar reminder to review legal docs quarterly
- Keep a "sale prep" folder with all key documents ready

**Contact for Sale Inquiries**: eliaz@bobadilla.tech
