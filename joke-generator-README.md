# Random Joke Generator

A standalone random joke generator for Shawnovision. It uses the public [JokeAPI](https://jokeapi.dev/) endpoint and requires no API key or build step.

## Run it

Open [`joke-generator.html`](./joke-generator.html) in a browser, or serve the repository with any local static server:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000/joke-generator.html`.

The page enables JokeAPI safe mode, handles loading and API errors, and includes a copy-to-clipboard action.
