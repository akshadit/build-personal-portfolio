'use client'

import React, { useState, Fragment } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Cpu,
  Download,
  Layers,
  Mail,
  Menu,
  Terminal,
  X,
  MapPin,
  Sparkles,
  Shield,
  Activity,
  GitBranch,
} from 'lucide-react'
import {
  navItems,
  profile,
  projects,
  competencyMatrix,
  systemMetrics,
  liveTelemetryFeed,
  type Project,
  type ProjectCategory,
} from '@/lib/portfolio-data'

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function ProjectCard({
  project,
  expandedArch,
  onToggleArch,
}: {
  project: Project
  expandedArch: boolean
  onToggleArch: () => void
}) {
  return (
    <div className="project-card-shell">
      <article className="project-card">
        <div>
          <div className="project-card-top">
            <span className="project-index">{project.number}</span>
            <div className="project-status-cluster">
              {project.metricBadge && (
                <span className="metric-pill">{project.metricBadge}</span>
              )}
              <span className="project-status-badge">{project.status}</span>
            </div>
          </div>

          <div className="project-card-body">
            <p className="eyebrow">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>

            {project.keyFocus && (
              <div className="project-contribution">
                <strong>Key Focus:</strong> {project.keyFocus}
              </div>
            )}

            {expandedArch && project.architecture && (
              <div className="architecture-box">
                <div className="architecture-box-header">
                  <Cpu size={14} className="text-emerald-400" />
                  <span>Architecture Topology &amp; Concurrency</span>
                </div>
                <p style={{ margin: 0 }}>{project.architecture}</p>

                {project.architecturePipeline && (
                  <div className="pipeline-flow">
                    {project.architecturePipeline.map((node, i) => (
                      <Fragment key={node}>
                        <span className="pipeline-node">{node}</span>
                        {i < project.architecturePipeline.length - 1 && (
                          <span className="pipeline-arrow">➔</span>
                        )}
                      </Fragment>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-footer">
          {project.architecture ? (
            <button
              type="button"
              className="arch-toggle-btn"
              onClick={onToggleArch}
              aria-label={`Toggle architecture breakdown for ${project.name}`}
            >
              <Layers size={12} />
              <span>{expandedArch ? 'Hide Architecture' : 'Inspect Architecture'}</span>
            </button>
          ) : (
            <span />
          )}

          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on ${link.label}`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All')
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    'Matchmint': true, // Keep flagship expanded for immediate technical demonstration
  })

  const categories: { label: ProjectCategory; count: number }[] = [
    { label: 'All', count: projects.length },
    { label: 'Backend & Distributed', count: projects.filter(p => p.domain === 'Backend & Distributed').length },
    { label: 'AI & Knowledge Systems', count: projects.filter(p => p.domain === 'AI & Knowledge Systems').length },
    { label: 'Infrastructure & Tools', count: projects.filter(p => p.domain === 'Infrastructure & Tools').length },
  ]

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true
    return project.domain === selectedCategory
  })

  // Separate flagship when viewing 'All' to create visual layout hierarchy
  const flagshipProject = selectedCategory === 'All' ? projects.find(p => p.number === '01') : null
  const standardProjects = selectedCategory === 'All' ? filteredProjects.filter(p => p.number !== '01') : filteredProjects

  function toggleArch(projectName: string) {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }))
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    event.currentTarget.style.setProperty('--pointer-x', `${x.toFixed(3)}`)
    event.currentTarget.style.setProperty('--pointer-y', `${y.toFixed(3)}`)
  }

  function handlePointerLeave(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--pointer-x', '0')
    event.currentTarget.style.setProperty('--pointer-y', '0')
  }

  return (
    <div
      className="site-shell"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Linear Technical Grid Mask Overlay */}
      <div className="technical-grid-mask" aria-hidden="true" />

      {/* Floating Island Navigation */}
      <div className="site-header-wrapper">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Back to top">
            <span className="wordmark-badge">{profile.callsign}</span>
            <div className="wordmark-text">
              <span>{profile.name}</span>
              <small>SYSTEM ARCHITECT</small>
            </div>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            <span>Get in touch</span>
            <ArrowDown size={12} />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-header">
            <span className="wordmark">
              <span className="wordmark-badge">{profile.callsign}</span>
              <div className="wordmark-text">
                <span>{profile.name}</span>
                <small>SYSTEM ARCHITECT</small>
              </div>
            </span>
            <button
              className="menu-button"
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <p className="eyebrow">Connect Directly</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="button button-ghost"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button button-ghost"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      <main id="top">
        {/* Asymmetrical Command Center Hero Section */}
        <section className="hero section-wrap">
          <div className="hero-grid">
            {/* Hero Left Column: Editorial & Actions */}
            <div>
              <div className="hero-status-pill">
                <span className="status-emerald-pulse" />
                <span className="hero-status-kicker">
                  {profile.status}
                </span>
              </div>

              <h1>
                Engineering <em>resilient</em>
                <br />
                backend systems,
                <br />
                distributed data layers
                <br />
                &amp; agentic workflows.
              </h1>

              <p className="hero-intro-text">{profile.intro}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#systems">
                  <span>Explore Systems</span>
                  <span className="button-icon-pill">
                    <ArrowDown size={13} aria-hidden="true" />
                  </span>
                </a>

                <button
                  type="button"
                  className="button button-ghost"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
                  <span className="button-icon-pill">
                    {copiedEmail ? (
                      <Check size={13} className="text-emerald-400" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </span>
                </button>

                {profile.resume && (
                  <a
                    className="button button-ghost"
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    download
                    aria-label="Download resume PDF"
                  >
                    <span>Resume (PDF)</span>
                    <span className="button-icon-pill">
                      <Download size={13} />
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Hero Right Column: Live Telemetry Terminal Window */}
            <div className="hero-terminal" aria-label="System status telemetry console">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <div className="terminal-title">akr-core // active-services</div>
                <Activity size={13} className="text-emerald-400" />
              </div>

              <div className="terminal-body">
                {liveTelemetryFeed.map((feed) => (
                  <div key={feed.service} className="telemetry-row">
                    <div className="telemetry-left">
                      <span className="telemetry-service">{feed.service}</span>
                      <span className="telemetry-detail">{feed.metric}</span>
                    </div>
                    <div className="telemetry-right">
                      <span className="telemetry-latency">{feed.latency}</span>
                      <span className="telemetry-status-badge">{feed.status}</span>
                    </div>
                  </div>
                ))}

                <div className="terminal-prompt-bar">
                  <span style={{ color: '#64748b' }}>&gt;</span>
                  <span>cluster status: 100% operational · 0 network partitions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated System Metrics Strip */}
          <div className="metrics-strip" aria-label="System engineering benchmarks">
            {systemMetrics.map((metric) => (
              <div key={metric.label} className="metric-column">
                <span className="metric-column-val">{metric.value}</span>
                <span className="metric-column-lbl">{metric.label}</span>
                <span className="metric-column-sub">{metric.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 01 / Architectural Philosophy (Bento Upgrade) */}
        <section id="philosophy" className="section-wrap split-section">
          <div className="section-label">01 // philosophy</div>
          <div className="philosophy-bento">
            {/* Card 1: Core Systems Thesis (Full Width) */}
            <div className="bento-card full-width">
              <div>
                <span className="bento-tag">Core Systems Thesis</span>
                <h3>Solving bottlenecks beneath the surface.</h3>
                <p className="bento-lead-text">{profile.about.lead}</p>
                <p className="bento-sub-text">{profile.about.body1}</p>
              </div>
            </div>

            {/* Card 2: Agentic Workflows */}
            <div className="bento-card">
              <div>
                <span className="bento-tag">Autonomous Systems</span>
                <h3 style={{ fontSize: '18px' }}>Agentic &amp; Local Intelligence</h3>
                <p className="bento-sub-text">{profile.about.body2}</p>
              </div>
            </div>

            {/* Card 3: Engineering Discipline & Personal Note */}
            <div className="bento-card">
              <div>
                <span className="bento-tag">Mindset &amp; Discipline</span>
                <h3 style={{ fontSize: '18px' }}>Tactical Pitch Vision</h3>
                <p className="bento-sub-text">{profile.about.personal}</p>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                  <Shield size={13} className="text-emerald-400" />
                  <span>Defensive discipline · Composure under pressure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / 4-Quadrant Systems Competency Matrix */}
        <section id="competencies" className="section-wrap split-section">
          <div className="section-label">02 // competencies</div>
          <div className="competency-grid">
            {competencyMatrix.map((item) => (
              <div key={item.domain} className="competency-card">
                <div>
                  <div className="competency-header">
                    <h3>{item.domain}</h3>
                    <span className="competency-badge">{item.badge}</span>
                  </div>
                  <p className="competency-desc">{item.description}</p>
                </div>

                <div className="competency-tags">
                  {item.skills.map((skill) => (
                    <span key={skill} className="competency-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 / Selected Systems (Flagship Showcase + Precision Grid) */}
        <section id="systems" className="section-wrap projects-section">
          <div className="section-heading">
            <div>
              <div className="section-label">03 // selected systems</div>
              <h2>
                Systems with
                <br />
                <em>architectural depth.</em>
              </h2>
            </div>
            <p>
              Selected explorations spanning high-throughput WebSocket streaming,
              idempotent payment reconciliation, vector search, and edge AI execution.
            </p>
          </div>

          {/* Filter Tabs with Dynamic Counts */}
          <div className="filter-tabs" role="tablist" aria-label="Filter systems by domain">
            {categories.map((cat) => (
              <button
                key={cat.label}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.label}
                className={`filter-pill ${selectedCategory === cat.label ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.label)}
              >
                <span>{cat.label}</span>
                <span className="pill-count">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Flagship Project 1 (Matchmint) Highlight Banner */}
          {flagshipProject && (
            <div className="flagship-banner-shell">
              <article className="flagship-banner-core">
                <div>
                  <div className="flagship-badge">
                    <Sparkles size={11} /> Flagship Distributed Engine
                  </div>
                  <p className="eyebrow">{flagshipProject.category}</p>
                  <h3 style={{ fontSize: '26px', fontWeight: 800, margin: '6px 0 12px', color: '#f8fafc' }}>
                    {flagshipProject.name}
                  </h3>
                  <p className="project-description" style={{ fontSize: '15px' }}>
                    {flagshipProject.description}
                  </p>

                  <div className="project-contribution" style={{ margin: '18px 0' }}>
                    <strong>Core Architecture:</strong> {flagshipProject.keyFocus}
                  </div>

                  <div className="tag-list">
                    {flagshipProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <a
                      href={flagshipProject.links[0]?.href}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-primary"
                    >
                      <span>Inspect Repository</span>
                      <span className="button-icon-pill">
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flagship-diagram-panel">
                  <div>
                    <div className="architecture-box-header">
                      <Cpu size={14} className="text-emerald-400" />
                      <span>Live WebSocket &amp; ACID Concurrency Topology</span>
                    </div>
                    <p style={{ margin: '8px 0 16px', fontSize: '13px', lineHeight: 1.6, color: '#94a3b8' }}>
                      {flagshipProject.architecture}
                    </p>
                  </div>

                  <div className="pipeline-flow">
                    {flagshipProject.architecturePipeline.map((node, i) => (
                      <Fragment key={node}>
                        <span className="pipeline-node">{node}</span>
                        {i < flagshipProject.architecturePipeline.length - 1 && (
                          <span className="pipeline-arrow">➔</span>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Standard Projects Grid */}
          <div className="projects-grid">
            {standardProjects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                expandedArch={Boolean(expandedProjects[project.name])}
                onToggleArch={() => toggleArch(project.name)}
              />
            ))}
          </div>
        </section>

        {/* 04 / Open Source Repositories Bento */}
        <section id="opensource" className="section-wrap github-section">
          <div className="section-label">04 // open source</div>
          <div className="opensource-grid">
            {/* Left Card: GitHub Overview */}
            <div className="github-main-card">
              <div>
                <Code2 className="github-mark" aria-hidden="true" />
                <h3>Code on GitHub</h3>
                <p>
                  Audit code commits, database schemas, pull requests, and ongoing
                  system explorations on my official profile.
                </p>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a
                  className="button button-primary"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Visit @AkShAdIt</span>
                  <span className="button-icon-pill">
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right List: Direct Repositories */}
            <div className="repo-mini-list">
              <a
                href="https://github.com/AkShAdIt/Matchmint"
                target="_blank"
                rel="noreferrer"
                className="repo-mini-card"
              >
                <div>
                  <span className="repo-mini-title">
                    <GitBranch size={13} className="text-emerald-400" />
                    Matchmint
                  </span>
                  <p className="repo-mini-desc">Real-time WebSocket tournament engine</p>
                </div>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>

              <a
                href="https://github.com/AkShAdIt/Paysure"
                target="_blank"
                rel="noreferrer"
                className="repo-mini-card"
              >
                <div>
                  <span className="repo-mini-title">
                    <GitBranch size={13} className="text-emerald-400" />
                    Paysure
                  </span>
                  <p className="repo-mini-desc">Fintech payment verification &amp; idempotency</p>
                </div>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>

              <a
                href="https://github.com/AkShAdIt/Sakhi"
                target="_blank"
                rel="noreferrer"
                className="repo-mini-card"
              >
                <div>
                  <span className="repo-mini-title">
                    <GitBranch size={13} className="text-emerald-400" />
                    Sakhi
                  </span>
                  <p className="repo-mini-desc">Offline-first voice agent with local LLM</p>
                </div>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>
            </div>
          </div>
        </section>

        {/* 05 / Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner">
            <div className="section-label">05 // contact</div>
            <div>
              <h2>
                Let&apos;s engineer
                <br />
                <em>something reliable.</em>
              </h2>
              <p>
                Currently seeking 2026 backend engineering and AI systems
                internships. Always open to discussing distributed architectures,
                high-concurrency APIs, or interesting technical problems.
              </p>

              <div className="contact-links">
                {/* Email with Copy Option */}
                <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="contact-card-btn"
                  >
                    <Mail size={15} />
                    <span>{profile.email}</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="contact-card-btn"
                    style={{ padding: '12px 14px' }}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check size={15} className="text-emerald-400" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-btn"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={13} />
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-btn"
                >
                  <Code2 size={15} />
                  <span>GitHub (@AkShAdIt)</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                <MapPin size={13} className="text-emerald-400" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer section-wrap">
        <span>© 2026 {profile.name} · Backend &amp; Distributed Systems</span>
        <span>Engineered with Next.js, TypeScript &amp; Tailwind CSS</span>
      </footer>
    </div>
  )
}
