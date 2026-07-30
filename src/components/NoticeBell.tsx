'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Bell, X } from 'lucide-react';
import { getActiveNotices, Notice } from '@/lib/supabase/notices';

const LAST_SEEN_KEY = 'ssrvm_notices_last_seen';

export default function NoticeBell() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getActiveNotices(8).then((data) => {
      setNotices(data);
      const lastSeen = localStorage.getItem(LAST_SEEN_KEY);
      const lastSeenTime = lastSeen ? new Date(lastSeen).getTime() : 0;
      const unread = data.filter((n) => new Date(n.created_at).getTime() > lastSeenTime).length;
      setUnreadCount(unread);
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        localStorage.setItem(LAST_SEEN_KEY, new Date().toISOString());
        setUnreadCount(0);
      }
      return next;
    });
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={toggleOpen}
        aria-label="Notices"
        className="relative p-2 md:p-2.5 text-[#2f3192] hover:bg-[#2f3192]/10 rounded-full transition-colors"
      >
        <Bell size={20} className="md:w-6 md:h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold ring-2 ring-white">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
          <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-50">
            <h4 className="font-semibold text-sm text-gray-800">Notices</h4>
            <button onClick={() => setIsOpen(false)}>
              <X size={16} className="text-gray-400 hover:text-gray-600" />
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notices.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">No notices right now.</p>
            ) : (
              notices.map((n) => (
                <Link
                  key={n.id}
                  href="/notices"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 border-b last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <p className="text-sm font-medium text-gray-800 line-clamp-1">{n.title}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{n.description}</p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    {new Date(n.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  </p>
                </Link>
              ))
            )}
          </div>

          <Link
            href="/notices"
            onClick={() => setIsOpen(false)}
            className="block text-center py-2.5 text-sm font-medium text-[#183a6e] hover:bg-gray-50 border-t"
          >
            View All Notices
          </Link>
        </div>
      )}
    </div>
  );
}