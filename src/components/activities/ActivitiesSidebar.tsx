'use client';

import { activities } from '@/lib/activities-data';

export function ActivitiesSidebar() {
  return (
    <>
      {/* Mobile: horizontal scrollable chips */}
      <nav className="lg:hidden -mx-4 overflow-x-auto px-4 pb-2">
        <ul className="flex gap-2 whitespace-nowrap">
          {activities.map((activity) => (
            <li key={activity.slug}>
              <a
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-[#0561ab] bg-[#0561ab] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#044a8a] transition-colors"
              >
                {activity.navLabel}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop: vertical list */}
      <nav className="hidden border-r border-gray-200 pr-6 lg:block">
        <ul className="space-y-1">
          {activities.map((activity) => (
            <li key={activity.slug} className="relative group">
              <a
                href={activity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-right py-2.5 text-sm leading-snug font-semibold text-[#0561ab] hover:text-[#044a8a] transition-colors"
              >
                {activity.navLabel.toUpperCase()}
              </a>
              <span className="absolute right-[-25px] top-1/2 h-6 -translate-y-1/2 border-r-2 border-[#0561ab]" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}