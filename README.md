# gitzip
Zip and download the contents of a subfolder in a private/public repo on demand

# How to

1. Clone this repo
2. Put the files you want to be downloadable in the "dist" folder. You can also dynamically add files at runtime (see api/download.js). I've not yet been able to figure out how to add files that are the result of a build step.
3. Deploy the repo to Vercel.
4. Visit /api/download to generate and download the zip

The 'dist' folder is private by default, so people can only access the files by downloading the zip. You can however set the 'dist' folder to be the public folder in Vercel.
