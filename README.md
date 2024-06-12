# Spotify-clone
A Spotify-like application where you can listen to music, upload songs and add them to your favourites!

App live here: [spotify-clone-jb.vercel.app](https://spotify-clone-jb.vercel.app/)

## Table of Contents
- [Installation](#instalation)
- [Features](#features)
- [Technologies used](#technologies-used)
- [Contact](#contact)

## Instalation
1. Clone the repository:

    ```
    git clone https://github.com/jakub-bartoszek/spotify-clone.git
    cd spotify-clone
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Set up environment variables:
    ```
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
    SUPABASE_SERVICE_ROLE_KEY=
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
    STRIPE_SECRET_KEY=
    STRIPE_WEBHOOK_SECRET=
    ```
4. Run the development server:
   ```
   npm run dev
   ```

## Features
### 1. Songs
   - Upload songs (Premium users only)
   - Setting name, author and cover of the song 
   - Adding song to favourites

### 2. Player
   - Play/Pause
   - Skip to next/previous
   - Volume change
   - Time slider

### 3. Library
   - Storing your uploaded songs

### 4. Search
   - Searching for songs by title

## Technologies Used
### Core Technologies
- React
- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase
- Stripe
### Libraries and UI Components 
- Howler
- Tailwind merge
- React Hook Form
- Lucide React Components
- Radix UI
### Other Utilities and Tools
- Zustand
- uniqid

## Contact
For issues, questions, or suggestions, please open an issue in the repository or contact:

Email: jakub.bartoszek.dev@gmail.com

GitHub: [jakub-bartoszek](https://github.com/jakub-bartoszek)
