{
    "version": 2,
    "builds": [
      {
        "src": "src/index.js",
        "use": "@vercel/static-build"
      }
    ],
    "routes": [
      {
        "src": "/assets/(.*)",
        "dest": "src/assets/$1"
      }
    ]
  }