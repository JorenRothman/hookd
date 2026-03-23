# Hookd - Webhook Tester & Debugger

## Quick Scope

### Core Features
- Generate unique endpoint URLs (e.g., `hookd.dev/u/abc123`)
- Capture all incoming requests (method, headers, body, query params)
- List view: chronological request log
- Detail view: pretty-printed JSON, raw view, header inspection
- Replay: forward webhook to another URL with optional modifications

### Tech Stack
- Next.js 14+ (App Router)
- Drizzle ORM + PostgreSQL
- nanoid for unique IDs
- Tailwind CSS

### Data Model
```
Project: id, name, uniqueSlug, createdAt
Request: id, projectId, method, path, headers (json), body (text), queryParams, receivedAt
```

### API Routes
- `POST /api/webhooks/[slug]` - catch incoming webhooks
- `GET /api/projects/[id]/requests` - list requests
- `POST /api/requests/[id]/replay` - replay to target

---

## User Flow

### 1. Create Endpoint
- Land on site → click "New Endpoint"
- System generates unique URL: `hookd.dev/u/abc123`
- Share this URL as the webhook destination

### 2. Capture Webhooks
- Configure external service (Stripe/GitHub/your app) to send to your endpoint
- Requests appear in dashboard in real-time

### 3. Inspect
- Click request to view:
  - Method, status, timestamp
  - Headers table (filterable)
  - Body with JSON highlighting
  - Raw view for binary payloads

### 4. Debug
- Copy as cURL
- Filter/search headers
- Verify payload structure

### 5. Replay
- Click "Replay"
- Enter destination URL
- Optionally modify headers/body
- View response from target

---

## Future Ideas
- Webhook signature validation
- Response simulation
- Team collaboration
- Request filtering/search
- Custom domains