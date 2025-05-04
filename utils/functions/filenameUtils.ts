export function sanitizeFilename(input: string) {
  return input.replace(/[^a-zA-Z0-9-_]/g, '_');
}

export function generateMockInterviewFilename({
  domain,
  child,
  difficulty,
  date = new Date(),
}: {
  domain?: string | null;
  child?: string | null;
  difficulty?: string | null;
  date?: Date;
}) {
  let filename = 'mock-interview-result';
  if (domain) {
    filename += `-${sanitizeFilename(domain)}`;
  }
  if (child) {
    filename += `-${sanitizeFilename(child)}`;
  }
  if (difficulty) {
    filename += `-${sanitizeFilename(difficulty)}`;
  }
  filename += `-${date.toISOString().split('T')[0]}.txt`;
  return filename;
}
