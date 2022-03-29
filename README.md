# gitzip
Zip and download the contents of a subfolder in a private/public repo on demand

# How to

1. Clone this repo
2. Put the files you want to be downloadable in the "dist" folder (can also be the result of a build step, but I should test that)
3. Deploy the repo to Vercel, and set the public folder to "dist" (optional)
4. Visit /api/download to generate and download the zip
