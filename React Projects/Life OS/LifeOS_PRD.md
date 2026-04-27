# LifeOS Dashboard — Comprehensive Product Requirements Document
### Version: 2.0 (Merged & Finalized)
**Project Type:** Single-Page React Application  
**Stack:** Vite + React JS + Tailwind CSS + React Router + Context API + LocalStorage  
**Target Completion:** 4 Weeks (MVP)

---

## Table of Contents

1. [Product Overview & Vision](#1-product-overview--vision)
2. [Product Goals](#2-product-goals)
3. [Target User Persona](#3-target-user-persona)
4. [Technology Stack & Scope](#4-technology-stack--scope)
5. [Application Architecture](#5-application-architecture)
6. [Design System](#6-design-system)
7. [Global Layout & Navigation](#7-global-layout--navigation)
8. [Global Shared Components (12)](#8-global-shared-components)
9. [Context API & State Management](#9-context-api--state-management)
10. [LocalStorage Schema](#10-localstorage-schema)
11. [Page 1 — Dashboard](#11-page-1--dashboard)
12. [Page 2 — Tasks](#12-page-2--tasks)
13. [Page 3 — Notes](#13-page-3--notes)
14. [Page 4 — Expenses](#14-page-4--expenses)
15. [Page 5 — Subscriptions](#15-page-5--subscriptions)
16. [Page 6 — Weather](#16-page-6--weather)
17. [Page 7 — Settings](#17-page-7--settings)
18. [Search System](#18-search-system)
19. [Modals](#19-modals)
20. [Notifications & Toasts](#20-notifications--toasts)
21. [Empty States](#21-empty-states)
22. [Responsive Design Requirements](#22-responsive-design-requirements)
23. [Animations & Micro-interactions](#23-animations--micro-interactions)
24. [Accessibility Requirements](#24-accessibility-requirements)
25. [Performance Requirements](#25-performance-requirements)
26. [Folder Structure](#26-folder-structure)
27. [Component Registry (Full)](#27-component-registry-full)
28. [Data Models](#28-data-models)
29. [Financial Logic & Formulas](#29-financial-logic--formulas)
30. [Development Phases & Checklist](#30-development-phases--checklist)
31. [MVP Completion Criteria](#31-mvp-completion-criteria)
32. [Future v2 Features](#32-future-v2-features)

---

## 1. Product Overview & Vision

LifeOS Dashboard is a modern, local-first personal web application that consolidates daily life management into a single clean interface. It eliminates "app-switching" by unifying:

- **Productivity Management** — task tracking with priority, categories, and due dates
- **Financial Tracking** — expense logging, categorization, and visual analytics
- **Subscription Monitoring** — recurring bill tracking with renewal alerts
- **Notes System** — searchable, color-tagged knowledge base
- **Weather Utility** — real-time weather with city search and forecast
- **Personal Dashboard Insights** — at-a-glance stats across all modules

The core philosophy is **privacy-first and offline-capable** — all data lives in the user's browser via LocalStorage, requiring no backend or authentication in MVP.

---

## 2. Product Goals

### Primary Goals
- Centralized life management in a single SPA
- Fast, intuitive UI with minimal cognitive overhead
- Real-world React architecture (hooks, context, routing, component design)
- Beautiful, responsive experience across all device sizes
- Offline persistence using LocalStorage with zero data loss on refresh

### Secondary Goals
- Portfolio-ready, production-quality codebase
- Expandable architecture ready for v2 cloud sync
- Premium SaaS-like interface aesthetics
- Demonstrate mastery of the Sheryians React course stack

---

## 3. Target User Persona

**Name:** The Power User — Student / Freelancer / Young Professional

**Pain Points:**
- Switching between 5+ apps (Todoist, Notion, YNAB, spreadsheets, weather apps)
- No single place that combines tasks + money + notes
- Privacy concerns with cloud-only tools

**Goals:**
- Track daily and weekly tasks with priorities
- Monitor personal spending and budget
- Keep quick notes and ideas in one place
- Know what subscriptions are renewing soon
- Get a daily weather snapshot without opening another app

---

## 4. Technology Stack & Scope

### Core Stack
| Layer | Technology |
|---|---|
| Build Tool | Vite |
| UI Framework | React JS (functional components + hooks) |
| Styling | Tailwind CSS (with dark: modifier) |
| Routing | React Router v6 |
| State Management | Context API + useState + useEffect |
| Persistence | Browser LocalStorage |
| Charts | Recharts (or Chart.js) |
| Weather API | OpenWeatherMap API (free tier) |

### Frontend Only (MVP)
No backend, no database, no authentication required for v1. All data operations are synchronous reads/writes to LocalStorage.

### Browser Support
Modern browsers: Chrome, Firefox, Safari, Edge (last 2 major versions).

---

## 5. Application Architecture

### Pages (7 Total)
1. Dashboard
2. Tasks
3. Notes
4. Expenses
5. Subscriptions
6. Weather
7. Settings

### Route Map
```
/              → Dashboard
/tasks         → Tasks Page
/notes         → Notes Page
/expenses      → Expenses Page
/subscriptions → Subscriptions Page
/weather       → Weather Page
/settings      → Settings Page
```

### React Router Setup
Use `BrowserRouter` with `Routes` and `Route` components. Each page is a lazy-loaded component to improve initial load performance.

---

## 6. Design System

### Color Palette

#### Light Theme
| Token | Value | Usage |
|---|---|---|
| Background | `gray-50` / `white` | Page background |
| Card Background | `white` | All card surfaces |
| Primary Text | `gray-900` | Headings, body |
| Secondary Text | `gray-500` | Labels, hints |
| Border | `gray-200` | Card borders |
| Accent | `indigo-600` | Buttons, active states |

#### Dark Theme
| Token | Value | Usage |
|---|---|---|
| Background | `#0f172a` (slate-900) | Page background |
| Card Background | `#1e293b` (slate-800) | All card surfaces |
| Primary Text | `white` | Headings, body |
| Secondary Text | `slate-400` | Labels, hints |
| Border | `slate-700` | Card borders |
| Accent | `indigo-400` | Buttons, active states |

### Priority Color Coding
| Priority | Color |
|---|---|
| High | `red-500` |
| Medium | `yellow-500` |
| Low | `green-500` |

### Category Color Mapping (Expenses)
| Category | Color |
|---|---|
| Food | `orange-500` |
| Travel | `blue-500` |
| Shopping | `pink-500` |
| Bills | `red-500` |
| Health | `green-500` |
| Entertainment | `purple-500` |
| Other | `gray-500` |

### Typography Scale
| Level | Tailwind Class | Usage |
|---|---|---|
| Display | `text-3xl font-bold` | Page titles |
| Heading | `text-xl font-semibold` | Section headers |
| Subheading | `text-base font-medium` | Card titles |
| Body | `text-sm` | General content |
| Label | `text-xs text-gray-500` | Metadata, timestamps |

### Spacing & Shape
- Card border radius: `rounded-xl`
- Button border radius: `rounded-lg`
- Input border radius: `rounded-lg`
- Card shadow: `shadow-sm hover:shadow-md`
- Section gaps: `gap-4` to `gap-6`
- Page padding: `p-6` desktop, `p-4` mobile

---

## 7. Global Layout & Navigation

### Desktop Layout (≥1024px)
```
┌─────────────────────────────────────────────────┐
│  SIDEBAR (fixed, 240px)  │  TOP NAVBAR           │
│                          ├───────────────────────│
│  [Logo]                  │                       │
│  ─────────               │   MAIN CONTENT AREA   │
│  • Dashboard             │   (scrollable)        │
│  • Tasks                 │                       │
│  • Notes                 │                       │
│  • Expenses              │                       │
│  • Subscriptions         │                       │
│  • Weather               │                       │
│  • Settings              │                       │
│                          │                       │
└─────────────────────────────────────────────────┘
```

### Mobile Layout (<768px)
```
┌──────────────────────────┐
│  TOP NAVBAR + HAMBURGER  │
├──────────────────────────┤
│                          │
│   MAIN CONTENT AREA      │
│   (stacked cards)        │
│                          │
└──────────────────────────┘
[Drawer opens on hamburger click]
```

### Sidebar Behavior
- **Desktop:** Fixed, always visible, collapsible to icon-only mode (64px width)
- **Tablet (768–1024px):** Collapsed by default, expands on hover or toggle
- **Mobile:** Hidden by default, opens as an overlay drawer on hamburger click
- **Active state:** Highlighted with accent color background + left border accent
- **Icons:** Each nav item has a unique icon (Heroicons or Lucide React)

### Navbar Components
1. **Logo / App Name** — "LifeOS" with icon, links to Dashboard
2. **Search Input** — Filters current page data in real time
3. **Theme Toggle** — Sun/Moon icon, instant light/dark switch
4. **Notification Bell** — Shows count badge for upcoming subscription renewals
5. **User Avatar** — Shows first letter of username, dropdown placeholder for v2

---

## 8. Global Shared Components

### Component 1: `Sidebar.jsx`
- Fixed left navigation panel
- Props: `isCollapsed`, `onToggle`
- Renders nav items from a config array (icon + label + route)
- Highlights active route using `useLocation()`

### Component 2: `Navbar.jsx`
- Top bar, full width minus sidebar
- Contains SearchBar, ThemeToggle, NotificationBell, UserAvatar
- Passes search query up to page via Context or props

### Component 3: `SearchBar.jsx`
- Controlled input with debounced onChange (300ms)
- Clears on route change
- Placeholder changes based on current page: "Search tasks...", "Search notes..."

### Component 4: `ThemeToggle.jsx`
- Icon button (Sun for dark mode, Moon for light mode)
- Reads/writes from ThemeContext
- Smooth icon transition animation

### Component 5: `Card.jsx`
- Wrapper component for all card surfaces
- Props: `children`, `className`, `hover` (boolean)
- Applies base card styles + optional hover lift effect

### Component 6: `Modal.jsx`
- Portaled overlay using `ReactDOM.createPortal`
- Props: `isOpen`, `onClose`, `title`, `children`
- Backdrop click closes modal
- Escape key closes modal
- Fade-in animation on open

### Component 7: `Button.jsx`
- Props: `variant` (primary/secondary/danger/ghost), `size` (sm/md/lg), `loading`, `disabled`, `icon`, `onClick`
- Variants map to different Tailwind color classes

### Component 8: `EmptyState.jsx`
- Props: `icon`, `title`, `description`, `ctaLabel`, `onCta`
- Centered layout with icon, message, and call-to-action button

### Component 9: `StatCard.jsx`
- Props: `icon`, `label`, `value`, `trend`, `trendDirection` (up/down/neutral), `color`
- Used on Dashboard and module summary headers

### Component 10: `ConfirmationDialog.jsx`
- Extends Modal
- Props: `isOpen`, `onConfirm`, `onCancel`, `message`, `confirmLabel`, `dangerous`
- "Delete" confirmations use red confirm button

### Component 11: `ToastNotification.jsx`
- Stack of toasts, max 3 visible at once
- Props per toast: `type` (success/error/info/warning), `message`
- Auto-dismiss after 3 seconds
- Manual dismiss on click
- Slides in from bottom-right on desktop, top-center on mobile

### Component 12: `Loader.jsx`
- Spinner component
- Props: `size` (sm/md/lg), `fullPage` (boolean)
- Used during weather API fetch and any async operations

---

## 9. Context API & State Management

### ThemeContext
```js
// State
{ theme: 'light' | 'dark' }

// Actions
toggleTheme()

// Persistence
useEffect: writes to localStorage['lifeos_theme'] on every change
useEffect: on mount, reads localStorage['lifeos_theme'] and applies
useEffect: toggles 'dark' class on document.documentElement for Tailwind dark mode
```

### AppDataContext
```js
// State
{
  tasks: Task[],
  notes: Note[],
  expenses: Expense[],
  subscriptions: Subscription[]
}

// Actions
addTask(task), updateTask(id, updates), deleteTask(id), toggleTask(id)
addNote(note), updateNote(id, updates), deleteNote(id)
addExpense(expense), updateExpense(id, updates), deleteExpense(id)
addSubscription(sub), updateSubscription(id, updates), deleteSubscription(id)
clearAllData()
exportData() → JSON string
importData(jsonString)

// Persistence
Each state slice has its own useEffect that syncs to the corresponding localStorage key on every change
On mount: reads all keys from localStorage and initializes state
```

### UserContext
```js
// State
{
  username: string,
  currency: 'INR' | 'USD' | 'EUR' | 'GBP',
  defaultCity: string,
  dashboardWidgets: string[]  // order/visibility config
}

// Actions
updateUser(updates)

// Persistence
useEffect: syncs to localStorage['lifeos_user']
```

### Local State (per component, not in Context)
- Search query strings
- Form field values (controlled inputs)
- Modal open/close states
- Weather API loading/error states
- Filter selections on list pages

---

## 10. LocalStorage Schema

| Key | Type | Contents |
|---|---|---|
| `lifeos_tasks` | JSON Array | Array of Task objects |
| `lifeos_notes` | JSON Array | Array of Note objects |
| `lifeos_expenses` | JSON Array | Array of Expense objects |
| `lifeos_subscriptions` | JSON Array | Array of Subscription objects |
| `lifeos_theme` | String | `"light"` or `"dark"` |
| `lifeos_user` | JSON Object | Username, currency, city, preferences |

**Sync Strategy:** Each context slice uses a dedicated `useEffect` that fires whenever its state array changes, serializing to JSON and writing to the corresponding key. On app mount, a single initialization `useEffect` reads all keys, parses them, and hydrates state.

---

## 11. Page 1 — Dashboard

### Purpose
A real-time summary overview of all modules. The user's "morning briefing" screen.

### Layout
```
[Welcome Header — full width]
[Stats Row — 5 cards in a responsive grid]
[Recent Tasks | Recent Expenses] — 2 column
[Upcoming Renewals | Quote Card] — 2 column
```

### Section A: Welcome Header
- Dynamic greeting: "Good Morning, {username}" / "Good Afternoon..." / "Good Evening..."
- Current date formatted: "Monday, 20 April 2026"
- Rotating motivational quote (sourced from a local static array of 20+ quotes)

### Section B: Stats Cards (5 Cards)
Each StatCard shows:

| Card | Icon | Metric | Trend Text |
|---|---|---|---|
| Pending Tasks | CheckSquare | Count of incomplete tasks | "X due today" |
| Notes | FileText | Total note count | "Last added X days ago" |
| Monthly Expenses | DollarSign | Sum of current month expenses in user currency | "vs last month" |
| Active Subscriptions | RefreshCw | Count of active subscriptions | "X renewing this week" |
| Weather | Cloud | Current temp + condition | City name |

### Section C: Recent Tasks Widget
- Title: "Recent Tasks"
- Shows top 5 tasks sorted by `createdAt` descending
- Each row: checkbox + title + priority badge + due date
- Clicking a task navigates to `/tasks`
- "View All" link at bottom

### Section D: Recent Expenses Widget
- Title: "Recent Expenses"
- Shows top 5 expenses sorted by `date` descending
- Each row: category dot + title + amount + date
- "View All" link at bottom

### Section E: Upcoming Renewals Widget
- Title: "Upcoming Renewals"
- Shows subscriptions renewing within the next 30 days, sorted by renewal date
- Each row: subscription name + amount + days until renewal
- Renewals within 7 days shown with a red badge

### Section F: Productivity Quote Card
- Random quote from static local array on each page load
- Quote text + author attribution
- Subtle card with italic styling

---

## 12. Page 2 — Tasks

### Purpose
Full CRUD task management with filtering, sorting, and priority management.

### Layout
```
[Page Header: "Tasks" + "Add Task" button]
[Filter Bar: All | Pending | Completed | High Priority | Search]
[Task List — vertical stack of TaskCard components]
```

### Task Input Form (inside Modal)
Fields:
| Field | Type | Validation |
|---|---|---|
| Title | Text input | Required, max 100 chars |
| Description | Textarea | Optional, max 500 chars |
| Priority | Select | Low / Medium / High (default: Medium) |
| Due Date | Date picker | Optional |
| Category | Text input | Optional (e.g., Work, Personal, Study) |
| Status | Auto | Defaults to "pending" on creation |

### Filter & Sort Bar
- **Status filters:** All / Pending / Completed (toggle buttons)
- **Priority filter:** All / High / Medium / Low (dropdown)
- **Search:** Filters by title in real time (debounced)
- **Sort:** Newest First / Oldest First / Due Date (dropdown)

### TaskCard Component
Each task displays:
- Checkbox (clicking toggles `completed` — strikes through title)
- Title (line-through style when completed)
- Description preview (1 line, truncated)
- Priority badge (color-coded pill)
- Due date (red text if past due)
- Category label
- Edit icon (opens edit modal pre-filled)
- Delete icon (opens ConfirmationDialog)

### Interactions
- Add task → opens Add Task Modal → on submit: adds to context, shows success toast, closes modal
- Edit task → opens Edit Task Modal pre-filled → on submit: updates in context, shows success toast
- Delete task → shows ConfirmationDialog → on confirm: removes from context, shows success toast
- Toggle complete → instant state update, no modal needed
- All changes persist to LocalStorage immediately

### Empty State
Icon: CheckSquare  
Title: "No tasks yet"  
Description: "Add your first task to get started"  
CTA: "Add Task" button

---

## 13. Page 3 — Notes

### Purpose
A searchable, visual knowledge base for quick notes and ideas.

### Layout
```
[Page Header: "Notes" + "Add Note" button]
[Search Bar — inline]
[Notes Grid — 3 columns desktop, 2 tablet, 1 mobile]
```

### Add/Edit Note Form (inside Modal)
Fields:
| Field | Type | Validation |
|---|---|---|
| Title | Text input | Required, max 80 chars |
| Content | Textarea (rich text optional) | Required, max 2000 chars |
| Color Tag | Color picker | 8 preset colors |

### Color Tag Options
Yellow, Blue, Green, Pink, Purple, Orange, Red, Gray

### NoteCard Component
Each note displays:
- Colored left border or card background tint based on color tag
- Title (bold, truncated to 1 line)
- Content preview (truncated to 3 lines)
- Created/Updated date (relative: "2 days ago")
- Edit icon
- Delete icon

### Interactions
- Add note → opens Add Note Modal → on submit: adds to context, success toast
- Edit note → opens Edit Note Modal (full-screen modal or large modal with textarea) → on submit: updates, success toast
- Delete note → ConfirmationDialog → on confirm: removes, success toast
- Search → real-time filter on title and content using `.filter()` + `.includes()`

### Search Logic
```js
const filteredNotes = notes.filter(note =>
  note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  note.content.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### Empty State
Icon: FileText  
Title: "No notes yet"  
Description: "Capture your first idea"  
CTA: "Add Note" button

---

## 14. Page 4 — Expenses

### Purpose
Personal money tracking with categorization, visual analytics, and monthly filtering.

### Layout
```
[Summary Cards Row: Total This Month | Highest Category | Avg Daily Spend]
[Add Expense button — top right]
[Filter Bar: Month selector | Category filter | Search]
[Charts Row: Pie Chart (by category) | Bar Chart (monthly trend)]
[Expense Table / List]
```

### Summary Cards (3 Cards)
| Card | Metric | Calculation |
|---|---|---|
| Total This Month | Sum of all expenses in selected month | `expenses.filter(e => sameMonth(e.date, selectedMonth)).reduce(sum)` |
| Highest Category | Category name with highest spend | Group by category, find max |
| Avg Daily Spend | Total ÷ days elapsed in month | Total / Math.min(today.getDate(), daysInMonth) |

### Add/Edit Expense Form (inside Modal)
Fields:
| Field | Type | Validation |
|---|---|---|
| Title | Text input | Required, max 80 chars |
| Amount | Number input | Required, positive number, 2 decimal places |
| Category | Select dropdown | Required |
| Payment Method | Select | Cash / Card / UPI / Bank Transfer / Other |
| Date | Date picker | Required, defaults to today |
| Notes | Textarea | Optional |

### Categories
Food, Travel, Shopping, Bills, Health, Entertainment, Other

### Expense Table / List
Desktop (table):
| Column | Notes |
|---|---|
| # | Row index |
| Name | Title |
| Amount | Formatted with currency symbol |
| Category | Colored badge |
| Payment Method | Text |
| Date | Formatted |
| Actions | Edit + Delete icons |

Mobile (cards): Each expense shown as a card with all fields stacked.

### Charts

**Pie Chart (Category Breakdown):**
- Library: Recharts `PieChart` with `Cell` colors matching category color mapping
- Shows legend with category name + percentage
- Filtered by currently selected month

**Bar Chart (Monthly Trend):**
- Library: Recharts `BarChart`
- X-axis: Last 6 months (abbreviated)
- Y-axis: Total spend in currency
- Single bar per month

### Filters
- **Month selector:** Dropdown of last 12 months + "All Time"
- **Category filter:** Multi-select or single dropdown
- **Search:** Filters by expense title

### Financial Calculation Logic
```js
// Total monthly burn (used on Dashboard)
const totalBurn =
  expenses
    .filter(e => isSameMonth(parseISO(e.date), new Date()))
    .reduce((sum, e) => sum + e.amount, 0)
  +
  subscriptions.reduce((sum, s) => {
    if (s.cycle === 'monthly') return sum + s.amount;
    if (s.cycle === 'yearly') return sum + (s.amount / 12);
    return sum;
  }, 0);
```

### Empty State
Icon: DollarSign  
Title: "No expenses tracked"  
Description: "Start logging your spending"  
CTA: "Add Expense"

---

## 15. Page 5 — Subscriptions

### Purpose
Track recurring bills and get alerts before renewal dates.

### Layout
```
[Summary Cards: Total Monthly Cost | Upcoming Renewals | Active Plans]
[Add Subscription button]
[Subscription Cards Grid — 3 cols desktop, 2 tablet, 1 mobile]
[Renewal Alert Banner — if any renewing within 7 days]
```

### Summary Cards (3 Cards)
| Card | Metric |
|---|---|
| Total Monthly Cost | Sum of monthly equivalents (yearly ÷ 12 for annual subs) |
| Upcoming Renewals | Count of subscriptions renewing within 30 days |
| Active Plans | Total count of subscriptions |

### Add/Edit Subscription Form (inside Modal)
Fields:
| Field | Type | Validation |
|---|---|---|
| Name | Text input | Required, max 60 chars |
| Amount | Number input | Required, positive |
| Billing Cycle | Select | Monthly / Yearly |
| Renewal Date | Date picker | Required |
| Category | Select | Entertainment / Software / Utility / Education / Health / Other |
| Auto Renew | Toggle/Checkbox | Yes / No |
| Notes | Textarea | Optional |

### SubscriptionCard Component
Each card displays:
- Service name (bold)
- Category badge
- Amount + billing cycle (e.g., "₹499 / month")
- Renewal date
- Countdown: "Renews in X days" (red if ≤ 7 days)
- Auto-renew indicator
- Edit + Delete icons

### Renewal Alert System
- On Dashboard: "Upcoming Renewals" widget shows subs renewing in 30 days
- On Subscriptions page: A yellow/red banner at top lists subs renewing within 7 days
- Notification bell in Navbar shows badge count of 7-day renewals

### Interactions
- Add / Edit / Delete with same modal + toast + confirmation pattern as other modules
- Filter by category (dropdown)

### Empty State
Icon: CreditCard  
Title: "No subscriptions added"  
Description: "Track your recurring bills"  
CTA: "Add Subscription"

---

## 16. Page 6 — Weather

### Purpose
Real-time weather information for the user's saved city.

### Layout
```
[Search Bar: "Search city..."]
[Current Weather Card — large, prominent]
[Weather Details Row: Humidity | Wind Speed | Feels Like | Visibility]
[5-Day Forecast Row — horizontal scroll on mobile]
```

### Current Weather Card
- City name + country
- Large temperature display (°C or °F based on preference)
- Weather condition (e.g., "Partly Cloudy")
- Weather icon (from OpenWeatherMap icon URLs or local SVG map)
- Date and time of last update

### Weather Details Cards (4 mini-cards)
- Humidity (%)
- Wind Speed (km/h or mph)
- Feels Like temperature
- Visibility (km)

### 5-Day Forecast
- 5 cards in a horizontal row
- Each shows: day name, weather icon, high/low temperatures

### API Integration
```js
// Endpoint
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Current weather
GET /weather?q={city}&appid={API_KEY}&units=metric

// Forecast
GET /forecast?q={city}&appid={API_KEY}&units=metric&cnt=40
// Parse to get one entry per day (filter by 12:00:00 timestamps)
```

### State Management (Local)
```js
const [city, setCity] = useState(user.defaultCity || 'Kolkata');
const [weather, setWeather] = useState(null);
const [forecast, setForecast] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

### Interactions
- On page load: fetch weather for saved default city
- Search: user types city → debounced fetch on submit/Enter
- Save city: "Save as default" button writes to UserContext → persists

### Error Handling
- City not found: show inline error message "City not found. Try again."
- Network error: show retry button
- API key missing: show setup instructions

---

## 17. Page 7 — Settings

### Purpose
App configuration, data management, and personalization.

### Layout
```
[Page Header: "Settings"]
[Sections: Profile | Appearance | Regional | Data Management]
```

### Section A: Profile
- **Username field:** Text input, saves to UserContext on change/blur
- **Default City field:** Text input for weather default city

### Section B: Appearance
- **Theme Switch:** Light / Dark / System toggle
- **Dashboard Widgets:** Drag-to-reorder or toggle visibility of Dashboard widgets (future)

### Section C: Regional
- **Currency Select:** INR (₹) / USD ($) / EUR (€) / GBP (£)
  - Changing currency affects all displayed monetary values across the app

### Section D: Data Management
| Action | UI | Behavior |
|---|---|---|
| Export Data | Button "Export JSON" | Downloads a `.json` file with all app data |
| Import Data | File input + "Import" button | Parses JSON, validates, replaces current data |
| Delete All Data | Button "Delete All Data" (red/danger) | Opens ConfirmationDialog — on confirm: clears all localStorage keys, resets all contexts |

### Export Format
```json
{
  "exportedAt": "2026-04-20T10:00:00.000Z",
  "version": "1.0",
  "tasks": [...],
  "notes": [...],
  "expenses": [...],
  "subscriptions": [...],
  "user": {...}
}
```

---

## 18. Search System

### Architecture
The global search in the Navbar filters content on the **currently active page only**.

### Behavior Per Page
| Page | Searches On |
|---|---|
| Tasks | Task title, description |
| Notes | Note title, content |
| Expenses | Expense title, category |
| Subscriptions | Subscription name |
| Others | Disabled / hidden |

### Implementation
- SearchBar is in Navbar, query stored in a `SearchContext` or passed via prop
- Each page reads the search query and applies filter via `.filter().includes()`
- Debounced with 300ms delay using `useCallback` + `setTimeout`
- Query clears on route change via `useEffect` watching `location.pathname`

---

## 19. Modals

### Modal 1: Add / Edit Task
- Fields: Title, Description, Priority, Due Date, Category
- Footer: Cancel + Save buttons

### Modal 2: Add / Edit Note
- Fields: Title, Content (large textarea), Color Tag
- Large modal (600px+) for comfortable writing
- Footer: Cancel + Save buttons

### Modal 3: Add / Edit Expense
- Fields: Title, Amount, Category, Payment Method, Date, Notes
- Footer: Cancel + Save buttons

### Modal 4: Add / Edit Subscription
- Fields: Name, Amount, Billing Cycle, Renewal Date, Category, Auto Renew, Notes
- Footer: Cancel + Save buttons

### Modal 5: Confirmation Dialog
- Used for: Delete Task, Delete Note, Delete Expense, Delete Subscription, Delete All Data
- Message: "Are you sure you want to delete [item name]? This cannot be undone."
- Buttons: "Cancel" (secondary) + "Delete" (danger/red)

---

## 20. Notifications & Toasts

### Toast Types
| Type | Color | Icon | Trigger |
|---|---|---|---|
| Success (green) | green-500 | CheckCircle | Item added, updated |
| Error (red) | red-500 | XCircle | API error, import fail |
| Warning (yellow) | yellow-500 | AlertTriangle | Sub renewing soon |
| Info (blue) | blue-500 | Info | Theme changed, import complete |

### Toast Messages
| Event | Message |
|---|---|
| Task added | "Task added successfully" |
| Task updated | "Task updated" |
| Task deleted | "Task deleted" |
| Note added | "Note saved" |
| Note deleted | "Note deleted" |
| Expense added | "Expense logged" |
| Subscription added | "Subscription added" |
| Theme changed | "Switched to [light/dark] mode" |
| Data exported | "Data exported successfully" |
| Data imported | "Data imported successfully" |
| Import failed | "Invalid file format" |
| All data cleared | "All data has been cleared" |

---

## 21. Empty States

Every list/grid page must show an EmptyState component when no data exists.

| Page | Icon | Title | Description | CTA |
|---|---|---|---|---|
| Tasks | CheckSquare | "No tasks yet" | "Add your first task to stay productive" | "Add Task" |
| Notes | FileText | "No notes yet" | "Capture your thoughts and ideas" | "Add Note" |
| Expenses | DollarSign | "No expenses tracked" | "Start monitoring your spending" | "Add Expense" |
| Subscriptions | CreditCard | "No subscriptions added" | "Keep track of your recurring bills" | "Add Subscription" |
| Search Results | Search | "No results found" | "Try a different search term" | Clear Search |

---

## 22. Responsive Design Requirements

### Breakpoints (Tailwind defaults)
| Name | Min Width | Target |
|---|---|---|
| Mobile | < 768px (md) | Stacked layout, drawer nav |
| Tablet | 768px – 1024px (lg) | 2-column, collapsed sidebar |
| Desktop | ≥ 1024px (lg+) | Full sidebar, multi-column |

### Per-Component Responsive Behavior

**Sidebar:**
- Desktop: Fixed, 240px wide, always visible
- Tablet: Icon-only (64px) by default, expands on toggle
- Mobile: Completely hidden, slides in as overlay drawer

**Dashboard Stats Grid:**
- Desktop: 5 columns (`grid-cols-5`)
- Tablet: 3 columns (`grid-cols-3`)
- Mobile: 2 columns (`grid-cols-2`), last card full-width

**Notes Grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

**Subscription Cards:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

**Expense Table:**
- Desktop: Full table with all columns
- Mobile: Transforms to card list (no horizontal scroll)

**Charts:**
- Desktop: Side by side (50/50)
- Mobile: Stacked vertically, full width

---

## 23. Animations & Micro-interactions

All animations should use Tailwind `transition` utilities. Do not use heavy animation libraries in MVP.

| Element | Animation |
|---|---|
| Cards (hover) | `hover:scale-105 hover:shadow-lg transition-all duration-200` |
| Sidebar (open/close) | `transition-all duration-300 ease-in-out` on width |
| Modal (appear) | Fade + scale up: `opacity-0 scale-95 → opacity-100 scale-100` |
| Drawer (mobile nav) | Slide from left: `translate-x-[-100%] → translate-x-0` |
| Toast (appear) | Slide in from right/bottom |
| Toast (dismiss) | Fade out + slide out |
| Theme toggle | Smooth background-color transition on html element |
| Buttons (hover) | `hover:brightness-110 transition-colors duration-150` |
| Checkbox (check) | CSS checkmark animation |
| Priority badge | No animation, static color |

---

## 24. Accessibility Requirements

- All interactive elements must be reachable via **Tab** key in logical order
- All icon-only buttons must have `aria-label` attributes (e.g., `aria-label="Delete task"`)
- Modals must trap focus when open (Tab cycles within modal only)
- Modal backdrop must have `role="dialog"` and `aria-modal="true"`
- Color contrast must meet **WCAG AA** (4.5:1 for normal text, 3:1 for large text)
- Priority badges must not rely on color alone — include text label
- Form inputs must have associated `<label>` elements
- Error messages must be associated with inputs via `aria-describedby`
- Toast notifications must use `role="alert"` or `aria-live="polite"`
- Images and icons must have `alt=""` or `aria-hidden="true"` where decorative

---

## 25. Performance Requirements

| Requirement | Target |
|---|---|
| Initial page load | < 2 seconds on average connection |
| Route navigation | Instant (no reload, client-side routing) |
| LocalStorage sync | Synchronous, < 5ms per write |
| Search debounce | 300ms delay to avoid excessive re-renders |
| Chart rendering | < 500ms after data is available |
| Weather API call | Show loader, resolve in < 3s |
| Lazy loading | Each page route lazy-loaded via `React.lazy()` + `Suspense` |
| Re-render optimization | Use `useMemo` for filtered/sorted lists, `useCallback` for event handlers |

---

## 26. Folder Structure

```
src/
├── assets/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   ├── Navbar.jsx
│   │   └── AppLayout.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── EmptyState.jsx
│   │   ├── StatCard.jsx
│   │   ├── ConfirmationDialog.jsx
│   │   ├── ToastNotification.jsx
│   │   └── Loader.jsx
│   ├── dashboard/
│   │   ├── WelcomeHeader.jsx
│   │   ├── RecentTasksWidget.jsx
│   │   ├── RecentExpensesWidget.jsx
│   │   ├── UpcomingRenewalsWidget.jsx
│   │   └── QuoteCard.jsx
│   ├── tasks/
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskFilters.jsx
│   ├── notes/
│   │   ├── NoteCard.jsx
│   │   └── NoteForm.jsx
│   ├── finance/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseItem.jsx
│   │   ├── ExpenseSummaryCards.jsx
│   │   ├── CategoryPieChart.jsx
│   │   └── MonthlyBarChart.jsx
│   ├── subscriptions/
│   │   ├── SubscriptionCard.jsx
│   │   ├── SubscriptionForm.jsx
│   │   └── RenewalAlertBanner.jsx
│   └── weather/
│       ├── CurrentWeatherCard.jsx
│       ├── WeatherDetails.jsx
│       └── ForecastCard.jsx
├── context/
│   ├── ThemeContext.jsx
│   ├── AppDataContext.jsx
│   └── UserContext.jsx
├── hooks/
│   ├── useLocalStorage.js
│   ├── useDebounce.js
│   ├── useWeather.js
│   └── useToast.js
├── pages/
│   ├── Dashboard.jsx
│   ├── Tasks.jsx
│   ├── Notes.jsx
│   ├── Expenses.jsx
│   ├── Subscriptions.jsx
│   ├── Weather.jsx
│   └── Settings.jsx
├── utils/
│   ├── dateUtils.js
│   ├── currencyUtils.js
│   ├── storageUtils.js
│   └── financeUtils.js
├── data/
│   ├── quotes.js
│   ├── categories.js
│   └── navItems.js
├── App.jsx
└── main.jsx
```

---

## 27. Component Registry (Full)

| # | Component | Location | Type | Description |
|---|---|---|---|---|
| 1 | Sidebar | layout/ | Global | Navigation sidebar |
| 2 | Navbar | layout/ | Global | Top navigation bar |
| 3 | AppLayout | layout/ | Global | Wrapper: sidebar + navbar + outlet |
| 4 | Button | ui/ | Global | Reusable button variants |
| 5 | Card | ui/ | Global | Surface wrapper |
| 6 | Modal | ui/ | Global | Portal overlay |
| 7 | SearchBar | ui/ | Global | Debounced search input |
| 8 | ThemeToggle | ui/ | Global | Light/dark toggle button |
| 9 | EmptyState | ui/ | Global | No-data placeholder |
| 10 | StatCard | ui/ | Global | Metric summary card |
| 11 | ConfirmationDialog | ui/ | Global | Delete confirmation |
| 12 | ToastNotification | ui/ | Global | Notification stack |
| 13 | Loader | ui/ | Global | Loading spinner |
| 14 | WelcomeHeader | dashboard/ | Dashboard | Greeting + date |
| 15 | RecentTasksWidget | dashboard/ | Dashboard | Top 5 tasks preview |
| 16 | RecentExpensesWidget | dashboard/ | Dashboard | Top 5 expenses preview |
| 17 | UpcomingRenewalsWidget | dashboard/ | Dashboard | Upcoming subs |
| 18 | QuoteCard | dashboard/ | Dashboard | Motivational quote |
| 19 | TaskCard | tasks/ | Tasks | Individual task row |
| 20 | TaskForm | tasks/ | Tasks | Add/edit task form |
| 21 | TaskFilters | tasks/ | Tasks | Filter + sort bar |
| 22 | NoteCard | notes/ | Notes | Note preview card |
| 23 | NoteForm | notes/ | Notes | Add/edit note form |
| 24 | ExpenseForm | finance/ | Expenses | Add/edit expense form |
| 25 | ExpenseItem | finance/ | Expenses | Single expense row/card |
| 26 | ExpenseSummaryCards | finance/ | Expenses | 3 summary stat cards |
| 27 | CategoryPieChart | finance/ | Expenses | Recharts pie chart |
| 28 | MonthlyBarChart | finance/ | Expenses | Recharts bar chart |
| 29 | SubscriptionCard | subscriptions/ | Subscriptions | Sub info card |
| 30 | SubscriptionForm | subscriptions/ | Subscriptions | Add/edit sub form |
| 31 | RenewalAlertBanner | subscriptions/ | Subscriptions | Warning banner |
| 32 | CurrentWeatherCard | weather/ | Weather | Main weather display |
| 33 | WeatherDetails | weather/ | Weather | Humidity/wind details |
| 34 | ForecastCard | weather/ | Weather | Single day forecast |

**Total: ~34 Components** (more granular than the 62 estimate; many "components" in the PRD are actually sub-sections of a single component)

---

## 28. Data Models

### Task
```js
{
  id: string,           // crypto.randomUUID()
  title: string,        // required
  description: string,  // optional
  completed: boolean,   // default: false
  priority: 'low' | 'medium' | 'high',  // default: 'medium'
  dueDate: string | null,  // ISO date string or null
  category: string,     // optional, free text
  createdAt: string,    // ISO datetime string (auto)
  updatedAt: string     // ISO datetime string (auto)
}
```

### Note
```js
{
  id: string,
  title: string,        // required
  content: string,      // required
  colorTag: string,     // hex color or Tailwind color name
  createdAt: string,
  updatedAt: string
}
```

### Expense
```js
{
  id: string,
  title: string,        // required
  amount: number,       // required, positive
  category: 'food' | 'travel' | 'shopping' | 'bills' | 'health' | 'entertainment' | 'other',
  paymentMethod: 'cash' | 'card' | 'upi' | 'bank_transfer' | 'other',
  date: string,         // ISO date string
  notes: string,        // optional
  createdAt: string
}
```

### Subscription
```js
{
  id: string,
  name: string,         // required
  amount: number,       // required, positive
  cycle: 'monthly' | 'yearly',
  renewalDate: string,  // ISO date string
  category: 'entertainment' | 'software' | 'utility' | 'education' | 'health' | 'other',
  autoRenew: boolean,
  notes: string,        // optional
  createdAt: string
}
```

### User Preferences
```js
{
  username: string,       // default: 'User'
  currency: 'INR' | 'USD' | 'EUR' | 'GBP',  // default: 'INR'
  defaultCity: string,    // default: 'Kolkata'
  theme: 'light' | 'dark'
}
```

---

## 29. Financial Logic & Formulas

### Total Monthly Burn (Dashboard)
```js
const getMonthlyBurn = (expenses, subscriptions) => {
  const now = new Date();
  const expenseTotal = expenses
    .filter(e => {
      const d = new Date(e.date);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    })
    .reduce((sum, e) => sum + e.amount, 0);

  const subscriptionTotal = subscriptions.reduce((sum, s) => {
    return sum + (s.cycle === 'yearly' ? s.amount / 12 : s.amount);
  }, 0);

  return expenseTotal + subscriptionTotal;
};
```

### Average Daily Spend
```js
const getAvgDailySpend = (expenses, selectedMonth) => {
  const filtered = expenses.filter(e => isSameMonth(e.date, selectedMonth));
  const total = filtered.reduce((sum, e) => sum + e.amount, 0);
  const daysElapsed = selectedMonth is current month
    ? new Date().getDate()
    : getDaysInMonth(selectedMonth);
  return total / daysElapsed;
};
```

### Days Until Renewal
```js
const getDaysUntilRenewal = (renewalDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const renewal = new Date(renewalDate);
  renewal.setHours(0, 0, 0, 0);
  return Math.ceil((renewal - today) / (1000 * 60 * 60 * 24));
};
```

### Category Totals for Pie Chart
```js
const getCategoryTotals = (expenses) => {
  return expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});
};
```

---

## 30. Development Phases & Checklist

### Phase 1 — Foundation (Days 1–3)
- [ ] Vite + React project setup
- [ ] Tailwind CSS configuration with dark mode (`class` strategy)
- [ ] React Router setup with all 7 routes
- [ ] AppLayout component (Sidebar + Navbar + Outlet)
- [ ] ThemeContext with LocalStorage persistence
- [ ] Sidebar with all nav items and active highlighting
- [ ] Navbar with ThemeToggle

### Phase 2 — Tasks Module (Days 4–6)
- [ ] AppDataContext scaffold (tasks state + CRUD actions + localStorage sync)
- [ ] Tasks page with full CRUD
- [ ] Task filters and sorting
- [ ] Task modals (add + edit)
- [ ] ConfirmationDialog
- [ ] ToastNotification system
- [ ] EmptyState component

### Phase 3 — Notes Module (Days 7–8)
- [ ] Notes state in AppDataContext
- [ ] Notes page with grid layout
- [ ] NoteCard with color tags
- [ ] Notes CRUD with search

### Phase 4 — Expenses Module (Days 9–12)
- [ ] Expenses state in AppDataContext
- [ ] Expenses page with summary cards
- [ ] Add/edit/delete expense
- [ ] Month and category filtering
- [ ] Recharts Pie + Bar charts

### Phase 5 — Subscriptions Module (Days 13–15)
- [ ] Subscriptions state in AppDataContext
- [ ] Subscriptions page with cards grid
- [ ] Renewal countdown logic
- [ ] Alert banner for 7-day renewals
- [ ] Notification badge in Navbar

### Phase 6 — Dashboard (Days 16–17)
- [ ] Welcome header with dynamic greeting
- [ ] 5 StatCards pulling from all contexts
- [ ] Recent Tasks widget
- [ ] Recent Expenses widget
- [ ] Upcoming Renewals widget
- [ ] Quote card with static quotes array

### Phase 7 — Weather + Settings (Days 18–20)
- [ ] UserContext with localStorage persistence
- [ ] Weather page with OpenWeatherMap integration
- [ ] City search + save default city
- [ ] 5-day forecast display
- [ ] Settings page: username, currency, theme, export/import/delete

### Phase 8 — Polish (Days 21–28)
- [ ] Global search in Navbar (per-page filtering)
- [ ] Full responsive layout (mobile sidebar drawer)
- [ ] All animations and transitions
- [ ] Accessibility audit (aria labels, focus traps, contrast)
- [ ] Performance: React.lazy for routes, useMemo for lists
- [ ] Edge case handling (empty data, API errors, invalid import)
- [ ] Final design pass (spacing, typography, consistency)

---

## 31. MVP Completion Criteria

The project is considered complete and portfolio-ready when ALL of the following are true:

**Functionality**
- [ ] All 7 pages are accessible via React Router (no 404s)
- [ ] Full CRUD works on Tasks, Notes, Expenses, and Subscriptions
- [ ] All data persists across page refreshes (LocalStorage verified)
- [ ] Theme toggle switches between light and dark mode globally
- [ ] Weather page fetches and displays real data from OpenWeatherMap
- [ ] Charts on Expenses page render with real data

**UI/UX**
- [ ] Responsive layout works on mobile (375px), tablet (768px), and desktop (1440px)
- [ ] Sidebar collapses to drawer on mobile
- [ ] Empty states display when no data exists
- [ ] Toast notifications appear on all CRUD operations
- [ ] Confirmation dialogs appear before all delete operations
- [ ] Search filters content on Tasks, Notes, Expenses, Subscriptions pages

**Code Quality**
- [ ] No prop drilling beyond 2 levels (Context API used for global state)
- [ ] All components are functional components using hooks
- [ ] No `console.error` warnings in browser console
- [ ] Consistent file naming and folder structure

---

## 32. Future v2 Features

| Feature | Description |
|---|---|
| Authentication | Email/password login via Firebase Auth |
| Cloud Sync | Firestore database replacing LocalStorage |
| Budget Alerts | Set monthly budget limits per category, alert on threshold |
| Recurring Expenses | Auto-add recurring expenses on set schedule |
| AI Insights | Weekly spending summaries and productivity tips via LLM API |
| Monthly Reports | Export monthly summary as PDF |
| Calendar View | Task due dates visualized on a monthly calendar |
| Tags System | Multi-tag support for Notes and Tasks |
| Markdown Notes | Full markdown rendering in Note editor |
| Mobile App | React Native version sharing the same API |

---

*Document Version: 2.0 | Created: April 2026 | Stack: Vite + React + Tailwind + React Router + Context API*
