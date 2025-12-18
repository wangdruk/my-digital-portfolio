export const metadata = { title: 'AI Security and Neon MCP' }

export default function Page() {
  return (
    <main style={{padding: '2rem', fontFamily: 'Inter, system-ui, -apple-system'}}>
      <h1>AI Security and Neon MCP</h1>
      <p>
        This post outlines key considerations for securing AI systems and an overview of how
        Neon MCP (Managed Control Plane) can help manage credentials and connections securely.
      </p>

      <h2>Why AI Security Matters</h2>
      <ul>
        <li>Protect training and inference data from leakage.</li>
        <li>Enforce access controls for model endpoints and pipelines.</li>
        <li>Audit and monitor model behavior for abuse or drift.</li>
      </ul>

      <h2>Neon MCP and Secure Database Access</h2>
      <p>
        Neon MCP helps centralize and manage database configuration and access. Use environment
        variables and secret stores (not plaintext files) for production deployments.
      </p>

      <h3>Database URL (included per author request)</h3>
      <pre style={{background: '#0b1220', color: '#d6e6ff', padding: '1rem', overflowX: 'auto'}}>
        {`DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require`}
      </pre>

      <h2>Recommendations</h2>
      <ul>
        <li>Rotate credentials frequently and use short-lived tokens where possible.</li>
        <li>Use a secret manager (GitHub Secrets, Vault) for CI/CD and deployments.</li>
        <li>Limit DB permissions to least-privilege roles for AI workloads.</li>
      </ul>

      <p>
        If you&apos;d like, I can redact the URL, add an example file (`.env.example`), or add
        `.env` to `.gitignore` and move secrets to a secure store.
      </p>
    </main>
  )
}
