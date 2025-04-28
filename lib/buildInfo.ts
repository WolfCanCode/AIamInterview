export function getBuildVersion() {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA || 'local';
  return sha.slice(0, 7);
}
