import Link from "next/link"
import { Shield, Linkedin, Github, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Phuntsho Wangchuk</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              IT Security Professional & Network Administrator with 5+ years of experience.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/phuntshok-wangdruk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/wangdruk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17dymnTVM7/?mibextid=wwXIfrL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/druk__yul_?igsh=MXVzZzg4eml5M2JuZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:bhutan.infotech@gmail.com" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                  <span>📧</span> bhutan.infotech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+61415827848" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                  <span>📱</span> +61 415 827 848
                </a>
              </li>
              <li>
                <span className="text-muted-foreground flex items-center gap-2">
                  <span>📍</span> Australia
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/tools" className="text-muted-foreground hover:text-foreground">
                  Security Tools
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-muted-foreground hover:text-foreground">
                  Security Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/checklists" className="text-muted-foreground hover:text-foreground">
                  Security Checklists
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Phuntsho Wangchuk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
