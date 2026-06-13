<div align="center">

<br/>

# ⚖️ **LexAnalytica**

<br/>

### *Decode your offer letter before you sign it.*

<br/>

**AI-powered legal intelligence for job contracts.**  
Upload a PDF or paste text. Get instant risk scoring, plain-English explanations, salary benchmarking, and a ready-to-use negotiation script — in under 20 seconds.

<br/>

[🌐 **VISIT LIVE APP →**](https://lex-anlaytics.pages.dev) · [⭐ **STAR**](https://github.com/rajcodes0/lex-anlaytics) · [🐛 **REPORT BUG**](https://github.com/rajcodes0/lex-anlaytics/issues)

<br/>

---

</div>

## 📸 See It In Action

<div align="center">

### 🏠 Landing Page

<br/>

<a href="https://lex-anlaytics.pages.dev" target="_blank">
<img src="screenshots/home.png" alt="LexAnalytica Landing Page" width="92%" />
</a>

<br/>

<sub>Dark, bold, "Decode your future with absolute clarity." Mock terminal showing live risk detection.</sub>

<br/><br/>

---

### 📊 Analysis Report

<br/>

<a href="https://lex-anlaytics.pages.dev" target="_blank">
<img src="screenshots/Analysis.png" alt="Detailed Analysis Report" width="92%" />
</a>

<br/>

<sub>Risk gauge, top red flags, salary assessment, and a copy-paste negotiation script — all on one page.</sub>

<br/><br/>

---

### 🔍 Single Analysis Detail

<br/>

<a href="https://lex-anlaytics.pages.dev" target="_blank">
<img src="screenshots/analysisDetail.png" alt="Analysis Detail View" width="92%" />
</a>

<br/>

<sub>Full employment agreement breakdown with executive script and clause-by-clause risk explanation.</sub>

<br/><br/>

---

### 📋 Clause Breakdown

<br/>

<a href="https://lex-anlaytics.pages.dev" target="_blank">
<img src="screenshots/clauses.png" alt="Clause Breakdown Table" width="92%" />
</a>

<br/>

<sub>Every clause decoded into plain English with color-coded risk levels (green / yellow / red).</sub>

<br/><br/>

---

### 🗂️ History Archive

<br/>

<a href="https://lex-anlaytics.pages.dev" target="_blank">
<img src="screenshots/history.png" alt="Analysis History Page" width="92%" />
</a>

<br/>

<sub>Searchable, filterable archive of every analysis you've ever run. 4 stat cards up top.</sub>

<br/><br/>

---

### 💎 Premium Checkout

<br/>

<a href="https://lex-anlaytics.pages.dev" target="_blank">
<img src="screenshots/payment.png" alt="Razorpay Premium Checkout" width="60%" />
</a>

<br/>

<sub>One-time ₹100 payment, Razorpay-powered, dark theme that matches the rest of the app.</sub>

<br/><br/>

---

### 📱 Fully Responsive

<br/>

<table>
<tr>
<td width="50%"><img src="screenshots/aggrement-responsivness.png" alt="Agreement responsive view" /></td>
<td width="50%"><img src="screenshots/mobile_responsive.png" alt="Mobile responsive view" /></td>
</tr>
</table>

<br/>

<sub>Works on desktop, tablet, and mobile. The whole experience scales cleanly down to a phone screen.</sub>

</div>

<br/>

---

## 🎬 Project Showcase Video

*Coming soon — will be embedded here once recorded.*

<br/>

---

## ✨ What is LexAnalytica?

**LexAnalytica** is a full-stack AI web app that helps job seekers make informed decisions about employment contracts. Instead of blindly signing something you don't fully understand, you can run it through LexAnalytica and get a structured, plain-English analysis in under 20 seconds.

### Why It Exists

The average job offer letter is **4-7 pages of dense legalese** designed to protect the company, not you. Most candidates:

- 😰 Don't know which clauses are normal vs. predatory
- 💸 Have no idea if the offered salary is fair for the role
- 😶 Don't know what to push back on or how to phrase it
- ⏰ Feel pressured to sign quickly without proper review

**LexAnalytica fixes this in 20 seconds.** No need to call a lawyer for ₹5,000. No need to read 47 Reddit threads. Just upload, read, decide.

---

## 🎯 Core Features

| Feature | Description |
|---|---|
| 📄 **PDF Upload** | Drag-and-drop offer letter PDFs (up to 5MB) — text is auto-extracted |
| 📝 **Text Paste** | Don't have a PDF? Paste the text directly (up to 50,000 chars) |
| 🎯 **Risk Scoring** | 1-10 score with green / yellow / red flag per clause |
| 🚩 **Red Flag Detection** | Top 3 most concerning clauses highlighted at the top |
| 💰 **Salary Benchmarking** | Compares offered salary against market rate for the role |
| 💬 **Negotiation Scripts** | Copy-paste ready talk tracks, professional & data-driven tone |
| 📋 **Full Clause Breakdown** | Every clause decoded into plain English |
| 🗂️ **History Archive** | Every analysis saved, filterable by risk, searchable by content |
| 🔒 **Authentication** | Email/password with bcrypt + JWT (7-day expiry) |
| 💎 **Premium Tier** | One-time ₹100 via Razorpay for unlimited analyses |
| 📧 **Password Reset** | Email link, 10-minute expiry, hashed tokens |
| 📱 **Responsive** | Works on desktop, tablet, and mobile |
| 🌓 **Dark Theme** | Easy on the eyes during late-night contract review |

---

## ⚡ How It Works

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │  PDF/   │              │  text   │              │
│   Frontend   │ ──────> │   Backend    │ ──────> │  Groq AI     │
│  (React/Vite)│  POST   │  (Express)   │         │  (Llama 3.3) │
│              │ <────── │              │ <────── │              │
└──────────────┘  JSON   └──────────────┘  JSON   └──────────────┘
       │                          │
       │                          ▼
       │                  ┌──────────────┐
       │                  │              │
       └───────────────── │  MongoDB     │
          (history GET)   │  (Mongoose)  │
                          │              │
                          └──────────────┘
```

### Step by step

1. **User uploads PDF or pastes text** on the dashboard
2. **Multer middleware** parses the multipart upload (5MB max) on the backend
3. **pdf-parse v2** extracts clean text from the PDF
4. **Groq SDK** sends the text to Llama 3.3 70B with a strict JSON system prompt
5. **LLM returns** structured JSON: clauses, risk scores, salary assessment, negotiation script
6. **Backend saves** the analysis to MongoDB (truncated rawText for the list view)
7. **Frontend renders** the analysis with risk gauges, color-coded badges, expandable clauses
8. **User can** copy the negotiation script, view history, or delete the analysis

**Average time from upload to result: 10-20 seconds.**

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.3 | UI framework |
| **Vite** | 5.4 | Build tool, dev server |
| **React Router** | 6.26 | Client-side routing |
| **Axios** | 1.7 | HTTP client + interceptors |
| **react-hook-form** | 7.53 | Form state management |
| **react-hot-toast** | 2.4 | Toast notifications |
| **CSS Variables** | Native | Design tokens, dark theme |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 20+ | Runtime |
| **Express** | 4.21 | HTTP server |
| **Mongoose** | 8.7 | MongoDB ODM |
| **jsonwebtoken** | 9.0 | JWT auth |
| **bcryptjs** | 2.4 | Password hashing (12 rounds) |
| **multer** | 1.4 | Multipart/form-data parsing |
| **pdf-parse** | 2.0 | PDF text extraction |
| **groq-sdk** | 0.7 | LLM inference |
| **nodemailer** | 6.9 | Password reset emails |
| **razorpay** | 2.9 | Payment processing |

### Infrastructure
| Service | Use |
|---|---|
| **Cloudflare Pages** | Frontend hosting (free, global edge) |
| **Render** | Backend hosting (auto-deploy on push) |
| **MongoDB Atlas** | Database (free tier) |
| **Groq Cloud** | LLM inference (generous free tier) |
| **Razorpay** | Payments (test mode for dev) |

---

## 🚀 Live Demo & Links

<div align="center">

| 🔗 Resource | URL |
|---|---|
| **🌐 Live App** | **[lex-anlaytics.pages.dev](https://lex-anlaytics.pages.dev)** |
| **💾 GitHub Repo** | **[github.com/rajcodes0/lex-anlaytics](https://github.com/rajcodes0/lex-anlaytics)** |
| **🐛 Report Bug** | [New Issue](https://github.com/rajcodes0/lex-anlaytics/issues/new) |
| **✨ Request Feature** | [New Issue](https://github.com/rajcodes0/lex-anlaytics/issues/new) |

</div>

---

## 💻 Run Locally

### Prerequisites

Make sure you have these installed:

- **Node.js 18+** ([download](https://nodejs.org))
- **MongoDB** (local install or [Atlas free account](https://www.mongodb.com/cloud/atlas/register))
- **Git** ([download](https://git-scm.com))

You'll also need **free API keys** from:
- [Groq Console](https://console.groq.com) — for AI analysis
- [Razorpay Dashboard](https://dashboard.razorpay.com) — for payments (optional, test mode)
- Gmail App Password — for password reset emails (optional)

---

### 🔧 Backend Setup

```bash
# 1. Clone the repo
git clone https://github.com/rajcodes0/lex-anlaytics.git
cd lex-anlaytics/backend

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Open .env and fill in:
#   MONGODB_URI=...
#   JWT_SECRET=...
#   GROQ_API_KEY=...
#   (optional) RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
#   (optional) EMAIL_USER, EMAIL_PASS
#   FRONTEND_URL=http://localhost:5173

# 4. Start the dev server
npm run dev
```

Backend will run on **http://localhost:5000**

### 🎨 Frontend Setup

```bash
# Open a new terminal
cd lex-anlaytics/frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# VITE_API_URL=http://localhost:5000

# Start the dev server
npm run dev
```

Frontend will run on **http://localhost:5173**

> 💡 **Heads up:** The Vite dev server proxies `/api/*` requests to `localhost:5000`, so you don't need to worry about CORS in development. Only set `VITE_API_URL` for production builds.

### ✅ Verify It Works

Visit `http://localhost:5000/` in your browser. You should see:
```json
{ "message": "API running" }
```

Then visit `http://localhost:5173/` and try uploading a sample offer letter PDF.

---

## 📦 Deployment

### Backend → Render

1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect your GitHub repo
3. Configure:
   - **Root directory:** `backend`
   - **Build command:** `npm install`
   - **Start command:** `node app.js`
   - **Instance type:** Free
4. Add environment variables (same as `.env` above)
5. Click **Deploy**

Auto-deploys on every push to `main`.

### Frontend → Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) → **Create a project**
2. Connect your GitHub repo
3. Configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output:** `dist`
   - **Root directory:** `frontend`
4. Set environment variable: `VITE_API_URL=https://your-backend.onrender.com`
5. Click **Deploy**

Auto-deploys on every push to `main`.

---

## 🔌 API Reference

### Authentication

| Method | Endpoint | Body | Returns |
|---|---|---|---|
| `POST` | `/api/auth/register` | `{name, email, password}` | `{success, user}` |
| `POST` | `/api/auth/login` | `{email, password}` | `{success, token, user}` |
| `POST` | `/api/auth/forgot-password` | `{email}` | `{success, message, resetUrl?}` |
| `POST` | `/api/auth/reset-password/:token` | `{password}` | `{success, message}` |

### Analysis

| Method | Endpoint | Auth | Body | Returns |
|---|---|---|---|---|
| `POST` | `/api/analyze/pdf` | optional | `multipart/form-data` (field: `offerFile`) | `{id, result}` |
| `POST` | `/api/analyze/text` | optional | `{text}` (max 50,000 chars) | `{id, result}` |
| `GET` | `/api/analyses` | optional | — | `[{_id, userId, inputType, rawText, result, createdAt}]` |
| `GET` | `/api/analyze/:id` | optional | — | `{_id, userId, inputType, rawText, result, createdAt}` |
| `DELETE` | `/api/analyze/:id` | required | — | `{success}` |

### Payment

| Method | Endpoint | Auth | Body | Returns |
|---|---|---|---|---|
| `POST` | `/api/payment/create-order` | required | `{amount, description}` | `{order, keyId}` |
| `POST` | `/api/payment/verify-payment` | required | `{orderId, paymentId, signature}` | `{success, payment}` |
| `GET` | `/api/payment/payment-status/:paymentId` | required | — | `{payment}` |

### Authentication

Protected routes require a `Authorization: Bearer <token>` header. Tokens are issued by `/api/auth/login` and stored in `localStorage` under the key `lex_token`.

---

## ⚙️ Configuration

### Backend `.env`
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/lexanalytica

# Auth
JWT_SECRET=use-a-long-random-string-here-at-least-32-chars

# AI
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxx

# Payments (optional — features disabled if missing)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxx

# Email (optional — password reset falls back to console log)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password

# Frontend URL (CORS + password reset link)
FRONTEND_URL=https://lex-anlaytics.pages.dev
```

### Frontend `.env.local`
```env
VITE_API_URL=https://your-backend.onrender.com
```

### Gmail App Password Setup

1. Enable 2FA on your Google account
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail" / "Other"
4. Use that 16-char password as `EMAIL_PASS` (not your real Gmail password)

---

## 📁 Project Structure

```
lex-anlaytics/
│
├── backend/
│   ├── app.js                    # Express entrypoint, CORS, route mounts
│   ├── config/
│   │   └── db.js                 # Mongoose connection
│   ├── controllers/
│   │   ├── authControllers.js    # Register, login logic
│   │   └── paymentController.js  # Razorpay order/verify logic
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT protect middleware
│   ├── models/
│   │   ├── user.js               # User schema + bcrypt + reset token
│   │   └── analysis.js           # Analysis schema (nested clauses)
│   ├── routes/
│   │   ├── authRoutes.js         # /api/auth/*
│   │   ├── analyzeRoutes.js      # /api/analyze/*, /api/analyses
│   │   └── paymentRoutes.js      # /api/payment/*
│   ├── utils/
│   │   ├── groq.js               # AI analysis (Llama 3.3)
│   │   ├── jwt.js                # Token sign/verify
│   │   └── pdfExtract.js         # pdf-parse wrapper
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── index.html                # Vite entry, Google Fonts
│   ├── vite.config.js            # Dev proxy to backend
│   └── src/
│       ├── main.jsx              # ReactDOM + BrowserRouter
│       ├── App.jsx               # Routes + Toaster
│       ├── index.css             # Design tokens + all components
│       ├── contexts/
│       │   └── AuthContext.jsx   # Auth state + localStorage
│       ├── services/
│       │   └── api.js            # Axios + interceptors
│       ├── utils/
│       │   └── formatters.js     # Date, risk color/label helpers
│       ├── styles/
│       │   └── Checkout.css      # Dark-theme checkout
│       ├── pages/                # 9 pages: Landing, Login, Register,
│       │                         # ForgotPassword, ResetPassword,
│       │                         # Dashboard, History, AnalysisDetail,
│       │                         # Checkout, AnalysisResult
│       └── components/           # 7 components: ProtectedRoute,
│                                 # Navbar, Footer, RiskGauge,
│                                 # ClauseTable, HistoryItem,
│                                 # DeleteConfirmModal
│
├── screenshots/                  # README images
│   ├── home.png
│   ├── Analysis.png
│   ├── analysisDetail.png
│   ├── clauses.png
│   ├── history.png
│   ├── payment.png
│   ├── aggrement-responsivness.png
│   └── mobile_responsive.png
│
├── README.md                     # You are here
└── LICENSE
```

---

## 🧠 The AI Engine

The system prompt sent to Groq enforces a strict JSON schema:

```json
{
  "clauses": [
    {
      "title": "Short name of this section",
      "originalText": "Exact wording from the letter",
      "plainExplanation": "Simple English explanation",
      "riskLevel": "green|yellow|red",
      "riskReason": "Why it's risky (or null if green)"
    }
  ],
  "overallRiskScore": 1-10,
  "salaryAssessment": {
    "offeredAmount": "amount with $ sign",
    "currency": "USD|EUR|INR|GBP",
    "marketComparison": "below|market|above",
    "note": "brief explanation"
  },
  "negotiationScript": "A ready-to-use negotiation script the user can copy",
  "topRedFlags": ["flag1", "flag2"]
}
```

### Why Llama 3.3 70B?

| Model | Speed | Cost | Quality for legal text |
|---|---|---|---|
| Llama 3.3 70B Versatile | ⚡ Fast | 💰 Free tier | ⭐⭐⭐⭐⭐ |
| Mixtral 8x7B | ⚡⚡ Faster | 💰 Free tier | ⭐⭐⭐ (deprecated) |
| Gemma 2 9B | ⚡⚡ Faster | 💰 Free tier | ⭐⭐⭐ (deprecated) |

The backend dynamically calls `groqClient.models.list()` and picks the first active model from a preference list. This way if Groq deprecates a model, the app doesn't break — it just falls back to whatever's live.

### Defensive parsing

The Groq response is scrubbed of markdown fences (` ```json `, ` ``` `) before being parsed. If `JSON.parse` fails or the response is missing the `clauses` array, the backend tries the next model in the fallback chain. If all fail, it surfaces a clean error to the frontend.

---

## 🎨 Design Philosophy

### Dark by default

The entire UI is dark-themed (LexAnalytica dark: `#0a0a0f` background, `#f5f6fa` text). Why?
- Legal content is dense and benefits from less eye strain
- Premium feel without trying too hard
- Looks great in screenshots (important for a project showcase)

### Single source of truth for design tokens

All colors, radii, fonts, and shadows live in `:root` CSS variables in `index.css`. Change one variable, the whole app updates. No scattered `color: white` overrides.

### Information density over whitespace

Offer letter analysis is information-heavy. The UI shows risk + flags + score + script + breakdown in a single scrollable page rather than a 5-step wizard.

### Accessibility

- Semantic HTML (`<button>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on icon buttons (hamburger menu, etc.)
- Color is never the only indicator — risk levels have text labels too
- Focus styles preserved (not `outline: none` everywhere)

---

## 💡 Things I Learned the Hard Way

These are the bugs that cost me 2+ hours each. Documenting so you don't repeat them.

### 1. CORS is not a suggestion

```js
// ❌ This works for GET, breaks for POST/PUT/DELETE with custom headers
cors({ origin: "...", credentials: true })

// ✅ Always specify methods + allowedHeaders explicitly
cors({
  origin: ["https://your-frontend.com"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
})
```

Without `methods` + `allowedHeaders`, the browser sends an `OPTIONS` preflight, gets confused, and silently blocks the real request.

### 2. pdf-parse v2 is NOT backward compatible with v1

```js
// ❌ v1 API
const data = await pdfParse(buffer);
console.log(data.text, data.numpages);

// ✅ v2 API
const parser = new PDFParse({ data: buffer });
const result = await parser.getText();
const info = await parser.getInfo();
console.log(result.text, info?.info?.Pages);
```

If you're following a 2023 StackOverflow answer, it's v1.

### 3. Multer needs FormData, not raw File blobs

```js
// ❌ This passes a raw File blob — multer sees nothing
analyzeFile: (file) => api.post("/api/analyze/pdf", file)

// ✅ Build FormData inside the API helper
analyzeFile: (file) => {
  const formData = new FormData();
  formData.append("offerFile", file);
  return api.post("/api/analyze/pdf", formData);
}
```

### 4. Groq deprecates models quietly

Your `PREFERRED_MODELS = ["llama-3.3-70b-versatile", "mixtral-8x7b-32768", ...]` works today, but the deprecated ones will return 404 in 3 months. Always call `models.list()` and filter for `active !== false`.

### 5. JWT in localStorage is fine for a project showcase

For a real production app, you'd want httpOnly cookies, refresh tokens, and CSRF protection. For a portfolio piece, localStorage is acceptable — just don't pretend it's secure.

### 6. CORS allowlist typos are sneaky

I had `lex-anlaytics.pages.dev` (typo: "anlaytics") in my allowlist when my actual URL was `lex-analytica.pages.dev`. CORS error looked like a server bug for 30 minutes. Always double-check character-by-character.

---

## 🗺️ Roadmap

Things I'd like to add (PRs welcome):

- [ ] 🌐 **Multi-language support** — Hindi, Spanish, Mandarin
- [ ] ⚖️ **Compare two offers** side-by-side
- [ ] 📑 **Export as PDF** — download the full analysis report
- [ ] 📧 **Gmail extension** — auto-analyze offer letters in your inbox
- [ ] 👥 **Lawyer review marketplace** — connect with vetted employment lawyers
- [ ] 🔍 **Better salary data** — integrate with Levels.fyi / Glassdoor APIs
- [ ] 📊 **Personal analytics** — track your offer history, salary progression
- [ ] 🌓 **Light/dark mode toggle**
- [ ] 📱 **Mobile app** (React Native)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/AmazingFeature

# Make your changes
git commit -m "Add: AmazingFeature"

# Push to your fork
git push origin feature/AmazingFeature

# Open a Pull Request
```

### Code Style

- Backend: ES modules (`"type": "module"`), async/await, no callbacks
- Frontend: Functional components, hooks, no class components
- CSS: CSS variables only, no Tailwind, no styled-components
- Commits: `Add:`, `Fix:`, `Refactor:`, `Docs:` prefixes

---

## 📄 License

[MIT](LICENSE) — use it, fork it, ship your own version.

Just don't pretend you built it from scratch if you didn't. 😄

---

## 👤 Author

<div align="center">

**Raj**

*Built because I was tired of "just trust the company, bro."*

<br/>

If this saved you from a bad offer, that's cool.  
Star the repo maybe. No pressure. ⭐

<br/>

---

**[🌐 Visit LexAnalytica →](https://lex-anlaytics.pages.dev)**

*Made with ☕ and a healthy distrust of legal jargon*

</div>
