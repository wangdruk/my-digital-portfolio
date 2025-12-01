const { Pool } = require('pg')
require('dotenv').config()

// Post content (original summary written by assistant)
const title = "November 2025: Major Cyber Attacks, Ransomware Attacks, Data Breaches"
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

const excerpt = `A concise roundup of November 2025's most significant cyber incidents: large-scale data breaches, disruptive ransomware and supply-chain attacks, plus key lessons for defenders.`

const content = `November 2025 saw a wave of high-impact cyber incidents affecting governments, universities, major enterprises and critical infrastructure. Notable events included large-scale data breaches at academic institutions and media organisations, a high‑value DeFi protocol exploit that drained over $100M, and widespread exploitation of third‑party software leading to supply‑chain compromises.

Across the month several patterns stood out: (1) supply‑chain and third‑party risk remained a primary vector for attackers; (2) threat actors increasingly focused on silent data exfiltration as opposed to overt ransomware encryption; and (3) detection and response times often lagged behind attacker activity, amplifying operational impact. These developments reinforce the need for proactive third‑party risk management, tighter identity and access controls, and a focus on rapid detection and containment.

This summary is an original condensation of the public report at Cyber Management Alliance (link below). For complete details and individual incidents, see the source article linked at the end.

Source: Cyber Management Alliance — https://www.cm-alliance.com/cybersecurity-blog/november-2025-major-cyber-attacks-ransomware-attacks-data-breaches`

const coverImage = 'https://www.cm-alliance.com/hs-fs/hubfs/Nov_2025_RCA_with_bgc.webp?width=1170&name=Nov_2025_RCA_with_bgc.webp'
const author = 'Cyber Management Alliance (summary)'
const readTime = '6 min'

async function insertPost() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL not set in environment. Aborting.')
    process.exit(1)
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const client = await pool.connect()
  try {
    const insertSql = `INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, author, read_time) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, slug`
    const values = [title, slug, excerpt, content, coverImage, author, readTime]
    const res = await client.query(insertSql, values)
    console.log('Inserted blog post:', res.rows[0])
  } catch (err) {
    console.error('Error inserting post:', err)
    process.exitCode = 1
  } finally {
    client.release()
    await pool.end()
  }
}

insertPost()
