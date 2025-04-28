export function getBuildVersion() {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA;
  return sha;
}
