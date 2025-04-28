export function getBuildVersion() {
  const sha = process.env.VERCEL_DEPLOYMENT_ID || 'local';
  return sha;
}
