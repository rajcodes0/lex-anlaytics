import React, { useState } from 'react'
import { getRiskBadgeClass } from '../../utils/formatters'

export default function ClauseTable({ clauses }) {
  const [expanded, setExpanded] = useState({})

  if (!clauses?.length) return null

  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 16,
      }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700 }}>
          Full Clause Breakdown
        </h3>
        <div style={{ display: 'flex', gap: 12, fontSize: 11, color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--risk-green)', display: 'inline-block' }} />
            Favorable
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--risk-yellow)', display: 'inline-block' }} />
            Caution
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--risk-red)', display: 'inline-block' }} />
            Critical
          </span>
        </div>
      </div>

      <div className="clause-table-container">
        {/* Header */}
        <div className="clause-table-header">
          <span>Clause Type</span>
          <span>Plain English Reality</span>
          <span>Risk Level</span>
        </div>

        {clauses.map((clause, i) => (
          <div key={i} className="clause-table-row">
            <div className="clause-table-cell-type">
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{clause.title}</div>
              {clause.originalText && (
                <div>
                  <div style={{
                    fontSize: 12,
                    color: 'var(--text-muted)',
                    overflow: 'hidden',
                    maxHeight: expanded[i] ? 'none' : '40px',
                  }}>
                    {clause.originalText}
                  </div>
                  {clause.originalText.length > 80 && (
                    <button onClick={() => setExpanded(p => ({ ...p, [i]: !p[i] }))}
                      style={{ fontSize: 11, color: 'var(--accent-light)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 2 }}>
                      {expanded[i] ? 'Show less' : 'Expand'}
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="clause-table-cell-explanation" style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {clause.plainExplanation}
              {clause.riskReason && (
                <div style={{ marginTop: 4, fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  {clause.riskReason}
                </div>
              )}
            </div>
            <div className="clause-table-cell-risk">
              <span className={`badge ${getRiskBadgeClass(clause.riskLevel)}`}>
                {clause.riskLevel || 'N/A'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
