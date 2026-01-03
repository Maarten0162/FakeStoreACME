# Fake Store — ACME

![Fake Store Screenshot](public/GitBannerFakeStore.png)

A full-stack webshop application built with Next.js, featuring CRUD functionality, authentication, and a Supabase backend.  
This project demonstrates my skills in full-stack web development and database integration.  
It was developed as part of my HBO-ICT study program.

---

## Live Demo

- **Live Website:** https://fake-store-acme.vercel.app/  
- **GitHub Repository:** https://github.com/Maarten0162/FakeStoreACME

---

## Overview

The Fake Store project was created to:

- Demonstrate full-stack development skills  
- Work with Supabase authentication and database
- Implement CRUD operations with proper access control  
- Consume and integrate an external API
- Build a modern, responsive webshop interface  

The application is based on a fictional ACME store.  
Products are initially fetched from the FakeStoreAPI and can then be managed by authenticated users through a custom interface.

---

## Features

### Authentication (Supabase)
Authentication is handled using Supabase Auth, allowing users to:

- Register with email & password  
- Log in and log out  
- Access protected functionality once authenticated  

Only **logged-in users** can create, update, or delete products.

---

### CRUD Functionality (Products)

| Operation | Access |
|---------|-------|
| Read products | Public (all users) |
| Create product | Authenticated users only |
| Update product | Authenticated users only |
| Delete product | Authenticated users only |

This ensures proper authorization and data safety.

---

### External API Integration
Products are imported using the [FakeStoreAPI](https://fakestoreapi.com/)
These products are then stored and managed within the Supabase database, allowing full CRUD control.

---

### Modern & Responsive
The application is built using modern tooling and best practices:

- Responsive design  
- Clean UI with Tailwind CSS  
- Server-side rendering with Next.js  
- Modular component structure  

---

## Technologies Used

- **Framework:** Next.js  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Database & Auth:** Supabase  
- **Auth UI:** `@supabase/auth-ui-react`  
- **External API:** FakeStoreAPI  

---

## Installed Packages

- Supabase
- Supabase Auth UI React
- Tailwind CSS
- ESLint

---

## File Structure

```txt
FakeStoreACME/
├── app/
│   ├── components/
│   ├── login/
│   ├── products/
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── api/
├── public/
├── styles/
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md 
```

## Installation
```bash
# Clone the repository
git clone https://github.com/Maarten0162/FakeStoreACME.git

# Navigate into the project
cd FakeStoreACME

# Install dependencies
npm install

# Run the development server
npm run dev
```

## License
MIT License

Copyright (c) 2025 Maarten van den Berg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




