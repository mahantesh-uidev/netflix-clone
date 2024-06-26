# Netflix Clone

- Create React App 
- Configured TailwindCSS
- Header
- Routing of APP
- Login Form
- Sign Up Form
- Form Validation
- useRef hook
- firebase setup
- deploying our app to production
- Create Sign Up User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Signout feature
- Update Profile
- BugFix: Sign Up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to constants file.
- Register TMDB API and create an app and get access token.
- Get Data from TMDB now playing movies list API.
- Custom Hook for Now Playing Movies.
- Create Movie Slice.
- Update the store with the data.
- Planning for MainContainer and SecondaryContainer.
- Fetch Data for Trailer Video.
- Update store with Trailer video data.
- Embedded youtube video and make it autoplay and mute.
- Tailwind Classes to make Main Container look awesome.
- Build Secondary Container with movie list.
- Build MovieList
- Build MovieCard
- TMDB Image CDN URL.
- Custom hook for popular movies (usePopularMovies).
- Made the browse page amazing with Tailwind CSS.
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language feature in our App.
- Get Open AI API key
- GPT Movie Suggestions Page using platform.openai's API and TMDB.
- Reusability of MovieList component for the movieSuggestions UI.
- created gptSlice to store gptSerachResults into the Redux Store.
- Memoization
- Securing API keys using .env file so that the keys cannot get exposed.
- Adding .env file to gitignore
- Made the site Responsive.

# Features
- Login/Sign UP
    - Sign In/Sign Up Form
    - Redirect to Browse Page
- Browse Page (After Authentication)
    - Header
    - Main Movie
        - Title In Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions

# Responsive guidelines using Tailwind CSS

bg-black: default styles for mobile screen, 
sm:bg-blue-900 styles for for tablet screen and 
md:bg-green-900 for laptops n desktops. 